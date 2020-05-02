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

let counter = 1;
for(const property in workDayHours) {
  var task = "#task" + counter;
  $(task).text(workDayHours[property]);
  var timeId = "#time" + counter;
  var currentHour = moment().hour();
  var timeString = $(timeId).text();
  var timeNumber = hourNumberFromHourString(timeString);  
  if(timeNumber < currentHour) {
    $(task).addClass("past");
  } else if (timeNumber > currentHour) {
    $(task).addClass("future");
  } else {
    $(task).addClass("present");
  }
  counter ++;
}
