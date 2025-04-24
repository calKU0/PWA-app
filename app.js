document.getElementById('sosButton').addEventListener('click', function () {
    if ('vibrate' in navigator) {
        let sosPattern = [200, 100, 200, 100, 200, 600, 600, 600, 200, 100, 200, 100, 200];
        
        navigator.vibrate(sosPattern);
    } else {
        alert("Wibracje nie działają na tym urządzeniu!");
    }
});
