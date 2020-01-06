

// const userNew= new User('login','password');
//const task1 =new Validator(document.querySelector('.todoForm'));
const modal = document.querySelector('.modal-block');

 document.querySelector('.fa-plus').addEventListener('click',() =>{
     
    modal.style.setProperty('display', 'block');
});

document.querySelector('.todoForm').addEventListener('submit',(e)=>{
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

}else
// eslint-disable-next-line no-empty
{
    console.log('try again!')
}


})













