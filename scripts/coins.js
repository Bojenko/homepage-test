export class VerticalLine {
    constructor(container, objects, speed, initialOffsets, movingByDefault = true) {

        this.container = container;
        this.objects = objects;
        this.direction = speed >= 0;
        this.speed = Math.abs(speed);
        this.objectHeight = this.direction ? this.objects[0].clientHeight : 0;
        this.containerHeight = this.container.clientHeight;
        this.initialOffsets = initialOffsets;
        this.removed = false;

        for (let i = 0; i < this.objects.length; i++) {
            this.initialOffsets.push(-i * (this.objectHeight + 10));
        }
        this.objects.forEach((object, index) => {
            object.style.top = this.initialOffsets[index] + 'px';
        });


        this.run = this.run.bind(this);
        if (movingByDefault) this.interval = setInterval(this.run, 20);
        else {
            this.interval = setInterval(this.run, 20);
            clearInterval(this.interval);
        }
    }

    run() {
        if (this.direction) this.objects.forEach(object => {
            let currentPos = parseFloat(object.style.top);
            currentPos += this.speed;

            if (currentPos > this.containerHeight) {
                currentPos = -this.objectHeight;
            }

            object.style.top = currentPos + 'px';
        });
        else {
            this.objects.forEach(object => {
                let currentPos = parseFloat(object.style.top);
                currentPos -= this.speed;
                if (currentPos < this.objectHeight) {
                    currentPos = this.containerHeight;
                }

                object.style.top = currentPos + 'px';
            });
        }
    }

    stop() {
        clearInterval(this.interval);
    }

    start() {
        this.interval = setInterval(this.run, 20);
    }

    hide() {
        this.container.remove();
        this.removed = true;
    }

    show() {
        if (this.removed)
            document
                .getElementById('coins')
                .appendChild(this.container);
    }
}

export class HorizontalLine {

}

export const line1 = new VerticalLine(
    document.getElementById('coins1'),
    [
        document.getElementById('object1'),
        document.getElementById('object2'),
        document.getElementById('object3'),
        document.getElementById('object4'),
        document.getElementById('object5'),
        document.getElementById('object6'),
        document.getElementById('object7'),
        document.getElementById('object8')
    ],
    1,
    [0, 115, 350, 470, 590, 710, 945, 1065]
)

export const line2 = new VerticalLine(
    document.getElementById('coins2'),
    [
        document.getElementById('object9'),
        document.getElementById('object10'),
        document.getElementById('object11'),
        document.getElementById('object12'),
        document.getElementById('object13'),
        document.getElementById('object14'),
        document.getElementById('object15'),
        document.getElementById('object16')
    ],
    -2,
    [0, 115, 350, 470, 590, 710, 945, 1065]
)

export const line3 = new VerticalLine(
    document.getElementById('coins3'),
    [
        document.getElementById('object17'),
        document.getElementById('object18'),
        document.getElementById('object19'),
        document.getElementById('object20'),
        document.getElementById('object21'),
        document.getElementById('object22'),
        document.getElementById('object23'),
        document.getElementById('object24'),
        document.getElementById('object25'),
        document.getElementById('object26'),
        document.getElementById('object27')
    ],
    0.3,
    [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080]
)

//
export class FlatLine {
    constructor(container, objects, speed, initialOffsets, movingByDefault = true) {
        this.container = container;
        this.objects = objects;
        this.direction = speed >= 0;
        this.speed = Math.abs(speed);
        this.objectWidth = this.objects[0].offsetWidth;
        this.containerWidth = this.container.clientWidth;
        this.initialOffsets = initialOffsets;
        this.removed = false;

        for (let i = 0; i < this.objects.length; i++) {
            this.initialOffsets.push(-i * (this.objectWidth + 10));
        }
        this.objects.forEach((object, index) => {
            object.style.left = this.initialOffsets[index] + 'px';
        });

        this.run = this.run.bind(this);
        if (movingByDefault) this.interval = setInterval(this.run, 20);
        else {
            this.interval = setInterval(this.run, 20);
            clearInterval(this.interval);
        }
    }

    run() {
        this.objectWidth=this.objects[0].offsetWidth;
        if (this.direction) {
            this.objects.forEach(object => {
                let currentPos = parseFloat(object.style.left);
                currentPos += this.speed;

                if (currentPos > this.containerWidth + this.objectWidth) {
                    currentPos = -this.objectWidth;
                }

                object.style.left = currentPos + 'px';
            });
        } else {
            this.objects.forEach(object => {
                let currentPos = parseFloat(object.style.left);
                currentPos -= this.speed;

                if (currentPos < -2 * this.objectWidth) {
                    currentPos = this.containerWidth;
                }

                object.style.left = currentPos + 'px';
            });
        }
    }

    stop() {
        clearInterval(this.interval);
    }

    start() {
        this.interval = setInterval(this.run, 20);
    }

    hide() {
        this.container.remove();
        this.removed = true;
    }

    show() {
        if (this.removed) {
            document
                .getElementById('coins')
                .appendChild(this.container);
            this.removed = false;
        }
    }
}
