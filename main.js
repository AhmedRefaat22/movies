let dispMovies =  document.getElementById('rowData');
    let trendingMovies;
    async function getMovies(){
        let responce = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR29kL9bgAdQ6O3V5bSIWzTAONj92itW_Iyl3XDaC8N1L1IUu8YNT4N52MM')
        let finalResult = await responce.json();
        trendingMovies = finalResult.results;
        displayMovies(trendingMovies);
        

    }
    getMovies();

    
    function displayMovies(term){
    
        let list = ``;


        for(let i=0 ; i < term.length ; i++ ) {
         
        list +=`
            <div class="col-md-4 my-3 ">
           <div >
               <img class="w-100 img-fluid rounded" src="https://image.tmdb.org/t/p/w500${term[i].poster_path}" alt="">
               </div>
       </div>`
            
        
                
        }
    
        document.getElementById('rowData').innerHTML = list;
    }


  
 
