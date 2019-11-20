const clapSound = document.querySelector('.clap');
const boomSound = document.querySelector('.boom');
const hihatSound = document.querySelector('.hihat');
const kickSound = document.querySelector('.kick');
const openhatSound = document.querySelector('.openhat');
const rideSound = document.querySelector('.ride');
const snareSound = document.querySelector('.snare');
const tinkSound = document.querySelector('.tink');
const tomSound = document.querySelector('.tom');

// const allChannelsSounds={

//     allSounds:[],
//     startFirstSound:null,
//     counter:0,
//     whofirstTime(TimeStart){
//         if(startFirstSound < TimeStart){
//             startFirstSound=TimeStart;
//         }
//     },

//     showSounds(){ 
//         switch (code) {
//             case 'KeyA':

//                 clapSound.play();
//                 break
//             case 'KeyS':

//                 boomSound.play();
//                 break
//             case "KeyD":

//                 hihatSound.play();
//                 break
//             case "KeyF":

//                 kickSound.play();
//                 break
//             case "KeyG":

//                 openhatSound.play();
//                 break
//             case "KeyH":

//                 rideSound.play();
//                 break
//             case "KeyJ":

//                 snareSound.play();
//                 break
//             case "KeyK":

//                 tinkSound.play();
//                 break
//             case "KeyL":

//                 tomSound.play();
//                 break
//     }
// }
// }

class CreateChannel {

    constructor(btnRec, btnPlay) {
        this.btnRec = document.querySelector(`${btnRec}`)
        this.channelRecording = false,
            this.channelSounds = [],
            this.channelStartTime = null
        this.btnRec.addEventListener('click', () => this.startRecording());
        document.querySelector(btnPlay).addEventListener('click', () => this.playRecording());
        document.body.addEventListener('keypress', (e) => this.PutSounds(e));
    }

    changeTextBtn(text) {

        this.btnRec.innerHTML = text;


    }
    // changeStartTimeAllSounds(){
    //     if(allChannelsSounds.startFirstSound===null){
    //         allChannelsSounds.startFirstSound=this.channelStartTime;
    //   }else{
    //         allChannelsSounds.whofirstTime(this.channelStartTime);
    //   }
    // }

    startRecording() {
        this.channelRecording = !this.channelRecording;




        let txt;
        if (this.channelRecording === true) {
            this.channelStartTime = Date.now();
            txt = 'stop';
        }
        else {
            txt = 'nagrywaj';
        }
        this.changeTextBtn(txt)
    }

    PutSounds(e) {
        if (this.channelRecording) {
            this.channelSounds.push({
                code: e.code,
                time: Date.now(),
            })

            // allChannelsSounds.allSounds.push({
            //     code: e.code,
            //     time: Date.now(),
            // })

        }
        this.playSounds(e.code);
    }



    playRecording() {


        this.channelRecording = false;


        for (let i = 0; i < this.channelSounds.length; i++) {

            let displayTime = this.channelSounds[i].time - this.channelStartTime;


            setTimeout(this.playSounds, displayTime, this.channelSounds[i].code);

        }
        this.changeTextBtn('nagrywaj');
    }

    playSounds(code) {
        switch (code) {
            case 'KeyA':

                clapSound.play();
                break
            case 'KeyS':

                boomSound.play();
                break
            case "KeyD":

                hihatSound.play();
                break
            case "KeyF":

                kickSound.play();
                break
            case "KeyG":

                openhatSound.play();
                break
            case "KeyH":

                rideSound.play();
                break
            case "KeyJ":

                snareSound.play();
                break
            case "KeyK":

                tinkSound.play();
                break
            case "KeyL":

                tomSound.play();
                break
        }
    }
}


const channel1 = new CreateChannel('.channel1Rec', '.channel1Playing');
const channel2 = new CreateChannel('.channel2Rec', '.channel2Playing');
const channel3 = new CreateChannel('.channel3Rec', '.channel3Playing');
const channel4 = new CreateChannel('.channel4Rec', '.channel4Playing');


