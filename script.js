function addItem() {
    const input = document.getElementById("input");
    const newItemText = input.value;

    if (newItemText.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = newItemText;
        
        const deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";
        deletebutton.onclick = function(){
            del(li);
        };
        li.appendChild(deletebutton);
        document.getElementById('list').appendChild(li);
        input.value="";
    }
}

function del(li) {
    li.remove();
}
