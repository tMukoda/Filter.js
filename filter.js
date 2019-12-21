'use strict';

class Filter{
    constructor() { }
    
    //inverse filter
    inverse(imageData) {
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        return imageData;
    } 

    //mono filter
    mono(imageData) {
        const rRate = 0.298912;
        const gRate = 0.586611;
        const bRate = 0.114478;
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            let mono = Math.round(data[i] * rRate + data[i + 1] * gRate + data[i + 2] * bRate);
            if (mono > 255) {
                mono = 255;
            }
            data[i] = mono;
            data[i + 1] = mono;
            data[i + 2] = mono;
        }
        return imageData;
    }

    //binarization
    binarization(imageData, threshold) {
        const rRate = 0.298912;
        const gRate = 0.586611;
        const bRate = 0.114478;
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            let mono = Math.round(data[i] * rRate + data[i + 1] * gRate + data[i + 2] * bRate);
            if (mono > threshold) {
                mono = 255;
            } else {
                mono = 0;
            }
            data[i] = mono;
            data[i + 1] = mono;
            data[i + 2] = mono;
        }
        return imageData;
    }
}
