/* global ment */

// OBJEKTUM SZERKEZET LÉTREHOZÁSA

/*
var tarsasJatekTomb = [
    
    {
        termekNev: "Monopoly",
        termekAr: 3000,
        termekTipus: "Táblajáték"
    },
    
    {
        termekNev: "Francia kártya",
        termekAr: 1500,
        termekTipus: "Kártyajáték"
    }
];
*/

var tarsasJSON = '[{"termekNev": "Monopoly","termekAr": 3000, "termekTipus": "Táblajáték""termekNev": "Francia kártya","termekAr": 1500,"termekTipus": "Kártyajáték"}]';

// JSON - Szöveges, szabványos, adatleíró formátum. Megfeleltethető a javaScript objektumának.


var tarsasTomb = [];

/*--------------------------------*/

$(function(){
    
    console.log("Helló");
    
    //var tarsasTomb = JSON.parse(tarsasJSON);
    
    
    
    $.ajax({
        url: "termekek.json",
        success: function(result){
            console.log(result);
            tarsasTomb = result;
            kiir();
        }}
    );
 
    $("#OK").click(ment);
    $("#Rendez").click(rendez);
});

/*--------------------------------*/

function kiir(){
    
    $("article").empty();
    
    console.log(tarsasTomb);
    
    $("article").append("<table>");
    $("article table").append("<tr>");
    
    $("article table tr").append("<th> Termék neve: </th>");
    $("article table tr").append("<th> Termék ára: </th>");
    $("article table tr").append("<th> Termék típusa: </th>");
    
    for (var i = 0; i < tarsasTomb.length; i++) {
        
        $("article table").append("<tr>");
        
        for (var item in tarsasTomb[i]){
            
            $("article table tr").eq(i+1).append("<td>" + tarsasTomb[i][item] + "</td>");
        }
        
        //$("article table tr").eq(i+1).append("<td>" + tarsasTomb[i].termekNev + "</td>");
        //$("article table tr").eq(i+1).append("<td>" + tarsasTomb[i].termekAr + "</td>");
        //$("article table tr").eq(i+1).append("<td>" + tarsasTomb[i].termekTipus + "</td>");
    }
    
    rendez();
}

function ment(){
    
    var ujAdat = {};
    ujAdat.termekNev = $("#nev").val();
    ujAdat.termekAr = $("#ar").val();
    ujAdat.termekTipus = "Táblás";
    
    console.log(ujAdat);
    
    tarsasTomb.push(ujAdat);
    
    kiir();
}

function rendez(){
    
    tarsasTomb.sort(
        
       function (a, b){
           
           return Number(a.nev > b.nev) - 0,5
       });
    );
}