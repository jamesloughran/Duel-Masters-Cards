document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest(){
    const cardNumber = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:8000/api/${cards}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.cards
    }catch(error){
        console.log(error);
    }
}