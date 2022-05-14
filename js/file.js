const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

function access() {

  let user = document.getElementById('user-input').value;
  let password = document.getElementById('password').value;

  if (user == "" || password == "") {
    modal.classList.add('modal--show');
    document.querySelector('.modal__title').innerHTML = "COMPLETE LOS DATOS PARA INGRESAR";
    document.querySelector('.modal__paragraph').innerHTML = "Intente de nuevo";


    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal--show');
    });
  } else
    if (user == 'Admin' && password == 'Kuepa2022') {
      document.querySelector('.ingresar').setAttribute('type', 'submit');
      //document.querySelector('.ingresar').addEventListener('submit', () => {  
      document.querySelector('#loginn').setAttribute('action', 'dashboard.html');
      //});
    } else
      if (user != 'Admin' || password != 'Kuepa2022') {
        // const openModal = document.querySelector('.hero__cta');
        user.value = " ";
        password.value = " ";

        modal.classList.add('modal--show');
        document.querySelector('.modal__title').innerHTML = "ERROR CREDENCIALES INCORRECTAS";
        document.querySelector('.modal__paragraph').innerHTML = "Intente de nuevo";


        closeModal.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('modal--show');
        });
      }
};

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function patients() {
  console.log("entradaaaaa");

  let doc = parseInt(document.getElementById('doc').value);
  console.log("numero : " + doc);

  switch (doc) {

    case 523687955:
      console.log("entrada");
      // document.getElementById('search').addEventListener('mouseup', () => {
      //lert("Ya cuenta con la primera dosis\nVACUNA : Pfizer\nFECHA: 20/05/2021");
      modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>YA CUENTA CON LA PRIMERA DOSIS</strong> <br><br><strong>VACUNA : </strong>Pfizer<br><strong>FECHA: </strong> 20/05/2021";


      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      closeModal.addEventListener('click', () => {
        window.location.assign("vacunacion.html");
      })

      //});
      break;

      case 1001235478:
        //alert("Ya cuenta con dos dosis  \n\nPRIMERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 30/05/2020  \n\n SEGUNDA DOSIS \n  BIOLOGICO: Pfizer \n FECHA : 03/11/2020  ");
        //window.location.assign("vacunacion.html");
  
        modal.classList.add('modal--show');
        document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
        document.querySelector('.modal__paragraph').innerHTML = "<br><strong>YA CUENTA CON DOS DOSIS</strong> <br><br>PRIMERA DOSIS <br>BIOLOGICO: Pfizer <br> FECHA : 30/05/2020 <br><br> SEGUNDA DOSIS <br>  BIOLOGICO: Pfizer <br> FECHA : 03/11/2020  ";
  
        closeModal.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('modal--show');
        });
  
        closeModal.addEventListener('click', () => {
          window.location.assign('vacunacion.html');
        });
        break;
  
     
    case 25413574:
      //alert("Ya cuenta con el esquema completo.  \nPRIMERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 30/05/2020  \n\n SEGUNDA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 03/11/2020 \n\n TERCERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 05/11/2021  ");
      modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>YA CUENTA CON EL ESQUEMA DE VACUNACION COMPLETO</strong> ";

      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

    
      break;

    case 1007203506:
     // alert("No tiene registros de vacunacion");
     modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>NO SE ENCUENTRA REGISTRADO</strong> ";

      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      closeModal.addEventListener('click', () => {
        window.location.assign('pacientes.html');
      });
     
      break;
  }
};

function patients_dash() {
  // console.log("entradaaaaa");

  let doc = parseInt(document.getElementById('input-doc').value);
  //console.log("numero : " + doc);

  switch (doc) {

    case 523687955:
      console.log("entr");
      //document.getElementById('search').addEventListener('mouseup', () => {
      //alert("Ya cuenta con la primera dosis\nVACUNA : Pfizer\nFECHA: 20/05/2021");
      modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>YA CUENTA CON LA PRIMERA DOSIS</strong> <br><br><strong>VACUNA : </strong>Pfizer<br><strong>FECHA: </strong> 20/05/2021";

      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      closeModal.addEventListener('click', () => {
        window.location.assign('vacunacion.html');
      });
      /* closeModal.addEventListener('click' , ()=>{
         window.location.assign("pacientes.html");
       })*/


      //});
      break;

    case 1001235478:
      //alert("Ya cuenta con dos dosis  \n\nPRIMERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 30/05/2020  \n\n SEGUNDA DOSIS \n  BIOLOGICO: Pfizer \n FECHA : 03/11/2020  ");
      //window.location.assign("vacunacion.html");

      modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>YA CUENTA CON DOS DOSIS</strong> <br><br><strong>PRIMERA DOSIS</strong> <br>BIOLOGICO: Pfizer <br> FECHA : 30/05/2020 <br><br> <strong>SEGUNDA DOSIS</strong> <br>  BIOLOGICO: Pfizer <br> FECHA : 03/11/2020  ";

      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      closeModal.addEventListener('click', () => {
        window.location.assign('vacunacion.html');
      });
      break;

    case 25413574:
      //alert("Ya cuenta con el esquema completo.  \nPRIMERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 30/05/2020  \n\n SEGUNDA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 03/11/2020 \n\n TERCERA DOSIS \n BIOLOGICO: Pfizer \n FECHA : 05/11/2021  ");
      modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>YA CUENTA CON EL ESQUEMA DE VACUNACION COMPLETO</strong> ";

      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      
      
      break;

    case 1007203506:
     // alert("No tiene registros de vacunacion");
     modal.classList.add('modal--show');
      document.querySelector('.modal__title').innerHTML = "BIENVENIDO";
      document.querySelector('.modal__paragraph').innerHTML = "<br><strong>NO SE ENCUENTRA REGISTRADO</strong> ";

      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      closeModal.addEventListener('click', () => {
        window.location.assign('pacientes.html');
      });
     
      break;
  }
};


/*------------- VALIDAR FORMULARIO -----------------------*/
let enviar = document.querySelector('.enviar');
//enviar.disabled = true;

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
          } else if (document.getElementById('campo7').value == '') {
            alert('El campo fecha esta vacio');
          }
          else if (document.getElementById('campo8').value == ''  ) {
            alert('El campo edad esta vacio');
          }else if (document.getElementById('campo10').value == '') {
            alert('El campo direccion esta vacio');
          }
          else if (document.getElementById('campo11').value == '') {
            alert('correo incorrecto ');
          } else if (document.getElementById('campo12').value == '') {
            alert('El campo celular esta vacio');
          }else {
            console.log("todo fue un exito");
            validar = true;
            enviar.disabled = false;
          }
  return validar;
};


function validarCadenasString(str) {
  let myRe = new RegExp('[a-z]+');
  let myArray = myRe.test(str);

  return myArray;
};




function validarNumeros(int) {
  let myRe = new RegExp('^[0-9]*$');
  let myArray = myRe.test(int);

  return myArray;
};