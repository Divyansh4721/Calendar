function turnonslider()
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
  let ab;
  function addevent() {
    this.style.backgroundColor='#5da79b';
    this.style.color='white';
    $(ab).nextUntil(this).css("background-color", "#68baad");
    $(ab).nextUntil(this).css("color", "white");
    let inele=$(ab).nextUntil(this);
    for (let i = 0; i < inele.length; i++) {
      inele[i].id='datexi';
    }
  }
  function removeevent() {
    this.style.backgroundColor='white';
    this.style.color='black';
    $(ab).nextUntil(this).css("background-color", "white");
    $(ab).nextUntil(this).css("color", "black");
    let inele=$(ab).nextUntil(this);
    for (let i = 0; i < inele.length; i++) {
      inele[i].id='date';
    }
  }
  function dateclicked(a) {
    ab=a;
    if(buttonclick==1){
      a.id='datex';
      a.style.backgroundColor='#5da79b';
      let span = a.getElementsByTagName("span");
      span[0].style.color='white';
      document.querySelectorAll('#date').forEach(item => {
        item.addEventListener('mouseenter', addevent);
        item.addEventListener('mouseleave', removeevent);
      });
      buttonclick=2;
    }
    else if(buttonclick==2){
      document.querySelectorAll('#date').forEach(item => {
        item.removeEventListener('mouseenter', addevent);
        item.removeEventListener('mouseleave', removeevent);
      });
      document.querySelectorAll('#datexi').forEach(item => {
        item.removeEventListener('mouseenter', addevent);
        item.removeEventListener('mouseleave', removeevent);
      });
      document.querySelectorAll('#date').forEach(item => {
        item.addEventListener('mouseenter', function() {
          this.style.backgroundColor='white';
          this.style.color='black';
        });
      });
      turnonslider();
      occasionevent();
      a.id='datex';
      a.style.backgroundColor='#5da79b';
      buttonclick=3;

    }
  }
}
//occasion eventlisteners
function occasionevent()
{
  $('#vacation').click(function() {
    document.querySelectorAll('#datex').forEach(item => {
      item.style.backgroundColor='#bd677d';
    });
    document.querySelectorAll('#datexi').forEach(item => {
      item.style.backgroundColor='#d3738b';
    });
  });
  $('#walk').click(function() {
    document.querySelectorAll('#datex').forEach(item => {
      item.style.backgroundColor='#6578c5';
    });
    document.querySelectorAll('#datexi').forEach(item => {
      item.style.backgroundColor='#7186db';
    });
  });
  $('#fishing').click(function() {
    document.querySelectorAll('#datex').forEach(item => {
      item.style.backgroundColor='#805b7c';
    });
    document.querySelectorAll('#datexi').forEach(item => {
      item.style.backgroundColor='#8f658a';
    });
  });
  $('#weekend').click(function() {
    document.querySelectorAll('#datex').forEach(item => {
      item.style.backgroundColor='#dead79';
    });
    document.querySelectorAll('#datexi').forEach(item => {
      item.style.backgroundColor='#f7c187';
    });
  });
  $('#addnew').click(function() {
    document.querySelectorAll('#datex').forEach(item => {
      item.style.backgroundColor='#4fa093';
    });
    document.querySelectorAll('#datexi').forEach(item => {
      item.style.backgroundColor='#58b2a4';
    });
  });
}
