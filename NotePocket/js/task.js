class Task{
    constructor(title,describe,time,date)
    {
        this.title=title,
        this.describe=describe,
        this.time=time,
        this.date=date
        
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
            console.log(snapshot);
            // if(Tasknumber!==null)
            // {
                Object.keys(Tasknumber).forEach(key => 
                    {

                   // console.log(typeof key);  
                    console.log( Tasknumber[key]);
                    console.log(key);
                      //header=Tasknumber[key]  
                        
                      const blblb = new UI();
                   
                   
                    blblb.addTaskToList(Tasknumber[key]); 
                 });

            // }  
            
        })
    }
}   