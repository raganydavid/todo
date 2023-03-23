const doc =  {
    tbody: document.querySelector('#tbody')
};

const state = {
    host: 'http://localhost:8000/',
    todos: []
};

function getTodos() {
    let url = state.host +'todos';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        //console.log(result);
        state.todos = result;
        render();
        });
}

function render() {
    let rows = '';
    state.todos.forEach( (todo) => {
        //console.log(todo.name);
        rows += `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>${todo.ready}</td>
        </tr>
        `;
    });
    tbody.innerHTML = rows;

}

getTodos();