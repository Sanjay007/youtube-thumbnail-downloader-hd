'use strict';

var getYouTubeID = require('get-video-id');

module.exports = function(url){
  const {id}  = getYouTubeID(url);

  if(!id && url.length === 11){
    id = url
  }

  return {
    'default': {
      url: 'http://img.youtube.com/vi/' + id + '/default.jpg',
      width: 120,
      height: 90
    },
    medium: {
      url: 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg',
      width: 320,
      height: 180
    },
    high: {
      url: 'http://img.youtube.com/vi/' + id + '/hqdefault.jpg',
      width: 480,
      height: 360
    },
    sdddefautl: {
        url: 'http://img.youtube.com/vi/' + id + '/sddefault.jpg',
        width: 640,
        height: 480
      },
      highMaxRes: {
        url: 'http://img.youtube.com/vi/' + id + '/maxresdefault.jpg',
        width: 1280,
        height: 720
      },
  }
};