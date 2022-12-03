const toggleMenu = () =>{
   
    const opciones = document.getElementById('menu')
    const btnRemove = document.getElementById('butonMenu')
    
    menu.addEventListener('click', e => {
        console.log(e.target);
        if(e.target.tagName === 'A'){
            opciones.classList.toggle('menu--open')

        }
    
    butonMenu.addEventListener('click', e =>{
        opciones.classList.remove('menu--open')

    })  
    })
   
}

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu()
})