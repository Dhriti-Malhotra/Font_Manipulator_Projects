function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('##DDA0DD');
    fill('#B0C4DE');
    stroke('#B0E0E6');
    Text('Dhriti', noseX, noseY)
}

rightWristX = 0;
leftWristX = 0;
difference = 0;
noseX = 20;
noseY = 200;