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
            let uid = firebase.auth().currentUser.uid;

            firebase.database().ref(uid + "/Tasknum/"+this.title).set(this);

    }
    readDataFromDB()
    {
       // const header = [];
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref(uid +"/Tasknum").on("value",(snapshot)=>
        {

            let Tasknumber = snapshot.val();
            //console.log(Tasknumber);
            const blblb = new UI();
                Object.keys(Tasknumber).forEach(key => 
                    {

                   // console.log(typeof key);  
                    console.log( Tasknumber[key]);
                    console.log(key);
                      //header=Tasknumber[key]  
                        
                         
                   
                   
                    blblb.addTaskToList(Tasknumber[key]); 
                 });

                
        })
    }
}   