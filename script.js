function clicoubotao(){
    let input_nome = document.querySelector('#nome');
    let input_idade = document.querySelector('#idade');
    if(input_nome.value==0 || input_idade.value==0){
        alert('Campo vazio!')
    }
    else{
    let text = document.createTextNode(`Seja bem vindo, ao nosso site ${input_nome.value} você tem ${input_idade.value} anos.`);
    let h1 = document.querySelector('#bemvindo');
    h1.innerHTML="";
    h1.appendChild(text);
    
    }   

}