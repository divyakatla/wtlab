/*exported myfunction*/
/*eslint-env browser*/
/*eslint no-console:0*/
function myfunction(){
    var firstName = document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var mobileNumber = document.getElementById("mobile").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var mail=document.getElementById("mail").value;
    var alpha = /^[a-zA-Z]+$/;
    var number = /^[0-9]+$/;
    console.log(firstName);
	if(!firstName.match(alpha)||firstName.length>30){
		alert("Please Enter First Name In Specified Format");
		return;
	}
        if(!lastName.match(alpha)||lastName.length>30){
                alert("Please Enter Last Name in specified format");
                return;
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!mail.match(mailformat))
         {
           alert("You have entered an invalid email address!");
           return;
          }
        if(!mobileNumber.match(number)||mobileNumber.length>10){
                alert("Please Enter Valid Mobile Number");
                return;
        }
        if(!city.match(alpha)||city.length>30){
                alert("Please Enter City in specified format");
                return;
        }
        if(!pincode.match(number)||pincode.length>6){
                alert("Please Enter Valid pincode");
                return;
        }
        if(!state.match(alpha)||state.length>30){
		alert("Please Enter State In Specified Format");
		return;
	}
}
