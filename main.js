let numCalc = []
let now;
let total = document.getElementById('total')
document.getElementById('plus').addEventListener('click', function () {
    now = 'plus'
    console.log(now);
    concat();
    operaterNow('+')

});
document.getElementById('mines').addEventListener('click', function () {
    now = 'mines'
    console.log(now);
    concat()
    operaterNow('-')
});
document.getElementById('divide').addEventListener('click', function () {
    now = 'divide'
    console.log(now);
    concat()
    operaterNow('/')
});
document.getElementById('times').addEventListener('click', function () {
    now = 'times'
    console.log(now);
    concat();
    operaterNow('X');
});
document.getElementById('percentage').addEventListener('click', function () {
    now = 'percentage'
    console.log(now);
    concat();
    operaterNow('%');
});
let operaterNow = function(opNow)
{
    if(numCalc.length > 0){
        document.getElementById('operater').innerHTML = `<span>${numCalc[0]} ${opNow}</span>`;
    };
    
};
let damj = []
let show = function (num) {

    damj.push(num);

}
let showMeResult = function (tot) {
    total.innerHTML = `<span>${(damj.join(''))}</span>`
}
let concat = function () {
    if (damj.length > 0) {
        numCalc.push(damj.join(''))
        damj.length = 0;
    }
}
let divide = function (num1, num2) {
    return num1 / num2
}
let subtruct = function (num1, num2) {
    return num1 - num2
}
let multiply = function (num1, num2) {
    return num1 * num2
}
let add = function (num1, num2) {
    return num1 + num2
}
let percen = function (num1, num2) {
    return num1 % num2
}
let calculation = function () {
    if (numCalc.length > 1) {
        if (now == 'plus') {
            return (add(+numCalc[0], +numCalc[1]));
        }
        else if (now == 'mines') {
            return subtruct(+numCalc[0], +numCalc[1])
        }
        else if (now == 'divide') {
            return divide(+numCalc[0], +numCalc[1])
        }
        else if (now == 'times') {
            return multiply(+numCalc[0], +numCalc[1])
        }
        else if (now == 'percentage') {
            return percen(+numCalc[0], +numCalc[1])
        }
        
    }
}
document.getElementById('equal').addEventListener('click', function () {
    if(numCalc.length > 0){
        concat()
        total.innerHTML = `<span>${calculation()}</span>`;
        numCalc.length = 0;
        document.getElementById('operater').innerHTML = '';   
    }
})


document.getElementById('clear').addEventListener('click', function(){
    total.innerHTML = ''
    document.getElementById('operater').innerHTML = ''
    numCalc.length = 0;
    damj.length = 0;
})
document.getElementById('clear-entry').addEventListener('click', function(){
    damj.length = 0;
    total.innerHTML = '';
})