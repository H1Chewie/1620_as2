const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const template = `
<textarea id = 'noteSpace' rows="50" cols="100">Note</textarea>
<button class="Save">Save</button>
<button class="Delete">Delete</button>
`

function emptyNote(temp){
  const noteArea = document.querySelector('.write-note-area')
  noteArea.innerHTML = temp
}

function clearArea(){
  const areaToClear = document.querySelector('.write-note-area')
  areaToClear.innerHTML = ''
}

function createNote (){
  emptyNote(template)
  deleteBtn = document.querySelector('.Delete')
  deleteBtn.addEventListener('click', clearArea)
}

function enableNewNote(){
  const newNoteBtn = document.querySelector('.icons')
  newNoteBtn.addEventListener('click', createNote)
}

function initialize(){
  enableNewNote()
}

initialize()