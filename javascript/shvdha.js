/*Nav Bar section*/
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


/*history go back section*/
function goBack() {
  window.history.back()
}



/*typewriter section*/
$(function(){
	$(".typewriter").typed({
		strings: ["<a style=\"color:white\">I am Gopinath</a>", " <a style=\"color: rgb(0, 255, 255)\">I am here to show ur childwood memories</a>", " <a style=\"color: aqua\">90's cartoons</a>", "<a style=\"color: white\">2k's Anime</a>", "<a style=\"color: rgb(0, 128, 0)\">A collabration by P.Gopinath</a>"],

    
    
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});



/* tabcontent section */
    function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "white";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



/*page accordion section */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/* contact glow section */
        $(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})