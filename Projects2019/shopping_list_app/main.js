
const inputBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
input.focus();

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        onAdd();
    } else {
        return;
    }
})

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove()
    }
});


inputBtn.addEventListener('click', () => {
    onAdd();
});

function onAdd() {
const text = input.value;
if(input.value === ''){
    return;
}
const item = creatItem(text);
items.appendChild(item);    
item.scrollIntoView({block: 'center'});
input.value = '';
input.focus();
}
let id = 0; // UUID
function creatItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = 
    `
    <div class="item" data-id=${id}>
        <span class="item__name" >${text}</span>
        <button class="item__delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="item__devider"></div>
    `;
    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');
    // const itemName = document.createElement('span');
    // itemName.setAttribute('class', 'item__name');
    // itemName.innerText = text;
    // const itemDelete  = document.createElement('button');
    // itemDelete.setAttribute('class', 'item__delete');
    // itemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // itemDelete.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    //     input.focus();
    // })
    // const itemDevider = document.createElement('div');
    // itemDevider.setAttribute('class', 'item__devider');
    // item.appendChild(itemName);
    // item.appendChild(itemDelete);
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDevider);
    id++;
    return itemRow;

}