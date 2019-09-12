/////////////////////////////////////////
//this is for making the table colourful 
//-- this must be above the other because the 'comment-data' is not on page3, so the program stops running. there fore put the style stuff at the top.
let oddItem = document.querySelectorAll('.thingy2:nth-child(odd)')

oddItem.forEach(o => {
  o.style.backgroundColor = '#000000'
  o.style.color = '#ffffff'
  o.style.width = '100px'
})



////////////////////////////////////////////////
//This is the js to apllow for posting a list
const showList = (e) => { // in forms we need to pass in the e.defult, prevents from submitting to self
    e.preventDefault()
  
  const commentVal2 = document.getElementById('Item').value
  
  let p = document.createElement('p')
  const listSection = document.getElementById("listSection")
  const txtOutput2 = `Comment: ${commentVal2}`
  const trash = document.createElement('i') // makes a element called trash and is an icon 'i'
  trash.className = 'fas fa-trash' //makes the  element the picture we want
  p.appendChild(document.createTextNode(txtOutput2)) 
  p.append(trash) //appends trash icon to the end of p
  listSection.append(p)  
  
  }
  document.getElementById('listOfItems').addEventListener('submit', showList)

  document.addEventListener("click", (event) => {
    if(event.target.matches(".fa-trash")){
      event.target.closest("p").remove()
    }
  });