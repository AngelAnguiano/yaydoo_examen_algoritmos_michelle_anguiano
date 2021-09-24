
let message = "Érase una vez una niñita que lucía una hermosa capa de color rojo. Como la niña la usaba muy a menudo, todos la llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la llamó y le dijo: —Abuelita no se siente muy bien, he horneado unas galletitas y quiero que tú se las lleves. —Claro que sí —respondió Caperucita Roja, poniéndose su capa y llenando su canasta de galletas recién horneadas. Antes de salir, su mamá le dijo: —Escúchame muy bien, quédate en el camino y nunca hables con extraños. —Yo sé mamá —respondió Caperucita Roja y salió inmediatamente hacia la casa de la abuelita.";
let messageArray = message.split(' ');

let sortArray = messageArray.sort();

let count = 1;

let objectResult = {};

const regex = /-/g;

for (let i = 1; i < sortArray.length - 1; i++) {

    let firtsWord = sortArray[i].replace('.', '').replace(',', '').replace(';', '').replace('?', '')
    .replace('¿', '').replace('¡', '').replace('!', '').replace(regex, '').toLowerCase();
    let lastWord = sortArray[i-1].replace('.', '').replace(',', '').replace(';', '')
    .replace('?', '').replace('¿', '').replace('¡', '').replace('!', '').replace(regex, '').toLowerCase();

    
    if(firtsWord == lastWord) {
        count++
    } else {
        objectResult[`${lastWord}`] = count;
        count = 1;
    }
}

console.log(JSON.stringify(objectResult, undefined, 2))



