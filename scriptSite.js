function reinit() {
    for (let i = 1; i < 12; i++) {   
    document.getElementById("input"+i).value = ""
    }
}

function choix() {  
reinit()  
type = document.getElementById("choix").value
entree = document.getElementById("entree").value
    if (type == "Hexadécimal")
    hexaTodecimal(entree)
    else if (type == "Décimal")
    deciToHexa(entree)
    else if (type == "Binaire")
    binToDeci(entree)
}


function hexaTodecimal(chaine) {
    chaine = chaine.toUpperCase()
    let tabHexa = ["0", "1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    for (let i = 0;i<chaine.length;i++) { 
        if (tabHexa.indexOf(chaine[i]) < 0) {
            alert("Vous avez saisis des caractères non autorisés")
            return false
        }
    }  
    let decimal = parseInt(chaine,16)
    document.getElementById("input2").value = decimal
    document.getElementById("input3").value = chaine
    deciToBin(decimal)
}

function deciToHexa(deci) {
    deci = deci*1
    if (Number.isInteger(deci)) {
    document.getElementById("input3").value = deci.toString(16).toUpperCase()
    document.getElementById("input2").value = deci
    deciToBin(deci)
    } else {
        alert("Vous n'avez pas saisis un nombre entier")
        return false
      }
}

function deciToBin(deci) {
    let binaire = deci.toString(2)
    document.getElementById("input1").value = binaire
}

function binToDeci(bin) {
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] != "0" && bin[i] != "1") {
            alert("Vous avez saisis des caractère non autorisés")
            return false
        }
    }
        let deci = parseInt(bin,2)
        document.getElementById("input1").value = bin
        document.getElementById("input2").value = deci
        document.getElementById("input3").value = deci.toString(16).toUpperCase()
}