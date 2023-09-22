  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Este evento evita que el formulario se envíe por defecto
  
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const data = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      fechaNacimiento: document.getElementById('fechaNacimiento').value
    };
  
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // A traves de esta ejecucion va a mostrarme la respuesta en el servidor
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  