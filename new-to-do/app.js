let  button = document.querySelector('#submit')

let  input_field = document.querySelector('#task-input')
let  todoTask = document.querySelector('.todo-tasks')
let  dateTime = document.querySelector('.dateTime')
let  container = document.querySelector('.container')
let myDate = new Date();
let taskContainer = document.querySelector('.todo-tasks');
let todoListValue = [];



let updateClock = () => {
const now = new Date()
const time = now.toLocaleTimeString()
let dates = myDate.toLocaleString('en-US',{weekday : 'long'})
dateTime.innerHTML = `${time}  :  ${dates}`
}

  function updateContainerMargin() {
  if (taskContainer.querySelectorAll('.task').length > 0) {
    container.style.marginTop = '10px';
  } else {
    container.style.marginTop = '150px';
  }
}



setInterval(updateClock,1000)
button.addEventListener('click',(e)=>{
  e.preventDefault();
    let newTodos = input_field.value.trim()
    //todoListValue = getTodoList() || []

    if(input_field.value == '' || input_field.value.trim().length == '0')
    {
      alert('enter task')
      console.log('nothing')
    }
    else
    {
      console.log(typeof(todoListValue))
      todoListValue.push(newTodos)

      addTodoListLocalStorage(todoListValue)

     


      let task_value = input_field.value;
      console.log(task_value)
     
      console.log(myDate.getHours())
      let myNewDate = new Date();
      let div1 = document.createElement('div')
      todoTask.append(div1)
      div1.classList.add('task')


      let taskP = document.createElement('p')
      div1.append(taskP)
     
      taskP.classList.add('task-detail')
      taskP.innerHTML = `[${myNewDate.getHours()}:${myNewDate.getMinutes()}:${myNewDate.getSeconds()}] - ${task_value}`;


      let taskdiv = document.createElement('div')
      div1.append(taskdiv)
      taskdiv.classList.add('decisions')

      let icon1 = document.createElement('i')
      taskdiv.append(icon1)
      icon1.classList.add('fa-solid')
      icon1.classList.add('fa-check')


      let icon3 = document.createElement('i')
      taskdiv.append(icon3)
      icon3.classList.add('fa-solid')
      icon3.classList.add('fa-xmark')

      let icon2 = document.createElement('i')
      taskdiv.append(icon2)
      icon2.classList.add('fa-solid')
      icon2.classList.add('fa-trash')

      console.log(task_value)
      console.log(input_field.innerHTML)

      input_field.value = '';  
     
      updateContainerMargin()
     
    }
})

const getTodoList = () =>{
  return JSON.parse(localStorage.getItem('Task-Value'))
}


addTodoListLocalStorage = (value) =>{
  return localStorage.setItem('Task-Value',JSON.stringify(value))
}




let abc = document.querySelector('.task')

taskContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    const task = e.target.closest('.task');
    if (task) {
      task.style.transition = 'all 0.5s ease';
      task.style.opacity = '0';
      task.style.transform = 'translateX(1200px)';
      setTimeout(() =>{
        task.remove();
        updateContainerMargin()
       },500)
      //task.remove(); // or task.style.display = 'none';
      console.log('Deleted:', task);
    }
  }
});


taskContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-check')) {
    const task = e.target.closest('.task');
    if (task) {
      const detail = task.querySelector('.task-detail');
      detail.style.textDecoration = 'line-through';

    }
  }
});


taskContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-xmark')) {
    const task = e.target.closest('.task');
    if (task) {
      const detail = task.querySelector('.task-detail');
      detail.style.textDecoration = 'none';

    }
  }
});