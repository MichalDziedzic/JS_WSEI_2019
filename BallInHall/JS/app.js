class Game{
    constructor(){
        this.BtnStartGame=document.querySelector('.btnStartGame');
        this.BtnStartGame.addEventListener('click',()=>this.startGame());
        this.open=false;
        this.playground=document.querySelector('.play-ground');
        this.panelGame=document.querySelector('.panelGame');
        this.checkGameBtn();
        
        
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
             const test1=new Ball();
            
        }
        
    }
   
    
}
const xxdd= new Game();