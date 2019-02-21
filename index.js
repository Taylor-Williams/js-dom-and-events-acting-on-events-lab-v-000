function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const inputs = document.getElementsByTagName('input');

for(var i=0; i<inputs.length; i++){
  if(inputs[i].getAttribute('type')=='button'){
    const subBut = inputs[i]
  }
}
function retrieveEmployeeInformation(){
  return document.getElementsByName('name')[0].value
}
function addNewElementAsLi(){
  var node = document.createElement("LI")
  var textnode = document.createTextNode(retrieveEmployeeInformation())
  node.appendChild(textnode)
  document.getElementsByClassName('employee-list')[0].appendChild(node)
}
function addNewLiOnClick(){
  document.querySelector('form').addEventListener('submit', function(event){
    addNewElementAsLi()
    event = ""
  })
}
function clearEmployeeListOnLinkClick(){

}
