class UI{
    constructor(){
        this.gripSection=document.querySelector('.sectionAll'),
        this.gripSection.addEventListener('click',(e)=>this.deleteTask(e))
    }
    addTaskToList(task){

        
        var dateshow = new Date(task.date);

            const todo = document.createElement('div');

            this.addClassToElem(todo, ['row', 'section', 'd-flex', 'justify-content-center']);

            const todoBar = document.createElement('div');
            //todoBar.classList.add('col-6 row section-cards section-card text-white bg-info mb-3');
            //col-12 col-sm-12 col-md-6 col-lg-6
            this.addClassToElem(todoBar, ['row','col-sm-12','col-md-6','col-12','col-lg-6','section-cards', 'section-card', 'text-white', 'bg-info', 'mb-3'])

            const todoBarsecond = document.createElement('div');
            //todoBarsecond.innerHTML=name + "</div>";

            //todoBarsecond.classList.add('card-header header-card');
            this.addClassToElem(todoBarsecond, ['card-header', 'header-card','d-flex','justify-content-between']);
            todoBarsecond.innerText = name;

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
            this.addClassToElem(createbtnone,['btn','btn-info','edit']);
            this.addClassToElem(createbtntwo,['btn','btn-info','cancel-btn']);

            const createione=document.createElement('i');
            const createitwo=document.createElement('i');

            this.addClassToElem(createione,['far','fa-edit']);
            this.addClassToElem(createitwo,['far','fa-times-circle']);

            
            const dateDeadline=document.createElement('div');
            this.addClassToElem(dateDeadline,['card-header','date-deadline']);
            //dateDeadline.innerText="Deadline : "+dateshow.getDay()+"/"+dateshow.getMonth()+"/"+dateshow.getFullYear()+" "+(task['time'].getHours()-1)+":"+task['time'].getMinutes();
            //dateDeadline.innerText=`${task.date} ${task.time}`
            cardArea.append(todo) 
            todo.appendChild(todoBar);
            todoBar.appendChild(todoBarsecond);
            todoBar.appendChild(todoBarthird);
            todoBarthird.appendChild(todoBarfour);
            // todoBar.append(todoBarsecond);
            todoBarsecond.append(buttonsblock);
            this.gripSection.append(cardArea);
            buttonsblock.append(createbtnone);
            buttonsblock.append(createbtntwo);
            createbtnone.append(createione);
            createbtntwo.append(createitwo);
            todoBarthird.append(dateDeadline);
            
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
    }
}