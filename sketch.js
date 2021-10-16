let vidio;
let cl;

function preload(){
  cl = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qvZEW43LX/model.json")
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  video = createCapture(VIDEO)
  video.hide();

  setTimeout(classify  ,5000)
}

function classify(){
  cl.classify(video, result)
}

function result(e,r){
  console.log(r);
  const 상처 =  r[0].label
  if(상처==="찰과상"){
    open("찰과상.html", "_self")
  }else if(상처==="화상"){
      open("화상.html", "_self")
  }else if(상처==="타박상"){
      open("타박상.html", "_self")
  }

}

function draw() {
  background(220);
  image(video,0,0,window.innerWidth , window.innerHeight)
}
