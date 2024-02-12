let currentMember; //variable to containthe currently logged on member.
let currentMemberIndex; //index of the currently logged on memeber in the "memberList" array.
let driverList = [];//creates an empty array to contain any volunteers to offer a ride.

$('#logout').hide(); //initially hides logout link on load of page
$('#newcomerIntro').hide();
$('#memberIntro').hide();

if (date.getHours() === nextMeetingHour) { //clears the "driverList" array everytime a meeting starts and removes from local storage.
  driverList = []; 
  localStorage.removeItem('drivers');
}

if (localStorage.hasOwnProperty('drivers')) {//loads the current driver list if one is currently saved.
  driverList = JSON.parse(localStorage.getItem('drivers'));
}

if (localStorage.hasOwnProperty('user')) { //if a user is currently logged in,
  currentMember = JSON.parse(localStorage.getItem('user'));//the currentMember variable will be set to the cuurent user,
  currentMemberIndex = JSON.parse(localStorage.getItem('userIndex'));//the current member index will be set to the users current index location in the MemberList array
  homegroup = currentMember.homegroup;//the homegroup will be set to the current users homegroup
  $('#logout').show();//the logout link will appear in the top right corner
  profileDisplay();//the "profileDisplay" function will be invoked, dynamically updating the page to reflect the current member.
}

if (localStorage.hasOwnProperty('isVerified')) {//if current member is verified, it will have been saved to local storage, and will be recognized
  currentMember.verified = true;//updates the "verified" property to true.
  $('<h5 id="verifiedText" class="mx-4">Verified Member</h5>').appendTo('footer');//adds the "Verified Member" text to the browser.
  $('<div class="form-check float-right"><input class="form-check-input" type="checkbox" id="sponsorCheck" value=""><label class="form-check-label" for="sponsorCheck">I would like to be a sponsor.</label></div>').appendTo('#memberForm'); //includes a checkbox on the update profile section to opt in to being a sponsor.
  if(currentMember.isSponsor === true) {//if the current user is already a sponsor, this makes the checkbox refelct that.
    $('#sponsorCheck').attr('checked', 'true');
    $('#sponsorCheck').attr('value', 'sponsor');
  }
}

$(function () { //adds the popover function to selected elements.
  $('[data-toggle="popover"]').popover()
});

anime({//adds animation to the "Next Meeting" button on the home page.
  targets: '.nextMeetingBtn',
  duration: 2000,
  translateX: 75,
  scale: 1.5,
  rotate: '1turn'
});

//------------------------------Arrow function attached to 'click' event listener to login--------------------------------- //
$('#login').click(() => {
  if ($('#loginEmail').val() === "" || $('#loginPassword').val() === "") { //ensures all fields are filled out correctly.
    $('#loginMessage').text('Please fill out completely');
    clearInputs();
    setTimeout(clearLogin, 1500);
    return;
  }
  if (currentMember !== undefined) {//ensures a user is not trying to login while already logged in.
    if ($('#loginEmail').val() === currentMember.email) {
      $('#loginMessage').text('Already Logged In');
      clearInputs();
      setTimeout(clearLogin, 1500);
      return;
    }
  }
  for (i = 0; i < memberList.length; i++) {
    if (memberList[i].email === $('#loginEmail').val()) { //checks the member list for entered e-mail.
      if (memberList[i].password === $('#loginPassword').val()) {//checks that the password is a match.
        currentMember = memberList[i];//sets the current member.
        currentMemberIndex = i;
        profileDisplay();//invokes the profile dispaly function.
        localStorage.setItem('user', JSON.stringify(currentMember)); //updates the local storage to simulate a logged in user.
        localStorage.setItem('userIndex', JSON.stringify(currentMemberIndex));//also sets the current member index in the memberList array.
        homegroup = currentMember.homegroup;
        $('#loginMessage').text('Logged In');//displays message
        $('#logout').show();
        if ($('#loginCode').val() === '222') {
          currentMember.verified = true;
          $('#loginMessage').text('Verified');
          $('<h5 id="verifiedText" class="mx-4">Verified Member</h5>').appendTo('footer');
          localStorage.setItem('isVerified', 'true');
        }
        setTimeout(clearModal, 1500);
        break;
      } else {
        $('#loginMessage').text('Incorrect Password');
        break;
      }
    }
    if (i >= memberList.length - 1) {
      $('#loginMessage').text('Account Not Found');
    }
  }
  clearInputs();
  setTimeout(clearLogin, 1500);
});

//-----------------------Arrow function attached to 'click' event listener to logout------------------------- //
$('#logout').click(() => {
  $('#profile').hide();
  $('#logout').hide();
  $('#verifiedText').remove();
  currentMember = undefined;
  localStorage.removeItem('user');
  localStorage.removeItem('isVerified');
});

//-----------------------Arrow function attached to 'click' event listener to "Next Meting" button------------------------- //
$('#meetingBtn').click(() => {
  $('#meetingModalTitle').css('height', '20px').text('Next Meeting');
  $('hr').show();
  $('#meetingModalBody').show();
  $('#timeContainer').html('<h1 id="nextMeetingTime"></h1>');
  $('#nextMeetingTime').html('<span id="nextMeetingHour"></span>:00 <span id="amPm"></span>');
  $('#offerRide').remove();
  $('#offerFeedback').remove();
  $('#ride').show();
  $('#next').show();
  if (date.getMinutes() >= 45 && date.getHours() === nextMeeting.time) {
    $('#soonWarning').text('Starts Soon!');
  }
  if (currentMember !== undefined) {
    if (currentMember.verified === true) {
      $('<button type="button" id="offerRide" class="btn btn-primary">Offer a Ride</button>').prependTo('#meetingModalFooter');
    }
  }
  if (driverList.length > 0 && currentMember !== undefined) {
    for (i = 0; i < driverList.length; i++) {
      if (driverList[i].email === currentMember.email) {
        $('#offerRide').remove();
        $('#ride').hide();
      }
    }
  }
  hour = (date.getHours());
  nextMeeting = undefined;
  findNext();
  nextMeetingHour = nextMeeting.time;
  standardTime();

  //-----------------------Arrow function attached to 'click' event listener to the "Offer Ride" button.------------------------- //
  $('#offerRide').click(() => {
    driverList.push(currentMember);
    $('#ride').hide();
    $('#next').hide();
    $('#offerRide').remove();
    $('<h3 id="offerFeedback">Thanks!<h3>').prependTo('#meetingModalFooter');
    localStorage.setItem('drivers', JSON.stringify(driverList));
  });
});

//-----------------------Arrow function attached to 'click' event listener to the "Get a Ride" button------------------------- //
$('#ride').click(() => {
  $('hr').show();
  $('#meetingModalTitle').css('height', '150px');
  $('#meetingModalBody').hide();
  $('#ride').hide();
  $('#next').hide();
  if (currentMember === undefined) {//if user is not loggef in, prompt them to do so and exit the function.
    $('hr').hide();
    $('#meetingModalTitle').html('<h2 class="p-4">To request a ride,<a href="join.html">Join Now!</a> or <a href="members.html">Login</a></h2>');
    return;
  }
  if (driverList.length === 0) {//if no one has been added to the driver list, let the user know, and exit the function.
    $('#meetingModalTitle').html('<h2 class="p-4">No one has signed up to offer a ride yet. Check back soon.</h2>');
    return;
  }
  for (i = 0; i < driverList.length; i++) {
    if (driverList[i].sex === currentMember.sex || currentMember.sex === "non-binary") {//check to see if the person/s on the driver list match the users sex.
      $('#meetingModalTitle').css('height', '350px');
      $('#meetingModalTitle').text('Please Call...');
      $('<h3>Name:<h3><h2>' + driverList[i].name + '</h2>').appendTo('.modal-title');
      $('<h3>Phone Number:</h3><h2>' + driverList[i].number + '</h2>').appendTo('.modal-title');
    } else {
      $('#meetingModalTitle').html('<h2 class="p-4">No one has signed up to offer a ride yet. Check back soon.</h2>');//otherwise let them no no one is available.
    }
  }
});

//-----------------------Arrow function attached to 'click' event listener to update current profile------------------------- //
$('#updateBtn').click(() => {
  event.preventDefault();// Prevents the default refreshing of the page..
  $('form').hide();
  $('#joinText').html('<h3 id="notComplete">Your profile has been updated.</h3>');
  $('<a href="members.html">My Profile<a>').appendTo('#joinText');//a "Login Now" link is provided.
  currentMember.name = $('#userName').val();
  memberList[currentMemberIndex].name = $('#userName').val();

  currentMember.age = $('#userAge').val();
  memberList[currentMemberIndex].age = $('#userAge').val();

  currentMember.email = $('#userEmail').val();
  memberList[currentMemberIndex].email = $('#userEmail').val();

  currentMember.password = $('#userPassword').val();
  memberList[currentMemberIndex].password = $('#userPassword').val();


  currentMember.number = $('#userNumber').val();
  memberList[currentMemberIndex].number = $('#userNumber').val();

  if ($('#userDate').val() !== '') {
    currentMember.cleanDay = $('#userDate').val();
    memberList[currentMemberIndex].cleanDay = $('#userDate').val();
  }

  if($('#sponsorCheck').attr('value') === "sponsor") {
    currentMember.isSponsor = true;
    memberList[currentMemberIndex].isSponsor =   true;
  }
  if($('#sponsorCheck').attr('value') === "") {
    currentMember.isSponsor = false;
    memberList[currentMemberIndex].isSponsor =   false;
  }

  localStorage.setItem('members', JSON.stringify(memberList));
  localStorage.setItem('user', JSON.stringify(currentMember));
});

//---------Function to update profile info. and dynamically change pages---------//
function profileDisplay() {
  $('.profile').text('Update Profile');//changes the links titles in the navbar.
  $('.login').text('My Profile')//changes the links titles in the navbar.
  $('#memberMsg').text(currentMember.name);//dispalys the users name in the mmber section.
  $('#loginMsg').html('<h3>' + cleanTime(currentMember.cleanDay) + '<h3>');//diplays the users clean time in the member section.
  $('#memberBtn').hide();//hides the login button.
  //if the member's clean day is not set, provides a link to set one.
  if(currentMember.cleanDay === "") {
    $('#loginMsg').html('<a href="join.html" class="importantLink m-5">Click Here to get add your clean time</a>');
  }
//displays the user's sponsor info. to the user page upon login, or provides a link to set one.
  if (currentMember.sponsor !== undefined) {
    $('<main id="memberSponsor" class="jumbotron"><h3>Sponsor</h3><div class="block col-md-3"></div><h2>' + currentMember.sponsor[0] + ' </h2><h2>' + currentMember.sponsor[1] + '</h2></main>').appendTo('#memberPage');
  } else {
    $('<a href="sponsor.html" class="importantLink m-5">Click Here to get a sponsor</a>').appendTo('#memberPage');
  }
//displays the user's homegroup info. to the user page upon login, or provides a link to set one.
  if (currentMember.homegroup !== "TBD") {
    $('<main id="memberHomegroup" class="jumbotron"><h3>Homegroup</h3><div class="block col-md-3"></div><h2>' + currentMember.homegroup + ' </h2></main>').appendTo('#memberPage');
    $('<button  id="homegroupInfoBtn" class="btn btn-primary my-3" type="button" data-toggle="modal" data-target="#userHomegroupModal">Announcements</button>').appendTo('#memberHomegroup');
  } else {
    $('<a href="meetings.html" class="importantLink m-5">Click Here to get a homegroup</a>').appendTo('#memberPage');
  }

  //Dynamically changes the "join Us" form into an "update profile" form.
  $('#joinText').text(currentMember.name + '\'s Profile');
  $('#userInitial').hide();
  $('#userSex').hide();
  $('#joinBtn').hide();
  $('#alreadyMember').hide();
  $('#notRequired').hide();
  $('#userName').val(currentMember.name);
  $('#userAge').val(currentMember.age);
  $('#userEmail').val(currentMember.email);
  $('#userPassword').val(currentMember.password)
  $('#userNumber').val(currentMember.number);
  $('#userHomegroup').hide();
  $('#userSponsorName').hide();
  $('#userSponsorNumber').hide();
  $('<button id="updateBtn" type="submit" class="btn send btn-primary">Update</button>').appendTo('#memberForm');

  $('#homegroupInfoBtn') .click(() => {//arrow function attached to 'click' event listener  to display users homegroup info.
    homegroupInfoDisplay();// invokes the "homegroupInfoDisplay" function.
  });
}

$('#sponsorCheck').click(() => {
  if($('#sponsorCheck').attr('value') === "") {
    $('#sponsorCheck').attr('value', 'sponsor')
  } else {
    $('#sponsorCheck').attr('value', "")
  }
});


//---------Function to clear the modal from the screen and go back to the regular page---------//
function clearModal() {
  $('body').attr('class', '');
  $('.modal').hide();
  $('.modal').attr('aria-hidden', 'true');
  $('.modal').attr('class', 'modal fade');
  $('.modal-backdrop').remove();
}

//---------Function to clear all inputs in the login modal---------//
function clearInputs() {
  $('#loginEmail').val('');
  $('#loginPassword').val('');
  $('#loginCode').val('');
}

//---------Function to clear the prompts displayed in the login modal---------//
function clearLogin() {
  $('#loginMessage').text('');
}


