let purcashe = {}
let prices = {
    prodPrice: document.querySelector('.comp__product-price'),
    ffPrice: document.querySelector('.comp_fastfood-price'),
    sportPrice: document.querySelector('.comp__sport-price'),
    drinksPrice: document.querySelector('.comp__drinks-price')
}

let form = document.querySelector('.product__create')
var tbody = document.querySelector('table').getElementsByTagName('tbody')[0]
let btn = document.querySelector('.submit__button')
btn.addEventListener('click', (ev) => {
    ev.preventDefault()
    tbody.insertAdjacentHTML('beforeEnd',
    `<tr class="exp">
        <td class="exp__obj">${form.name.value}</td>
        <td class="exp__obj">${form.category.options[form.category.selectedIndex].text}</td>
        <td class="exp__obj">${form.price.value}</td>
        <td class="exp__obj"><img class="exp__img" src="free-icon-cross-mark-17047.png" alt=""></td>
    </tr>`
    )
    let exp = document.querySelector('.exp')
    if(form.category.options[form.category.selectedIndex].text == 'Продукты'){
        tbody.lastChild.style.borderLeft = '8px solid green'
        
    }else if(form.category.options[form.category.selectedIndex].text == 'ФастФуд'){
        tbody.lastChild.style.borderLeft = '8px solid orange'   
    }else if(form.category.options[form.category.selectedIndex].text == 'Спорт'){
        tbody.lastChild.style.borderLeft = '8px solid rgb(0, 191, 255)'   
    }else if(form.category.options[form.category.selectedIndex].text == 'Напитки'){
        tbody.lastChild.style.borderLeft = '8px solid pink'   
    }
})
tbody.addEventListener('click', (eve)=>{
    let trg = eve.target
    trg.closest('.exp').remove()
})

