function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.loadScreen) {
    gameInstance.loadScreen = document.getElementById('loadScreen');
  }

  if (!gameInstance.progress) {
    gameInstance.progress = document.getElementById("progress");
    gameInstance.progress.empty = document.getElementById("empty");
    gameInstance.progress.full = document.getElementById("full");
  }
  gameInstance.progress.full.style.width = (100 * progress) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  if (progress == 1)
    gameInstance.loadScreen.style.display = gameInstance.progress.style.display = "none";
}