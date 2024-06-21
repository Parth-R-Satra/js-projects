const TodoList = [{
    name: 'make dinner',
    duedate: '2022-12-22'
}, {
    name: 'wash cars',
    duedate: '2022-12-22'
}];

renderTodoList();
function renderTodoList() {
    let TodoListHtml = '';
    TodoList.forEach(function (TodoObject, index) {
        const { name, duedate } = TodoObject;
        const html =
            `<div>${name}</div>
        <div>${duedate}</div>
        <button class="delete-button js-delete-button">Delete</button>`;
        TodoListHtml += html;
    });
    document.querySelector('.js-todo-list').innerHTML = TodoListHtml;
    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            TodoList.splice(index, 1);
            renderTodoList();
        });
    });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
});
function addTodo() {
    const inputelement = document.querySelector('.js-name-input')
    const name = inputelement.value;
    const inputDateElement = document.querySelector('.js-due-date-input');
    const duedate = inputDateElement.value;

    TodoList.push({
        name: name,
        duedate: duedate
    });

    inputelement.value = '';
    renderTodoList();
}