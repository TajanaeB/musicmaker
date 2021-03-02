window.addEventListener('load',() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#966fd6",
        "#20b2aa",
        "#10d210",
        "#ffb6c1",
        "#ffa07a",
        "#ffff00"
    ];

    // add sounds for each click
    pads.forEach((pad,index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            //bubble function into the sounds
            createBubbles(index);

        });
    });

    // create bubble function
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function (){
            visual.removeChild(this);
        });
    }
});
