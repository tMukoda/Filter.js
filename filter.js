'use strict';

class Filter{
    constructor() { }
    
    //反転フィルター
    inverse(imageData) {
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        return imageData;
    } 

    //モノクロ化
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
}
