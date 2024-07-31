const form = document.querySelector('form')

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const Weight = parseInt(document.querySelector('#Weight').value)
    const Hight = parseInt(document.querySelector('#Hight').value)
    const resulte = document.querySelector('#resulte')
    
     if(Hight === '' || Hight < 0 || isNaN(Hight)){
    resulte.innerHTML = `Enter valid Hight ${Hight}`
    }
     if(Weight === '' || Weight < 0 || isNaN(Weight)){
    resulte.innerHTML = `Enter valid Weight ${Weight}`
    }
    else {
        const bmi = (Weight / ((Hight *Hight) / 10000)).toFixed(2)
        resulte.innerHTML = `${bmi}`        
    }
}
)