/* <div>
<div class="title">
    <div class="cricle"></div>
    <h2>To do</h2>
    <P class="count">5</P>
</div>
<div class="list">
<div class="listItem">
    <p>[loan-managment]-add card componet</p> 
    <select value="" id="">
     <option value="">To do</option>
     <option value="">in progress</option>
     <option value="">Done</option>
     <option value="">Blocked</option>
    </select>

     <img src="./trash.svg" alt="">

      
</div>
<div class="listItem">
    <p>[loan-managment]-add card componet</p> 
    <select value="" id="">
     <option value="">To do</option>
     <option value="">in progress</option>
     <option value="">Done</option>
     <option value="">Blocked</option>
    </select>

     <img src="./trash.svg" alt="">

      
</div>
</div>
</div>

<div>
<div class="title"></div>
<div class="list"></div>
</div>
<div>
<div class="title"></div>
<div class="list"></div>
</div>
<div>
<div class="title"></div>
<div class="list"></div>
</div> */ 
const parentarray=[{
    title:"To do",
    count:5,
    color:"white"
},{
    title:"In progress",
    count:5,
    color:"yellow"
},{
    title:"Done",
    count:5,
    color:"green"
},
{
    title:"bloked",
    count:5,
    color:"red"
}]

 function addList(title,color,count){
    const parent=document.getElementById("parentcontainer")
    let mainDiv=document.createElement("div");
    mainDiv.setAttribute("class","maindiv");
    ////
let titlediv=document.createComment("div");
titlediv.setAttribute("class","title")
mainDiv.appendChild(titlediv)

let h2=document.createComment("h2");
h2.innerText=title
///
let count=document.createElement("div")
count.setAttribute("class","count")
count.innerHTML=count;
mainDiv.appendChild(count)

//
let cricle=document.createElement("div")
cricle.setAttribute("class","cricle")
cricle.style.backgroundColor=color
mainDiv.appendChild(cricle);
parent.appendChild(mainDiv)
 }
 parentarray.map((item)=>{
    addList(item.title,item.color,item.count);
 })