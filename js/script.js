const adn = {
    "pedro":"00000101010101010101",
    "juan":"00101010101101110111",
    "diego":"00100010010000001001"
}

function startADN(){
    for(let key in adn){
        let i = 1;
        for(let character of adn[key]){
            changeDiv = document.getElementById(key+(i+1))
            changeDiv.style.background = "yellow";
            console.log(changeDiv)
            i++;
        }
    }
    return false;
}

function search() {
    // for(let key in adn){
    //     let i = 1;
    //     for(let character of adn[key]){
    //         changeDiv = document.getElementById(key+(i+1))
    //         console.log(changeDiv)
    //         i++;
    //     }
    // }
    const inputADN = document.getElementById("input-adn").value;
    let n = Math.min(20,inputADN.length);
    let result = "none"
    let holderADN = -1;
    for(let key in adn){
        let holder = 0
        let i = 0;
        for(let character of adn[key]){
            changeDiv = document.getElementById(key+(i+1));
            if(i >= n){
                // changeDiv.style.background = "yellow";
                continue;
            }
            if(character === inputADN[i]){
                holder++;
                changeDiv.style.background = "green";
            }
            else{
                changeDiv.style.background = "red";
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


