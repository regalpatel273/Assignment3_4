"use strict";
var $ = function(id){
    return document.getElementById(id);
};
var validate = function (){
    var first_name = $ ("fname");
    var last_name = $ ("lname");
    var emailAddress1 = $("email_address1");
    var emailAddress2 = $("email_address2");
    var isValid = true;
    if(first_name.value == ""){
        first_name.nextElementSibling.firstChild.nodeValue = "Required Field.";
        isValid = false;
    }
    else{
        first_name.nextElementSibling.firstChild.nodeValue = "";
    }
    if(last_name.value == ""){
        last_name.nextElementSibling.firstChild.nodeValue = "Required Field."
        isValid = false;
    }
    else {
        last_name.nextElementSibling.firstChild.nodeValue = "";
    }
    if (emailAddress1.value == "") { 
        emailAddress1.nextElementSibling.firstChild.nodeValue = 
            "Required Field.";
        isValid = false;
    } else {
        emailAddress1.nextElementSibling.firstChild.nodeValue = "";
    } 
    if (emailAddress2.value == "") { 
        emailAddress2.nextElementSibling.firstChild.nodeValue = 
            "Required Field.";
        isValid = false; 
    } else if (emailAddress1.value != emailAddress2.value) { 
        emailAddress2.nextElementSibling.firstChild.nodeValue = 
            "This entry must equal first entry.";
        isValid = false;
    } else {
        emailAddress2.nextElementSibling.firstChild.nodeValue = "";
    }
    if(isValid){
        $("request_form").submit();
    }
};

var toggle = function () {
    var h2 = this;
    var div = h2.nextElementSibling;

    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } 
};
window.onload = function (){
    $("submit").onclick = validate;
    $("fname").focus();     
    var privacy = $("privacy");
    var h2Elements = privacy.getElementsByTagName("h2");   
    for (var i = 0; i < h2Elements.length; i++ ) {
        h2Elements[i].onclick = toggle;
    }   
}