let actualPotraitPage = 0
let actualLandscapePage = 0
let maxPotraitPage=3;
window.onload = resize;
window.onresize = resize;


function flipLandscape(){
    
    if (actualLandscapePage===0) {
        
        document.getElementById("flipPageLandscape").classList.toggle("pageFlip")
        document.getElementById("fwdbtnLandscape").classList.add("notVisibleWithOpacity")
        document.getElementById("bwdbtnLandscape").classList.remove("notVisibleWithOpacity")
        actualLandscapePage=1

    }else{
        document.getElementById("flipPageLandscape").classList.toggle("pageFlip")
        document.getElementById("fwdbtnLandscape").classList.remove("notVisibleWithOpacity")
        document.getElementById("bwdbtnLandscape").classList.add("notVisibleWithOpacity")
        actualLandscapePage=0

    }
	
}

function flipPotrait(e){
    if(e==="forward"){
        document.getElementById("p" + actualPotraitPage + "_potrait").classList.toggle("pageFlipPotrait");
        console.log(e);
        actualPotraitPage++;
        document.getElementById("backbtnPotrait").classList.remove("notVisibleWithOpacity");    
        if(actualPotraitPage===maxPotraitPage){
            document.getElementById("fwdbtnPotrait").classList.add("notVisibleWithOpacity");    
        }
        
    }else if(e==="backward"){
        document.getElementById("p" + (actualPotraitPage - 1) + "_potrait").classList.toggle("pageFlipPotrait");
        console.log(e);
        actualPotraitPage--;
        document.getElementById("fwdbtnPotrait").classList.remove("notVisibleWithOpacity");
        if(actualPotraitPage===0){
            document.getElementById("backbtnPotrait").classList.add("notVisibleWithOpacity");    
        }
    }
}


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