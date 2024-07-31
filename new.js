function SetuserName(name) {
    console.log("called")
    return this.name = name
}

function creatuser(name, email, pass){
    SetuserName.call(this, name)
    this.email = email
    this.pass = pass
}

const chai = new creatuser("Nitin","hello@gmaqil.com","123")
console.log(chai)