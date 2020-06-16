//Validar la barra de búsqueda (mínimo 3 caracteres):
const formSearch=document.getElementById('searchId');

function searchValidate(){
  var acumErrores=0;
  formSearch.classList.remove('is-invalid');
  var inputSearch=document.getElementById('searchThis');

  if(inputSearch.value==""||(inputSearch.value).length<3){
    inputSearch.classList.add('is-invalid');
    document.getElementById('errorSearch').textContent="min 3 characters";
    acumErrores++;
  }

  if(acumErrores>0){
    return false;
  }else{
    return true;
  }
}

formSearch.addEventListener('blur',(event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

//Validar el Login. Email y contraseña obligatorios. Validación de email estandar:

const formLogin=document.getElementById('loginId');

function LogInValidate(){
  acumErrores=0;
  formLogin.classList.remove('is-invalid');
  var inputEmail=document.getElementById('loginEmail');
  var inputPassword=document.getElementById('loginPassword');
  var gridCheck=document.getElementById('gridCheck');

  if(inputEmail.value==""){
    inputEmail.classList.add('is-invalid');
    document.getElementById('errorEmail').textContent="Enter your email";
    acumErrores++;
  }else if (!validar_email(inputEmail.value)){
    inputEmail.classList.add('is-invalid');
    document.getElementById('errorEmail').textContent="Incorrect email format";
    acumErrores++;
  }

  if(inputPassword.value==""){
    inputPassword.classList.add('is-invalid');
    document.getElementById('errorPassword').textContent="Enter your password";
    acumErrores++;
  }

  if(acumErrores>0){
    return false;
  }else{
    return true;
  }
}

formLogin.addEventListener('blur',(event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

 function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//Validar formulario de registro.

const formRegister=document.getElementById('registerId');

function registerValidate(){
  acumErrores=0;
  formRegister.classList.remove('is-invalid');
  var inputUsernameReg=document.getElementById('usernameReg');
  var inputEmailReg=document.getElementById('emailReg');
  var inputPasswordReg=document.getElementById('passwordReg');
  var inputPasswordRepReg=document.getElementById('passwordRepReg');
  var inputProvinceReg=document.getElementById('inputProvince');


if(inputUsernameReg.value==""){
  inputUsernameReg.classList.add('is-invalid');
  document.getElementById('errorUsername').textContent="Select your username";
  acumErrores++;
}
if(inputEmailReg.value==""){
  inputEmailReg.classList.add('is-invalid');
  document.getElementById('errorEmailreg').textContent="Add your email address";
  acumErrores++;
}else if (!validar_email(inputEmailReg.value)){
  inputEmailReg.classList.add('is-invalid');
  document.getElementById("errorEmailreg").textContent="Incorrect email format";
  acumErrores++;
}
if(inputPasswordReg.value==""||(inputPasswordReg.value).length<6){
  inputPasswordReg.classList.add('is-invalid');
  document.getElementById('errorPasswordReg').textContent="Enter your password";
  acumErrores++;
}
if(inputPasswordRepReg.value==""||(inputPasswordReg.value).length<6){
  inputPasswordRepReg.classList.add('is-invalid');
  document.getElementById('errorPasswordRepeat').textContent="Repeat your password";
  acumErrores++;
}else if(inputPasswordRepReg.value!=inputPasswordReg.value){
  inputPasswordRepReg.classList.add('is-invalid');
  document.getElementById('errorPasswordRepeat').textContent="Password does not match";
  acumErrores++;
}

if(inputProvinceReg.value==""){
  inputProvinceReg.classList.add('is-invalid');
  document.getElementById('errorProvince').textContent="Select Province";
  acumErrores++;
}

if(acumErrores>0){
  return false;
}else{
  return true;
}
}

formRegister.addEventListener('blur',(event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);
