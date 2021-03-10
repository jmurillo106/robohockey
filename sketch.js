let mrNoisy;
let playButton;
let stopButton;


function setup() {
//	createCanvas(windowWidth,windowHeight);
	createCanvas(320,480);
	background(150,150,200);
	mrNoisy=new p5.Noise('white')
	mrNoisy.amp(0.1);

	playButton=createButton('play').position(10,10).mousePressed(()=>{mrNoisy.start()});

	stopButton=createButton('stop').position(10,30).mousePressed(()=>{mrNoisy.stop()});

	chooseNoise = createSelect().position(10,50);
	chooseNoise.option('white');
	chooseNoise.option('pink');
	chooseNoise.option('brown');
	chooseNoise.changed(function (){
		mrNoisy.setType(chooseNoise.value())
	});

	setVolume=createSlider(0,1,0,0);
	setVolume.position(130,10);
	setVolume.input(function(){
	mrNoisy.amp(setVolume.value(), 0.01);
	});
//mrNoisy.amp(0.1, 0.01);
	setVolume.value(0.1);
}





//function windowResized(){
//	resizeCanvas(windowWidth,windowHeight);
//	background(200);
//}

//function draw() {
  // put drawing code here
//}

