$(document).ready(function(){

    $("#btnTodoChile").click(function(){
        $.getJSON(
            'https://api.gael.cloud/general/public/clima',
            function(data){
               $.each(data,function(i,item){
                    $("#datos").append(
                        "<tr>"+

                            "<td>"+item.Estacion+"</td> "+

                            "<td>"+item.Temp+"°</td> "+
                            "<td><button>Ver</button></td>"+
                        "</tr>");

               });
            }
        );

    });


    $.getJSON(
        'https://api.gael.cloud/general/public/clima/SCVM',
        function(data){
            var estacion = data.Estacion
            var temperatura = data.Temp
            //LOGICA
            $("#estacion").html(estacion)
            $("#temperatura").html(temperatura+'°')

        }
    );
});
// valCorreo valida que el correo caracteres + @ + caracteres + . + caracteres.
var valCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
// valNombre valida que el nombre contenga 3 espacios.
var valNombre = /^[a-zA-Z]+\s[[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/; 
// valTelefono validar que el numero de telefono contenga 9 numeros y ninguna letra u otro caracter.
var valTelefono = /^[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/;


// Validación para login
$(document).ready(function(){
    $("#mensaje1").hide()
    $("#bEnviar").click(function(){
        var correo = $("#email").val();
        var password = $("#password").val();
        if(correo == "" || !valCorreo.test(correo)){
            $("#mensaje1").fadeIn();
            return false;
        }else{
            $("#mensaje1").fadeOut();
            return false;
        }
    });
});

// Validación para register
$(document).ready(function(){
    $("#mensaje2").hide()
    $("#mensaje3").hide()
    $("#mensaje4").hide()
    $("#mensaje5").hide()
    $("#bEnviar2").click(function(){
        var numeroIdentificacion = $("#numeroIden").val();
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var telefono = $("#telefono").val();
        if(numeroIdentificacion.toString().length <= 6){
            $("#mensaje2").fadeIn();
            return false;
        }else{
            $("#mensaje2").fadeOut();
            if(nombre == "" || !valNombre.test(nombre)){
                $("#mensaje3").fadeIn();
                return false;
            }else{
                $("#mensaje3").fadeOut();
                if(correo == "" || !valCorreo.test(correo)){
                    $("#mensaje4").fadeIn();
                    return false;
                }else{
                    $("#mensaje4").fadeOut();
                    if(telefono == 10 || !valTelefono.test(telefono)){
                        $("#mensaje5").fadeIn();
                        return false;
                    }else{
                        $("#mensaje5").fadeOut();
                        return false;
                    }
                }
            }
        }
        
    });
});

// Validación para contacto
$(document).ready(function(){
    $("#mensaje").hide();
    $("#mensaje2").hide();
    $("#mensaje3").hide();
    $("#bEnviar3").click(function(){
        var correo = $("#correo2").val();
        var nombre = $("#nombre2").val();
        var textArea = $("#areaDeTexto").val();
        if(nombre == "" || !valNombre.test(nombre)){
            $("#mensaje").fadeIn();
            return false;
        }else{
            $("#mensaje").fadeOut();
            if(correo == "" || !valCorreo.test(correo)){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if(textArea == ""){
                    $("#mensaj3").fadeIn();
                    return false;
                }else{
                    $("#mensaj3").fadeOut();
                    return false;
                }
            }
        }
    });
});