function validate() {
    const form = document.form1;
    if (form.name.value.trim() === "") {
      alert("Please fill the name.");
      form.name.focus();
      return false;
    } else if (form.address.value.trim() === "") {
      alert("Please fill the address.");
      form.address.focus();
      return false;
    } else if (form.email.value.trim() === "") {
      alert("Please fill the email.");
      form.email.focus();
      return false;
    } else if (form.password.value.trim() === "") {
      alert("Please fill the password.");
      form.password.focus();
      return false;
    }
    else if (form.password.value.length < 6) {
      alert("Password must be at least 6 characters.");
      form.password.focus();
      return false;
    } else if (form.college.value.trim() === "") {
      alert("Please fill the college.");
      form.college.focus();
      return false;
    } else if (!form.check.checked) {
      alert("You must agree to the information.");
      form.check.focus();
      return false;
     
    }
    const password=getElementById("password");
    const confirm_password=getElementById("confirm");
      if(password!==confirm_password){
    alert("use the same password");
  }
    return true;
    };
