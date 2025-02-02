document.addEventListener('DOMContentLoaded', () => {
    const tempToggleButtons = document.querySelectorAll('.temp-toggle-button');
    const tempValues = document.querySelectorAll('.temp-value');
    const toggleWeek = document.querySelector('.toggle-week');
    const forecast = document.getElementById('week-forecast');

    tempToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            tempToggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const unit = button.dataset.unit;
            updateTemperatures(unit);
        });
    });

    function updateTemperatures(unit) {
        tempValues.forEach(tempElement => {
            const parentTemp = tempElement.closest('.temp');
            const tempF = parentTemp.dataset.tempF.split(',');
            const tempC = parentTemp.dataset.tempC.split(',');
            const index = tempElement.dataset.index;
            if (unit === 'F') {
                tempElement.textContent = `${tempF[index]}°`;
            } else {
                tempElement.textContent = `${tempC[index]}°`;
            }
        });
    }
    toggleWeek.addEventListener('click', () => {
        const isExpanded = toggleWeek.getAttribute('aria-expanded') === 'true';
        toggleWeek.setAttribute('aria-expanded', !isExpanded);
        forecast.classList.toggle('collapsed');
    });
    updateTemperatures('F');
});
