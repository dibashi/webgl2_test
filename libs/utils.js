
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

}