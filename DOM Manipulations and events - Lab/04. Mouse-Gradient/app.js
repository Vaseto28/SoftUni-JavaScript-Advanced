function attachGradientEvents() {
    let gradientField = document.getElementById("gradient");

    gradientField.addEventListener('mousemove', (event) => {
        let x = event.offsetX;
        let y = event.target.clientWidth - 1;
        let result = Math.trunc((x / y) * 100);
        document.getElementById("result").textContent = result + "%";
    });

    gradientField.addEventListener('mouseout', () => {
        document.getElementById("result").textContent = "";
    });
}