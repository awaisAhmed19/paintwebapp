const menubutton=document.querySelector('.menubar-btn');

menubutton.addEventListener('click',()=>{
    menubutton.classList.add(".menubar button:focus")
});


const menubtnList=document.querySelectorAll('.menubar-btn');
menubtnList.forEach((menubtn)=>{
    menubtn.addEventListener('click',()=>{
        document.querySelector('.menubar button:focus')?.classList.remove('.menubar button:focus');
        menubtn.classList.add('.menubar button:focus');
    });
});
