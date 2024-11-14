console.log("asd")



function showDetails(element){

   document.getElementsByClassName("popupwindw")[0].classList.toggle("d-none");
   let name =element.parentElement.children[0].innerHTML;
   document.getElementsByClassName("popheader")[0].innerHTML=name;
    let cont = element.parentElement.children[1].innerHTML
    document.getElementsByClassName("popbody")[0].innerHTML=cont;

   
}

function closeDetails(element){
    element.parentElement.parentElement.classList.toggle("d-none");

}