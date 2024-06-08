function initWebGL() {
    // Get the canvas element
    var canvas = document.getElementById("webgl.data");
    var gl = canvas.getContext("webgl");

    if (!gl) {
        console.log("WebGL not supported, falling back on experimental-webgl");
        gl = canvas.getContext("experimental-webgl");
    }

    if (!gl) {
        alert("Your browser does not support WebGL");
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = initWebGL;