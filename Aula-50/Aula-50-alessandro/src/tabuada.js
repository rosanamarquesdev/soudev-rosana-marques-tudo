function somar(n1, n2){
    let soma = n1 + n2;

    return Number(soma.toFixed(4));
    // return (n1 + n2);
}

module.exports = {
    somar,
};
