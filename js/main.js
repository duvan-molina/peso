function Calcular() {

  var peso = document.getElementById('peso').value;
  var select = document.getElementById('planetas').value;
  var gravedad = 9.81;
  var fT = 1.622;
  var fM = 3.71;
  var fV = 8.87;


  function validar() {
    if (peso == ''){
      alert('por favor ingresa correctamente el peso');
      return false;
    } 
    else if(select == 'nada'){
      alert('por favor elige un planeta');
    }
    else  { 
      datos();
    }
  }
  validar();

  function datos() {
    if(select == 'planeta1') {
      var resultado = peso/gravedad*fT;
      document.getElementById('span').innerHTML = 'Tu peso es: ' +  Math.round(resultado*100)/100  + ' kg';
    } 
    
    else if (select == 'planeta2') {
      var resultadoM = peso/gravedad*fM;
      document.getElementById('span').innerHTML = 'Tu peso es: ' + Math.round(resultadoM*100)/100 + ' kg';
    }
    
    else {
      var resultadoV = peso/gravedad*fV;
      document.getElementById('span').innerHTML = 'Tu peso es: ' + Math.round(resultadoV*100)/100 + ' kg';
    }
  }
}