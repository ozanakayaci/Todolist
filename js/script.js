


//remove button
let li = document.getElementsByTagName("li")
let totalLi = li.length

for (let i = 0; i < totalLi; i++) {
    var span = document.createElement("span")
    var spanText = document.createTextNode("\u2718")
    span.classList.add("remove")
    span.appendChild(spanText)
    li[i].appendChild(span)
}

var list = document.querySelector("ul");
list.addEventListener("click", function (check) {
    check.target.tagName = "li" ? check.target.classList.toggle("checked") : false
})




//Add li

var getListDOM = document.querySelector("#list");
var alertText = document.querySelector(".alerText")

function addListli() {
    let liDOM = document.createElement("li");
    let getInput = document.querySelector("#task").value
    let inputValue = document.createTextNode(getInput)
    liDOM.appendChild(inputValue)


    if (getInput === "" || getInput.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show")
    } else {
        alertText.innerHTML = `"${getInput}" yapacaklar listesine başarıyla eklendi.`
        getListDOM.append(liDOM)
        $(".success").toast("show")

    }
    document.querySelector("#task").value = ""

    //remove button
    var span = document.createElement("span")
    var spanText = document.createTextNode("\u2718")
    span.classList.add("remove")
    span.appendChild(spanText)
    liDOM.appendChild(span)
    removeFunction()
}



//remove li element function
function removeFunction() {
    let remove = document.getElementsByClassName('remove')


    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var liRemove = this.parentElement;
            liRemove.classList.add("liclose")
            document.querySelectorAll('.liclose').forEach(function (a) {
                a.remove()
            })
        }
    }
}
removeFunction()



