const constants = require('../constants');

const validateAndParseDigit = (str, currentTimeConstant) => {
    let newStr = /^\d+$/.test(str) ? parseInt(str) : undefined;

    if(!((newStr <= currentTimeConstant.max[0] || newStr <= currentTimeConstant.min[1]) && newStr >= currentTimeConstant.min[0])) {
        newStr = undefined;
    }

    return newStr;
}

const replaceInputWithValues = (inputString, constantValues) => {
    const regex = new RegExp(Object.keys(constantValues).join('|'), 'gi');
    
    const outputArray = inputString.toLowerCase().replace(regex, match => constantValues[match.toLowerCase()] || match).replace(/\s+/g, " ");

    return outputArray;
};

const traverseValues = (min, max, step = 1, previousValues) => {
    let values = "";
    min = parseInt(min);
    max = parseInt(max);
    step = parseInt(step);

    for (let i = min; i <= max; i += step) {
        if(!previousValues.includes(`${i}`))
            values += `${i}${i < max ? ' ' : ''}`;
    }

    return values;
}

const traverseCronJob = (input) => {
    try {
        const finalResult = [];
        //const splittedInput = replaceInputWithValues(input);
        const splittedInput = input.split(" ")

        //if(splittedInput.length !== 6) return finalResult;

        let commandInput = '';

        splittedInput.forEach((s, i) => {
            let finalParsedObject = {};
            const validNumber = /^\d+$/.test(s) ? parseInt(s) : undefined;

            if(i >= 5 && !validNumber) {
                commandInput += `${ commandInput ? ' ' + s : s}`
            } else {
                const currentTimeConstant = constants.TIME_CONSTANTS[i];
                if (i === 3){
                  s = replaceInputWithValues(s, constants.Month_To_Number);
                } 
                if(i === 4){
                   s = replaceInputWithValues(s, constants.Days_To_Number);
                }
                let values = '';
                let seperated = s.split(constants.SEPERATOR);
                seperated.forEach((x) => {
                    let min = 0;
                    let max = 0;
                    if(x === '' || x === undefined) {
                        throw new Error('Incorrect values at ',  currentTimeConstant.name);
                    }
                
                    let [former, latter] = x.split(constants.STEP);
                    latter = latter ? validateAndParseDigit(latter, currentTimeConstant) : 1;

                    if(latter === undefined) throw new Error('Incorrect values at ',  currentTimeConstant.name);

                    if(former === constants.ALL) {
                        min = currentTimeConstant.min[0];
                        max = latter === 1 && i == 4 && !splittedInput[2].includes(constants.ALL) ? currentTimeConstant.min[0] : currentTimeConstant.max[0];
                    } else if (former.includes(constants.RANGE)) {
                        [min, max] = former.split(constants.RANGE);
                    } else {
                        min = former;
                        max = former;
                    }

                    min = validateAndParseDigit(min, currentTimeConstant);
                    max = validateAndParseDigit(max, currentTimeConstant);

                    if(min === undefined || max === undefined) throw new Error('Incorrect values at ',  currentTimeConstant.name);

                    values += traverseValues(min, max, latter, values);
                    
                    finalParsedObject = {"Key": currentTimeConstant.name, "Value": values };
                })       
                finalResult.push(finalParsedObject);
           }
           
        })
        if(commandInput) {
            finalParsedObject = {"Key": "COMMAND", "Value": commandInput };
            finalResult.push(finalParsedObject);
        }

        console.log(finalResult);
        console.table(finalResult);

        return finalResult;
    } catch(error) {
        console.error(error)
    }
}

module.exports = traverseCronJob;

