const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//init mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open",()=> {
    console.log("Mongo DB database connection established successfully");
})

// participant schema
const participantSchema = new mongoose.Schema({
  name: String,
  present: String,
  email: String,
  follower: String,
  notes: String,
  updated: { type: Date, default: Date.now }

});
const Participant = mongoose.model("Participant", participantSchema);
// #################

app.get("/", function(req, res) {
  res.render("index", {text:"Szeretnénk megkérni, hogy részvételi szándékod legkésőbb 2021.06.13-ig jelezd!" });

});
app.post("/participant", function(req, res) {

  const participant = req.body.ParticipantName;
  const bethere = req.body.there;
  const emailAddress = req.body.ParticipantEmail;
  const followers = req.body.ParticipantFollowers;
  const note = req.body.ParticipantNote;
  const currentDate= new Date;
  const newParticipant = new Participant ({
    name: participant,
    present: bethere,
    email: emailAddress,
    follower: followers,
    notes: note,
    updated: currentDate
  });
  
  Participant.findOne({ name: participant }, function(err, found){
      if (err){
        console.log("MONGOd Error");
      }else
      if (found){
        console.log("found");
        Participant.deleteOne({ name: participant }, function(err, found){
          if (err){
            console.log("deletion error");
          }else{
            newParticipant.save(function(err,doc){
              if(err){
                console.log("Saving error");
              }else{
              res.render("index", { text:"Visszajelzésed frissítettük"});
              }
          });}

        })
      }else{
        console.log("new member");
        newParticipant.save(function(err,doc){
          if(err){console.log("Saving error");}
        });
        res.render("index", { text:"Köszönjük, hogy visszajeleztél."});
      }
  });
})

app.get("/*", function(req, res) {
  res.redirect("/");
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
