// Função para cadastrar uma reserva
function cadastrarReserva() {
    const placa = document.getElementById("placa").value;
    const proprietario = document.getElementById("proprietario").value;
    const apartamento = document.getElementById("apartamento").value;
    const bloco = document.getElementById("bloco").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const vaga = document.getElementById("vaga").value;

    // Crie um objeto com os dados da reserva
    const reserva = {
        placa,
        proprietario,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    };

    // Exiba os dados no console
    console.log("Reserva cadastrada:", reserva);

    // Exiba uma mensagem de confirmação
    alert("Cadastro realizado com sucesso!");

    // Limpe o formulário
    document.getElementById("reservation-form").reset();
}

// Variáveis fictícias para representar vagas cadastradas e ocupadas
const vagasCadastradas = ["Vaga 1", "Vaga 3", "Vaga 4", "Vaga 6"];
const vagasOcupadas = ["Vaga 2", "Vaga 5", "Vaga 7", "Vaga 10"]; // Suponha que a Vaga 2 esteja ocupada

// Função para listar vagas disponíveis
function listarVagasDisponiveis() {
    const vagasList = document.getElementById("vagas-list");
    vagasList.innerHTML = ""; // Limpe a lista antes de atualizar

    // Função para listar vagas ocupadas
function listarVagasOcupadas() {
    const vagasList = document.getElementById("vagas-list");
    vagasList.innerHTML = ""; // Limpe a lista antes de atualizar

    if (vagasOcupadas.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Nenhuma vaga está ocupada no momento.";
        vagasList.appendChild(li);
    } else {
        vagasOcupadas.forEach((vaga) => {
            const li = document.createElement("li");
            li.textContent = vaga;
            vagasList.appendChild(li);
        });
    }
}

    // Calcule as vagas disponíveis removendo as vagas ocupadas das vagas cadastradas
    const vagasDisponiveis = vagasCadastradas.filter((vaga) => !vagasOcupadas.includes(vaga));

    if (vagasDisponiveis.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Todas as vagas estão ocupadas.";
        vagasList.appendChild(li);
    } else {
        vagasDisponiveis.forEach((vaga) => {
            const li = document.createElement("li");
            li.textContent = vaga;
            vagasList.appendChild(li);
        });
    }

    function validarFormulario() {
        const placa = document.getElementById("placa").value;
        const proprietario = document.getElementById("proprietario").value;
        const apartamento = document.getElementById("apartamento").value;
        const bloco = document.getElementById("bloco").value;
        const modelo = document.getElementById("modelo").value;
        const cor = document.getElementById("cor").value;
        const vaga = document.getElementById("vaga").value;
    
        let formularioValido = true;
    
        // Validar campos obrigatórios
        if (!placa || !proprietario || !apartamento || !bloco || !modelo || !cor || !vaga) {
            formularioValido = false;
    
            // Exibir mensagens de erro
            if (!placa) {
                document.getElementById("placa-error").textContent = "Placa é obrigatória.";
            } else {
                document.getElementById("placa-error").textContent = "";
            }
    
            // Adicione lógica semelhante para os outros campos obrigatórios
    
            alert("Preencha todos os campos obrigatórios.");
        }
    
        return formularioValido;
    }
}



// Chame a função para listar vagas disponíveis ao carregar a página (opcional)
listarVagasDisponiveis();