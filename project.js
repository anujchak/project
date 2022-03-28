var a=[]
var ah=[]
var af=[]
var s=""
var e=0
var h=0
var hide1
var show1
var f3 =0
a[0]="John ate an apple before afternoon"
a[1]="before afternoon John ate an apple"
a[2]="John before afternoon ate an apple"
a[3]="some students like to study in the night"
a[4]="at night some students like to study"
a[5]="John and Mary went to church"
a[6]="Mary and John went to church"
a[7]="John went to church after eating"
a[8]="after eating John went to church"
a[9]="John after eating went to church"
a[10]="did he go to market"
a[11]="he did go to market"
a[12]="the woman who called my sister sells cosmetics"
a[13]="the woman who sells cosmetics called my sister"
a[14]="my sister who sells cosmetics called the woman"
a[15]="my sister who called the woman sells cosmetics"
a[16]="John goes to the library and studies"
a[17]="John studies and goes to the library"
a[18]="John ate an apple so did she"
a[19]="she ate an apple so did John"
a[20]="the teacher returned the book after she noticed the error"
a[21]="the teacher noticed the error after she returned the book"
a[22]="after the teacher returned the book she noticed the error"
a[23]="after the teacher noticed the error she returned the book"
a[24]="she returned the book after the teacher noticed the error"
a[25]="she noticed the error after the teacher returned the book"
a[26]="after she returned the book the teacher noticed the error"
a[27]="after she noticed the error the teacher returned the book"
a[28]="I told her that I bought a book yesterday"
a[29]="I told her yesterday that I bought a book"
a[30]="yesterday I told her that I bought a book"
a[31]="I bought a book that I told her yesterday"
a[32]="I bought a book yesterday that I told her"
a[33]="yesterday I bought a book that I told her"

ah[0]="राम और श्याम बाजार गयें"
ah[1]="राम और श्याम गयें बाजार"
ah[2]="बाजार गयें राम और श्याम"
ah[3]="गयें बाजार राम और श्याम"
ah[4]="राम सोया और श्याम भी"
ah[5]="श्याम सोया और राम भी"
ah[6]="सोया श्याम और राम भी"
ah[7]="सोया राम और श्याम भी"
ah[8]="मैंने उसे बताया कि राम सो रहा है"
ah[9]="मैंने उसे बताया कि सो रहा है राम"
ah[10]="उसे मैंने बताया कि राम सो रहा है"
ah[11]="उसे मैंने बताया कि सो रहा है राम"
ah[12]="मैंने बताया उसे कि राम सो रहा है"
ah[13]="मैंने बताया उसे कि सो रहा है राम"
ah[14]="उसे बताया मैंने कि राम सो रहा है"
ah[15]="उसे बताया मैंने कि सो रहा है राम"
ah[16]="बताया मैंने उसे कि राम सो रहा है"
ah[17]="बताया मैंने उसे कि सो रहा है राम"
ah[18]="बताया उसे मैंने कि राम सो रहा है"
ah[19]="बताया उसे मैंने कि सो रहा है राम"
ah[20]="राम खाकर सोया"
ah[21]="खाकर राम सोया"
ah[22]="राम सोया खाकर"
ah[23]="खाकर सोया राम"
ah[24]="सोया राम खाकर"
ah[25]="सोया खाकर राम"
ah[26]="बिल्लियों को मारकर कुत्ता सो गया"
ah[27]="मारकर बिल्लियों को कुत्ता सो गया"	
ah[28]="बिल्लियों को मारकर सो गया कुत्ता"
ah[29]="मारकर बिल्लियों को सो गया कुत्ता"
ah[30]="कुत्ता सो गया बिल्लियों को मारकर"
ah[31]="कुत्ता सो गया मारकर बिल्लियों को"
ah[32]="सो गया कुत्ता बिल्लियों को मारकर"
ah[33]="सो गया कुत्ता मारकर बिल्लियों को"
ah[34]="एक लाल किताब वहाँ है"
ah[35]="एक लाल किताब है वहाँ"
ah[36]="वहाँ है एक लाल किताब"
ah[37]="है वहाँ एक लाल किताब"
ah[38]="एक बड़ी सी किताब वहाँ है"
ah[39]="एक बड़ी सी किताब है वहाँ"
ah[40]="बड़ी सी एक किताब वहाँ है"
ah[41]="बड़ी सी एक किताब है वहाँ"
ah[42]="वहाँ है एक बड़ी सी किताब"
ah[43]="वहाँ है बड़ी सी एक किताब"
ah[44]="है वहाँ एक बड़ी सी किताब"
ah[45]="है वहाँ बड़ी सी एक किताब"
$(document).ready(function(){
  $("#11").click(function(){
    $("#11").hide(500);
    $("#103").show();
    $("#line").show();
  });
  $("#12").click(function(){
    $("#12").hide(500);
     $("#103").show();
     $("#line").show();
  });
$("#13").click(function(){
    $("#13").hide(500);
    $("#103").show();
     $("#line").show();
  });
$("#14").click(function(){
    $("#14").hide(500);
    $("#103").show();
     $("#line").show();
  });
$("#15").click(function(){
    $("#15").hide(500);
    $("#103").show();
    $("#line").show();
  });
$("#16").click(function(){
    $("#16").hide(500);
    $("#103").show();
     $("#line").show();
  });
$("#17").click(function(){
    $("#17").hide(500);
    $("#103").show();
     $("#line").show();
  });
$("#18").click(function(){
    $("#18").hide(500);
    $("#103").show();
    $("#line").show();
  });
$("#19").click(function(){
    $("#19").hide(500);
    $("#103").show();
    $("#line").show();
  });
$("#20").click(function(){
    $("#20").hide(500);
    $("#103").show();
    $("#line").show();
  });
$("#103").click(function(){
    $("#103").hide(700);
     $("#line").hide(700);
     $("#ans").hide(700);
     $("#correct").hide(700);
     $("#right").hide(700);
     $("#wrong").hide(700);
  });
$(function btnshow(){
    $("#b1").show();
  });
});
function emni3() {
   if(show1==1)
{
   document.getElementById("300").innerHTML ="Hide answers" ;
   hide1=1
   show1=0
if(e==1)
{
    if(f3==0 || f3==1 || f3==2){
       var tem=0
       for(var i=400;i<403;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
    if(f3==3 || f3==4){
       var tem=3
       for(var i=400;i<402;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
     if(f3==5 || f3==6){
       var tem=5
       for(var i=400;i<402;i++)
    { var t = i
    document.getElementById(t).innerHTML = a[tem] ;
          tem=tem+1
       
    } 
    }
    if(f3==7 || f3==8 || f3==9){
       var tem=7
       for(var i=400;i<403;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
if(f3==10 || f3==11){
       var tem=10
       for(var i=400;i<402;i++)
    { var t =i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
if(f3==12 || f3==15 || f3==13 || f3==14 ){
       var tem=12
       for(var i=400;i<403;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
if(f3==16 || f3==17){
       var tem=16
       for(var i=400;i<402;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
if(f3==18 || f3==19){
       var tem=18
       for(var i=400;i<402;i++)
    { var t =i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
if(f3==20 || f3==21 || f3==22|| f3==23 || f3==24 || f3==25 || f3==26 || f3==27){
       var tem=20
       for(var i=400;i<408;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }
if(f3==28 || f3==29 || f3==30 || f3==31 || f3==32|| f3==33){
       var tem=28
       for(var i=400;i<406;i++)
    { var t = i
    document.getElementById(t).innerHTML =a[tem] ;
          tem=tem+1
    } 
    }

}


if(h==1)
{
    if(f3==0 || f3==1 || f3==2 || f3==3){
       var tem=0
       for(var i=400;i<404;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
 if(f3==4 || f3==5 || f3==6 || f3==7){
       var tem=4
       for(var i=400;i<404;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
 if(f3==8 || f3==9 ){
       var tem=8
       for(var i=400;i<402;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
 if(f3==10 || f3==11 || f3==12 || f3==13 || f3==14 || f3==15 || f3==16 || f3==17 || f3==18 || f3==19){
       var tem=10
       for(var i=400;i<410;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
 if(f3==20 || f3==21 || f3==22 || f3==23 || f3==24 || f3==25){
       var tem=20
       for(var i=400;i<406;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
 if(f3==26 || f3==27 || f3==28 || f3==29 || f3==30 || f3==31 || f3==32 || f3==33){
       var tem=26
       for(var i=400;i<408;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
 if(f3==34 || f3==35 || f3==36 || f3==37){
       var tem=34
       for(var i=400;i<404;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }
if(f3==38 || f3==39 || f3==40 || f3==41 || f3==42 || f3==43 || f3==44 || f3==45){
       var tem=38
       for(var i=400;i<408;i++)
    { var t = i
    document.getElementById(t).innerHTML =ah[tem] ;
          tem=tem+1
    } 
    }   
}
}

else {
   if(hide1==1)
{
   document.getElementById("300").innerHTML ="Show answers" ;
   hide1=0
   show1=1
   for(var i=400;i<416;i++)
   {
          document.getElementById(i).innerHTML ="" ;
   }
}
}
}
function re() {
  s=""
document.getElementById("result").innerHTML =s
var l2 = af.length
 for(var i=11;i<l2+11;i++)
    { var t = "#"+i
    $(t).show();
    } 
    for(var i=400;i<416;i++)
   {
          document.getElementById(i).innerHTML ="" ;
   }
}
function shuffleArray ( array ) {
    var counter = array.length, temp, index;
    // While there are elements in the array
    while ( counter > 0 ) {
        // Pick a random index
        index = Math.floor( Math.random() * counter );

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[ counter ];
        array[ counter ] = array[ index ];
        array[ index ] = temp;
    }
    return array;
}
function emni() {

e=1
h=0
document.getElementById("demo").innerHTML ="Form a sentence(Declarative or Interrogative or any other type)from the given words.<br>(select the buttons in proper order)"
var c1 = Math.floor((Math.random() *33) + 1);
f3= c1
var str = a[c1]
var a1= str.split(" ")
var l1=a1.length
a1= shuffleArray (a1)
af=a1
s=""
document.getElementById("result").innerHTML =s
for(var i=11;i<21;i++)
    { var t = "#"+i
    $(t).hide();
    }
for(var i=11;i<l1+11;i++)
    { var t = "#"+i
    $(t).show(500);
    }
$("#103").hide();
 $("#line").hide();
$("#ans").hide();
$("#correct").hide();
     $("#right").hide();
     $("#wrong").hide();
for(var i=0;i<l1;i++)
{
  if(i<l1){
  document.getElementById(i).innerHTML =a1[i] ;
  }
  else {
       
  document.getElementById(i).innerHTML = "XXXXXX";
  }
}

   for(var i=400;i<416;i++)
   {
          document.getElementById(i).innerHTML ="" ;
   }
}
function emni1() {
e=0
h=1
document.getElementById("demo").innerHTML ="Form a sentence(Declarative or Interrogative or any other type)from the given words.<br>(select the buttons in proper order)"
var c1 = Math.floor((Math.random() *45) + 1);
f3=c1
var str = ah[c1]
var a1= str.split(" ")
var l1=a1.length
a1= shuffleArray (a1)
af=a1
s=""
document.getElementById("result").innerHTML =s
for(var i=11;i<21;i++)
    { var t = "#"+i
    $(t).hide();
    }
for(var i=11;i<l1+11;i++)
    { var t = "#"+i
    $(t).show(500);
    }
$("#103").hide();
 $("#line").hide();
$("#ans").hide();
$("#correct").hide();
     $("#right").hide();
     $("#wrong").hide();
for(var i=0;i<9;i++)
{ if(i<l1){
  document.getElementById(i).innerHTML =a1[i] ;
  }
  else {
       
  document.getElementById(i).innerHTML = "XXXXXX";
  }
}

   for(var i=400;i<416;i++)
   {
          document.getElementById(i).innerHTML ="" ;
   }
}
function con(x){
   var l
   var t = af[x] 
   s=s+t
   document.getElementById("result").innerHTML =s
   l=s.split(" ")
  var l1 = l.length
  var l2 = af.length
   s=s+" "
  if(l1==l2)
{
   $("#ans").show();
}

   for(var i=400;i<416;i++)
   {
          document.getElementById(i).innerHTML ="" ;
   } 
}


function cal(){
var x = s.trim()
var f=0,i;
if(e==1){
for(i=0;i<=33;i++)
{
  if (x==a[i])
  {
    f=1
    break
  }
}
if(f==1)
{ 
     $("#right").show(700);
}
else{
   $("#wrong").show(700);
  $("#correct").show(700);
  document.getElementById("300").innerHTML ="show correct answers" ;
   show1=1
   hide1=0
}
}
if(h==1){
for(i=0;i<=45;i++)
{
  if (x==ah[i])
  {
    f=1
    break
  }
}
if(f==1)
{ 
    
     $("#right").show(700);
}
else{
  $("#wrong").show(700);
  $("#correct").show(700);

  document.getElementById("300").innerHTML ="show correct answers" ;
  show1=1
   hide1=0
}
} 
 for(var i=400;i<416;i++)
   {
          document.getElementById(i).innerHTML ="" ;
   }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
