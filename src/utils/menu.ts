interface menu {
    name: string;
    url: string;
}

export let menuItem: menu[] = [
    {
        name: 'Inicio',
        url: '/'
    },
    {
        name: 'Proyecto',
        url: '/proyectos'
    },
    {
        name: 'Cursos',
        url: '/cursos'
    },
    {
        name: 'Noticias',
        url: '/noticias'
    },
    {
        name: 'Precios',
        url: '/precios'
    }];