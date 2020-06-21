document.addEventListener("change", (event) => {
    const inputValue = document.querySelector("input").value;
    document.getElementsByClassName("dynamic-divs")[0].innerHTML = "";

    for (var i = 1; i <= parseInt(inputValue); i++) {
        const listItem = document.createElement("div");
        listItem.innerHTML = `Number ${i}`;
        document.getElementsByClassName("dynamic-divs")[0].appendChild(listItem);
    } 
    });
    document.querySelector(".reset").addEventListener("click", () => {
        document.getElementsByClassName("dynamic-divs")[0].innerHTML = "";
    });






