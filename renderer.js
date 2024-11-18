function init() {
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
    button.paused = 0;
    document.getElementById('lottie').append(button);

    // document.getElementById('lottie').innerHTML = '';
    const animationData = JSON.parse(document.getElementById('fileContent').textContent);
    document.getElementById('lottie').getElementsByTagName("button")[window.count].bodyAnim = bodymovin.loadAnimation({
        container: document.getElementById('lottie').getElementsByTagName("button")[document.getElementById('lottie').getElementsByTagName("button").length - 1],
        animationData: animationData,
        renderer: 'svg',
        loop: true,
        autoplay: true,
    });

    document.getElementById('lottie').getElementsByTagName('button')[window.count].addEventListener('click', playPause, false);
    window.count += 1;
}

function playPause() {
    if (document.getElementById('lottie').getElementsByTagName('button')[document.activeElement.num].paused !== 1) {
        document.getElementById('lottie').getElementsByTagName('button')[document.activeElement.num].bodyAnim.pause();
        document.getElementById('lottie').getElementsByTagName('button')[document.activeElement.num].paused = 1;
    } else {
        document.getElementById('lottie').getElementsByTagName('button')[document.activeElement.num].bodyAnim.play();
        document.getElementById('lottie').getElementsByTagName('button')[document.activeElement.num].paused = 0;
    }
}

function devTools(){
    mainWindow.webContents.openDevTools();
}