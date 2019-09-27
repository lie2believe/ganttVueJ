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

function clone(obj)
{
    if(typeof obj!='object'){
        return obj;
    }

    if(obj instanceof Array){
        var arr=[];
        for(var i=0; i<obj.length; i++){
            arr[i]=clone(obj[i]);
        }
        return arr;
    }
    else if(obj.constructor==Object){
        var json={};
        for(var name in obj){
            json[name]=clone(obj[name]);
        }
        return json;
    }
    else if(obj instanceof HTMLElement){
        return obj.cloneNode(true);
    }
    else{
        return new obj.constructor(obj.valueOf());
    }
}