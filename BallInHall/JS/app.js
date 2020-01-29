class Ball {
  constructor() {
    this.ball=document.querySelector('.ball'),
    this.playGround= document.querySelector('.play-ground'),
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
      
  }

  

  moveBall = () => {
    if(this.x  <=this.maxValue && this.x>=0 && this.y<=this.maxValue && this.y>=0)
    {

      this.ball.style.left = this.x + 'px';
      this.ball.style.top = this.y + 'px';
      this.x += this.moveRateX
      this.y += this.moveRateY
      console.log(document.querySelector('.hole').clientWidth);
      console.log(document.querySelector('.hole').clientHeight);
     
    }else{
      this.x=150;
      this.y=150;
      this.moveRateX=0;
      this.moveRateY=0;
    }
      
   
  }

  BallSpeed = (gamma, beta) => {
      this.moveRateX += gamma / 600;
      this.moveRateY += beta / 600;
  }

}

const test1=new Ball();