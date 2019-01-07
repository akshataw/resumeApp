function showResume(){
  var myName = document.getElementById('name').value;
  var addr = document.getElementById('myAddress').value;
  var contact = document.getElementById('contact').value;
  var email = document.getElementById('email').value;
//  var myImage = document.getElementById('image').value;
  var obj = document.getElementById('obj').value;
  document.write("<center><h1>My Resume</h1></center>");
  document.write("<br/>");
  document.write("<center><table><tr><td>Name:</td><td>" + myName + "</td></tr></table></center>");
  document.write("<br/>");
  document.write("<center><table><tr><td>Address:</td><td>" + addr + "</td></tr></table></center>");
  document.write("<br/>");
  document.write("<center><table><tr><td>Contact:</td><td>" + contact + "</td></tr></table></center>");
  document.write("<br/>");
  document.write("<center><table><tr><td>Email ID:</td><td>" + email + "</td></tr></table></center>");
  document.write("<br/>");
  document.write("<center><table><tr><td>Objective:</td><td>" + obj + "</td></tr></table></center>");
}
