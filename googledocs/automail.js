function onFormSubmit(e) {
// Version 1.0.2
// First establish what each of the columns mean to you. Reference the columns by their index number with "e.values[foo]"
var timestamp = e.values[0];
var username = e.values[1];
var feedbackName = e.values[2];
var feedbackNameOther = e.values[3];
var clas = e.values[4];
var classOther = e.values[5];
var whoAreYou = e.values[6];
var period = e.values[7];
var periodWhen = e.values[8];
var s0 = e.values[9];
var s1 = e.values[10];
var s2 = e.values[11];
var s3 = e.values[12];
var s4 = e.values[13];
var s5 = e.values[14];
var s6 = e.values[15];
var s7 = e.values[16];
var s8 = e.values[17];
var s9 = e.values[18];
var sb0 = e.values[19];
var sb1 = e.values[20];
var sb2 = e.values[21];
var sb3 = e.values[22];
var sb4 = e.values[23];
var sb5 = e.values[24]; //newly added MYP stuff
// making a few new vars to hold most of the repeat HTML code that's clogging up the HTMLbody var
var mh1 = "</div><p><br><br></p><hr><p><br><br></p><div class=\"header\">In the area of '";
var mh2 = "' you attained these goals out of a possible ";
var mh3 = ":</div><div class=\"subheader\">";
var mh4 = " being non-negotiable, expected to be observed each visit</div><p><br></p><div class=\"results\">";
// then start building the email
var subject = "Results from your recent class observation by " + whoAreYou + " on " + timestamp;
var emailBody = "Hey guess what? " + whoAreYou + " has something to say about your " + clas +  " class. <!-- If you can't see it, and instead only see this, then you probably don't have HTML enabled and you should fix that. Viewing this in Groupwise would do the trick, or you could go to the web version of GroupWise and check it out here: http://webmail.humble.k12.tx.us/gw/webacc and if you don't like that option either then get another mail client. If you're on a regular computer, Thunderbird is a great option: http://www.mozilla.org/thunderbird or if you're on an Android device I'd recommend K-9 Mail: https://play.google.com/store/apps/details?id=com.fsck.k9 or if you're using an iOS device then Sparrow is pretty cool and can be found here: http://itunes.apple.com/us/app/sparrow/id492573565 but it might not exist by the time you're reading this, so try eMailGanizer instead: http://itunes.apple.com/app/emailganizer-pro-email-reader/id405732706 so good luck with that. -->";
// and here's the actual message that is sent--where most of the magic happens.
//
var htmlBody = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"><html><head><meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" ><title>Results from your recent class observation</title><style type=\"text/css\">.header {color:#62150B;font-size:20px;font-weight:bold;}.results{color:#171218;font-size:14px;}.subheader{color:#707161;font-size:12px;}.justtalk{color:#171218;font-size:14px;}body{background-color:#A59C82}</style></head><body><p class=\"justtalk\">Hello. <br>" + whoAreYou + " said this about your " + classOther + " " + clas +  " class during the " + periodWhen + " of " + period + " period: </p><p><br><br></p><hr><p><br></p><div class=\"header\">In the area of 'High Expectations" + mh2 + "5" + mh3 + "T1 through T5, with T1 and T3 being non-negotiables, expected to be observed each visit</div><p><br></p><div class=\"results\">" + s0 + " " + mh1 + "Quality Planning" +mh2 + "6" + mh3 + "T6 through T11, with T7" + mh4 + " " + s1 + "</div><p><br><br></p><hr><p><br><br></p><div class=\"header\">In the area of 'Lesson Delivery" + mh2 + "12" + mh3 + "T12 through T21, with T15" + mh4 + " " + s2 + " " + mh1 + "Student Engagement" + mh2 + "6" + mh3 + "T22 through T27, with T22 and T26" + mh4 + " " + s3 + " " + mh1 + "Classroom Culture" + mh2 + "8" + mh3 + "T28 through T35</div><p><br></p><div class=\"results\">" + s4 + " " + mh1 + "Student Behavior" + mh2 + "7" + mh3 + "T36 through T42</div><p><br></p><div class=\"results\">" + s5 + " " + mh1 + "Building Character and Trust" + mh2 + "7" + mh3 + "T36 through T42</div><p><br></p><div class=\"results\">" + s6 +  " " + mh1 + "CKH Implementation Activities" + mh2 + "4" + mh3 + "Number one: Social Contract</div><p><br></p><div class=\"results\">" + s7 + " " + mh1 + "CKH Implementation Activities" + mh2 + "4" + mh3 + "Number Two: Building Relational Capacity</div><p><br></p><div class=\"results\">" + s8 + " " + mh1 + "CKH Implementation Activities" + mh2 + "4" + mh3 + "Number Three: Discipline Model</div><p><br></p><div class=\"results\">" + s9 + "</div><p><br><br></p><hr><p><br><br></p><div class=\"header\">MYP Implementation Activities</div><p><br></p><div class=\"results\">" + sb5 + "</div><p><br><br></p><hr><p><br><br><div class=\"header\">HQT Constructive Feedback" + mh3 + "This is what would otherwise be the 'second page'.</div><p><br></p><div class=\"results\">" + sb4 + "</div><p><br><br></p><hr><p><br><br></p><div class=\"justtalk\">Some of the most effective things I saw you do were: " + sb0 + " <div><br></div>Have you thought about trying: " + sb1 + "<div><br></div> I would also like to see: " + sb2 + "<div><br></div>The Capturing Kids Hearts activities I saw implemented were: " + sb3 + "<div><br><br></div>If you have any questions, please DO NOT reply to this email as this isn't " + whoAreYou +"'s <i>real</i> email address, it's just the one that a robot uses to send mail on their behalf. " + whoAreYou + " will ONLY receive your message if you explicitly type their name in the TO field of your reply email.</div><p><br><br></p></body></html>";
//
// And now to actually send the message with that info above.
var optAdvancedArgs = {name: whoAreYou + " via Chipper MailBot", htmlBody: htmlBody};
MailApp.sendEmail(feedbackName, subject,
emailBody, optAdvancedArgs);
}
