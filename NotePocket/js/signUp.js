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
       
        //    firebase.auth().onAuthStateChanged((user)=>{
       
        //     console.log(this);
               
        //        if (user){
            setTimeout(()=> {
                
              
                
                   //  let uiduser = user.uid;
                   const uiduser = firebase.auth().currentUser.uid;
                     
       
                       firebase.database().ref(uiduser+"/UserData").set(this);
                        
            }, 3000); 
                   
        //        }
        //         else{
             
        //          // No user is signed in.
        //          console.log('user not exist');
               
        //        }
             
        //    })
               
             
             
       }

    }