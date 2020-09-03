form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { routeTitle, latitude, longitude, datetimeStart, datetimeFinish, description } = req.body;
      const response = await fetch('/routes/new', {
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
    document.location=`/`;
    //document.location=`/routes/show/${id}`;
  }
});
