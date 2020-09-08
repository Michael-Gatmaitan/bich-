(function () {
  let btn = document.getElementsByClassName("button")[0];
  let mc = document.getElementsByClassName("modal-container")[0];
  let mbtn = document.getElementsByClassName("modal-btn")[0];

  let opened = false;

  let changer = _ => {
    opened = !opened;
    
    let openModal = _ => {
      mc.style.pointerEvents = "auto";
      mc.style.opacity = 1;
    }

    let closeModal = _ => {
      mc.style.pointerEvents = "none";
      mc.style.opacity = 0;
    }

    opened ? openModal() : closeModal();
  }

  btn.addEventListener('click', changer);
  mbtn.addEventListener('click', changer);
}())