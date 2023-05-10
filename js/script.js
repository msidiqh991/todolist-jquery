//Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

// Submit and pending task function
function allTasks() {
  // query selector css with jquery
  let tasks = $(".pending");

  // validasi, jika nilai (value) dari text != 0, maka data tidak akan diterima!
  pendingNum.textContent = tasks.length === 0 ? "0" : tasks.length;

  let allLists = $(".list");
  if (allLists.length > 0) {
    $('.todoLists').css('margin-top','20px');
    $('.clear-button').css('pointer-events', 'auto');
    return;
  }
    $('.todoLists').css('margin-top','0px');
    $('.clear-button').css('pointer-events', 'none');
};

inputField.addEventListener("keyup", (e) => {
  // trim fuction removes space of front and back of the inputed value
  let inputVal = inputField.value.trim(); 

  // if enter button is clicked and inputed value length is greated than 0.
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = 
        `<li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash"></i>
        </li>`;
        
    // inserting li tag inside the todolist div
    // todoLists.insertAdjacentHTML("beforeend", liTag);
    $('.todoLists').append(liTag);
    // removing value from input field
    inputField.value = ""; 
    allTasks();
  }
});

  // Mengatur status pada checkbox?
function handleStatus(e) {
  // getting checkbox
  const checkbox = e.querySelector('input'); 
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

// Menghapus task (list)
$(document).on('click','.uil-trash',function(){
  $(this).parent('li').remove();
})

// deleting all, membersihkan semua list
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


  // $('.pending').change( function() {
  //   let tasks = $('this').val();
  //   // validasi jika task 0, input tidak akan menerima-nya hingga valuenya != 0
  //   pendingNum.text = tasks.val().length === 0 ? "0" : tasks.val().length;
    
  //   let allLists = $('.list');
  //   if (allLists.val().length > 0) {
  //     todoLists.css('marginTop','20px');
  //     clearButton.css('pointerEvents','auto');
  //     return;
  //   }
  //   todoLists.css('marginTop','0px');
  //   clearButton.css('pointerEvents','none');
  // });

 //we will call this function while adding, deleting and checking-unchecking the task
// function allTasks() {
//   let tasks = document.querySelectorAll(".pending");

//   //if tasks' length is 0 then pending num text content will be no, if not then pending num value will be task's length
//   pendingNum.textContent = tasks.length === 0 ? "0" : tasks.length;

//   let allLists = document.querySelectorAll(".list");
//   if (allLists.length > 0) {
//     todoLists.style.marginTop = "20px";
//     clearButton.style.pointerEvents = "auto";
//     return;
//   }
//   todoLists.style.marginTop = "0px";
//   clearButton.style.pointerEvents = "none";
// }
});