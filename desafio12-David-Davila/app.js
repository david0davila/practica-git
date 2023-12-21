const movies = [
    { title: '300: El nacimiento de un imperio', description: 'Fantástico film de aventuras y cine épico, dirigido por Zack Snyder, y protagonizado por Gerard Butler. Nos narra la historia de la legendaria Batalla de Las Termópilas, entre un contingente espartano y las gigantes fuerzas Persas del Rey Jerjes.', year: 2014 },
    { title: 'Oppenheimer', description: 'Oppenheimer aboga contra un mayor desarrollo nuclear, especialmente la bomba de hidrógeno, lo que lo sitúa en el bando opuesto a su compañero del Proyecto Manhattan Edward Teller. Su postura se convierte en un punto de discordia en el lado estadounidense en medio de la tensa Guerra Fría contra la Unión Soviética.', year: 2023 },
    { title: 'Kurt Cobain: Montage of Heck', description: 'Kurt Cobain, el cantante, guitarrista y compositor de Nirvana, sigue siendo un icono 20 años después de su muerte. COBAIN: MONTAGE OF HECK es un viaje puro y visceral por la vida deCobain y su carrera con Nirvana a través de sus videos caseros, grabaciones, obras de arte, fotografía y diarios.', year: 2015 },
    { title: 'Spider-Man: lejos de casa', description: 'La película amplía el universo cinematográfico de Spider-Man, sacando a Peter Parker de su zona de confort en su Nueva York natal y llevándole por Europa en lo que debía ser unas vacaciones escolares, pero que acaban convirtiéndose en su mayor reto y en la mayor aventura épica nunca vista.', year: 2019 }
];

function displayMovies(filteredMovies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    const moviesToDisplay = filteredMovies || movies;

    moviesToDisplay.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.year}): ${movie.description}`;
        movieList.appendChild(li);
    });
}

function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

function filterByYear() {
    const yearFilter = document.getElementById("yearFilter");
    const selectedYear = Number(yearFilter.value);
    const filteredMovies = movies.filter(movie => movie.year === selectedYear);
    displayMovies(filteredMovies);
}

function addMovie(event) {
    event.preventDefault();
    const newTitle = document.getElementById("newTitle").value;
    const newDescription = document.getElementById("newDescription").value;
    const newYear = Number(document.getElementById("newYear").value);

    if (movies.some(movie => movie.title === newTitle)) {
        alert("Ya existe una película con este título");
        return;
    }

    movies.push({title: newTitle, description: newDescription, year: newYear});
    displayMovies();

    document.getElementById("newTitle").value = '';
    document.getElementById("newDescription").value = '';
    document.getElementById("newYear").value = '';

    const state = {page: 'home'};
    history.pushState(state, 'Películas', '/');
}

displayMovies();