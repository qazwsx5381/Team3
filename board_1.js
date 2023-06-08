function localSave(edata) {
  memory = JSON.stringify(edata);
  localStorage.setItem("arr", memory);
}
let earr = localStorage.getItem("arr");
let edata = JSON.parse(earr);
// function reload() {
//   $("#content").load(window.location.href + " #content");
// }
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.board");
  const tr = (t) => `<tr class="setText">${t}</tr>`;
  const th1 = (t) => `<th class = "board_num">${t}</th>`;
  const th2 = (t) => `<th class = "board_tit">${t}</th>`;
  const th3 = (t) => `<th class = "board_create">${t}</th>`;
  const th4 = (t) => `<th class = "board_count">${t}</th>`;
  const th5 = (t) => `<th class = "board_time">${t}</th>`;
  const td1 = (t) => `<td class = "board_num">${t}</td>`;
  const td2 = (t) => `<td class = "board_tit">${t}</td>`;
  const td3 = (t) => `<td class = "board_create">${t}</td>`;
  const td4 = (t) => `<td class = "board_count">${t}</td>`;
  const td5 = (t) => `<td class = "board_time">${t}</td>`;
  const sel_tr = (t) => `<tr class='board_title'>${t}</tr>`;
  const div1 = (t) => `<div class='t_num'>${t}</div>`;
  const div2 = (t) => `<div class='t_title'>${t}</div>`;
  const div3 = (t) => `<div class='t_count'>${t}</div>`;
  const div4 = (t) => `<div class='t_create'>${t}</div>`;
  const div5 = (t) => `<div class='t_time'>${t}</div>`;
  const div6 = (t) => `<div class='t_sub'>${t}</div>`;
  const div7 = (t) => `<div class="t_a"><b>${t}</b></div>`;
  const div8 = (t) => `<div class="t_b">${t}</div>`;
  const button1 = (t) => `<button type="submit" class="list">${t}</button>`;
  const button2 = (t) => `<button type="submit" class="edit">${t}</button>`;
  const button3 = (t) => `<button type="submit" class="delete">${t}</button>`;
  const button4 = (t) => `<button type="submit" class="pre">${t}</button>`;
  const button5 = (t) => `<button type="submit" class="next">${t}</button>`;
  const button6 = (t) =>
    `<button type="submit" class="add" id="create">${t}</button>`;
  const button7 = (t) => `<button type="submit" class="cancel">${t}</button>`;
  b_list = document.querySelector("button#create");
  table.innerHTML = sel_tr(
    th1("글번호") +
      th2("제목") +
      th3("작성자") +
      th4("조회수") +
      th5("작성일자")
  );
  console.log(edata.length);
  for (let i = edata.length - 1; i >= 0; i--) {
    table.innerHTML += tr(
      td1(edata[i].id) +
        td2(edata[i].title_data) +
        td3(edata[i].name_data) +
        td4(edata[i].count_data) +
        td5(edata[i].time_data)
    );
  }
  b_list.addEventListener("click", () => {
    window.location = "/작성.html";
  });
  //   게시글 로드
  const t_sel1 = document.getElementsByClassName("board_num");
  const t_sel2 = document.getElementsByClassName("board_tit");
  const t_sel3 = document.querySelectorAll(".board_tit");
  const div_1 = document.querySelector("div.content");
  const div_2 = document.querySelector("div.search");
  const div_3 = document.querySelector("div.t_board");
  const div_4 = document.querySelector("div.footer");

  console.log(t_sel1);
  console.log(t_sel3);
  for (let i = 0; i < t_sel3.length; i++) {
    t_sel3[i].addEventListener("click", (event) => {
      edata.forEach((v, j) => {
        if (
          t_sel1[i].innerHTML == v.id &&
          t_sel2[i].innerHTML == v.title_data
        ) {
          console.log(edata[j]);
          a_count = edata[j].count_data + 1;
          div_1.removeChild(div_2);
          div_1.removeChild(div_3);
          div_1.innerHTML =
            div1(div7("글번호") + div8(edata[j].id)) +
            div2(div7("제목") + div8(edata[j].title_data)) +
            div3(div7("조회수") + div8(a_count)) +
            div4(div7("작성자") + div8(edata[j].name_data)) +
            div5(div7("작성일시") + div8(edata[j].time_data)) +
            div6(div7("내용") + div8(edata[j].sub_data));
          div_4.removeChild(b_list);
          div_4.innerHTML =
            button1("목록") +
            button2("수정") +
            button3("삭제") +
            button4("이전글") +
            button5("다음글");
          edata[j].count_data = a_count;
          localSave(edata);
          // console.log(edata);
          // console.log(t_btn1);

          const t_btn1 = document.querySelector("button.list");
          const t_btn2 = document.querySelector("button.edit");
          const t_btn3 = document.querySelector("button.delete");
          const t_btn4 = document.querySelector("button.pre");
          const t_btn5 = document.querySelector("button.next");
          const sel_div1 = document.querySelector("div.t_num");
          const sel_div2 = document.querySelector("div.t_title");
          const sel_div3 = document.querySelector("div.t_count");
          const sel_div4 = document.querySelector("div.t_create");
          const sel_div5 = document.querySelector("div.t_time");
          const sel_div6 = document.querySelector("div.t_sub");
          t_btn1.addEventListener("click", (event) => {
            div_1.removeChild(sel_div1);
            div_1.removeChild(sel_div2);
            div_1.removeChild(sel_div3);
            div_1.removeChild(sel_div4);
            div_1.removeChild(sel_div5);
            div_1.removeChild(sel_div6);
            const table_create = (t) => `<table class="board">${t}</table>`;
            const tr = (t) => `<tr class="setText">${t}</tr>`;
            const th1 = (t) => `<th class = "board_num">${t}</th>`;
            const th2 = (t) => `<th class = "board_tit">${t}</th>`;
            const th3 = (t) => `<th class = "board_create">${t}</th>`;
            const th4 = (t) => `<th class = "board_count">${t}</th>`;
            const th5 = (t) => `<th class = "board_time">${t}</th>`;
            const td1 = (t) => `<td class = "board_num">${t}</td>`;
            const td2 = (t) => `<td class = "board_tit">${t}</td>`;
            const td3 = (t) => `<td class = "board_create">${t}</td>`;
            const td4 = (t) => `<td class = "board_count">${t}</td>`;
            const td5 = (t) => `<td class = "board_time">${t}</td>`;
            const search = (t) =>
              `<input type="text" name="" id="search" value="검색어를 입력하세요" />`;
            const t_dv = (t) => `<div class="t_board">${t}</div>`;
            const dv_sch = (t) => `<div class="search">${t}</div>`;
            div_1.innerHTML =
              dv_sch(search()) +
              t_dv(
                table_create(
                  sel_tr(
                    th1("글번호") +
                      th2("제목") +
                      th3("작성자") +
                      th4("조회수") +
                      th5("작성일자")
                  )
                )
              );
            const table = document.querySelector("table.board");
            // table.innerHTML=sel_tr(th1('글번호')+th2('제목')+th3('작성자')+th4('조회수')+th5('작성일자'));
            for (let i = edata.length - 1; i >= 0; i--) {
              table.innerHTML += tr(
                td1(edata[i].id) +
                  td2(edata[i].title_data) +
                  td3(edata[i].name_data) +
                  td4(edata[i].count_data) +
                  td5(edata[i].time_data)
              );
            }
            div_4.removeChild(t_btn1);
            div_4.removeChild(t_btn2);
            div_4.removeChild(t_btn3);
            div_4.removeChild(t_btn4);
            div_4.removeChild(t_btn5);
            div_4.innerHTML = button6("등록");
            location.reload();
          });
          t_btn3.addEventListener("click", () => {
            edata.splice(edata.indexOf(v), 1);
            localSave(edata);
            div_1.removeChild(sel_div1);
            div_1.removeChild(sel_div2);
            div_1.removeChild(sel_div3);
            div_1.removeChild(sel_div4);
            div_1.removeChild(sel_div5);
            div_1.removeChild(sel_div6);
            const table_create = (t) => `<table class="board">${t}</table>`;
            const tr = (t) => `<tr class="setText">${t}</tr>`;
            const th1 = (t) => `<th class = "board_num">${t}</th>`;
            const th2 = (t) => `<th class = "board_tit">${t}</th>`;
            const th3 = (t) => `<th class = "board_create">${t}</th>`;
            const th4 = (t) => `<th class = "board_count">${t}</th>`;
            const th5 = (t) => `<th class = "board_time">${t}</th>`;
            const td1 = (t) => `<td class = "board_num">${t}</td>`;
            const td2 = (t) => `<td class = "board_tit">${t}</td>`;
            const td3 = (t) => `<td class = "board_create">${t}</td>`;
            const td4 = (t) => `<td class = "board_count">${t}</td>`;
            const td5 = (t) => `<td class = "board_time">${t}</td>`;
            const search = (t) =>
              `<input type="text" name="" id="search" value="검색어를 입력하세요" />`;
            const t_dv = (t) => `<div class="t_board">${t}</div>`;
            const dv_sch = (t) => `<div class="search">${t}</div>`;
            div_1.innerHTML =
              dv_sch(search()) +
              t_dv(
                table_create(
                  sel_tr(
                    th1("글번호") +
                      th2("제목") +
                      th3("작성자") +
                      th4("조회수") +
                      th5("작성일자")
                  )
                )
              );
            const table = document.querySelector("table.board");
            // table.innerHTML=sel_tr(th1('글번호')+th2('제목')+th3('작성자')+th4('조회수')+th5('작성일자'));
            for (let i = edata.length - 1; i >= 0; i--) {
              table.innerHTML += tr(
                td1(edata[i].id) +
                  td2(edata[i].title_data) +
                  td3(edata[i].name_data) +
                  td4(edata[i].count_data) +
                  td5(edata[i].time_data)
              );
            }
            div_4.removeChild(t_btn1);
            div_4.removeChild(t_btn2);
            div_4.removeChild(t_btn3);
            div_4.removeChild(t_btn4);
            div_4.removeChild(t_btn5);
            div_4.innerHTML = button6("등록");
            location.reload();
          });
          t_btn4.addEventListener("click", (event) => {
            if (edata[j - 1] === undefined) {
              alert("이전 글이 없습니다.");
            } else {
              // window.location.reload();
              const div_1 = document.querySelector("div.content");
              const div_4 = document.querySelector("div#footer");
              const div_5 = document.querySelector("div.container");
              const div1 = (t) => `<div class='t_num'>${t}</div>`;
              const div2 = (t) => `<div class='t_title'>${t}</div>`;
              const div3 = (t) => `<div class='t_count'>${t}</div>`;
              const div4 = (t) => `<div class='t_create'>${t}</div>`;
              const div5 = (t) => `<div class='t_time'>${t}</div>`;
              const div6 = (t) => `<div class='t_sub'>${t}</div>`;
              const div7 = (t) => `<div class="t_a"><b>${t}</b></div>`;
              const div8 = (t) => `<div class="t_b">${t}</div>`;
              const div9 = (t) => `<div class="footer" id="footer">${t}</div>`;
              const div10 = (t) =>
                `<div class="content" id="content">${t}</div>`;
              const button1 = (t) =>
                `<button type="submit" class="list">${t}</button>`;
              const button2 = (t) =>
                `<button type="submit" class="edit">${t}</button>`;
              const button3 = (t) =>
                `<button type="submit" class="delete">${t}</button>`;
              const button4 = (t) =>
                `<button type="submit" class="pre">${t}</button>`;
              const button5 = (t) =>
                `<button type="submit" class="next">${t}</button>`;
              // function reload() {
              //   $("#content").load(window.location.href + " #content");
              // }
              function footer() {
                $("#footer").load(window.location.href + " #footer");
              }
              a_count = edata[j - 1].count_data;
              // reload();
              // location.reload();
              function remake() {
                // div_1.removeChild(div_2);
                // div_1.removeChild(div_3);
                div_1.remove();
                div_4.remove();
                div_5.innerHTML += div10(
                  div1(div7("글번호") + div8(edata[j - 1].id)) +
                    div2(div7("제목") + div8(edata[j - 1].title_data)) +
                    div3(div7("조회수") + div8(a_count)) +
                    div4(div7("작성자") + div8(edata[j - 1].name_data)) +
                    div5(div7("작성일시") + div8(edata[j - 1].time_data)) +
                    div6(div7("내용") + div8(edata[j - 1].sub_data))
                );
                footer();
                div_4.remove();
                div_5.innerHTML += div9(
                  button1("목록") +
                    button2("수정") +
                    button3("삭제") +
                    button4("이전글") +
                    button5("다음글")
                );
              }
              remake();
            }
          });
          t_btn5.addEventListener("click", (event) => {
            if (edata[j + 1] === undefined) {
              alert("다음 글이 없습니다.");
            } else {
              // window.location.reload();
              const div_1 = document.querySelector("div.content");
              const div_4 = document.querySelector("div#footer");
              const div_5 = document.querySelector("div.container");
              const div1 = (t) => `<div class='t_num'>${t}</div>`;
              const div2 = (t) => `<div class='t_title'>${t}</div>`;
              const div3 = (t) => `<div class='t_count'>${t}</div>`;
              const div4 = (t) => `<div class='t_create'>${t}</div>`;
              const div5 = (t) => `<div class='t_time'>${t}</div>`;
              const div6 = (t) => `<div class='t_sub'>${t}</div>`;
              const div7 = (t) => `<div class="t_a"><b>${t}</b></div>`;
              const div8 = (t) => `<div class="t_b">${t}</div>`;
              const div9 = (t) => `<div class="footer" id="footer">${t}</div>`;
              const div10 = (t) =>
                `<div class="content" id="content">${t}</div>`;
              const button1 = (t) =>
                `<button type="submit" class="list" id="list">${t}</button>`;
              const button2 = (t) =>
                `<button type="submit" class="edit" id="edit">${t}</button>`;
              const button3 = (t) =>
                `<button type="submit" class="delete" id="delete">${t}</button>`;
              const button4 = (t) =>
                `<button type="submit" class="pre" id="pre">${t}</button>`;
              const button5 = (t) =>
                `<button type="submit" class="next" id="next">${t}</button>`;
              // function reload() {
              //   $("#content").load(window.location.href + " #content");
              // }
              function footer() {
                $("#footer").load(window.location.href + " #footer");
              }
              function div_footer() {
                $("#list").load(window.location.href + " #list");
                $("#edit").load(window.location.href + " #edit");
                $("#delete").load(window.location.href + " #delete");
                $("#pre").load(window.location.href + " #pre");
                $("#next").load(window.location.href + " #next");
              }
              a_count = edata[j + 1].count_data;
              // reload();
              // location.reload();
              function remake() {
                // div_1.removeChild(div_2);
                // div_1.removeChild(div_3);
                div_1.remove();
                div_4.remove();
                div_5.innerHTML += div10(
                  div1(div7("글번호") + div8(edata[j + 1].id)) +
                    div2(div7("제목") + div8(edata[j + 1].title_data)) +
                    div3(div7("조회수") + div8(a_count)) +
                    div4(div7("작성자") + div8(edata[j + 1].name_data)) +
                    div5(div7("작성일시") + div8(edata[j + 1].time_data)) +
                    div6(div7("내용") + div8(edata[j + 1].sub_data))
                );
                footer();
                div_4.remove();
                div_footer();
                div_5.innerHTML += div9(
                  button1("목록") +
                    button2("수정") +
                    button3("삭제") +
                    button4("이전글") +
                    button5("다음글")
                );
                // div_5.innerHTML += div9(
                //   button1("목록") +
                //     button2("수정") +
                //     button3("삭제") +
                //     button4("이전글") +
                //     button5("다음글")
                // );
              }
              remake();
            }
          });
        }
      });
    });
  }
});
