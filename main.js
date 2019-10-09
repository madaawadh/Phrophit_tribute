const article=document.querySelector("article");
const img=document.querySelector("#logo");
const st=document.querySelector("#st");
const nd=document.querySelector("#nd");
const bet1=document.querySelector("#bet1");
const bet2=document.querySelector("#bet2");
const rd=document.querySelector("#rd");
const th=document.querySelector("#th");
const info=document.querySelector(".info");
const close=document.querySelector("#close");
let closed=true;
window.addEventListener("scroll",()=>{
const y=window.scrollY;
if(y>40){
article.children[0].classList.add('animated', 'fadeIn');
article.children[1].classList.add('animated', 'fadeIn');
}
if(y>390){
    article.children[2].style.display="block";
    article.children[2].classList.add('animated', 'fadeIn');
    article.children[3].style.display="block";
    article.children[3].classList.add('animated', 'fadeIn');
    }
});
article.addEventListener('mouseover',(e)=>{
    const condtion=e.target==article.children[0]||e.target==article.children[1]||e.target==article.children[2]||e.target==article.children[3];
    if(condtion){
   e.target.style.height="365px";
   e.target.style.width="605";
   e.target.style.margin="1.8%";
}
     });
     article.addEventListener('mouseout',(e)=>{
    
       e.target.style.height="";
       e.target.style.width="";
       e.target.style.margin="";
         });
         function click(){
           if(closed){
   info.children[1].innerText=this.children[0].innerHTML;
   info.children[3].innerText=this.children[2].innerHTML;
   info.children[2].setAttribute("src", this.children[1].src);
   info.style.display="block";
   closed=false;
       }
            }
         article.children[0].addEventListener('click',click);
         article.children[1].addEventListener('click',click);
         article.children[2].addEventListener('click',click);
         article.children[3].addEventListener('click',click);
 close.addEventListener('click',()=>{
        info.style.display="none";
        closed=true;
             });
             const scroll = new SmoothScroll('a[href*="#"]',{
                 speed:1000
             });
window.addEventListener('load',()=>{

   img.classList.add('animated','slideInDown');
   st.classList.add('animated','slideInRight');
   nd.classList.add('animated','slideInRight');
   rd.classList.add('animated','slideInRight');
   bet1.classList.add('animated','slideInRight');
   bet2.classList.add('animated','slideInRight');
   th.classList.add('animated','slideInRight');
   setTimeout(()=>document.querySelector('a').classList.add('animated','bounceInDown'), 1000);
    });