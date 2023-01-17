let data;

function loadShoes() {
    const container = document.getElementById('shoe-container');
    const sortSelect = document.getElementById('sort-by');
    const selectedValue = sortSelect.value;
    let sortedData = data.slice();
    if (selectedValue === 'name') {
        sortedData.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (selectedValue === 'date') {
        sortedData.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
        });
    } else if (selectedValue === 'price') {
        sortedData.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
    // Clear the container before adding the sorted elements
    container.innerHTML = '';
    // Loop through the sorted data and append the elements to the container
    for (let i = 0; i < sortedData.length; i++) {
        const shoe = sortedData[i];
        const panel = document.createElement('div');
        panel.classList.add('shoe-container');

        const image = document.createElement('img');
        image.src = shoe.image;
        panel.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = shoe.name;
        panel.appendChild(name);

        const date = document.createElement('p');
        date.textContent = shoe.date;
        panel.appendChild(date);

        const price = document.createElement('p');
        price.textContent = shoe.price;
        panel.appendChild(price);
        container.appendChild(panel);
    }
    sortSelect.addEventListener('change', loadShoes);
}

fetch('data.json')
    .then(response => response.json())
    .then(loadedData => {
        data = loadedData;
        const container = document.getElementById('shoe-container');
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        loadShoes();
    })
    .catch(error => console.log(error));






