const movies = [
    {
        title: "Tanhaji ",
        poster: "Tanhaji.jpg",
        description: "Tanhaji, a Maratha warrior, is Shivaji Maharaj's trusted lieutenant. When the Mughals invade and conquer Kondhana fort, he sets out to reclaim it for his king and country.",
        trailerURL: "https://youtu.be/cffAGIYTEHU?si=JyDj9GG0pJUWUkgX",
        cast: "Ajay Devgan, Sharad Kelkar , Saif Ali Khan,,Kajol,Neha Sharma",
        director: "Om Raut",
        releaseDate: "10 January 2020"
    },
    {
        title: "Mr and Mrs Mahi",
        poster: "Mahi.jpg",
        description: "The storyline of 'Mr. and Mrs. Mahi' revolves around the lives of Mahima and her husband Mahendra. Mahima, a doctor, is inspired to become a cricketer after Mahendra, who identifies her cricketing talent and encourages her to pursue her dream.",
        trailerURL: "https://youtu.be/TtMjcP9cHIA?si=CymF26S9xKx1We2Z",
        cast: "Janhvi Kapoor, Rajkummar Rao",
        director: "Sharan Sharma",
        releaseDate: "31 May 2024"
    },
    {
        title: "Maidaan",
        poster: "Maidaan.jpg",
        description: "Inspired by the real life of the coach and manager of the Indian national football team, Syed Abdul Rahim, who is also considered the architect of Indian football.",
        trailerURL: "https://youtu.be/pB4kYvmnZ8k?si=cxbjZnHYbvfKT2ia",
        cast: "Ajay Devgn, Priyamani",
        director: "Amit Sharma",
        releaseDate: "10 April 2024"
    },
    {
        title: "Shrikanth",
        poster: "Shrikanth.jpg",
        description: "Srikanth is a 2024 Indian Hindi-language biographical film on the life of Srikanth Bolla, a visually-impaired industrialist and the founder of Bollant Industries.",
        trailerURL: "https://youtu.be/OMeuJP5iBWY?si=TkTW7vpj1PAEhqOe",
        cast: "Rajkummar Rao,Alaya F, Jyothika",
        director: "Tushar Hiranandani",
        releaseDate: "10 May 2024"
    },
    {
        title: "Fighter",
        poster: "Fighter.jpg",
        description: "A reckless yet brilliant squadron leader and his team of elite fighter pilots face mortal dangers and inner demons as they unite for a deadly mission.",
        trailerURL: "https://youtu.be/6amIq_mP4xM?si=YHwjG98j1vavM_ST",
        cast: "Hrithik Roshan,Deepika Padukone,Anil Kapoor",
        director: "Siddharth Anand",
        releaseDate: "25 January 2024"
    },
    {
        title: "Yodha",
        poster: "Yoddha.jpg",
        description: "When a group of terrorists hijack a passenger plane, an off-duty soldier crafts a plan to thwart the hijackers and safeguard the passengers' survival despite the engine's failure.",
        trailerURL: "https://youtu.be/3AuB8RTfBJc?si=_PQ0h0eCl7rntW1e",
        cast: "Sidharth Malhotra ,Raashi Khanna, Disha Patani",
        director: "Pushkar Ojha, Sagar Ambre",
        releaseDate: "15 March 2024"
    }
];

const searchBar = document.getElementById("search-bar");
const movieContainer = document.querySelector(".movies");

function displayMovies(filteredMovies) {
    movieContainer.innerHTML = "";
    filteredMovies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
            <div class="movie-details">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-info">${movie.description}</p>
                <p class="movie-cast"><strong>Cast:</strong> ${movie.cast}</p>
                <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
                <p class="movie-release-date"><strong>Release Date:</strong> ${movie.releaseDate}</p>
                <button class="trailer-btn">Watch Trailer</button>
            </div>
        `;

        const trailerBtn = movieCard.querySelector(".trailer-btn");
        trailerBtn.addEventListener("click", () => {
            window.open(movie.trailerURL);
        });

        movieContainer.appendChild(movieCard);
    });
}

displayMovies(movies); // Display all movies initially

searchBar.addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
});
