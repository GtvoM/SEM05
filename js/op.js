function GanxL(){
	L = document.getElementById("canL").value;
	PG = document.getElementById("prG").value;
    TG = L/3.785;
    GA = TG*PG;
	document.getElementById('Gan').innerHTML="<span><i class='fas fa-coins'></i> Ganancia: S/"+ GA.toFixed(2) +"</span>";
}

function NHAM(){
    N = document.getElementById("N_H").value;
    TI = document.getElementById("T_H").value;
    TP = document.getElementById("T_P").value;
    PA=0;
    if(TI == 1) {
        PA = 20;
    }else if (TI == 2) {
        PA = 25;
    }else if (TI == 3) {
        PA = 28;
    }
    TO = PA * N;
    if (TP == 1) {
        CA = TO * 0.05
    }else {
        CA = 0;
    }
    TOT= TO + CA;
    document.getElementById('Pag').innerHTML="<span><i class='fas fa-coins'></i> Total a pagar: S/"+ TOT.toFixed(2) +"</span>";
}

function NCIT(){
    NC = document.getElementById("N_C").value;
    CC = 0;
    TOT =0;
    if (NC >= 1 && NC <= 3) {
        CC= 200;
        TOT = NC * CC;
    }else if (NC >= 4 && NC <= 5) {
        CC =150;
        TOT= (NC-3)*150+600;
    }else if (NC >= 6 && NC <= 8){
        CC=100;
        TOT=(NC-5)*100+900;
    }else if (NC >= 9) { 
        CC=50;
        TOT= (NC-8)*50+1200;
    }
    document.getElementById('CoC').innerHTML="<span><i class='fas fa-coins'></i> Consulta: S/"+ CC.toFixed(2) +"</span>";
    document.getElementById('CoT').innerHTML="<span><i class='fas fa-coins'></i> Tratamiento: S/"+ TOT.toFixed(2) +"</span>";
}