Se deben de establecer los valores para que se ejecuten adecuadamente.

node getCountData.js
node valuePoint.js


Problema 1:
Factory Method - Yo ocupararía éste patrón, ya que se nos plantea que debe de usar servicios diferentes, entonces Factory Method nos proporciona que las subclases son
las que se dedican a elegir el comportamiento.


Problema 2:
Diferencia: uno es un método, mientras que el otro es un objeto, básicamente el método toma la decisión y ésta está se implementa en las subclases.
- Factory Method: Un reproductor de media, ya sea de vídeo o audio, para fácilitar la ejecución del método según sea el caso.
- Abstrac Factory: Lo ocupararía para la creación de un framework de diseño (Posiblemente en Diseño de aplicaciones de escritorio y Mobiles), que me proporciones los elementos y 
la implementación de ellos de diferente manera