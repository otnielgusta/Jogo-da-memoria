$(document).ready(() => {

    $("form").on('submit',function (e) {
        e.preventDefault();
        let email = $("#email").val();
        const data = {
            email: email,
        }

        $.post({
            type: "POST",
            url: "http://127.0.0.1/api_jogo/novoJogador.php",
            data: data,
        })
            .done((data) => {
                json = JSON.parse(data);
                if (json.status == "ok") {
                    sessionStorage.setItem('nome', json.nome);
                    alert("Deu brasil");
                    window.location.href = "../visual/jogo.html";
                }
                else {
                    alert("Não é possivel entrar")
                }
            })


    })
});