
function DataAtual(){
    const mes_doc = document.getElementById('mes_atual')
    

    const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth() +1 ;
    const dia = data.getDate();

    mes_doc.innerHTML = ` ${mes} `
}

DataAtual()