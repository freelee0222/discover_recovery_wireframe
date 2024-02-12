//-------------- Pre-set Memebers--------------//
let memberList = [
  {
    name: "Bear B.",
    age: "47",
    sex: "male",
    homegroup: "Hug L",
    cleanDay: "2000-04-19",
    number: "(406)555-2678",
    email: "bear@gmail.com",
    password: "Bear",
    isSponsor: true,
    sponsor: ["John M", "(406)555-9613"],
    verified: false
  },
  {
    name: "Dave G.",
    age: "41",
    sex: "male",
    homegroup: "Men's Group",
    cleanDay: "2016-2-10",
    number: "(406)555-1542",
    email: "dav@gmail.com",
    password: "Dav",
    isSponsor: true,
    sponsor: ["Bear B.", "(406)555-2678"],
    verified: false
  },
  {
    name: "Kat E.",
    age: "35",
    sex: "female",
    homegroup: "Women's Group",
    cleanDay: "2015-02-12",
    number: "(406)555-0783",
    email: "kat@gmail.com",
    password: "Kat",
    isSponsor: true,
    sponsor: ["Chelsea S.", "(406)555-4985"],
    verified: false
  },
  {
    name: "Christina H.",
    age: "46",
    sex: "female",
    homegroup: "Rocky Mtn. Group",
    cleanDay: "1997-06-19",
    number: "(406)555-4985",
    email: "christina@gmail.com",
    password: "C",
    isSponsor: true,
    sponsor: ["Ethel B.", "(501)555-3867"],
    verified: false
  },
  {
    name: "John M.",
    age: "56",
    sex: "male",
    homegroup: "Zoo Crew",
    cleanDay: "2010-06-25",
    number: "(406)555-9613",
    email: "johnM@gmail.com",
    password: "John",
    isSponsor: true,
    sponsor: ["Douglas A.", "(406)555-2946"],
    verified: false
  },
  {
    name: "Chelsea S.",
    age: "39",
    sex: "female",
    homegroup: "Dopeless Hopefiends",
    cleanDay: "2015-02-19",
    number: "(406)555-4985",
    email: "chelsea@gmail.com",
    password: "C",
    isSponsor: true,
    sponsor: ["Christina H.", "(406)555-4985"],
    verified: false
  },
  {
    name: "Z",
    age: "24",
    sex: "non-binary",
    homegroup: "Freedom Group",
    cleanDay: "2022-06-19",
    number: "(406)555-4985",
    email: "z@gmail.com",
    password: "Z.",
    isSponsor: true,
    sponsor: ["Christina H.", "(406)555-4985"],
    verified: false
  },
  {
    name: "Pete O.",
    age: "23",
    sex: "male",
    homegroup: "Zoo Crew",
    cleanDay: "2019-06-21",
    number: "(406)555-4729",
    email: "peteO@gmail.com",
    password: "P",
    isSponsor: true,
    sponsor: ["Dave F.", "(406)555-1285"],
    verified: false
  },
  {
    name: "Dave F.",
    age: "52",
    sex: "male",
    homegroup: "Freedom Group",
    cleanDay: "1996-01-02",
    number: "(406)555-1285",
    email: "daveF@gmail.com",
    password: "D",
    isSponsor: true,
    sponsor: ["Bear B.", "(406)555-9613"],
    verified: false
  },
  {
    name: "Cassandra L.",
    age: "19",
    sex: "female",
    homegroup: "Women's Group",
    cleanDay: "2022-05-10",
    number: "(406)555-1234",
    email: "cassandraL@gmail.com",
    password: "C",
    isSponsor: true,
    sponsor: ["Chelsea S.", "(406)555-4985"],
    verified: false
  },
  {
    name: "Derrick P.",
    age: "45",
    sex: "male",
    homegroup: "Zoo Crew",
    cleanDay: "2020-10-10",
    number: "(406)555-9706",
    email: "derrickP@gmail.com",
    password: "D",
    isSponsor: true,
    sponsor: ["Dav G.", "(406)555-1542"],
    verified: false
  },
  {
    name: "Robin B.",
    age: "27",
    sex: "female",
    homegroup: "Rocky Mtn. Group",
    cleanDay: "2013-08-06",
    number: "(406)555-2233",
    email: "robinB@gmail.com",
    password: "R",
    isSponsor: true,
    sponsor: ["Kat E.", "(406)555-4985"],
    verified: false
  },
  {
    name: "Mark W.",
    age: "41",
    sex: "male",
    homegroup: "Men's Group",
    cleanDay: "1999-04-20",
    number: "(406)555-6574",
    email: "markW@gmail.com",
    password: "M",
    isSponsor: true,
    sponsor: ["Brent B.", "(406)555-9613"],
    verified: false
  },
  {
    name: "Travis C.",
    age: "47",
    sex: "male",
    homegroup: "Dopeless Hopefiends",
    cleanDay: "2008-11-28",
    number: "(406)555-0327",
    email: "travisC@gmail.com",
    password: "T",
    isSponsor: true,
    sponsor: ["Mark W.", "(406)555-6574"],
    verified: false
  },
  {
    name: "Michelle D.",
    age: "32",
    sex: "female",
    homegroup: "Women's Group",
    cleanDay: "2015-09-01",
    number: "(406)555-8492",
    email: "michelleD@gmail.com",
    password: "M",
    isSponsor: true,
    sponsor: ["Chelsea S.", "(406)555-4985"],
    verified: false
  },
  {
    name: "Bobby W.",
    age: "44",
    sex: "male",
    homegroup: "Zoo Crew",
    cleanDay: "2010-04-21",
    number: "(406)555-5968",
    email: "bobbyW@gmail.com",
    password: "B",
    isSponsor: true,
    sponsor: ["Travis C.", "(406)555-6574"],
    verified: false
  },
  {
    name: "BoJacque C.",
    age: "43",
    sex: "female",
    homegroup: "Women's Group",
    cleanDay: "2018-02-05",
    number: "(406)555-0798",
    email: "bo@gmail.com",
    password: "B",
    isSponsor: true,
    sponsor: ["Michelle D.", "(406)555-8492"],
    verified: false
  },
  {
    name: "Messiah G.",
    age: "19",
    sex: "male",
    homegroup: "Dopeless Hopefiends",
    cleanDay: "2022-09-09",
    number: "(406)555-9383",
    email: "messiahG@gmail.com",
    password: "M",
    isSponsor: true,
    sponsor: ["Bobby W.", "(406)555-5968"],
    verified: false
  },
  {
    name: "Theresa J.",
    age: "27",
    sex: "female",
    homegroup: "Zoo Crew",
    cleanDay: "2014-10-18",
    number: "(406)555-1946",
    email: "theresaJ@gmail.com",
    password: "T",
    isSponsor: true,
    sponsor: ["Chelsea S.", "(406)555-0000"],
    verified: false
  },
  {
    name: "Trisha W.",
    age: "43",
    sex: "female",
    homegroup: "Women's Group",
    cleanDay: "2020-07-14",
    number: "(406)555-6969",
    email: "trishaW@gmail.com",
    password: "T",
    isSponsor: true,
    sponsor: ["Jessie B.", "(406)555-0010"],
    verified: false
  },
  {
    name: "Jessie B.",
    age: "49",
    sex: "female",
    homegroup: "Freedom Group",
    cleanDay: "2004-01-01",
    number: "(406)555-0010",
    email: "jessieB@gmail.com",
    password: "J",
    isSponsor: true,
    sponsor: ["Catherine S.", "(406)555-1001"],
    verified: false
  },
    {
    name: "Catherine S.",
    age: "58",
    sex: "female",
    homegroup: "Freedom Group",
    cleanDay: "1994-01-01",
    number: "(406)555-1001",
    email: "catherineS@gmail.com",
    password: "C",
    isSponsor: true,
    sponsor: ["Sophia S.", "(406)555-0002"],
    verified: false
  },
    {
    name: "Peter F.",
    age: "28",
    sex: "male",
    homegroup: "Men's Group",
    cleanDay: "2021-02-14",
    number: "(406)555-5309",
    email: "peterF@gmail.com",
    password: "P",
    isSponsor: true,
    sponsor: ["Bobby W.", "(406)555-5968"],
    verified: false
  },
      {
    name: "Phll W.",
    age: "24",
    sex: "male",
    homegroup: "Zoo Crew",
    cleanDay: "2018-10-09",
    number: "(406)555-1648",
    email: "philW@gmail.com",
    password: "B",
    isSponsor: true,
    sponsor: ["Douglas A.", "(406)555-2946"],
    verified: false
  },
      {
    name: "Amanda P.",
    age: "25",
    sex: "female",
    homegroup: "Freedom Group",
    cleanDay: "2020-05-05",
    number: "(406)555-1675",
    email: "amandaP@gmail.com",
    password: "A",
    isSponsor: true,
    sponsor: ["Sophia S.", "(406)555-0002"],
    verified: false
  },
      {
    name: "Parker V.",
    age: "27",
    sex: "male",
    homegroup: "Men's Group",
    cleanDay: "2017-11-08",
    number: "(406)555-4685",
    email: "parkerV@gmail.com",
    password: "P",
    isSponsor: true,
    sponsor: ["John M", "(406)555-9613"],
    verified: false
  },
      {
    name: "Ashley H.",
    age: "29",
    sex: "female",
    homegroup: "Rise & Shine",
    cleanDay: "2020-02-08",
    number: "(406)555-4985",
    email: "ashleyH@gmail.com",
    password: "A",
    isSponsor: true,
    sponsor: ["Sophia S.", "(406)555-0002"],
    verified: false
  },
      {
    name: "Rico S.",
    age: "35",
    sex: "male",
    homegroup: "Rocky Mtn. Group",
    cleanDay: "2021-01-20",
    number: "(406)555-5485",
    email: "ricoS@gmail.com",
    password: "R",
    isSponsor: true,
    sponsor: ["John M", "(406)555-9613"],
    verified: false
  },
      {
    name: "Benjamin H.",
    age: "21",
    sex: "male",
    homegroup: "Men's Group",
    cleanDay: "2022-10-15",
    number: "(406)555-1478",
    email: "benjaminH@gmail.com",
    password: "B",
    isSponsor: true,
    sponsor: ["Bear B.", "(406)555-2678"],
    verified: false
  },
      {
    name: "Adam W.",
    age: "40",
    sex: "male",
    homegroup: "Men;s Group",
    cleanDay: "2020-12-21",
    number: "(406)555-1874",
    email: "adamW@gmail.com",
    password: "A",
    isSponsor: true,
    sponsor: ["Bear B.", "(406)555-2678"],
    verified: false
  }
];
//--------------End of Pre-set Memebers-------------------//


//--------- Member constructor and local storage simulation---------//
if (localStorage.hasOwnProperty('members')) { //Local storage simulation. If an updated version of the member list exists, it will use the saved one as opposed to the array of pre-set memebers.
  memberList = JSON.parse(localStorage.getItem('members'));
}
//Constructor function to create new members,
class Member {
  constructor(name, age, homegroup, sex, cleanDay, number, email, sponsor, password) {
    this.name = name,
    this.age = age,
    this.sex = sex,
    this.homegroup = homegroup,
    this.cleanDay = cleanDay,
    this.number = number,
    this.email = email,
    this.password = password;
    this.isSponsor = false;
    this.sponsor = sponsor;
    this.verified = false;
    this.sponsor = undefined;
    memberList.unshift(this); //Add the new member  to the front of the array
    localStorage.setItem('members', JSON.stringify(memberList));//Saves the new member list to local storage.
    memberList = JSON.parse(localStorage.getItem('members'));//Updates the current member list to the version with the new member.
  }
}
//--------End of Constructor function and local storage simulation ---------//


//--------Form control and event listener to invoke the member constructor----------//
errorClear();//Clears all errors from the form on the load of page.

//-----------------------Arrow function attached to 'click' event listener for the "Join" button on the "Join Us" page------------------------- //
$('.welcome').hide();
$('#joinBtn').click(() => { 
  errorClear();//Clears all errors except any that are current.
  event.preventDefault();// Prevents the default refreshing of the page..
  if ($('#userName').val() === "") {//Checks to see if something was entered in the name input box.
    $('.firstFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  if ($('#userInitial').val().length > 1 ) {//Checks to see if a last initial was enetered, that it is only one letter.
    $('.initialFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  if (Number($('#userAge').val()) < 10) {//Checks to see if the age is above 10.
    $('.ageFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  if ($('#userEmail').val() === "" || !$('#userEmail').val().includes("@")) { //Checks to see if the email is a valid E-mail address.
    $('.emailFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  if ($('#userPassword').val().length > 12 || $('#userPassword').val().length < 4) {//Checks to see if the password is betwen 4 and 12 characters
    $('.passwordFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  if ($('#userNumber').val().length !== 12) {//Checks to see if the phone number is in the valid format
    $('.numberFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  if ($('#userSex').val() === "Choose...") {//Checks to see if the gender was chosen from the list.
    $('.sexFormError').show();//Displays the proper error message if the above requirements were not met.
    return;//Ends the function.
  }
  let userHomegroup = $('#userHomegroup').val();//Initializes variable for the users homegoup.
  if ($('#userHomegroup').val() === "Homegroup") {//If a homegrup was not chosen,..
    userHomegroup = "TBD";//Sets the homegroup to "TBD" (To Be Determined).
  }
  let userName = $('#userName').val();
  if ($('#userInitial').val().length > 0) {
    userName = $('#userName').val() + " " + $('#userInitial').val() + ".";
  }
  //--------Invokes the member constructor, using the information from the form as arguments--------//
  new Member(userName, $('#userAge').val(), userHomegroup, $('#userSex').val(), $('#userDate').val(), $('#userNumber').val(), $('#userEmail').val(), [$('#userSponsorName').val(), $('#userSponsorNumber').val()], $('#userPassword').val());
  $('#joinForm').remove();//After succesfully creating an account, the form is removed.
  const joinText = document.querySelector('#joinText');
  joinText.innerHTML = '<a href="members.html">Login Now<a>'//a "Login Now" link is provided using vanilla javaScript.
  $('.welcome').show();
  anime({
    targets: '.welcome',
    duration: 2000,
    translateX: 75,
    scale: 1.5,
    rotate: '1turn'
  });
});

//---------Function to clear all form control error messages---------//
function errorClear() {
  $('.firstFormError').hide();
  $('.initialFormError').hide();
  $('.ageFormError').hide();
  $('.emailFormError').hide();
  $('.passwordFormError').hide();
  $('.numberFormError').hide();
  $('.sexFormError').hide();
}