alert('Esto es una calculadora para definir la cantidad de cerámicos que requiere una superficie.');

function surface(widthSurface, heightSurface) {
    return widthSurface * heightSurface;
}

function ceramic(widthCeramic, heightCeramic) {
    return widthCeramic * heightCeramic;
}

function quantityCeramics(m2Ceramics, m2Surface) {
    return m2Surface / m2Ceramics;
}

function calculateCeramics() {
    alert('Para empezar, deberemos calcular los metros cuadrados de la superficie en la que se colocarán los cerámicos.');
    let widthSurface = parseFloat(prompt('Por favor, ingrese el ancho de su superficie en METROS.'));
    let heightSurface = parseFloat(prompt('Por favor, ingrese el alto de su superficie en METROS.'));
    
    if (isNaN(widthSurface) || isNaN(heightSurface) || heightSurface <= 0 || widthSurface <= 0) {
        alert('Por favor, ingrese medidas válidas.');
        return;
    }
    
    let m2Surface = surface(widthSurface, heightSurface);
    alert(`La superficie es equivalente a ${m2Surface}m2.`);
    
    alert('Para continuar, calcularemos el espacio que ocupan los cerámicos en metros cuadrados.');
    let widthCeramic = parseFloat(prompt('Por favor, ingrese el ancho de su cerámico en METROS.'));
    let heightCeramic = parseFloat(prompt('Por favor, ingrese el alto de su cerámico en METROS.'));
    
    if (isNaN(widthCeramic) || isNaN(heightCeramic) || heightCeramic <= 0 || widthCeramic <= 0) {
        alert('Por favor, ingrese medidas válidas.');
        return;
    }
    
    let m2Ceramics = ceramic(widthCeramic, heightCeramic);
    alert(`El espacio que ocupan los cerámicos es equivalente a ${m2Ceramics}m2.`);
    
    let quantity = quantityCeramics(m2Ceramics, m2Surface);
    alert(`Si la superficie es equivalente a ${m2Surface}m2 y el espacio que ocupan los cerámicos es equivalente a ${m2Ceramics}m2, entonces para cubrir el espacio se necesitarán ${quantity} cerámicos.`);
}
calculateCeramics();
