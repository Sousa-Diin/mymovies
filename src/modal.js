const background = document.getElementById("modal-background");
const modalContainer = document.getElementById("modal-container");

let currentMovie = {};

function backgroundClickHandler() {
  overlay.classList.remove("open");
}

function closeModal() {
  overlay.classList.remove("open"); // Var [overlay] definida em outro script
}

function addCurrentMovieToList() {
  if (isMovieAlreadyOnList(currentMovie.imdbID)) {
    notie.alert({
      type: "error",
      text: "Filme já esta na sua lista!",
      position: "top",
    });
    return;
  }
  addToLit(currentMovie);
  updateUI(currentMovie);
  updateLocalStorage();
  closeModal();
}

function createModal(data) {
  currentMovie = data;

  modalContainer.innerHTML = `
    <h3 id="movie-title">${data.Title} - ${data.Year}</h3>
    <section id="modal-body">
        <img
        id="movie-poster"
        src="${data.Poster}" 
        alt="Poster do Filme" id="movie-poster">
        <div id="movie-info">
            <h3 id="movie-plot">${data.Plot}</h3>
            <div id="movie-cast">
                <h4>Elenco:</h4>
                <h5>${data.Actors}</h5>
            </div>
            <div id="movie-genre">
               <h4>Gênero:</h4>
               <h5>${data.Genre}</h5>
            </div>
        </div>
    </section>
    <section id="modal-footer">
        <button id="add-to-list" onclick='{ addCurrentMovieToList()}'>Adicionar à Lista</button>
    </section>`;
}

background.addEventListener("click", backgroundClickHandler);
