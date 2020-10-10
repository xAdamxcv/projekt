import React, { createElement } from 'react';
import { render } from 'react-dom';

let counter = 0;

let dodaj =()=>{
let inputName = document.querySelector(".inputName").value
let inputCode = document.querySelector(".inputCode").value
let inputNut = document.querySelector(".inputNut").value
let inputCapacity = document.querySelector(".inputCapacity").value
let inputCarton = document.querySelector(".inputCarton").value
let inputStatistics =document.querySelector(".inputStatistics").value
let inputPosition = document.querySelector(".inputPosition").value
let inputProcess = document.querySelector(".inputProcess").value
let newEl = document.createElement(`div`);
let newEl2 = document.createElement(`div`)
newEl.innerHTML = `${++counter} Nowy produkt = NAZWA:${inputName} KOD:${inputCode} NAKRĘTKA:${inputNut} POJEMNOŚĆ:${inputCapacity} KARTON:${inputCarton}  `;
newEl2.innerHTML = `${+counter} produkcja:${inputStatistics}  stanowisko:${inputPosition} proces:${inputProcess}`
let div = document.querySelector(".list");
div.appendChild(newEl);
div.appendChild(newEl2)
newEl.className = `kod${inputCode}`
newEl2.className = `dodatek${inputCode}`
newEl.id = `list`
let arr = [newEl]
newEl = [inputCode,inputName]

console.log(arr)
}


let Tabela = (
    <section className="tabela" >
      <div className="tableBoxOne">
      <p>Podaj nazwe</p>
      <input  className="inputName" type="text" ></input>
      <p>Podaj kod</p>
      <input  className="inputCode" type="text" ></input>
      <p>Podaj rodzaj nakętki</p>
      <input  className="inputNut" type="text" ></input>
      <p>Podaj pojemność</p>
      <input  className="inputCapacity" type="text" ></input>
      <p>Podaj rodzaj kartonu</p>
      <input  className="inputCarton" type="text" ></input>
       </div>
       <div className="tableBoxTwo">
      <p>Średnia Prodykcja</p>
      <input className="inputStatistics" type="text" ></input>
      <p>Stanowisko</p>
      <input className="inputPosition" type="text"></input>
      <p>Proces Technologiczny</p>
      <input className="inputProcess" type="text"></input>
      </div>
      <button className="add" onClick={dodaj}>Dodaj Produkt </button>
    
   
      <div className="list">
      </div>
    </section>
);

let Szukaj =()=>{
    
    let search = document.querySelector(".search").value
    let searchList = document.querySelector(".searchList")
    let newElSearch = document.createElement(`div`)
    let pokaz = document.querySelector(`.kod${search}`)
    
    let text = pokaz.textContent
    searchList.appendChild(newElSearch)
    newElSearch.innerHTML = `${text}`
}
let Szukanie =(
    <section>
        <p>Wyszukaj podstawowe dane</p>
        <input className="search" type="text" ></input>
        <button type="button" onClick={Szukaj}>Szukaj</button>
        <div className="searchList">
        </div>
      </section>
);

let szukajdodatki =()=>{
    let inputStatistics = document.querySelector(".inputStatistics").value
    let inputPosition = document.querySelector(".inputPosition").value
    let inputProcess = document.querySelector(".inputProcess").value
    let searchTwo = document.querySelector(`.searchTwo`).value
    let newElSearchTwo = document.createElement(`div`)
    let searchListTwo =document.querySelector(".searchListTwo")
    let xx = document.querySelector(`.dodatek${searchTwo}`)
    let textTwo = xx.textContent
  newElSearchTwo.innerHTML = `${textTwo}`
  searchListTwo.appendChild(newElSearchTwo)
  
  
}


let SzukanieDodatkow = (
    <section>
        <p>Wyszukaj dodatkowe dane</p>
        <input className="searchTwo"></input>
        <button className="buttonSearchTwo" onClick={szukajdodatki} >Szukaj statystyki</button>
        <div className="searchListTwo">
        </div>
  </section>
)

function komponent() {
    
    return <h1>Hello, World!</h1>;
      
}


class Produkts {
    constructor (name){
        name = document.querySelector(".inputName").value
    
    }
    render(){
        return <h1>name</h1>
    }
}
let dodatek = 

class sol extends Produkts {

    //let nazwa = document.querySelector(".inputName")
    
}

export {Tabela,dodaj,Szukaj,szukajdodatki,Szukanie,SzukanieDodatkow, komponent};
