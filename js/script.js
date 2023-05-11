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

// inputField.addEventListener("keyup", function(e) {
//   // trim fuction removes space of front and back of the inputed value
//   let inputVal = inputField.value.trim(); 
//   // if enter button is clicked and inputed value length is greated than 0.
//   if (e.key === "Enter" && inputVal.length > 0) {
//     let liTag = 
//         `<li class="list pending" onclick="handleStatus(this)">
//           <input type="checkbox" />
//           <span class="task">${inputVal}</span>
//           <i class="uil uil-trash"></i>
//         </li>`;
//     // inserting li tag inside the todolist div
//     $('.todoLists').append(liTag);
//     // removing value from input field
//     inputField.value = ""; 
//     allTasks();
//   }
// });

function handleStatus(e) {
  // getting checkbox
  let checkbox = e.querySelector('input'); 
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

// $(document).on('click','.list',function(){
//   let e = $('input');
//   if ($(this).is(':checked')) {
//         $(this).attr('value', 'true');
//       } else {
//         $(this).attr('value', 'false');
//       }
//   e.$(this).toggleClass('pending');
//  });

// // Menghapus task (list)
// $(document).on('click','.uil-trash',function(){
//   $(this).parent('li').remove();
// })

// deleting all, membersihkan semua list
// clearButton.addEventListener("click", () => {
//   todoLists.innerHTML = "";
//   allTasks();
// });

// Here it's Jquery time !
$(document).ready(function(){

  // Input field
  $(".input-field textarea").keyup(function(e) {
    let key = e.which;
    let inputVal = $(".input-field textarea").val();
    inputVal.trim();
    // the enter key code
    if(key == 13) {
      let liTag = 
          `<li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash"></i>
          </li>`;
      // inserting li tag inside the todolist div
      $('.todoLists').append(liTag);
      // removing value from input field
      $(this).val(""); 
      allTasks();
    }
  });

  // Hover Button
  $('.clear-button').hover(function() {
    $(this).css('cursor','pointer');
    $(this).css('transition','ease-in-out .3s');
  });

  // Menghapus task (list)
  $(document).on('click','.uil-trash',function(){
    $(this).parent('li').remove();
  });

  // Membersihkan semua list
  $(document).on('click', '.clear-button', function() {
    let ClearAll = $('.todoLists');
    ClearAll.html("");
    allTasks();
  });
});