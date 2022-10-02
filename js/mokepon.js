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

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

let jugadorId = null
let enemigoId = null
let mokepones = [];
let mokeponesEnemigos = [];
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
let mascotaJugadorObjeto; 
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d")
let intervalo;
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 550

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20;
}
alturaQueBuscamos = anchoDelMapa * 600/800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon{
    constructor(nombre,foto,vida,fotoMapa,ancho=80,alto=80,id=null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = aleatorio(0,mapa.width - ancho)
        this.y = aleatorio(0,mapa.height - alto)
        this.ancho = ancho
        this.alto = alto
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        );
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',3,'./assets/hipodoge.png',40,40 );
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',3,'./assets/capipepo.png',40,40);
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',3,'./assets/ratigueya.png',40,40);
let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',3,'./assets/mokepons_mokepon_tucapalma_attack.png');
let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',3,'./assets/mokepons_mokepon_pydos_attack.png');
let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',3,'./assets/mokepons_mokepon_langostelvis_attack.png')


const hipodogeAtaques = [
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'}
]

const capipepoAtaques = [
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'}
]

const langostelvisAtaques = [
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'}  
]

const ratigueyaAtaques = [
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'}   
]

const tucapalmaAtaques = [
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌪️', id:'boton-viento'},
    {nombre: '🌪️', id:'boton-viento'},
    {nombre: '🌪️', id:'boton-viento'}  
]

const pydosAtaques = [
    {nombre: '⚡', id:'boton-electrico'},
    {nombre: '⚡', id:'boton-electrico'},
    {nombre: '☣️', id:'boton-veneno'},
    {nombre: '☣️', id:'boton-veneno'},
    {nombre: '🌱', id:'boton-tierra'}  
]
hipodoge.ataques.push(...hipodogeAtaques)
capipepo.ataques.push(...capipepoAtaques)
ratigueya.ataques.push(...ratigueyaAtaques)
langostelvis.ataques.push(...langostelvisAtaques)
pydos.ataques.push(...pydosAtaques)
tucapalma.ataques.push(...tucapalmaAtaques)



mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,pydos,tucapalma);

function iniciarJuego(){    
    sectionSeleccionarAtaque.style.display = 'none';  
    sectionVerMapa.style.display = 'none'
    
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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("https://mokepon-api.herokuapp.com/unirse")
        .then(function (res){            
            if(res.ok){
                res.text()
                    .then(function (respuesta){
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador(){    
         
    // sectionVerMapa.style.display = 'flex';    

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
        return
    }
    sectionSeleccionarMascota.style.display = 'none';    

    seleccionarMokepon(mascotajugador)
    
    extraerAtaques(mascotajugador);
    sectionVerMapa.style.display= 'flex'
    iniciarMapa();
    // seleccionarMascotaEnemigo();
}

function seleccionarMokepon(mascotaJugador){
    fetch(`https://mokepon-api.herokuapp.com/mokepon/${jugadorId}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            mokepon:mascotaJugador
        })
    })
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
            console.log(ataqueJugador)
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
        
    });
    
}
function enviarAtaques(){
    fetch(`https://mokepon-api.herokuapp.com/mokepon/${jugadorId}/ataques`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })    
    })
    intervalo = setInterval(obtenerAtaques,50)
}
function obtenerAtaques(){
    fetch(`https://mokepon-api.herokuapp.com/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if(res.ok){
                res.json()
                    .then(function({ataques}){
                        if(ataques.length === 5){
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}

function seleccionarMascotaEnemigo(enemigo){    
    // let mascotaAleatorio = aleatorio(0,mokepones.length - 1);
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque()
}

function remueveAtaqueEnemigo(indexAleatorio){    
    //  const index = ataquesMokeponEnemigo.indexOf(indexAleatorio);
        // console.log('index: ' +indexAleatorio + '; '+ indexAleatorio)
        
            ataquesMokeponEnemigo.splice(indexAleatorio, 1); // 2nd parameter means remove one item only        
        
}
function ataqueAleatorioEnemigo(){   
    // console.log(ataquesMokeponEnemigo) 
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1);         
         
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
    clearInterval(intervalo)

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

function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;

    lienzo.clearRect(0,0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon();

    enviarPosicion(mascotaJugadorObjeto.x,mascotaJugadorObjeto.y)
    console.log(mokeponesEnemigos)
    mokeponesEnemigos.forEach(function (mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)        
    })
}
function enviarPosicion(x,y){
    fetch(`https://mokepon-api.herokuapp.com/mokepon/${jugadorId}/posicion`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if(res.ok){
            res.json()
                .then(function ({enemigos}){
                    // console.log(enemigos)
                    mokeponesEnemigos = enemigos.map(function(enemigo){
                        let mokeponEnemigo = null                      
                        if(enemigo.mokepon !== undefined){ 
                            const mokeponNombre = enemigo.mokepon.nombre || ""

                            if(mokeponNombre === "Hipodoge"){
                                mokeponEnemigo = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',3,'./assets/hipodoge.png',40,40,enemigo.id );
                            }else if(mokeponNombre === "Capipepo"){
                                mokeponEnemigo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',3,'./assets/capipepo.png',40,40,enemigo.id);
                            }else if(mokeponNombre ==="Ratigueya"){
                                mokeponEnemigo = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',3,'./assets/ratigueya.png',40,40,enemigo.id);
                            }else if(mokeponNombre ==="Tucapalma"){
                                mokeponEnemigo = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',3,'./assets/mokepons_mokepon_tucapalma_attack.png',60,60,enemigo.id);
                            }else if(mokeponNombre ==="Pydos"){
                                mokeponEnemigo = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',3,'./assets/mokepons_mokepon_pydos_attack.png',60,60,enemigo.id);
                            }else if(mokeponNombre ==="Langostelvis"){
                                mokeponEnemigo = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',3,'./assets/mokepons_mokepon_langostelvis_attack.png',60,60,enemigo.id)
                            }

                            mokeponEnemigo.x = enemigo.x
                            mokeponEnemigo.y = enemigo.y
                            return mokeponEnemigo  
                        }                     
                    });
                })
                
        }
    })
}

function moverDerecha() {    
    mascotaJugadorObjeto.velocidadX = 5;
    pintarCanvas()
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5;
    pintarCanvas()
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5;
    pintarCanvas()
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5;
    pintarCanvas()
}
function detenerMovimiento(){    
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event,stop){    
    if(!stop){
        switch (event.key) {
            case 'ArrowRight':
                moverDerecha()
                break;
            case 'ArrowDown':
                moverAbajo()
                break;
            case 'ArrowUp':
                moverArriba()
                break;
            case 'ArrowLeft':
                moverIzquierda()
                break;
            default:
                break;
        }
    }
}

function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotajugador);    
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener('keydown', sePresionoUnaTecla);
    window.addEventListener('keyup', detenerMovimiento);
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotajugador === mokepones[i].nombre){
            return mokepones[i]       
        }
    }  
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;

    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota= mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
    // window.removeEventListener('keydown',sePresionoUnaTecla);
    detenerMovimiento();          
    clearInterval(intervalo);
    console.log('Se detecto una colision');
    enemigoId = enemigo.id;
    sectionSeleccionarAtaque.style.display = 'flex';   
    sectionVerMapa.style.display = 'none';
    seleccionarMascotaEnemigo(enemigo);
}
window.addEventListener('load', iniciarJuego) 