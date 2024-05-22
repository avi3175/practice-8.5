let dynamicSearch = document.getElementById('search-button').addEventListener('click',()=>{  
        const text = document.getElementById('search-input').value
        console.log(text)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`)
        .then(res=>res.json())
        .then(data=>{
              show_the_data(data)
            })

})

// let stringId

const show_the_data = (data) =>{
    let show_the_card = data.meals
    const grab = document.getElementById('meal')
    show_the_card.map(item=>{
        const div = document.createElement('div')
        div.innerHTML = `
        
        <img src="${item.strMealThumb}" alt="Placeholder Image">
        <div class="card-content">
          <p>${item.strMeal}</p>
          <p>CATEGORY:${item.strCategory} </p>
          <p>ID:${item.idMeal} </p>
          
          <button class="details" onclick="details('${item.idMeal}')" >DETAILS</button>
        </div>
        
        `
        grab.appendChild(div)

    
        
    }) 

}




const details = (info) =>{
    console.log(info)
    const id = info
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(data=>{
        
        show_the_single_data(data)
    })

}

const show_the_single_data = (data) =>{
    console.log(data)
    let show = data.meals
    console.log(show)

    const grab_again = document.getElementById('single-meal')
    show.map(item=>{
        const div_again = document.createElement('div')
        div_again.innerHTML = `
        
        <img src="${item.strMealThumb}" alt="Placeholder Image">
        <div class="card-content">
          <p>${item.strMeal}</p>
          <p>CATEGORY:${item.strCategory} </p>
          <p>ID:${item.idMeal} </p>
          
        
        `
        grab_again.appendChild(div_again)

    
        
    }) 


} 
