var toggle = false;

function edit() {
    
    document.getElementsByName("blog_txt")[0].disabled=toggle;
    
    toggle = !toggle;
    
    if ( toggle ) {
        
        document.getElementById("bttn").innerHTML='- Save';
        
    } else {
        
       document.getElementById("bttn").innerHTML='+ Edit';
        
    }
    
}