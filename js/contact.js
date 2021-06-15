function validate(){
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("mobile").value;
    let subject = document.getElementById("select").value;
    let textarea = document.getElementById("message").value;
    if(fname ==="" || fname === Number || fname === null){
        document.getElementById("fname_err").textContent = `Please enter first name`;
    } else {
        validate();
    }
    if(lname ==="" || lname === Number || lname === null){
        document.getElementById("lname_err").textContent = `Please enter last name`
    } else{
        validate();
    }
    if(email === "" || email === null){
        document.getElementById("email_err").textContent = `Please enter email`
    } else{
        validate();
    }
    if(contact === "" || contact === NaN ){
        document.getElementById("mobile_err").textContent = `Please enter mobile`
    } else {
        validate();
    }
    if(subject === "" || subject === null){
        document.getElementById("select_err").textContent = `Please select any subject`
    } else{
        validate();
    } 
    if(textarea === "" || textarea === null){
        document.getElementById("msg_err").textContent = `Please enter message`
    } else{
        validate();
    }
}
