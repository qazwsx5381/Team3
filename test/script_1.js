// 게시물 인덱스
let currentIndex = 0;

// 게시물 불러오기
function getPosts() {
  const postsString = localStorage.getItem("posts");
  if (postsString) {
    return JSON.parse(postsString);
  } else {
    return [];
  }
}

// 게시물 저장
function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// 게시물 생성
function createPost(title, content) {
  const posts = getPosts();
  const newPost = {
    title: title,
    content: content,
  };
  posts.push(newPost);
  savePosts(posts);
}

// 게시물 수정
function editPost(index, title, content) {
  const posts = getPosts();
  posts[index].title = title;
  posts[index].content = content;
  savePosts(posts);
}

// 게시물 렌더링
function renderPosts() {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  const posts = getPosts();
  const post = posts[currentIndex];

  const postElement = document.createElement("div");
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <button onclick="editPostForm(${currentIndex})">수정</button>
  `;
  postsContainer.appendChild(postElement);

  updateNavigationButtons();
}

// 게시물 작성 폼 제출
// document
//   .getElementById("postForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const titleInput = document.getElementById("titleInput");
//     const contentInput = document.getElementById("contentInput");

//     const title = titleInput.value;
//     const content = contentInput.value;

//     createPost(title, content);
//     renderPosts();

//     titleInput.value = "";
//     contentInput.value = "";
//   });

// 게시물 수정 폼 렌더링
function editPostForm(index) {
  const posts = getPosts();
  const post = posts[index];

  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");

  titleInput.value = post.title;
  contentInput.value = post.content;

  document
    .getElementById("postForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const title = titleInput.value;
      const content = contentInput.value;

      editPost(index, title, content);
      renderPosts();

      titleInput.value = "";
      contentInput.value = "";
    });
}

// 이전 게시물 버튼 클릭
document.getElementById("prevButton").addEventListener("click", function () {
  currentIndex--;
  renderPosts();
});

// 다음 게시물 버튼 클릭
document.getElementById("nextButton").addEventListener("click", function () {
  currentIndex++;
  renderPosts();
});

// 이전/다음 버튼 상태 업데이트
function updateNavigationButtons() {
  const posts = getPosts();
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex === posts.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// 초기 게시물 렌더링
renderPosts();
