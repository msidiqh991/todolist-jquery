// Submit and pending task function
function allTasks() {
  let tasks = $(".pending");
  // validasi, jika nilai (value) dari text != 0, maka data tidak akan diterima!
  $(".pending-num").text(tasks.length === 0 ? "0" : tasks.length);
  // Set list
  let allLists = $(".list");
  if (allLists.length > 0) {
    $('.todoLists').css('margin-top','20px');
    $('.clear-button').css('pointer-events', 'auto');
    return;
  }
    $('.todoLists').css('margin-top','0px');
    $('.clear-button').css('pointer-events', 'none');
};

function handleStatus(e) {
  // getting checkbox
  let checkbox = $(e).find('input');
  // checkbox.checked = checkbox.checked ? false : true;
  checkbox.prop('checked', !checkbox.prop('checked'));
  $(e).toggleClass("pending");
  allTasks();
}

// Jquery field!
$(document).ready(function(){
  // Input field
  $(".input-field textarea").keyup(function(e) {
    let key = e.which;
    let inputVal = $(".input-field textarea").val().trim();
    // the enter key code
    if(key == 13 && inputVal.length > 0) {
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