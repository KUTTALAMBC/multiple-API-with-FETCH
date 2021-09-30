let temp=fetch('https://restcountries.com/v2/all')
.then((data)=>{
    return data.json();
}).then((v1)=>{
    let cc=v1[1].name;
    console.log(cc);
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=10ad85986cc75049f8d8a68a31cdc1b6`)
}).then((v2)=>{
    return v2.json();
}).then((v3)=>{
    console.log(v3);
});
console.log(temp);