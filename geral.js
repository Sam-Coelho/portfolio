// aranha a mexer canto
const aranha = document.getElementById("aranhacanto");
aranha.addEventListener("mouseover", () => {
    aranha.src = "imagens/imagensfixed/ararnhagif.gif";
  });
  aranha.addEventListener("mouseout", () => {
    aranha.src = "imagens/imagensfixed/aranha.png";
  });

  // diminuir imagens quando scroll para dar menos enface
  const cogumelo= document.getElementById("cogumelo");

  window.addEventListener("scroll", () => {
    // Pega a quantidade de scroll
    let scrollY = window.scrollY;
  
    // Calcula novo tamanho (nunca menor que 80px)
    let newSize = Math.max(60 - scrollY / 40, 40);
    let newSize1 = Math.max(45 - scrollY / 30, 20);
  
    cogumelo.style.height = newSize + "%";
    aranha.style.width= newSize1 +"%";
  });

