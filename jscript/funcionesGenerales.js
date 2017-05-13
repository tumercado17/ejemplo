//********************************************************************
//Funcion que chequea los datos del formulario de alta de usuarios
//********************************************************************

function buscar(form) {
	var departamento=document.getElementById(form).deptos.value;
	document.getElementById(form).idDepto.value=departamento;
	document.getElementById(form).submit();

}
function ChequeoUsuarios(Boton) {
	
    var error    = false;
    var Mensaje  = "Atenci�n!!\nExisten los siguientes errores:\n";

    // cargar en variables datos del formulario
    var Login      = document.getElementById("FrmUsuarios").Login.value;
    var Contrasenia= document.getElementById("FrmUsuarios").Password.value;
    var Nombre     = document.getElementById("FrmUsuarios").NombreUsu.value;
    var Apellido   = document.getElementById("FrmUsuarios").ApellidoUsu.value;
	var Correo     = document.getElementById("FrmUsuarios").Correo.value;
	var Categoria  = document.getElementById("FrmUsuarios").CategoriaUsu.value;
	var Cedula         = document.getElementById("FrmUsuarios").Cedula.value;
    var Horario    = document.getElementById("FrmUsuarios").CategoriaUsu.value;
	var Celular    = document.getElementById("FrmUsuarios").Celular.value;
    //Establecer que bot�n fue presionado
    document.getElementById("FrmUsuarios").QueBoton.value=Boton;
	
    // Verificar si hay campos vac�os
    if (Login=="")
    {
        Mensaje += "- Falta Login\n";
        error = true;
    }
   if (Contrasenia=="")
    {
        Mensaje += "- Falta Password\n";
        error = true;
    }
    if (Nombre=="")
    {
        Mensaje += "- Falta Nombre\n";
        error = true;
    }
    if (Apellido=="")
    {
        Mensaje += "- Falta Apellido\n";
        error = true;
    }
	
	if (Correo=="")
    {
        Mensaje += "- Falta Correo\n";
        error = true;
    }
	else
	{
		if (!ValidarEmail(Correo)) {
			Mensaje += "- Correo incorrecto\n";
			error = true;
		}
	}
	
	if (Categoria=="")
    {
        Mensaje += "- Falta Categoria\n";
        error = true;
    }
	
	if (Cedula=="")
    {
        Mensaje += "- Falta Cedula\n";
        error = true;
    }
	else
	{
		if (!validarCedula(Cedula)) {
			Mensaje += "- Cedula incorrecta\n";
			error = true;
		}
	}
	
	if (Horario=="")
    {
        Mensaje += "- Falta Horario\n";
        error = true;
    }
	
	if (Celular=="")
    {
        Mensaje += "- Falta Celular\n";
        error = true;
    }
	else
	{
		//hay que hacer una funcion ValidarCelular, que chequee que los primeros 3 numeros sean
		//098 099 097 096 095 o 094 
	}
	
    if (error)
    {
        window.alert(Mensaje);
    } else
    {
    	
        document.getElementById("FrmUsuarios").submit();

    }
} // end function ChequeoUsuarios
    
 

//****************************************
//Funci�n que valida Correo Electr�nico
//*****************************************


function ValidarEmail(valor) {
    var validar;
   
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))
    {
        //La direcci�n de email es correcta
        validar=true;
    } else
    {
        //La direcci�n de email es incorrecta
        validar=false;
    }
    return validar;
}

//****************************************
//Funci�n que valida C�dula de Identidad
//*****************************************
function validarCedula(CI)
{
    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = [2,9,8,7,6,3,4,1];
    var suma = 0;

    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = 0;
    
    var LargoCI = parseInt(arrCoefs.length);

    var LargoCIReal = parseInt(CI.length);
    
    difCoef = LargoCI - LargoCIReal;
    
    //recorro cada digito empezando por el de m�s a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    var i = 0;

    i = LargoCIReal - 1;
    
    for (i; i > -1; i--)
    {
        //Obtengo el digito correspondiente de la ci recibida
        var dig = CI.substring(i, i+1);
        //Lo ten�a como caracter, lo transformo a int para poder operar
        var digInt = parseInt(dig);
        //Obtengo el coeficiente correspondiente al �sta posici�n del digito
        var coef = arrCoefs[i+difCoef];
        //Multiplico d�gito por coeficiente y lo acumulo a la suma total
        suma = suma + digInt * coef;
    }

    // si la suma es m�ltiplo de 10 es una ci v�lida
    if ( (suma % 10) == 0 )
    {
        return true;
    }
    else
    {
        return false;
    }
}// Fin validarCedula

    
function SetInput(id,estado) {
    // cambiar el color de fondo de una entrada
    if (estado=="on")
    {
        document.getElementById(id).style.backgroundColor = "#FFFFCA";
    } else
    {
        document.getElementById(id).style.backgroundColor = "#FFFFFF";
    } // endif
} // end function


// Funci�n que direcciona a una pagina recibida en el parametro pagina
function IrAPagina(pagina) {
    // cargar la p�gina recibida en par�metro pagina
    window.location.href = pagina;
} // end function IrAPagina


// Confirmaci�n de borrado

function Confirmar(Pagina,Formulario,Boton) {

    if (confirm ('�Est� Seguro de Borrar?'))
	{
        //Establecer que bot�n fue presionado
        document.getElementById(Formulario).QueBoton.value=Boton;
		document.getElementById(Formulario).submit();
	}
	else
	{
		window.location.href = Pagina;
	}
 } // End Function confirmar


// Funci�n para desplegar mensajes generales de error
// y regresar a la p�gina desde el que se produjo el mismo.
    
function Error(mensaje,pagina) {
// cargar la p�gina recibida en par�metro pagina
    window.alert(mensaje);
    window.location.href = pagina;
} // end error
    
    
    
function Salir() {
    // cargar la p�gina recibida en par�metro pagina
    window.window.close();
} //
    
    
    
function Mensaje(titulo){
    window.alert(titulo);
}
  



    

    
