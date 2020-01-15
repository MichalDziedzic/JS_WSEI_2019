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
    
    }