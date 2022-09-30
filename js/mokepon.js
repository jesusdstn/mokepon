const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionSeleccionarReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota'); 
const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');  

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataquesDelJugador');
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');

let mokepones = [];
let ataqueEnemigo = [];
let ataquesMokeponEnemigo;
let opcionDeMokepones;
let opcionesAtaques;
let botonHipodogue ;
let botonCapipepo ;
let botonRatigueya ;
let botonTucaPalma;
let botonPydos;
let botonLangostelvis;
let botonFuego ;
let botonAgua ;
let botonTierra ;
let botonViento;
let botonElectrico;
let botonVeneno;

let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let ataqueJugador = [];
let mascotajugador;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',3);
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',3);
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',3);
let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',3);
let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png');
let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png')

hipodoge.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'}
)
capipepo.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'}
)
ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'}    
)
langostelvis.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'}    
)
pydos.ataques.push(
    {nombre: '⚡', id:'boton-electrico'},
    {nombre: '⚡', id:'boton-electrico'},
    {nombre: '☣️', id:'boton-veneno'},
    {nombre: '☣️', id:'boton-veneno'},
    {nombre: '🌱', id:'boton-tierra'}    
)
tucapalma.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌪️', id:'boton-viento'},
    {nombre: '🌪️', id:'boton-viento'},
    {nombre: '🌪️', id:'boton-viento'}    
)


mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,pydos,tucapalma);

function iniciarJuego(){    
    sectionSeleccionarAtaque.style.display = 'none';   
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} title=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones;

        botonHipodogue = document.getElementById('Hipodoge');
        botonCapipepo = document.getElementById('Capipepo');
        botonRatigueya = document.getElementById('Ratigueya');
        botonTucaPalma = document.getElementById('Tucapalma');
        botonPydos = document.getElementById('Pydos');
        botonLangostelvis = document.getElementById('Langostelvis');
    });
    sectionSeleccionarReiniciar.style.display = 'none';
      
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);  
    botonReiniciar.addEventListener('click',reiniciarJuego);
}

function seleccionarMascotaJugador(){    
    sectionSeleccionarMascota.style.display = 'none';    
    sectionSeleccionarAtaque.style.display = 'flex';    

    if(botonHipodogue.checked){
        spanMascotaJugador.innerHTML=botonHipodogue.id;
        mascotajugador = botonHipodogue.id
    }
    else if(botonCapipepo.checked){
        spanMascotaJugador.innerHTML=botonCapipepo.id;
        mascotajugador = botonCapipepo.id
    }
    else if(botonRatigueya.checked){
        spanMascotaJugador.innerHTML=botonRatigueya.id;
        mascotajugador = botonRatigueya.id
    }
    else if(botonTucaPalma.checked){
        spanMascotaJugador.innerHTML=botonTucaPalma.id;
        mascotajugador = botonTucaPalma.id
    }
    else if(botonPydos.checked){
        spanMascotaJugador.innerHTML=botonPydos.id;
        mascotajugador = botonPydos.id
    }
    else if(botonLangostelvis.checked){
        spanMascotaJugador.innerHTML=botonLangostelvis.id;
        mascotajugador = botonLangostelvis.id
    }
    else{
        alert('Debes seleccionar una mascota');        
    }

    extraerAtaques(mascotajugador);
    seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotajugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotajugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques          
        }
    }     
    mostrarAtaques(ataques);        
}

function mostrarAtaques(ataques){
    ataques.forEach(ataque => {
        opcionesAtaques = `
        <button class="boton-de-ataque BAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionesAtaques;        
    });

    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botonViento = document.getElementById('boton-viento');
    botonElectrico = document.getElementById('boton-electrico');
    botonVeneno = document.getElementById('boton-veneno');
    botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque(){
    botones.forEach(boton => {
        boton.addEventListener('click',(e)=>{
            if(e.target.textContent === '🌱'){
                ataqueJugador.push('TIERRA');                
                boton.style.background = '#2C394B';
                boton.style.border = '2px solid #d5d5d5'
                boton.disabled = true;
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA');                
                boton.style.background = '#2C394B';
                boton.style.border = '2px solid #d5d5d5'
                boton.disabled = true;
            }else if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO');                
                boton.style.background = '#2C394B';
                boton.style.border = '2px solid #d5d5d5'
                boton.disabled = true;
            }else if(e.target.textContent === '⚡'){
                ataqueJugador.push('ELECTRICO');                
                boton.style.background = '#2C394B';
                boton.style.border = '2px solid #d5d5d5'
                boton.disabled = true;
            }else if(e.target.textContent === '☣️'){
                ataqueJugador.push('VENENO');                
                boton.style.background = '#2C394B';
                boton.style.border = '2px solid #d5d5d5'
                boton.disabled = true;
            }else if(e.target.textContent === '🌪️'){
                ataqueJugador.push('VIENTO');                
                boton.style.background = '#2C394B';
                boton.style.border = '2px solid #d5d5d5'
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo();
        })
        
    });
    
}

function seleccionarMascotaEnemigo(min,max){    
    let mascotaAleatorio = aleatorio(0,mokepones.length - 1);
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques;
    secuenciaAtaque()
}

function remueveAtaqueEnemigo(indexAleatorio){    
    //  const index = ataquesMokeponEnemigo.indexOf(indexAleatorio);
        // console.log('index: ' +indexAleatorio + '; '+ indexAleatorio)
        
            ataquesMokeponEnemigo.splice(indexAleatorio, 1); // 2nd parameter means remove one item only
        
        
}
function ataqueAleatorioEnemigo(){    
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1);
         console.log(ataquesMokeponEnemigo)
         console.log(ataquesMokeponEnemigo[ataqueAleatorio].nombre)
    if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '🌱'){
        ataqueEnemigo.push('TIERRA');    
        remueveAtaqueEnemigo(ataqueAleatorio)
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '💧'){
        ataqueEnemigo.push('AGUA');   
        remueveAtaqueEnemigo(ataqueAleatorio)
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '🔥'){
        ataqueEnemigo.push('FUEGO');   
        remueveAtaqueEnemigo(ataqueAleatorio)
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '⚡'){
        ataqueEnemigo.push('ELECTRICO');   
        remueveAtaqueEnemigo(ataqueAleatorio)
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '☣️'){
        ataqueEnemigo.push('VENENO');   
        remueveAtaqueEnemigo(ataqueAleatorio)
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '🌪️'){
        ataqueEnemigo.push('VIENTO');   
        remueveAtaqueEnemigo(ataqueAleatorio)
    }
    
    iniciarPelea()      
}
function iniciarPelea(){
    if(ataqueJugador.length===5){
        combate();  
    }
}


function crearMensaje(resultado){       
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');
    
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;   
        
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal){   
    sectionMensajes.innerHTML= resultadoFinal;   
    
    sectionSeleccionarReiniciar.style.display = 'block';
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    
}
function combate(){
    for(let index = 0; index < ataqueJugador.length; index++){  
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index,index);
            crearMensaje('EMPATE! 😒');             
        }else if(ataqueJugador[index] === 'AGUA'&& ataqueEnemigo[index]==='FUEGO'){
            indexAmbosOponentes(index,index);
            crearMensaje('GANASTE! 🎊');   
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'TIERRA'&& ataqueEnemigo[index]==='AGUA'){
            indexAmbosOponentes(index,index);
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;  
        }else if(ataqueJugador[index] === 'FUEGO'&& ataqueEnemigo[index]==='TIERRA'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'ELECTRICO'&& ataqueEnemigo[index]==='AGUA'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'VENENO'&& ataqueEnemigo[index]==='TIERRA'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'VENENO'&& ataqueEnemigo[index]==='AGUA'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'VIENTO'&& ataqueEnemigo[index]==='TIERRA'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'ELECTRICO'&& ataqueEnemigo[index]==='VIENTO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'VIENTO'&& ataqueEnemigo[index]==='VENENO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'FUEGO'&& ataqueEnemigo[index]==='VENENO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'AGUA'&& ataqueEnemigo[index]==='VIENTO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'ELECTRICO'&& ataqueEnemigo[index]==='VENENO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'TIERRA'&& ataqueEnemigo[index]==='ELECTRICO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }else if(ataqueJugador[index] === 'FUEGO'&& ataqueEnemigo[index]==='ELECTRICO'){
            indexAmbosOponentes(index,index);            
            crearMensaje('GANASTE! 🎊');  
            victoriasJugador++;  
            spanVidasJugador.innerHTML = victoriasJugador;     
        }
        else{
            indexAmbosOponentes(index,index);   
            crearMensaje('PERDISTE! 😭');            
            victoriasEnemigo++;  
            spanVidasEnemigo.innerHTML = victoriasEnemigo;     
        }
    }  
    
    revisarVidas();
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate! 😒")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Felicitaciones! Ganaste el juego! 🙌")
    }else{
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