function normalizar(texto) {
  return texto
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function embaralharLetras(texto) {
  return texto
    .split(/(\s+)/)
    .map(parte => {

      // Mantém espaços exatamente como estão
      if (/^\s+$/.test(parte)) {
        return parte;
      }

      const caracteres = [...parte];

      for (let i = caracteres.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [caracteres[i], caracteres[j]] = [caracteres[j], caracteres[i]];
      }

      return caracteres.join("");
    })
    .join("")
    .toUpperCase();
}

window.addEventListener("pageshow", () => {
  document
    .querySelectorAll('input[type="text"]')
    .forEach(i => i.value = "");
});

/* =====================================================
   ESTADOS BRASILEIROS
   (ficam no mesmo paises.js; são reconhecidos pelo
   campo excecao.tipo = "Estado Brasileiro")
===================================================== */

function ehEstado(pais) {
  return pais.excecao?.tipo === "Estado Brasileiro";
}

/* =====================================================
   TIPOS DE PLACAR
   (chave = sufixo usado nos ids do HTML e no localStorage)
===================================================== */

const TIPOS = [
  { chave: "Paises",          tipo: "pais",          config: "preencherPaises" },
  { chave: "Capitais",        tipo: "capital",       config: "preencherCapitais" },
  { chave: "Continentes",     tipo: "continente",    config: "preencherContinentes" },
  { chave: "Estados",         tipo: "estado",        config: "preencherEstados" },
  { chave: "CapitaisEstados", tipo: "capitalestado", config: "preencherCapitaisEstados" }
];

/* =====================================================
   VARIÁVEIS DO QUESTIONÁRIO
===================================================== */

let configuracaoAtual = {
  preencherPaises: true,
  preencherCapitais: false,
  preencherContinentes: false,
  preencherEstados: false,
  preencherCapitaisEstados: false,
  mostrarPaises: true,
  mostrarCapitais: false,
  mostrarContinentes: false,
  mostrarBandeiras: true,
  mostrarEstados: false,
  mostrarCapitaisEstados: false,
  mostrarBandeirasEstados: false
};

// Alguma opção relacionada aos PAÍSES está ativa?
function temOpcaoPaises(config) {
  return (
    config.mostrarPaises ||
    config.mostrarCapitais ||
    config.mostrarContinentes ||
    config.mostrarBandeiras ||
    config.preencherPaises ||
    config.preencherCapitais ||
    config.preencherContinentes
  );
}

// Alguma opção relacionada aos ESTADOS está ativa?
function temOpcaoEstados(config) {
  return (
    config.mostrarEstados ||
    config.mostrarCapitaisEstados ||
    config.mostrarBandeirasEstados ||
    config.preencherEstados ||
    config.preencherCapitaisEstados
  );
}

// Transforma as opções dos estados nas mesmas chaves usadas pelos países,
// assim o mesmo código desenha os dois.
function configDosEstados(config) {
  return {
    preencherPaises: config.preencherEstados,
    preencherCapitais: config.preencherCapitaisEstados,
    preencherContinentes: false,
    mostrarPaises: config.mostrarEstados,
    mostrarCapitais: config.mostrarCapitaisEstados,
    mostrarContinentes: false,
    mostrarBandeiras: config.mostrarBandeirasEstados
  };
}

/* =====================================================
   RENDERIZAR UM PAÍS (OU ESTADO)
===================================================== */

function htmlPais(pais, config, estado) {

  // data-tipo usado no placar (estados têm tipos próprios)
  const tipoPais = estado ? "estado" : "pais";
  const tipoCapital = estado ? "capitalestado" : "capital";

  // Continentes válidos do país (ignora vazios, como no caso da ONU)
  const continentes = (pais.continente || []).filter(c => c && c.trim() !== "");

  let html = `<li>`;

  /* ---------- BANDEIRA ---------- */

  if (config.mostrarBandeiras) {
    html += `
      <img
        class="flag"
        src="${pais.bandeira || `https://flagcdn.com/${pais.codigo}.svg`}"
        alt="${Array.isArray(pais.pais) ? pais.pais[0] : pais.pais}"
      >
    `;
  }

  html += `<div class="dados">`;

  /* ---------- NOME DO PAÍS MOSTRADO ---------- */

  if (config.mostrarPaises && !config.preencherPaises) {
    html += `
      <div class="linha">
        <span>${pais.excecao?.tipo || "País"}:</span>
        <span>${Array.isArray(pais.pais) ? pais.pais[0] : pais.pais}</span>
      </div>
    `;
  }

  /* ---------- CAMPO PARA PREENCHER PAÍS ---------- */

  if (config.preencherPaises) {
    html += `
      <div class="linha">
        <span>${pais.excecao?.tipo || "País"}:</span>
        <input
          type="text"
          data-tipo="${tipoPais}"
          data-answer="${Array.isArray(pais.pais) ? pais.pais.join("|") : pais.pais}"
          placeholder="${pais.excecao?.placeholder || "País"}"
        >
        <span class="status"></span>
      </div>
    `;
  }

  /* ---------- CONTINENTE MOSTRADO ---------- */

  if (
    config.mostrarContinentes &&
    !config.preencherContinentes &&
    continentes.length > 0
  ) {
    html += `
      <div class="linha">
        <span>Continente:</span>
        <span>${continentes[0]}</span>
      </div>
    `;
  }

  /* ---------- CAMPO PARA PREENCHER CONTINENTE ---------- */

  if (config.preencherContinentes && continentes.length > 0) {
    html += `
      <div class="linha">
        <span>Continente:</span>
        <input
          type="text"
          data-tipo="continente"
          data-answer="${continentes.join("|")}"
          placeholder="Continente"
        >
        <span class="status"></span>
      </div>
    `;
  }

  /* ---------- CAPITAL MOSTRADA ---------- */

  if (config.mostrarCapitais && !config.preencherCapitais) {

    if (!pais.excecao?.semCapital && pais.capitais.length > 0) {

      pais.capitais.forEach((capital, i) => {
        html += `
          <div class="linha">
            <span>${pais.capitais.length === 1 ? "Capital:" : `Capital ${i + 1}:`}</span>
            <span>${capital[0]}</span>
          </div>
        `;
      });

    }

  }

  /* ---------- CAMPOS PARA PREENCHER CAPITAIS ---------- */

  if (config.preencherCapitais) {

    if (!pais.excecao?.semCapital && pais.capitais.length === 1) {

      html += `
        <div class="linha">
          <span>${pais.excecao?.campoCapital || "Capital"}:</span>
          <input
            type="text"
            data-tipo="${tipoCapital}"
            data-answer="${pais.capitais[0].join("|")}"
            placeholder="${pais.excecao?.placeholderCapital || "Capital"}"
          >
          <span class="status"></span>
        </div>
      `;

    } else {

      pais.capitais.forEach((capital, i) => {

        const nomeCampo = pais.excecao?.campoCapital || `Capital ${i + 1}`;
        const placeholderCampo = pais.excecao?.placeholderCapital || "Capital";

        html += `
          <div class="linha">
            <span>${nomeCampo}:</span>
            <input
              type="text"
              data-tipo="${tipoCapital}"
              data-group="${pais.codigo}"
              data-index="${i}"
              data-answer="${capital.join("|")}"
              placeholder="${placeholderCampo}"
            >
            <span class="status"></span>
          </div>
        `;

      });

    }

  }

  html += `
    </div>
  </li>
  `;

  return html;

}

/* =====================================================
   RENDERIZAR A LISTA (países e depois estados)
===================================================== */

function renderizarPaises(listaPaises) {

  const lista = document.getElementById("listaPaises");

  const config = configuracaoAtual;

  const soPaises = listaPaises.filter(p => !ehEstado(p));
  const soEstados = listaPaises.filter(p => ehEstado(p));

  let html = "";

  if (temOpcaoPaises(config)) {

    soPaises.forEach(pais => {
      html += htmlPais(pais, config, false);
    });

  }

  if (temOpcaoEstados(config) && soEstados.length > 0) {

    html += `
      <li style="display:block; background:transparent; border:none; box-shadow:none; padding:0; margin:35px 0 10px; text-align:center;">
        <h3 style="margin:0; color:#3da8ff; font-size:22px; font-weight:600;">
          Estados do Brasil
        </h3>
      </li>
    `;

    const configEstados = configDosEstados(config);

    soEstados.forEach(estado => {
      html += htmlPais(estado, configEstados, true);
    });

  }

  lista.innerHTML = html;

}

/* =====================================================
   INÍCIO
===================================================== */

/*
 * Roda assim que o HTML estiver pronto
 * (não espera imagens e fontes como o window.onload).
 */

function iniciarApp() {

  /* ---------- ELEMENTOS ---------- */

  const $ = id => document.getElementById(id);

  const btnGerar = $("btnGerarQuestionario");
  const btnAleatorio = $("btnAleatorio");
  const mensagemOpcao = $("mensagemOpcao");

  const todasOpcoes = [
    ...document.querySelectorAll(".configuracao-questionario input[type='checkbox']")
  ];

  /* ---------- ATUALIZAR PLACAR (VISIBILIDADE) ---------- */

  function atualizarInterfacePlacar() {

    TIPOS.forEach(t => {

      const ativo = configuracaoAtual[t.config];

      $(`placar${t.chave}`).style.display = ativo ? "block" : "none";
      $(`ultimo${t.chave}Linha`).style.display = ativo ? "inline" : "none";
      $(`recorde${t.chave}Linha`).style.display = ativo ? "inline" : "none";

    });

  }

  /* ---------- TOTAIS ---------- */

  function atualizarTotais() {

    TIPOS.forEach(t => {

      $(`total${t.chave}`).textContent =
        document.querySelectorAll(`input[data-tipo="${t.tipo}"]`).length;

    });

  }

  function zerarAcertosNaTela() {

    TIPOS.forEach(t => {
      $(`acertos${t.chave}`).textContent = 0;
    });

  }

  /* ---------- PLACAR ---------- */

  function atualizarPlacar() {

    const contagem = {};

    TIPOS.forEach(t => contagem[t.tipo] = 0);

    document.querySelectorAll("input[data-tipo]").forEach(inp => {

      if (
        inp.readOnly &&
        inp.dataset.revelado !== "nao-sei" &&
        contagem[inp.dataset.tipo] !== undefined
      ) {
        contagem[inp.dataset.tipo]++;
      }

    });

    let acertos = 0;
    let recordeTotal = Number(localStorage.getItem("recordeTotal")) || 0;

    TIPOS.forEach(t => {

      const valor = contagem[t.tipo];

      acertos += valor;

      $(`acertos${t.chave}`).textContent = valor;
      $(`ultimo${t.chave}`).textContent = valor;
      localStorage.setItem(`ultimo${t.chave}`, valor);

      let recorde = Number(localStorage.getItem(`recorde${t.chave}`)) || 0;

      if (valor > recorde) {
        recorde = valor;
        localStorage.setItem(`recorde${t.chave}`, recorde);
      }

      $(`recorde${t.chave}`).textContent = recorde;

    });

    localStorage.setItem("ultimoTotal", acertos);
    $("ultimoTotal").textContent = acertos;

    if (acertos > recordeTotal) {
      recordeTotal = acertos;
      localStorage.setItem("recordeTotal", recordeTotal);
    }

    $("recordeTotal").textContent = recordeTotal;

  }

  /* ---------- FOCAR O PRÓXIMO CAMPO LIVRE ---------- */

  function focarProximo(inputs, index) {

    let i = index + 1;

    while (i < inputs.length) {

      if (!inputs[i].readOnly) {
        inputs[i].focus();
        break;
      }

      i++;

    }

  }

  /* ---------- CONFIGURAR INPUTS ---------- */

  function configurarInputs() {

    const inputs = document.querySelectorAll("input[data-tipo]");

    inputs.forEach((input, index) => {

      input.addEventListener("keydown", e => {

        if (e.key !== "Tab") {
          return;
        }

        e.preventDefault();

        const direction = e.shiftKey ? -1 : 1;

        let i = index + direction;

        while (i >= 0 && i < inputs.length) {

          const nextInput = inputs[i];

          if (!nextInput.readOnly) {
            nextInput.focus();
            break;
          }

          i += direction;

        }

      });

      input.addEventListener("input", () => {

        const status = input.nextElementSibling;

        const valor = normalizar(input.value);

        /* ===== DICA ===== */

        if (valor === "dica") {

          let resposta = "";

          if (input.dataset.answer) {
            resposta = input.dataset.answer.split("|")[0];
          }

          if (input.dataset.group) {

            const grupo = input.dataset.group;

            const pais = paises.find(p => p.codigo === grupo);

            if (pais) {

              const inputsGrupo =
                document.querySelectorAll(`input[data-group="${grupo}"]`);

              const capitaisUsadas = [];

              inputsGrupo.forEach(outro => {

                if (outro === input) {
                  return;
                }

                if (outro.readOnly && outro.value) {
                  capitaisUsadas.push(normalizar(outro.value));
                }

              });

              for (const conjunto of pais.capitais) {

                const nomeCapital = conjunto[0];

                if (!capitaisUsadas.includes(normalizar(nomeCapital))) {
                  resposta = nomeCapital;
                  break;
                }

              }

            }

          }

          if (resposta !== "") {

            input.dataset.respostaOriginal = resposta;

            const dica = embaralharLetras(resposta);

            let dicaElemento =
              input.parentElement.querySelector(".dica-embaralhada");

            if (!dicaElemento) {
              dicaElemento = document.createElement("span");
              dicaElemento.className = "dica-embaralhada";
              input.parentElement.appendChild(dicaElemento);
            }

            dicaElemento.textContent = `💡 ${dica}`;

            input.value = "";

            status.textContent = "";

          }

          return;

        }

        /* ===== RESPOSTA (REVELAR) ===== */

        if (valor === "resposta") {

          let resposta = "";

          if (input.dataset.answer) {
            resposta = input.dataset.answer.split("|")[0];
          }

          if (input.dataset.group) {

            const grupo = input.dataset.group;

            const pais = paises.find(p => p.codigo === grupo);

            if (pais) {

              const inputsGrupo =
                document.querySelectorAll(`input[data-group="${grupo}"]`);

              const capitaisUsadas = [];

              inputsGrupo.forEach(outro => {

                if (outro !== input && outro.readOnly && outro.value) {
                  capitaisUsadas.push(normalizar(outro.value));
                }

              });

              for (const conjunto of pais.capitais) {

                const nomeCapital = conjunto[0];

                if (!capitaisUsadas.includes(normalizar(nomeCapital))) {
                  resposta = nomeCapital;
                  break;
                }

              }

            }

          }

          if (resposta !== "") {

            status.className = "status nao-sei";

            input.value = resposta;

            input.readOnly = true;

            input.dataset.revelado = "nao-sei";

            atualizarPlacar();

            focarProximo(inputs, index);

          }

          return;

        }

        /* ===== CAPITAIS MÚLTIPLAS ===== */

        if (input.dataset.group) {

          const grupo = input.dataset.group;

          const pais = paises.find(p => p.codigo === grupo);

          if (!pais) {
            return;
          }

          const valorNormalizado = normalizar(input.value);

          const inputsGrupo =
            document.querySelectorAll(`input[data-group="${grupo}"]`);

          let conjuntoEncontrado = null;

          for (const conjunto of pais.capitais) {

            if (conjunto.some(nome => normalizar(nome) === valorNormalizado)) {
              conjuntoEncontrado = conjunto;
              break;
            }

          }

          if (!conjuntoEncontrado) {
            status.textContent = "";
            return;
          }

          let jaUsada = false;

          inputsGrupo.forEach(outro => {

            if (outro === input) {
              return;
            }

            if (!outro.readOnly) {
              return;
            }

            if (normalizar(outro.value) === normalizar(conjuntoEncontrado[0])) {
              jaUsada = true;
            }

          });

          if (jaUsada) {
            status.textContent = "";
            return;
          }

          status.textContent = "✔";

          status.className = "status ok";

          input.value = conjuntoEncontrado[0];

          input.readOnly = true;

          atualizarPlacar();

          focarProximo(inputs, index);

          return;

        }

        /* ===== RESPOSTA NORMAL (país, capital única, continente, estado) ===== */

        if (!input.dataset.answer) {
          return;
        }

        const respostasValidas =
          input.dataset.answer.split("|").map(r => normalizar(r));

        if (respostasValidas.includes(valor) && valor !== "") {

          status.textContent = "✔";

          status.className = "status ok";

          input.value = input.dataset.answer.split("|")[0];

          input.readOnly = true;

          atualizarPlacar();

          focarProximo(inputs, index);

        } else {

          status.textContent = "";

        }

      });

    });

  }

  /* ---------- CARREGAR DADOS SALVOS ---------- */

  TIPOS.forEach(t => {

    const ultimo = localStorage.getItem(`ultimo${t.chave}`);
    const recorde = localStorage.getItem(`recorde${t.chave}`);

    if (ultimo !== null) {
      $(`ultimo${t.chave}`).textContent = ultimo;
    }

    if (recorde !== null) {
      $(`recorde${t.chave}`).textContent = recorde;
    }

  });

  ["ultimoTotal", "recordeTotal"].forEach(chave => {

    const valorSalvo = localStorage.getItem(chave);

    if (valorSalvo !== null) {
      $(chave).textContent = valorSalvo;
    }

  });

  /* ---------- LER AS OPÇÕES MARCADAS ---------- */

  function lerConfiguracao() {

    const config = {};

    todasOpcoes.forEach(opcao => {

      // "opcaoPreencherEstados" -> "preencherEstados"
      const nome = opcao.id.replace(/^opcao/, "");
      const chave = nome.charAt(0).toLowerCase() + nome.slice(1);

      config[chave] = opcao.checked;

    });

    return config;

  }

  /* ---------- GERAR QUESTIONÁRIO ---------- */

  btnGerar.addEventListener("click", () => {

    const algumMostrar = todasOpcoes.some(
      o => o.id.startsWith("opcaoMostrar") && o.checked
    );

    if (!algumMostrar) {
      mensagemOpcao.classList.add("visivel");
      return;
    }

    mensagemOpcao.classList.remove("visivel");

    configuracaoAtual = lerConfiguracao();

    renderizarPaises(paises);

    zerarAcertosNaTela();
    atualizarInterfacePlacar();
    atualizarTotais();
    configurarInputs();

  });

  /* ---------- ORDEM ALEATÓRIA ---------- */

  btnAleatorio.addEventListener("click", () => {

    if (
      !temOpcaoPaises(configuracaoAtual) &&
      !temOpcaoEstados(configuracaoAtual)
    ) {
      return;
    }

    const ordemAleatoria = [...paises];

    for (let i = ordemAleatoria.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [ordemAleatoria[i], ordemAleatoria[j]] =
        [ordemAleatoria[j], ordemAleatoria[i]];

    }

    renderizarPaises(ordemAleatoria);

    zerarAcertosNaTela();
    atualizarTotais();
    configurarInputs();

  });

  /* ---------- RESETAR RECORDE ---------- */

  $("resetRecorde").addEventListener("click", () => {

    const confirmar = confirm("Tem certeza que deseja apagar todos os recordes?");

    if (!confirmar) {
      return;
    }

    TIPOS.forEach(t => {
      localStorage.removeItem(`recorde${t.chave}`);
      $(`recorde${t.chave}`).textContent = 0;
    });

    localStorage.removeItem("recordeTotal");
    $("recordeTotal").textContent = 0;

  });

  /* ---------- ESTADO INICIAL ---------- */

  atualizarInterfacePlacar();

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarApp);
} else {
  iniciarApp();
}
