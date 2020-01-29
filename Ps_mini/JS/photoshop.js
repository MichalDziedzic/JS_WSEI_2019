

class Photoshop {
    constructor(canvasId) {
          this.BrushConfig = {
                shape: 'circle',
                color:'#000',
                size:10,
                
          },
           
          this.clearMouseFlag=false,
          this.counter=null,
          this.Spray=0,
          this.ImageBlur=null,
        
        this.canvasConfig =  {
           
            ctx : canvas.getContext('2d')
        }
        this.setCanvas(canvasId)
        this.canvasData = this.canvasConfig.ctx.getImageData(0,0,320,500);
     
    }

    setBrush(shapeName) {
        this.BrushConfig.shape = shapeName;
        this.Spray=false;
        this.canvasConfig.ctx.filter = 'blur(0px)';
        

        if(this.clearMouseFlag){
            this.setColorBrush('#FFFFFF');
            
            this.clearMouseFlag=false;
        }

        
        
        
        
    }

    setColorBrush(colorName)
    {
        this.BrushConfig.color=colorName;
    }
    setSizeBrush(size)
    {
        this.BrushConfig.size=size;
        
        
    }
    
    setCanvas(canvasId) {
        this.canvas = document.querySelector('#' + canvasId)
        
        this.canvas.addEventListener('touchmove',(e) => this.onCanvasTouchMove(e))
        
      

    }
       
    onCanvasTouchMove(e) {

        const xPos = e.touches[0].clientX -  this.canvas.offsetLeft;
        const yPos = e.touches[0].clientY -  this.canvas.offsetTop;

        
            
            this.draw(xPos,yPos)
            
      
        
    }

    drawImage(){
        const image = new Image();
            image.addEventListener('load', ()=>{
                
                if(this.ImageBlur){ 
                    this.canvasConfig.ctx.filter = 'blur(5px)';
                    
                    
                    
                }else{
                    this.canvasConfig.ctx.filter = 'blur(0px)';
                    this.canvasConfig.ctx.drawImage(image, 0, 0,320,400);
                    this.ImageBlur=null;

                }
                
            this.canvasConfig.ctx.drawImage(image, 0, 0,320,400);
        });
        image.src = './grafika.jpg';
    }

    draw(x,y) {    

        const color = this.BrushConfig.color
        this.canvasConfig.ctx.beginPath();
         this.canvasConfig.ctx.fillStyle =color;
        this.canvasConfig.ctx.strokeStyle =color;
        
         
      
        
        if(this.BrushConfig.shape=="square" ){
            
            
            if(this.Spray){
                this.canvasConfig.ctx.filter = 'blur(3px)';
             this.canvasConfig.ctx.fillRect(x - (this.BrushConfig.size / 2), y - (this.BrushConfig.size / 2), this.BrushConfig.size,this.BrushConfig.size);
             console.log('uzywaj blura');
             

             

            }else{
                
                this.canvasConfig.ctx.fillRect(x - (this.BrushConfig.size / 2), y - (this.BrushConfig.size / 2), this.BrushConfig.size,this.BrushConfig.size);
                console.log('nie uzywaj blura na kwdracie');
                
            }    
        }else{
            if(this.Spray){
                this.canvasConfig.ctx.filter = 'blur(3px)';
                this.canvasConfig.ctx.arc(x  ,y , this.BrushConfig.size / 2, 0, 10 * Math.PI);
                this.canvasConfig.ctx.fill();
             
               
                
            }else{
                
                this.canvasConfig.ctx.arc(x  ,y , this.BrushConfig.size / 2, 0, 10 * Math.PI);
                this.canvasConfig.ctx.fill();
                
                
            }
            
        }
         
        
      
        
         this.canvasConfig.ctx.stroke()

       
    }
    clearWorkspace(e) {
        e.preventDefault();
        this.canvasConfig.ctx.fillStyle = '#ffffff';
        this.canvasConfig.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    }

    
    darkenFilter(amount = 30){
        //const canvasData = this.canvasConfig.ctx.getImageData(0,0,320,500);

        const ImgData=this.canvasData;
    
        
         for(let i = 0; i < canvasData.data.length; i+=4){
                 canvasData.data[i] -= amount
                canvasData.data[i+1] -= amount
                canvasData.data[i+2] -= amount         
         }

        this.canvasConfig.ctx.putImageData(canvasData, 0, 0)
    }
    brightnessFilter(amount = 30){
        const canvasData = this.canvasConfig.ctx.getImageData(0,0,320,500);
        
         for(let i = 0; i < canvasData.data.length; i+=4){
                 canvasData.data[i] += amount
                 canvasData.data[i+1] += amount
                 canvasData.data[i+2] += amount         
         }
         this.canvasConfig.ctx.putImageData(canvasData, 0, 0)
    }

    monoImage(){
        const canvasData = this.canvasConfig.ctx.getImageData(0, 0, 320, 500);


        if(!this.counter){


    
           
            for (let i=0; i < canvasData.data.length; i += 4) {
                const r = canvasData.data[i];
                const g = canvasData.data[i+1];
                const b = canvasData.data[i+2];
            
                const average = (r+g+b) / 3;
                canvasData.data[i] = canvasData.data[i+1] = canvasData.data[i+2] = average;
            }
        
            
            this.canvasConfig.ctx.putImageData(canvasData, 0, 0);
            this.counter=true;
        }else{
               
                this.counter=null;
        }
    }
     clearMouse(){

        this.Spray=false;
        this.clearMouseFlag=true;
        this.setBrush('square');
        

     }

     sprayDraw(){

                this.Spray=true;
                this.canvasConfig.ctx.filter = 'blur(0px)';
          

     }
     waveEffect(){
            if(!this.ImageBlur){

                this.ImageBlur=true;
                this.drawImage();
                
               // this.ImageBlur=null;


            }else{
                this.ImageBlur=null;
                this.canvasConfig.ctx.filter = 'blur(0px)';
            }
     }

     

     textureFilter(){
        const canvasData = this.canvasConfig.ctx.getImageData(0, 0, 320, 500);

        for (let i=0; i < canvasData.data.length; i += 6) {
            const r = canvasData.data[i];
            const g = canvasData.data[i+6];
            const b = canvasData.data[i+7];
        
            const average = (r+g+b) / 3;
            canvasData.data[i] = canvasData.data[i+6] = canvasData.data[i+7] = average;
            
        }
        this.canvasConfig.ctx.putImageData(canvasData, 0, 0);
     }
}





