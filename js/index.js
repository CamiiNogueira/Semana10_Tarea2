let btnguardar = document.getElementById("buttonText");
let input = document.getElementById("inputText");

btnguardar.addEventListener("click", () => {
    localStorage.setItem("dato", input.value);
})