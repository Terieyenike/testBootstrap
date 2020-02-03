const url = 'https://jsonplaceholder.typicode.com/posts/?userId=1';

const cardContainer = document.querySelector('#hotels');

const getPost = url => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const post = fetch(url, options)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.log(err, err.message);
    });
  return post;
};

const spinner = document.querySelector('.spin');

const generatePost = () => {
  cardContainer;
  spinner.classList.add('show');
  getPost(url)
    .then(posts => {
      posts.map(postArticle => {
        cardContainer.innerHTML += `
        <div class="col mb-4">
          <div class="card h-100">
            <img src="./img/macbook.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${postArticle.title}</h5>
              <p class="card-text">${postArticle.body}</p>
            </div>
          </div>
      </div>
      `;
        spinner.classList.remove('show');
        return cardContainer;
      });
    })
    .catch(err => {
      console.log(err);
    });
};

document.addEventListener('DOMContentLoaded', generatePost)
// generatePost();

// Register the serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  });
}