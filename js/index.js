document.getElementById("signs").addEventListener("click",
  function (e) {
    const sign = e.target.textContent.toLowerCase()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("horoscope").innerHTML = JSON.parse(this.responseText).horoscope;
      }
    };
    xhttp.open("GET", `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`, true);
    xhttp.send();
    document.getElementById(sign).style.display="block";
  }
)
