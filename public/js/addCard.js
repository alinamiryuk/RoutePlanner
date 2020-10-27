let lanForm = document.querySelector('.latitude')
let lonForm = document.querySelector('.longitude')

let arrLan = []
let arrLon = []

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: [59.943701, 30.360101],
    zoom: 10,
    controls: [],
  })

  let multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: [],
    },
    {
      editorDrawOver: false,
      editorMidPointsType: 'way',
    }
  )

  multiRoute.editor.start({
    addWayPoints: true,
    removeWayPoints: true,
    addMidPoints: true,
  })
  multiRoute.events.add('update', function (event) {
    console.log(multiRoute.getBounds()[1])
    arrLan.push(multiRoute.getBounds()[1][0])
    arrLon.push(multiRoute.getBounds()[1][1])
    lanForm.value = arrLan
    lonForm.value = arrLon
    console.log(arrLan)
    console.log(lanForm.value)
  })
  myMap.geoObjects.add(multiRoute)
})
