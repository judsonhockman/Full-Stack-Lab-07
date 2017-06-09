var diceArray = [];

document.getElementById('generate-button').addEventListener('click', function() {
    var d = new Die;
    diceArray.push(d);
});

var btnR = document.getElementById('roll-button');
btnR.addEventListener('click', function() {
for (var i = 0; i < diceArray.length; i++) {
    diceArray[i].roll();
}

});

function Die() {
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.roll();
    document.body.appendChild(this.div);
}
Die.prototype.roll = function() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.innerText = this.value;
}