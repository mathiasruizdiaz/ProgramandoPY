let peso = 20;

if (peso <= 20) {
    calculaHollidaySegar(40);
} else {
    superficieCorporal();
}
function calculaHollidaySegar(p) {
    let necesidades;
    if (p <= 10) {
        necesidades = p * 100;
    } else if (p <= 20) {
        necesidades = 1000 + (p - 10) * 50;
    } else {
        necesidades = 1500 + (p - 20) * 20;
    }

    console.log("Las necesidades diarias de líquidos son: ", necesidades, " ml/día");
}

function superficieCorporal() {
    console.log("Función superficieCorporal aún no implementada");
}
