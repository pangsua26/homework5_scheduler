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

// Function to run page and store work day hours when ready/updated
$(document).ready(function(){
  if(!localStorage.getItem("workDayHours")) {
    updateCalendarTasks(workDayHours);
  } else {
    updateCalendarTasks(JSON.parse(localStorage.getItem("workDayHours")));
  }
})

// Code to capture today's date
$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do'));

// Setting the varible block to start at 1
let counter = 1;
// Code to identify current, past and future properties in work day hours
for(const property in workDayHours) {
  let task = "#task" + counter;
  $(task).text(workDayHours[property]);
  let timeId = "#time" + counter;
  let currentHour = moment().hour();
  let timeString = $(timeId).text();
  let timeNumber = stringNumber(timeString); 
  if(timeNumber < currentHour) {
    $(task).addClass("past");
  } else if (timeNumber > currentHour) {
    $(task).addClass("future");
  } else {
    $(task).addClass("current");
  }
  counter ++;
}

// event listener on button
$("button").click(function() {
 