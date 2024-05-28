function makeBrightly(element) {
    const g = element.childNodes;
    const path = g[1].childNodes;

    path[1].setAttribute('fill',"url(#paint0_linear_19178_179)")

}
function makeDarker(element){
    const g = element.childNodes;
    const path = g[1].childNodes;

    path[1].setAttribute('fill',"#F97247")

}
function makeBlub(
    text="Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date="27.5.2024"
){
    if(date==="27.5.2024"){
        let currentDate = new Date();
        date = `${currentDate.getDate()}.${currentDate.getUTCMonth()+1}.${currentDate.getFullYear()}`;
    }
    const blubWindow = document.getElementsByClassName("blub_window");

    const newBlubElement = document.createElement('div');
    const new_blub_text = document.createElement('div');
    const new_blub_date = document.createElement('div');

    new_blub_text.setAttribute('class','blub_text');
    new_blub_date.setAttribute('class','blub_date');
    newBlubElement.setAttribute('class','blub_element');

    newBlubElement.appendChild(new_blub_text);
    newBlubElement.appendChild(new_blub_date);

    new_blub_date.insertAdjacentText('afterbegin',date);
    new_blub_text.insertAdjacentText('afterbegin',text);

    blubWindow[0].appendChild(newBlubElement);
}

function makeBlubs(times){
    for (let i = 0; i < times; i++) {
        makeBlub();
    }
}

//-------------------
function makeAnimation(){
    const container = document.getElementById('coins1');
    const objects = [
        document.getElementById('object1'),
        document.getElementById('object2'),
        document.getElementById('object3'),
        document.getElementById('object4'),
        document.getElementById('object5'),
        document.getElementById('object6'),
    ];

    const speed = 2; // скорость движения
    const containerHeight = container.clientHeight;
    const objectHeight = objects[0].clientHeight;
    const initialOffsets = [0, 115, 350, 470, 590, 710]; // начальные отступы объектов

// Расчет начальных позиций объектов
    for (let i = 0; i < objects.length; i++) {
        initialOffsets.push(-i * (objectHeight + 10));
    }

    objects.forEach((object, index) => {
        object.style.top = initialOffsets[index] + 'px';
    });
    moveObjects(objects, speed,containerHeight,objectHeight);
}


function moveObjects(objects, speed, containerHeight, objectHeight) {
    objects.forEach(object => {
        let currentPos = parseFloat(object.style.top);
        currentPos += speed;

        if (currentPos > containerHeight) {
            currentPos = -objectHeight;
        }

        object.style.top = currentPos + 'px';
    });
}

 // каждые 20 миллисекунд обновляем позицию
// document.addEventListener('DOMContentLoaded', function() {
//     setInterval(makeAnimation, 20);
// });