function localSave(edata) {
    memory = JSON.stringify(edata);
    localStorage.setItem("arr", memory);
  }
  let earr = localStorage.getItem("arr");
    let edata = JSON.parse(earr)
document.addEventListener('DOMContentLoaded',()=>{
    const table = document.querySelector('table.board')
    const tr = (t)=>`<tr class="setText">${t}</tr>`
    const th1 = (t)=>`<th class = "board_num">${t}</th>`
    const th2 = (t)=>`<th class = "board_tit">${t}</th>`
    const th3 = (t)=>`<th class = "board_create">${t}</th>`
    const th4 = (t)=>`<th class = "board_count">${t}</th>`
    const th5 = (t)=>`<th class = "board_time">${t}</th>`
    const td1 = (t)=>`<td class = "board_num">${t}</td>`
    const td2 = (t)=>`<td class = "board_tit">${t}</td>`
    const td3 = (t)=>`<td class = "board_create">${t}</td>`
    const td4 = (t)=>`<td class = "board_count">${t}</td>`
    const td5 = (t)=>`<td class = "board_time">${t}</td>`
    const sel_tr = (t)=>`<tr class='board_title'>${t}</tr>`
    b_list = document.querySelector('button#create')
    table.innerHTML=sel_tr(th1('글번호')+th2('제목')+th3('작성자')+th4('조회수')+th5('작성일자'));
    console.log(edata.length)
    for(let i=edata.length-1; i>=0; i--){
        table.innerHTML+=tr(td1(edata[i].id)+td2(edata[i].title_data)+td3(edata[i].name_data)+td4(edata[i].count_data)+td5(edata[i].time_data));
    }
    b_list.addEventListener("click", () => {
        window.location = '/작성.html';
      });
      const t_sel1 = document.querySelectorAll("td.board_num")
      const t_sel2 = document.querySelectorAll("td.board_tit")
    t_sel[0].addEventListener('click',(event)=>{
        console.log(event.currentTarget)
    })
    console.log(t_sel)
})