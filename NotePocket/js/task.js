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
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref(uid +"/Tasknum/"+this.title).on("value",(snapshot)=>
        {
            let Tasknumber = snapshot.val();
            console.log(Tasknumber);
        })
    }
}   