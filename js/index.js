//Home button to change the display for the result and the selection sections''
function cx() {
  return {
    select: document.getElementById("select"),
    result: document.getElementById("result"),
    horoscope: document.getElementById("horoscope")
  }
}

document.getElementById("home").addEventListener("click", function() {
  cx().select.style.display="block"
  cx().result.style.display="none"
})

//uses event listern to make a ajax call to retrieve info from an api
document.getElementById("signs").addEventListener("click",
  //functuon that will activate taking in an event
  function(e) {
    //targets events and helps me get the text within the li element
    const sign = e.target.textContent.toLowerCase()
    //all Signs will help me with the boolean condition
    const allSigns = {
      taurus: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_taurus.png",
      aquarius: "https://i2.wp.com/numerologydailyreport.com/wp-content/uploads/2017/07/Aquarius-Traits2.png?fit=1254%2C700&ssl=1", 
      pisces: "http://identity-mag.com/wp-content/uploads/2018/03/pisces.png", 
      aries: "https://i2.wp.com/numerologydailyreport.com/wp-content/uploads/2017/07/aries-traits.jpg?fit=770%2C538&ssl=1", 
      gemini: "http://www.izodiaque.com/wp-content/uploads/2017/05/Gemini.png", 
      cancer: "https://piedfeed.com/wp-content/uploads/2017/08/horoscope-cancer-sign.jpg", 
      leo: "http://myentertainmentspot.com/wp-content/uploads/2017/11/az_img_horoscope_leo-660x330.png", 
      virgo: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_virgo.png", 
      libra: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_libra.png", 
      scorpio: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_scorpio.png", 
      sagittarius: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_sagittarius.png", 
      capricorn: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_capricorn.png"
    }
    //this condition helps me execute what is needed if the user clicks an li element with text
    if (Object.keys(allSigns).includes(sign)) {
      //once it finds a text that is one of the horoscope this function shows the result
      cx().result.style.display="block"
      
      //this allows me to use an ajax call
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          cx().horoscope.innerHTML = JSON.parse(this.responseText).horoscope;
        }
      };
      xhttp.open("GET", `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`, true);
      xhttp.send();

      //this allows me to make sure all the images display goes back to none once a user clicks another sign
      var allImg = document.getElementsByTagName('IMG')
      for (let i = 0; i < allImg.length; i++) {
        allImg[i].style.display="none"
      }

      //this causes the main section to go back to none
      cx().select.style.display="none"
      //this reveals the result image
      document.getElementById(sign).style.display="block";
    }
  }
)

