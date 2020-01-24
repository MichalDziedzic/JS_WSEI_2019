class Task{
    constructor(title,describe,time,date,createNoteTime)
    {
        this.title=title,
        this.describe=describe,
        this.time=time,
        this.date=date,
        this.createNote=createNoteTime,
        this.notice=false
        
    }
    saveDataToDB()
    {
            let uidik = firebase.auth().currentUser.uid;
        //const that=this;
            firebase.database().ref(uidik+"/Tasknum/"+this.title).set(this);

    }
    readDataFromDB()
    {
       // const header = [];
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref(uid+"/Tasknum").on("value",(snapshot)=>
        {


            let Tasknumber = snapshot.val();
            //console.log(snapshot);
            
            
             if(Tasknumber!==null)
             {
                 
                const blblb = new UI();
                const divs = document.querySelectorAll('.card-area');
            
            [].forEach.call(divs, (divs)=>{
           
                divs.remove();
            });
                Object.keys(Tasknumber).forEach(key => 
                    { 

                   // console.log(typeof key);  
                    //console.log( Tasknumber[key]);
                    //console.log(key);
                        

                    blblb.addTaskToList(Tasknumber[key]); 
                    // for(let i=0;i<document.querySelectorAll('.card-header').length;i+=2)
                    // eslint-disable-next-line no-empty
                    {
                        // if(document.querySelectorAll('.card-header')[i]['innerText']!==key)
                        // // eslint-disable-next-line no-empty
                        // {
                        //     console.log('prawda')
                        //     document.querySelectorAll('.card-header')[i]['innerText'].closest('.card-area').remove();
                            
                            
                        // }
                    }
                      
                        
                      
                   
                   
                    
                 });

             }  
            
        })
    }
    updateDataFromDB(title)
    {
        let uidik = firebase.auth().currentUser.uid;
        firebase.database().ref(uidik+"/Tasknum/"+title).update({notice:true});
        console.log('div ma kolor niebieski');
    }
    

}   