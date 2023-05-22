const slidess = document.querySelectorAll('.slides')
for(const slide of slidess){
    slide.addEventListener('click', () => {
        EraseClass()
        slide.classList.add('active')
    })
}
function EraseClass(){
    slidess.forEach((slide) => {
        slide.classList.remove('active')
    }

    )
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  function newElement1() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput1").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL1").appendChild(li);
      }
      document.getElementById("myInput1").value = "";
    
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
    
function newElement2() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput2").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL2").appendChild(li);
    }
    document.getElementById("myInput2").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
 
  function newElement3() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput3").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL3").appendChild(li);
      }
      document.getElementById("myInput3").value = "";
    
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
    
function newElement4() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput4").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL4").appendChild(li);
    }
    document.getElementById("myInput4").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
function newElement5() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput5").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL5").appendChild(li);
    }
    document.getElementById("myInput5").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  function newElement6() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput6").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL6").appendChild(li);
      }
      document.getElementById("myInput6").value = "";
    
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
  const up = document.querySelector('.up-button')
  const down = document.querySelector('.down-button')
  let activeSlide = 0;
  const sidebar= document.querySelector('.sidebar')
  const mainslide = document.querySelector('.main-slide')
  const container = document.querySelector('.container')
  slidesCount = mainslide.querySelectorAll('div').length
  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
  up.addEventListener('click', () => {
    changeSlide('up')

  })
 down.addEventListener('click', () => {
  changeSlide('down')

})

const height = container.clientHeight
function changeSlide(direction) {
  if (direction === 'up'){
    activeSlide++;
    if(activeSlide === slidesCount){
      activeSlide = 0
    }
  }
 else if (direction === 'down'){
    activeSlide--;
    if(activeSlide < 0){
      activeSlide = slidesCount - 1
    }
  }
  mainslide.style.transform = `translateY(-${activeSlide * height}px)`
  sidebar.style.transform = `translateY(${activeSlide * height}px)`
}
  
  