
{
  {
    let i=-160;
    let a=setInterval(function() {
      i+=5;
      if(i>0){clearInterval(a);}
      else{$('#vacation').css('left',i+'px');}
    },10);
  }
  {
    let i=-280;
    let a=setInterval(function() {
      i+=5;
      if(i>0){clearInterval(a);}
      else{$('#walk').css('left',i+'px');}
    },10);
  }
  {
    let i=-120;
    let a=setInterval(function() {
      i+=5;
      if(i>0){clearInterval(a);}
      else{$('#fishing').css('left',i+'px');}
    },10);
  }
  {
    let i=-280;
    let a=setInterval(function() {
      i+=5;
      if(i>0){clearInterval(a);}
      else{$('#weekend').css('left',i+'px');}
    },10);
  }
  {
    let i=-280;
    let a=setInterval(function() {
      i+=5;
      if(i>0){clearInterval(a);}
      else{$('#addnew').css('left',i+'px');}
    },10);
  }
  {
    let i=-280;
    let a=setInterval(function() {
      i+=5;
      if(i>0){clearInterval(a);}
      else{$('#reset').css('left',i+'px');}
    },10);
  }
}

// animation occasion
{
  //#5da79b
  let buttonclick=1;
  function dateclicked(a) {
    if(buttonclick==1){
      a.id='datex';
      a.style.backgroundColor='#5da79b';
      let span = a.getElementsByTagName("span");
      span[0].style.color='white';
      document.querySelectorAll('#date').forEach(item => {
        item.addEventListener('mouseenter', event => {
          item.style.backgroundColor='#5da79b';
          item.style.color='white';
          $(a).nextUntil(item).css("background-color", "#68baad");
          $(a).nextUntil(item).css("color", "white");
        })
        item.addEventListener('mouseleave', event => {
          item.style.backgroundColor='white';
          item.style.color='black';
          $(a).nextUntil(item).css("background-color", "white");
          $(a).nextUntil(item).css("color", "black");
        })
      });
      buttonclick=2;
    }
    else{
      buttonclick=1;
      console.log(1);
    }
  }
}
