// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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

  var currentHour = parseInt(dayjs().format("H"));
  console.log(typeof currentHour);

  var dayDate = document.getElementById("currentDay");
  dayDate.textContent = dayjs().format("dddd MMMM, D");
  var containerElement = document.getElementById("container");

  for (let i = 9; i < 18; i++) {
    // var element = array[i];
    var timeBlock = document.createElement("div");
    var timeSection = document.createElement("p");
    var taskSection = document.createElement("textarea");
    var taskSave = document.createElement("button");

    timeBlock.setAttribute("class", "row time-block");
    //timeBlock.setAttribute("class","row time-block past");
    timeSection.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    taskSection.setAttribute("class", "col-8 col-md-10 description");
    taskSave.setAttribute("class", "btn saveBtn col-2 col-md-1");

    timeSection.textContent = i;
    taskSave.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';

    timeBlock.append(timeSection, taskSection, taskSave);
    containerElement.append(timeBlock);

    if (currentHour < i) {
      timeBlock.classList.add("future");
    } else if (currentHour === i) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("past");
    }




  }

});