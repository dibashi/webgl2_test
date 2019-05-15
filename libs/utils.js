
'use strict';

const utils = {

    getCanvas(id) {

        const canvas = document.getElementById(id);
        if (!canvas) {
            console.error(`There is no canvas with id ${id} on this page.`);

            return null;
        }

        return canvas;

    },


    getGLContext(canvas) {

        return canvas.getContext('webgl2') || console.error("webgl2 is not available in your browser.");

    },

    getShader(gl, id) {

        const script = document.getElementById(id);

        if (!script) {
            return null;
        }

        // console.log(script);
        const shaderString = script.text.trim();

        let shader;

        if (script.type === 'x-shader/x-vertex') {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else if (script.type === 'x-shader/x-fragment') {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else {
            console.error('script type error!!');
            return null;
        }

        gl.shaderSource(shader, shaderString);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;

    }

}