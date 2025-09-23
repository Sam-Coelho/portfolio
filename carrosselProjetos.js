let projetos = [
    { titulo: "Pintura a oleo Sapo", 
        datainicio: "20210713", 
        relevancia: 2, 
        competencias: ["TrabalhoArtesanal"], 
        tipo: ["Ilustracao"], 
        pagina: "sapo.html" ,
        imag: "froguie.png" 
    },
    { titulo: "Jinx Ilustração", 
        datainicio: "20250727", 
        relevancia: 3, 
        competencias: ["IlustracaoDigital"], 
        tipo: ["Ilustracao"], 
        pagina: "jinx.html" ,
        imag: "jinxprint.png" 
    },
    { titulo: "Fotografia, digitalização e exploração cromaticao", 
        datainicio: "20230220", 
        relevancia: 3, 
        competencias: ["IlustracaoDigital","Fotografia"], 
        tipo: ["Ilustracao"], 
        pagina: "FotografiaDigitalizacao.html" ,
        imag: "monocromatico rozinha.jpg" 
    },
    { titulo: "Autoretrato", 
        datainicio: "20230501", 
        relevancia: 3, 
        competencias: ["IlustracaoDigital"], 
        tipo: ["Ilustracao"], 
        pagina: "autoretrato.html" ,
        imag: "autoretratoDC.png" 
    },
    { titulo: "Ilustração semi-abstrata e narrativa visual de historia infantil", 
        datainicio: "20230225", 
        relevancia: 1, 
        competencias: ["IlustracaoDigital","Paginacao"], 
        tipo: ["Design"], 
        pagina: "narrativa.html" ,
        imag: "3porquinhos.png" 
    },
    { titulo: "Identidade Visual Museu", 
        datainicio: "20230315", 
        relevancia: 3, 
        competencias: ["Tipografia","DesignIV","DesenhoVetorial"], 
        tipo: ["Design"], 
        pagina: "Identidadevisualmuseu.html" ,
        imag: "museu.png" 
    },
    { titulo: "Pictogramas sobre criaturas miticas que representam paises", 
        datainicio: "20230415", 
        relevancia: 2, 
        competencias: ["DesignIV","DesenhoVetorial"], 
        tipo: ["Design"], 
        pagina: "pictogramas.html" ,
        imag: "pics.png" 
    },
    { titulo: "Paginação do Indice do livro 'The grand Design'", 
        datainicio: "20231001", 
        relevancia: 4, 
        competencias: ["Tipografia","Paginacao"], 
        tipo: ["Design"], 
        pagina: "indice.html" ,
        imag: "indicepag1.png" 
    },
    { titulo: "Paginação primeiro capitulo do livro 'The grand Design'", 
        datainicio: "20231015", 
        relevancia: 4, 
        competencias: ["Tipografia","Paginacao"], 
        tipo: ["Design"], 
        pagina: "livroTp.html" ,
        imag: "livrotitle.png" 
    },
    { titulo: "Paginação jornal", 
        datainicio: "20231125", 
        relevancia: 2, 
        competencias: ["Tipografia","Paginacao"], 
        tipo: ["Design"], 
        pagina: "jornal.html" ,
        imag: "paginaJornal.png" 
    }
    /*,
    { titulo: "Construção 3d Ponte", 
        datainicio: "20240210", 
        relevancia: 3, 
        competencias: ["Prossessing","Modelação3D"], 
        tipo: ["Programacao"], 
        pagina: "" ,
        imag: "cgpontimg.png" 
    },
    { titulo: "Modelação e animação 3d barco", 
        datainicio: "20240420", 
        relevancia: 1, 
        competencias: ["Modelação3D"], 
        tipo: ["AudioVisual"], 
        pagina: "" ,
        imag: "barco.png" 
    },
    { titulo: "Recensão sobre Arte contemporanea", 
        datainicio: "20250112", 
        relevancia: 5, 
        competencias: [], 
        tipo: [], 
        pagina: "" ,
        imag: "fotografiaJMC.png" 
    },
    { titulo: "Cartazes sobre a obra 'Crimes exemplares'", 
        datainicio: "20241010", 
        relevancia: 4, 
        competencias: ["IlustracaoDigital","Tipografia","Paginacao"], 
        tipo: ["Design","Ilustracao"], 
        pagina: "" ,
        imag: "cartazarroz.png" 
    },
    { titulo: "Desenvolvimento de um site de aluger de carros", 
        datainicio: "20241010", 
        relevancia: 4, 
        competencias: ["WebD","Tipografia","Dados"], 
        tipo: ["WebDesign","Programacao"], 
        pagina: "" ,
        imag: "User-SelectCar.png" 
    },
    { titulo: "Animação Shapeless", 
        datainicio: "20250310", 
        relevancia: 5, 
        competencias: ["IlustracaoDigital","Tipografia","Animação"], 
        tipo: ["AudioVisual"], 
        pagina: "" ,
        imag: "shapeless.gif" 
    },
    { titulo: "Trabalho como artista independente", 
        datainicio: "20240610", 
        relevancia: 5, 
        competencias: ["IlustracaoDigital","DesignIV"], 
        tipo: ["Design","Ilustracao"], 
        pagina: "" ,
        imag: "stickers.png" 
    },
    { titulo: "Redesign e reestruturação do site da Farmacia Luz Marques", 
        datainicio: "20250710", 
        relevancia: 4, 
        competencias: ["Paginacao","DesignIV"], 
        tipo: ["Design","WebDesign"], 
        pagina: "" ,
        imag: "farmacia.png" 
    }*/ 
];


//adicionar o formds
const form = document.getElementById('filtros');
let filtrado1 = projetos;
let fitrado = filtrado1;
let ordeanado = filtrado1.sort((a, b) => b.relevancia - a.relevancia);

// elementos HTML
const p1I = document.getElementById("p1Img");
const p1H3 = document.getElementById("p1H3");
const p1A = document.getElementById("p1A");
const setaE = document.getElementById("Esq");
const setaD = document.getElementById("Dir");

let Num = 0;

// Função para atualizar conteúdo
function atualizarProjeto() {
    if(ordeanado.length > 0){
        p1I.src = "imagens/" + ordeanado[Num].imag; // verifique se a propriedade é 'imag'
        p1H3.textContent = ordeanado[Num].titulo;
        p1A.href = ordeanado[Num].pagina;
        p1A.textContent = "Ver projeto";
    }
}

// Mostrar o primeiro projeto ao carregar
atualizarProjeto();

// Filtrar e ordenar
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const filtroComp = document.getElementById('filtro').value;
    const filtroTipo = document.getElementById('filtro2').value;
    const ordem = document.getElementById('ordenar').value;

    filtrado1 = filtroComp !== "" ? projetos.filter(d => d.competencias.includes(filtroComp)) : projetos;
    let filtrado = filtrado1;
    if(filtroTipo !== "") {
        filtrado = filtrado.filter(d => d.tipo.includes(filtroTipo));
    }

    if(ordem === "datainicio") {
        ordeanado = filtrado.sort((a, b) => new Date(b.datainicio) - new Date(a.datainicio));
    } else {
        ordeanado = filtrado.sort((a, b) => b.relevancia - a.relevancia);
    }

    Num = 0; // sempre mostrar o primeiro projeto do filtro
    atualizarProjeto();
});

// Navegação
setaD.addEventListener("click", () => {
    if (Num < ordeanado.length - 1) Num++;
    atualizarProjeto();
});
setaE.addEventListener("click", () => {
    if (Num > 0) Num--;
    atualizarProjeto();
});