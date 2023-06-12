// 게시물 인덱스
let currentIndex = 0;
//test1

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

// 게시물 수정
function editPost(index) {
  const posts = getPosts();
  const post = posts[index];
  const postsList = document.getElementById("content");
  const form = document.createElement("form");
  postsList.innerHTML = "";
  postsList.appendChild(form);
  form.setAttribute("id", "postForm");
  form.innerHTML = `<div class="box">
      <div class="sub_title">
        <span>제목</span>
        <input
          class="input1"
          type="text"
          placeholder="제목을 입력하세요."
          id="board_title"
          required
        />
      </div>
      <div class="sub_content">
        <span class="line">내용</span>
        <textarea
          id="board_sub"
          class="input1"
          placeholder="내용을 입력하세요."
          required
        ></textarea>
      </div>
      <div class="name">
        <span>작성자</span>
        <input
          class="input2"
          type="text"
          placeholder="닉네임을 입력하세요."
          id="board_name"
          disabled
        />
      </div>
    </div>`;
  const edit_title = document.getElementById("board_title");
  const edit_content = document.getElementById("board_sub");
  const edit_name = document.getElementById("board_name");
  document.getElementsByClassName("sub_title")[0].style.cssText =
    "display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;";
  document.getElementsByClassName("sub_content")[0].style.cssText =
    "display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;";
  document.getElementsByClassName("name")[0].style.cssText =
    "display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;";
  document.getElementById("board_sub").style.cssText =
    "position: relative; display: flex; width: 90%; height: 100px;";
  document.querySelectorAll("input").forEach((v, i) => {
    document.querySelectorAll("input")[i].style.cssText =
      "width:90%; color:black;";
  });
  edit_title.value = post.title;
  edit_content.value = post.content;
  edit_name.value = post.name;
  let editTitle = post.title;
  let editContent = post.content;
  const detailContainer = document.getElementById("footer");
  detailContainer.innerHTML = "";
  detailContainer.innerHTML = `
  <button class="btn btn_edit" type="submit" id="edit">수정</button>
  <button class="btn btn_del" onclick="showDetail(${index})">취소</button>
  `;
  document.getElementById("board_title").addEventListener("change", (event) => {
    editTitle = event.currentTarget.value;
    console.log(edit_title);
  });
  document.getElementById("board_sub").addEventListener("change", (event) => {
    editContent = event.currentTarget.value;
  });
  console.log(editContent);
  document.getElementById("edit").addEventListener("click", () => {
    if (editTitle === "") {
      editTitle = post.title;
      editContent;
    } else if (editContent === "") {
      editTitle;
      editContent = post.content;
    } else if (editTitle === "" && editContent === "") {
      editTitle = post.title;
      editContent = post.content;
    } else {
      editTitle;
      editContent;
    }
    console.log(editTitle, editContent);
    post.title = editTitle;
    post.content = editContent;
    post.editTime = timestamp();
    console.log(post);
    savePosts(posts);
    showDetail(index);
  });
  document.getElementsByClassName("btn_edit")[0].style.cssText =
    "height: 35px; background-color : rgb(143, 206, 130); margin-top:0px; margin-right:0px";
  document.getElementsByClassName("btn_del")[0].style.cssText =
    "height: 35px; background-color : rgb(82, 91, 211); margin-top:0px; margin-right:0px";
  document
    .getElementsByClassName("btn_edit")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_edit")[0].style.cssText =
        "height: 35px; background-color : rgb(118, 172, 107); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_edit")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_edit")[0].style.cssText =
        "height: 35px; background-color : rgb(143, 206, 130); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_del")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_del")[0].style.cssText =
        "height: 35px; background-color : rgb(128, 136, 255); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_del")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_del")[0].style.cssText =
        "height: 35px; background-color : rgb(82, 91, 211); margin-top:0px; margin-right:0px;";
    });
}

// 게시물 리스트 보기
function renderPosts() {
  const postsList = document.getElementById("content");
  const detailContainer = document.getElementById("footer");
  const posts = getPosts();
  postsList.innerHTML = "";
  postsList.innerHTML = `
    <table class="board" id="board">
    <tr class="board_title">
    <th class="board_num" id="board_num">글번호</th>
    <th class="board_tit" id="board_tit">제목</th>
    <th class="board_create" id="board_create">작성자</th>
    <th class="board_count" id="board_count">조회수</th>
    <th class="board_time" id="board_time">작성일자</th>
    </tr>
    </table>
    `;
  if (posts.length === 0) {
    const listItem = document.querySelector("table#board");
    const link = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = "작성된 게시물이 없습니다.";
    td.className = "board_num";
    td.setAttribute("colspan", "5");
    link.append(td);
    listItem.appendChild(link);
    document.querySelector("td").style.backgroundColor = "gainsboro";
    document.querySelector("td").style.height = "30px";
  } else {
    for (let i = posts.length - 1; i >= 0; i--) {
      const post = posts[i];
      const listItem = document.querySelector("table#board");
      const link = document.createElement("tr");
      const td = document.createElement("td");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      td.textContent = post.id;
      td1.textContent = post.title;
      td2.textContent = post.name;
      td3.textContent = post.count;
      td4.textContent = post.time;
      td.className = "board_num";
      td1.className = "board_tit";
      td2.className = "board_create";
      td3.className = "board_count";
      td4.className = "board_time";

      td1.addEventListener("click", () => {
        showDetail(i);
      });
      link.append(td, td1, td2, td3, td4);
      listItem.appendChild(link);
      document.querySelectorAll("td").forEach((v) => {
        v.style.backgroundColor = "gainsboro";
      });
      document.querySelectorAll("td.board_tit").forEach((v) => {
        v.addEventListener("mouseover", () => {
          v.style.backgroundColor = "lightgray";
        });
      });
      document.querySelectorAll("td.board_tit").forEach((v) => {
        v.addEventListener("mouseleave", () => {
          v.style.backgroundColor = "gainsboro";
        });
      });
    }
  }
  detailContainer.innerHTML = "";
  detailContainer.innerHTML = `
<button id="create">작성</button>
`;
  b_list = document.querySelector("button#create");
  b_list.addEventListener("click", () => {
    window.location = "/html/create.html";
  });
}

// 게시물 내용 보기(제목 클릭)
function showDetail(index) {
  const posts = getPosts();
  const post = posts[index];
  post.count = post.count + 1;
  savePosts(posts);
  const postsList = document.getElementById("content");
  const detailContainer = document.getElementById("footer");
  const div1 = (t) => `<div class='t_num'>${t}</div>`;
  const div2 = (t) => `<div class='t_title'>${t}</div>`;
  const div3 = (t) => `<div class='t_count'>${t}</div>`;
  const div4 = (t) => `<div class='t_create'>${t}</div>`;
  const div5 = (t) => `<div class='t_time'>${t}</div>`;
  const div6 = (t) => `<div class='t_sub'>${t}</div>`;
  const div7 = (t) => `<div class="t_a"><b>${t}</b></div>`;
  const div8 = (t) => `<div class="t_b">${t}</div>`;
  const div9 = (t) => `<div class='t_editTime'>${t}</div>`;
  if (post.editTime) {
    post.editTime = post.editTime;
  } else {
    post.editTime = "없음";
  }
  postsList.innerHTML = "";
  postsList.innerHTML =
    div1(div7("글번호") + div8(post.id)) +
    div2(div7("제목") + div8(post.title)) +
    div3(div7("조회수") + div8(post.count)) +
    div4(div7("작성자") + div8(post.name)) +
    div5(div7("작성일시") + div8(post.time)) +
    div9(div7("최종수정일시") + div8(post.editTime)) +
    div6(div7("내용") + div8(post.content));

  detailContainer.innerHTML = "";
  detailContainer.innerHTML = `
  <button class="btn btn_list" onclick="renderPosts()">목록</button>
  <button class="btn btn_edit" onclick="editPost(${index})">수정</button>
  <button class="btn btn_del" onclick="deletePost(${index})">삭제</button>
  <button class="btn btn_pre" onclick="showPreviousPost(${index})">이전 게시물</button>
  <button class="btn btn_next" onclick="showNextPost(${index})">다음 게시물</button>
  `;
  document.getElementById("footer").style.display = "flex";
  document.getElementsByClassName("btn_list")[0].style.cssText =
    "height: 35px; background-color : rgb(154, 212, 183); margin-top:0px; margin-right:0px;";
  document.getElementsByClassName("btn_edit")[0].style.cssText =
    "height: 35px; background-color : rgb(143, 206, 130); margin-top:0px; margin-right:0px;";
  document.getElementsByClassName("btn_del")[0].style.cssText =
    "height: 35px; background-color : rgb(82, 91, 211); margin-top:0px; margin-right:0px;";
  document.getElementsByClassName("btn_pre")[0].style.cssText =
    "height: 35px; background-color : rgb(221, 72, 105); margin-top:0px; margin-right:0px;";
  document.getElementsByClassName("btn_next")[0].style.cssText =
    "height: 35px; background-color : rgb(86, 144, 148); margin-top:0px; margin-right:0px; line-height:middle;";
  document
    .getElementsByClassName("btn_list")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_list")[0].style.cssText =
        "height: 35px; background-color : rgb(108, 172, 140); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_list")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_list")[0].style.cssText =
        "height: 35px; background-color : rgb(154, 212, 183); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_edit")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_edit")[0].style.cssText =
        "height: 35px; background-color : rgb(118, 172, 107); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_edit")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_edit")[0].style.cssText =
        "height: 35px; background-color : rgb(143, 206, 130); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_del")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_del")[0].style.cssText =
        "height: 35px; background-color : rgb(128, 136, 255); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_del")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_del")[0].style.cssText =
        "height: 35px; background-color : rgb(82, 91, 211); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_pre")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_pre")[0].style.cssText =
        "height: 35px; background-color : rgb(245, 104, 134); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_pre")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_pre")[0].style.cssText =
        "height: 35px; background-color : rgb(221, 72, 105); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_next")[0]
    .addEventListener("mouseover", () => {
      document.getElementsByClassName("btn_next")[0].style.cssText =
        "height: 35px; background-color : rgb(114, 192, 197); margin-top:0px; margin-right:0px;";
    });
  document
    .getElementsByClassName("btn_next")[0]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("btn_next")[0].style.cssText =
        "height: 35px; background-color : rgb(86, 144, 148); margin-top:0px; margin-right:0px;";
    });
}

// 이전 게시물 보기
function showPreviousPost(index) {
  const previousIndex = index - 1;
  if (previousIndex < 0) {
    alert("이전 글이 없습니다.");
  } else {
    showDetail(previousIndex);
  }
}

// 다음 게시물 보기
function showNextPost(index) {
  const posts = getPosts();
  const nextIndex = index + 1;
  if (nextIndex >= posts.length) {
    alert("다음 글이 없습니다.");
  } else {
    showDetail(nextIndex);
  }
}

// 게시글 삭제
function deletePost(index) {
  const posts = getPosts();
  posts.splice(index, 1);
  savePosts(posts);
  renderPosts();
}

// 초기 게시물 렌더링
renderPosts();
