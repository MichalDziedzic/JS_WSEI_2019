class SignUp extends User{

    constructor(email,password,name,surname)
    {
        super(email,password),
        this.name=name,
        this.surname=surname

        
    }
       signUpUserToDB()
       {
           
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
       }
       signUpUser()
       {
           //firebase.auth(.onAuthStateChanged( (user) => {...})
           //that=this;
       
           firebase.auth().onAuthStateChanged((user)=>{
       
            console.log(this);
               
               if (user){
                     //console.log("xxxx");
                     
                     //that.switchOnDashboard();
       
                    
                     
       
                     //addUserDescribe(user);
                     let uiduser = user.uid;
                     
       
                       firebase.database().ref("/"+uiduser).set(this);
                        
                     
                     
                   //  console.log(typeof(user.uid));
                    // console.log(user);
                    //create reference
             
                 
             
                     // todo get user data
                     
                   
               }
                else{
             
                 // No user is signed in.
                 console.log('user not exist');
               
               }
             
           })
               
             
             
       }

    }