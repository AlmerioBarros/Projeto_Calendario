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
    let primeiro_dia = new Date(ano, mes, 1);               // <--- O DIA 1 DESSE MÊS
    let dia_da_semana_inicial = primeiro_dia.getDay();      // 0 (Dom) a 6 (Sáb)

    let ultimo_dia_mes_anterior = new Date(ano, mes, 0)                           //  PEGA A DATA DO ULTIMO DIA DO MES PASSADO
    let quant_dias_mes_anterior = ultimo_dia_mes_anterior.getDate()               // <--- O ULTIMO DIA DO MES, UTILIZADO PARA CRIAR OS DIAS DO MES PASSADO, OS INACESSIVEIS

    for (let i = 1; i < dia_da_semana_inicial +1 ; i++) {
        calendario_doc.innerHTML += ` <div class="day-of-week desativada">${quant_dias_mes_anterior - (dia_da_semana_inicial- i)}</div> `
        
    }

    let ultimo_dia = new Date(ano, mes + 1, 0)              //  PEGA A DATA DO ULTIMO DIA DESSE MES
    let quant_dias_mes = ultimo_dia.getDate()               // <--- O ULTIMO DIA DO MES UTILIZADO PARA CRIAR O CALENDARIO

    for (let i = 1; i < quant_dias_mes + 1; i++) {
        calendario_doc.innerHTML += ` <div class="day-of-week">${i}</div> `
        
    }

}

function InfNoDia(){


}