
    const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth();
    const dia = data.getDate();

export function DataAtual(){

    /* ALTERANDO O MES DO HTML */

    const mes_doc = document.getElementById('mes_atual')
    const lista_mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    mes_doc.innerHTML = ` ${lista_mes[mes]} `

     
    CriarCalendario() // Função que cria o calendario dinamicamente
     

}

function CriarCalendario(){

    const calendario_doc = document.getElementById('calendario')

    let ultimo_dia = new Date(ano, mes + 1, 0)
    let quant_dias_mes = ultimo_dia.getDate()

    for (let i = 1; i < quant_dias_mes + 1; i++) {
        calendario_doc.innerHTML += ` <div class="day-of-week">${i}</div> `
        
    }

}