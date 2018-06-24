document.getElementById("home").addEventListener("click", function() {
  document.getElementById("select").style.display="block"
  document.getElementById("result").style.display="none"
})

//uses event listern to make a ajax call to retrieve info from an api
document.getElementById("signs").addEventListener("click",
  function(e) {
    const sign = e.target.textContent.toLowerCase()
    document.getElementById("result").style.display="block"
    const allSigns = [
      "taurus", 
      "aquarius", 
      "pisces", 
      "aries", 
      "gemini", 
      "cancer", 
      "leo", 
      "virgo", 
      "libra", 
      "scorpio", 
      "sagittarius", 
      "capricorn"
    ]
    if (allSigns.includes(sign)) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("horoscope").innerHTML = JSON.parse(this.responseText).horoscope;
        }
      };
      xhttp.open("GET", `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`, true);
      xhttp.send();
      var allImg = document.getElementsByTagName('IMG')
      for (let i = 0; i < allImg.length; i++) {
        allImg[i].style.display="none"
      }
      document.getElementById("select").style.display="none"
      document.getElementById(sign).style.display="block";
    }
  }
)

