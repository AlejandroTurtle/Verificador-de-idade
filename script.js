function Verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById("res")
  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente")
  } else {
   var fsex = document.getElementsByName("radsex")
   var idade = ano - Number(fano.value)
   res.innerHTML = `Idade calculada ${idade}`
   var genero = ''
   var img = document.createElement("img")
   img.setAttribute("id", "foto")
   if (fsex[0].checked) {
    genero = "Homem"
    if(idade >= 0 && idade <10) {

    } else if (idade <21){
      img .setAttribute("src", "Jovem-homem.jpg")
      //Jovem
    } else if (idade <60){
      //Adulto
      img .setAttribute("src", "Adulto-homem.jpg")
    } else {
      //Idoso
      img .setAttribute("src", "Idoso-homem.jpg")
    }
   } else if (fsex[1].checked){
    genero = "Mulher"
    if(idade >= 0 && idade <10) {
    } else if (idade <21){
      //Jovem
      img .setAttribute("src", "Jovem-mulher.jpg")
    } else if (idade <60){
      //Adulto
      img .setAttribute("src", "Adulta-mulher.jpg")
    } else {
      //Idoso
      img .setAttribute("src", "Idoso-mulher.jpg")
    }
   }
res.style.textAlign = "center"
res.innerHTML = `Detectamos ${genero} de ${idade} anos`
res.appendChild(img)
}}
