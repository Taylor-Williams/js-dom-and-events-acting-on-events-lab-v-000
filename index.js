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
  var node = document.createElement("LI");
  var textnode = document.createTextNode(retrieveEmployeeInformation);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  document.getElementsByClassName('employee-list').append(`<li>${retrieveEmployeeInformation}</li>`)
}
function addNewLiOnClick(){

}
function clearEmployeeListOnLinkClick(){

}
