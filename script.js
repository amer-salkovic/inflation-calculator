

 function inflationCalculator(){
    let stopaInflacije = document.querySelector("#inflationRate");
    stopaInflacije = parseFloat(stopaInflacije.value);
    let money = document.querySelector("#money");
    
    money = parseFloat(money.value);
    let godina = document.querySelector("#years").value;
    godina = parseFloat(godina)
    let vrednost = money + (money * (stopaInflacije / 100));
    console.log(vrednost);
    for(let i = 1; i < godina; i++){
        vrednost += vrednost *(stopaInflacije / 100)
    }
    document.getElementById("rezultat").innerHTML = `Danasnji ${money} eura za ${godina} godina uz stopu inflacije od ${stopaInflacije}% ce da vredi ${vrednost} eura`;
}