//En contraste con la sentencia break, continue no termina la ejecución del bucle por completo; en cambio,
//      **En un bucle while, salta de regreso a la condición.
//      **En un bucle for, salta a la expresión actualizada.

//Ejemplo con WHILE:
//El siguiente ejemplo muestra un bucle while que tiene una sentencia continue que se ejecuta cuando el valor de i es 3.
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
   console.log(n);
} //En este bucle, n toma los valores 1, 3, 7 y 12.


//La sentencia continue puede incluir una etiqueta opcional que permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual. En este caso, la sentencia continue necesita estar anidada dentro de esta sentecia etiquetada.

//Ejemplo con el uso de ETIQUETAS:
//En el siguiente ejemplo, una sentencia etiquetada checkiandj contiene una sentencia etiquetada checkj. Si se encuentra continue, el programa continua hasta encima de la sentencia checkj. Cada vez que se encuentra continue, checkj se reitera hasta que su condición devuelve false. Cuando se devuelve false, el recordatorio de la sentencia checkiandj se completa.
//Si continue tuviese una etiqueta checkiandj, el programa continuaría hasta encima de la sentencia checkiandj.

checkiandj:
while (i < 4) {
  document.write(i + "<br>");
  i += 1;

  checkj:
  while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if ((j % 2) == 0)
      continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>");
  document.write("j = " + j + "<br>");
}
