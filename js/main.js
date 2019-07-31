function Calcular() {

  var peso = document.getElementById('peso').value;
  var select = document.getElementById('planetas').value;
  var gravedad = 9.81;
  var velocidadT = 1.622;
  var velocidadM = 3.71;
  var velocidadV = 8.87;

  function validar() {
    if (peso == ''){
      alert('por favor ingresa correctamente el peso')
    } 
    else  { 
      datos();
    }
  }
  validar();

  function datos() {
    if(select == 'planeta1') {
      var resultado = peso/gravedad*velocidadT;
      document.getElementById('span').innerHTML = 'Tu peso es: ' +  Math.round(resultado*100)/100  + ' kg';
    } 
    
    else if (select == 'planeta2') {
      var resultadoM = peso/gravedad*velocidadM;
      document.getElementById('span').innerHTML = 'Tu peso es: ' + Math.round(resultadoM*100)/100 + ' kg';
    }
    
    else {
      var resultadoV = peso/gravedad*velocidadV;
      document.getElementById('span').innerHTML = 'Tu peso es: ' + Math.round(resultadoV*100)/100 + ' kg';
    }
  }
}