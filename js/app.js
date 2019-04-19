function ToggleMenu() {
    const $navbar = document.querySelector(".navbar-burger");
    $navbar.addEventListener("click", () => {
      const target = $navbar.dataset.target;
      const $target = document.getElementById(target);
  
      $navbar.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    })
  }

