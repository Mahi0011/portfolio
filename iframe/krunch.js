// ---------------MENU BAR SHOW AND HIDE-------------------
let n = 0;
let showmenu = () => {

    let m = document.getElementById("menu-bar");
    let h1 = document.getElementById("s1-h1");
    let h3 = document.getElementById("s1-h3");
    if(n%2 == 0){
        m.style.display="flex";
        h1.style.color="rgb(86, 86, 86)";
        h3.style.color="rgb(86, 86, 86)";
    }
    else{
        m.style.display="none"
        h1.style.color="white";
        h3.style.color="white";
    }
    n++; 
}
// ------MENU ALWAYS SHOW ON BIG SCREEN------
let showfullmenu = () => {
    let m = document.getElementById("menu-bar");
    let h1 = document.getElementById("s1-h1");
    let h3 = document.getElementById("s1-h3");
    let w = window.outerWidth;
    if(w >= 970){
        m.style.display="flex";
        h1.style.color="white";
        h3.style.color="white";
    }
    else{
        m.style.display="none";
    }
}

// --------------------IMAGE BUTTON-------------------
let show = (n) => {
    const t = document.getElementById("jst");
    const txt1 =
      "It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis<br />viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id<br />rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.<br/><br/> WALTER WARD";
  
    t.classList.add("slide-out");
  
    setTimeout(function () {
      if (n == 1) {
        t.innerHTML = txt1;
      } else if (n == 2) {
        t.innerHTML = txt1;
      } else {
        t.innerHTML = txt1;
      }
      t.classList.add("slide-in");
      t.classList.remove("slide-out");
    }, 150);
  };



  // -----------NAVBAR INVISIBLE-----------------
  var p = window.scrollY;
  window.onscroll = function() {
  var c = window.scrollY;
  let w = window.outerWidth;
    if (p > c) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    p = c;
}



      // ------------------------NAVBAR SCROLL BG CHANGE-----------------------
      window.addEventListener("scroll", function() {
        var header = document.getElementById("navbar");
        var top = window.scrollY;
        var fp = document.getElementById("sec2").offsetHeight;
        let w = window.outerWidth;
        let smtp = this.document.getElementById("m-btn")
        let link = this.document.getElementsByClassName("h-a")
        if (w >= 970) {
        if (top >= fp) {
          header.style.backgroundColor="black";
          header.style.opacity=0.5;
        }
        else {
            header.style.backgroundColor="transparent";
            header.style.opacity=1; 
        }
    }
    else{
        if (top >= fp) {
            header.style.backgroundColor="black";
            header.style.opacity=0.5;
            smtp.style.color="white";
            for(let i = 0;i<link.length;i++){
                link[i].style.backgroundColor="black"
                link[i].style.opacity=1
                }
          }
          else {
              header.style.backgroundColor="transparent";
              header.style.opacity=1; 
              for(let i = 0;i<link.length;i++){
                link[i].style.backgroundColor="black"
                link[i].style.opacity=1
                }
          }
    }
      });



    //   ------------------LINK COLOR CHANGE ----------------------------------

      window.addEventListener('scroll', function() {
        const hdr = document.getElementsByClassName("h-a");
        const offsets = Array.from(Array(8), (_, i) => document.getElementById("l" + (i + 1)).offsetTop);
        const top = window.scrollY;
      
        for (let i = 0; i < hdr.length; i++) {
          if (top >= offsets[i] && top <= offsets[i + 1]) {
            hdr[i].style.color = "blue";
          } else {
            hdr[i].style.color = "white";
          }
        }
      });

