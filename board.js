function localSave(edata) {
    memory = JSON.stringify(edata);
    localStorage.setItem("arr", memory);
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
    let getTime = moment().format("YYYY MMMM Do, h:mm:ss a");
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
    let nid = 0;
    b_submit.addEventListener("click", () => {
      todo();
    });
    function todo() {
      if (titleData) {
        nid++;
        console.log(nid);
        edata.push({
          id: nid,
          title_data: titleData,
          sub_data: subData,
          name_data: nameData,
          time_data: getTime,
        });
        localSave(edata);
        titleData = "";
        subData = "";
        nameData = "";
        // if (edata) {
        //   list(edata[edata.length - 1], cnt);
        // }
      }
    }
    console.log(nid);
  });
  // function savedata() {}