const toggleBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click',function(){
    var hasClass = sideBar.classList.contains('show-sidebar');
    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar');
    // }
    // else{
    //     sideBar.classList.add('show-sidebar'); 
    // }
    if(!hasClass){
        sideBar.classList.add('show-sidebar'); 
    }

});
closeBtn.addEventListener('click',function(){
        sideBar.classList.remove('show-sidebar'); 
});
