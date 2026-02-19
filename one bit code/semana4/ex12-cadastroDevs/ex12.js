let contador = 0; // controla quantidade de tecnologias

function cadastro(event) {
  event.preventDefault();

  const section = document.getElementById('newInputs');

  // container para organizar cada tecnologia
  const div = document.createElement('div');
  div.setAttribute('class', 'bloco-tech');

  // input texto
  const inputTech = document.createElement('input');
  inputTech.type = 'text';
  inputTech.name = 'tech';
  inputTech.placeholder = 'Tecnologia';

  div.appendChild(inputTech);
  div.appendChild(document.createElement('br'));

  // nome único para os radios
  const nomeRadio = 'nivel' + contador;

  // radio 1
  const inputRadio1 = document.createElement('input');
  inputRadio1.type = 'radio';
  inputRadio1.name = nomeRadio;
  inputRadio1.value = '0-2 anos';

  const label1 = document.createElement('label');
  label1.textContent = '0-2 anos';

  div.appendChild(inputRadio1);
  div.appendChild(label1);

  // radio 2
  const inputRadio2 = document.createElement('input');
  inputRadio2.type = 'radio';
  inputRadio2.name = nomeRadio;
  inputRadio2.value = '3-4 anos';

  const label2 = document.createElement('label');
  label2.textContent = '3-4 anos';

  div.appendChild(inputRadio2);
  div.appendChild(label2);

  // radio 3
  const inputRadio3 = document.createElement('input');
  inputRadio3.type = 'radio';
  inputRadio3.name = nomeRadio;
  inputRadio3.value = '5+ anos';

  const label3 = document.createElement('label');
  label3.textContent = '5+ anos';

  div.appendChild(inputRadio3);
  div.appendChild(label3);

  // botão remover
  const btn = document.createElement('button');
  btn.textContent = 'Remover tecnologia';

  btn.addEventListener('click', function () {
    section.removeChild(div);
  });

  div.appendChild(document.createElement('br'));
  div.appendChild(btn);

  section.appendChild(div);

  contador++; // aumenta para o próximo grupo
}

document.getElementById('btn-submit').addEventListener('click', function (ev) {
  ev.preventDefault();

  const name = document.getElementById('name').value;
  console.log("Nome:", name);

  const techs = document.querySelectorAll('input[name="tech"]');

  for (let i = 0; i < techs.length; i++) {
    const tecnologia = techs[i].value;

    const radioSelecionado = document.querySelector(
      'input[name="nivel' + i + '"]:checked'
    );

    let nivel = '';

    if (radioSelecionado) {
      nivel = radioSelecionado.value;
    } else {
      nivel = 'Nenhum selecionado';
    }

    console.log("Tecnologia:", tecnologia);
    console.log("Experiência:", nivel);
    }
  
    // Limpar os campos
document.getElementById('name').value = '';
const allTechs = document.querySelectorAll('input[name="tech"]');
allTechs.forEach(function (tech) {
  tech.value = '';
});

const allRadios = document.querySelectorAll('input[type="radio"]');
allRadios.forEach(function (radio) {
  radio.checked = false;
});

});
