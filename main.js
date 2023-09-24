prediction_1="";
prediction_2="";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
}
);

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
});
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DXx33ejWA/model.json", modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is " + prediction_1;
    speak_data_2 = "The Second Prediction Is " + prediction_2;
    var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utter_this);
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name_2").innerHTML = results[1].label;

        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if (prediction_1 == "Thumbs up") {
            document.getElementById("update_gesture").innerHTML = "&#128077";
        }

        if (prediction_1 == "Fist") {
            document.getElementById("update_gesture").innerHTML = "&#9994";
        }

        if (prediction_1 == "Perfect") {
            document.getElementById("update_gesture").innerHTML = "&#128076";
        }

       if (prediction_1 == "Stop") {
            document.getElementById("update_gesture").innerHTML = "&#128400";
        }

        if (prediction_1 == "Pointing") {
            document.getElementById("update_gesture").innerHTML = "&#128073";
        }
        
        if (prediction_1 == "Thumbs down") {
            document.getElementById("update_gesture").innerHTML = "&#128078";
        }

        if (prediction_1 == "Peace") {
            document.getElementById("update_gesture").innerHTML = "&#9996";



        }

        if (prediction_2 == "Thumbs up") {
            document.getElementById("update_gesture_2").innerHTML = "&#128077";
        }

        if (prediction_2 == "Fist") {
            document.getElementById("update_gesture_2").innerHTML = "&#9994";
        }

        if (prediction_2 == "Perfect") {
            document.getElementById("update_gesture_2").innerHTML = "&#128076";
        }

       if (prediction_2 == "Stop") {
            document.getElementById("update_gesture_2").innerHTML = "&#128400";
        }

        if (prediction_2 == "Pointing") {
            document.getElementById("update_gesture_2").innerHTML = "&#128073";
        }
        
        if (prediction_2 == "Thumbs down") {
            document.getElementById("update_gesture_2").innerHTML = "&#128078";
        }

        if (prediction_2== "Peace") {
            document.getElementById("update_gesture_2").innerHTML = "&#9996";
        }
   }
}


