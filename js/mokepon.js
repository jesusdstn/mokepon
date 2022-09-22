let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar');
    sectionSeleccionarReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota');    
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);    
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click',ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click',reiniciarJuego);
    

}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex';

   let botonHipodogue = document.getElementById('hipodoge');
   let botonCapipepo = document.getElementById('capipepo');
   let botonRatigueya = document.getElementById('ratigueya');

   let spanMascotaJugador = document.getElementById('mascota-jugador');   

    if(botonHipodogue.checked){
        spanMascotaJugador.innerHTML='Hipodoge';
    }
    else if(botonCapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo';
    }
    else if(botonRatigueya.checked){
        spanMascotaJugador.innerHTML='Ratigueya';
    }
    else{
        alert('Debes seleccionar una mascota');        
    }
    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(min,max){
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let = ataqueAleatorio = aleatorio(1,3);

    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    }
    else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    }
    else if(ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function ataqueFuego(){    
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
}

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo='FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo='AGUA'
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo='TIERRA'
    }
    combate();    
}



function crearMensaje(resultado){   
    let sectionMensajes = document.getElementById('resultado');
    let ataquesDelJugador = document.getElementById('ataquesDelJugador');
    let ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo');

    // let notificacion = document.createElement('p');
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');
    
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
    // let parrafo = document.createElement('p');
    // parrafo.innerHTML= 'Tu mascota ataco con ' + ataqueJugador +', la mascota del enemigo ataco con '+ ataqueEnemigo +' - ' + resultado    
    
    // sectionMensajes.appendChild(notificacion);
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal){   
    let sectionMensajes = document.getElementById('resultado');
    // let parrafo = document.createElement('p');
    sectionMensajes.innerHTML= resultadoFinal; 
    // sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego');  
    botonFuego.disabled = true;  
    let botonAgua = document.getElementById('boton-agua');    
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');    
    botonTierra.disabled = true;

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar');
    sectionSeleccionarReiniciar.style.display = 'block';
}

function combate(){
    let resultado
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');
    
    if(ataqueJugador == ataqueEnemigo){
        resultado = 'EMPATE 😒'        
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        resultado = 'GANASTE! 🎊';        
        vidasEnemigo--;   
        spanVidasEnemigo.innerHTML = vidasEnemigo;      
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        resultado = 'GANASTE! 🎊'  
        vidasEnemigo--;     
        spanVidasEnemigo.innerHTML = vidasEnemigo;          
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        resultado = 'GANASTE! 🎊'        
        vidasEnemigo--; 
        spanVidasEnemigo.innerHTML = vidasEnemigo;        
    }else{        
        resultado = 'PERDISTE! 😭'    
        vidasJugador--;   
        spanVidasJugador.innerHTML = vidasJugador;            
    }    
       
    crearMensaje(resultado);
    revisarVidas();
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones! Ganaste el juego! 🙌")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lo sentimos! Perdiste el juego! 😭")
    }    
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego) 