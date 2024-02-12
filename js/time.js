let date = new Date(); //variable declared to set a new date object to the current date and time.
let day = date.getDay(); //variable set to the current day.
let hour = date.getHours(); //variable set to  the current hour.
let amPm = 'am'; //variable string set to "am".
let todaysMeetings = []; //empty array to hold todays meeitings.
let nextMeeting; //variable declared to hold the next meeting.

update();//invokes the "update" function.

for (i = 0; i < meetingList.length; i++) { //run a loop through the meetingList array ,
  if (meetingList[i].days.includes(day)) {//if meeting is happening  today, 
    todaysMeetings.push(meetingList[i]);//add it  to the "todaysMeetings" array.
  }
}

findNext();//invoke the "findNext" function.
let nextMeetingHour = nextMeeting.time; //declares a variable to hold the hour of the next meeting.
standardTime();//invoke the "standardTime" function.

$('#next').click(() => {//"click" event listener added to the "next" button.
  $('#soonWarning').text('');//clears the text "meeting starts soon" text.
  nextMeeting = undefined;//clears the variable that holds the next meeting.
  findNext();//invokes the "findNext" function.
  nextMeetingHour = nextMeeting.time;//sets the nextMeeting Hour variable to the NEW next meeting time
  standardTime();//invokes the standardTime function. 
});

//----------------Function to find the next meeting out of the "meetingList" array--------------------------//
function findNext() {
  while (nextMeeting === undefined) {// while loop that continues to run the "search" function
    search();//invokes the "search" function.
  }
}

//----------------Function to search through the current meeting list and display the next upcoming meeting-----------------//
function search() {
  hour++; //increments the hour
  for (i = 0; i < todaysMeetings.length; i++) { //searches through the todaysMeetings array,
    if (hour === todaysMeetings[i].time) { //if a meeting's start time matches the hour variable,
      nextMeeting = todaysMeetings[i]; //the next meeting variable is set to the meeting that was a match.
    }
  }
}

//----Function to convert the meeting hour into 12-hr. format-----//
function standardTime() {
  if (nextMeetingHour === 25) { //checks to see if the meeting hour has been incremented past the possible meeting times.
    $('#meetingModalTitle').text('That\'s All For Now.'); //updates the meeting modal title so it doesn't display "next meeting."
    $('#timeContainer').html('<h2>No more meetings today.</h2>');//updates the message to inform there are no more meetings.
    $('#soonWarning').text('');//clears the "starts soon" message
    $('#ride').hide(); //hides the button to request a ride.
    $('#next').hide();//hides the button to go to the next meeting.
  }
  if (nextMeetingHour > 12) {// if the hour has gone past 12,
    nextMeetingHour -= 12;//decrement the hour by 12, to reflect 12-hr. time format.
    amPm = 'pm'; //change the "amPm variable to a string that is appropriate."
  }
}

//------Function to update the time and meeting information every tenth second------//
function update() {
  setInterval(timeStamp, 100);//recurs the "timeStamp" function every 10th of a second.
  function timeStamp() {
    date = new Date(); //sets a new, current time/date object.
    const timeStamp = document.getElementById('time');//sets the location of the time display to a variable, using vanilla javaScript.
    timeStamp.innerHTML = date.toLocaleString();//updates the time display using vanilla javaScript.
    $('#nextMeetingName').text(nextMeeting.name);//updates the next meeting name display.
    $('#nextMeetingHour').text(nextMeetingHour);//updates the time of the next meeting.
    $('#amPm').text(amPm);//adjusts the am/pm text accordingly.
    $('#nextMeetingAddress').text(nextMeeting.address);//updates the next meeting time diplay.
    $('#nextMeetingType').text(nextMeeting.type);//updates the next meeting type display.
  }
}

//------Function to calculate how much time has elapsed since the users clean date, and display it properly as a sentence.--------//
function cleanTime(cleanDay) {
  let now = new Date();
  let cleanTime = new Date(cleanDay);
  let total = now - cleanTime;
  const millisecondPerYear = 31557600000;
  const millisecondPerMonth = 2592000000;
  const millisecondPerWeek = 604800000;
  const millisecondPerDay = 86400000;
  let years = 0;
  let months = 0;
  let weeks = 0;
  let days = 0;
  let output = ``;
  if (total < 86400001) {
    return `Keep coming back!`;
  }
  while (total > millisecondPerYear) {
    total -= millisecondPerYear;
    years++;
  }
  while (total > millisecondPerMonth) {
    total -= millisecondPerMonth;
    months++;
  }
  while (total > millisecondPerWeek) {
    total -= millisecondPerWeek;
    weeks++;
  }
  while (total > millisecondPerDay) {
    total -= millisecondPerDay;
    days++;
  }
  if (years > 1) {
    output += `${years} years `;
  } else if (years > 0) {
    output += `${years} year `;
  }
  if (months > 1) {
    output += `${months} months `;
  } else if (months > 0) {
    output += `${months} month `;
  }
  if (weeks > 1) {
    output += `${weeks} weeks `;
  } else if (weeks > 0) {
    output += `${weeks} week `;
  }
  if (days > 1) {
    output += `${days} days `;
  } else if (days > 0) {
    output += `${days} day `;
  }
  return output;
}