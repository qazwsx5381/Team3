/* 1. 게시물 인덱스 */
let currentIndex = 0;

/* 2. 게시물 불러오기 */
// getPosts()를 실행했을 때 postsString이 있으면 객체로 되어있는 postsString을 배열로 반환하고 없으면 []로 반환.
function getPosts() {
  const postsString = localStorage.getItem("posts");
  if (postsString) {
    return JSON.parse(postsString);
  } else {
    return [];
  }
}

/* 3. 게시물 저장 */
// savePosts(posts)를 실행하면 localStorage에 posts라는 이름으로 posts를 객체로 바꾸어 저장.
function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// 현재시간 불러오기
function timestamp() {
  var today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
}

/* 4. 게시물 생성 */
// 게시글 글번호 설정 ( id_count )
// getPosts().length의 값이 0이면 id_count 값을 0으로 아니면 id_count 값을 getPosts()[getPosts().length - 1].id ( getPosts의 마지막 배열의 id ) 로 설정
if (getPosts().length === 0) {
  id_count = 0;
} else {
  id_count = getPosts()[getPosts().length - 1].id;
}

// 게시글 조회수 값 설정
count_num = 0;

// 함수 createPost()를 실행하여 getPosts()에서 받아온 배열 끝에 새로운 배열을 추가하고 savePosts(posts)로 저장.
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

/* 5. 게시물 작성 폼 제출 */
// ( event 발생 ) postForm이라는 id가 있는 제출 버튼을 누를 경우
document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    // 게시글 글번호 설정 ( id_count )
    id_count++;
    id_count = id_count;

    event.preventDefault();

    const titleInput = document.getElementById("board_title");
    const contentInput = document.getElementById("board_sub");
    const nameInput = document.getElementById("board_name");

    // title, content, name, count, time, editTime, id 설정 ( 게시물 생성 전 값 설정! )
    const title = titleInput.value;
    const content = contentInput.value;
    const name = nameInput.value;
    const count = count_num;
    const time = timestamp();
    const editTime = "";
    const id = id_count;

    // 게시물 생성
    createPost(title, content, name, count, time, editTime, id);

    // 게시물 생성 후 input과 textarea의 value 값을 모두 비우고 게시판.html로 이동
    titleInput.value = "";
    contentInput.value = "";
    nameInput.value = "";
    window.location = "../html/board.html";
  });

// 목록 버튼을 누르면 게시물.html로 이동
document.getElementById("list_btn").addEventListener("click", () => {
  window.location = "../html/board.html";
});