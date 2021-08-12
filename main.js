Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100,
    constraints: {
        facingMode: 'environment'
    }
});
Webcam.attach('#camera');

function takepic() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="Objectpic"src="' + data_uri + '">';
    });
}
console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelloaded);

function modelloaded(){
    console.log("MobileNet is loaded succesfully");
     
}
function identify(){
  object_pic=document.getElementById("Objectpic");
  classifier.classify(object_pic,gotresult);
}
function gotresult(E,R){
if (E){
    console.error(E);

}
else {
    console.log(R);
    document.getElementById("object_name").innerHTML=R[0].label;
}

}