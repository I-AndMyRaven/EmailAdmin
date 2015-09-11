function sendMail() {
$.ajax({
type: 'POST',
url: 'https://mandrillapp.com/api/1.0/messages/send.json',
data: {
  
  //YNFDoAWm5FEa5d7kANAZsQ

'key': 'Eqk9dRDWBPcr7GVvHWoNtQ',
'message': {
'from_name': byName('name').value,
'from_email': byName('mail').value,
'to': [
{
'name': byName('toName').value,
'email': byName('toMail').value,
'type': 'to'
}
],
'autotext': 'true',
'subject': byName("subject").value,
'html': byName("body").value
}
}
}).done(function(response) {
console.log(response);
});
}
var blnSendMailCycle = null;
function sendMailCycle(bln){
if(bln){
blnSendMailCycle = setInterval(function(){ sendMail(); }, byName("cycleNum").value);
byName("btnCycleStart").style.display = "none";
byName("btnCycleStop").style.display = "block";
}else{
if(blnSendMailCycle != null) clearInterval(blnSendMailCycle);
byName("btnCycleStart").style.display = "block";
byName("btnCycleStop").style.display = "none";
}
}
