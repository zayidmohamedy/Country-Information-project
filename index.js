
let search = document.querySelector("#search")
search.addEventListener("click" , ()=>{
    let input = document.querySelector("#input").value;
    fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
   
        //   console.log(data);
 
      
   let countryDiv =document.querySelector(".country")

    let image =document.createElement("img")
    image.setAttribute("src", data[0].flags.png)
    
    let countryName =document.createElement("h2")
    countryName.classList.add("country-name")

    let info =document.createElement("div")
    info.classList.add("info")

    countryDiv.appendChild(info)
    countryDiv.appendChild(countryName)
    countryDiv.appendChild(image)

    let capital =document.createElement("h4")
    capital.classList.add("h4")
    info.appendChild(capital)
    capital.innerHTML =" Capital :"
    let capital_value =document.createElement("span")
    capital_value.classList.add("xogta")
    capital.appendChild(capital_value)

    let continent =document.createElement("h4")
    continent.classList.add("h4")
    info.appendChild(continent)
    continent.innerHTML =" Continent :"
    let continent_value =document.createElement("span")
     continent_value.classList.add("xogta")
    continent.appendChild(continent_value)

    let region =document.createElement("h4")
    region.classList.add("h4")
   info.appendChild(region)
   region.innerHTML =" Subregion :"
   let region_value =document.createElement("span")
   region_value.classList.add("xogta")
   region.appendChild(region_value)

    let pop =document.createElement("h4")
     pop.classList.add("h4")
    info.appendChild(pop)
    pop.innerHTML =" Population :"
    let pop_value =document.createElement("span")
    pop_value.classList.add("xogta")
    pop.appendChild(pop_value)

    let Currency =document.createElement("h4")
    Currency.classList.add("h4")
    info.appendChild(Currency)
    Currency.innerHTML =" Currency : "
    let Currency_value =document.createElement("span")
    Currency_value.classList.add("xogta")
    Currency.appendChild(Currency_value)



       countryName.innerHTML= data[0].name.common
      capital_value.innerHTML= data[0].capital
      continent_value.innerHTML = data[0].region
      region_value.innerHTML = data[0].subregion
      pop_value.innerHTML =  data[0].population
      Currency_value.innerHTML = data[0].currencies[Object.keys(data[0].currencies)].name
 
    })
    .catch(()=>{
        console.log("Error!")
    })

} , {once : false})


// refresh button 

let countrydiv =document.querySelector(".country")
 
let refresh = document.createElement("button");
refresh.classList.add("refresh")
countrydiv.appendChild(refresh)

let icon = document.createElement("i")
icon.classList.add("fa-solid")
icon.classList.add("fa-arrows-rotate")
refresh.appendChild(icon)
refresh.addEventListener("click", ()=>{
console.log(location.reload())
})