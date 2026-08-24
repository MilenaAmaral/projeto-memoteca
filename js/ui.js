import api from "./api.js";

const ui = {

    async prencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);

        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;
    },

    limparFormulario() {
        document.getElementById("pensamento-form").reset();
    },

    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const mensagemVazia = document.getElementById("mensagem-vazia");

        listaPensamentos.innerHTML = "";

        try {
            const pensamentos = await api.buscarPensamentos();

            if (pensamentos.length === 0) {
                mensagemVazia.style.display = "block";
            } else {
                mensagemVazia.style.display = "none";
                pensamentos.forEach(ui.adicionarPensamentoNaLista);
            }

        } catch {
            alert("Erro ao renderizar pensamentos");
        }
    },

    adicionarPensamentoNaLista(pensamento) {

        const listaPensamentos = document.getElementById("lista-pensamentos");

        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.classList.add("pensamento-conteudo");
        pensamentoConteudo.textContent = pensamento.conteudo;

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.classList.add("pensamento-autoria");
        pensamentoAutoria.textContent = pensamento.autoria;

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.type = "button";
        botaoEditar.title = "Editar pensamento";

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";

        botaoEditar.appendChild(iconeEditar);

        botaoEditar.onclick = () => {
            ui.ativarEdicaoInline(
                li,
                pensamento,
                pensamentoConteudo,
                pensamentoAutoria,
                icones
            );
        };

        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.type = "button";
        botaoExcluir.title = "Excluir pensamento";

        const iconeExcluir = document.createElement("img");
        iconeExcluir.src = "assets/imagens/icone-excluir.png";
        iconeExcluir.alt = "Excluir";

        botaoExcluir.appendChild(iconeExcluir);

        botaoExcluir.onclick = async () => {
            try {
                await api.excluirPensamento(pensamento.id);
                ui.renderizarPensamentos();
            } catch {
                alert("Erro ao excluir pensamento");
            }
        };

        const icones = document.createElement("div");
        icones.classList.add("icones");

        icones.appendChild(botaoEditar);
        icones.appendChild(botaoExcluir);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones);

        listaPensamentos.appendChild(li);
    },

    ativarEdicaoInline(
        li,
        pensamento,
        pensamentoConteudo,
        pensamentoAutoria,
        icones
    ) {

        if (li.classList.contains("editando")) {
            return;
        }

        li.classList.add("editando");

        const conteudoOriginal = pensamento.conteudo;
        const autoriaOriginal = pensamento.autoria;

        const campoConteudo = document.createElement("textarea");
        campoConteudo.classList.add("campo-edicao-conteudo");
        campoConteudo.value = conteudoOriginal;
        campoConteudo.setAttribute("aria-label", "Editar pensamento");

        const campoAutoria = document.createElement("input");
        campoAutoria.classList.add("campo-edicao-autoria");
        campoAutoria.type = "text";
        campoAutoria.value = autoriaOriginal;
        campoAutoria.setAttribute("aria-label", "Editar autoria");

        pensamentoConteudo.replaceWith(campoConteudo);
        pensamentoAutoria.replaceWith(campoAutoria);

        icones.innerHTML = "";

        const botaoSalvar = document.createElement("button");
        botaoSalvar.type = "button";
        botaoSalvar.classList.add("botao-salvar-inline");
        botaoSalvar.textContent = "Salvar";

        const botaoCancelar = document.createElement("button");
        botaoCancelar.type = "button";
        botaoCancelar.classList.add("botao-cancelar-inline");
        botaoCancelar.textContent = "Cancelar";

        icones.appendChild(botaoSalvar);
        icones.appendChild(botaoCancelar);

        campoConteudo.focus();

        botaoCancelar.onclick = () => {
            campoConteudo.replaceWith(pensamentoConteudo);
            campoAutoria.replaceWith(pensamentoAutoria);

            icones.innerHTML = "";

            const novoBotaoEditar = document.createElement("button");
            novoBotaoEditar.classList.add("botao-editar");
            novoBotaoEditar.type = "button";
            novoBotaoEditar.title = "Editar pensamento";

            const novoIconeEditar = document.createElement("img");
            novoIconeEditar.src = "assets/imagens/icone-editar.png";
            novoIconeEditar.alt = "Editar";

            novoBotaoEditar.appendChild(novoIconeEditar);

            novoBotaoEditar.onclick = () => {
                ui.ativarEdicaoInline(
                    li,
                    pensamento,
                    pensamentoConteudo,
                    pensamentoAutoria,
                    icones
                );
            };

            const novoBotaoExcluir = document.createElement("button");
            novoBotaoExcluir.classList.add("botao-excluir");
            novoBotaoExcluir.type = "button";
            novoBotaoExcluir.title = "Excluir pensamento";

            const novoIconeExcluir = document.createElement("img");
            novoIconeExcluir.src = "assets/imagens/icone-excluir.png";
            novoIconeExcluir.alt = "Excluir";

            novoBotaoExcluir.appendChild(novoIconeExcluir);

            novoBotaoExcluir.onclick = async () => {
                try {
                    await api.excluirPensamento(pensamento.id);
                    ui.renderizarPensamentos();
                } catch {
                    alert("Erro ao excluir pensamento");
                }
            };

            icones.appendChild(novoBotaoEditar);
            icones.appendChild(novoBotaoExcluir);

            li.classList.remove("editando");
        };

        botaoSalvar.onclick = async () => {

            const novoConteudo = campoConteudo.value.trim();
            const novaAutoria = campoAutoria.value.trim();

            if (!novoConteudo || !novaAutoria) {
                alert("Preencha o pensamento e a autoria.");
                return;
            }

            try {
                botaoSalvar.disabled = true;

                const pensamentoAtualizado = await api.editarPensamento({
                    id: pensamento.id,
                    conteudo: novoConteudo,
                    autoria: novaAutoria
                });

                pensamento.conteudo = pensamentoAtualizado.conteudo;
                pensamento.autoria = pensamentoAtualizado.autoria;

                pensamentoConteudo.textContent = pensamentoAtualizado.conteudo;
                pensamentoAutoria.textContent = pensamentoAtualizado.autoria;

                campoConteudo.replaceWith(pensamentoConteudo);
                campoAutoria.replaceWith(pensamentoAutoria);

                icones.innerHTML = "";

                const novoBotaoEditar = document.createElement("button");
                novoBotaoEditar.classList.add("botao-editar");
                novoBotaoEditar.type = "button";
                novoBotaoEditar.title = "Editar pensamento";

                const novoIconeEditar = document.createElement("img");
                novoIconeEditar.src = "assets/imagens/icone-editar.png";
                novoIconeEditar.alt = "Editar";

                novoBotaoEditar.appendChild(novoIconeEditar);

                novoBotaoEditar.onclick = () => {
                    ui.ativarEdicaoInline(
                        li,
                        pensamento,
                        pensamentoConteudo,
                        pensamentoAutoria,
                        icones
                    );
                };

                const novoBotaoExcluir = document.createElement("button");
                novoBotaoExcluir.classList.add("botao-excluir");
                novoBotaoExcluir.type = "button";
                novoBotaoExcluir.title = "Excluir pensamento";

                const novoIconeExcluir = document.createElement("img");
                novoIconeExcluir.src = "assets/imagens/icone-excluir.png";
                novoIconeExcluir.alt = "Excluir";

                novoBotaoExcluir.appendChild(novoIconeExcluir);

                novoBotaoExcluir.onclick = async () => {
                    try {
                        await api.excluirPensamento(pensamento.id);
                        ui.renderizarPensamentos();
                    } catch {
                        alert("Erro ao excluir pensamento");
                    }
                };

                icones.appendChild(novoBotaoEditar);
                icones.appendChild(novoBotaoExcluir);

                li.classList.remove("editando");

            } catch {
                alert("Erro ao editar pensamento");
                botaoSalvar.disabled = false;
            }
        };
    }
};

export default ui;