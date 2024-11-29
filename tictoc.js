var colorFlag = false
var GameOver = false
var Redwin = 0
var Bluewin = 0
var numberok = 0
var Bluepoint = 0
var redpoint = 0

function play(cell) {
    if (GameOver == false){
        if (cell.style.backgroundColor == 'white') {
            document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
            if (colorFlag == false) {
                cell.style.backgroundColor = 'red'
                colorFlag = true
            }
            else {
                cell.style.backgroundColor = 'blue'
                colorFlag = false
            }
            numberok += 1
            WhoWins()
            
        }
    }
}
// می‌توانید همینطور ادامه بدهید...  
function WhoWins() {
    var td1 = document.getElementById('td1').style.backgroundColor
    var td2 = document.getElementById('td2').style.backgroundColor
    var td3 = document.getElementById('td3').style.backgroundColor
    var td4 = document.getElementById('td4').style.backgroundColor
    var td5 = document.getElementById('td5').style.backgroundColor
    var td6 = document.getElementById('td6').style.backgroundColor
    var td7 = document.getElementById('td7').style.backgroundColor
    var td8 = document.getElementById('td8').style.backgroundColor
    var td9 = document.getElementById('td9').style.backgroundColor
    if (td1 == td2 && td1 == td3 && td1 != 'white') {
        AnnounceWinner(td1)
    }
    else if (td7 == td8 && td7 == td9 && td7 != 'white') {
        AnnounceWinner(td7)
    }
    else if (td4 == td5 && td4 == td6 && td4 != 'white') {
        AnnounceWinner(td4)
    }
    else if (td1 == td4 && td1 == td7 && td1 != 'white') {
        AnnounceWinner(td1)
    }
    else if (td2 == td5 && td2 == td8 && td2 != 'white') {
        AnnounceWinner(td2)
    }
    else if (td3 == td6 && td3 == td9 && td3 != 'white') {
        AnnounceWinner(td3)
    }
    else if (td1 == td5 && td1 == td9 && td1 != 'white') {
        AnnounceWinner(td5)
    }
    else if (td3 == td5 && td3 == td7 && td3 != 'white') {
        AnnounceWinner(td3)
    }
    else if (numberok == 9) {
        document.getElementById('winner').style.color = "black"; 
        document.getElementById('winner').style.color = "black"; 
        document.getElementById('winner').innerHTML = 'Same';  
    }
}
function AnnounceWinner(color) {
    var winner = document.getElementById('winner')
    if (color == 'red') {
        winner.innerHTML = 'Red Win'
        winner.style.color = 'red'
        GameOver = true
        Redwin += 1
        document.getElementById('result').innerHTML = "Red wins: " + Redwin
        + " Blue wins: " + Bluewin
    }
    else if (color == 'blue') {
        winner.innerHTML = 'Blue Win'
        winner.style.color = 'blue'
        GameOver = true
        Bluewin += 1
        document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
    }
}
function Refresh() {  
    for (let i = 1; i <= 9; i++) {  
        document.getElementById('td' + i).style.backgroundColor = 'white';  
        winner.style.color = 'black'
        winner.innerHTML = '.'
    }  
    GameOver = false;  
    // document.getElementById('winner').innerHTML = '';  
    document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
    colorFlag = false;
    numberok = 0
}  
