function local() {

    var mail = document.getElementById('exampleInputEmail1').value
    var name = document.getElementById('nameImput').value
    console.log(mail)

    function setLocalStorage() {
        localStorage.setItem('nome', mail)
    }
    function confirmMessage() {
        alert("Obrigado " + name + " por se cadastar em nossa plataforma");
    }
    setLocalStorage()
    confirmMessage()
}

function newslatter() {

    var mail = document.getElementById('exampleInputEmail1').value

    console.log(mail)

    function setLocalStorage() {
        localStorage.setItem('nome', mail)
    }
    function confirmMessage() {
        alert("Obrigado por se cadastar em nossa plataforma");
    }
    setLocalStorage()
    confirmMessage()
}



