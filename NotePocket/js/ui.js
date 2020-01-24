class UI{
    constructor(){
        this.gripSection=document.querySelector('.sectionAll'),
        this.gripSection.addEventListener('click',(e)=>this.deleteTask(e)),
        this.gripSection.addEventListener('click',(e)=>this.addPriorityTask(e))
    }
    addTaskToList(task){

        
       

            const todo = document.createElement('div');

            this.addClassToElem(todo, ['row', 'section', 'd-flex', 'justify-content-center']);

            const todoBar = document.createElement('div');
            //todoBar.classList.add('col-6 row section-cards section-card text-white bg-info mb-3');
            //col-12 col-sm-12 col-md-6 col-lg-6
            if(task.notice!==false)
            // eslint-disable-next-line no-empty
            {
            
              this.addClassToElem(todoBar, ['row','col-sm-12','col-md-6','col-12','col-lg-6','section-cards', 'section-card', 'text-white', 'bg-danger', 'mb-3'])
            }
            this.addClassToElem(todoBar, ['row','col-sm-12','col-md-6','col-12','col-lg-6','section-cards', 'section-card', 'text-white', 'bg-info', 'mb-3'])

            const todoBarsecond = document.createElement('div');
            //todoBarsecond.innerHTML=name + "</div>";

            //todoBarsecond.classList.add('card-header header-card');
            this.addClassToElem(todoBarsecond, ['card-header', 'header-card','d-flex','justify-content-between']);
            todoBarsecond.innerText = task.title;

            const buttonsblock=document.createElement('div');
            buttonsblock.classList.add('buttons');

            const todoBarthird = document.createElement('div');
            todoBarthird.classList.add('card-body');

            const cardArea=document.createElement('div');
            cardArea.classList.add('card-area');
          

            const todoBarfour = document.createElement('p');
            todoBarfour.classList.add('card-text');
            todoBarfour.innerText = task.describe;

        // createbuttons(['btnone','btntwo','btnthree'],['btn','btn-info','edit'],['btn','btn-info','cancel-btn']);

            const createbtnone=document.createElement('button');
            const createbtntwo=document.createElement('button');
            
            if(task.notice!==false)
            // eslint-disable-next-line no-empty
            {
               this.addClassToElem(createbtnone,['btn','btn-danger','edit']);
              this.addClassToElem(createbtntwo,['btn','btn-danger','cancel-btn']);
            
            }
            this.addClassToElem(createbtnone,['btn','btn-info','edit']);
            this.addClassToElem(createbtntwo,['btn','btn-info','cancel-btn']);

            const createione=document.createElement('i');
            const createitwo=document.createElement('i');

            this.addClassToElem(createione,['far','fa-edit']);
            this.addClassToElem(createitwo,['far','fa-times-circle']);

            
            const dateDeadline=document.createElement('div');
            this.addClassToElem(dateDeadline,['card-header','date-deadline']);

            
            
            
            dateDeadline.innerText=`Created: ${task.createNote}`
            cardArea.append(todo) 
            todo.appendChild(todoBar);
            todoBar.appendChild(todoBarsecond);
            todoBar.appendChild(todoBarthird);//
            todoBarthird.appendChild(todoBarfour);
            // todoBar.append(todoBarsecond);//
            todoBarsecond.append(buttonsblock);
            this.gripSection.append(cardArea);
            buttonsblock.append(createbtnone);
            buttonsblock.append(createbtntwo);
            createbtnone.append(createione);
            createbtntwo.append(createitwo);
            todoBarthird.after(dateDeadline);
            if(task.time!=='00:00')
            // eslint-disable-next-line no-empty
            {
                const dateNoteDeadline=document.createElement('div');
                this.addClassToElem(dateNoteDeadline,['card-header','date-deadline']);
              //console.log(new Date(dateDeadline))
              // console.log(task.time.search(':'))
               
               let min=task.time.slice(task.time.search(':')+1,task.time.length);
               let hours=task.time.slice(0,task.time.search(':'));
       
               
                const time = new Date(task.date);
                time.setHours(hours);
                time.setMinutes(min);
                console.log(time);
               dateNoteDeadline.innerHTML=`<p>Deadline: ${time.getFullYear()}-${time.getMonth()}-${time.getDay()} | ${time.getHours()}:${time.getMinutes()}</p>`;
               dateDeadline.after(dateNoteDeadline);
            }
            
            
            
           
            
    }
    addClassToElem(elem, array){

    
        for (var i = 0; array.length > i; i++)
          {
            elem.classList.add(array[i]);
    
          }
    
      }

      

    deleteTask(e){
        
  
             if(e.target.closest('.cancel-btn')!==null)
             {  
                e.target.closest('.card-area').remove();
              
             }

            //console.log(e.path[6].node);
    }
    addPriorityTask(e)
    {
      //console.log(e.target.closest('.card-header').innerText);
      if(e.target.closest('.edit')!==null)
      {  
           const headerTask = e.target.closest('.card-header').innerText;

           const updateTask=new Task();
           updateTask.updateDataFromDB(headerTask);

           //e.target.closest('.bg-info').classList.remove('bg-info');
           e.target.closest('.bg-info').classList.add('bg-danger');

         //const modalUpdateTask=document.querySelector('.modal-block-update')

          //const updateTask=new AppEvents();

         // updateTask.openModal(modalUpdateTask);



       
      }
      
    }
   

}