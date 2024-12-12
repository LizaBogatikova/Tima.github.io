// Получаем таблицу
const table = document.querySelector('.tablica');

// Добавляем новую строку в таблицу
document.getElementById('add-game').addEventListener('click', () => {
  const game = prompt('Введите название игры:');
  if (game) {
    const newRow = table.insertRow();
    newRow.innerHTML = `<th class="t-first">${game}</th>`;
  } else {
    alert('Пожалуйста, введите название игры.');
  }
});

// Сортируем игры по названию
document.getElementById('sort-games').addEventListener('click', () => {
  const rows = Array.from(table.rows).slice(1); // Пропускаем заголовок таблицы
  rows.sort((a, b) => {
    const nameA = a.cells[0].innerText.toLowerCase();
    const nameB = b.cells[0].innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Перестраиваем таблицу
  rows.forEach(row => table.appendChild(row));
});