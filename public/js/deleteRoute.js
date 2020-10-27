const deleteRoute = document.querySelectorAll('.delete')

deleteRoute.forEach((event) => {
  event.addEventListener('click', async (e) => {
    e.preventDefault()
    let endpoint = e.target.href
    let response = await fetch(endpoint, {
      method: 'delete',
    })
    window.location = '/'
  })
})
