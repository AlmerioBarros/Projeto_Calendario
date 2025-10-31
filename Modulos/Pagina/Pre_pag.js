
/* Tudo que acontece antes ou durante o carregamento da pagina */

import { CalendarioFull } from "./CalendarioFull.js"

function PrePag(){
        const data = new Date();
        const ano = data.getFullYear();
        const mes = data.getMonth();
        const dia = data.getDate();
    
    CalendarioFull(ano, mes, dia)   //FUNÇÃO QUE GERA TUDO SOBRE O CALENDARIO PRE-CARREGAMENTO DA PAGINA
}

//PrePag()