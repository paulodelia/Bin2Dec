document.querySelector('button').addEventListener('click', function () {
    const bin = document.querySelector('input');
    const result = document.querySelector('p');
    const calcList = document.querySelector('ul');

    result.textContent = "";

    if (validateBin(bin.value)) {
        result.textContent = `${bin.value} = ${calculateBin2Dec(bin.value)}`;
        
        const howToCalcList = describeBin2DecCalc(bin.value);

        calcList.innerHTML = ""
        for (let i = 0; i < howToCalcList.length; i++) {
            const li = document.createElement('li')
            li.textContent = howToCalcList[i]
            calcList.appendChild(li)
        }
    } else {
        calcList.innerHTML = "";
    }

    bin.value = "";
});

function validateBin(bin) {
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] != 0 && bin[i] != 1) {
            alert("Please, fill with only 0 or 1");
            return false;
        }
    }
    return true;
}

function calculateBin2Dec(bin) {
    let soma = 0;
    for (let i = 0; i < bin.length; i++) {
        soma += bin[i] * (2 ** ((bin.length - i - 1)))
    }
    return soma;
}

function describeBin2DecCalc(bin) {
    let howToCalc = [];
    let sum = "";
    for (let i = 0; i < bin.length; i++) {
        howToCalc.push(`${bin[i]} * (2 ^ ${bin.length - i - 1}) = ${bin[i] * (2 ** (bin.length - i - 1))}`)
        sum += `${bin[i] * (2 ** (bin.length - i - 1))}`
        i < bin.length - 1 ? sum += ' + ' : sum += ` = ${calculateBin2Dec(bin)}`
    }
    howToCalc.push(sum)
    return howToCalc
}