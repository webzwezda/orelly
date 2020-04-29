# Запуск тольько после загрузки страницы



``` javascript
// только после загрузки страницы

function init() {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = 'Red Alert: hit by phaser fire!';
    planet.setAttribute("class", "redtext");
}

/*
Функция init задается свойству windows.onload
Обратите внимание: после имени функции круглые скобки не ставятся ! Мы не вызываем функцию, а просто связываем ее со свойством windows.onload
 */

window.onload = init;
```

