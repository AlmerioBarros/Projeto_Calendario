
/* Tudo que acontece depois do carregamento da pagina */

import { CalendarioFull } from "./CalendarioFull.js";

function Pos_pag(){
    

}

const data = new Date();
var ano = data.getFullYear();
var mes = data.getMonth();
const dia = data.getDate();

const passar_mes = document.getElementById('mes_proximo')
passar_mes.addEventListener("click", PassarMes)

const voltar_mes = document.getElementById('mes_anterior')
voltar_mes.addEventListener("click", VoltarMes)

function PassarMes(){
    //const main = document.getElementById('main')

    /*setTimeout(() => {
    main.style.backgroundColor = 'red';
    }, 3000); */

    mes = mes + 1;
    CalendarioFull(ano, mes)
}

function VoltarMes(){

    mes = mes - 1;
    CalendarioFull(ano, mes)
}
