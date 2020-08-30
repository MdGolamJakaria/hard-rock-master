
document.getElementById('search-btn').addEventListener('click',function(){
    const searchBar = document.getElementById('search-bar').value;

    fetch (`https://api.lyrics.ovh/suggest/${searchBar}`)
        .then(res=>res.json())
        .then ( data =>{
            // console.log(data.data.id)
            data= data.data.slice(0,10);

            const listArea = document.getElementById('show-area');
            listArea.innerHTML='';
            for (let i = 0; i < data.length; i++) {
                const songs = data[i];
                // console.log(songs)
                // searchBar = '';
                
                const p = document.createElement('p');
                p.innerHTML= ` 
                    <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${songs.title}</h3>
                        <p class="author lead">Album by <span>${songs.artist.name}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success">Get Lyrics</button>
                    </div>
                    </div>
                     `
                    listArea.appendChild(p);
        
            }
            
        })

        

        
        
})


