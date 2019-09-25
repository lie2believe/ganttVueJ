function compare(property,ascOrDesc){
    return (firstobj, secondobj) => {
        const firstValue = firstobj[property];
        const secondValue = secondobj[property];
        if(ascOrDesc=='desc'){
            return secondValue - firstValue; //降序
        }
        return firstValue - secondValue ; //降序
    };
}

function getNumber(num , perc){
    if(arguments.length==1){
        return parseInt(num);
    }
    if(arguments.length==2){
        return Math.round(num*Math.pow(10,perc))/Math.pow(10,perc);
    }
    return NaN;

};