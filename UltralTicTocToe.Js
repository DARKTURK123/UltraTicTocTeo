var colorFlag = false
var Redwin = 0
var Bluewin = 0
var numberok = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var tableleft = 0
var sqwinner = ['', '', '', '', '', '', '', '', '']
var playedtable = 0
var GameOver = false
function AnnounceSuperWinner(color) {
    var winner = document.getElementById('winner')
    if (color == 'red') {
        Redwin ++;
        document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
        winner.innerHTML = 'Red Win'
        winner.style.color = 'red'
        GameOver = true
    }
    else if (color == 'blue') {
        Bluewin ++;
        document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
        winner.innerHTML = 'Blue Win'
        winner.style.color = 'blue'
        GameOver = true
    }
}
function Superwin(){
    var td1 = sqwinner[0]
    var td2 = sqwinner[1]
    var td3 = sqwinner[2]
    var td4 = sqwinner[3]
    var td5 = sqwinner[4]
    var td6 = sqwinner[5]
    var td7 = sqwinner[6]
    var td8 = sqwinner[7]
    var td9 = sqwinner[8]
    if (td1 == td2 && td1 == td3 && td1 != '') {
        AnnounceSuperWinner(td1)
        console.log(td1)
    }
    else if (td7 == td8 && td7 == td9 && td7 != '') {
        AnnounceSuperWinner(td7)
        console.log(td7)
    }
    else if (td4 == td5 && td4 == td6 && td4 != '') {
        AnnounceSuperWinner(td4)
        console.log(td4)
    }
    else if (td1 == td4 && td1 == td7 && td1 != '') {
        AnnounceSuperWinner(td1)
        console.log(td1)
    }
    else if (td2 == td5 && td2 == td8 && td2 != '') {
        AnnounceSuperWinner(td2)
        console.log(td2)
    }
    else if (td3 == td6 && td3 == td9 && td3 != '') {
        AnnounceSuperWinner(td3)
        console.log(td3)
    }
    else if (td1 == td5 && td1 == td9 && td1 != '') {
        AnnounceSuperWinner(td5)
        console.log(td5)
    }
    else if (td3 == td5 && td3 == td7 && td3 != '') {
        AnnounceSuperWinner(td3)
        console.log(td3)
    }
    else if (tableleft == 9) {
        document.getElementById('winner').style.color = "black"; 
        document.getElementById('winner').style.color = "black"; 
        document.getElementById('winner').innerHTML = 'Same';  
    }
}
function AnnounceWinner(color) {
    var cover = document.getElementById(`cover${playedtable}`)
    if (color == 'red') {
        sqwinner[playedtable-1] = 'red'
        document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
        cover.style.zIndex = 20;
        cover.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        tableleft++
        Superwin()
    }
    else if (color == 'blue') {
        sqwinner[playedtable-1] = 'blue'
        document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
        cover.style.zIndex = 20;
        cover.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
        tableleft++
        Superwin()
    }
}
function WhoWins() {
    var td1 = document.getElementById(`td${playedtable}1`).style.backgroundColor
    var td2 = document.getElementById(`td${playedtable}2`).style.backgroundColor
    var td3 = document.getElementById(`td${playedtable}3`).style.backgroundColor
    var td4 = document.getElementById(`td${playedtable}4`).style.backgroundColor
    var td5 = document.getElementById(`td${playedtable}5`).style.backgroundColor
    var td6 = document.getElementById(`td${playedtable}6`).style.backgroundColor
    var td7 = document.getElementById(`td${playedtable}7`).style.backgroundColor
    var td8 = document.getElementById(`td${playedtable}8`).style.backgroundColor
    var td9 = document.getElementById(`td${playedtable}9`).style.backgroundColor
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
    else if(numberok[playedtable-1] == 9){
        var cover = document.getElementById(`cover${playedtable}`)
        sqwinner[playedtable-1] = `same${playedtable-1}`
        document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
        cover.style.zIndex = 20;
        cover.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        tableleft++
    }
    }
function Refresh() {  
    for (let i = 1; i <= 9; i++) {  
        for (let y = 1; y <= 9; y++) {
            document.getElementById('td' + y + i).style.backgroundColor = 'white';  
            winner.style.color = 'black'
            winner.innerHTML = '.'
        }
        document.getElementById(`cover${i}`).style.zIndex = 1;
        document.getElementById(`cover${i}`).style.backgroundColor = 'white';
    }  
    document.getElementById('result').innerHTML = "Red wins: " + Redwin + " Blue wins: " + Bluewin
    colorFlag = false;
    GameOver = false
    numberok = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    tableleft = 0
    sqwinner = ['', '', '', '', '', '', '', '', '']
    playedtable = 0
}  
function play(cell,number) {
    if(GameOver != true){
        playedtable = Math.floor(number/10)
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
            numberok[playedtable-1] += 1
            WhoWins()
        }
    }
}
