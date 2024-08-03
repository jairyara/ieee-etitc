import imgEvent from '@assets/img/pexels.jpg';

interface newCard {
    img: string;
    description: string;
}

interface coursesCard {
    img: string;
    title: string;
    text: string;
}

export let newCourseCard: newCard [] = [   
    {
        img: imgEvent.src,
        description: 'Nuevo curso de desarrollo con Astro'
    }, 
    {
        img: imgEvent.src,
        description: 'Curso Avanzado de Desarrollo con Astro'
    }, 
    {
        img: imgEvent.src,
        description: 'Dominando el Desarrollo con Astro: Curso Completo'
    }, 
];

export let courseCard: coursesCard [] = [   
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
    {
        img: imgEvent.src,
        title: '¿Quieres crear tu primera pagina web?',
        text: 'By IEEE',
    }, 
];



