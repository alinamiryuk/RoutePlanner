const editRoutes = document.querySelectorAll('.edit-route');
editRoutes.forEach((event) => {
  event.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const { routeTitle, latitude, longitude, datetimeStart, datetimeFinish, description, action } = e.target;
    console.log(routeTitle, latitude, longitude, datetimeStart, datetimeFinish, description);
    console.log(id);
    const response = await fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        routeTitle: routeTitle.value,
      description: description.value,
      latitude: latitude.value, 
      longitude: longitude.value,
      datetimeStart: datetimeStart.value,
      datetimeFinish: datetimeFinish.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      document.location=`/routes/show/${id}`;
    }
  });
});
