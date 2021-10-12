function handleForm(event) {
  event.preventDefault()
  const name = document.getElementById('name').value
  const gender = document.getElementById('gender').value
  const age = Number(document.getElementById('age').value)
  console.log({name, age})
  fetch('url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, age, body})
  })
  .then(req => req.json)
  .then(data => console.log(data))
  .catch(err => console.log(err))
  alert('Welcome ' + name)
}