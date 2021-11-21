//some part of the code is derived from w3school
//initialize id's
const listDOM = document.querySelector("#list")
const addDOM = document.querySelector("#liveToastBtn")


//addDOM.addEventListener("click", newElement)

//adding x button to each row
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//when x button is pressed delete row
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // let myItems = JSON.parse(localStorage.getItem('listItems'))
    // console.log(i)
    // myItems.splice(i,1)
    // console.log(myItems)
    // localStorage.setItem("listItems", JSON.stringify(myItems))
  }
}

//if a row is done then check it
listDOM.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked');
  }
}, false);


//add element
function newElement(){
    let entry = document.querySelector('#task')
    if(entry.value == ""){
        $("#liveToastError").toast("show");
    }else{
        let liDOM = document.createElement('li')
        liDOM.innerHTML = entry.value
        listDOM.append(liDOM)
        entry.value = ""
        $("#liveToast").toast("show");

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        liDOM.appendChild(span);
        
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              let div = this.parentElement;
              div.style.display = "none";
        }
    }
       
        //update of local storage
        let myItems = JSON.parse(localStorage.getItem('listItems')) || [];
       
        myItems.push(liDOM.innerHTML.slice(0,liDOM.innerHTML.indexOf('<')))
        // console.log(myItems)
        localStorage.setItem("listItems", JSON.stringify(myItems))

        
    }
}

//for localstorage
let listItems = []

for (let i = 0; i < myNodelist.length; i++) {
   listItems.push(myNodelist[i].innerHTML.slice(0,myNodelist[i].innerHTML.indexOf('<')))
    
}
localStorage.setItem("listItems", JSON.stringify(listItems))

//localStorage.setItem("listItems", JSON.stringify(listItems))

