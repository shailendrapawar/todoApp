let input = document.getElementById("input")
let button = document.getElementById("button")
let listBody = document.querySelector(".list-body")
let count = document.querySelector(".count");
let countValue = 0;
countValue = Number.parseInt(countValue);

button.addEventListener("click", () => {
    if (input.value == "") {
        alert("enter some value first")
    } else {
        let inputValue = input.value;
        let li = document.createElement("li")
        li.classList.add('item')
        li.innerHTML = `
            ${inputValue}
            <span id="icon-body" class="icon-body"><i id="icon-btn" class="fa-solid fa-trash fa-2xl"></i></span>
        `
        listBody.appendChild(li)
        countValue++;
        count.innerHTML = `todo count : ${countValue}`
        input.value = ""
        saveData();
    }
})

listBody.addEventListener(("click"), (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName == "I") {
        e.target.parentElement.parentElement.remove()
        countValue--;
        count.innerHTML = `todo count : ${countValue}`;

    }
})

function saveData() {
    if (listBody.innerHTML == "") {
        alert("nothing to save");
    } else {
        localStorage.setItem("data", listBody.innerHTML);
        localStorage.setItem("count", countValue);
    }
}

function loadData() {
    listBody.innerHTML = localStorage.getItem("data")
    countValue = localStorage.getItem("count")
    count.innerHTML = `todo count : ${countValue}`;
}

function clearSaved() {
    if (listBody.innerHTML == "") { alert("nothing to save") }
    else {
        let res = confirm("Confirm to delete saved data")
    
        if(res){
            localStorage.clear();
            countValue=0;
            count.innerHTML=`todo count : ${countValue}`
            
            listBody.innerHTML="" 
        }else{
            alert("cancelled");
        }
        
        
    }
}


loadData();

