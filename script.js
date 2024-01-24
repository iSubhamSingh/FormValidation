function validate() {

    let fname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let user = document.getElementById('uname').value;
    let pass = document.getElementById('pass').value;
    let confirmpass = document.getElementById('conpass').value;


    if (fname == "" || !isNaN(fname) || fname == null) {
        document.getElementById('finame').innerHTML = " * First name can't be empty";
        return false;
    }

    if ((fname.length <= 2) || (fname.length > 20)) {
        document.getElementById('username').innerHTML = " * First name's length must be atleast 2 characters";
        return false;
    }

    if ((lastname.length <= 2) || (lastname.length > 20)) {
        document.getElementById('lastname').innerHTML = " * Last name's length must be atleast 2 characters";
        return false;
    }


    if (!isNaN(fname)) {
        document.getElementById('finame').innerHTML = " * only characters are allowed";
        return false;
    }


    if (lastname == "") {
        document.getElementById('lastname').innerHTML = " * Last name can't be empty";
        return false;
    }
    
    if (email == "") {
        document.getElementById('mail').innerHTML = " * Email can't be empty";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.getElementById('mail').innerHTML = " * @ Position is invalid";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('mail').innerHTML = " * . Invalid Position";
        return false;
    }


    if (user == "") {
        document.getElementById('user').innerHTML = " *Username can't be empty";
        return false;
    }



    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('user').innerHTML = " * Username length should be atleast 2 characters";
        return false;
    }

    if (pass == "") {
        document.getElementById('passwords').innerHTML = " * Password can't be empty";
        return false;
    }

    if ((pass.length <= 8) || (pass.length > 20)) {
        document.getElementById('passwords').innerHTML = " * Password lenght must be greater than 5";
        return false;
    }


    if (pass != confirmpass) {
        document.getElementById('confrmpass').innerHTML = " * Passwords does not match";
        return false;
    }



    if (confirmpass == "") {
        document.getElementById('confrmpass').innerHTML = " * Please fill the confirmpassword field";
        return false;
    }


    
}
