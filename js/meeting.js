//-------------- Pre-set Meetings--------------//
let meetingList = [
  {
    name: "Freedom Group",
    time: 12,
    address: "1500 Broadway",
    type: "Open Meeting",
    days: [1, 2, 3, 4, 5]
  },
  {
    name: "Zoo Crew",
    time: 20,
    address: "1500 Broadway",
    type: "Open Meeting",
    days: [1, 2, 3, 4, 5]
  },
  {
    name: "Rise and Shine",
    time: 7,
    address: "1683 1st Ave.",
    type: "Closed Meeting",
    days: [1, 2, 3, 4, 5]
  },
  {
    name: "Rocky Mtn. Group",
    time: 18,
    address: "3800 Reserve",
    type: "Open Meeting",
    days: [0, 6]
  },
  {
    name: "Men's Group",
    time: 19,
    address: "625 Overthere Dr.",
    type: "Men's Meeting",
    days: [2, 4]
  },
  {
    name: "Hug Life",
    time: 20,
    address: "1500 Broadway",
    type: "Speaker Meeting",
    days: [1, 2, 3, 4, 5]
  },
  {
    name: "Dopeless Hopefiends",
    time: 22,
    address: "2808 Speedway",
    type: "Open Meeting",
    days: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    name: "Women's Group",
    time: 19,
    address: "1405 Brooks",
    type: "Women's Meeting",
    days: [1, 3]
  },
  {
    name: "",
    time: 25,
    address: "",
    type: "1-800-555-1234",
    days: [0, 1, 2, 3, 4, 5, 6]
  },
];
//--------------End of Pre-set Meetings-------------------//

//--------- Meeting constructor and local storage simulation---------//
if (localStorage.hasOwnProperty('meetings')) { //Local storage simulation. If an updated version of the meeting list exists, it will use the saved one as opposed to the array of pre-set meetings.
  meetingList = JSON.parse(localStorage.getItem('meetings'));
}