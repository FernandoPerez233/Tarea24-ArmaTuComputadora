function CalcularTotal(){

    var formulario = document.getElementById("formulario");
    var total = 0;

    var gabinete = formulario.gabinete.value;

    if(gabinete === "700"){
        total += 700;
    }
    else if(gabinete === "1200"){
        total += 1200;
    }
    else if(gabinete === "550"){
        total += 550;
    }
    else if(gabinete === "2500"){
        total += 2500;
    }
    else if(gabinete === ""){
        alert("Selecciona un gabinete");
        return;
    }

    var procesador = formulario.procesador.value;

    if(procesador === "900"){
        total += 900;
    }
    else if(procesador === "1500"){
        total += 1500;
    }
    else if(procesador === "3500"){
        total += 3500;
    }
    else if(procesador === "5000"){
        total += 5000;
    }
    else if(procesador === ""){
        alert("Selecciona un procesador");
        return;
    }

    var discoduro = formulario.discoduro.value;
    if(discoduro === "500"){
        total += 500;
    }
    else if(discoduro === "800"){
        total += 800;
    }
    else if(discoduro === "1000"){
        total += 1000;
    }
    else if(discoduro === "900"){
        total += 900;
    }
    else if (discoduro === "1380"){
        total += 1380;
    }
    else if(discoduro === ""){
        alert("Selecciona un disco duro");
        return;
    }

    var ram = formulario.memoriaram.value; 
    if(ram === "600"){
        total += 600;
    }
    else if(ram === "1050"){
        total += 1050;
    }
    else if(ram === "1950"){
        total += 2000;
    }
    else if(ram === ""){
        alert("Selecciona una memoria RAM");
        return;
    }

    var tamañomonitor = formulario.tamañomonitor.value;
    if(tamañomonitor === "2500"){
        total += 2500;
    }
    else if(tamañomonitor === "2700"){
        total += 2700;
    }
    else if(tamañomonitor === "3000"){
        total += 3000;
    }
    else if(tamañomonitor === "3200"){
        total += 3200;
    }
    else if(tamañomonitor === "3400"){
        total += 3400;
    }
    else if(tamañomonitor === "3700"){
        total += 3700;
    }
    else if(tamañomonitor === ""){
        alert("Selecciona un tamaño de monitor");
        return;
    }

    var accesorios = formulario.accesorios;
    
    for(var i=0; i<accesorios.length; i++){
        if(accesorios[i].checked){
            total += 200;
        }
    }
    
    document.getElementById("total").innerHTML = "El total de tu computadora es: $" + total;


}