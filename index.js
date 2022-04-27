console.log('Hello World')

//Step 1: Grab the HTML Element
let movieList = document.querySelector('form');


//Step 2: Write Callback Function
addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    let list = document.querySelector('ul');
    list.appendChild(movie);
    inputField = '';
}

deleteMovie = (event) => {
    event.target.parentNode.remove()
}


//Step 3: Combine The Two Using addEventListener
movieList.addEventListener('submit', addMovie)