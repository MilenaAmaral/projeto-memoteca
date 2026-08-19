(function () {
    var CHAVE_ARMAZENAMENTO = "memoteca-tema";
    var body = document.body;
    var botao;

    function aplicarTema(tema) {
        if (tema === "claro") {
            body.classList.add("tema-claro");
        } else {
            body.classList.remove("tema-claro");
        }

        if (botao) {
            botao.textContent = tema === "claro" ? "🌙" : "☀️";
            botao.setAttribute(
                "aria-label",
                tema === "claro" ? "Ativar tema escuro" : "Ativar tema claro"
            );
        }
    }

    function temaSalvo() {
        try {
            return localStorage.getItem(CHAVE_ARMAZENAMENTO);
        } catch (erro) {
            return null;
        }
    }

    function temaPreferidoDoSistema() {
        var prefereClaro =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: light)").matches;
        return prefereClaro ? "claro" : "escuro";
    }

    document.addEventListener("DOMContentLoaded", function () {
        botao = document.getElementById("theme-toggle");

        var temaInicial = temaSalvo() || temaPreferidoDoSistema();
        aplicarTema(temaInicial);

        if (botao) {
            botao.addEventListener("click", function () {
                var novoTema = body.classList.contains("tema-claro")
                    ? "escuro"
                    : "claro";
                aplicarTema(novoTema);
                try {
                    localStorage.setItem(CHAVE_ARMAZENAMENTO, novoTema);
                } catch (erro) {
                    /* localStorage indisponível — segue sem persistir */
                }
            });
        }
    });
})();