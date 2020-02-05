// Timer=(startTime,el)=>
// {
    
//     // oblicz czas 

//     let h=data.getMinutes();
//     let s=data.getSeconds();
//     let ms=data.getMilliseconds();
//     let xd=el;

//     // document.querySelector(el).innerHTML=`${s}:${ms}`;
//     //console.log(`${s}:${ms}`);

//     return data;

    


// }
finishGame=(param,time)=>
{
    let finishtime=new Date();
    let diffTimes=new Date(finishtime-time);
    // console.log(diffTimes.getSeconds());
    // console.log(diffTimes.getMilliseconds());
    const emptyObj=new Game();
    emptyObj.finishPlaying(param,diffTimes);

    
    
     
        
}
    






