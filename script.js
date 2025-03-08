function generatePalette() {
    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.innerText = color;
        paletteContainer.appendChild(colorBox);
    }
}
generatePalette();