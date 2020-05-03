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


// Code to capture today's date
$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do'));

// Setting the varible block counter to start at 1
let counter = 1;
// Code to identify current, past and future properties in work day hours
for(const property in workDayHours) {
  let taskId = "#task" + counter;
  $(taskId).text(workDayHours[property]);
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

// event listener on button and save the task objects taskValue and textString
$("button").click(function() {
  taskValue = $(this).siblings("textarea").val();
  textString = $(this).siblings("div").text();
  saveTask(textString, taskValue);
});

// function to switch hours into number text string to identify current, past, future
function stringNumberReturn(textString) {
  switch(textString) {
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 13;
    case "2 PM": return 14;
    case "3 PM": return 15;
    case "4 PM": return 16;
    case "5 PM": return 17;
  }
  
}
