console.log("todo webapp by shahed patel");

document.addEventListener('DOMContentLoaded', function () {

    const input = document.querySelector('#input');
    const items = document.querySelector('#items');

    input.addEventListener('keyup', run);

    function run(property) {
        if (property.key === "Enter") {
            Create(this.value);
            this.value = "";
        }
    }

    const Create = (input) => {
        const lists = document.createElement('li');
        lists.innerHTML = ` 
        ${input}
        <i class="fas fa-trash-can"></i> 
        `;
        items.appendChild(lists);

        // items.addEventListener("click",
        //     function () {
        //         //here classlist is an func which work like Add,del,toggle and check. 
        //         this.classList.toggle("change");
        //     })

        lists.querySelector('i').addEventListener('click',
            function () {
                lists.remove();
            })

    }

})
