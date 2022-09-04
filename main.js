LeftWristX = 0;

RightWristX = 0;

difference = 0;

function setup() {

    video = createCapture(VIDEO);

    video.size(550,500);

    video.position(150,150);

    canvas = createCanvas(550,550);

    canvas.position(800,150);

    poseNet = ml5.poseNet(video,modelloaded);

    poseNet.on("pose", gotPoses);
    
}

function modelloaded() {

    console.log("PoseNet Is Loaded");
    
}

function gotPoses(results) {

    if (results.length > 0) {

        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x;

        RightWristX = results[0].pose.rightWrist.x;

        difference = floor(LeftWristX - RightWristX);

        document.getElementById("FontSize").innerHTML =  "Font Size Of The Text Will Be = " + difference + ". ";
        
    }
    
}

function draw() {

    background("#6C91C2")

    textSize(difference);

    fill("#FFE787");

    text("Mokshit", 50, 400);
    
}