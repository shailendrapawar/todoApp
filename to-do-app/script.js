let input = document.getElementById("input")
let button = document.getElementById("button")
let listBody = document.querySelector(".list-body")
let count = document.querySelector(".count");
let countValue = 0;




button.addEventListener("click", () => {

    if (input.value == "") {
        alert("enter some value first")
    }
    else {

        let inputValue = input.value;
        let li = document.createElement("li")
        li.classList.add('item')
        li.innerHTML = `

            ${inputValue}
            <span id="icon-body" class="icon-body"><i id="icon-btn" class="fa-solid fa-trash fa-2xl"></i></span>
        `

        listBody.appendChild(li)
        countValue=countValue+1;
        count.innerHTML = `todo count : ${countValue}`
        input.value = ""
        saveData();

    }
})

listBody.addEventListener(("click"),(e)=>{
    // console.log(e.target.tagName)
    if(e.target.tagName=="LI"){
        // console.log(e.target.classList)
        // console.log("it being pressed")
        e.target.classList.toggle("checked");
        saveData()

    }
    else if(e.target.tagName=="I"){
        e.target.parentElement.parentElement.remove()
        countValue=countValue-1;
        count.innerHTML = `todo count : ${countValue}`;
        saveData()
    }
})







function saveData(){
    localStorage.setItem("data",listBody.innerHTML);
    localStorage.setItem("count",countValue);
}

function loadData(){
    listBody.innerHTML=localStorage.getItem("data")
    countValue=localStorage.getItem("count")
}

loadData();
