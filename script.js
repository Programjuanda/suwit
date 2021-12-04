function getHasil(comp, player) {
  if (player == comp) return 'SERI';
  if (player == 'rock') return comp == 'scissors' ? 'MENANG' : 'KALAH';
  if (player == 'scissors') return comp == 'paper' ? 'MENANG' : 'KALAH';
  if (player == 'paper') return comp == 'rock' ? 'MENANG' : 'KALAH';
}

function putar() {
  const komputer = document.querySelector('.komputer i');

  let acak = setInterval(function () {
    const pilKom = ['rock', 'scissors', 'paper'];
    let i = Math.floor(Math.random() * pilKom.length);
    komputer.setAttribute('class', `fas fa-hand-${pilKom[i]}`);
    return;
  }, 100);
  setTimeout(function () {
    clearInterval(acak);
  }, 1000);
}

function pilih(input) {
  let comp = ['rock', 'scissors', 'paper'];
  let index = Math.floor(Math.random() * comp.length);
  let hasilComp = document.querySelector('.komputer i');
  let hasil = document.querySelector('.hasil p');

  putar();

  setTimeout(function () {
    hasilComp.setAttribute('class', `fas fa-hand-${comp[index]}`);
    let pilComp = comp[index];
    let pilPlayer = input;
    hasil.innerHTML = getHasil(pilComp, pilPlayer);
  }, 1000);

  //   console.log(`komputer : ${pilComp}`);
  //   console.log(`player : ${pilPlayer}`);
  //   console.log(`hasil : ${hasil}`);
}
