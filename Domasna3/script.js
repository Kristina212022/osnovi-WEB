
var drivers=[
    { name:"Марко Стефановски", team: "Вардар микс", speed: 95, skill: 90, time: 0, tires: "Тврди", pitStop: 0, status: "-" },
    { name:"Дарко Николовски", team: "Пелистер Тим", speed: 93, skill: 92, time: 0, tires: "Меки", pitStop: 0, status: "-" },
    { name:"Александар Трајковски", team: "Скопје Гран При", speed: 91, skill: 88, time: 0, tires: "Тврди", pitStop: 0, status: "-" },
    { name:"Иван Петровски", team: "Охрид Спид", speed: 90, skill: 85, time: 0, tires: "Тврди", pitStop: 0, status: "-" },
    { name:"Горан Стојанов", team: "Вардар микс", speed: 88, skill: 80, time: 0, tires: "Тврди", pitStop: 0, status: "-" },
    { name:"Кире Ристов", team: "Пелистер Тим", speed: 89, skill: 84, time: 0, tires: "Меки", pitStop: 0, status: "-" },
    { name:"Стефан Јованов", team: "Скопје Гран При", speed: 87, skill: 86, time: 0, tires: "Тврди", pitStop: 0, status: "-" },
    { name:"Никола Димитриевски", team: "Охрид Спид", speed: 86, skill: 82, time: 0, tires: "Тврди", pitStop: 0, status: "-" },
    { name:"Филип Ангелов", team: "Тетово Мотоспорт", speed: 84, skill: 91, time: 0, tires: "Меки", pitStop: 0, status: "-" },
    { name:"Бојан Ѓорѓиев", team: "Битола Тим ", speed: 82, skill: 78, time: 0, tires: "Меки", pitStop: 0, status: "-" }
];

var currentLap=0;
var maxLaps=10;
var logBox=document.getElementById("logBox");
var lapInfo=document.getElementById("lapInfo");


function startRace() {
    currentLap=0;
    logBox.innerHTML="Трката започна!<br>";
    
    for (var i=0; i<drivers.length; i++) {
        drivers[i].time=0;
        drivers[i].pitStop=0;
        drivers[i].status="Во ред";
    }
    
    document.getElementById("startBtn").disabled=true;
    updateTable();
    setTimeout(nextLap, 2000);
}

function nextLap() {
    if (currentLap>=maxLaps) {
        endRace();
        return;
    }
    currentLap++;
    lapInfo.innerHTML="Круг: "+ currentLap + " / " + maxLaps;
    
    var safetyCar=false;
    
    if (Math.random() < 0.15 && currentLap > 1) {
        safetyCar = true;
        logBox.innerHTML += "<b>Круг " + currentLap + ":</b> Безбедносно возило на патеката!<br>";
    } else {
        logBox.innerHTML += "<b>Круг " + currentLap + ":</b><br>";
    }



    for (var i=0; i < drivers.length; i++) {
        var d=drivers[i];
        d.status= "Во ред"; 

        var lapTime=100 - d.speed;
        lapTime=lapTime + (100 - d.skill)*0.5;

        if (d.tires == "Меки") {
            lapTime=lapTime - 3;
        } else {
            lapTime=lapTime + 5;
        }

        var needPit=false;
        if (d.pitStop == 0 && currentLap == maxLaps) {
            needPit = true; 
        } else if (d.pitStop == 0 && currentLap > 3 && Math.random() < 0.3) {
            needPit= true;
        }

        if (needPit == true) {
            d.pitStop= 1;
            d.status= "Пит-стоп";
            lapTime= lapTime + 20;
            
            if (d.tires == "Меки") {
                d.tires= "Тврди";
            } else {
                d.tires="Меки";
            }
            logBox.innerHTML += d.name + " влезе во бокс (нови гуми: " + d.tires + ")<br>";
        }
      

        if (Math.random() < 0.05 && d.status == "Во ред") {
            d.status= "Излета";
            lapTime=lapTime + 12;
            logBox.innerHTML += d.name + " излета од патеката!<br>";
        }

        if (safetyCar == true && d.status == "Во ред") {
            d.status= "Безбедносно";
            lapTime=lapTime + 8;
        }

        d.time=d.time + lapTime;
    }


    for (var i=0; i < drivers.length; i++) {
        for (var j=i + 1; j < drivers.length; j++) {
            if (drivers[i].time > drivers[j].time) {
                var temp=drivers[i];
                drivers[i]=drivers[j];
                drivers[j]=temp;
            }
        }
    }

    updateTable();
    setTimeout(nextLap, 2500);
}


function updateTable() {
    var html= "";
    for (var i= 0; i < drivers.length; i++) {
        var d= drivers[i];
        html += "<tr>";
         html += "<td>" +(i+1) + "</td>"; 
        html += "<td>" + d.name+ "</td>";
        html += "<td>" + d.team+ "</td>";
        html += "<td>" + d.speed+ "</td>";
        html += "<td>" + d.skill+ "</td>";
         html += "<td>" + d.time.toFixed(2) + "</td>";
        
        if (d.status == "Пит-стоп") {
            html += "<td style='background-color:lightyellow;'>"+d.status + "</td>";
        } else if (d.status == "Излета") {
            html += "<td style='background-color:tomato; color:black;'>" +d.status + "</td>";
        } else if (d.status == "Безбедносно") {
            html += "<td style='background-color:lightgray;'>"+ d.status + "</td>";
        } else {
            html += "<td>"+ d.status+ "</td>";
        }
        
        html += "</tr>";
    }
    document.getElementById("tableBody").innerHTML= html;
}


function endRace() {
    var winner=drivers[0];
    logBox.innerHTML += "<br><b> ТРКАТА ЗАВРШИ! </b><br>";
    logBox.innerHTML += "<b>Победникот е: "+ winner.name + " ("+ winner.team + ")</b><br>";
    logBox.innerHTML += "Вкупно време: "+ winner.time.toFixed(2) +" сек.<br>";
    lapInfo.innerHTML= "Трката заврши!";
}