const corpoDoPrograma = document.querySelector('body')
const sectionImg = document.createElement("section")
const coin = {
    state: 0,

    flip: function () {
        const stateRandom = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.state = stateRandom(0, 1)

        return this.state
    },

    toString: function () {
        if (this.state === 0) {
            return '  Heads'
        }
        else {
            return 'Tails'
        }
    },
    toHTML: function () {
        const image = document.createElement("img");

        corpoDoPrograma.appendChild(sectionImg)
        sectionImg.appendChild(image)

        if (this.toString() === '  Heads') {
            image.src = 'assets/img/cara.jpg'
        }
        else {
            image.src = 'assets/img/coroa.jpeg'

        }
        return image;
    },
};
function display20Flips() {
    const results = [];
    for (let count = 0; count < 20; count++) {
       results.push(coin.toString(coin.flip()))
    }   
    const textResults = document.createElement('p')
    const sectionText = document.createElement('section')
    textResults.innerHTML = results
    corpoDoPrograma.appendChild(sectionText)
    sectionText.appendChild(textResults)
    return results 
}

function display20Images() {
    const results = [];
    for (let count = 0; count < 20; count++) {
        results.push(coin.toString(coin.flip()))
        coin.toHTML()
    }
    return results
}
display20Flips()
display20Images()

