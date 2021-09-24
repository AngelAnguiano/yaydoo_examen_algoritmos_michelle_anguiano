// Ejercicio 1

let a = [17, 0, 30]
let b = [200, 16, 30]

let points = [0,0]
 
for (let i = 0; i < a.length; i++) {
  if ((a[i] > 100 || a[i] < 1) || (b[i] > 100 || b[i] < 1)) {
    console.log(`Hay valores no validos, recuerda que las calificaciones deben ser de 1 a 100`) 
  } else {
    if(a[i] > b[i]) {
      points[0] += 1
    } else if (b[i] > a[i]) {
      points[1] += 1
    }
  }
}


console.log(points)