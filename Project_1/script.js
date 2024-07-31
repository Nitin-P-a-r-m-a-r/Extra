let button = document.querySelectorAll(".button")
const font = document.querySelectorAll('h1, h2');
console.log(font)
const body = document.body

button.forEach(function (but) {
    but.addEventListener("click", function(a) {
        console.log(a.target)
        if(a.target.id === "gray"){
            body.style.backgroundColor =  a.target.id
        }
        if (a.target.id === "white")
        {
            font.forEach((element) => {
            body.style.backgroundColor =  a.target.id
            element.style.color = "black";
            });
        }
        else
        {
            // Reset font color when other buttons are clicked
            font.forEach((element) => {
              element.style.color = "";
            });
        }
        if(a.target.id === "blue"){
            body.style.backgroundColor =  a.target.id
        }
        if(a.target.id === "yellow"){
            body.style.backgroundColor =  a.target.id
        }
    })
})