// Gradovi i podatoci
var gradovi = [
    {ime:"Берово", kategorija: "Планински", cena: 1500, sliki: ["sliki/berovo1.jpg", "sliki/berovo2.jpg", "sliki/berovo3.jpg"], 
        blog:"Берово е еден од најубавите планински градови во Македонија. Познато е по Беровското Езеро, кое е идеално за релаксација, риболов и прошетки во природа. Не пропуштајте да го посетите манастирот Св. Богородица и да уживате во традиционалната храна." },
    {ime:"Битола", kategorija: "Историски", cena: 1800, sliki: ["sliki/bitola1.jpg", "sliki/bitola2.jpg", "sliki/bitola3.jpg"], 
        blog:"Битола е градот на конзулите и има богата историја која се чувствува на секој чекор. Шетајте по Широк Сокак, посетете ја Саат-кулата и античкиот град Хераклеја Линкестис. Ова е град кој никогаш не престанува да живее." },
    {ime:"Делчево", kategorija: "Планински", cena: 1200, sliki: ["sliki/delcevo1.jpg", "sliki/delcevo2.jpg", "sliki/delcevo3.jpg"], 
        blog:"Делчево е познато по прекрасната природа и планината Голак. Ова е совршено место за љубителите на чист воздух, планинарење и уживање во локалната храна. Не пропуштајте ја посетата на манастирот Св. Ѓорѓи." },  
    {ime:"Гевгелија", kategorija: "Урбан", cena: 1600, sliki: ["sliki/gevgelija1.jpg", "sliki/gevgelija2.jpg", "sliki/gevgelija3.jpg"], 
        blog:"Гевгелија е градот со најубава клима во Македонија. Посетете ги познатите бањи, уживајте во локалната храна и прошетајте покрај реката Вардар. Ова е идеално место за одмор во секое годишно време." },  
    {ime:"Куманово", kategorija: "Историски", cena: 1300, sliki: ["sliki/kumanovo1.jpg", "sliki/kumanovo2.jpg", "sliki/kumanovo3.jpg"], 
        blog: "Куманово има богата историја и култура. Посетете ги црквите и манастирите во околината, како и спомениците кои сведочат за славното минато на овој град. Локалната кујна е нешто што мора да се проба." },
    {ime:"Крушево", kategorija: "Планински", cena: 1700, sliki: ["sliki/krusevo1.jpg", "sliki/krusevo2.jpg", "sliki/krusevo3.jpg"], 
        blog:"Крушево е градот на Илинден. Сместено е на планината Баба и нуди прекрасни погледи кон Пелагонија. Посетете го споменикот Мечкин Камен и музејот на Илинденското востание. Ова е градот со душа." },
    {ime:"Скопје", kategorija: "Историски", cena: 2000, sliki: ["sliki/skopje1.jpg", "sliki/skopje2.jpg", "sliki/skopje3.jpg"], 
        blog:"Скопје е главниот и најголем град во Македонија. Не пропуштајте ги Старата Чаршија, Кале, Музејот на македонската борба и плоштадот Македонија. Градот нуди одлична храна, ноќен живот и културни настани во секое време." },
    {ime:"Струга", kategorija: "Езерски", cena: 2200, sliki: ["sliki/struga1.jpg", "sliki/struga2.jpg", "sliki/struga3.jpg"], 
        blog:"Струга е градот на поезијата и еден од најубавите езерски градови. Шетајте покрај Црн Дрим, посетете ги плажите на Охридското Езеро и уживајте во романтичната атмосфера. Струшките вечери на поезијата се светски познати." },
    {ime:"Свети Николе", kategorija: "Урбан", cena: 1000, sliki: ["sliki/sveti-nikole1.jpg", "sliki/sveti-nikole2.jpg", "sliki/sveti-nikole3.jpg"], 
        blog:"Свети Николе е познато по традиционалната храна, гостопримливите луѓе и богатото културно наследство. Посетете ги црквите и уживајте во мирот на ова мало гратче." },
    {ime:"Охрид", kategorija: "Езерски", cena: 2500, sliki: ["sliki/ohrid1.jpg", "sliki/ohrid2.jpg", "sliki/ohrid3.jpg"], 
        blog:"Охрид е светски бисер и град заштитен од УНЕСКО. Посетете ги Самуиловата тврдина, Плаошник, црквата Св. Јован Канео и уживајте во возењето со брод до Св. Наум. Охридското Езеро е едно од најстарите во Европа." }
];


var prikazaniGradovi = [];
var defaultSlika = "sliki/map.png"; //slika na dodaden grad/mesto
var momentalenGrad = null;


//Prikaz na gradovi/mesta
function renderGradovi(nizaZaPrikaz) {
    prikazaniGradovi = nizaZaPrikaz;
    var container = document.getElementById("gradovi");
    var html = "";

    if (nizaZaPrikaz.length == 0) {
        html = "<div class='col-12 text-center'><h4>Нема пронајдени места со тие филтри.</h4></div>";
    }

    for (var i = 0; i < nizaZaPrikaz.length; i++) {
        var g = nizaZaPrikaz[i];
        var glavnaSlika = g.sliki[0];

        html += "<div class='col-md-4 mb-4'>";
        html += "<div class='card h-100' style='cursor: pointer;' onclick='otvoriGalerija(" + i + ")'>";
        html += "<img src='" + glavnaSlika + "' class='card-img-top' alt='" + g.ime + "' onerror=\"this.src='" + defaultSlika + "';\">";
        html += "<div class='card-body'>";
        html += "<h4 class='card-title'>" + g.ime + "</h4>";
        html += "<p class='card-text'><b>" + g.kategorija + "</b></p>";
        html += "<p class='card-text cena-tekst'>Цена: " + g.cena + " ден. (по ден)</p>";
        html += "<button class='btn btn-danger btn-sm' onclick='event.stopPropagation(); izbrisiGrad(" + i + ")'>Избриши</button>";
        html += "</div></div></div>";
    }

    container.innerHTML = html;
}



//Filtriranje
function filtriraj() {
    var izbranaKategorija = document.getElementById("filterKategorija").value;
    var maksimalenBudzet = document.getElementById("filterBudzet").value;

    if (maksimalenBudzet == "") maksimalenBudzet = 999999;

    var filtrirani = [];
    for (var i = 0; i < gradovi.length; i++) {
        var g = gradovi[i];
        var kategorijaOk = (izbranaKategorija == "site" || g.kategorija == izbranaKategorija);
        var budzetOk = (g.cena <= maksimalenBudzet);
        if (kategorijaOk && budzetOk) filtrirani.push(g);
    }
    renderGradovi(filtrirani);
    popolniPresmetkaMeni();
}


//Restartiranje na filtri
function resetFiltri() {
    document.getElementById("filterKategorija").value = "site";
    document.getElementById("filterBudzet").value = "";
    renderGradovi(gradovi);
    popolniPresmetkaMeni();
}


//Dodavanje na grad/mesto
function dodajGrad() {
    var ime = document.getElementById("novoIme").value;
    var kategorija = document.getElementById("novaKategorija").value;
    var cena = document.getElementById("novaCena").value;

    if (ime == "" || cena == "") {
        window.alert("Ве молиме пополнете ги сите полиња!");
        return; 
    }

    if (parseInt(cena) < 0) {
        window.alert("Цената не може да биде негативна!");
        return;
    }

    var novGrad = {
        ime: ime,
        kategorija: kategorija,
        cena: parseInt(cena), 
        sliki: [defaultSlika],
        blog: "Напишете го вашиот блог за " + ime + " тука."
    };

    gradovi.push(novGrad); 

    document.getElementById("novoIme").value = "";
    document.getElementById("novaCena").value = "";

    resetFiltri(); 
    window.alert("Успешно додадено место: " + ime);
}


//Brishanje na grad/mesto
function izbrisiGrad(index) {
    var potvrda = window.confirm("Дали сте сигурни дека сакате да го избришете ова место?");
    if (potvrda == true) {
        var imeZaBrisenje = prikazaniGradovi[index].ime;
        for (var i = 0; i < gradovi.length; i++) {
            if (gradovi[i].ime == imeZaBrisenje) {
                gradovi.splice(i, 1);
                break;
            }
        }
        filtriraj(); 
    }
}


//Presmetka na troshoci
function presmetajTrosok() {
    var izbranGrad = document.getElementById("presmetkaGrad").value;
    var denovi = document.getElementById("brojDenovi").value;
    
    if (izbranGrad == "" || denovi == "") {
        window.alert("Ве молиме изберете место и број на денови!");
        return;
    }

    if (parseInt(denovi) < 0) {
        window.alert("Бројот на денови не може да биде негативен!");
        return;
    }

    var cenaNaGrad = 0;
    for (var i = 0; i < gradovi.length; i++) {
        if (gradovi[i].ime == izbranGrad) {
            cenaNaGrad = gradovi[i].cena;
            break;
        }
    }

    var vkupno = cenaNaGrad * parseInt(denovi);
    window.alert("Пресметка за " + izbranGrad + ":\n" + cenaNaGrad + " x " + denovi + " дена = ВКУПНО " + vkupno);
}


//Najava na korisnik
function otvoriNajava() {
    var ime = window.prompt("Внесете го вашето корисничко име за најава:");
    if (ime != null && ime != "") {
        window.alert("Добредојде, " + ime + "! Успешно се најави.");
    }
}


// Galerija & Blog
function otvoriGalerija(indexNaGrad) {
    var g = prikazaniGradovi[indexNaGrad];
    momentalenGrad = g.ime;
    
    document.getElementById("modalImeGrad").innerText = "Галерија - " + g.ime;
    document.getElementById("lajkBrojac").innerText = "0";
    document.getElementById("dislajkBrojac").innerText = "0";
  
    
    var slikaElement1 = document.getElementById("galerijaSlika1");
    var slikaElement2 = document.getElementById("galerijaSlika2");
    

    
      
    if (g.sliki.length > 1) {
        slikaElement1.src = g.sliki[1];
        slikaElement1.style.display = "block";
    } else {
        slikaElement1.style.display = "none"; 
    }

    
    if (g.sliki.length > 2) {
        slikaElement2.src = g.sliki[2];
        slikaElement2.style.display = "block";
    } else {
        slikaElement2.style.display = "none"; 
    }



    document.getElementById("blogNaslov").innerText = "Кратко за " + g.ime;
    document.getElementById("blogTekst").innerText = g.blog;

    $('#galerijaModal').modal('show');
}


//lajk i dislajk
function lajk() {
    var brojac = document.getElementById("lajkBrojac");
    brojac.innerText = parseInt(brojac.innerText) + 1;
}
function dislajk() {
    var brojac = document.getElementById("dislajkBrojac");
    brojac.innerText = parseInt(brojac.innerText) + 1;
}


//komentari
function dodajKomentar() {
    var tekst = document.getElementById("novKomentar").value;
    if (tekst == "") {
        window.alert("Ве молиме напишете коментар!");
        return;
    }
    var lista = document.getElementById("listaKomentari");
    if (lista.innerHTML.includes("Сè уште нема")) lista.innerHTML = "";
    lista.innerHTML += "<p><b>Корисник:</b> " + tekst + "</p>";
    document.getElementById("novKomentar").value = "";
}


//Anketa
function otvoriAnketa() {
    $('#anketaModal').modal('show');
}

function pratiAnketa() {
    var ime = document.getElementById("anketaIme").value;
    var ocenka = document.querySelector('input[name="ocenka"]:checked');
    if (ime == "" || ocenka == null) {
        window.alert("Ве молиме внесете име и изберете оценка!");
        return;
    }
    window.alert("Ви благодариме, " + ime + "!\nВашата анкета е успешно примена.\nОценка: " + ocenka.value + "/5");
    $('#anketaModal').modal('hide');
    document.getElementById("anketaIme").value = "";
    document.getElementById("anketaKomentar").value = "";
    if (ocenka) ocenka.checked = false;
}


//Presmetka
function popolniPresmetkaMeni() {
    var select = document.getElementById("presmetkaGrad");
    select.innerHTML = ""; 
    
    for (var i = 0; i < gradovi.length; i++) {
        var option = document.createElement("option");
        option.value = gradovi[i].ime;
        option.text = gradovi[i].ime + " (" + gradovi[i].cena + ")";
        select.appendChild(option);
    }
}


// Vchituvanje
window.onload = function() {
    renderGradovi(gradovi);
    popolniPresmetkaMeni();
};