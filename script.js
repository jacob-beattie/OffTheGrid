fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('shoe-container');
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    for (let i = 0; i < data.length; i++) {
      const shoe = data[i];
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
  })




