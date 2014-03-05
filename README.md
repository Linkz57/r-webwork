r-webwork
=========

HTML, Javascript, CSS, etc. It's not great but it's what I'm writing.

Automail.js
-----------
This is my first bit of Javascript to actually be put into production. 
It's pretty simple, and I stole most of it from [Alamoxie] (http://alamoxie.com/blog/tech-tips/sending-confirmation-emails-google-docs-form/).
The idea is, people submit data to the Google Docs Form web-interface, and one 
of the answers is an email address (var feedbackName, the second question). 
That answer address (and a few other answers) are then used to build the email 
header. The var htmlBody is where the actual message goes. It's kind of ugly in the way it spans 38 lines, but it used to be all stuck in one line and that was much worse.

Printosaurus
------------
This happened much in the same way I'm sure many other projectos of the
exact same type did: I came into work one morning and decided printing out a 
Supplies Status page from every printer to check its toner level was dumb, 
and I'd be better off looking at the embedded web server of each pritner. But 
how to get them onto one page so I can see them all at once? I know that iframes
are frowned upon by the W3C, but until they come out with a new tag that does 
the same thing, this is what I'm using. When viewing the page on Windows, you 
have to have Apple Bonjour or something similar installed. I'm still waiting on 
an mDNS solution for Android, but even restricted to my desktop, this little bit
of HTML has saved me a lot of time and paper. Here's a tip on finding the name 
of a Dell printer: it's often "DEL" plus the MAC address.
