class Ball {
    constructor() {
        this.ball=document.querySelector('.ball'),
        this.playGround= document.querySelector('.play-ground'),
        this.hole=document.querySelector('.hole'),
        this.x = 150,
        this.y = 150,
        this.maxValue=325,
        this.moveEvent = window.addEventListener('deviceorientation', (e) =>
        {
          this.BallSpeed(e.gamma, e.beta)
          setInterval(() => this.moveBall(), 10)
          
        },true),
        this.moveRateX = 0,
        this.moveRateY = 0;
        this.holeTop=this.hole.offsetTop;
        this.holeLeft=this.hole.offsetLeft;
        
    }
  
    
  
    moveBall(){
      if(this.x  <=this.maxValue && this.x>=0 && this.y<=this.maxValue && this.y>=0)
      {
  
        this.ball.style.left = this.x + 'px';
        this.ball.style.top = this.y + 'px';
        this.x += this.moveRateX;
        this.y += this.moveRateY;
        
           
    //  let PosBallTop =this.ball.offsetTop; 
    //  let PosBallLeft=this.ball.offsetLeft;
        

            
        //  var parentPos = this.playGround.parent().offset();
        //  var childOffset = {
        //  top: childPos.top - parentPos.top,
        //  left: childPos.left - parentPos.left
        // }
         console.log(`ball top :${PosBallTop}`);
         //console.log(`ball left :${PosBallLeft}`);
         //this.
        if(this.y>=265 && this.y<=285 && this.x>=25 && this.x<=53)
        {
            console.log('udalo sie !')
            //you win 
        }
     }
        
        


       
       
       else{
        this.x=150;
        this.y=150;
        this.moveRateX = 0,
        this.moveRateY = 0;
        
      }
        
     
    }
  
    BallSpeed = (gamma, beta) => {
        this.moveRateX += gamma / 1000;
        this.moveRateY += beta / 1000;
        
        
    }
  

     
  
  }
  
  