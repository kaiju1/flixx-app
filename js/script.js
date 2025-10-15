const global = {
    currentPage: location.pathname,
};

async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');

    console.log(results);
}
// Fetch data from TMDB Api
async function fetchAPIData(endpoint) {
    const API_KEY = '3d4f30e0e6166c7b8bac92e1ae0edbb0';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
    );

    const data = await response.json();

    return data;
}

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    });
}

// Init App
function init() {
    switch (global.currentPage) {
        case '/':
        case './index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('movie details');
            break;
        case '/tv-details':
            console.log('tv details');
            break;
        case '/search.html':
            console.log('search');
            break;
    }

    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
