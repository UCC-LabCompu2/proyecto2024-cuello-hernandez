const personajes = {
    "enero": {
        "nombre": "Peach",
        "texto": "No se puede negar que eres una persona muy romántica y sensible,\n y que en muchas ocasiones lo evitas por miedo a que te puedan hacer daño.\n Será mejor que comiences a confiar en vos mismo/a y te muestres tal cual eres.\n Con tus amistades tendrás más de un problema que solucionar,puedes hacerlo\n y a ti no te supondrá ningún problema.",
        "imagen": "peach.png"
    },
    "febrero": {
        "nombre": "Kratos",
        "texto": "Sos una persona calmada pero con temperamento.\n La clave será aprender a dejar que la vida fluya sin tener miedo de dejarte llevar por ella.\n Son momentos de gran responsabilidad, por lo que hay que tomar las decisiones adecuadas.\n No dejes que pase más tiempo, si no quieres verte ante el dilema de tomar una decisión muy dificil. Te propondrán un nuevo proyecto en el que te implicarás al cien por cien. Demuestra lo que vales, ahora es tu momento.",
        "imagen": "kratos.png"
    },


    "marzo": {
        "nombre": "Scorpion",
        "texto": "La marcada inteligencia que tenes y tu capacidad innata para generar ideas repercutirá muy bien en los demás. La vida social será muy activa y te lucirás,aunque es verdad que con algunas personas podrás tener desentendimientos y manifestar cierta irritabilidad..\n Esto no te afectará, porque eres capaz de minimizar aún los mayores conflictos, aclarando con facilidad cualquier malentendido.",
        "imagen": "scorpion.png"
    },

    "abril": {
        "nombre": "Kratos",
        "texto": "Sos una persona calmada pero con temperamento. La clave será aprender a dejar que la vida fluya sin tener miedo de dejarte llevar por ella. Son momentos de gran responsabilidad, por lo que hay que tomar las decisiones adecuadas. No dejes que pase más tiempo, si no quieres verte ante el dilema de tomar una decisión muy dificil. Te propondrán un nuevo proyecto en el que te implicarás al cien por cien. Demuestra lo que vales, ahora es tu momento.",
        "imagen": "kratos.png"
    },

    "mayo": {
        "nombre": "Batman",
        "texto": " Utiliza tu exquisita percepción para lograr estar en el lugar correcto a la hora justa y así saldrás victorioso  a en diferentes niveles de la vida, tendrás que hacer el esfuerzo  de relajarte y de dejar susceptibilidades de lado.Personas de tu círculo cercano van  a pedirte colaboración para que les apoyes en proyectos comunes, es importante que te impliques.  No intentes llevar la voz de la razón, simplemente da lo mejor de ti y serás recompensado/a con creces.",
        "imagen": "batman.png"
    },
    "junio": {
        "nombre": "Mario",
        "texto": "No te manifiestes ante el menor obstáculo con tu carácter fuerte y dominante. Apela a tu naturaleza seductora y trata de conquistar aún las más difíciles de las situaciones. No estarás desprotegida/o para lograr lo que desees, pero sí, ten en cuenta que la serenidad será tu mejor aliada. Juega con los desafíos con el sarcasmo que te caracteriza y saldrás triunfante.",
        "imagen": "mario.png"
    },
    "julio": {
        "nombre": "Crash Bandicoot",
        "texto": "Eres extremadamente protector con los suyos y algo lunático, ya que cambian de parecer cada  dos por tres. Llevas una época muy intensa, de mucho agotamiento físico y mental. También tiene que preguntarte el por qué, qué es lo que te está quitando la paz y hace que no duermas por las noches. Intenta de honesto/a contigo mismo/a y no postergar más la decisión que sabes que tienes que tomar.",
        "imagen": "crash.png"
    },
    "agosto": {
        "nombre": "CJ",
        "texto": "Tu natural optimismo y fe en ti mismo/a te ayudarán a enfrentar situaciones difíciles.\n  a pesar de las disputas que podrás tener con personas de autoridad en tu entono, \n encontrarás las palabras justas para llegar a acuerdos armoniosos y sortear así los desafíos.",
        "imagen": "Cj.png"
    },
    "septiembre": {
        "nombre": "Edward Richtofen",
        "texto": "Eres líder por naturaleza pero a veces no sabes demostrar todo tu potencial.\n Deberías hacer un esfuerzo por conocerte más a ti mismo/a.\n Deberías hacer un esfuerzo por conocerte más a ti mismo/a.\n Date permiso a diario para cometer errores. Nadie es perfecto.",
        "imagen": "DR._Edward_Richtofen.png"
    },

    "octubre": {
        "nombre": "Geralt de Rivia",
        "texto": "Eres una persona extremadamente perfeccionista, analízas todo lo que te rodea (incluidos a vos mismo). Les gusta la estabilidad, la rutina y, además, tienen un sentido de la responsabilidad muy fuerte. Cuidado si tratan de engañarte.",
        "imagen": "geralt.png"
    },

    "noviembre": {
        "nombre": "Lara Croft",
        "texto": "Ves fantasmas donde no los hay y esto te ha vuelto bastante controlador/a. No les gusta tomar decisiones a largo plazo, porque tienden bastante a alejarse del compromiso.\n Es imposible que te lleves bien con todo el mundo, aunque lo pretendas, \n  cada uno tiene su carácter y es algo que tienes que admitir, te guste o no.",
        "imagen": "lara.png"
    },

    "diciembre": {
        "nombre": "Hitman",
        "texto": "ara tomar decisiones debes utilizar la intuición, te llevara el éxito laboral y profesional con tranquilidad y paciencia. Se avanza sin prisa, pero sin pausa y se recibiras tu ansiada recompensa.",
        "imagen": "hitman.png"
    }



}
/**
 * La funcion sirve para comprobar que la fecha indicada sea válida y si esta es válida se lleva a la pestaña correspondiente
 * @method comprobarinputs
 */
let comprobarinputs = () => {
    const inputDia = document.getElementById('dia').value;
    const inputMes = document.getElementById('mes').value;
    const inputAno = document.getElementById('año').value;

    if (isNaN(inputDia) || isNaN(inputMes) || isNaN(inputAno) || inputDia < 1 || inputDia > 31 || inputMes < 1 || inputMes > 12 || inputAno > 2016 || inputAno < 1924) {
        window.open("Error.html");
    } else {
        localStorage.setItem("mes", [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ][inputMes - 1]);
        window.open("personaje_generico.html");
    }
};
/**
 * La funcion sirve para cargar los datos a la pagina personaje_generico, donde te muestra la imagen y texto correspondiente segun el dato ingresado por el usuario
 * @method cargarDatos
 */
let cargarDatos = () => {
    const month = localStorage.getItem("mes");

    // Mostrar nombre y texto del personaje
    document.getElementById("nombre-personaje").innerHTML = personajes[month]["nombre"];
    document.getElementById("texto").innerText = personajes[month]["texto"];

    // Crear canvas y obtener contexto 2D
    const canvasContainer = document.getElementById("container");
    const canvasWidth = 1000; // Ancho del canvas
    const canvasHeight = 500; // Alto del canvas
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvasContainer.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // Cargar imagen del personaje en el canvas
    const img = new Image();
    img.src = `../imagenes%20horoscopo/${personajes[month]["imagen"]}`;
    img.onload = function() {
        const imgWidth = 500; // Ancho fijo de la imagen
        const imgHeight = 500; // Alto fijo de la imagen
        let x = 0;
        let direction = 1;
        setInterval(function() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpiar el canvas
            ctx.drawImage(img, x, (canvasHeight - imgHeight) / 2, imgWidth, imgHeight); // Dibujar la imagen
            x += direction; // Mover la imagen horizontalmente
            if (x > canvasWidth - imgWidth || x < 0) {
                direction *= -1; // Invertir la dirección al llegar a los bordes
            }
        }, 1000 / 60); // 60 FPS aproximadamente
    };
};
