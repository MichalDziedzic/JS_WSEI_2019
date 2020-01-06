class Validator{
    constructor(form){

    this.form=document.querySelector(`.${form}`),
    this.TextArea = this.form.querySelector("textarea[name='message']"),
    this.TaskName = this.form.querySelector("input[name='NameTask']"),
    this.deadDate= this.form.querySelector("input[name='deadlineDay']"),
    this.deadTime=this.form.querySelector("input[name='time']")

        //this.form.addeventlistener('submit',(e)=>this.validate(e),false)
    }
    // isEmail(text){

    //     return text.indexOf('@')!==-1;
    // }
    isEmpty(text)
    {

        return text !=='';
    }

    validate(e){

        e.preventdefault();
        let errors=[];

        if(!this.isEmpty(this.TaskName))
        // eslint-disable-next-line no-empty
        {
            errors.push('podaj nagłowek zadania')
        }

        if(!this.isEmpty(this.TextArea))
        // eslint-disable-next-line no-empty
        {
            errors.push('podaj treść zadania')
        }
     


    }
    displayErrors(){
        //foreach po tablicy
    }
}

const task1 =new Validator('todoForm');
console.log(task1);