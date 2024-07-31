const color = function (){
    let code = "0123456789ABCDEF"
    let color = "#"
    for(i = 0; i < 6; i++){
        color += code[Math.floor(Math.random() * 16)]
    }
    return color
}

let interval
const startchangingcolor = function(){
    if(interval){
        return
    }
    interval = setInterval(function(){
        document.body.style.backgroundColor = color()
    }, 1000)
}

document.querySelector("#start").addEventListener("click", startchangingcolor)

document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(interval)
    document.body.style.backgroundColor = "color()"
    interval = null
})

