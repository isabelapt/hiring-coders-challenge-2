const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let endereco = document.getElementById('endereco').value;
  let quantidade = document.getElementById('quantidade').value;
  let id = document.getElementById('id').value;
  let data = {
    nome,
    email,
    endereco,
    quantidade,
    id
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)



  let content = document.getElementById('content')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>pronto</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})