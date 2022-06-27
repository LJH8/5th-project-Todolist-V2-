let date = document.querySelector(".write-date");
let todo = document.querySelector(".write-todo");
let item = document.querySelector(".item-list");

let resultdate = [];
let resulttodo = [];


function addtodo() {
    
  let dateValue = date.value;
  let todoValue = {
    name: todo.value,
    id: uid(),
    status: false,
  };

  if (dateValue == 0 || todoValue.name == 0) {
    alert("값을 입력해주세요");
  } else {
    resultdate.push(dateValue);
    resulttodo.push(todoValue);

    render();

    date.value = ""
    todo.value = ""
    date.focus();
    
  }
}

function render() {
  let result = "";

  for (let i = 0; i < resultdate.length; i++) {
    if (resulttodo[i].status == true) {
      result += `<div class="item-list">
    <div class="date"><strong> ${resultdate[i]}</strong></div>
    <div class="item textdeco">${resulttodo[i].name}</div>
    <div class="icon">
      <i class="fa-solid fa-check" id = "check" onclick="check('${resulttodo[i].id}')"></i><i class="fa-solid fa-eraser" id= "delete" onclick="remove('${resulttodo[i].id}')"></i>
    </div>
  </div>`;
    } else {
      result += `<div class="item-list">
    <div class="date"><strong> ${resultdate[i]}</strong></div>
    <div class="item">${resulttodo[i].name}</div>
    <div class="icon">
      <i class="fa-solid fa-check" id = "check" onclick="check('${resulttodo[i].id}')">
      </i>
      <i class="fa-solid fa-eraser" id= "delete" onclick="remove('${resulttodo[i].id}')">
      </i>
    </div>
  </div>`;
    }
  }
  document.querySelector(".content").innerHTML = result;
}

const check = (id) => {
  for (let i = 0; i < resulttodo.length; i++) {
    if (resulttodo[i].id == id) {
      resulttodo[i].status = !resulttodo[i].status;
     
    }
  }

  render();
};

const remove = (id) =>{
    for (let i = 0; i < resulttodo.length; i++) {
        if (resulttodo[i].id == id) {
          resulttodo.splice(i,1)
          resultdate.splice(i,1)
        }
      }
    
     render()
}

function uid() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map((A) => A.toString(36))
      .join("")
  ).replace(/\./g, "");
}

function enterkey() {
    if(window.event.keyCode == 13)
    {
        addtodo();
        
    }
}

    

    
