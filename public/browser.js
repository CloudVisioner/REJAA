
console.log("Frontend JS ishga tushdi")

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div class="d-flex gap-2">
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm">
              Ozgartirish
            </button>
            <button  data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();


    axios // JS library used for making HTTP request from borwser to node.js
        .post("/create-item", { reja: createField.value }) // value is static not random word
        .then(response => {
            document
                .getElementById("item-list")
                // Why response.data, not just response????
                .insertAdjacentHTML("beforeend", itemTemplate(response.data)) // automatic html publishing
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("Please try again")

        });

});

document.addEventListener("click", function (e) { // Whenever the user clicks anywhere on the page, run this function.
    // delete operations
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq o'chirmoqchimisz?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((respose) => {
                    console.log(respose.data);
                    e.target.parentElement.parentElement.remove();


                })
                .catch((err) => {
                    console.log('Iltimos qaytadan harakat qiling!')

                })

        }
    }


    // edit operations
    if (e.target.classList.contains("edit-me")) {

    }
});