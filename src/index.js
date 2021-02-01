const   pokemones = [];
        jugadores = [];

const btnAtacar1            = document.querySelector("#btnAtaque1");
      btnAtacar2            = document.querySelector("#btnAtaque2");
      puntosJugador1        = document.querySelector("#puntos1"),
      puntosJugador2        = document.querySelector("#puntos2"),
      pokemonJugador1       = document.querySelector("#pokemon1"),
      pokemonJugador2       = document.querySelector("#pokemon2"),
      leyendaPuntosVida1    = document.querySelector("#leyendaPuntosVida1"),
      leyendaPuntosVida2    = document.querySelector("#leyendaPuntosVida2"),
      poderesJugador1       = document.querySelector("#poderes1"), 
      poderesJugador2       = document.querySelector("#poderes2"); 


class Pokemon {
    
    name;
    poderes;
    puntosVida;

    constructor ( name, poderes, puntosVida ){
        this.name     = name;
        this.poderes    = poderes; 
        this.puntosVida = puntosVida
        pokemones.push( this );
    }

    valorAtaque( atack ){
        const ataque = atack;
        console.log( this.poderes[`${ataque}`] ); 
    }
};


class Jugador {

    nombre;
    pokemonElegido;
    poderesDisponibles;
    puntosVidaDisponibles;
    activo;

    constructor ( nombre, Pokemon, activo ){

        this.nombre                 = nombre;
        this.pokemonElegido         = Pokemon.name;
        this.poderesDisponibles     = Pokemon.poderes;
        this.puntosVidaDisponibles  = Pokemon.puntosVida;
        this.activo                 = activo;

        jugadores.push( this );

    }

    valorAtaque( ataque ){
        
        return this.poderesDisponibles[`${ataque}`];

    }    
};


//Creo las instancias de pokemones y jugadores:

const   pikachu     = new Pokemon ( "Pikachu", {  "Tundershok": 11, "Quick Attack": 10, "Bestia": 5, "Quick Attack": 10 }, 30);
        oshawott    = new Pokemon ( "oshawott", { "Water Gun": 15, "Takle": 5 }, 26);
        snivy       = new Pokemon ( "Snivy", {  "Mega Drain": 4, "Wrap": 14, "Thunderstruck": 10 }, 26);

//const jugador1 = prompt("¿Cómo se llama el primer juagador?");
//const jugador2 = prompt("¿Cómo se llama el segundo juagador?");


const   sebas = new Jugador ( "jugador1", pikachu, false );
        pedro = new Jugador ( "jugador2", snivy, false );


let jugadorActivo = jugadores[0];
let jugadorInactivo = jugadores[1];
const ataquesJugador1 = Object.getOwnPropertyNames(sebas.poderesDisponibles);
const ataquesJugador2 = Object.getOwnPropertyNames(pedro.poderesDisponibles);


puntosJugador1.innerText = sebas.puntosVidaDisponibles;
puntosJugador2.innerText = pedro.puntosVidaDisponibles;
pokemonJugador1.innerHTML = `Pokemon elegido: ${sebas.pokemonElegido}`;
pokemonJugador2.innerText = `Pokemon elegido: ${pedro.pokemonElegido}`;
leyendaPuntosVida1.innerText = `Los puntos de vida disponibles de ${sebas.nombre} son:`;
leyendaPuntosVida2.innerText = `Los puntos de vida disponibles de ${pedro.nombre} son:`;


for (let i = 0; i < ataquesJugador1.length; i++) {

    const htmlPoder1 = document.createElement("option");
    htmlPoder1.innerText = `${ataquesJugador1[i]}`;
    htmlPoder1.className = "form-select form-select-lg mb-3";
    htmlPoder1.value = `${ataquesJugador1[i]}`;
    poderesJugador1.append(htmlPoder1);

    

    
}

for (let i = 0; i < ataquesJugador2.length; i++) {
    
    const htmlPoder2 = document.createElement("option");
    htmlPoder2.innerText = `${ataquesJugador2[i]}`;
    htmlPoder2.className = "form-select form-select-lg mb-3";
    htmlPoder2.value = `${ataquesJugador2[i]}`;
    poderesJugador2.append(htmlPoder2);

}


const iniciaJuego = ( atack )=>{

    const ataque = atack; 

    jugadorInactivo.puntosVidaDisponibles = jugadorInactivo.puntosVidaDisponibles - jugadorActivo.valorAtaque( ataque );
    

    if( jugadorActivo === jugadores[0]) {

        jugadorActivo = jugadores[1];
        jugadorInactivo = jugadores[0];

        
    } else {

        jugadorActivo = jugadores[0];
        jugadorInactivo = jugadores[1];
        
    };
    
    };



poderesJugador1.addEventListener("change", ()=>{  
    
    iniciaJuego( `${poderesJugador1.value}` );
    puntosJugador2.innerHTML = `${pedro.puntosVidaDisponibles}`;

    });

poderesJugador2.addEventListener("change", ()=>{

        iniciaJuego( `${poderesJugador2.value}` );
        puntosJugador1.innerHTML = `${sebas.puntosVidaDisponibles}`;
    });




