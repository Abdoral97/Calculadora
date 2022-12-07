/*NÚMEROS-BOTÃO*/
const b0 = document.getElementById("butao-zero")
const b1 = document.getElementById("butao-um")
const b2 = document.getElementById("butao-dois")
const b3 = document.getElementById("butao-tres")
const b4 = document.getElementById("butao-quatro")
const b5 = document.getElementById("butao-cinco")
const b6 = document.getElementById("butao-seis")
const b7 = document.getElementById("butao-sete")
const b8 = document.getElementById("butao-oito")
const b9 = document.getElementById("butao-nove")
const bvirg = document.getElementById("butao-virg")


/*OPERADORES e OPÇÕES*/

const bsoma = document.getElementById("butao-adic")
const bsub = document.getElementById("butao-sub")
const bdiv = document.getElementById("butao-divi")
const bmulti = document.getElementById("butao-multi")
const bresul = document.getElementById("butao-resul")
const bc = document.getElementById("butao-c")
const bce = document.getElementById("butao-ce")

/*VISORES*/
const visorPrincipal = document.getElementById("tela")


/*FUNÇÕES*/

function insert(valor){
    visorPrincipal.innerHTML+=(valor.value)
}

function clear(){
    visorPrincipal.innerHTML=('')
}

function backspace(){
    
    var visorp = document.getElementById('tela').innerHTML
    visorPrincipal.innerHTML = visorp.substring(0, visorp.length-1)
    
}

function confirma(){
    visorPrincipal.innerHTML = eval(visorPrincipal.innerHTML)
}
/*FUNÇÃO */
b0.addEventListener("click", function click(){
    insert(b0)
})
b1.addEventListener("click", function click(){
    insert(b1)
})
b2.addEventListener("click", function click(){
    insert(b2)
})
b3.addEventListener("click", function click(){
    insert(b3)
})
b4.addEventListener("click", function click(){
    insert(b4)
})
b5.addEventListener("click", function click(){
    insert(b5)
})
b6.addEventListener("click", function click(){
    insert(b6)
})
b7.addEventListener("click", function click(){
    insert(b7)
})
b8.addEventListener("click", function click(){
    insert(b8)
})
b9.addEventListener("click", function click(){
    insert(b9)
})
bvirg.addEventListener("click", function click(){
    insert(bvirg)
})
bsoma.addEventListener("click", function click(){
    insert(bsoma)
})
bsub.addEventListener("click", function click(){
    insert(bsub)
})
bdiv.addEventListener("click", function click(){
    insert(bdiv)
})
bmulti.addEventListener("click", function click(){
    insert(bmulti)
})


bc.addEventListener("click", function click(){
    clear()
})
bce.addEventListener("click", function click(){
    backspace(bce)
})

bresul.addEventListener("click", function click(){
    confirma(bresul)
})

