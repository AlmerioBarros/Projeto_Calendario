import { DataHora } from "./data_hora.js";

const calendario = document.getElementById('calendario');

function CriarCalendairo(){

    let date = new Date();

    let dataAtual = date.toLocaleDateString('pt-br', { year: 'numeric', month: 'long', day: 'numeric'})
}

//CriarCalendairo();
DataHora()