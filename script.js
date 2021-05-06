let actualPotraitPage = 0
let actualLandscapePage = 0
let maxPotraitPage=3;
window.onload = resize;
window.onresize = resize;
function flippedLandscape(){
    document.getElementById("flipPageLandscape").classList.add("pageFlip")
    document.getElementById("fwdbtnLandscape").classList.add("notVisibleWithOpacity")
    document.getElementById("bwdbtnLandscape").classList.remove("notVisibleWithOpacity")
}
function unflippedLandscape(){
    document.getElementById("flipPageLandscape").classList.remove("pageFlip")
    document.getElementById("fwdbtnLandscape").classList.remove("notVisibleWithOpacity")
    document.getElementById("bwdbtnLandscape").classList.add("notVisibleWithOpacity")
}
function flipLandscape(){
    if (actualLandscapePage===0) {
        flippedLandscape()
        actualLandscapePage=1
        actualPotraitPage=3//jump directly to fillform on potrait
    }else{
        unflippedLandscape()
        actualLandscapePage=0
        actualPotraitPage=0//jump directly to the beginning on potrait
    }
}

function flipPotrait(e){
    if(e==="forward"){
        document.getElementById("p" + actualPotraitPage + "_potrait").classList.toggle("pageFlipPotrait");
        actualPotraitPage++;
        document.getElementById("backbtnPotrait").classList.remove("notVisible");    
        if(actualPotraitPage>=maxPotraitPage){
            document.getElementById("fwdbtnPotrait").classList.add("notVisible");    
        }
        if(actualPotraitPage>1){
            flippedLandscape()
            actualLandscapePage=1 //jump to second page of landscape
        }

    }else if(e==="backward"){
        document.getElementById("p" + (actualPotraitPage - 1) + "_potrait").classList.toggle("pageFlipPotrait");
        actualPotraitPage--;
        document.getElementById("fwdbtnPotrait").classList.remove("notVisible");
        if(actualPotraitPage<=0){
            document.getElementById("backbtnPotrait").classList.add("notVisible");    
        }
        if(actualPotraitPage<2){
            unflippedLandscape()
            actualLandscapePage=0 //jump to the beginning of the landscape
        }
    }
}


function resize(){
    var landScapeElements = document.getElementsByClassName("landscape")
	var potraitElements = document.getElementsByClassName("potrait")
    if(screen.availHeight > screen.availWidth){//potrait
        if(actualPotraitPage===0){
            document.getElementById("p0_potrait").classList.remove("pageFlipPotrait");
            document.getElementById("p1_potrait").classList.remove("pageFlipPotrait");
            document.getElementById("p2_potrait").classList.remove("pageFlipPotrait");
        }else if(actualPotraitPage===1){
            document.getElementById("p0_potrait").classList.add("pageFlipPotrait");
            document.getElementById("p1_potrait").classList.remove("pageFlipPotrait");
            document.getElementById("p2_potrait").classList.remove("pageFlipPotrait");
        }else if(actualPotraitPage===2){
            document.getElementById("p0_potrait").classList.add("pageFlipPotrait");
            document.getElementById("p1_potrait").classList.add("pageFlipPotrait");
            document.getElementById("p2_potrait").classList.remove("pageFlipPotrait");
        }else if(actualPotraitPage===3){
            document.getElementById("p0_potrait").classList.add("pageFlipPotrait");
            document.getElementById("p1_potrait").classList.add("pageFlipPotrait");
            document.getElementById("p2_potrait").classList.add("pageFlipPotrait");
        }
        Array.from(landScapeElements).forEach((el) => {
			el.classList.add("notVisible")
		});
		Array.from(potraitElements).forEach((el) => {
			el.classList.remove("notVisible")
		});
        document.getElementById("col2").style.width="100%"
	}
    else{//landscape
        if(actualLandscapePage===1){
            flippedLandscape()
        }else{
            unflippedLandscape()
        }
		Array.from(landScapeElements).forEach((el) => {
			el.classList.remove("notVisible")
		}); 
		Array.from(potraitElements).forEach((el) => {
			el.classList.add("notVisible")
		});
        document.getElementById("col2").style.width="50%"
    }
   
}