const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df3edbcb60msh418d2b74eb72761p141893jsne7b2b7414981',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const container = document.getElementById("temperatura")

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=francia', options)
	.then(response => response.json())
	.then(response => {
        const p = document.createElement("p")
        p.textContent = `Francia ${response.current.temp_c} °C`
        container.appendChild(p);
    })
	.catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=españa', options)
	.then(response => response.json())
	.then(response => {
        const p = document.createElement("p")
        p.textContent = `España ${response.current.temp_c} °C`
        container.appendChild(p);
    })
	.catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=italia', options)
	.then(response => response.json())
	.then(response => {
        const p = document.createElement("p")
        p.textContent = `Italia ${response.current.temp_c} °C`
        container.appendChild(p);
    })
	.catch(err => console.error(err));

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=amsterdam', options)
	.then(response => response.json())
	.then(response => {
        const p = document.createElement("p")
        p.textContent = `Amsterdam ${response.current.temp_c} °C`
        container.appendChild(p);
    })
	.catch(err => console.error(err));