function validate()
{
    var username =document.getElementById("user").value;
    var useremail =document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    var atposition=useremail.indexOf("@");
    var dotposition=useremail.lastIndexOf(".");
    if (username==""||useremail==""||password==""){
        alert("Fields should not be empty");
        return false;
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=username.length){
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
        return false;
    }
    else{
        return true;
    }
}

function register(){
    var username =document.getElementById("user").value;
    var useremail=document.getElementById("email").value;
    var password =document.getElementById("pwd").value;
    var password1 = document.getElementById("pwd1").value;

    var atposition=useremail.indexOf("@");
    var dotposition=useremail.lastIndexOf(".");

    if (username==""||useremail==""||password==""){
        alert("Fields should not be empty");
        return false;
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=username.length){
        alert("Please enter a valid e-mail address ");
        return false;
    }
    else if (password!==password1){
        alert("Password doesn't match");
        return false;
    }
    return true;
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }


  var i=0;
     var path = new Array();
     path[0]="There is only one thing that makes a dream impossible to achieve:the fear of failure.";
     path[1]="When we strive to become better than we are,everything around us becomes better too";
     path[2]="The secret of life is to fall seven times and to get up eight times";
     path[3]="Freedom is not the absence of commitments ,but the ability to choose and commit myself to what is best for me"

     function swapquote(){
         document.getElementById("quotes").innerHTML=path[i];
         if (i<path.length-1) i++;else i=0;
             setTimeout("swapquote()",10000)
         }
     swapquote();

function comment() {
          
    var name = document.getElementById("user");
    var comment = document.getElementById("comment");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= comment.value;
 
}