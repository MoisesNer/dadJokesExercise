const button = document.querySelector('#get_joke');
const container = document.querySelector('ul');



const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });

    console.log(res.data);
    const list = document.createElement('li');
    
    list.innerHTML = res.data.joke;
    container.appendChild(list);
    
    list.value = "";
};


button.addEventListener('click', getDataJokes);
// getDataJokes();

