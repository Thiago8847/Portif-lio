
/*Botão de voltar ao topo */
window.onscroll = function () {
    const btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }