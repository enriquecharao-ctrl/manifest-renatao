

function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const texto = input.value.trim();
    
    if (texto === '') return;

    const lista = document.getElementById('listaTarefas');
    const li = document.createElement('li');
    li.className = 'tarefa-item';
    li.innerHTML = `
        ${texto}
        <button class="btn-deletar" onclick="this.parentElement.remove()">✕</button>
    `;

    lista.appendChild(li);
    input.value = '';
}


// 1. Mostrar Nome da Disciplina
function mostrarDisciplina() {
    document.getElementById('resEx1').innerText = "Disciplina: Programação de Aplicações Web (PWA)";
}

// 2. Soma de Ponto Flutuante
function somarFlutuantes() {
    const n1 = parseFloat(document.getElementById('ex2Num1').value) || 0;
    const n2 = parseFloat(document.getElementById('ex2Num2').value) || 0;
    const soma = n1 + n2;
    document.getElementById('resEx2').innerText = `Resultado: ${soma.toFixed(2)}`;
}

// 3. Média Aritmética e Status do Aluno
function calcularMedia() {
    const n1 = parseFloat(document.getElementById('nota1').value) || 0;
    const n2 = parseFloat(document.getElementById('nota2').value) || 0;
    const n3 = parseFloat(document.getElementById('nota3').value) || 0;
    const n4 = parseFloat(document.getElementById('nota4').value) || 0;
    
    const media = (n1 + n2 + n3 + n4) / 4;
    const status = media >= 7 ? "Aprovado" : "Reprovado";
    
    document.getElementById('resEx3').innerText = `Média: ${media.toFixed(1)} - Status: ${status}`;
}

// 5. Gerador de Tabuada (0 a 10)
function gerarTabuada() {
    const num = parseInt(document.getElementById('numTabuada').value);
    const container = document.getElementById('resEx5');
    
    if (isNaN(num)) {
        container.innerText = "Por favor, insira um número válido.";
        container.style.display = "block";
        return;
    }
    
    let resultadoHTML = `Tabuada do ${num}:\n`;
    for (let i = 0; i <= 10; i++) {
        resultadoHTML += `${num} x ${i} = ${num * i}\n`;
    }
    
    container.innerText = resultadoHTML;
    container.style.display = "block";
}

// 6. Maior de 3 Valores Positivos (Aciona ao digitar -1)
let valoresEx6 = [];
function adicionarValorMaior() {
    const input = document.getElementById('inputMaior');
    const valor = parseFloat(input.value);
    const painel = document.getElementById('resEx6');
    
    if (isNaN(valor)) return;

    if (valor === -1) {
        if (valoresEx6.length === 3) {
            const maior = Math.max(...valoresEx6);
            painel.innerText = `Valores lidos: [${valoresEx6.join(', ')}]. O maior valor é: ${maior}`;
        } else {
            painel.innerText = `Erro: Adicione exatamente 3 valores positivos antes de digitar -1. (Total atual: ${valoresEx6.length})`;
        }
        valoresEx6 = []; // Limpa o vetor para reiniciar
    } else if (valor > 0) {
        if (valoresEx6.length < 3) {
            valoresEx6.push(valor);
            painel.innerText = `Valores inseridos: [${valoresEx6.join(', ')}]`;
        } else {
            painel.innerText = `Você já inseriu 3 valores ([${valoresEx6.join(', ')}]). Digite -1 para ver o maior.`;
        }
    } else {
        painel.innerText = "Insira apenas números positivos (ou -1 para finalizar).";
    }
    input.value = '';
}

// 7. Imprimir Valores Ímpares de um Vetor (Corrigido: Adicionado o vetor solicitado de 1 a 10)
function imprimirImpares() {
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const impares = vetor.filter(num => num % 2 !== 0);
    document.getElementById('resEx7').innerText = `Valores ímpares: ${impares.join(', ')}`;
}

// 8. Escrever Nome de Trás para Frente
function inverterNome() {
    const nome = document.getElementById('inputNomeInvertido').value.trim();
    if (nome === "") return;
    const nomeInvertido = nome.split('').reverse().join('');
    document.getElementById('resEx8').innerText = `Invertido: ${nomeInvertido}`;
}

// 9. Estrutura e Filtro de Funcionários (Acima de 1 salário mínimo)
let funcionarios = [];
const SALARIO_MINIMO = 1412.00;

function cadastrarFuncionario() {
    const nome = document.getElementById('funcNome').value.trim();
    const idade = parseInt(document.getElementById('funcIdade').value);
    const sexo = document.getElementById('funcSexo').value.trim();
    const salario = parseFloat(document.getElementById('funcSalario').value);
    
    if (!nome || isNaN(idade) || !sexo || isNaN(salario)) {
        alert("Preencha todos os dados do funcionário.");
        return;
    }
    
    const novoFunc = { nome, idade, sexo, salario };
    funcionarios.push(novoFunc);
    
    document.getElementById('contagemFunc').innerText = `Cadastrados: ${funcionarios.length} / 5`;
    
    document.getElementById('funcNome').value = '';
    document.getElementById('funcIdade').value = '';
    document.getElementById('funcSexo').value = '';
    document.getElementById('funcSalario').value = '';
    
    if (funcionarios.length >= 5) {
        const filtrados = funcionarios.filter(f => f.salario > SALARIO_MINIMO);
        let relatorio = `📊 Funcionários com ganho acima de R$ ${SALARIO_MINIMO.toFixed(2)}:\n\n`;
        
        if (filtrados.length === 0) {
            relatorio += "Nenhum funcionário cadastrado ganha mais que um salário mínimo.";
        } else {
            filtrados.forEach(f => {
                relatorio += `• ${f.nome} (${f.sexo}, ${f.idade} anos) - R$ ${f.salario.toFixed(2)}\n`;
            });
        }
        
        const resPainel = document.getElementById('resEx9');
        resPainel.innerText = relatorio;
        resPainel.style.display = "block";
    }
}

// 10. Funções de Operações Matemáticas Básicas (Corrigido: nome da função alterado para executarCalculo)
const operacoes = {
    soma: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => b !== 0 ? a / b : "Erro (divisão por zero)"
};

function executarCalculo(tipo) {
    const valA = parseFloat(document.getElementById('calcN1').value);
    const valB = parseFloat(document.getElementById('calcN2').value);
    
    if (isNaN(valA) || isNaN(valB)) {
        document.getElementById('resEx10').innerText = "Insira ambos os valores.";
        return;
    }
    
    const resultado = operacoes[tipo](valA, valB);
    const resultadoFormatado = typeof resultado === 'number' ? resultado.toFixed(2) : resultado;
    document.getElementById('resEx10').innerText = `Resultado: ${resultadoFormatado}`;
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Aponta para o arquivo sw.js correto para não quebrar a aplicação
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registrado!', reg))
            .catch(err => console.log('Erro ao registrar Service Worker', err));
    });
}
