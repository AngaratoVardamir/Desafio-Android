function Você(){
    var nome = window.prompt(`Quem é você? [Diga Seu Nome]:`)
    var Vc = document.getElementsByClassName("Vc")
    for (var i = 0; i < Vc.length; i++) {
        Vc[i].innerHTML=`Você ${nome}`;
    }
}