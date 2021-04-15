function turnonslider(clickval)
{
  let allele=document.querySelectorAll('#datex');
  let htop=allele[1].offsetTop+40;
  allele=document.querySelectorAll('#date');
  htop=date[date.length-1].offsetTop+40-htop;
  {
    $('#vacation').css('top','-'+htop+'px');
    $('#walk').css('top','-'+htop+'px');
    $('#fishing').css('top','-'+htop+'px');
    $('#weekend').css('top','-'+htop+'px');
    $('#addnew').css('top','-'+htop+'px');
    $('#reset').css('top','-'+htop+'px');
  }
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
      a.id='datex';
      document.querySelectorAll('#date').forEach(item => {
        item.addEventListener('mouseenter', function() {
          this.style.backgroundColor='white';
          this.style.color='black';
        });
      });

      functionName();
      turnonslider(a);
      a.style.backgroundColor='#5da79b';
      buttonclick=3;

    }
  }
}

function functionName() {
  $('#vacation').click(function() {

    let datax=document.querySelectorAll('#datex');
    let dataxi=document.querySelectorAll('#datexi');
    if(document.querySelectorAll('#colorslider1').length==0){
      for (let i = 0; i < datax.length; i++) {
        $(datax[i]).prepend("</div><div id='colorslider1'></div>");
      }
      for (let i = 0; i < dataxi.length; i++) {
        $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
      }
    }
    resetcolorslider();
    for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
      document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#bd677d';
    }
    for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
      document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#d3738b';
    }
    //moving animation
    datax[0].querySelector('#colorslider1').style.marginLeft='0px';
    let j = 0
    let interval=setInterval(function(){
      let dataxi=document.querySelectorAll('#datexi');
      if (j+1 > dataxi.length) {
        datax[1].querySelector('#colorslider1').style.marginLeft='0px';
        clearInterval(interval);
      }
      else {
        dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
      }
      j++;
    },50);

  });
  $('#walk').click(function() {

    let datax=document.querySelectorAll('#datex');
    let dataxi=document.querySelectorAll('#datexi');
    if(document.querySelectorAll('#colorslider1').length==0){
      for (let i = 0; i < datax.length; i++) {
        $(datax[i]).prepend("</div><div id='colorslider1'></div>");
      }
      for (let i = 0; i < dataxi.length; i++) {
        $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
      }
    }
    resetcolorslider();
    for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
      document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#6578c5';
    }
    for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
      document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#7186db';
    }
    //moving animation
    datax[0].querySelector('#colorslider1').style.marginLeft='0px';
    let j = 0
    let interval=setInterval(function(){
      let dataxi=document.querySelectorAll('#datexi');
      if (j+1 > dataxi.length) {
        datax[1].querySelector('#colorslider1').style.marginLeft='0px';
        clearInterval(interval);
      }
      else {
        dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
      }
      j++;
    },50);

  });
  $('#fishing').click(function() {

    let datax=document.querySelectorAll('#datex');
    let dataxi=document.querySelectorAll('#datexi');
    if(document.querySelectorAll('#colorslider1').length==0){
      for (let i = 0; i < datax.length; i++) {
        $(datax[i]).prepend("</div><div id='colorslider1'></div>");
      }
      for (let i = 0; i < dataxi.length; i++) {
        $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
      }
    }
    resetcolorslider();
    for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
      document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#805b7c';
    }
    for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
      document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#8f658a';
    }
    //moving animation
    datax[0].querySelector('#colorslider1').style.marginLeft='0px';
    let j = 0
    let interval=setInterval(function(){
      let dataxi=document.querySelectorAll('#datexi');
      if (j+1 > dataxi.length) {
        datax[1].querySelector('#colorslider1').style.marginLeft='0px';
        clearInterval(interval);
      }
      else {
        dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
      }
      j++;
    },50);

  });
  $('#weekend').click(function() {

    let datax=document.querySelectorAll('#datex');
    let dataxi=document.querySelectorAll('#datexi');
    if(document.querySelectorAll('#colorslider1').length==0){
      for (let i = 0; i < datax.length; i++) {
        $(datax[i]).prepend("</div><div id='colorslider1'></div>");
      }
      for (let i = 0; i < dataxi.length; i++) {
        $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
      }
    }
    resetcolorslider();
    for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
      document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#dead79';
    }
    for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
      document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#f7c187';
    }
    //moving animation
    datax[0].querySelector('#colorslider1').style.marginLeft='0px';
    let j = 0
    let interval=setInterval(function(){
      let dataxi=document.querySelectorAll('#datexi');
      if (j+1 > dataxi.length) {
        datax[1].querySelector('#colorslider1').style.marginLeft='0px';
        clearInterval(interval);
      }
      else {
        dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
      }
      j++;
    },50);

  });
  $('#addnew').click(function() {

    let datax=document.querySelectorAll('#datex');
    let dataxi=document.querySelectorAll('#datexi');
    if(document.querySelectorAll('#colorslider1').length==0){
      for (let i = 0; i < datax.length; i++) {
        $(datax[i]).prepend("</div><div id='colorslider1'></div>");
      }
      for (let i = 0; i < dataxi.length; i++) {
        $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
      }
    }
    resetcolorslider();
    for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
      document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#4fa093';
    }
    for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
      document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#58b2a4';
    }
    //moving animation
    datax[0].querySelector('#colorslider1').style.marginLeft='0px';
    let j = 0
    let interval=setInterval(function(){
      let dataxi=document.querySelectorAll('#datexi');
      if (j+1 > dataxi.length) {
        datax[1].querySelector('#colorslider1').style.marginLeft='0px';
        clearInterval(interval);
      }
      else {
        dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
      }
      j++;
    },50);

  });
}
function resetcolorslider()
{
  let datax=document.querySelectorAll('#datex');
  let dataxi=document.querySelectorAll('#datexi');
  datax[0].style.transition='0s';
  datax[1].style.transition='0s';
  datax[0].querySelector('#colorslider1').style.marginLeft='-40px';
  datax[1].querySelector('#colorslider1').style.marginLeft='-40px';
  if($('#colorslider1').css('background-color')!='rgba(0, 0, 0, 0)'){
    datax[0].style.backgroundColor=datax[0].querySelector('#colorslider1').style.backgroundColor;
    datax[1].style.backgroundColor=datax[0].querySelector('#colorslider1').style.backgroundColor;
    for (let i = 0; i < dataxi.length; i++) {
      dataxi[i].style.transition='0s';
      dataxi[i].querySelector('#colorslider2').style.marginLeft='-40px';
      dataxi[i].style.backgroundColor=dataxi[i].querySelector('#colorslider2').style.backgroundColor;
    }
  }
  else{
    datax[0].style.backgroundColor='#4fa093';
    datax[1].style.backgroundColor='#4fa093';
    for (let i = 0; i < dataxi.length; i++) {
      dataxi[i].style.transition='0s';
      dataxi[i].querySelector('#colorslider2').style.marginLeft='-40px';
      dataxi[i].style.backgroundColor='#58b2a4';
    }
  }
}
//function day typing
function enterdays(day,month) {

  let ndays=0;
  if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    ndays=31;
  }
  else if(month==2){
    ndays=28;
  }
  else{
    ndays=30;
  }
  let extradaystart=0;
  if(ndays==31){
    extradaystart=31-day+2;
  }
  let count=0;
  for(let i=0;i<day-1;i++){
    count++;
    $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetextextra">'+(extradaystart+i)+'</span></div>');
  }
  for(let i=1;i<=ndays;i++){
    count++;
    $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetext">'+i+'</span></div>');
  }
  let dayleft=0;
  if(count<35){
    dayleft=35-count;
  }
  else if(count<42){
    dayleft=42-count;
  }
  for(let i=1;i<=dayleft;i++){
    $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetextextra">'+i+'</span></div>');
  }
}
enterdays(3,1);

//reset button
{
  $('#reset').click(function() {
    location.reload();
  });
}
