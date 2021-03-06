// Work day hours varibles
var workDayHours = {
  "9AM": "",
  "10AM": "",
  "11AM": "",
  "12PM": "",
  "1PM": "",
  "2PM": "",
  "3PM": "",
  "4PM": "",
  "5PM": "",
};

// Moment function to capture today's date
$("#today-date h6").text(moment().format("dddd") + ", " + moment().format("MMMM Do"));

// Event listener on button and save the task objects taskValue and textString
$("button").click(function() {
  taskValue = $(this).siblings("textarea").val();
  textString = $(this).siblings("div").text();
  saveTask(textString, taskValue);
});

// Setting the varible block counter to start at 1
let counter = 1;
// Code to identify current, past and future hours in work day hours
for(const hours in workDayHours) {
  let taskId = "#task" + counter;
  $(taskId).text(workDayHours[hours]);
  let timeId = "#time" + counter;
  let currentHour = moment().hour();
  let timeString = $(timeId).text();
  let timeNumber = stringNumberReturn(timeString); 
  if(timeNumber < currentHour) {
    // adding class to past, future, current
    $(taskId).addClass("past");
  } else if (timeNumber > currentHour) {
    $(taskId).addClass("future");
  } else {
    $(taskId).addClass("current");
  }
  counter ++;
}
// function to switch hours into number text string to identify current, past, future
function stringNumberReturn(textString) {
  switch(textString) {
    case "9AM": return 9;
    case "10AM": return 10;
    case "11AM": return 11;
    case "12PM": return 12;
    case "1PM": return 13;
    case "2PM": return 14;
    case "3PM": return 15;
    case "4PM": return 16;
    case "5PM": return 17;
  }
  
}

// Function to run page and store work day hours when ready/updated
$(document).ready(function(){
  if(localStorage.getItem("workDayHours")) {
    updateCalendarTasks(workDayHours);
  } else {
    updateCalendarTasks(JSON.parse(localStorage.getItem("workDayHours")));
  }
})
// code to save to local storage
// code to get item from local storage and display
// code to update calendar tasks