
class AppEvents
{

    constructor()
    {
        this.modalEl=document.querySelector('.modal-block'),
        this.WrapContent = document.querySelector("#wrapper-content"),
        this.wrapSignIn = document.querySelector("#wrapper-signin"),
        this.uid=null,

        document.querySelector('.fa-plus').addEventListener('click',()=>this.openModal()),
        document.querySelector('.cancel-btn').addEventListener('click',()=>this.closeModal()),
        document.querySelector('.cancel-x').addEventListener('click',()=>this.closeModal()),
        document.querySelector('.todoForm').addEventListener('submit',(e)=>this.checkformTask(e)),
        document.querySelector('.signInForm').addEventListener('submit',(e)=>this.checkformUserLogin(e)),
        

        window.addEventListener('DOMContentLoaded', () =>this.checkUserSession());

    }
    checkUserSession()
    {
        //firebase.auth(.onAuthStateChanged( (user) => {...})
        //that=this;

        firebase.auth().onAuthStateChanged((user)=>{

        
            
            if (user){
                  console.log("dziala");
                  
                  //that.switchOnDashboard();

                  this.switchOnDashboard();
                  

                  //addUserDescribe(user);
                  this.uid = user.uid;
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
    checkformTask(e)
    {
        e.preventDefault();

        const taskName=document.querySelector('#NameTask').value;
            const  messege=document.querySelector('#message').value;
            const timeDeadline=document.querySelector('#deadlinetime').value;
          const dateDeadline=document.querySelector('#deadlinedate').value;
        
        console.log(taskName , messege, timeDeadline , dateDeadline);
        
        if(taskName!=='' || messege!=='')
        // eslint-disable-next-line no-empty
        {
            const ui=new UI();
        
            const task=new Task(taskName,messege,timeDeadline,dateDeadline);
        
            ui.addTaskToList(task);
        
            this.closeModal();
        
            document.querySelector('.todoForm').reset();
        
        }else
        // eslint-disable-next-line no-empty
        {
            console.log('try again!')
        }
    }

}

    const StartEvent = new AppEvents();












