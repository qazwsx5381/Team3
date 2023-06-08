function localSave(edata) {
    memory = JSON.stringify(edata);
    localStorage.setItem("arr", memory);
  }
  function timestamp(){
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
}
  // function getData(edata) {
  //   const getInput = document.querySelector("input");
  //   edata.forEach((v) => {
  //     list(v, v.id);
  //   });
  //   getInput.value = null;
  //   inputData = null;
  // }
  nid = 0;
  document.addEventListener("DOMContentLoaded", () => {
    b_title = document.getElementById("board_title");
    b_sub = document.getElementById("board_sub");
    b_name = document.getElementById("board_name");
    b_submit = document.getElementById("board_submit");
    b_list = document.getElementById("board_list");
    let titleData = "";
    let subData = "";
    let nameData = "";

    b_title.addEventListener("change", (event) => {
      titleData = event.currentTarget.value;
      console.log(titleData);
    });
    b_sub.addEventListener("change", (event) => {
      subData = event.currentTarget.value;
      console.log(subData);
    });
    b_name.addEventListener("change", (event) => {
      nameData = event.currentTarget.value;
      console.log(nameData);
    });

    let earr = localStorage.getItem("arr");
    let edata = JSON.parse(earr) ?? []; // null, undefined
    // if (edata) getData(edata);
    console.log(edata)
    let nid = 0;
    b_submit.addEventListener("click", () => {
      todo();
      window.location = '/게시판.html';
    });
    b_list.addEventListener("click", () => {
      window.location = '/게시판.html';
    });
    function todo() {
      if (titleData) {
        if(edata.length===0){
        edata.push({
          id: 1,
          title_data: titleData,
          sub_data: subData,
          name_data: nameData,
          time_data: timestamp(),
          count_data: 0
        });
        } else {
          edata.push({
            id: (edata[edata.length-1].id)*1+1,
            title_data: titleData,
            sub_data: subData,
            name_data: nameData,
            time_data: timestamp(),
            count_data: 0
          });
        }
        localSave(edata);
        titleData = "";
        subData = "";
        nameData = "";
      }
    }
    console.log(nid);
  });
  // function savedata() {}