$(document).ready(()=>{

    const nome = sessionStorage.getItem('nome');
    $('h2').text("Bem vindo "+ nome);

    $('h1').hide();

    var numeros = []
    var cartas = []
    var count = 0;
    var cartasCertas = [];
    var cartaAtual;
    var j = 0;
    var i = 0
    var k = 0;
    $('div').on('click', function(){
        id = $(this).find("h1").attr("id");
        if(!cartasCertas.includes(id)){
        $("#"+id).show();
        numeros[i] = $("#"+id).text();
        cartas[j] = id
        i++;
        j++;
            if("#"+id != cartaAtual){
                
                if(i == 2 && j == 2){
                    if(numeros[0] == numeros[1]){
                        count++;
                        cartasCertas[k] = cartas[0];
                        cartasCertas[k+1] = cartas[1];
                        
                        $('#'+cartas[0]).css('color', 'green');
                        
                        $('#'+cartas[1]).css('color', 'green');
                        
                        if (count == 5) {
                            alert("Parabéns, você venceu!")
                            $('div').find("h1").css('color', 'white')
                            $('div').find("h1").fadeOut(200)
                        }
                    }else{
                        
                        $('#'+cartas[0]).fadeOut(200);
                        $('#'+cartas[1]).fadeOut(200);
                    }
                    i = 0;
                    j = 0;
                }
           
            k+2;
        }
    }else{
        if (!cartasCertas.includes(cartas[0])) {
            $('#'+cartas[0]).fadeOut(200);
            
        }
        if (!cartasCertas.includes(cartas[1])) {
            
            $('#'+cartas[1]).fadeOut(200);
        }
        i = 0;
        j = 0;
    }
        
        
    cartaAtual = "#"+id;


    });
});