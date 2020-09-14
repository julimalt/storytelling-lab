const spinTheReels = () => {
  console.log("girar");

  let spinner1 = document.getElementById("reel1");
  let spinner2 = document.getElementById("reel2");
  let spinner3 = document.getElementById("reel3");
  let spinner4 = document.getElementById("reel4");
  let spinner5 = document.getElementById("reel5");
  let pos1 = -10;
  let pos2 = -5;
  let pos3 = -25;
  let pos4 = -35;
  let pos5 = -15;

  let resultado1 = obtenerNumeroRandom();
  let resultado2 = obtenerNumeroRandom();
  let resultado3 = obtenerNumeroRandom();
  let resultado4 = obtenerNumeroRandom();
  let resultado5 = obtenerNumeroRandom();
  console.log("resultado ", resultado1);
  console.log("resultado ", resultado2);
  console.log("resultado ", resultado3);
  console.log("resultado ", resultado4);
  console.log("resultado ", resultado5);

  let id1 = setInterval(row1, 1);
  let id2 = setInterval(row2, 1);
  let id3 = setInterval(row3, 1);
  let id4 = setInterval(row4, 1);
  let id5 = setInterval(row5, 1);

  function row1() {
    if (pos1 <= resultado1) {
      clearInterval(id1);
    } else {
      pos1 -= 5;
      spinner1.style.top = pos1 + "vh";
    }
  }

  function row2() {
    setTimeout(function row2time() {
      if (pos2 <= resultado2) {
        clearInterval(id2);
      } else {
        pos2 -= 5;
        spinner2.style.top = pos2 + "vh";
      }
    }, 20);
  }

  function row3() {
    setTimeout(function row3time() {
      if (pos3 <= resultado3) {
        clearInterval(id3);
      } else {
        pos3 -= 5;
        spinner3.style.top = pos3 + "vh";
      }
    }, 40);
  }

  function row4() {
    setTimeout(function row4time() {
      if (pos4 <= resultado4) {
        clearInterval(id4);
      } else {
        pos4 -= 5;
        spinner4.style.top = pos4 + "vh";
      }
    }, 60);
  }

  function row5() {
    setTimeout(function row5time() {
      if (pos5 <= resultado5) {
        clearInterval(id5);
      } else {
        pos5 -= 5;
        spinner5.style.top = pos5 + "vh";
      }
    }, 80);
  }
};
const obtenerNumeroRandom = () => {
  const posiblesResultados = [
    "-35",
    "-70",
    "-100",
    "-135",
    "-170",
    "-205",
    "-240",
    "-270",
    "-305",
    "-340",
    "-375",
    // "-660",
    // "-457.5",
    // "-50",
    // "-85",
    // "-135",
    // "-170",
    // "-220",
    // "-595",
    // "-105",
    // "-505",
    // "-50",
    // "-25",
    // "-255",
    // "-510",
    // "-510",
    // "-510",
    // "-457.5",
    // "-457.5",
    // "-215",
    // "-95",
    // "-315",
    // "-75",
    // "-145",
    // "-140",
    // "-640",
    // "-235",
    // "-230",
    // "-85",
  ];

  return posiblesResultados[
    Math.floor(Math.random() * posiblesResultados.length)
  ];
};
