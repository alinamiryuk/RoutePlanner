// ymaps.modules.require([
//   'MultiRouteColorizer'
// ], function (MultiRouteColorizer) {
//   // Создаем объект, раскрашивающий линии сегментов маршрута.
//   new MultiRouteColorizer(multiRoute);
// });
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
  let myMap = new ymaps.Map('map', {
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

// ymaps.ready(function () {  
//   let myMap = new ymaps.Map('map', {
//       center: [55.751574, 37.573856],
//       zoom: 9,
//       controls: []
//   });
  
//   let multiRoute = new ymaps.multiRouter.MultiRoute({
//       referencePoints: [
          
//       ]
//   }, {
  
//       // Опция editorDrawOver запрещает ставить точки поверх объектов карты.
//       // Это нужно для того, чтобы пользователи могли
//       // создавать промежуточные точки.
//       editorDrawOver: false,
//       // Опция editorMidPointsType задает тип промежуточных точек,
//       // которые будут создаваться на маршруте.
//       // "via" - будут создаваться транзитные точки;
//       // "way" - путевые точки.
//       editorMidPointsType: "via"
//   });

//   // Включение режима редактирования и задание его настроек.
//   multiRoute.editor.start({
//       // При включении опции addWayPoints пользователи смогут создавать
//       // путевые точки по клику на карте.
//      addWayPoints: true,
//      // При включении опции removeWayPoints пользователи смогут удалять
//      // путевые точки. 
//      // Для удаления точки нужно дважды кликнуть по ней.
//      removeWayPoints: true,
//      // При включении опции addMidPoints пользователи смогут создавать
//      // новые промежуточные точки.
//      // Чтобы создать промежуточную точку, нужно кликнуть по линии маршрута и,
//      // удерживая кнопку, переместить точку в нужную позицию на карте.
//      // Тип промежуточной точки (путевая или транзитная) задается в опции 
//      // editorMidPointsType
//      addMidPoints: true
//  });
//   // Добавление маршрута на карту.
//   myMap.geoObjects.add(multiRoute);
// });  
