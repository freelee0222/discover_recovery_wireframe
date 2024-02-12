//--------variables containing messages for their corresponding groups------------------//
let freedomGroupAnouncements = 'Freedom group needs...';
let freedomGroupMgmt = 'Our business meeting is at 11:00 on Wednesday afternoon.';

let zoocrewAnouncements = 'Zoo Crew would like...';
let zoocrewMgmt = 'Our business meeting is at 6:00 on Wednesday evening';

let riseAndShineGroupAnouncements = 'See you bright and early';
let riseAndShineGroupMgmt = 'Our business meeting is at 8:00 on Monday morning.';

let rockyMtnGroupAnouncements = 'Rocky Mtn. Group is......';
let rockyMtnGroupMgmt = 'Our business meeting is at 5:00 on Saturday evening';

let mensGroupAnouncements = 'The Men\'s meeting has....';
let mensGroupMgmt = 'Our business meeting is at 8:00 on Tuesday night';

let hugLifeAnouncements = 'Hug Life will now be....';
let hugLifeMgmt = 'Our business meeting is at 6:00 on Friday evening';

let dopelessHopefiendsAnouncements = 'Dopless Hopefiends welcomes......';
let dopelessHopefiendsMgmt = 'Our business meeting is at 9:00 on Monday night';

let womensGroupAnouncements = 'The Women\'s group will now......';
let womensGroupMgmt = 'Our business meeting is at 8:00 on Monday night';
//-----------end of group message variables------------//


$('.homegroupSelectModal').click(() => {
  event.preventDefault();
  $('hr').show;
  if (currentMember === undefined) {
    $('hr').hide();
    $('#homegroupModalBody').hide();
    $('#homegroupModalTitle').html('<h2 class="p-4">To pick your homegroup,<a href="join.html">Join Now!</a> or <a href="members.html">Login</a></h2>');
    $('#homegroupSelect').hide();
    return;
  }
  homegroupFocus = event.target.id;
  $('#homegroupSelect').show();
  $('#homgroupClickMsg').show();
  $('#homegroupModalTitle').text('Homegroup Selection');
  if (homegroupFocus === currentMember.homegroup) {
    $('#homegroupSelect').hide();
    $('#homgroupClickMsg').hide();
  } else {
    $('#homgroupClickMsg').html('<p class="mr-5">Make ' +  homegroupFocus + ' your new homegroup?</p>');
  }
  if (currentMember.homegroup !== 'TBD') {
    $('#homegroupModalText').text('Your current home group:');
    $('<h3>' + currentMember.homegroup + '</h3>').appendTo('#homegroupModalText');
  }
});

$('#homegroupSelect').click(() => {
   currentMember.homegroup = homegroupFocus;
   memberList[currentMemberIndex].homegroup = homegroup;
   localStorage.setItem('members', JSON.stringify(memberList));
   localStorage.setItem('user', JSON.stringify(currentMember));
   memberList = JSON.parse(localStorage.getItem('members'));
   $('#homegroupModalTitle').text('Your Homegroup was updated.');
   $('#homgroupClickMsg').text('Keep Coming Back!');
   $('#homegroupSelect').hide();
   $('#homegroupModalText').text('');
   setTimeout(clearModal, 1000);
 });

//------Function to display proper messages depending upon the currentUsers homegroup in the homegroup info. section-------//
function homegroupInfoDisplay() {
    $('#userHomegroupModalTitle').text(homegroup);
    if (homegroup === "Freedom Group") {
       $('#userHomegroupText').text(freedomGroupAnouncements);
       $('#userHomegroupMgmt').text(freedomGroupMgmt);
    }
    if (homegroup === "Zoo Crew") {
        $('#userHomegroupText').text(zoocrewAnouncements);
        $('#userHomegroupMgmt').text(zoocrewMgmt);
     }
     if (homegroup === "Rise & Shine Group") {
        $('#userHomegroupText').text(riseAndShineGroupAnouncements);
        $('#userHomegroupMgmt').text(riseAndShineGroupMgmt);
     }
     if (homegroup === "Rocky Mtn. Group") {
        $('#userHomegroupText').text(rockyMtnGroupAnouncements);
        $('#userHomegroupMgmt').text(rockyMtnGroupMgmt);
     }
     if (homegroup === "Men's Group") {
        $('#userHomegroupText').text(mensGroupAnouncements);
        $('#userHomegroupMgmt').text(mensGroupMgmt);
     }
     if (homegroup === "Hug Life") {
        $('#userHomegroupText').text(hugLifeAnouncements);
        $('#userHomegroupMgmt').text(hugLifeMgmt);
     }
     if (homegroup === "Dopeless Hopefiends") {
        $('#userHomegroupText').text(dopelessHopefiendsAnouncements);
        $('#userHomegroupMgmt').text(dopelessHopefiendsMgmt);
     }
     if (homegroup === "Women's Group") {
        $('#userHomegroupText').text(womensGroupAnouncements);
        $('#userHomegroupMgmt').text(womensGroupMgmt);
     }
}

