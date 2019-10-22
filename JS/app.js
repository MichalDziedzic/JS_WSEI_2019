const clapSound = document.querySelector('.clap');
const boomSound = document.querySelector('.boom');
const hihatSound = document.querySelector('.hihat');
const kickSound = document.querySelector('.kick');
const openhatSound = document.querySelector('.openhat');
const rideSound = document.querySelector('.ride');
const snareSound = document.querySelector('.snare');
const tinkSound = document.querySelector('.tink');
const tomSound = document.querySelector('.tom');

class CreateChannel{

    constructor(btnRec, btnPlay) {
        this.channelSounds = []
        this.channelStartTime = null
        this.channelRecording = false
        this.btnRec = document.querySelector(`${btnRec}`)

        this.btnRec.addEventListener('click', this.startRecording);
        document.querySelector(btnPlay).addEventListener('click', this.playRecording);
        document.body.addEventListener('keypress', this.playAudio);
    }

    

    
    
    playAudio=(e)=>{
        if (this.channelRecording) {
            this.channelSounds.push({
                code: e.code,
                time: Date.now(),
            })
        }
        this.playSounds(e.code);
    }

    startRecording=()=>{
        this.channelRecording = !this.channelRecording; 
        if (this.channelRecording) {
           
            this.channelStartTime = Date.now();
        }
        
        this.btnRec.innerHTML = `${this.channelRecording ? 'stop' : 'nagrywaj'}`;
    }

    playRecording=()=>{
        this.channelRecording = false;
        this.btnRec.innerHTML = 'nagrywaj';
        this.channelSounds.forEach(element => {
                setTimeout(this.playSounds, element.time - this.channelStartTime, element.code);
            })
    }

    playSounds=(code)=>{
        switch (code) {
            case 'KeyA':
                clapSound.currentTime = 0;
                clapSound.play();
                break
            case 'KeyS':
                boomSound.currentTime = 0;
                boomSound.play();
                break
            case "KeyD":
                hihatSound.currentTime = 0;
                hihatSound.play();
                break
            case "KeyF":
                kickSound.currentTime = 0;
                kickSound.play();
                break
            case "KeyG":
                openhatSound.currentTime = 0;
                openhatSound.play();
                break
            case "KeyH":
                rideSound.currentTime = 0;
                rideSound.play();
                break
            case "KeyJ":
                snareSound.currentTime = 0;
                snareSound.play();
                break
            case "KeyK":
                tinkSound.currentTime = 0;
                tinkSound.play();
                break
            case "KeyL":
                tomSound.currentTime = 0;
                tomSound.play();
                break
        }
    }
}

const channel1 = new CreateChannel('.channel1Rec', '.channel1Playing');
const channel2= new CreateChannel('.channel2Rec', '.channel2Playing');
const channel3 = new CreateChannel('.channel3Rec', '.channel3Playing');
const channel4 = new CreateChannel('.channel4Rec', '.channel4Playing');