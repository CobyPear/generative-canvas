const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

// Randomly generate lines of various color
// make a function that picks a color
// make a function that draws a straight line of random width and length
// make a function that draws a curved line of random width and length

// get random location on canvas
const randomLocation = () => {
    const height = window.innerHeight
    const width = window.innerWidth

    let randomHeight = Math.random() * height;
    let randomWidth = Math.random() * width;

    let result = [];
    result.push(randomWidth, randomHeight);

    return result;
}

//choose random color
// https://css-tricks.com/snippets/javascript/random-hex-color/
const setColor = () => Math.floor(Math.random() * 16777215).toString(16);

// draw a straight line of random width and length
const straightLine = () => {
    const [width, height] = randomLocation();
    ctx.beginPath();
    ctx.moveTo(width, height);
    ctx.lineTo((width * Math.random()), (height * Math.random()));
    ctx.lineWidth = Math.floor(Math.random() * 10);
    ctx.strokeStyle = `#${setColor()}`;
    ctx.stroke();
};

const curvedLine = () => {
    const [width, height] = randomLocation();
    // console.log(width, height)
    let randomArc = () => Math.floor(Math.random() * 360);
    ctx.beginPath();
    ctx.arc(randomArc(), randomArc(), randomArc(), randomArc(), Math.PI, false);
    ctx.lineWidth = Math.floor(Math.random() * 10)
    ctx.strokeStyle = `#${setColor()}`;
    ctx.stroke();

};

const multiLine = () => {
    const [width, height] = randomLocation()
    ctx.moveTo(width, height);
    ctx.beginPath()
    ctx.lineTo((width * Math.random()), (height * Math.random()));
    ctx.lineTo((width * Math.random()), (height * Math.random()));
    ctx.lineTo((width * Math.random()), (height * Math.random()));
    ctx.lineTo((width * Math.random()), (height * Math.random()));
    ctx.closePath()


    ctx.lineWidth = Math.floor(Math.random() * 10)
    ctx.strokeStyle = `#${setColor()}`;
    ctx.stroke();
}

const dot = () => {
    console.log("test")
    const [width, height] = randomLocation()
    ctx.beginPath()
    ctx.arc(width, height, 3, 0, Math.PI * 2, true)

    ctx.fillStyle = `#${setColor()}`;
    ctx.fill();
}


const straight = setInterval(straightLine, 200);
const curved = setInterval(curvedLine, 200);
const multi = setInterval(multiLine, 200)
const makeDot = setInterval(dot, 100)

const end = () => {
    clearInterval(straight);
    clearInterval(curved);
    clearInterval(multi)
    clearInterval(makeDot)
    
};

setTimeout(end, 120000);