function setup(){
    canvas= createCanvas(550, 490)
    canvas.position(900,150)
    video= createCapture(VIDEO)
    video.size(550,500)
    video.position(100,150)

//posenet

    posenet= ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotResult)
}
function draw(){
background("black")
}
function modelLoaded(){
    console.log("set")
}
function gotResult(r){
    if(r.length > 0){
console.log(r)
}
}