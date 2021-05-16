
const API = 'https://api.openbrewerydb.org/breweries?per_page=50'

async function getBreweries(state){
  for (let i = 0; i <= 20; i++){
    const res = await axios.get(`${API}&by_state=${state}&page=${i}}`)
    document.querySelector('#state-header').innerText = `${state} Breweries`;
    for(let brewery of res.data){
      const div = document.createElement('div')
      div.classList.add('card')
      div.innerHTML = `
        <div class="card-body">
          <h5 class="card-title" id="name">${brewery.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="location">${brewery.city}</h6>
          <a href="${brewery.website_url}" class="card-link" id="link">${brewery.website_url}</a>
        </div>
      `
      document.querySelector('.container').append(div)
    }
  }
}
 
const form = document.querySelector('#breweryForm')
const stateInput = document.querySelector('input[name="state"]');
form.addEventListener('submit', function(evt){
  evt.preventDefault();
  getBreweries(stateInput.value)
})




  // const res2 = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50&page=2')
  // for(let brewery of res2.data){
  //   const li = document.createElement('li')
  //   li.innerText = brewery.name
  //   ul.append(li)
    
  // }
  // const res3 = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50&page=3')
  // for(let brewery of res3.data){
  //   const li = document.createElement('li')
  //   li.innerText = brewery.name
  //   ul.append(li)
    
  // }
  // const res4 = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50&page=4')
  // for(let brewery of res4.data){
  //   const li = document.createElement('li')
  //   li.innerText = brewery.name
  //   ul.append(li)
    
  // }
  // const res5 = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50&page=5')
  // for(let brewery of res5.data){
  //   const li = document.createElement('li')
  //   li.innerText = brewery.name
  //   ul.append(li)
    
  // }
  // const res6 = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50&page=6')
  // for(let brewery of res6.data){
  //   const li = document.createElement('li')
  //   li.innerText = brewery.name
  //   ul.append(li)
    
  // }
  // const res7 = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50&page=7')
  // for(let brewery of res7.data){
  //   const li = document.createElement('li')
  //   li.innerText = brewery.name
  //   ul.append(li)
    
  // }
  




