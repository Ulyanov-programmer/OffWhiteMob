import{returnScrollbarWidth,isNullOrWhiteSpaces}from"./general.js";export default class FsNavmenu{constructor(e,t){if(isNullOrWhiteSpaces(e,t))throw"[FSNAVMENU] Incorrect selectors for button or menu!";FsNavmenu.burgerBtn=document.querySelector(e),FsNavmenu.fsNavmenu=document.querySelector(t),FsNavmenu.fsNavmenu.firstElementChild.style.marginTop=`${FsNavmenu.header.clientHeight}px`,FsNavmenu.burgerBtn.addEventListener("click",this.showOrHideFullscreenNav)}showOrHideFullscreenNav(e){let t=returnScrollbarWidth();void 0!==FsNavmenu.fsNavmenu&&(FsNavmenu.burgerBtn.classList.toggle("active"),document.body.classList.toggle("scroll-block"),document.body.style.paddingRight=`${t}px`,FsNavmenu.header.style.paddingRight=`${t}px`,FsNavmenu.fsNavmenu.classList.toggle("active"))}}FsNavmenu.header=document.querySelector("header");