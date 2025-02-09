function init() {
    window.animSpeed = 1;
    window.count = 0;
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event) {
    console.log(event);
    document.getElementById('fileContent').textContent = event.target.result;

    loadAnim();
}

function loadAnim() {
    let button = document.createElement("button");
    button.num = window.count;
    button.className = "active";
    button.paused = 0;
    document.getElementById('lottie').append(button);

    // document.getElementById('lottie').innerHTML = '';

    document.getElementById('lottie').getElementsByTagName("button")[window.count].setAttribute('filename', document.getElementById('fileInput').files[0].name);
    if(Math.round((document.getElementById('fileInput').files[0].size) / 1000) < 1001){
        document.getElementById('lottie').getElementsByTagName("button")[window.count].setAttribute('filesize', Math.round((document.getElementById('fileInput').files[0].size) / 1000));
    }else{
        document.getElementById('lottie').getElementsByTagName("button")[window.count].setAttribute('filesize', Math.round((document.getElementById('fileInput').files[0].size) / 1000000));
    }
    
    document.getElementById('lottie').getElementsByTagName("button")[window.count].setAttribute('playing', ">>");

    const animationData = JSON.parse(document.getElementById('fileContent').textContent);
    document.getElementById('lottie').getElementsByTagName("button")[window.count].bodyAnim = bodymovin.loadAnimation({
        container: document.getElementById('lottie').getElementsByTagName("button")[document.getElementById('lottie').getElementsByTagName("button").length - 1],
        animationData: animationData,
        renderer: 'svg',
        loop: window.loopAll,
        autoplay: true,
    });

    document.getElementById('lottie').getElementsByTagName("button")[window.count].bodyAnim.setSpeed(window.animSpeed);

    document.getElementById('lottie').getElementsByTagName('button')[window.count].addEventListener('click', playPause, false);
    window.count += 1;

    window.lastLastFocus = window.lastFocus;
    window.lastFocus = document.getElementById('lottie').getElementsByTagName("button")[document.getElementById('lottie').getElementsByTagName("button").length - 1];
    focusHover();
}

function playPause() {
    window.lastLastFocus = window.lastFocus
    window.lastFocus = document.activeElement;
    if (document.activeElement.paused !== 1) {
        document.activeElement.bodyAnim.pause();
        document.activeElement.paused = 1;
        document.activeElement.setAttribute('playing', "");
    } else {
        document.activeElement.bodyAnim.play();
        document.activeElement.paused = 0;
        document.activeElement.setAttribute('playing', '>>');
    }
    focusHover();
}

function devTools() {
    mainWindow.webContents.openDevTools();
}

function focusHover() {
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].num == window.lastFocus.num) {
            x[i].classList.add("focused");
        } else {
            x[i].classList.remove("focused");
        }
    }
}

function closeClick() {
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].num == window.lastFocus.num) {
            x[i].innerText = '';
            x[i].className = '';
        }
    }
    document.getElementById("fileInput").value = '';
    if (window.fullScreened == 1) {
        fullScreenClick();
    }
    window.lastFocus = window.lastLastFocus;
}

function fullScreenClick() {
    if (window.fullScreened !== 1) {
        var x = document.getElementById("lottie").getElementsByTagName("button");
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i].num == window.lastFocus.num) {
                x[i].classList.add('bigger');
            } else {
                x[i].classList.remove('bigger');
            }
        }
        window.fullScreened = 1;
        document.getElementById("fullScreenButton").classList.add('minimize');
    } else {
        var x = document.getElementById("lottie").getElementsByTagName("button");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('bigger');
        }
        window.fullScreened = 0;
        document.getElementById("fullScreenButton").classList.remove('minimize');
    }
}

function playAll() {
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].bodyAnim.goToAndPlay(0);
        x[i].paused = 0;
        x[i].setAttribute('playing', ">>");
    }
}

function loopClick() {
    if (window.loopAll == false) {
        var x = document.getElementById("lottie").getElementsByTagName("button");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].bodyAnim.loop = true;
        }
        document.getElementById("loopButton").classList.remove("playOnce");
        window.loopAll = true;
    } else {
        var x = document.getElementById("lottie").getElementsByTagName("button");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].bodyAnim.loop = false;
        }
        document.getElementById("loopButton").classList.add("playOnce");
        window.loopAll = false;
    }
}

function changeColor(e) {
    document.querySelector(':root').style.setProperty('--buttonColor', e.target.value);
}

function changeSpeed() {
    if (window.animSpeed == 2) {
        window.animSpeed = 0.5;
    } else {
        window.animSpeed *= 2;
    }
    var x = document.getElementsByClassName("speed-icon");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('selected');
    }

    document.getElementById("speed_" + window.animSpeed).classList.add('selected');
    animationSpeed();
}

function animationSpeed() {
    var x = document.getElementById('lottie').getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].bodyAnim.setSpeed(window.animSpeed);
    }
}