function searchMovie(){
    let serachText = document.getElementById('serach-text').value; 
    sessionStorage.setItem('serachText', serachText);
    location.href='search.html';
    }

    var searchVal = sessionStorage.getItem('serachText');
    const serachMovie = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
        }
      };
      
      fetch('https://api.themoviedb.org/3/search/multi?query='+searchVal+'&include_adult=false&language=en-US&page=1', serachMovie)
        .then(response => response.json())
        .then((data)=>{
          console.log('-----')
          console.log(data.results);
          console.log('-----')
          showMovieTv(data.results);
          showNumbers(data.results);
          // showPeople(data.results);
        })
        .catch(err => console.error(err));

       var searchItems = document.querySelector("#serach-cards");
        function showMovieTv(result){
          console.log("**************");
            result.forEach(r => {
                const { title, name, poster_path, release_date,first_air_date,overview,profile_path} = r;
                if(poster_path){
                  var images= "https://image.tmdb.org/t/p/w500" + poster_path;
                }else{
                  var images= "https://image.tmdb.org/t/p/w500" + profile_path;
                }
                const div1 = document.createElement('div');
                const div2 = document.createElement('div');
                const div = document.createElement('div');
                const image = document.createElement('img');
                const heading = document.createElement('h4');
                const p = document.createElement('p');
                const desc = document.createElement('p');

                div.id="resultCards";
                image.id = 'card-img';
                p.id="date";
                desc.id="desc";
                heading.id="heading";
                image.src = images;
                div1.id="images";
                div2.id="content";

                if(title){
                    heading.innerText = `${title}`
                }else{
                    heading.innerText = `${name}`
                }
                // if(known_for_department){
                //   p.innerText = `${known_for_department}`
                // }
                if(first_air_date) {
                    const date = new Date(first_air_date);
                    let newDate = date.toDateString();
                    let strArr = newDate.split(" ");
                    let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                    p.innerText = `${d}`
                } else {
                    const date = new Date(release_date);
                    let newDate = date.toDateString();
                    let strArr = newDate.split(" ");
                    let d = strArr[1]+" "+strArr[2]+", "+strArr[3];
                    p.innerText = `${d}`
                }

                desc.innerText=`${overview}`
              
                div.appendChild(div1);
                div1.appendChild(image);
                div.appendChild(div2);
                div2.appendChild(heading);
                div2.appendChild(p);
                div2.appendChild(desc);
                div.appendChild(div1);
                div.appendChild(div2);
                searchItems.appendChild(div);
                
            });
           
        }
        
        let countMovies = 0;
        let countTv = 0;
        function showNumbers(results){
            results.forEach(res=>{
                const { media_type} = res;
                
                if(media_type == "movie"){
               //console.log("movie");
                    countMovies++;
                }else if(media_type == "tv"){
                    //console.log("tv");
                    countTv++;
                }
                const numbers = document.getElementById('numbers');
                numbers.innerText=countMovies;
                const tv = document.getElementById('tvNum');
                tv.innerText=countTv;
                const movies = document.getElementById('movies');
                movies.classList='select';
            });
        }

    function searchMovies(){
        const serachMovie = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
            }
          };
          
          fetch('https://api.themoviedb.org/3/search/movie?query='+searchVal+'&include_adult=false&language=en-US&page=1', serachMovie)
            .then(response => response.json())
            .then((data)=>{
                // console.log("------------");
                // console.log(data.results);
                showMovieTv(data.results);
                showNumbers(data.results);
            })
            .catch(err => console.error(err));
    }

    function searchTv(){
        const serachTv = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
            }
          };
          
          fetch('https://api.themoviedb.org/3/search/tv?query='+searchVal+'&include_adult=false&language=en-US&page=1', serachTv)
            .then(response => response.json())
            .then((data)=>{
                console.log("########");
                console.log(data.results);
                searchItems.innerHTML="";
                showMovieTv(data.results);
                showNumbers(data.results);
            })
            .catch(err => console.error(err));
    }

    function searchPeople(){
        const serachPeople = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViNDA4MjI4ZTE4NjBhMGJiY2U1MThjZmU3N2E5MiIsInN1YiI6IjY0OWU3MDgzYzlkYmY5MDEyODExNjRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPi0-IAFunex4xn7FKenazN6TCghDXWxxv2xjmuxOcY'
            }
          };
          
          fetch('https://api.themoviedb.org/3/search/person?query='+searchVal+'&include_adult=false&language=en-US&page=1', serachPeople)
            .then(response => response.json())
            .then((data)=>{
                console.log('persons')
                console.log(data.results);
                searchItems.innerHTML="";
                showMovieTv(data.results);
                showNumbers(data.results);
            })
            .catch(err => console.error(err));
    }
    