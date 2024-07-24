document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();

        let numeroMax = document.getElementById('numberInput').value;
        numeroMax = parseInt(numeroMax);

        let numeroAle = Math.random() * numeroMax;
        numeroAle = Math.floor(numeroAle + 1);


        if (numeroMax > 1 && numeroMax < 1000) {
            document.getElementById('resultadoRes').innerText = numeroAle;
            document.querySelector('.resultado').style.display = 'flex';
            document.getElementById('numberInput').value = "";
        } 
        if(numeroMax < 2) {
            document.querySelector('.menError').style.display = 'block';
            document.querySelector('.resultado').style.display = 'none';
        } else {
            document.querySelector('.menError').style.display = 'none';
        }
        if (numeroMax > 999){
            document.querySelector('.menError2').style.display = 'block';
            document.querySelector('.resultado').style.display = 'none';
        } else {
            document.querySelector('.menError2').style.display = 'none';
        }
    })
})