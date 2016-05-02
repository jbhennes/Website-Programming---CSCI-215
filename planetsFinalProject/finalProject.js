//JavaScript Document

var window;
var document;
var Image;

var planets = document.getElementsByName('planet'); // accessing DOM to get the radio buttons contained in the html 

var mercuryText = "Mercury is the smallest and closest to the Sun of the eight planets in the Solar System, with an orbital period of about 88 Earth days. Seen from Earth, it appears to move around its orbit in about 116 days, which is much faster than any other planet. This rapid motion may have led to it being named after the Roman deity Mercury, the fast-flying messenger to the gods. <br> Because it has almost no atmosphere to retain heat, the surface of Mercury experiences the greatest temperature variation of all the planets, ranging from 100 K (−173 °C; −280 °F) at night to 700 K (427 °C; 800 °F) during the day at some equatorial regions. The poles are constantly below 180 K (−93 °C; −136 °F). Mercury's axis has the smallest tilt of any of the Solar System's planets (about 1⁄30 of a degree), but it has the largest orbital eccentricity.[a] As such it does not experience seasons in the same way as most other planets such as Earth. At aphelion, Mercury is about 1.5 times as far from the Sun as it is at perihelion.";

var venusText = "Venus is a terrestrial planet and is sometimes called Earth's 'sister planet' because of their similar size, gravity, and bulk composition (Venus is both the closest planet to Earth and the planet closest in size to Earth). However, it has also been shown to be very different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is 92 times that of Earth's. <br> With a mean surface temperature of 735 K (462 °C; 863 °F), Venus is by far the hottest planet in the Solar System. It has no carbon cycle to lock carbon back into rocks and surface features, nor does it seem to have any organic life to absorb it in biomass. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. Venus may have possessed oceans in the past, but these would have vaporized as the temperature rose due to a runaway greenhouse effect. The water has most probably photodissociated, and, because of the lack of a planetary magnetic field, the free hydrogen has been swept into interplanetary space by the solar wind. Venus's surface is a dry desertscape interspersed with slab-like rocks and periodically refreshed by volcanism.";

var earthText = "Earth orbits the Sun at an average distance of about 150 million kilometers every 365.2564 mean solar days, or one sidereal year. From Earth, this gives an apparent movement of the Sun eastward with respect to the stars at a rate of about 1°/day, which is one apparent Sun or Moon diameter every 12 hours. Due to this motion, on average it takes 24 hours—a solar day—for Earth to complete a full rotation about its axis. The Moon revolves with the Earth around a common barycenter every 27.32 days relative to the background stars. When combined with the Earth–Moon system's common revolution around the Sun, the period of the synodic month, from new moon to new moon, is 29.53 days. Viewed from the celestial north pole, the motion of Earth, the Moon and their axial rotations are all counterclockwise. <br> The orbital and axial planes are not precisely aligned: Earth's axis is tilted some 23.4 degrees from the perpendicular to the Earth–Sun plane (the ecliptic), and the Earth–Moon plane is tilted up to ±5.1 degrees against the Earth–Sun plane. Without this tilt, there would be an eclipse every two weeks, alternating between lunar eclipses and solar eclipses. The 'Hill sphere', or gravitational sphere of influence, of the Earth is about 1.5 Gm or 1,500,000 km in radius. This is the maximum distance at which the Earth's gravitational influence is stronger than the more distant Sun and planets. Objects must orbit the Earth within this radius, or they can become unbound by the gravitational perturbation of the Sun.";

var marsText = "Mars is the fourth planet from the Sun and the second smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often described as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the volcanoes, valleys, deserts, and polar ice caps of Earth. The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, as is the tilt that produces the seasons. <br> Mars is the site of Olympus Mons, the second highest known mountain within the Solar System (the tallest on a planet), and of Valles Marineris, one of the largest canyons. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two known moons, Phobos and Deimos, which are small and irregularly shaped.";

var jupiterText = "Jupiter is the fifth planet from the Sun and the largest planet in the Solar System. It is a gas giant with mass one-thousandth of that of the Sun but is two and a half times the mass of all the other planets in the Solar System combined. Jupiter is classified as a gas giant along with Saturn, Uranus and Neptune. Together, these four planets are sometimes referred to as the Jovian or outer planets. The planet was known by astronomers of ancient times, and was associated with the mythology and religious beliefs of many cultures. The Romans named the planet after the Roman god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough to cast shadows, and making it on average the third-brightest object in the night sky after the Moon and Venus. (Mars can briefly match Jupiter's brightness at certain points in its orbit.)";

var saturnText = "Saturn is the sixth planet from the Sun and the second largest planet in the Solar System, after Jupiter. Named after the Roman god of agriculture, its astronomical symbol (♄) represents the god's sickle. Saturn is a gas giant with an average radius about nine times that of Earth. While only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive. <br> Saturn's interior is probably composed of a core of iron, nickel and rock (silicon and oxygen compounds), surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium and an outer gaseous layer. The planet exhibits a pale yellow hue due to ammonia crystals in its upper atmosphere. Electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's magnetic field but has a magnetic moment 580 times that of the Earth due to Saturn's larger body radius. Saturn has a prominent ring system that consists of nine continuous main rings and three discontinuous arcs, composed mostly of ice particles with a smaller amount of rocky debris and dust. Sixty-two known moons orbit the planet; fifty-three are officially named";

var uranusText = "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both are of different chemical composition than the larger gas giants Jupiter and Saturn. For this reason, astronomers sometimes place them in a separate category called 'ice giants'.<br> It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224.2 °C), and has a complex, layered cloud structure, with water thought to make up the lowest clouds, and methane the uppermost layer of clouds. In contrast, the interior of Uranus is mainly composed of ices and rock. It is the only planet whose name is derived from a figure from Greek mythology rather than Roman mythology like the other planets, from the Latinized version of the Greek god of the sky, Ouranos. Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The Uranian system has a unique configuration among those of the planets because its axis of rotation is tilted sideways, nearly into the plane of its revolution about the Sun. Its north and south poles therefore lie where most other planets have their equators.";

var neptuneText = "Neptune is the eighth and farthest planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass. Among the gaseous planets in the solar system, Neptune is the most dense. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth but not as dense. <br> Neptune orbits the Sun at an average distance of 30.1 AU, approximately 30 times the Earth–Sun distance. Named after the Roman god of the sea, its astronomical symbol is ♆, a stylised version of the god Neptune's trident. Neptune was the first planet found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. Neptune was subsequently observed on 23 September 1846 by Johann Galle within a degree of the position predicted by Urbain Le Verrier, and its largest moon, Triton, was discovered shortly thereafter, though none of the planet's remaining 13 moons were located telescopically until the 20th century";

var plutoText = "Pluto (minor-planet designation 134340 Pluto) is the largest object in the Kuiper belt, and the tenth-most-massive body observed directly orbiting the Sun. It is the second-most-massive known dwarf planet, after Eris. Like other Kuiper-belt objects, Pluto is composed primarily of rock and ice and is relatively small, approximately one-sixth the mass of the Moon and one-third its volume. <br> It has an eccentric and highly inclined orbit that takes it from 30 to 49 AU (4.4–7.4 billion km) from the Sun. This causes Pluto to periodically come closer to the Sun than Neptune. As of 2014, it is 32.6 AU from the Sun. Discovered in 1930, Pluto was originally classified as the ninth planet from the Sun. Its status as a major planet fell into question following further study of it and the outer Solar System over the ensuing 75 years. <br> The understanding that Pluto is only one of several large icy bodies in the outer Solar System prompted the International Astronomical Union (IAU) to formally define what it means to be a 'planet' in 2006. This definition excluded Pluto and reclassified it as a member of the new 'dwarf planet' category (and specifically as a plutoid).[18] Some scientists hold that Pluto should have remained classified as a planet, and that other dwarf planets should be added to the roster of planets along with Pluto.";

// Get size of drawing window inside browser.
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

// Create a drawing canvas.
var canvas = document.getElementById('animation');
// Get "painter" for 2d drawing into canvas.
var canvasPainter = canvas.getContext('2d');

// Initialize canvas size to match window size.
canvas.width = SCREEN_WIDTH;
canvas.height = 2500;

var vx = 0;
var vy = 15;

// Load an image for our sprite.
var appleImage = new Image();
appleImage.src = "https://dl.dropboxusercontent.com/u/202261943/planetsFinalProject/Gala%20Apple_small.png";

// Load an image for our newton sprite.
var catImage = new Image();
catImage.src ="https://dl.dropboxusercontent.com/u/202261943/planetsFinalProject/catSprite.png";

// Variable to keep track of the cat's action
var catAction = 1;

// we have eight costumes per action.
var catNumCostumes = 8;
var catCurrCostume = 0;

// Each costume is 228 x 188 pixels.
var catCostumeSize = 200;

var catXPos = (canvas.width / 2) - 40;
var catYPos = canvas.height - 300;

// Apple.
var appleXPos = (1 / 2) * SCREEN_WIDTH;
var appleYPos = 0;

// Velocity of apple in pixels per second.
// A positive value means the apple moves left to right.
// A negative value means the apple moves right to left.
var appleVelocityY = 150;

var appleAccel = 9.8;

// Get current time now in milliseconds.
var startTime = new Date().getTime();
// Remember our most recent check of time.
var previousTime = getTimer();

var framesPerSec = 28;

var setInterval;
var reDraw;

// Adding an event listener for
appleImage.onload = function () {

    "use strict";

    // Call our reDraw function 30 times per second.
    setInterval(reDraw, 1000 / framesPerSec);
	
}


 /*
 * This function is automatically called every frame.
 * It repaints the canvas to show the current animation.
 */
function reDraw() {
    
	"use strict";
	catAction = 1;
	var currentTime = getTimer();
	var elapsedTime = currentTime - previousTime;
	
	// Figure out how much time has passed since the last time we
  	// re-drew the screen.
  	// We will then figure out how many pixels to move the apple so
  	// that it appears to cross 50 pixels every one second of time.
  	// Division by 1000 changes from pixels per second to pixels per
  	// millisecond.
    var appleMoveY = (appleVelocityY / 1000.0 * elapsedTime) * appleAccel;
	
	appleYPos = appleYPos + appleMoveY;
	
    // Reset upon reaching bottom edge.
    if (appleYPos > canvas.height- 200) {
        // Reset apple at top of window		
        appleXPos = (1 / 2) * SCREEN_WIDTH;
        appleYPos = 0;
    }
	
	catCurrCostume = catCurrCostume + 1;
	
    if(catCurrCostume >= catNumCostumes) {
      catCurrCostume = 0;
	}
	
	if (appleYPos > canvas.height- 400) {
		catAction = 0;
	}
	

    // clear the canvas in white.
    canvasPainter.fillStyle = "rgb(255, 255, 255)";
    canvasPainter.fillRect(0, 0, canvas.height, canvas.height);
	
	var catTopLeftX = catCurrCostume * catCostumeSize;
    var catTopLeftY = catAction * catCostumeSize; 
  	

    // Draw apple at current xPos along top edge of window.  
    canvasPainter.drawImage(appleImage, appleXPos, appleYPos);
	canvasPainter.drawImage(catImage, catTopLeftX, catTopLeftY, catCostumeSize, catCostumeSize, catXPos, catYPos, catCostumeSize, catCostumeSize);
	
	
	previousTime = currentTime;
	
	
}


// Adding event Listeners to change the background image when radio bttn is switched!

planets[0].addEventListener('click', function() {
	updateImage(planets[0]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Mercury - (3.6m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = mercuryText;
	appleAccel = 3.61;
}, false);

planets[1].addEventListener('click', function() {
	updateImage(planets[1]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Venus - (8.8m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = venusText;
	appleAccel = 8.83;
}, false);

planets[2].addEventListener('click', function() {
	updateImage(planets[2]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Earth - (9.8m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = earthText;
	appleAccel = 9.8;
}, false);

planets[3].addEventListener('click', function() {
	updateImage(planets[3]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Mars - (3.8m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = marsText;
	appleAccel = 3.75;
}, false);

planets[4].addEventListener('click', function() {
	updateImage(planets[4]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Jupiter - (26m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = jupiterText;
	appleAccel = 26.0;
}, false);

planets[5].addEventListener('click', function() {
	updateImage(planets[5]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Saturn - (11.2m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = saturnText;
	appleAccel = 11.2;
}, false);

planets[6].addEventListener('click', function() {
	updateImage(planets[6]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Uranus - (10.5m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = uranusText;
	appleAccel = 10.5;
}, false);

planets[7].addEventListener('click', function() {
	updateImage(planets[7]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Neptune - (13.3m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = neptuneText;
	appleAccel = 13.3;
}, false);

planets[8].addEventListener('click', function() {
	updateImage(planets[8]);
	var header = document.getElementById("title");
	header.innerHTML="&mdash; Pluto - (.61m/s^2) &mdash;";
	var pDesc = document.getElementById('planetDesc');
	pDesc.innerHTML = plutoText;
	appleAccel = 0.61;
}, false);




function updateImage(whichPlanetIndex) {
	var url= whichPlanetIndex.value;
	document.getElementById("backdrop").style.backgroundImage = "url(" + url + ")";
}

function preloader() {
	// creating the image object that will be used later in the function
     imageObj = new Image();


     // Creating the array and popluating it with images of planets
     planetImg = new Array();
     planetImg[0]="mercury.jpg";
     planetImg[1]="venus.jpg";
     planetImg[2]="earth.jpg";
     planetImg[3]="mars.jpg";
	 planetImg[4]="jupiter.jpg";
	 planetImg[5]="saturn.jpg";
	 planetImg[6]="uranus.jpg";
	 planetImg[7]="neptune.jpg";
	 planetImg[3]="pluto.jpg";


     // start preloading by looping through the image object, this function will be called in onLoad()
    for(var i=0; i<=3; i++) 
    {
          imageObj.src=planetImg[i];
    }
} 

function getTimer()
{
  return ( new Date().getTime() - startTime );
}

console.clear();

//--------------------------
// 
// Node elements (buttons and textbox)
//
//--------------------------
var output = document.getElementById("output");
var numBttns = document.getElementsByClassName("num");

 // ---------------------------------------
// TODO: HW6 Task 1
// Create the following variables (must use the names provided below)
// - divideBttn
// - multiplyBttn
// - subtractBttn
// - additionBttn
// - equalBttn
// - clearBttn

var divideBttn = document.getElementById("divide");
var multiplyBttn = document.getElementById("multiply");
var subtractBttn = document.getElementById("subtract");
var additionBttn = document.getElementById("addition");
var equalBttn = document.getElementById("equal");
var clearBttn = document.getElementById("clear");


//--------------------------
// 
// Calculator Variables 
// Do not modify
//
//--------------------------
var N = [];    // number array
var Op = [];    // operation array
var tmp = '';    // temporary variable (numEvents method)

//--------------------------
// 
// function that initializes web calculator
// called by onload event attribute in body tag
//
//--------------------------
function init() {
    
	// Make the output readonly 
	// (i.e. the user cannot directly 
	// enter a number)
    output.readOnly=true; 

	// Reset variables and set
	// ouput to zero
    clear();
    
	// add event listeners to each number button.
    for ( var i=0; i<numBttns.length; i++ ) {
        
        // ---------------------------------------
        // TODO: HW6 Task 2
        // Set up number button event listeners
        numBttns[i].addEventListener('click', function(){ numEvent(event); }, false );
       
        
    }
    
    // ---------------------------------------
    // TODO: HW6 Task 3
    // Set up operation event listeners
    // 1. divide button
    // 2. multiply button
    // 3. subtract button
    // 4. addition button
    // 5. clear button
    // 6. equal button
    
    divideBttn.addEventListener('click', function(){ divide(); }, false );
    multiplyBttn.addEventListener('click', function(){ multiply(); }, false );
    subtractBttn.addEventListener('click', function(){ subtract(); }, false );
    additionBttn.addEventListener('click', function(){ addition(); }, false );
    equalBttn.addEventListener('click', function(){ equal(); }, false );
    clearBttn.addEventListener('click', function(){ clear(); }, false );
   
    
}

//--------------------------
// 
// function to handle equal event
//
//--------------------------
function equal() {
    
    // for debugging
    console.log("=");
    
    // push last number into number array
    if ( isNumeric( tmp ) ) {
        
        N.push( parseInt( tmp ) );
        
    }

    // for debugging    
    console.log( N );
    console.log( Op );
    
	var total = 0;
    
    // ----------------------------------
    // TODO: HW6 Task 4
    // Loop through operation array (Op) 
    // and number array (N) to calculate
	// total value displayed to user.
	//
	// To display output: output.value = total;
    // 
    // Example:
    // 10 + 15 - 5 * 2 = 40
    // N = [ 10, 15, 5, 2 ]
    // Op = [ '+', '-', '*' ]
    //
    // If there is an error, display 'ERROR' to user
	// e.g. output.value = 'ERROR'
    
    if ( N.length > 0 && ( Op.length == N.length-1 ) ) {
    
        total = N[0];
        
        for ( var i=0; i<Op.length; i++ ) {
            
            if ( Op[i] === "+" ) {
                
                total += N[i+1];
                
            } else if ( Op[i] === "-" ) {
                
                total -= N[i+1];
                
            } else if ( Op[i] === "*" ) {
                
                total *= N[i+1];
                
            } else if ( Op[i] === "/" ) {
                
                total /= N[i+1];
                
            }
            
        }
        
        output.value = total;
        
    } else {
        
         output.value = "Error";
        
    }
    
    console.log(total);
    
    output.value = total;
	// ---------------------------
	// Do not modify 
	tmp = '';
	N=[];
	Op=[];
    
}

//--------------------------
// 
// function to handle clear event
//
//--------------------------
function clear() {
    
    console.log("C");
    output.value=0;
    tmp='';
    N=[];
    Op=[];
    
}

//--------------------------
// 
// function to handle addition event
//
//--------------------------
function addition() {
        
    console.log("+");
    
    if ( isNumeric( tmp ) ) {
        
        N.push( parseInt( tmp ) );
        Op.push( "+" );
        
    }
    
    tmp = '';
    
}

//--------------------------
// 
// function to handle subtract event
//
//--------------------------
function subtract() {
    
    console.log("-");
    
    if ( isNumeric( tmp ) ) {
        
        N.push( parseInt( tmp ) );
        Op.push( "-" );
        
    }
    
    tmp = '';   
    
}

//--------------------------
// 
// Function to handle multiply event
// Do not modify
//
//--------------------------
function multiply() {
    
    // For debugging
    console.log("*");
    
    // Is number? Yes: update arrays
    if ( isNumeric( tmp ) ) {
        
        N.push( parseInt( tmp ) );
        Op.push( "*" );
        
    }
    
    tmp = '';
    
}

//--------------------------
// 
// Function to handle divide event
// Do not modify
//
//--------------------------
function divide() {
    
    // for debugging
    console.log("/");
    
    if ( isNumeric( tmp ) ) {
        
        N.push( parseInt( tmp ) );
        Op.push( "/" );
        
    }
    
    tmp = '';
    
}

//--------------------------
// 
// Function to handle number events
// Do not modify
//
//--------------------------
function numEvent(event) {
    
    // concatenate entered number
    tmp = tmp + event.srcElement.outerText;
    
    // update calculator output (textbox)
    output.value=tmp;
    
}

//--------------------------
// 
// Function to determine if value is a number
// Do not modify
//
//--------------------------
function isNumeric( val ) {
    
    return ( val.length === 0 || isNaN( val ) ) ? false : true;
    
}

