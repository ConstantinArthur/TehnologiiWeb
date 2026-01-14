let oddCollection=document.querySelectorAll("tbody tr:nth-child(odd)");
let firstRow=document.querySelector("tbody tr:first-child");
let lastRow=document.querySelector("tbody tr:last-child");

oddCollection.forEach(x => x.style.backgroundColor="magenta");
lastRow.style.backgroundColor="blue";
firstRow.style.backgroundColor="green";