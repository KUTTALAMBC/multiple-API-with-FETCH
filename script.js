let cc;

let resturi='https://restcountries.com/v3/all';
async function foo(){
    let restcont=await fetch('https://restcountries.com/v3/all');
    let restcontdata=await restcont.json();
    cc=restcontdata[1].name;
    let openweath=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=10ad85986cc75049f8d8a68a31cdc1b6`)
    let openweathdata=await openweath.json();
    console.log(`${cc} : ${openweathdata.main.temp}`);
}
foo();
