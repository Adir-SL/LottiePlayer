/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// var file = document.getElementById("files");

// file.addEventListener("change", function() {
//     for (var i = 0; i < file.files.length; i++) {
//         alert(file.files[i].path);
//         document.getElementById('lottiePlayer').setAttribute(src, file.files[i].path);
//     }
// }, false);

// document.getElementById('uiButton').onclick = (event) => {
//     alert(document.getElementById('files').files[0].relativePath);
//     document.getElementById('lottiePlayer').setAttribute(src, document.getElementById('files').value);
// }

const setFile = () => { 
    alert(document.getElementById('fileUpload').files[0].name)
}

// https://www.youtube.com/watch?v=TMA0vAzxydg
// https://www.youtube.com/watch?v=5XyzyMqY7Cw

var file = document.getElementById("fileUpload");

file.addEventListener("change", function() {
    for (var i = 0; i < file.files.length; i++) {
        alert(file.files[0]);
        // document.getElementById('lottiePlayer').setAttribute(src, file.files[i].path);
        document.getElementById('lottiePlayer').setAttribute(src, file.files[0].name);
    }
}, false);