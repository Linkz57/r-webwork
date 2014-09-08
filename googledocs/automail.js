function onFormSubmit(e) {
// Version 4.0
// First establish what each of the columns mean to you. Reference the columns by their index number with "e.values[foo]"
var timestamp = e.values[0];
var feedbackName = e.values[1];
var feedbackNameOther = e.values[2];
var whoAreYou = e.values[3];
var clas = e.values[4];
var classOther = e.values[5];
var period = e.values[6];
var periodWhen = e.values[7];
var username = e.values[13];
var s0 = e.values[8]; //5 Instructional Strategies 
var sb0 = e.values[9]; //Some of the most effective things I saw you do were
var sb1 = e.values[10]; //Have you thought about trying
var sb2 = e.values[11]; //Next time, I would like to see
var sb3 = e.values[12]; //Capturing Kids Hearts implementation activities


// making a few new vars to hold most of the repeat HTML code that's clogging up the HTMLbody var
var mh1 = "</div><p><br><br></p><hr><p><br><br></p><div class=\"header\">In the area of '";
var mh2 = "'";
var mh3 = ":</div><div class=\"subheader\">";
var mh4 = " </div><p><br></p><div class=\"results\">";
// then start building the email
var subject = "Results from your recent class observation by " + whoAreYou + " on " + timestamp;
var emailBody = "Hey guess what? " + whoAreYou + " has something to say about your " + clas +  " class. <!-- If you can't see it, and instead only see this, then you probably don't have HTML enabled and you should fix that. Viewing this in Groupwise would do the trick, or you could go to the web version of GroupWise and check it out here: http://webmail.humble.k12.tx.us/gw/webacc and if you don't like that option either then get another mail client. If you're on a regular computer, Thunderbird is a great option: http://www.mozilla.org/thunderbird or if you're on an Android device I'd recommend K-9 Mail: https://play.google.com/store/apps/details?id=com.fsck.k9 or if you're using an iOS device then Sparrow is pretty cool and can be found here: http://itunes.apple.com/us/app/sparrow/id492573565 but it might not exist by the time you're reading this, so try eMailGanizer instead: http://itunes.apple.com/app/emailganizer-pro-email-reader/id405732706 so good luck with that. -->";
// and here's the actual message that is sent--where most of the magic happens.
//

var htmlBody = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"> \
<html> \
<head> \
	<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" > \
	<title>Results from your recent class observation</title> \
	<style type=\"text/css\">.header {color:#62150B;font-size:20px;font-weight:bold;}.results{color:#171218;font-size:14px;}.subheader{color:#707161;font-size:12px;}.justtalk{color:#171218;font-size:14px;}body{background-color:#A59C82}</style> \
</head> \
<body> \
	<p class=\"justtalk\">Hello. <br>" + whoAreYou + " said this about your " + classOther + " " + clas + " class during the " + periodWhen + " of " + period + " period: </p> \
	<p><br><br></p><hr><p><br><br> \
	<div class=\"header\">Your use of '5 Instructional Strategies'</div> \
	<p><br></p> \
	<div class=\"results\">" + s0 + "</div> \
	<p><br><br></p><hr><p><br><br></p> \
	<div class=\"justtalk\">Some of the most effective things I saw you do were: " + sb0 + " <div><br></div>Have you thought about trying: " + sb1 + "<div><br></div> I would also like to see: " + sb2 + "<div><br></div>The Capturing Kids Hearts activities I saw implemented were: " + sb3 + "<div><br><br></div><p><br><br></p><hr><p><br><br>If you have any questions, please DO NOT reply to this email as this isn't " + whoAreYou +"'s <i>real</i> email address, it's just the one that a robot uses to send mail on their behalf. " + whoAreYou + " will ONLY receive your message if you explicitly type their name in the TO field of your reply email.</div> \
	<p><br><br></p> \
</body> \
</html>";
//
// And now to actually send the message with that info above.
var optAdvancedArgs = {name: whoAreYou + " via Chipper MailBot", htmlBody: htmlBody};
// var optAdvancedArgs = {name: whoAreYou + " via Chipper MailBot", htmlBody: htmlBody, replyTo: username, cc: feedbackNameOther};
//MailApp.sendEmail({to: feedbackName, subject: subject, body: emailBody, name: whoAreYou + " via Chipper MailBot", htmlBody: htmlBody, replyTo: username, cc: feedbackNameOther}); 
  MailApp.sendEmail(feedbackName, subject, emailBody, optAdvancedArgs);
}
