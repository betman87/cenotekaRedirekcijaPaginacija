// x=document.getElementById("supermarket");
// document.addEventListener()
// setTimeout(() => {
//     console.log(x.value);
// }, 10000);
let Idea=document.getElementById("Idea");
let Maxi=document.getElementById("Maxi");
let Roda=document.getElementById("Roda");
let Tempo=document.getElementById("Tempo");
let Univerexport=document.getElementById("Univerexport");
let DIS=document.getElementById("DIS");
var j=0;var id;
function izaberi(){
  
// if(document.getElementById("Idea").checked==true) 
// var i=1;
// while(i<64){
    

//     var tajmer=setInterval(function(){
//        i++;
//        var  j=String(i);
//          console.log(j);
//     window.open("https://www.cenoteka.rs/proizvodi/akcija/idea?page="+j,"_blank");
// },5000); 
//  }
//  clearInterval(tajmer);

if(document.getElementById("Idea").checked==true) {
    id="idea";
var myVar = setInterval(myTimer, 25000);}
if(document.getElementById("Maxi").checked==true) {
    id="maxi";
var myVar = setInterval(myTimer, 25000);}    
if(document.getElementById("Roda").checked==true) {
    id="roda";
var myVar = setInterval(myTimer, 25000);}   
if(document.getElementById("Tempo").checked==true) {
    id="tempo";
var myVar = setInterval(myTimer, 25000);}    
if(document.getElementById("Univerexport").checked==true) {
    id="univerexport";
var myVar = setInterval(myTimer, 25000);}      
if(document.getElementById("DIS").checked==true) {
    id="dis";
var myVar = setInterval(myTimer, 25000);}}
function myTimer(){
    j++;
var mojprozor=window.open("https://www.cenoteka.rs/proizvodi/akcija/"+`${id}`+"?page="+String(j),"Nikola");
var zatvori= setInterval(function(){Nikola.close();},1000);
}