document.addEventListener("DOMContentLoaded", function () {

  /* ── MODAL ── */
  window.abrirModal = function (elemento) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("imgGrande");
    const modalVideo = document.getElementById("videoGrande");

    if (!modal || !modalImg || !modalVideo) return;

    modal.style.display = "flex";
    modalImg.style.display = "none";
    modalVideo.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;

    if (elemento.tagName === "IMG") {
      modalImg.src = elemento.src;
      modalImg.style.display = "block";
    }

    if (elemento.tagName === "VIDEO") {
      modalVideo.src = elemento.src;
      modalVideo.style.display = "block";
      modalVideo.play();
    }
  };

  window.cerrarModal = function () {
    const modal = document.getElementById("modal");
    const modalVideo = document.getElementById("videoGrande");

    if (!modal || !modalVideo) return;

    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
  };

  /* ── SLIDER ── */
  const track = document.getElementById("sliderTrack");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");

  if (track && btnPrev && btnNext) {

    let index = 0;

    function moverSlider(direccion) {
      const items = track.children;
      const total = items.length;

      index += direccion;
      if (index < 0) index = 0;
      if (index > total - 1) index = total - 1;

      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const ancho = items[0].offsetWidth + gap;
      track.style.transform = `translateX(-${index * ancho}px)`;
    }

    btnNext.addEventListener("click", () => moverSlider(1));
    btnPrev.addEventListener("click", () => moverSlider(-1));

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") moverSlider(1);
      if (e.key === "ArrowLeft") moverSlider(-1);
    });
  }

});