const images = [];
images[0] = 'images/banner_images/1.jpg'
images[1] = 'images/banner_images/2.jpg'
images[2] = 'images/banner_images/3.jpg'
images[3] = 'images/banner_images/4.jpg'

window.onload = function () {
    const random = Math.floor(Math.random() * images.length);
    document.getElementById('banner').style.backgroundImage =  `url(${images[random]})`;
    var today_color = document.getElementById('today-color').style.backgroundColor="#032541";
    var today_color= document.getElementById('today-color').style.color="white";
    var streaming = document.getElementById('streaming').style.backgroundImage="linear-gradient(0.25turn, #78caae, #50c2c0, #1cb8d8)";
    var streaming= document.getElementById('streaming').style.color="#032541";
    var streaming= document.getElementById('streaming').style.fontWeight="600";
}
function todayColor(){
    var todayColor=document.getElementById("today-color");
        todayColor.style.backgroundColor="#032541";
        todayColor.style.color="white";
    var thisWeek=document.getElementById("this-week");
        thisWeek.style.backgroundColor="white";
        thisWeek.style.color="#032541";

        // fetch API data 
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
            .then(response => response.json())
            .then((data)=>{
                showResults(data.results);
            })
            .catch(err => console.error(err));
}

function thisWeek(){
    var todayColor=document.getElementById("today-color");
        todayColor.style.backgroundColor="white";
        todayColor.style.color="#032541";
    var thisWeek=document.getElementById("this-week");
        thisWeek.style.backgroundColor="#032541";
        thisWeek.style.color="white";

        var thisweekmovies = document.querySelector('#trendy-movies');
        const thisWeekMovies = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', thisWeekMovies)
            .then(response => response.json())
            .then((data)=>{
                data.results.forEach(r => {
                    const { title, name, poster_path, release_date,first_air_date,vote_average } = r;
                    var images= "https://image.tmdb.org/t/p/w500" + poster_path;
                    // remove elements
                    const cardsDiv = document.querySelector('#cards');
                    const cardsImage = document.querySelector('#card-img');
                    cardsImage.remove();
                    cardsDiv.remove();
                    
                    const div = document.createElement('div');
                    const image = document.createElement('img');
                    const movieLink = document.createElement('a');
                    const movieName = document.createElement('h6');
                    const species = document.createElement('p');
                    const voting = document.createElement('div');
                    const voting_p = document.createElement('p');
                    div.id="cards"
                    image.id = 'card-img'
                    voting_p.id='votesP'
                    movieLink.id="movieLink"
                    image.src = images;
                    //movieLink.href=
                    const totalVotes = (vote_average*10).toFixed(0);
                    if(title){
                    movieName.innerText = `${title}`
                    }else{
                    movieName.innerText = `${name}`
                    }
                    if(first_air_date){
                        const date = new Date(first_air_date);
                        let newDate = date.toDateString();
                        let strArr = newDate.split(" ");
                        let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                        species.innerText = `${d}`
                    }else{
                        const date = new Date(release_date);
                        let newDate = date.toDateString();
                        let strArr = newDate.split(" ");
                        let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                        species.innerText = `${d}`
                    }
                    voting_p.innerText=`${totalVotes}%`
                    div.appendChild(image)
                    div.appendChild(movieLink)
                    movieLink.appendChild(movieName)
                    div.appendChild(species)
                    div.appendChild(voting)
                    voting.appendChild(voting_p);
                    thisweekmovies.appendChild(div)
                });
            })
            .catch(err => console.error(err));
        
}

var movies = document.querySelector('#trendy-movies');
// fetch data from API of TMDB
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(response => response.json())
    .then((data)=>{
        showResults(data.results);
    })
    .catch(err => console.error(err));

    function showResults(result){
        result.forEach(r => {
            const { title, name, poster_path, release_date,first_air_date,vote_average } = r;
            var images= "https://image.tmdb.org/t/p/w500" + poster_path;
            const div = document.createElement('div');
            const image = document.createElement('img');
            const movieLink = document.createElement('a');
            const movieName = document.createElement('h6');
            const species = document.createElement('p');
            const voting = document.createElement('div');
            const voting_p = document.createElement('p');

            // remove elements
        //     const cardsDiv = document.querySelector('#cards');
        //     const cardsImage = document.querySelector('#card-img');
        //     if(cardsImage){
        //         cardsImage.remove();
        //     }
        //    if(cardsDiv){
        //     cardsDiv.remove();
        //    }

            div.id="cards"
            image.id = 'card-img'
            voting_p.id='votes'
            movieLink.id="movieLink"
            image.src = images;
            //movieLink.href=
            const totalVotes = (vote_average*10).toFixed(0);
            if(title){
            movieName.innerText = `${title}`
            }else{
            movieName.innerText = `${name}`
            }
            if(first_air_date){
                const date = new Date(first_air_date);
                let newDate = date.toDateString();
                let strArr = newDate.split(" ");
                let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                species.innerText = `${d}`
            }else{
                const date = new Date(release_date);
                let newDate = date.toDateString();
                let strArr = newDate.split(" ");
                let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                species.innerText = `${d}`
            }
            voting_p.innerText=`${totalVotes}%`
            div.appendChild(image)
            div.appendChild(movieLink)
            movieLink.appendChild(movieName)
            div.appendChild(species)
            div.appendChild(voting)
            voting.appendChild(voting_p);
            movies.appendChild(div)
        });
    }

    // fetch movies data from API for streaming Movies
    const trailers = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', trailers)
        .then(response => response.json())
        .then((data)=>{
            showTrailers(data.results);
        })
        .catch(err => console.error(err));

        var sm = document.querySelector('#streamingVideos');
        function showTrailers(results){
            results.forEach(r => {
                const {poster_path,title} = r;
              
                var images= "https://image.tmdb.org/t/p/w500" + poster_path;
                const div = document.createElement('div');
                const image = document.createElement('img');
                const playIcon = document.createElement('button');
                const videoName = document.createElement('h6');

                playIcon.innerHTML="<i class='bi bi-play-fill'></i>";
                videoName.innerText=`${title}`

                div.classList="smVideos";
                image.src = images;
                videoName.id="videoName";
                sm.appendChild(div)
                div.appendChild(image)
                div.appendChild(playIcon)
                div.appendChild(videoName)
             })
        }

    // fetch movies data from API for What's Popular Movies
    const popular = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', popular)
        .then(response => response.json())
        .then((data)=>{
            showPoplular(data.results);
        })
        .catch(err => console.error(err));

        var pm = document.querySelector('#popular-movies');

        function showPoplular(result){
            result.forEach(r => {
                const { title, name, poster_path, release_date,first_air_date,vote_average } = r;
                var images= "https://image.tmdb.org/t/p/w500" + poster_path;
                const div = document.createElement('div');
                const image = document.createElement('img');
                const movieLink = document.createElement('a');
                const movieName = document.createElement('h6');
                const species = document.createElement('p');
                const voting = document.createElement('div');
                const voting_p = document.createElement('p');
                div.id="cards"
                image.id = 'card-img'
                voting_p.id='votesP'
                movieLink.id="movieLink"
                image.src = images;
                //movieLink.href=
                const totalVotes = (vote_average*10).toFixed(0);
                if (title) {
                    movieName.innerText = `${title}`
                } else {
                    movieName.innerText = `${name}`
                }
                if(first_air_date){
                    const date = new Date(first_air_date);
                    let newDate = date.toDateString();
                    let strArr = newDate.split(" ");
                    let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                    species.innerText = `${d}`
                }else{
                    const date = new Date(release_date);
                    let newDate = date.toDateString();
                    let strArr = newDate.split(" ");
                    let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                    species.innerText = `${d}`
                }
                voting_p.innerText=`${totalVotes}%`
                div.appendChild(image)
                div.appendChild(movieLink)
                movieLink.appendChild(movieName)
                div.appendChild(species)
                div.appendChild(voting)
                voting.appendChild(voting_p);
                pm.appendChild(div)
            });
        }
// Free To Watch Fetch TV SHows API
const freeToWatch = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
    }
  };
  
  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', freeToWatch)
    .then(response => response.json())
    .then((data)=>{
        showFreeToWatch(data.results);
    })
    .catch(err => console.error(err));

    var fm = document.querySelector('#free-movies');

    function showFreeToWatch(result){
        result.forEach(r => {
            const { title, name, poster_path, release_date,first_air_date,vote_average } = r;
            var images= "https://image.tmdb.org/t/p/w500" + poster_path;
            const div = document.createElement('div');
            const image = document.createElement('img');
            const movieLink = document.createElement('a');
            const movieName = document.createElement('h6');
            const species = document.createElement('p');
            const voting = document.createElement('div');
            const voting_p = document.createElement('p');
            div.id="cards"
            image.id = 'card-img'
            voting_p.id='votesF'
            movieLink.id="movieLink"
            image.src = images;
            //movieLink.href=
            const totalVotes = (vote_average*10).toFixed(0);
            if(title){
            movieName.innerText = `${title}`
            }else{
            movieName.innerText = `${name}`
            }
            if(first_air_date){
                const date = new Date(first_air_date);
                let newDate = date.toDateString();
                let strArr = newDate.split(" ");
                let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                species.innerText = `${d}`
            }else{
                const date = new Date(release_date);
                let newDate = date.toDateString();
                let strArr = newDate.split(" ");
                let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                species.innerText = `${d}`
            }
            voting_p.innerText=`${totalVotes}%`
            div.appendChild(image)
            div.appendChild(movieLink)
            movieLink.appendChild(movieName)
            div.appendChild(species)
            div.appendChild(voting)
            voting.appendChild(voting_p);
            fm.appendChild(div)
        });
    }



    // onclick on this Week movies 
    // function thisWeek(){
       
    // }