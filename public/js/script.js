function activateButton(clickedButton) {
            const buttons = document.querySelectorAll('.bt_hold button');
            buttons.forEach(button => {
                button.classList.remove('active');
                button.classList.add('default');
            });
            clickedButton.classList.remove('default');
            clickedButton.classList.add('active');
        }
        
            
function activateButton(button) {
  const filter = button.getAttribute('data-filter'); // Получаем значение data-filter
  const items = document.querySelectorAll('.items div'); // Все элементы галереи

  // Убираем класс active у всех кнопок и добавляем только для текущей
  const buttons = document.querySelectorAll('.bt_hold button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Фильтруем элементы по категории
  items.forEach(item => {
    const categories = item.getAttribute('data-category').split(' '); // Разделяем категории по пробелу
    if (categories.includes(filter)) {
      item.classList.remove('hiddena'); // Показываем элемент
    } else {
      item.classList.add('hiddena'); // Скрываем элемент
    }
  });
} 
   
    
    
    
   function toggleText() {
    var text = document.querySelector('.hidden-text');
    var button = document.querySelector('.gradient-button');
    var strip = document.querySelector('.strip');

    // Показать/скрыть текст
    if (text.classList.contains('show')) {
        text.classList.remove('show');
        strip.classList.remove('expand');
    } else {
        text.classList.add('show');
        strip.classList.add('expand');
    }

    // Повернуть кнопку
    button.classList.toggle('rotate');
} 
    
    function toggleTexta() {
    var text = document.querySelector('.hidden-text2');
    var button = document.querySelector('.gradient-buttona');
    var strip = document.querySelector('.strip2');
    // Показать/скрыть текст
    if (text.classList.contains('show')) {
        text.classList.remove('show');
        strip.classList.remove('expand');
    } else {
        text.classList.add('show');
        strip.classList.add('expand');
    }

    // Повернуть кнопку
    button.classList.toggle('rotate');
}      
    
    function toggleTexta1() {
    var text = document.querySelector('.hidden-text3');
    var button = document.querySelector('.gradient-buttona1');
    var strip = document.querySelector('.strip3');
    // Показать/скрыть текст
    if (text.classList.contains('show')) {
        text.classList.remove('show');
        strip.classList.remove('expand');
    } else {
        text.classList.add('show');
        strip.classList.add('expand');
    }

    // Повернуть кнопку
    button.classList.toggle('rotate');
}   
    
    function toggleTexta1a() {
    var text = document.querySelector('.hidden-text4');
    var button = document.querySelector('.gradient-buttona1a');

    button.classList.toggle('rotate');
    // Показать/скрыть текст
    if (text.classList.contains('show')) {
        text.classList.remove('show');
        strip.classList.remove('expand');
    } else {
        text.classList.add('show');
        strip.classList.add('expand');
    }

    // Повернуть кнопку
}  
       


    // Показать всплывающее окно через 5 секунд
    window.onload = function() {
      setTimeout(function() {
        document.getElementById('popup').style.display = 'flex';
        document.querySelectorAll('body *:not(#popup):not(#popup *)').forEach((el) => {
            el.classList.add('blurred');
        });
      }, 5000);
    };

    // Закрыть всплывающее окно
    function closePopup() {
      document.getElementById('popup').style.display = 'none';
      document.querySelectorAll('.blurred').forEach((el) => {
        el.classList.remove('blurred');
      });
    }

