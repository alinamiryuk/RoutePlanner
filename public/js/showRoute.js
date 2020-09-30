let coord = document.querySelector('.hidden-coord').innerHTML.trim().split(',');
console.log(coord);
let arrayRefPoints = [];
for (let i = 0; i < coord.length/2; i++) {
let elem = [];
  elem.push(Number(coord[i]));
  elem.push(Number(coord[i + coord.length/2]));
arrayRefPoints.push(elem)
};
console.log(arrayRefPoints);

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: arrayRefPoints[0],
    zoom: 10,
    controls: [],
  });
  console.log(arrayRefPoints);
  let multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: arrayRefPoints,
    },
    {
      editorDrawOver: false,
      editorMidPointsType: 'way',
    }
  );

  multiRoute.editor.start({
    addWayPoints: true,
    removeWayPoints: true,
    addMidPoints: true,
  });
  
  myMap.geoObjects.add(multiRoute);

  
  // document.body.addEventListener('click',()=>{
   
  //   console.log (multiRoute.getActiveRoute());
  // })

  //let adress = myMap.geoObjects.multiRoute.get(0).properties.get('referencePoints').getAll();
  //console.log(myMap);
  // console.log(myMap.geoObjects);
  // console.log(myMap.geoObjects.multiRoute);
},

);

