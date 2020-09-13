const spinTheReels = () => {
  console.log("girar");
  //Spin The Reels - Where will the reels land?
  //   var resultArray = [
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "fullDiamonds",
  //     "fullDollarSign",
  //     "line1Toilet",
  //     "line2Poop",
  //     "line3Bags",
  //     "line4Angry",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "lose",
  //     "line1Toilet",
  //     "line1Toilet",
  //     "line3Bags",
  //     "line3Bags",
  //     "line4Angry",
  //     "lose",
  //   ];
  //   var randResult = resultArray[Math.floor(Math.random() * resultArray.length)];

  //   switch (randResult) {
  //     case "fullDollarSign":
  //       rand1 = -660;
  //       rand2 = -660;
  //       rand3 = -660;
  //       rand4 = -660;
  //       rand5 = -660;
  //       break;
  //     case "fullDiamonds":
  //       rand1 = -457.5;
  //       rand2 = -457.5;
  //       rand3 = -457.5;
  //       rand4 = -457.5;
  //       rand5 = -457.5;
  //       var winResult = "fullDiamonds";
  //       break;
  //     case "line1Toilet":
  //       rand1 = -50;
  //       rand2 = -85;
  //       rand3 = -135;
  //       rand4 = -170;
  //       rand5 = -220;
  //       break;
  //     case "line2Poop":
  //       rand1 = -220;
  //       rand2 = -255;
  //       rand3 = -305;
  //       rand4 = -355;
  //       rand5 = -390;
  //       break;
  //     case "line3Bags":
  //       rand1 = -390;
  //       rand2 = -595;
  //       rand3 = -50;
  //       rand4 = -510;
  //       rand5 = -560;
  //       break;
  //     case "line4Angry":
  //       rand1 = -85;
  //       rand2 = -390;
  //       rand3 = -48.5;
  //       rand4 = -85;
  //       rand5 = -85;
  //       break;
  //     case "lose":
  //       rand1 = Math.floor(Math.random() * -700);
  //       rand2 = Math.floor(Math.random() * -700);
  //       rand3 = Math.floor(Math.random() * -700);
  //       rand4 = Math.floor(Math.random() * -700);
  //       rand5 = Math.floor(Math.random() * -700);
  //       break;
  //     default:
  //       rand1 = -5;
  //       rand2 = -10;
  //       rand3 = -15;
  //       rand4 = -20;
  //       rand5 = -25;
  //       break;
  //   }

  //   rand1;
  //   rand2;
  //   rand3;
  //   rand4;
  //   rand5;

  //Spin The Reels - How do they spin??
  //////////////////////////////////////////////////////////////////

  const spinner1 = document.getElementById("reel1");
  const spinner2 = document.getElementById("reel2");
  const spinner3 = document.getElementById("reel3");
  const spinner4 = document.getElementById("reel4");
  const spinner5 = document.getElementById("reel5");
  let pos1 = -10;
  let pos2 = -5;
  let pos3 = -25;
  let pos4 = -35;
  let pos5 = -15;

  const resultado1 = obtenerNumeroRandom();
  const resultado2 = obtenerNumeroRandom();
  const resultado3 = obtenerNumeroRandom();
  const resultado4 = obtenerNumeroRandom();
  const resultado5 = obtenerNumeroRandom();

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
