var preffered=document.getElementById("Preffered");
var preffered1=document.getElementById("Preffered1");
var question=document.getElementById("Question");
var question1=document.getElementById("Question1");
var button=document.getElementById("Button");
var Main=document.getElementById("Main");
var Dessert=document.getElementById("Dessert");
var CS=document.getElementById("CSPic");
var C=document.getElementById("CPic");
var FS=document.getElementById("FSPic");
var F=document.getElementById("FPic")
var ES=document.getElementById("ESPic");
var E=document.getElementById("EPic");
var VS=document.getElementById("VSPic");
var V=document.getElementById("VPic");
var D=document.getElementById("DPic");
var D1=document.getElementById("D1Pic");
var Num=document.getElementById("Card-No");
var Pin=document.getElementById("Pin");
var name=document.getElementById("Name");
var button1=document.getElementById("ToSub");
CS.style.visibility=false
C.style.visibility=false
FS.style.visibility=false
F.style.visibility=false
ES.style.visibility=false
E.style.visibility=false
VS.style.visibility=false
V.style.visibility=false
D.style.visibility=false
D1.style.visibility=false
button.addEventListener("click",MenuDisplayer)

function MenuDisplayer(){
    if(preffered=="Chicken"){
 if(preffered1=="mayo"){
    if(question=="Yes")
    {
     Main.innerHTML="Special Mayo Glazed Cumba Cumba chicken with wine";
     CS.style.visibility=true;
    }
    else{
      Main.innerHTML="Special Mayo glazed Sala Sala chicken with herbal juice";
      C.style.visibility=true;
    }
 }
 if(preffered1=="tomato")
 {
    if(question=="Yes")
    {
    Main.innerHTML="KFC Chicken with super sauce in Beer";
    CS.style.visibility=true;
    }
    else{
     Main.innerHTML="Ala carta chicken with tomato juice";
     C.style.visibility=true;
    }
 }
 if(preffered1=="vinegar")
 {
    if(question=="Yes")
    {
     Main.innerHTML="Vinegar diopped chicken with wine";
     CS.style.visibility=true;
    }
    else{
    Main.innerHTML="vinegar dipped chicken with vegan sauce";
    C.style.visibility=true;
    }
 }
    }
    if(preffered=="Fish"){
      if(preffered1=="mayo"){
         if(question=="Yes")
         {
          Main.innerHTML="Special Mayo Glazed Cumba Cumba fish with wine";
          FS.style.visibility=true;
         }
         else{
           Main.innerHTML="Special Mayo glazed Sala Sala fish with herbal juice";
           F.style.visibility=true;
         }
      }
      if(preffered1=="tomato")
      {
         if(question=="Yes")
         {
         Main.innerHTML="KFC Fish with super sauce in Beer";
         FS.style.visibility=true;
         }
         else{
          Main.innerHTML="Ala carta Fish with tomato juice"
         F.style.visibility=true;
         }
      }
      if(preffered1=="vinegar")
      {
         if(question=="Yes")
         {
          Main.innerHTML="Vinegar diopped Fish with wine"
          FS.style.visibility=true;
         }
         else{
         Main.innerHTML="vinegar dipped Fish with vegan sauce"
         F.style.visibility=true;   
      }
    }
    if(preffered=="Egg")
    { if(preffered1=="mayo"){
      if(question=="Yes")
      {
       Main.innerHTML="Special Mayo Glazed Cumba Cumba egg curry with wine";
       ES.style.visibility=true;
      }
      else{
        Main.innerHTML="Special Mayo glazed Sala Sala egg curry with herbal juice";
      E.style.visibility=true;
      }
   }
   if(preffered1=="tomato")
   {
      if(question=="Yes")
      {
      Main.innerHTML="KFC Egg with super sauce in Beer";
      ES.style.visibility=true;
      }
      else{
       Main.innerHTML="Ala carta Egg with tomato juice";
       E.style.visibility=true;
      }
   }
   if(preffered1=="vinegar")
   {
      if(question=="Yes")
      {
       Main.innerHTML="Vinegar diopped Egg with wine";
       ES.style.visibility=true;
      }
      else{
      Main.innerHTML="vinegar dipped Egg with vegan sauce"
      E.style.visibility=true;   
   }

    }
   }
    if(preffered=="Veg")
    {if(preffered1=="mayo"){
      if(question=="Yes")
      {
       Main.innerHTML="Special Mayo Glazed Cumba Cumba  Veg with wine";
       VS.style.visibility=true;
      }   
      else{
        Main.innerHTML="Special Mayo glazed Sala Sala Veg";
        V.style.visibility=true;
   }
   if(preffered1=="tomato")
   {
      if(question=="Yes")
      {
      Main.innerHTML="Veg with super sauce in Beer"
      VS.style.visibility=true;
   }
      else{
       Main.innerHTML="Ala carta Veg with tomato juice"
       V.style.visibility=true
      }
   }
   if(preffered1=="vinegar")
   {
      if(question=="Yes")
      {
       Main.innerHTML="Vinegar diopped  Veg with wine";
       VS.style.visibility=true;
      }
      else{
      Main.innerHTML="vinegar dipped veg with vegan sauce"
       V.style.visibility=true;   
   }

    }
   }
}
    else{
      Main.innerHTML="Please enter a valid answer";
    }
   if(Question1=="Yes")
   {
      Dessert.innerHTML="Super sauce salamba";
      D.style.visibility=true;
   }
   if(Question1=="No")
   {
      Dessert.innerHTML="Simple Salamba"
      D1.style.visibility=true;
   }
}
}
button1.addEventListener("Click", SubmitPayment)
function SubmitPayment(){
   Num.json();
   Pin.json();
   name.json();
}