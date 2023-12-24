let notesButton = document.querySelector("#createButton");
let noteBox = document.querySelector(".notesBox");
let notesContainer = document.querySelectorAll(".notesCont");


function showStorage(){
  noteBox.innerHTML = localStorage.getItem("notes")
}
showStorage()

function updateStorage() {
  localStorage.setItem("notes", noteBox.innerHTML);
}

notesButton.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  img.src = "images/delete.png";

  inputBox.setAttribute("contenteditable", "true");
  inputBox.appendChild(img);
  inputBox.classList.add("notesCont");

  noteBox.appendChild(inputBox);
});

noteBox.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName === "P"){

    notes = document.querySelectorAll(".notesCont")
    notes.forEach(nt=>{
     nt.onkeyup = ()=>{
      updateStorage()
     }
    })
  }
});

document.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak")
    event.preventDefault()
  }
})