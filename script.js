// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // console.log(dayjs().format("dddd MMMM, D"));

// ************************************************

// I started coding in js because Poornima said we could use either jquery or js for assignments in an earlier class.
// Also there is no mention of using jquery in the grading requirements of the Module 5 Challenge.

// ************************************************

  // get current hour and convert to a number
  var currentHour = parseInt(dayjs().format("H"));
  // console.log(typeof currentHour);

  // put current day in element currentday
  var dayDate = document.getElementById("currentDay");
  dayDate.textContent = dayjs().format("dddd MMMM, D");

  // create a variable for the container section
  var containerElement = document.getElementById("container");

  // runs through hours of the day and creates timeBlock for each hour

  for (let i = 9; i < 18; i++) {
    // var element = array[i];
    var timeBlock = document.createElement("div");
    var timeSection = document.createElement("p");
    var taskSection = document.createElement("textarea");
    var taskSave = document.createElement("button");

    //sets the attributes for each row and section
    timeBlock.setAttribute("class", "row time-block");
    timeBlock.setAttribute("id", i);
    timeSection.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    taskSection.setAttribute("class", "col-8 col-md-10 description");
    taskSave.setAttribute("class", "btn saveBtn col-2 col-md-1");

    // I created this in case each button needed the id of timeblack for the button click event to work.
    // I ended up not using it.
    taskSave.setAttribute("id", i + "-button");

    //puts the button in the section taskSave
    taskSave.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';

    //appends all sections to the time block
    timeBlock.append(timeSection, taskSection, taskSave);
    containerElement.append(timeBlock);

    // console.log(timeBlock);
    // console.log(taskSection)

    //checks current hour and adds formatting defined for that hour in the css
    if (currentHour < i) {
      taskSection.classList.add("future");
    } else if (currentHour === i) {
      taskSection.classList.add("present");
    } else {
      taskSection.classList.add("past");
    }

    // Set time section to 12 hour format.  There probably is a better way to do this.
    if (i === 9) {
      timeSection.textContent = "9:00 a.m.";
    } else if (i === 10) {
      timeSection.textContent = "10:00 a.m.";
    } else if (i === 11) {
      timeSection.textContent = "11:00 a.m.";
    } else if (i === 12) {
      timeSection.textContent = "12:00 p.m.";
    } else if (i === 13) {
      timeSection.textContent = "1:00 p.m.";
    } else if (i === 14) {
      timeSection.textContent = "2:00 p.m.";
    } else if (i === 15) {
      timeSection.textContent = "3:00 p.m.";
    } else if (i === 16) {
      timeSection.textContent = "4:00 p.m.";
    } else {
      timeSection.textContent = "5:00 p.m.";
    }

    //sets timesection to military time
    // timeSection.textContent = i;
  }

  // This section is written in jquery because I needed help getting this to work.  The TA that helped me couldn't figure it out in js.

  $('.saveBtn').on('click', function() {
    var value = $(this).siblings(".description").val();
    var idValue = $(this).parent().attr("id");
    console.log(value, idValue);
    if(value !== ""){
      localStorage.setItem(idValue, value);
    }
  })

  // Loads the data in local storage to the page.  There probably is a better way to do this but for the limited amount of time blocks, this was more efficient because it was quickest for me.
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
 
});