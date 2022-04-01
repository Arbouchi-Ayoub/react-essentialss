// for (let i = 1; i <= 100; i++) {
//     if(i%3===0){
//         console.log("Rock")
//     } 
//     if(i%5===0){
//         console.log("nRoll")
//     } 
//     if(i%3===0 && i%5===0) {
//         console.log("RocknRoll")
//     }
// }

// function Person(name) {
//     this.name = name;
// };

// Person.prototype.showName = function () {
//     setTimeout( () =>{
//         alert(this.name);
//     }, 200);
// };

// function registerHandlers() {
//   var as = document.getElementsByTagName('a');
//   for (let i = 0; i < as.length; i++) {
//     as[i].onclick = function(e) {
//       e.preventDefault()
//         alert(i);

//     }
//   }
// }

// registerHandlers()

// function f(){
//     this.c = 0
//     this.next = function(){return ++this.c}
// }
// a=2

// c=4
// console.log(a)

// const swapContentWithFirstElement = (el)=>{
//     let FIRST_LI = document.querySelector('ul li:first-child');
//     let temp = FIRST_LI.textContent
//     FIRST_LI.textContent = el.textContent
//     el.textContent = temp 
// }

// function setup() {
//     let UL = document.querySelector('ul');
//     let lis = UL.children

//     for (let i = 0; i < lis.length; i++) {
//         lis[i].addEventListener('click',  (e)=> {
//             // Write your code here
//             swapContentWithFirstElement(e.target, lis[0].textContent)
//         });
//     }
// }


// setup()
