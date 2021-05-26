var myIndex = 0;
changeImg();

function changeImg() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(changeImg, 2000);
}


function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById('tab1Content').style.display="none";
    document.getElementById('tab2Content').style.display="none";
    
    //Show the Selected Tab
    document.getElementById('tab' + tabIndex + 'Content').style.display="block";  
  }


  var sec = 0;
  function pad ( val ) { return val > 9 ? val : " " + val; }
  setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec);
  }, 1000);
