let actualPotraitPage = 0
let actualLandscapePage = 0

window.onload = resize;

function flipLandscape(){
    
    if (actualLandscapePage===0) {
        
        document.getElementById("flipPageLandscape").classList.toggle("pageFlip")
        document.getElementById("fwdbtnLandscape").classList.add("notVisibleWithOpacity")
        document.getElementById("bwdbtnLandscape").classList.remove("notVisibleWithOpacity")
        actualLandscapePage=1
        actualPotraitPage=3
    }else{
        document.getElementById("flipPageLandscape").classList.toggle("pageFlip")
        document.getElementById("fwdbtnLandscape").classList.remove("notVisibleWithOpacity")
        document.getElementById("bwdbtnLandscape").classList.add("notVisibleWithOpacity")
        actualLandscapePage=0
        actualPotraitPage=0
    }
	
}

function flipPotrait(e){
    document.getElementById("p0_potrait").classList.toggle("pageFlip");
    console.log(e);
}

window.onresize = resize;
function resize(){
    var landScapeElements = document.getElementsByClassName("landscape")
	var potraitElements = document.getElementsByClassName("potrait")
    if(screen.availHeight > screen.availWidth){
        Array.from(landScapeElements).forEach((el) => {
			el.classList.add("notVisible")
			
		});
		Array.from(potraitElements).forEach((el) => {
			el.classList.remove("notVisible")
			
		});
        document.getElementById("col2").style.width="100%"
	}
    else{
		Array.from(landScapeElements).forEach((el) => {
			el.classList.remove("notVisible")
		});
		Array.from(potraitElements).forEach((el) => {
			el.classList.add("notVisible")
		});
        document.getElementById("col2").style.width="50%"
    }
   
}