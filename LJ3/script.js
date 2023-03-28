function encode() {
    console.log("Sending request...");

    var req = new XMLHttpRequest();
    var result = document.getElementById("result");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            result.innerHTML = req.responseText;
        } else {
            result.innerHTML = "Loading...";
        }
    }

    req.open('POST', '/encode', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("input=" + document.getElementById("input").value);
}
