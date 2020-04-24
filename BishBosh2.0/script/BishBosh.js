function myFunction() {
    var mylimit = document.getElementById("myvalue").value;
    var bishvalue = document.getElementById("bishnumber").value;
    var boshvalue = document.getElementById("boshnumber").value;
    var text = "";
    for (i = 1; i <= mylimit; i++) {
        if (i % bishvalue == 0 && i % boshvalue == 0) {
            text += "Bish-Bosh" + ", ";
        } else if (i % bishvalue == 0) {
            text += "Bish" + ", ";
        } else if (i % boshvalue == 0) {
            text += "Bosh" + ", ";
        } else {
            text += i + ", ";
        }
    }
   document.getElementById('demo').innerHTML = text;
}
//very simple code