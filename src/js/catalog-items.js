document.addEventListener('DOMContentLoaded', function () {
  var listItems = document.querySelectorAll('.catalog-list-item');
  var showMoreBtn = document.getElementById('showMoreBtn');

  // Визначаємо скільки елементів відображати на мобільному пристрої
  var mobileItemsToShow = 4;
  // Встановлення прапорця, чи відображаються усі елементи
  var allItemsShown = false;

  // Функція для показу елементів
  function showItems() {
    var itemsToShow = allItemsShown ? listItems.length : mobileItemsToShow;
    for (var i = 0; i < listItems.length; i++) {
      if (i < itemsToShow) {
        listItems[i].classList.add('visible');
      } else {
        listItems[i].classList.remove('visible');
      }
    }
  }

  // Ініціювання відображення елементів
  showItems();

  // Проведення процесу натискання на кнопку "Show more"
  showMoreBtn.addEventListener('click', function () {
    allItemsShown = !allItemsShown;
    showItems();
    // Зміна текста кнопки в залежності від того, чи відображені всі елементи
    showMoreBtn.textContent = allItemsShown ? 'Show less' : 'Show more';
  });
});
