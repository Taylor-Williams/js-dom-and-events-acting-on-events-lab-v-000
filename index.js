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
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}
function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}
function clearEmployeeListOnLinkClick(){

}
