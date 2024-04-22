function initMap() {
    const map = new mapgl.Map('container', {
        center: [74.603605, 42.876467],
        zoom: 13,
        key: '29749b00-752a-46cb-b858-d9350a18b711',
    });

    // // Создание маркера 
    // const marker = new mapgl.Marker(map, {
    //     coordinates: [74.603605, 42.876467],
    // });
    // // Вызов функции для добавления информации о маркере
    // MapInfo(marker, "test <br/> мероприятие 1");
    
    //! Функция для добавления информации о маркере
    function MapInfo(marker, text) {
        const tooltipEl = document.querySelector('#tooltip');
        marker.on('mouseover', (event) => {
            const offset = 5;
            tooltipEl.style.top = `${event.point[1] + offset}px`;
            tooltipEl.style.left = `${event.point[0] + offset}px`;
            tooltipEl.style.display = 'block';
            tooltipEl.innerHTML = text;
        });
        marker.on('mouseout', () => {
            tooltipEl.style.display = 'none';
        });
    }
}

//! модальное окно
let modal = document.getElementById("myModal");
let burgerIcon = document.querySelector(".burgerMenu");

burgerIcon.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

