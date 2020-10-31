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

    let randomHeight = Math.floor(Math.random() * height);
    let randomWidth = Math.floor(Math.random() * width);

    let result = [];
    result.push(randomHeight, randomWidth);

    return result;
}

//choose random color
    // https://css-tricks.com/snippets/javascript/random-hex-color/
const setColor = () => Math.floor(Math.random()*16777215).toString(16);

// draw a straight line of random width and length
const straightLine = () => {
    ctx.moveTo(randomLocation()[0], randomLocation()[1]);
    ctx.lineTo(randomLocation()[0], randomLocation()[1]);
    ctx.stroke();
}

setInterval(straightLine, 500)