const btn1 = document.getElementById("AC");
const btn2 = document.getElementById("plus_minus");
const btn3 = document.getElementById("percent");
const btn4 = document.getElementById("split");
const btn5 = document.getElementById("7");
const btn6 = document.getElementById("8");
const btn7 = document.getElementById("9");
const btn8 = document.getElementById("X");
const btn9 = document.getElementById("4");
const btn10 = document.getElementById("5");
const btn11 = document.getElementById("6");
const btn12 = document.getElementById("minus");
const btn13 = document.getElementById("1");
const btn14 = document.getElementById("2");
const btn15 = document.getElementById("3");
const btn16 = document.getElementById("plus");
const btn17 = document.getElementById("00");
const btn18 = document.getElementById("0");
const btn19 = document.getElementById(",");
const btn20 = document.getElementById("equel");
const screen = document.getElementById("screen");

var value1_str = "";
var symbol_str = "";
var result_str = "";
var value1_numb = 0;
var result_numb = 0;

function zero () {
    if (screen.textContent.length >15) {
        screen.innerHTML = "0";
    }
}
zero();

btn1.addEventListener('click', function click (){
    screen.innerHTML = "0";
    value1_str = "";
    symbol_str = "";
    result_str = "";
    value1_numb = 0;
    result_numb = 0;
    
});
btn2.addEventListener('click', function click (){
        value1_str = screen.textContent;
        if (value1_str.includes('-')) {
            value1_str = screen.textContent;
            screen.textContent = value1_str.substring(1);;
            value1_str = '';
        }else{
            value1_str = screen.textContent;
            screen.textContent = "-" + value1_str;
            value1_str = "";
            symbol_str = "";
            result_str = "";
            value1_numb = 0;
            result_numb = 0;
        }
});
btn3.addEventListener('click', function click (){
    if (value1_str.length == 0){
        value1_str += screen.textContent;
        value1_numb = parseFloat(value1_str)
        result_numb = value1_numb/100;
        result_str = String(result_numb)
        screen.textContent = result_str;
        
    }else{
        value1_numb = parseFloat(value1_str)
        result_numb = value1_numb/100;
        result_str = String(result_numb)
        screen.textContent = result_str;
        value1_str = "";
        symbol_str = "";
        result_str = "";
        value1_numb = 0;
        result_numb = 0;
    }


});
btn4.addEventListener('click', function click (){
    if (value1_str.length == 0){
        value1_str += screen.textContent;
        screen.textContent = "";
        symbol_str = "/" ;
    }else{
        result_str = (value1_str + symbol_str + screen.textContent);
        result_numb = eval(result_str)
        screen.textContent = String(result_numb);
        value1_str = "";
        symbol_str = "";
        result_str = "";
        value1_numb = 0;
        result_numb = 0;
    }
    
});
btn5.addEventListener('click', function click (){
    console.log(screen.textContent[0])
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "7";
    }else if (screen.textContent.charAt(0) == 0){
        screen.innerHTML = "";
        screen.innerHTML += "7";
    }else {
        screen.innerHTML += "7";
    }
   
});
btn6.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "8";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "8";
    }else {
        screen.innerHTML += "8";
    }
});
btn7.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "9";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "9";
    }else {
        screen.innerHTML += "9";
    }
});
btn8.addEventListener('click', function click (){
    if (value1_str.length == 0){
        value1_str += screen.textContent;
        screen.textContent = "";
        symbol_str = "*" ;
    }else{
        result_str = (value1_str + symbol_str + screen.textContent);
        result_numb = eval(result_str)
        screen.textContent = String(result_numb);
        value1_str = "";
        symbol_str = "";
        result_str = "";
        value1_numb = 0;
        result_numb = 0;
    }
});
btn9.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "4";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "4";
    }else {
        screen.innerHTML += "4";
    }
});
btn10.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "5";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "5";
    }else {
        screen.innerHTML += "5";
    }
});
btn11.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "6";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += '6';
    }else{ 
        screen.innerHTML += "6";
    }
    
});
btn12.addEventListener('click', function click (){
    if (value1_str.length == 0){
        value1_str += screen.textContent;
        screen.textContent = "";
        symbol_str = "-" ;
    }else{
        result_str = (value1_str + symbol_str + screen.textContent);
        result_numb = eval(result_str)
        screen.textContent = String(result_numb);
        value1_str = "";
        symbol_str = "";
        result_str = "";
        value1_numb = 0;
        result_numb = 0;
    }
});
btn13.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "1";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "1";
    }else {
        screen.innerHTML += "1";
    }
});
btn14.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "2";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "2";
    }else {
        screen.innerHTML += "2";
    }
});
btn15.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "3";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "3";
    }else {
        screen.innerHTML += "3";
    }
});
btn16.addEventListener('click', function click (){
    if (value1_str.length == 0){
        value1_str += screen.textContent;
        screen.textContent = "";
        symbol_str = "+" ;
    }else{
        result_str = (value1_str + symbol_str + screen.textContent);
        result_numb = eval(result_str)
        screen.textContent = String(result_numb);
        value1_str = "";
        symbol_str = "";
        result_str = "";
        value1_numb = 0;
        result_numb = 0;
    }
});
btn17.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "00";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "0";
    }else {
        screen.innerHTML += "00";
    }
});
btn18.addEventListener('click', function click (){
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "0";
    }else if(screen.textContent.charAt(0) == 0) {
        screen.innerHTML = "";
        screen.innerHTML += "0";
    }else {
        screen.innerHTML += "0";
    }
});
btn19.addEventListener('click', function click (){
    let dot = '.'
    if (screen.textContent.length >= 15) {
        screen.innerHTML += "";
    }
    else if (screen.textContent.charAt(1) == (',')){
        screen.innerHTML += "";
    }else if (screen.textContent.charAt(0) == 0){
        screen.innerHTML = "";
        screen.innerHTML += "0,";
    }else if (screen.textContent.includes(dot) == true) {
        screen.innerHTML += "";
    }else {
        screen.innerHTML += ".";
    }
});
btn20.addEventListener('click', function click (){
    if (value1_str.length == 0){
        value1_str += screen.textContent;
        screen.textContent = value1_str;
        
    }else{
        result_str = (value1_str + symbol_str + screen.textContent);
        result_numb = eval(result_str)
        screen.textContent = String(result_numb);
        value1_str = "";
        symbol_str = "";
        result_str = "";
        value1_numb = 0;
        result_numb = 0;
    }
});


