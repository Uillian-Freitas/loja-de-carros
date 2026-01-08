$(document).ready(function () {

    $('#carousel-images').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculo: {
                required: false
            },
            mensagem: {
                required: true
            }
        },

        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 2 caracteres"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            veiculo: {
                required: "Por favor, insira o veículo de interesse"
            },
            mensagem: {
                required: "Por favor, insira uma mensagem"
            }
        },

        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos. Por favor, verifique e tente novamente.`);
            }
        },

        submitHandler: function (form) {
            alert("Formulário enviado com sucesso!");
        }
    });

$('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
});

$('.lista-carros button').click(function () {
    const nomeVeiculo = $(this).closest('li').find('h3').text();
    $('#veiculo').val(nomeVeiculo);

    const destino = $('#contato');
    const alturaHeader = $('header').outerHeight();

    $('html, body').animate({
        scrollTop: destino.offset().top - alturaHeader
    }, 1000);
});
$(document).ready(function () {

});
});
