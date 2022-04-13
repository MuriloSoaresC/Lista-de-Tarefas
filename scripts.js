// variáveis de seleção
const input = document.querySelector(".nova-tarefa-input");
const button = document.querySelector(".nova-tarefa-button");

const tarefasContainer = document.querySelector(".tarefas-container");

//validação do que foi digitado no input
const validaInput = () => input.value.trim().length > 0;

//adição de classe de erro no input
const adicionaTarefa = () => {
    const inputValido = validaInput();

    if (!inputValido) {
        return input.classList.add("error");
    };

    //criação da div para inserção da tarefa
    const menuTarefasContainer = document.createElement("div");
    menuTarefasContainer.classList.add("tarefa-item");

    //criação do parágrafo com a tarefa inserida no input
    const conteudoTarefa = document.createElement("p");
    conteudoTarefa.innerText = input.value;

    //criação do ícone lata de lixo para deletar uma tarefa
    const deletar = document.createElement("i");
    deletar.classList.add("fa-solid");
    deletar.classList.add("fa-trash-can");

    //adiciona o evento de clique para a deleção de uma tarefa
    deletar.addEventListener("click", () => cliqueDeletar(menuTarefasContainer, conteudoTarefa));

    //adiciona a tarefa e o ícone de deleção
    menuTarefasContainer.appendChild(conteudoTarefa);
    menuTarefasContainer.appendChild(deletar);

    //adiciona os itens acima dentro da div tarefasContainer
    tarefasContainer.appendChild(menuTarefasContainer);

    //limpa o input após adicionar uma tarefa
    input.value = "";
};

//recebe os filhos da div tarefasContainer que são as divs com as tarefas
const cliqueDeletar = (menuTarefasContainer, conteudoTarefa) => {
    const tarefas = tarefasContainer.childNodes;

    //verifica se a tarefa clicada é a mesma recebida e se for a remove
    for (const tarefa of tarefas) {
        if (tarefa.firstChild.isSameNode(conteudoTarefa)) {
            menuTarefasContainer.remove();
        }
    }
};

//remove a estilização da classe error ao digitar no input
const mudancaInput = () => {
    const inputValido = validaInput();

    if (inputValido) {
        return input.classList.remove("error");
    }
};

//evento de clique no botão adicionar
button.addEventListener('click', () => adicionaTarefa());

//evento de mudança no input que retira a classe de erro caso o input seja válido
input.addEventListener('change', () => mudancaInput());
