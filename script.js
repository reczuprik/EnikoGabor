window.onload = resize;

function flipLandscape(){
    document.getElementById("bal").classList.toggle("page1Flipped")
	
}

window.onresize = resize;
function resize(){
    var landScapeElements = document.getElementsByClassName("landscape")
	var potraitElements = document.getElementsByClassName("potrait")
    if(screen.availHeight > screen.availWidth){
        //potrait
        /* document.getElementById("landscape_cover").classList.add("notVisible")
        document.getElementById("landscape_menetrend").classList.add("notVisible")
        document.getElementById("backbtnPotrait").classList.remove("notVisible") */
        
        
		Array.from(landScapeElements).forEach((el) => {
			// Do stuff here
			el.classList.add("notVisible")
			
		});
		Array.from(potraitElements).forEach((el) => {
			// Do stuff here
			el.classList.remove("notVisible")
			
		});
        document.getElementById("col2").style.width="100%"
	}
    else{
		Array.from(landScapeElements).forEach((el) => {
			// Do stuff here
			el.classList.remove("notVisible")
			
		});
		Array.from(potraitElements).forEach((el) => {
			// Do stuff here
			el.classList.add("notVisible")
			
		});
        /* document.getElementById("landscape_cover").classList.remove("notVisible")
        document.getElementById("landscape_menetrend").classList.remove("notVisible")
        document.getElementById("backbtnPotrait").classList.add("notVisible") */
        document.getElementById("col2").style.width="50%"
    }
    // Announce the new orientation number
    
}