// Work hour varibles
var workDayHours = {
    "9AM": "",
    "10AM": "",
    "11AM": "",
    "12PM": "",
    "1PMM": "",
    "2PM": "",
    "3PM": "",
    "4PM": "",
    "5PM": "",
};

// Function to run page and store workDay when ready/updated
$(document).ready(function(){
    if(!localStorage.getItem("workDay")) {
      updateCalendar(workDayHours);
    } else {
      updateCalendar(JSON.parse(localStorage.getItem("workDay")));
    }
  })

// Code to capture today's date
$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do'));

