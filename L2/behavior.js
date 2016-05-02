function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;
    
    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;
    
    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );
    
    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm
    
    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------
    
    
    var weightKg = weight * (0.454);
    var heightM = height * (0.0254);
    var heightCm = height * (2.54); 
    var BSA = 0;
    
    BSA = Math.sqrt((heightCm * weightKg)/(3600));
    
   // -------------------------------
    // Lean Body Weight (LBW)
    // -------------------------------
    
    var IBW = 0;
    
    if ( female ) {
        IBW = 45.5 + 2.3 * (height - 60);
        
    } else if ( male ) {
        IBW = 50 + 2.3 * (height - 60);
    }
    
    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------
    
    var BMI = 0;
    
    BMI = (weightKg)/(Math.pow(heightM, 2));
    
    display( BSA, IBW, BMI );
    
}

function display( BSA, IBW, BMI ) {
    
    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nLean Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';
    
    document.getElementById("output").innerHTML=message;
    
}
