let propuestas = document.getElementById('propuesta');
let lista_propuesta = document.getElementById('lista_propuesta');

propuestas.addEventListener('click', ()=>{
    lista_propuesta.classList.toggle('h-0');
    lista_propuesta.classList.toggle('h-36');
    lista_servicos.classList.remove('h-12')
    lista_servicos.classList.add('h-0')
})

let servicios = document.getElementById('servicos');
let lista_servicos = document.getElementById('lista_servicios');

servicios.addEventListener('click', ()=>{
    lista_servicos.classList.toggle('h-0');
    lista_servicos.classList.toggle('h-12');
    lista_propuesta.classList.remove('h-36')
    lista_propuesta.classList.add('h-0')
})

let metodologia = document.getElementById('metodologia');
let lista_metodologia = document.getElementById('lista_metodologia');

metodologia.addEventListener('click', ()=>{
    lista_propuesta.classList.toggle('overflow-hidden')
    lista_presencial.classList.add('w-0')
    lista_presencial.classList.remove('w-full')
})

let presencial = document.getElementById('presencial');
let lista_presencial = document.getElementById('lista_presencial')

presencial.addEventListener('click', ()=>{
    lista_presencial.classList.toggle('w-0')
    lista_presencial.classList.toggle('w-full')
})