import React from 'react';
import AlbumList from './components/AlbumList/index';

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: 'Rap',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/0/d/e/40dee59ca6ea3f25e654c8f94183884c.jpg',
    },
    {
      id: 2,
      name: 'Country',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/0/d/e/40dee59ca6ea3f25e654c8f94183884c.jpg',
    },
    {
      id: 3,
      name: 'Rock',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/0/d/e/40dee59ca6ea3f25e654c8f94183884c.jpg',
    },
  ];

  return (
    <div>
      <h2>Maybe you will like</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

AlbumFeatures.propTypes = {};

export default AlbumFeatures;
