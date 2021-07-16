//create a new list item with button add
function adding() {
    var li = document.createElement("li");
    var input = document.getElementById("myinput").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if(input === ''){
        alert("please enter title ");
    } else {
        document.getElementById("demo").appendChild(li);
    }
    document.getElementById("myinput").value = "";
}

var mylist = document.getElementsByTagName("LI");
for(i=0; i<mylist.length; i++){
    var close = document.createElement("close");
    var txt = document.createTextNode("\u00D7");
    close.className = "close" ;
    close.appendChild(txt);
    mylist[i].appendChild(close);
}
li.appendChild(mylist);

var hide = document.getElementsByClassName("close");
for(i=0; i<hide.length; i++) {
    hide[i].onclick = function(){
        var dep = this.parentElement;
        dep.style.display = "none";
    }
}

var list1 = document.querySelector('ul');
list1.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList1.toggle('checked');
  }
}, false);