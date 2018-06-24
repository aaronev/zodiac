/*

using an api for horoscope data
using an ajax/xhtml call to retrieve information

found free api for horoscope
https://www.quora.com/What-are-some-free-horoscope-APIs
http://sandipbgt.com/theastrologer/api/
http://sandipbgt.com/theastrologer/api/horoscope/taurus/today/
http://sandipbgt.com/theastrologer/api/horoscope/taurus/yesterday/


1 find way to make request to api and get information to render
the simplest way to do this is by hard coding a sign first into api
http://sandipbgt.com/theastrologer/api/horoscope/taurus/today/

2. then render information to html

var xhr = new XMLHttpRequest()

*/


//test out var xhr = new XMLHttpRequest() 

document.getElementById("signs").addEventListener("click",
  function (e) {
    const sign = e.target.textContent.toLowerCase()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("test").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`, true);
    xhttp.send();
  }
)
