

function valor () {
    var a = document.getElementById("verba002");
    var b = document.getElementById("verbaDescontos002")

    b.value = a.value;
}


parseInt(document.getElementById("verba002").addEventListener("keypress", valor));








