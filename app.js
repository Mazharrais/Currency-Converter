// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const button = document.querySelector("#btn");



// const getFacts = async() => {
//   console.log("getting data...");
//   let response = await fetch(URL);
//   console.log(response);  //json formate
//   let data = await response.json();
//   factPara.innerHTML = data[1].text
// }
// button.addEventListener("click", getFacts);


const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/pkr.json";

const dropdowns = document.querySelectorAll(".dropdown select");


for(let select of dropdowns){
  
  for(currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD"){
      newOption.selected = "selected";
    } else if(select.name === "to" && currCode === "PKR"){
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  })
}


const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc

  console.log(img.src);
}