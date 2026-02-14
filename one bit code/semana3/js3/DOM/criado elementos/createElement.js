function addInput(){
    const ul = document.getElementById('inputs');
    const li = document.createElement('li'); 
    li.innerText = 'Novo input: ';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite algo...';
    
    li.appendChild(input);
    ul.appendChild(li);

    
}