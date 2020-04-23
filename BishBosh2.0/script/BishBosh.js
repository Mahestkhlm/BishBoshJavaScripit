function myFunction(p1, bishnumber, boshnumber) {
    var text = "";
    for (i = 1; i <= p1; i++) {
        if (i % bishnumber == 0 && i % boshnumber == 0) {
            text += "Bish-Bosh" + ", ";
        } else if (i % bishnumber == 0) {
            text += "Bish" + ", ";
        } else if (i % boshnumber == 0) {
            text += "Bosh" + ", ";
        } else {
            text += i + ", ";
        }
    }
    return text;
}
//very simple code