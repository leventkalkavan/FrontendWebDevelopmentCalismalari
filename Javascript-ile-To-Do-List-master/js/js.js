var crossItem = document.getElementsByTagName("li");
console.log(crossItem.length);
for(var i=0; i<crossItem.length;i++)
{
  
    var span= document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    crossItem[i].appendChild(span);
    span.classList.add("close");
}

var close = document.getElementsByClassName("close");
for(var i=0;i<close.length;i++)
{
    close[i].onclick = function () 
    {
        var div = this.parentElement;
        div.style.display = "none";
    };

}

var ul = document.querySelector("ul");
ul.addEventListener("click", function (e) 
{
    if(e.target.tagName === "LI") {e.target.classList.toggle("checked");}
} );

function newElement() 
{
    var li= document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length===0)
    {
        $(".error").toast("show");

    }else
    {
        $(".success").toast("show");
        document.getElementById("list").appendChild(li);
      
    }
    document.getElementById("task").value = ""; 
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    li.appendChild(span);

    for (var i=0; i<close.length;i++)
    {
        close[i].onclick = function () 
        {
            var div= this.parentElement;
            div.style.display="none";
        };
    }

}