---
title: Начало
tags:
date: 2025-11-11
---
Дневник обычного человека. Заметки, мысли, бред.
Не знаю, как ты сюда попал. Почитай, если хочешь.


<div style="display: flex; justify-content: center; gap: 8em; margin: 1em 0;">
  <a href="/%D0%92%D1%81%D1%91,-%D1%87%D1%82%D0%BE-%D0%B5%D1%81%D1%82%D1%8C/">Всё, что есть</a>
  <a href="tags/">Теги</a>
</div>

<a href="/files/Жил-был-пёс_-_Ой_там_на_гори.mp3"> Ой, там на горе </a>
<audio controls>
  <source src="/files/Жил-был-пёс_-_Ой_там_на_гори.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>


<div class="simple-player">
  <button id="play-btn">▶ Play</button>
</div>

<audio id="audio" src="/files/Жил-был-пёс_-_Ой_там_на_гори.mp3"></audio>

<script>
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-btn");

  playBtn.onclick = () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸ Pause";
    } else {
      audio.pause();
      playBtn.textContent = "▶ Play";
    }
  };
</script>

![[Pios.png]]