function abrirTela(id, botao = null) {
  const telas = document.querySelectorAll(".screen");
  telas.forEach(tela => tela.classList.remove("active-screen"));

  document.getElementById(id).classList.add("active-screen");

  const botoes = document.querySelectorAll(".nav-btn");
  botoes.forEach(btn => btn.classList.remove("active"));

  if (botao) {
    botao.classList.add("active");
  }
}

function registrarOcorrencia() {
  const tipo = document.getElementById("tipo").value;
  const local = document.getElementById("local").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  if (!tipo || !local || !descricao) {
    alert("Preencha todos os campos antes de registrar a ocorrência.");
    return;
  }

  const data = new Date().toLocaleString("pt-BR");

  document.getElementById("resumoOcorrencia").innerHTML = `
    <p><strong>Tipo:</strong> ${tipo}</p>
    <p><strong>Local:</strong> ${local}</p>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Status:</strong> Alerta ativo</p>
  `;

  const lista = document.getElementById("listaHistorico");

  const item = document.createElement("div");
  item.className = "alert-item";
  item.innerHTML = `
    <strong>${tipo}</strong>
    <p>${local} • ${data}</p>
    <p>${descricao}</p>
  `;

  lista.appendChild(item);

  document.getElementById("tipo").value = "";
  document.getElementById("local").value = "";
  document.getElementById("descricao").value = "";

  abrirTela("confirmacao");
}