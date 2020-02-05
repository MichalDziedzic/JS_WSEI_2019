class Game{
    constructor(){
        this.BtnStartGame=document.querySelector('.btnStartGame');
        this.BtnStartGame.addEventListener('click',()=>this.startGame());
        this.open=false;
        this.playground=document.querySelector('.play-ground');
        this.panelGame=document.querySelector('.panelGame');
        this.checkGameBtn();
        this.startTime=null;
        //this.health=3;
        
        
        
    }
    checkGameBtn()
    {
         this.playground.style.display="none";
             this.panelGame.style.display="block";
             
        console.log('xxx');
        
        
        
    }
    startGame()
    {
        
        this.open=!this.open;
       
       if(this.open)
        {
            this.playground.style.display="block";
            this.panelGame.style.display="none";
            // this.open=false;
            const startTime=new Date();
             const test1=new Ball(startTime);
            

             //setInterval(() =>Timer(this.startTime,el),1);
            
        }
        
    }
    finishPlaying(param,yourTime)
    {
        
        if(!this.open)
        {
            this.playground.style.display="none";
             this.panelGame.style.display="block";
             let finishDiv=document.createElement("div");
             finishDiv.classList.add("TheEndGame");
             this.panelGame.append(finishDiv);
            
             if(param===true)
             {
                finishDiv.innerText=`YOU WIN!,your time is :${yourTime.getSeconds()}seconds ,${yourTime.getMilliseconds()}`;
             }else
             {
                finishDiv.innerText=`YOU LOSE! in time:${yourTime.getSeconds()}seconds ,${yourTime.getMilliseconds()} TRY AGAIN`;
             }
         }
     }
    
   
    
}

 
const xxdd= new Game();