// calculate demerit points
function calculateDemeritPoints() {
 var Driverlicense = document.getElementById("DriverLicense").value;
    var speed = Number(document.getElementById("speedInput").value);
    let demeritPoints = 0;

// validate speed and name
if(speed==null||speed==""){
    alert("not recognised");
    return;
}
if(Driverlicense==""|| Driverlicense==null){
    alert("put Driverlicense");
    return;

}

// demerit points
    if (speed < 70) {
        document.getElementById("result").innerHTML = "Ok";
    } else {
        demeritPoints = Math.floor((speed - 70) / 5);
        document.getElementById("result").innerHTML = `Points: ${demeritPoints}`;}
        if (demeritPoints >= 12) {
            document.getElementById("result").innerHTML += " License suspended";
        }
    }
