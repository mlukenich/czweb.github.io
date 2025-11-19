
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = 'images/cz_bw_logo.png';
const output = 'images/cz_bw_logo.webp';

sharp(input)
    .webp({ quality: 80 })
    .toFile(output)
    .then(info => {
        console.log('Image converted successfully:', info);
    })
    .catch(err => {
        console.error('Error converting image:', err);
    });
