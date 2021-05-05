window.onload = resize;

function myFunction(){
    document.getElementById("bal").classList.toggle("page1Flipped")
}

window.onresize = resize;
function resize(){
    
    if(screen.availHeight > screen.availWidth){
        //potrait
        document.getElementById("landscape_cover").classList.add("notVisible")
        document.getElementById("landscape_menetrend").classList.add("notVisible")
        document.getElementById("backbtnPotrait").classList.remove("notVisible")
        
        
        document.getElementById("col2").style.width="100%"
        
    }
    if(screen.availHeight < screen.availWidth){
        document.getElementById("landscape_cover").classList.remove("notVisible")
        document.getElementById("landscape_menetrend").classList.remove("notVisible")
        document.getElementById("backbtnPotrait").classList.add("notVisible")
        document.getElementById("col2").style.width="50%"
    }
    // Announce the new orientation number
    
}