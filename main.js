
document.getElementById('search-btn').addEventListener('click',function(){
    const searchBar = document.getElementById('search-bar').value;

    fetch (`https://api.lyrics.ovh/suggest/${searchBar}`)
        .then(res=>res.json())
        .then ( data =>{
            // console.log(data.data.id)
            data= data.data.slice(0,10);
            for (let i = 0; i < data.length; i++) {
                const songs = data[i];
                console.log(songs)
                const listArea = document.getElementById('show-area')
                const p = document.createElement('p');
                p.innerHTML= `
                    <p class="author lead"> 
                        <strong> ${songs.title}</strong> 
                        Album by 
                        <span> ${songs.artist.name} </span> 
                        <button class="btn btn-success"> Get Lyrics </button> 
                    </p> `
                    listArea.appendChild(p);
            }
        })
})


