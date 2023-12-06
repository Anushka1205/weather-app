//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

function getData(){

  let city_name="Jaipur";
  let api_key="c7efa0c5571ba22f00cabe83cde3278a";
  let api=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;

  fetch(api).then((res)=>res.json()).then((result)=>{
    let data=result;
    console.log(result)
    let countryName=data.sys.country;
    console.log(countryName);
    
    let temp=data.main.temp;
    let mintemp=data.main.temp_min;
    let maxtemp=data.main.temp_max;
    let description=data.weather[0].description;

    let curdate=new Date();
    curdate=`${curdate}`.slice(0,15);

    let input=document.createElement("input");
    input.setAttribute("id","search_box");
    input.setAttribute("type","text");
    input.setAttribute("placeholder",city_name);
    
    

    let heading= document.createElement("h3");
    heading.innerText=`${city_name},${countryName}`;
    heading.setAttribute("class","city");

    let date=document.createElement("p");
    date.innerText=curdate;
    date.setAttribute("class","date");

    let temTag=document.createElement("h1");
    temTag.innerText=temp;
    temTag.setAttribute("class","temp");

    let desTag=document.createElement("h1");
    desTag.innerText=description;
    desTag.setAttribute("class","weather");

    let minmaxtemp=document.createElement("p");
    minmaxtemp.innerText=`${mintemp}/${maxtemp}`;
    minmaxtemp.setAttribute("class","hi-low");

    document.body.append(input,heading,date,temTag,desTag,minmaxtemp);

  }).catch((err)=>{
    console.log(err.message);
  })

 

}

getData();