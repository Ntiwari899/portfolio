// <!-- ==================================CREATE Auto navbar scrolling====================================== -->
const section=document.querySelectorAll('section')
const navlink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navlink.forEach(links=>{
                links.classlist.remover('active')
                document.querySelector('header nav a[href*='+id+']').classlist.add('active')
            })
        }
    })
    // <!-- ==================================CREATE A STICKY NAV BAR====================================== -->
 var header=document.querySelector('header')
header.classlist.toggle("sticky",window.scroll>100)
menubar.classlist.remove('bx-x')
navbar.classlist.remove('active')
};
  // <!-- ==================================CREATE A TOOGLE CHANGER====================================== -->
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('#navbar')
menubar,onclick= ()=>{
    menubar.classlist.toogle('bx-x')
    navbar.classlist.toogle('active')
}

// <!-- ==================================CREATE A TEXT CHANGER====================================== -->
var type=new Typed('.textline',{
  strings:['Frontend Developer','Blogger','Youtube'],
  typespeed:100,
  backspeed:100,
  backDelay:1000,
  loop:true
})