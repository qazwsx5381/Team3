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

// 현재시간 불러오기
function timestamp() {
  var today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
}

// 게시물 생성
if (getPosts().length === 0) {
  id_count = 0;
} else {
  id_count = getPosts()[getPosts().length - 1].id;
}
count_num = 0;
function createPost(title, content, name, count, time, editTime, id) {
  const posts = getPosts();
  const newPost = {
    title: title,
    content: content,
    name: name,
    count: count,
    time: time,
    editTime: editTime,
    id: id,
  };
  posts.push(newPost);
  savePosts(posts);
}

// 게시물 작성 폼 제출
document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    id_count++;
    id_count = id_count;
    console.log(id_count);
    event.preventDefault();
    const titleInput = document.getElementById("board_title");
    const contentInput = document.getElementById("board_sub");
    const nameInput = document.getElementById("board_name");

    const title = titleInput.value;
    const content = contentInput.value;
    const name = nameInput.value;
    const count = count_num;
    const time = timestamp();
    const editTime = "";
    const id = id_count;

    createPost(title, content, name, count, time, editTime, id);

    titleInput.value = "";
    contentInput.value = "";
    nameInput.value = "";
    window.location = "./게시판.html";
  });
document.getElementById("list_btn").addEventListener("click", () => {
  window.location = "./게시판.html";
});