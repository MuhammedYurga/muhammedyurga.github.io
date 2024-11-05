function modalAc(modalId) {
    var myModal = new bootstrap.Modal(document.getElementById(modalId), {
      backdrop: 'static'
    });
    myModal.show();
  }

function kime_danis_navbar(){
  var navBox = document.getElementById("mini-navbar");
  var navBtn = document.getElementById("nav-btn");
  if(navBox.classList.contains("d-none")){
    navBox.classList.remove("d-none");
    if(!navBtn.classList.contains("active")){
      navBtn.classList.add("active");
    }
  }
  else{
    navBox.classList.add("d-none");
    if(navBtn.classList.contains("active")){
      navBtn.classList.remove("active");
    }
  }
}