async function getBreweries(){
  const res = await axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio&per_page=50')
  const div = document.querySelector('#breweries')
  for(let brewery of res.data){
    const h5 = document.createElement('h5')
    h5.innerText = brewery.name
    const h6 = document.createElement('h6')
    h6.innerHTML = `<a href=${brewery.website_url}>${brewery.name}</a>`
    div.append(h5)
    div.append(h6)
    
   
  }
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
  

}



