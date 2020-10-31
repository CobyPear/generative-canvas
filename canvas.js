const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

// Randomly generate lines of various color
    // make a function that picks a color
    // make a function that draws a straight line of random width and length
    // make a function that draws a curved line of random width and length

// get random location on canvas
const randomLocation = () => {
    const style = getComputedStyle(c);
    let height = parseFloat(style.height);
    let width = parseFloat(style.width);

    let randomHeight = Math.random() * height;
    let randomWidth = Math.random() * width;

    let result = [];
    result.push(randomWidth, randomHeight);

    return result;
}

//choose random color
    // https://css-tricks.com/snippets/javascript/random-hex-color/
const setColor = () => Math.floor(Math.random()*16777215).toString(16);

// draw a straight line of random width and length
const straightLine = () => {
    const [width, height] = randomLocation();
    ctx.beginPath();
    ctx.moveTo(width, height);
    ctx.lineTo(width * Math.random(), height * Math.random());
    ctx.lineWidth = Math.floor(Math.random() * 10);
    ctx.strokeStyle = `#${setColor()}`;
    ctx.stroke();
};

const curvedLine = () => {
    let randomArc = () => Math.floor(Math.random() * 360);
    console.log(randomArc());
    ctx.beginPath();
    ctx.arc(randomArc(), randomArc(), randomArc(), randomArc(), Math.PI, false);
    ctx.lineWidth = Math.floor(Math.random() * 10)
    ctx.strokeStyle = `#${setColor()}`;
    ctx.stroke();

};

const straight = setInterval(straightLine, 100);
const curved = setInterval(curvedLine, 100);

const end = () => {
    clearInterval(straight);
    clearInterval(curved);
};

setTimeout(end, 120000);
