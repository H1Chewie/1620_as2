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
  enableNewNote()
}

function getContent(){
  const textArea = document.getElementById('noteSpace')
  return textArea.value
}

function splitContent(){
  const unsplitContent = getContent()
  const splitContent = unsplitContent.split("\n")
  return splitContent
}

function getTitle(){
  const content = splitContent()
  return content[0]
}

function addNoteToArray(){
  var contentBody = ''
  splitNote = splitContent()
  splitNote.splice(0, 1)
  for (const i of splitNote){
    contentBody += i
    contentBody += '\n'
  }
  notes.push({
    title: getTitle(),
    noteBody:contentBody,
    id:notes.length + 1
  })
}

function saveNote(){
  addNoteToArray()
  clearArea()
}

function createNote (){
  emptyNote(template)
  disableNewNote()
  const saveBtn = document.querySelector('.Save')
  const deleteBtn = document.querySelector('.Delete')
  saveBtn.addEventListener('click', saveNote )
  deleteBtn.addEventListener('click', clearArea)
}

function disableNewNote(){
  const newNoteBtn = document.querySelector('.icons')
  newNoteBtn.removeEventListener('click', createNote)
}

function enableNewNote(){
  const newNoteBtn = document.querySelector('.icons')
  newNoteBtn.addEventListener('click', createNote)
}

function initialize(){
  enableNewNote()
}

initialize()