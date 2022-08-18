let btnUser = document.querySelectorAll('.click');
let resultShow = document.querySelector('.box__user_hasil');
let box__user__computer = document.querySelector('.box__user__computer');
let scoreUser = document.querySelector('.kamu');
let scoreComputer = document.querySelector('.komputer');
let scoreUserInc = 0;
let scoreComputerInc = 0;
let notifEl = document.querySelector('.notif');
let nyawaUser = document.querySelector('.angka');
let nyawaUserDec = 10;
let nyawaComputer =  document.querySelector('.angkaKomputer');
let nyawaComputerDec = 10;

let computerArr = [
  {icon : "fa-solid fa-hand-back-fist", id: "batu"},
  {icon: "fa-solid fa-hand", id:"kertas"},
  {icon : "fa-solid fa-hand-scissors", id: "gunting"}];

btnUser.forEach((btnClick) => {
  btnClick.addEventListener('click', (e) => {
    e.preventDefault();
    let getIdValue  = e.target.getAttribute('id');
    target = e.target.getAttribute('class');
    if(target){
      funcKamu(target,getIdValue);
    }  
  })
})

function funcKamu(data,ambilId){
  resultShow.innerHTML = `<span class="${ambilId}"><i class="${data}"></i></span>`;
  let hasil =  Math.floor(Math.random() * computerArr.length);
  computerFunc(hasil);
}
function computerFunc(data){
  let getValueCom = computerArr[data];  
  box__user__computer.innerHTML = `<span id="${getValueCom.id}"><i class="${getValueCom.icon}"></i></span>`;
  funcLogic(getValueCom)
}
function funcLogic(getValueCom) {
  let getIdUser = document.querySelector('span');
  let getIdComputer = document.getElementById(`${getValueCom.id}`);
  setTimeout(() => {
    getIdUser.style.display = "none";
    getIdComputer.style.display = "none";
  },1000);
  // logic game
  if(getIdUser.getAttribute('class') === getIdComputer.getAttribute('id')){
    funcSeri();
  }else if(getIdUser.getAttribute('class') === "batu" && getIdComputer.getAttribute('id') === 'gunting'){
    funcNotifUser();
    funcUserWin();
  }else if(getIdUser.getAttribute('class') === "kertas" && getIdComputer.getAttribute('id') === 'batu'){
    funcNotifUser();
    funcUserWin();
  }else if(getIdUser.getAttribute('class') === "gunting" && getIdComputer.getAttribute('id') === 'kertas'){
    funcNotifUser();
    funcUserWin();
  }else if(getIdUser.getAttribute('class') === "batu" && getIdComputer.getAttribute('id') === 'kertas'){
    funcNotifComputer();
    funcComputerrWin()
  }else if(getIdUser.getAttribute('class') === "kertas" && getIdComputer.getAttribute('id') === 'gunting'){
    funcNotifComputer();
    funcComputerrWin()
  }else if(getIdUser.getAttribute('class') === "gunting" && getIdComputer.getAttribute('id') === 'batu'){
    funcNotifComputer();
    funcComputerrWin()
  }else{
    funcSeri();
  }
}
function funcUserWin(){
  scoreUserInc++;
  scoreUser.innerHTML = scoreUserInc;
}
function funcComputerrWin(){
  scoreComputerInc++;
  scoreComputer.innerHTML = scoreComputerInc;
}
function funcNotifUser(){
  let kata = document.querySelector('.kata');
  notifEl.classList.add('active');
  kata.innerText = "Kamu telah menang";
  setTimeout(() => {
    notifEl.classList.remove('active');
  },1000);
  nyawaComputerDec--;
  nyawaComputer.innerText = nyawaComputerDec;
  if(nyawaComputerDec < 1){
    window.alert('Kamu telah kalah !!!');
    location.reload();
  }
}

function funcNotifComputer(){
  let kata = document.querySelector('.kata');
  notifEl.classList.add('active');
  kata.innerText = "Komputer telah menang";
  setTimeout(() => {
    notifEl.classList.remove('active');
  },1000);
  nyawaUserDec--;
  nyawaUser.innerText = nyawaUserDec;
  if(nyawaUserDec < 1){
    window.alert('Kamu telah kalah !!!');
    location.reload();
  }
}

function funcSeri(){
  let kata = document.querySelector('.kata');
  notifEl.classList.add('active');
  kata.innerText = "Kamu dan Komputer seri!!";
  setTimeout(() => {
    notifEl.classList.remove('active');
  },1000)
}