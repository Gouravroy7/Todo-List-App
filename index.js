var btn=document.getElementById("add-btn");
var mainList=document.getElementById("list-item");
var task =document.getElementById("enter-task");
var updtbtn = document.getElementById("updt-btn");
var delbtn =  document.getElementById("del-btn");

//console.log(updtbtn);

task.addEventListener('keyup',function(e){
   if(e.keyCode === 13){
     addItem();
 }
});

function  newNode(){
    var text=task.value;
    if(text.length==0)
    alert('Add a Todo task !!');
    else
    {
    var currentItem = document.createElement("li");
    var text=task.value;
    var itemText=document.createTextNode(text+"              ");
    
    var currButton = document.createElement("button")
    var del = document.createTextNode("Delete")
    currButton.appendChild(del)
    var currentcount=mainList.childElementCount;
    currentcount+=1;
    currButton.id="del"+currentcount;
    currButton.classList.add("del-item")
    currButton.setAttribute("onclick","somefun()")
    
    currentItem.appendChild(itemText)
       
    currentItem.appendChild(currButton)
    
    console.log(currentItem)
    return currentItem;
    }
}

function somefun(){
    var actvEle=document.activeElement;
     var parentElement = actvEle.parentElement;
     mainList.removeChild(parentElement);
}

function assignIdClass(currentItem){
    var currentcount=mainList.childElementCount;
    currentcount+=1;
    currentItem.id="item"+currentcount;
    var x=parseInt(currentItem.id.substr(4,currentItem.id.length-4));
    if(x%2==0)
    currentItem.classList.add("itemList2");
    else
    currentItem.classList.add("itemList2");

    return currentItem;
}
function addItem() {
    currentItem=newNode();
    //.log(currentItem);

    currentItem = assignIdClass(currentItem);
    //console.log(currentItem);
    mainList.appendChild(currentItem);
    //console.log(mainList);
    task.value="";
    
   }

btn.addEventListener('click',addItem);

updtbtn.addEventListener('click',function(){
 var oldNode=mainList.firstElementChild;
 if(oldNode!=undefined){
 var currentItem=newNode();
currentItem=assignIdClass(currentItem);
 //console.log(currentItem);
  mainList.replaceChild(currentItem,oldNode);
  task.value="";
 }
 else
 alert('No Task Present');
});

delbtn.addEventListener('click',function(){
    var oldNode=mainList.firstElementChild;
    if(oldNode!=undefined)
    mainList.removeChild(oldNode);
    else
    alert('No Task Present');
})
var delItem =  document.getElementsByClassName('del-item')


