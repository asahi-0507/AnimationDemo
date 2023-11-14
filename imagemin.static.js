#!/usr/bin/env node

'use strict';

const imagemin = require('imagemin-keep-folder');
const imageminJpg = require('imagemin-mozjpeg');
const imageminPng = require('imagemin-pngquant');
const imageminSvg = require('imagemin-svgo');

const src = process.argv[2] || 'src/img';
const dist = process.argv[3] || 'dist/static/assets/img';

(async () => {
  await imagemin([src + '/**/*.{jpg,jpeg,png,svg}'], {
    plugins: [
      imageminJpg({
        quality: 80
      }),
      imageminPng({
        quality: [0.6, 0.8]
      }),
      imageminSvg()
    ],
    replaceOutputDir: output => {
      return output.replace(/src\/img\//, dist + '/')
    }
  }).then(() => {
    console.log('\u001b[32mImages optimized!\u001b[0m')
  });
})();
