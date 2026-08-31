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


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('app.js')
            .then(reg => console.log('PWA configurada com sucesso!', reg))
            .catch(err => console.log('Erro ao configurar PWA.', err));
    });
}
