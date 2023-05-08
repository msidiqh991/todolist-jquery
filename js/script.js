//Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//we will call this function while adding, deleting and checking-unchecking the task
function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  //if tasks' length is 0 then pending num text content will be no, if not then pending num value will be task's length
  pendingNum.textContent = tasks.length === 0 ? "0" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

//add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); //trim fuction removes space of front and back of the inputed value

  //if enter button is clicked and inputed value length is greated than 0.
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the todolist div
    inputField.value = ""; //removing value from input field
    allTasks();
  }
});

//checking and unchecking the chekbox while we click on the task
function handleStatus(e) {
  const checkbox = e.querySelector("input"); //getting checkbox
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

//deleting task while we click on the delete icon.
function deleteTask(e) {
  e.parentElement.remove(); //getting parent element and remove it
  allTasks();
}

//deleting all the tasks while we click on the clear button.
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});

// Here it's Jquery time !
$(document).ready(function(){

  // Hover Button
  $('.clear-button').hover(function() {
    $(this).css('cursor','pointer');
    $(this).css('transition','ease-in-out .3s');
  });

  $('.pending-num').hover(function() {
    $(this).css('font-style','italic');
  });

//   $('#inputText').change(function(){
//     var input = $(this).val();
//     $('ul').append('<li>' + input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i>' + '</li>')
//     $(this).val();
//   });  

//   $('ul').on('click', '.fa-trash', function() {
//     $(this).parent('li').fadeOut(200);
//     });

//   $('ul').on('click', '.fa-check', function() {
//     $(this).parent('li').toggleClass('checked');
//   });

//   // Validation
//   $('.form').submit(function() {
//     var nama = $('#inputText').val().length;			

//     if (nama == 0) {				
        
//         return false;
//     }
// });

});