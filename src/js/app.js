let btnCalcular=document.getElementById('calcular');

btnCalcular.addEventListener('click' , ()=> AreaTriangulo())

const AreaTriangulo=()=>{ 
let ladoA = parseFloat(document.getElementById('ladoA').value),
    ladoB = parseFloat(document.getElementById('ladoB').value),
    anguloC = parseFloat(document.getElementById('anguloC').value),
    resultado=document.getElementById('resultado');

    let area= (0.5 * ladoA * ladoB * Math.sin(anguloC * (Math.PI / 180))).toFixed(2);
          console.log(area);

 resultado.innerHTML= `El area es: ${area} m2.`

};
