<%*
const months = [
  "января","февраля","марта","апреля","мая","июня",
  "июля","августа","сентября","октября","ноября","декабря"
];

const now = new Date();
const day = now.getDate();
const month = months[now.getMonth()];
const year = now.getFullYear();

const dateStr = `${day} ${month} ${year}`;
const selected = tp.file.selection() || "Текст поста";

/* Генерируем HTML с курсором в заголовке */
tR += `<div class="feed-post">
  <div class="feed-title">Заголовок</div>
  <div class="feed-content">
${selected}
  </div>
  <div class="feed-date">${dateStr}</div>
</div><br>`;
%>