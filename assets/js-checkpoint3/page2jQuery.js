$(_ =>{

  // const ajaxJsonBtn = document.getElementById('ajax-json-btn')
  // const ajaxJsonBtn = document.getElementById('ajax-json-btn')
  const ajaxJsonBtn = $('#ajax-json-btn')

  ////////////////////////////////////////////////
  //This is the js to apllow for posting a comment
  const showComment = () => {
      
    //grabbing the value from the text area whitch has an id of comment-id
    const commentVal = $('#comment-input').val()
    console.log(commentVal)
    let p = $("<p></p>").text(`Comment: ${commentVal}  Date Modifyed: ${document.lastModified}`)
    console.log(p)

    const commentSection = $("#commentSection")
    commentSection.append(p)  

    $('#comment-input').val('')
  }
  $('#comment-data').on('click', showComment)

////////////////
//AJAX


const jsonOutput = $("#jsonOutput")

const loadJson = () => {
  console.log("loading json")
  $.get('idAndName.json', p =>{
    $.each(p, k => { //need to have 2 values imputed 
      console.log(k, p[k]) //so that you can itterate throught the index. Use if console is returning numbers and you want things.
      const parent = createoutPutDiv( p[k])  
      jsonOutput.append(parent) 
              
    }) 
  })
  
}
ajaxJsonBtn.on('click', loadJson) //use the const. don't need the $("#ajaxJsonBtn").on as you have already made the const. so just use it

const createoutPutDiv = (p) =>{
  //creating an element div called parent 
  const parent = document.createElement("div")
  parent.style.paddingBottom = "2vw" // just a bit of pading at the bottom of each entry
  parent.style.textIndent = "3vw"
  const keys =  Object.keys(p) // taking each object in p and assigning it to keys -- this is what allows us not to specify the definitive values(ie ID) there for make the json file scalible
  
  //for each is a function so you need to writ like tis to itterate through the keys(each id/name)
  //items is just each id or firstName
  keys.forEach(item => {
    const val = p[item]
    const div = document.createElement("div")
    //appaend the name of the item as well as the value in keys
    div.innerHTML = `${item}: ${val}`
    parent.append(div)
  })
  
  return parent
}

});
