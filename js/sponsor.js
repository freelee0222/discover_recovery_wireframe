let skippedSponsors;//declares a global variable to hold a list of the sponsors that have been skipped.

$('#sponsorBtn').click(() => {//adds an event listener to invoke an anonymous arrow function,
  skippedSponsors = [];//sets the skipped sponsors variable to an empty array.
  sponsorSearch();//invokes the sponsorSearch function.
});

$('#sponsorNext').click(sponsorSearch);//adds an event listener to invoke the "sponsorSearch" function .

$('#sponsorSelect').click(() => {//adds an event listener to invoke an anonymous arrow function,
  currentMember.sponsor = [memberList[i].name, memberList[i].number]; //sets the current members sponsor to the selected sponsor
  memberList[currentMemberIndex].sponsor = [memberList[i].name, memberList[i].number];//alters the current members info. on the memberList.
  localStorage.setItem('members', JSON.stringify(memberList));//simulates stored memberList with local storage
  localStorage.setItem('user', JSON.stringify(currentMember));//simulates server side storage by setting the current member.
  memberList = JSON.parse(localStorage.getItem('members'));//updates the stored memberList to reflect any changes.
  $('#sponsorModalTitle').text('New Sponsor Selected');//updates the modal title to give feedback about changes.
  $('#sponsorNext').hide();//hides the button
  $('#sponsorSelect').hide();//hides the button
});


//----------------------function to search through the available sponsors and display appropriate results----------------------//
function sponsorSearch() {
  $('hr').show();
  $('#sponsorClear').remove();
  $('#sponsorNext').show();
  $('#sponsorSelect').show();
  if(currentMember === undefined) {//if there is not a current member logged in, directs them to login.
    $('hr').hide();
    $('#sponsorModalBody').hide();
    $('#sponsorModalTitle').html('<h2 class="p-2">To get a sponsor,<a href="join.html">Join Now!</a> or <a href="members.html">Login</a></h2>');
    $('#sponsorSelect').hide();
    $('#sponsorNext').hide();
    return;
  }
  if(currentMember.sponsor === undefined) {//if the current member does not have a sponsor, search through the member list .
    for(i = 0; i < memberList.length; i++) {
      if(memberList[i].email === currentMember.email) {//ensure the current memeber is not considered an available sponsor.
        skippedSponsors.push(memberList[i]);
      }
      if(memberList[i].isSponsor === true) {//only selects members that have the value "true" attatched to the isSponsor property.
        if(memberList[i].sex === currentMember.sex) {//only selects members that are the same sex as the current user.
          if(Number(memberList[i].age) <= Number(currentMember.age) + 10 && Number(memberList[i].age) >= Number(currentMember.age)) { //only selects members that are no more than ten years older and none that are younger than the current user.
            if(!skippedSponsors.includes(memberList[i])) {//pushes already viewed sponsors into an array so that it will exclude them on any subsequent search invoked by the next sponsor button
              $('#sponsorModalTitle').text('There\'s A Match');
              $('hr').show();
              $('#sponsorSelect').show();
              $('#sponsorNext').show();
              $('#sponsorName').text(memberList[i].name);
              $('#sponsorNumber').text(memberList[i].number);
              $('#sponsorSex').text('Gender: ' + memberList[i].sex);
              $('#sponsorAge').text('Age: ' + memberList[i].age);
              skippedSponsors.push(memberList[i]);
              break;
            } else {
              $('#sponsorModalTitle').text('');
              $('#sponsorName').text("No matches.");
              $('#sponsorNumber').text('');
              $('#sponsorSex').text('');
              $('#sponsorAge').text('');
              $('#sponsorSelect').hide();
              $('#sponsorNext').hide();
              $('hr').hide();
            }
          }
        }
      }
    }
  } else {//if the current user already has a sponsor, they are given an option to clear their current sponsor before selecting a new one.
    $('#sponsorModalTitle').html('<p>You currently have a sponsor.</p>');
    $('<h2 id="currentSponsorText" >Current Sponsor<h2>').appendTo('#sponsorModalTitle');
    $('#sponsorName').text(currentMember.sponsor[0]);
    $('#sponsorNumber').text(currentMember.sponsor[1]);
    $('#sponsorSelect').hide();
    $('#sponsorNext').hide();
    $('<button type="button" id="sponsorClear" class="btn btn-secondary">Clear Sponsor</button>').appendTo('#sponsorModalFooter');
  }

  $('#sponsorClear').click(() => {//adds an event listener to invoke an anonymous arrow function, to clear the current users sponsor.
    currentMember.sponsor = undefined;
    memberList[currentMemberIndex].sponsor = undefined;
    localStorage.setItem('members', JSON.stringify(memberList));
    localStorage.setItem('user', JSON.stringify(currentMember));
    memberList = JSON.parse(localStorage.getItem('members'));
    $('#sponsorNumber').text('cleared');
    sponsorModalClear();
  });
}

//-------Function to clear all text from the sponsor modal, and also remove it from the page--------//
function sponsorModalClear() {
  $('#sponsorModalTitle').text('');
  $('#currentSponsorText').remove();
  $('#sponsorSex').text('');
  $('#sponsorAge').text('');
  $('#sponsorName').text('');
  $('hr').hide();
  $('#sponsorClear').remove();
  setTimeout(clearModal, 1000);//invokes the "clearModal" function after 1 second.
}

