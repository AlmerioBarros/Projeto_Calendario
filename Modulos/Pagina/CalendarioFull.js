/* Tudo necessario para reenderizar o calendario */

export function CalendarioFull(ano, mes, dia){

    DataAtual(ano,mes)   // FUNÇÃO QUE COLOCA O MES DO CALENDARIO
    CriarCalendario(ano,mes) // Função que cria o calendario dinamicamente
    //InfNoDia()  // FUNÇÃO QUE COLOCA AS INFORMAÇÕES NO DIA

}

function DataAtual(ano,mes){

    /* ALTERANDO O MES DO HTML E O ANO NO TITULO */

    const ano_titulo = document.getElementById('titulo_ano')
    ano_titulo.innerText = ` Calendário dos Amigos (${ano})`

    const mes_doc = document.getElementById('mes_atual')
    const lista_mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    mes_doc.innerHTML = `${lista_mes[mes]}`

}

function CriarCalendario(ano, mes){

    const calendario_doc = document.getElementById('calendario')
    calendario_doc.innerHTML = `
                <div class="day-of-week">Dom</div>
                <div class="day-of-week">Seg</div>
                <div class="day-of-week">Ter</div>
                <div class="day-of-week">Qua</div>
                <div class="day-of-week">Qui</div>
                <div class="day-of-week">Sex</div>
                <div class="day-of-week">Sáb</div>
    `

    let ultimo_dia = new Date(ano, mes + 1, 0)
    let quant_dias_mes = ultimo_dia.getDate()

    for (let i = 1; i < quant_dias_mes + 1; i++) {
        calendario_doc.innerHTML += ` <div class="day-of-week">${i}</div> `
        
    }

}

function InfNoDia(){


}