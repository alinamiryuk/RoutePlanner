const editRoutes = document.querySelectorAll('.change');
editRoutes.forEach((event) => {
  event.addEventListener('click', async (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const { routeTitle, latitude, longitude, datetimeStart, datetimeFinish, description } = e.target;
    console.log(id);
    const response = await fetch(`/routes/edit/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        routeTitle,
        description,
        latitude, 
        longitude,
        datetimeStart,
        datetimeFinish,
      }),
    });
    const result = await response.json();
    if (result.success) {
      document.location=`/routes/show/${id}`;
    }
  });
});
