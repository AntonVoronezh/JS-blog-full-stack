const card = post => {
  return `
    <div class="col s12 m8 offset-m2 l6 offset-l3" id="posts">
        <div class="card z-depth-4">
            <div class="card-content">
                <span class="card-title">${post.title}</span>
                <p style="white-space: pre-line;">${post.text}</p>
                <small>${new Date(post.date).toLocaleDateString()}</small>
            </div>
            <div class="card-action">
                <button class="btn btn-small red js-remove" data-id="${post._id}">
                    <i class="material-icons">delete</i>
                </button>
            </div>
        </div>
    </div>
    `;
};

let posts = [];
let modal;
const BASE_URL = "/api/post";

class postApi {
  static fetch() {
    return fetch(BASE_URL, { method: "get" }).then(res => res.json());
  }

  static create(post) {
    return fetch(BASE_URL, {
        method: "post",
        body: JSON.stringify(post),
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        }
    }).then(res => res.json());
  }

  static remove(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'delete'
    }).then(res => res.json());
  }
}







