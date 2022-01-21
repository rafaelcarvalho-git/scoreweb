/*****JavaScript para o funcionamento do chronoômetro*****/
var gametime = 3; //tempo de jogo sera definido pelo usuario

var mm = 0, ss = 0, acrescimo=0, acrescimoTotal=0, chrono, tempo = 50;//tempo = quantos milésimos valem 1 segundo?

//Inicia o temporizador
function start() {
    chrono = setInterval(timer, tempo);
}

//Adiciona acréscimos
function addTime(){
    acrescimo++;
    acrescimoTotal += acrescimo;
    gametime += acrescimo;
    //gametime++;
    //document.getElementById('btGoalTeam2').style.display = 'none';
    acrescimo=0;
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(chrono);
    mm = 0;
    ss = 0;

    document.getElementById('stopwatch').innerText = '00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    if (mm!=gametime){  //Aqui vai o tempo a ser definido
        ss++; 

        if (ss == 60) { 
            ss = 0; 
            mm++; 

            if (mm == 60) { 
                mm = 0;
                hh++;
            }
        }
    }

    //Cria uma variável com o valor tratado MM:SS
    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento stopwatch
    document.getElementById('stopwatch').innerText = format;

    //Retorna o valor tratado
    return format;
}

/*****Funcionamento dos Botões de Gols*****/
var goalTeam1 = 0, goalTeam2 = 0;

function addGoalTeam1(){ //Adiciona gols para o time 1
    goalTeam1++;
    document.getElementById("btGoalTeam1").value = goalTeam1.toString();
}

function addGoalTeam2(){ //Adiciona gols para o time 2
    goalTeam2++;
    document.getElementById("btGoalTeam2").value = goalTeam2.toString();
}




function confirm(){ //Adiciona gols para o time 2
    var name = document.getElementById("nameTeam1").value;

    var x = document.getElementById("nameTeam1");

    var name2 = document.getElementById("nameTeam2").value;

    var z = document.getElementById("nameTeam2");

    if (name=="" || name2=="") {
        alert('Insira o nome do time!')
    }else {
        x.style.display = "none";
        var h1 = document.getElementById('nome1');
        h1.innerHTML = name;

        z.style.display = "none";
        var h2 = document.getElementById('nome2');
        h2.innerHTML = name2;

        document.getElementById('confirmButton').style.display = 'none';
    }

}



