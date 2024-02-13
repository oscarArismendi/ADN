const adn = {
    "pedro":"00000101010101010101",
    "juan":"00101010101101110111",
    "diego":"00100010010000001001"
}

function search() {
    const inputADN = document.getElementById("input-adn").value;
    // let nADN = adn.length;
    // let n = Math.min(20,inputADN.length);
    let result = "none"
    let holderADN = -1;
    for(let key in adn){
        let holder = 0
        let i = 0;
        for(let character of adn[key]){
            if(character === inputADN[i]){
                holder++;
            }
            i++;
        }
        if(holder > holderADN){
            result = key;
            holderADN = holder;
        }
    }
    if(holderADN !== -1){
        result += " " +(holderADN/20)*100 + "%";
    }
    console.log(result)
    document.getElementById("result").innerHTML = "result: "+result;
    event.preventDefault();
}