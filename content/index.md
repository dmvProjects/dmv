---
title: Начало
tags:
date: 2025-11-11
---
![[Pios.png]]

Дневник обычного человека. Заметки, мысли, бред.
Не знаю, как ты сюда попал. Почитай, если хочешь.

<div class="audio-row">
  <audio controls>
    <source src="/files/Жил-был-пёс_-_Ой_там_на_гори.mp3" type="audio/mpeg">
    Аудиоплеер не поддерживается <code>audio</code>.
  </audio>
  <span class="audio-title">Ой, там на горі (Жил-был пёс OST)</span>
</div>

---
<div style="display: flex; justify-content: center; gap: 8em; margin: 1em 0; font-size: 1.2em;">
  <a href="/%D0%92%D1%81%D1%91,-%D1%87%D1%82%D0%BE-%D0%B5%D1%81%D1%82%D1%8C/">Всё, что есть</a>
  <a href="tags/">Теги</a>
</div>


<script>
document.addEventListener("DOMContentLoaded", () => {
    // Ищем div по классу
    const original = document.querySelector('.recent-notes.desktop-only');

    if (original) {
        // Клонируем элемент со всем содержимым
        const clone = original.cloneNode(true);

        // Куда вставляем (пример — в конец body)
        document.body.appendChild(clone);

        // Или вставка в определённый контейнер:
        // document.querySelector('.center').prepend(clone);
    }
});
</script>
