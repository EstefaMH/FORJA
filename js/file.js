const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

function access() {

  let user = document.getElementById('user-input').value;
  let password = document.getElementById('password').value;

  if (user == "" || password == "") {
    modal.classList.add('modal--show');
    document.querySelector('.modal__title').innerHTML = "COMPLETE LOS DATOS PARA INGRESAR";
    document.querySelector('.modal__paragraph').innerHTML= "Intente de nuevo";

  
    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal--show');
    });
  } else
    if (user == 'Admin' && password == 'Kueppa2022') {
      document.querySelector('.ingresar').setAttribute('type', 'submit');
      //document.querySelector('.ingresar').addEventListener('submit', () => {  
      document.querySelector('#loginn').setAttribute('action', 'dashboard.html');
      //});
    } else
      if (user != 'Admin' || password != 'Kueppa2022') {
        // const openModal = document.querySelector('.hero__cta');
        user.value = " ";
        password.value = " ";

        modal.classList.add('modal--show');
        document.querySelector('.modal__title').innerHTML = "ERROR CREDENCIALES INCORRECTAS";
        document.querySelector('.modal__paragraph').innerHTML= "Intente de nuevo";

      
        closeModal.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('modal--show');
        });
      }
};

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function patients() {

  let doc = parseInt(document.getElementById('doc').value);
  console.log("numero : " + doc);

  switch (doc) {

    case 523687955:
      // document.getElementById('search').addEventListener('mouseup', () => {
      //alert("Ya cuenta con la primera dosis\nVACUNA : Pfizer\nFECHA: 20/05/2021");
      modal.classList.add('modal--show');
        document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
        document.querySelector('.modal__paragraph').innerHTML= "<br>YA CUENTA CON LA PRIMERA DOSIS <br><strong>VACUNA : </strong>Pfizer<br><strong>FECHA: </strong> 20/05/2021";

      closeModal.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('modal--show');
        });
      window.location.assign("pacientes.html");
      //});
      break;

    case 1001235478:
      alert("Ya cuenta con dos dosis  \n\nPRIMERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 30/05/2020  \n\n SEGUNDA DOSIS \n  BIOLOGICO: Pfizer \n FECHA : 03/11/2020  ");
      window.location.assign("vacunacion.html");
      break;

    case 25413574:
      alert("Ya cuenta con el esquema completo.  \nPRIMERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 30/05/2020  \n\n SEGUNDA DOSIS \n \n BIOLOGICO: Pfizer \n FECHA : 03/11/2020  ");
      break;

    case 1007203506:
      alert("No tiene registros de vacunacion");
      window.location.assign("pacientes.html");
      break;
  }
}

/*------------- VALIDAR FORMULARIO -----------------------*/
const enviar = document.querySelector('.enviar');
enviar.disabled = true;

function send() {

  if (validarFormulario() == true) {
    alert("Registro completado");
    document.getElementById("form-registro").addEventListener('submit', () => {
    });
  } else {
    alert("error algo ha salido mal en la validacion");
  }
}

function validarFormulario() {

  console.log("entre1");


  let validar = false;


  if (document.getElementById('campo1').value === "") {
    alert('el campo fecha esta vacio');
  } else
    if (document.getElementById('campo2').value === "") {
      alert('el campo N de registro esta vacio');
    } else

      if (document.getElementById('campo3').value === "") {
        alert('el campo nombre esta vacio');
      } else if (validarCadenasString(document.getElementById('campo3').value) == false) {
        alert('El campo nombre debe contener letras (a-z)');
        document.getElementById('campo3').value = "";
      } else if (document.getElementById('campo4').value === "") {
        alert('el campo apellidos esta vacio');
      } else
        if (document.getElementById('campo5').value === "") {
          alert('el campo numero de identificacion esta vacio');
        } else
          if (document.getElementById('campo6').value == 'Tipo de documento') {
            alert('No ha seleccionado ninguna opcion');
          } else if (document.getElementById('campo11').value == '') {
            alert('correo incorrecto ');
          } else {
            console.log("todo fue un exito");
            validar = true;
            enviar.disabled = false;

          }
  return validar;
}


function validarCadenasString(str) {
  let myRe = new RegExp('[a-z]+');
  let myArray = myRe.test(str);

  return myArray;
}