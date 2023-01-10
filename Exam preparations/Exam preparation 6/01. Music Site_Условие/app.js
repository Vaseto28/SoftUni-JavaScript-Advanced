window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById("genre");
    let nameField = document.getElementById("name");
    let authorField = document.getElementById("author");
    let dateField = document.getElementById("date");

    document.getElementById("add-btn").addEventListener('click', addSong);
    
    let hitsArea = document.querySelector("div.all-hits-container");
    let likesSection = document.getElementById("total-likes");
    let likesMsg = likesSection.children[0].children[0];
    let savedSongsSection = document.querySelector('div.saved-container');

    function addSong(e){
        e.preventDefault();

        let genre = genreField.value;
        let name = nameField.value;
        let author = authorField.value;
        let date = dateField.value;

        if(!genre || !name || !author || !date){
            return;
        }

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.setAttribute('src', './static/img/img.png');

        let genreH2 = document.createElement('h2');
        genreH2.innerText = `Genre: ${genre}`;

        let nameH2 = document.createElement('h2');
        nameH2.innerText = `Name: ${name}`;

        let authorH2 = document.createElement('h2');
        authorH2.innerText = `Author: ${author}`;

        let dateH3 = document.createElement('h3');
        dateH3.innerText = `Date: ${date}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.innerText = 'Save song';
        saveBtn.addEventListener('click', saveSong);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.innerText = 'Like song';
        likeBtn.addEventListener('click', likeSong);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(nameH2);
        div.appendChild(authorH2);
        div.appendChild(dateH3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        hitsArea.appendChild(div);

        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }

    function likeSong(e){
        e.preventDefault();

        likesMsg.innerText = `Total Likes: ${Number(likesMsg.innerText.split(": ")[1]) + 1}`;

        e.target.disabled = true;
    }

    function saveSong(e){
        e.preventDefault();

        let currSong = e.target.parentElement.children;

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = currSong[0];
        let genreH2 = currSong[1]; 
        let nameH2 = currSong[2]; 
        let authorH2 = currSong[3]; 
        let dateH3 = currSong[4];
        let deleteBtn = currSong[currSong.length - 1];
        
        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(nameH2);
        div.appendChild(authorH2);
        div.appendChild(dateH3);
        div.appendChild(deleteBtn);

        savedSongsSection.appendChild(div);

        e.target.parentElement.remove();
    }

    function deleteSong(e){
        e.preventDefault();

        e.target.parentElement.remove();
    }
}