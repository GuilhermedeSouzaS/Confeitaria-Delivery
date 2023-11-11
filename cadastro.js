class Perfil {
    constructor(nome, dataDeNascimento, endereco, email, celular, senha, confirmarSenha) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;

    }

}

(function() {

    const formularioCadastro = document.querySelector(".form__cadastro");
    const dadosUsuarioCadastro = document.querySelectorAll(".input__cadastro");

    formularioCadastro.addEventListener("submit", function(event) {
        if(dadosUsuarioCadastro[5].value === dadosUsuarioCadastro[6].value) {
            const perfilUsuario = new Perfil(
                dadosUsuarioCadastro[0].value, 
                dadosUsuarioCadastro[1].value,
                dadosUsuarioCadastro[2].value,
                dadosUsuarioCadastro[3].value,
                dadosUsuarioCadastro[4].value, 
                dadosUsuarioCadastro[5].value, 
                dadosUsuarioCadastro[6].value);

            event.preventDefault();
            console.log("Funcionou!", perfilUsuario)

        } else {
            event.preventDefault();
            alert("As senhas informadas são diferentes!");

        }

    });

})();