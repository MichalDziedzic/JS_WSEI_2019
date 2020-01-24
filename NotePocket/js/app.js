
class AppEvents
{

    constructor()
    {   //this.modalUpdateTask=document.querySelector(''),
        this.modalEl=document.querySelector('.modal-block'),
        this.WrapContent = document.querySelector("#wrapper-content"),
        this.wrapSignIn = document.querySelector("#wrapper-signin"),
        this.uid=null,
        this.formSigin=document.querySelector('.sign_incontainer');
        this.registerdiv=document.querySelector('.register');

        document.querySelector('#openModal').addEventListener('click',()=>this.openModal(this.modalEl)),
        document.querySelector('.cancel-x').addEventListener('click',()=>this.closeModal(this.modalEl)),
        // document.querySelector('.cancel-x-update').addEventListener('click',()=>this.closeModal(document.querySelector('.modal-block-update')))
        document.querySelector('.todoForm').addEventListener('submit',(e)=>this.checkformTask(e)),
        document.querySelector('.signInForm').addEventListener('submit',(e)=>this.checkformUserLogin(e)),
        document.querySelector('#logout').addEventListener('click',()=>this.signoutUserserw()),
        document.querySelector('.asign_up').addEventListener('click',()=>this.openFormSignUp()),
        document.querySelector('.backdiv').addEventListener('click',()=>this.backToSignInPage()),
        document.querySelector('.signupForm').addEventListener('submit',(e)=>this.checkFormSignUp(e))

        this.checkUserSession();

    }
    checkUserSession()
    {
        //firebase.auth(.onAuthStateChanged( (user) => {...})
        //that=this;

        firebase.auth().onAuthStateChanged((user)=>{

        
            
            if (user){
                  console.log("dziala");
                  
                 // this.switchOnDashboard();
                  const emptyTask=new Task();
                  emptyTask.readDataFromDB();
                  this.uid = user.uid;
                  const uid = firebase.auth().currentUser.uid;

                    firebase.database().ref(uid+"/UserData").on("value",(snapshot)=>{

                        let userData= snapshot.val();
                        //console.log(userData.email);
                        document.querySelector('.align-self-center').children[0].innerHTML=`${userData.name} ${userData.surname}`;
                        document.querySelector('.dropdown-toggle').innerHTML=userData.email;

                    })

                  this.switchOnDashboard();
                  

                  //addUserDescribe(user);
                  
                  

                     //firebase.database().ref("/"+uiduser).set(userobj);
                     
                  //console.log(this);
                  
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
    checkformUserLogin(e)
    {
        e.preventDefault();

        const   UserEmail=document.querySelector('#login').value;
        const  UserPassword=document.querySelector('#password').value;

        if(UserEmail!=='' || UserPassword!=='')
        // eslint-disable-next-line no-empty
        {
            const SignInUser=new User(UserEmail,UserPassword);
            SignInUser.signIn();
        
        
            
        
            
        
            document.querySelector('.signInForm').reset();
        
        }else
        // eslint-disable-next-line no-empty
        {
            console.log('try again!')
        }
        
    }
    openModal()
    {
        this.modalEl.style.setProperty('display', 'block');
    }
    closeModal()
    {
        this.modalEl.style.setProperty('display', 'none');
    }
    switchOnDashboard()
    {
        this.WrapContent.classList.remove("hidden");
        this.wrapSignIn.classList.remove('inner');
        this.wrapSignIn.classList.add("hidden");

        
    }
    switchOnLoginPage()
    {
        
        this.WrapContent.classList.add("hidden");
        this.wrapSignIn.classList.add('inner');
        this.wrapSignIn.classList.remove("hidden");
    }
    openFormSignUp()
    {
        
            this.formSigin.classList.add("hidden");
            this.registerdiv.classList.remove('hidden');

         
        
          
    }
    backToSignInPage(){
         
        this.formSigin.classList.remove("hidden");
        this.registerdiv.classList.add('hidden');

    }
    
    checkformTask(e)
    {
        e.preventDefault();
        console.log(e.target)
        
        let dateshow = new Date();
        let hour=dateshow.getHours();
        let minutes=dateshow.getMinutes();
        let seconds=dateshow.getSeconds();

         const createNoteTime = `${hour}:${minutes}:${seconds}`;

        const taskName=document.querySelector('#NameTask').value;
            const  messege=document.querySelector('#message').value;
            const timeDeadline=document.querySelector('#deadlinetime').value;
          const dateDeadline=document.querySelector('#deadlinedate').value;
        
        console.log(taskName , messege, timeDeadline , dateDeadline);
        
        if(taskName!=='' || messege!=='')
        // eslint-disable-next-line no-empty
        {
            //const ui=new UI();
            
        
            const task=new Task(taskName,messege,timeDeadline,dateDeadline,createNoteTime);
        
           // ui.addTaskToList(task);
            
            task.saveDataToDB();
        
            this.closeModal();
        
            document.querySelector('.todoForm').reset();
        
        }else
        // eslint-disable-next-line no-empty
        {
            console.log('try again!')
        }
    }
    checkFormSignUp(e)
    {
        e.preventDefault();

        const emailSignUp=document.querySelector('#login_signup').value;
            const  passwordSignUp=document.querySelector('#password_signup').value;
            const nameSignUp=document.querySelector('#name_signup').value;
          const surnameSignUp=document.querySelector('#surname_signup').value;
        
       //console.log(emailSignUp ,passwordSignUp, nameSignUp , surnameSignUp);
        
        if(emailSignUp!=='' || passwordSignUp!=='' || nameSignUp!=='' || surnameSignUp!=='')
        // eslint-disable-next-line no-empty
        {
            
        
            const test=new SignUp(emailSignUp,passwordSignUp,nameSignUp,surnameSignUp);

             test.signUpUserToDB();


            test.signUpUser();

            
            
        
            
        
            document.querySelector('.signupForm').reset();
        
        }else
        // eslint-disable-next-line no-empty
        {
            console.log('try again!')
        }
    }
    signoutUserserw(){
            const divs = document.querySelectorAll('.card-area');
            this.switchOnLoginPage();
            [].forEach.call(divs, (divs)=>{
           
                divs.remove();
            });
        
        

        firebase.auth().signOut().then(function () {
          alert('wylogowano');
          //WrapContent.style.setProperty('display', 'none')
            
        }).catch(function (error) {
          // An error happened.
        });
      
      }

}

    const StartEvent = new AppEvents();












