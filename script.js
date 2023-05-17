function generateRandomColor(seed) {
    var hash = 0;
    for (var i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    var hue = hash % 360; // Random hue value between 0 and 359
    var saturation = 30 + Math.random() * 40; // Random saturation between 30% and 70%
    var lightness = 70 + Math.random() * 10; // Random lightness between 70% and 80%

    var color = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    return color;
}

function changeBackground() {
    var name = document.getElementById('name').value;
    var randomColor = generateRandomColor(name); 
    document.body.style.backgroundColor = randomColor;
}


function copyHexCode() {
    var hexCode = document.getElementById('hex-code');
    hexCode.select();
    hexCode.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Hex code copied: " + hexCode.value);
}
