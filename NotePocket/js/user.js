class User{

constructor(login,password){

  this.user=true,
  this.email=login,
  this.password=password

}

signIn()
{
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).catch(function (error) {
  
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      })

}

}





 


