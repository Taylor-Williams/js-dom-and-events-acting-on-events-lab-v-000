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

}
function addNewElementAsLi(){

}
function addNewLiOnClick(){

}
function clearEmployeeListOnLinkClick(){

}
