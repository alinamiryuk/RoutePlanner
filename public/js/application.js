// ymaps.ready(init);
// function init() {
//   let myMap = new ymaps.Map('map', {
//     center: [59.943701, 30.360101],
//     zoom: 10,
//   });

//   //можно для каждого маршрута прогон делать
// //   myMap.panTo([
// //     [59.943701, 30.360101],
// //     [55.751574, 37.573856],
// //     [43.134091, 131.928478]
// // ])

// }
//ymaps.router.addon.editor.get(myMap)

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.943701, 30.360101],
      zoom: 10,
      // Добавим панель маршрутизации.
      controls: ['routePanelControl']
  });

  let control = myMap.controls.get('routePanelControl');

  // Зададим состояние панели для построения машрутов.
  control.routePanel.state.set({
      // Тип маршрутизации.
      type: 'masstransit',
      // Выключим возможность задавать пункт отправления в поле ввода.
      fromEnabled: true,
      // Адрес или координаты пункта отправления.
      //from: 'Москва, Льва Толстого 16',
      // Включим возможность задавать пункт назначения в поле ввода.
      toEnabled: true
      // Адрес или координаты пункта назначения.
      //to: 'Петербург'
  });

  // Зададим опции панели для построения машрутов.
  control.routePanel.options.set({
      // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
      allowSwitch: false,
      // Включим определение адреса по координатам клика.
      // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
      reverseGeocoding: true,
      // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
      types: { auto: true, }
  });

  // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
  let switchPointsButton = new ymaps.control.Button({
      data: {content: "Поменять местами", title: "Поменять точки местами"},
      options: {selectOnClick: false, maxWidth: 160}
  });
  // Объявляем обработчик для кнопки.
  switchPointsButton.events.add('click', function () {
      // Меняет местами начальную и конечную точки маршрута.
      control.routePanel.switchPoints();
  });
  myMap.controls.add(switchPointsButton);
});
