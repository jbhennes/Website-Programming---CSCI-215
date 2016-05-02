var timerID;

// Define variables
var play = false;
var index = (0);
var I = new Array();
I[0] = 'http://munsellb.people.cofc.edu/img/duke/T1.gif';
I[1] = 'http://munsellb.people.cofc.edu/img/duke/T2.gif';
I[2] = 'http://munsellb.people.cofc.edu/img/duke/T3.gif';
I[3] = 'http://munsellb.people.cofc.edu/img/duke/T4.gif';
I[4] = 'http://munsellb.people.cofc.edu/img/duke/T5.gif';
I[5] = 'http://munsellb.people.cofc.edu/img/duke/T6.gif';
I[6] = 'http://munsellb.people.cofc.edu/img/duke/T7.gif';
I[7] = 'http://munsellb.people.cofc.edu/img/duke/T8.gif';
I[8] = 'http://munsellb.people.cofc.edu/img/duke/T9.gif';
I[9] = 'http://munsellb.people.cofc.edu/img/duke/T10.gif';
I[10] = 'http://munsellb.people.cofc.edu/img/duke/T11.gif';
I[11] = 'http://munsellb.people.cofc.edu/img/duke/T12.gif';
I[12] = 'http://munsellb.people.cofc.edu/img/duke/T13.gif';
I[13] = 'http://munsellb.people.cofc.edu/img/duke/T14.gif';
I[14] = 'http://munsellb.people.cofc.edu/img/duke/T15.gif';
I[15] = 'http://munsellb.people.cofc.edu/img/duke/T16.gif';
I[16] = 'http://munsellb.people.cofc.edu/img/duke/T17.gif';



function startTimer() {
    
    timerID=setInterval( animate, 200);
    
}

// Define action function

function action(evt){
    if (evt == (0)){
        play = true;
    } else if (evt == (1)) {
        play = false;
    } else {
        play = false;
        index = (0);
    }
}
function animate() {
    
    if ( play == true ) {
        
        var url = 'url(' + I[index] + ')';
        
        document.getElementById('animate').style.backgroundImage=url;

        // Your code goes here
        index = index + 1;
        if ( index == I.length ) {
            index = (0);
        }

    }
    
}