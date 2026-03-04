const form = document.getElementById('orderForm');

form.addEventListener('submit', function(event) {
 event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const endereco = document.querySelector('input[name="address"]').value;
  const breadType = document.querySelector('select[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector('textarea[name="observations"]').value;

  let salad = '';
  document.querySelectorAll('input[name="salad"]:checked').forEach(function(checkbox) {
    salad += ' - ' + checkbox.value + '\n';
  });

  console.log('Nome:', name);
  console.log('Endereço:', endereco);
  console.log('Tipo de Pão:', breadType);
  console.log('Recheio Principal:', main);
  console.log('Salada:\n' + salad);
  console.log('Observações:', observations);

 
  form.reset();

});