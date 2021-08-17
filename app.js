class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }

  repeat() {
    let step = this.index % 9;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out`;
    });
    this.index++;
  }
  start() {
    console.log(this);
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new DrumKit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.start();
});
