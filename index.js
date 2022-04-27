console.log('Hello World')

//Step 1: Grab the HTML Element
let movieList = document.querySelector('form');
let message = document.querySelector('#message')


//Step 2: Write Callback Function
addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);

    deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    let list = document.querySelector('ul');
    list.appendChild(movie);
    inputField.value = '';
}

deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
    revealMessage();
}

crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList === event.target.classList.contains('checked')) {
            message.textContent = "Movie Watched!"
    } else { message.textContent = "Movie added back!"

    }
    revealMessage();
}

revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(callback, 1000);
}

callback = () => {message.classList.add('hide')}

//Step 3: Combine The Two Using addEventListener
movieList.addEventListener('submit', addMovie)