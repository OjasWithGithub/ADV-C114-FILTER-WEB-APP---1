function preload(){
  
}
function draw(){
    image(video,0,0,400,315);
}

function take_Snapshot(){
    save("moustacheSelfie.jpg")
}
function setup(){
    canvas = createCanvas(400,315)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();

  
}