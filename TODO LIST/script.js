

window.addEventListener('load',()=>{
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const input2 = document.querySelector('#task-input-2');
    const input3 = document.querySelector('#task-input-3');
    const list = document.querySelector('#task');

    

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const task = input.value;
        const task2 = input2.value;
        const task3 = input3.value;

        if(!task ){
            alert('Enter Some Task')
        }
        else if(!task2 && !task3){
            const userResponse = confirm("Do you want to proceed without adding Time?");
        if (userResponse) {
            const task_element = document.createElement('div');
            task_element.classList.add("tasks")
    
            const task_input_element = document.createElement('input');
            task_input_element.classList.add("tasks-text")
            task_input_element.type = "text";
            task_input_element.value = task;
            task_input_element.setAttribute("readonly","readonly")
    
            var a = document.getElementsByClassName('.tasks-text')
    
            const task_button_element = document.createElement('div');
            task_button_element.classList.add("action")
    
            const task_content_element = document.createElement("div");
            task_content_element.classList.add("content")
    
            const edit = document.createElement('button');
            edit.classList.add("edit")
            edit.innerText = "edit"
    
            const Delete = document.createElement('button');
            Delete.classList.add("delete")
            Delete.innerText = "delete"
    
            const complete = document.createElement('button');
            complete.classList.add("complete")
            complete.innerText = "complete"
    
            
    
    
            task_element.appendChild(task_content_element);
            
            task_content_element.appendChild(task_input_element)
            list.append(task_element);
            list.appendChild(task_button_element);
            task_button_element.appendChild(edit)
            task_button_element.appendChild(Delete)
            task_button_element.appendChild(complete)
    
    
            input.value='';
            input2.value='';
            input3.value='';
    
            edit.addEventListener('click',()=>{
    
                if(edit.innerText.toLowerCase() =='edit' ){
                    task_input_element.removeAttribute("readonly");
                    task_input_element.style.color = 'white'
                    task_input_element.focus();
                    edit.innerText = "Save"
                }else{
                    task_input_element.setAttribute("readonly","readonly")
                    edit.innerText = "Edit";
                    task_input_element.style.color = '#abd1c6'
    
                }
            })
    
            Delete.addEventListener('click', ()=>{
                list.removeChild(task_element);
                task_button_element.removeChild(edit);
                task_button_element.removeChild(Delete);
                list.removeChild(task_button_element);
            })
    
            complete.addEventListener('click',()=>{
    
                if(complete.innerText.toLowerCase() =='complete' ){
                    task_input_element.style.textDecoration = "line-through";
                    task_input_element.style.opacity = "0.5";
                    complete.innerText = "Uncomplete"
                }else{
                    task_input_element.style.textDecoration = "none";
                    task_input_element.style.opacity = "1";
    
                    complete.innerText = "Complete";
                    
                }
    
            })
            // Further code for when the user chooses "Yes"
        } else {
            // User clicked "Cancel" (no)
            console.log("User clicked No. Stopping...");
            // Further code for when the user chooses "No" or clicks "Cancel"
        }
        }

        else if(task && !(task2  && task3)){
            if(!task2){
                const userResponse = confirm("Do you want to proceed without adding starting Time?");
                if(userResponse){
                    const task_element = document.createElement('div');
            task_element.classList.add("tasks")
    
            const task_input_element = document.createElement('input');
            task_input_element.classList.add("tasks-text")
            task_input_element.type = "text";
            task_input_element.value = 'End At ('+task3 +") : " + task;
            task_input_element.setAttribute("readonly","readonly")
    
            var a = document.getElementsByClassName('.tasks-text')
    
            const task_button_element = document.createElement('div');
            task_button_element.classList.add("action")
    
            const task_content_element = document.createElement("div");
            task_content_element.classList.add("content")
    
            const edit = document.createElement('button');
            edit.classList.add("edit")
            edit.innerText = "edit"
    
            const Delete = document.createElement('button');
            Delete.classList.add("delete")
            Delete.innerText = "delete"
    
            const complete = document.createElement('button');
            complete.classList.add("complete")
            complete.innerText = "complete"
    
            
    
    
            task_element.appendChild(task_content_element);
            
            task_content_element.appendChild(task_input_element)
            list.append(task_element);
            list.appendChild(task_button_element);
            task_button_element.appendChild(edit)
            task_button_element.appendChild(Delete)
            task_button_element.appendChild(complete)
    
    
            input.value='';
            input2.value='';
            input3.value='';
    
            edit.addEventListener('click',()=>{
    
                if(edit.innerText.toLowerCase() =='edit' ){
                    task_input_element.removeAttribute("readonly");
                    task_input_element.style.color = 'white'
                    task_input_element.focus();
                    edit.innerText = "Save"
                }else{
                    task_input_element.setAttribute("readonly","readonly")
                    edit.innerText = "Edit";
                    task_input_element.style.color = '#abd1c6'
    
                }
            })
    
            Delete.addEventListener('click', ()=>{
                list.removeChild(task_element);
                task_button_element.removeChild(edit);
                task_button_element.removeChild(Delete);
                list.removeChild(task_button_element);
            })
    
            complete.addEventListener('click',()=>{
    
                if(complete.innerText.toLowerCase() =='complete' ){
                    task_input_element.style.textDecoration = "line-through";
                    task_input_element.style.opacity = "0.5";
                    complete.innerText = "Uncomplete"
                }else{
                    task_input_element.style.textDecoration = "none";
                    task_input_element.style.opacity = "1";
    
                    complete.innerText = "Complete";
                    
                }
    
            })

                }
            }

            else if(!task3){
                const userResponse = confirm("Do you want to proceed without adding ending Time?");
                if(userResponse){

                const task_element = document.createElement('div');
            task_element.classList.add("tasks")
    
            const task_input_element = document.createElement('input');
            task_input_element.classList.add("tasks-text")
            task_input_element.type = "text";
            task_input_element.value = 'Starts At ('+task2 +") : " + task;
            task_input_element.setAttribute("readonly","readonly")
    
            var a = document.getElementsByClassName('.tasks-text')
    
            const task_button_element = document.createElement('div');
            task_button_element.classList.add("action")
    
            const task_content_element = document.createElement("div");
            task_content_element.classList.add("content")
    
            const edit = document.createElement('button');
            edit.classList.add("edit")
            edit.innerText = "edit"
    
            const Delete = document.createElement('button');
            Delete.classList.add("delete")
            Delete.innerText = "delete"
    
            const complete = document.createElement('button');
            complete.classList.add("complete")
            complete.innerText = "complete"
    
            
    
    
            task_element.appendChild(task_content_element);
            
            task_content_element.appendChild(task_input_element)
            list.append(task_element);
            list.appendChild(task_button_element);
            task_button_element.appendChild(edit)
            task_button_element.appendChild(Delete)
            task_button_element.appendChild(complete)
    
    
            input.value='';
            input2.value='';
            input3.value='';
    
            edit.addEventListener('click',()=>{
    
                if(edit.innerText.toLowerCase() =='edit' ){
                    task_input_element.removeAttribute("readonly");
                    task_input_element.style.color = 'white'
                    task_input_element.focus();
                    edit.innerText = "Save"
                }else{
                    task_input_element.setAttribute("readonly","readonly")
                    edit.innerText = "Edit";
                    task_input_element.style.color = '#abd1c6'
    
                }
            })
    
            Delete.addEventListener('click', ()=>{
                list.removeChild(task_element);
                task_button_element.removeChild(edit);
                task_button_element.removeChild(Delete);
                list.removeChild(task_button_element);
            })
    
            complete.addEventListener('click',()=>{
    
                if(complete.innerText.toLowerCase() =='complete' ){
                    task_input_element.style.textDecoration = "line-through";
                    task_input_element.style.opacity = "0.5";
                    complete.innerText = "Uncomplete"
                }else{
                    task_input_element.style.textDecoration = "none";
                    task_input_element.style.opacity = "1";
    
                    complete.innerText = "Complete";
                    
                }
    
            })

            }
            
        }
    }
        else if(task && task2 && task3){
            const task_element = document.createElement('div');
            task_element.classList.add("tasks")
    
            const task_input_element = document.createElement('input');
            task_input_element.classList.add("tasks-text")
            task_input_element.type = "text";
            task_input_element.value = "("+task2+" - "+task3+")"+" : "+task;
            task_input_element.setAttribute("readonly","readonly")
    
            var a = document.getElementsByClassName('.tasks-text')
    
            const task_button_element = document.createElement('div');
            task_button_element.classList.add("action")
    
            const task_content_element = document.createElement("div");
            task_content_element.classList.add("content")
    
            const edit = document.createElement('button');
            edit.classList.add("edit")
            edit.innerText = "edit"
    
            const Delete = document.createElement('button');
            Delete.classList.add("delete")
            Delete.innerText = "delete"
    
            const complete = document.createElement('button');
            complete.classList.add("complete")
            complete.innerText = "complete"
    
            
    
    
            task_element.appendChild(task_content_element);
            
            task_content_element.appendChild(task_input_element)
            list.append(task_element);
            list.appendChild(task_button_element);
            task_button_element.appendChild(edit)
            task_button_element.appendChild(Delete)
            task_button_element.appendChild(complete)
    
    
            input.value='';
            input2.value='';
            input3.value='';
    
            edit.addEventListener('click',()=>{
    
                if(edit.innerText.toLowerCase() =='edit' ){
                    task_input_element.removeAttribute("readonly");
                    task_input_element.style.color = 'white'
                    task_input_element.focus();
                    edit.innerText = "Save"
                }else{
                    task_input_element.setAttribute("readonly","readonly")
                    edit.innerText = "Edit";
                    task_input_element.style.color = '#abd1c6'
    
                }
            })
    
            Delete.addEventListener('click', ()=>{
                list.removeChild(task_element);
                task_button_element.removeChild(edit);
                task_button_element.removeChild(Delete);
                list.removeChild(task_button_element);
            })
    
            complete.addEventListener('click',()=>{
    
                if(complete.innerText.toLowerCase() =='complete' ){
                    task_input_element.style.textDecoration = "line-through";
                    task_input_element.style.opacity = "0.5";
                    complete.innerText = "Uncomplete"
                }else{
                    task_input_element.style.textDecoration = "none";
                    task_input_element.style.opacity = "1";
    
                    complete.innerText = "Complete";
                    
                }
    
            })
        }
        
    })

})