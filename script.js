const form = document.querySelector('form');
let todos = ['Wake up', 'Go for a round'];
const list = document.querySelector('ul');

const renderTodo =() => {
    list.textContent = '';
 

    todos.forEach(todo => {
        let li = document.createElement('li');
        li.textContent = todo;
        list.appendChild(li);
    });
}

form?.addEventListener('submit', (ev) => {
    const todo = document.querySelector('input').value;
    ev.preventDefault();
    todos.push(todo);
    renderTodo();
});

// $("ul").on("click", "span", function(event){
//     $(this).parent().fadeOut(500, function(){
//     $(this).remove();
//     });
//     event.stopPropagation();
//     });

renderTodo();


