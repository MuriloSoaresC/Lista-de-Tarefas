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

    //deleção da tarefa
    deletar.addEventListener("click", () => cliqueDeletar(menuTarefasContainer, conteudoTarefa));
    
    menuTarefasContainer.appendChild(conteudoTarefa);
    menuTarefasContainer.appendChild(deletar);

    tarefasContainer.appendChild(menuTarefasContainer);

    input.value = "";
};

//verifica se o conteúdo do parágrafo é o mesmo que foi recebido
const cliqueDeletar = (menuTarefasContainer, conteudoTarefa) => {
    const tarefas = tarefasContainer.childNodes;

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

button.addEventListener('click', () => adicionaTarefa());

input.addEventListener('change', () => mudancaInput());
   