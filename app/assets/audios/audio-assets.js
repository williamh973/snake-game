export function eatSong() {
  const eatSong = new Audio()
  eatSong.src = 'assets/audios/mp3/Eat.mp3';
  return eatSong;
};
export let theEatSong = eatSong('assets/audios/Eat.mp3');

export function addLifeSong() {
  const addLifeSong = new Audio()
  addLifeSong.src = 'assets/audios/mp3/Life+1.mp3';
  return addLifeSong;
};
export let theAddLifeSong = addLifeSong('assets/audios/mp3/Life+1.mp3');


export function substractLifeSong() {
    const lifeLost = new Audio()
    lifeLost.src = 'assets/audios/mp3/Life-1.mp3';
    return lifeLost;
};
export let theLifeLostSong = substractLifeSong('assets/audios/mp3/Life-1.mp3');

export function collapseSong() {
  const collapse = new Audio()
  collapse.src = 'assets/audios/mp3/collapse.mp3';
  return collapse;
};
export let theThemeSong = collapseSong('assets/audios/mp3/collapse.mp3');

export function menuClickSong() {
    const menuClick = new Audio()
    menuClick.src = 'assets/audios/mp3/SongFenetre.mp3';
    return menuClick;
};
export let theMenuClickSong = menuClickSong('assets/audios/mp3/SongFenetre.mp3');

export function gameOverSong() {
  const gameOverSong = new Audio()
  gameOverSong.src = 'assets/audios/mp3/game-over.mp3';
  return gameOverSong;
};
export let theGameOverSong = gameOverSong('assets/audios/mp3/game-over.mp3');