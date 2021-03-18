
function auth(values) {
  let errors = {};

  //email check
  if (values.hasOwnProperty('email')) {
    if (!values.email) {
      errors.email = 'Required Email';
    } else if (
      !/^[A-Z0-9._%]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ){
      errors.email = 'invalid email address';
    }
  }

  //Password check
if (values.hasOwnProperty('password')) {
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 3) {
    errors.password = 'Password must be at least 3 characters';
  } 
}



  if (values.hasOwnProperty('passwordConfirmation') ) {
    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = "Required Password";
    } else if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation= 'password must match';
    } 
  
  }  

  //name check
  if (values.hasOwnProperty('firstname') ) {
    if (!values.firstname) {
      errors.firstname = "Required firstname";
    } else if ( values.firstname.length < 3) {
      errors.firstname = 'firstname must be at least characters';
    } 
  }

  if (values.hasOwnProperty('lastname') ) {
    if (!values.lastname) {
      errors.lastname = "Required lastname";
    } else if ( values.lastname.length < 3) {
      errors.lastname = 'lastname must be at least characters';
    } 
  }

  if (values.hasOwnProperty('phone') ) {
    if (!values.phone) {
      errors.phone = "Required phone number";
    } else if ( values.phone.length < 3) {
      errors.phone = 'phone must be at least umber';
    } 
  }




  return errors;
}


export default auth;
