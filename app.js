
let toamount=document.querySelector("#toamount");
let convertbtn=document.querySelector("#convertbtn");



async function Converter(fromm,to){
    let amount=document.querySelector("#amount").value;


    const url = 'https://currency-converter241.p.rapidapi.com/conversion_rate?from='+fromm+'&to='+to ;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6be4a607a1msh746f1c5b38e102cp17ebb1jsn506a72078942',
            'x-rapidapi-host': 'currency-converter241.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        toamount.value = amount*result.rate;

       
    } catch (error) {
        console.error(error);
    }
}



 convertbtn.addEventListener("click", (e) => {
    
    let fromm=document.querySelector("#from").value;
    let to=document.querySelector("#to").value;
    e.preventDefault();
    Converter(fromm,to)
    
});




