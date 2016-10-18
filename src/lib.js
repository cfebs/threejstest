// Use this one combined with the namedExports in rollup.config.js
// import { PlaneBufferGeometry, PlaneGeometry, LatheGeometry, Scene } from 'three';

// Use this to pull in individual things, which will actually tree-shake
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneBufferGeometry';
import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry';
import { LatheGeometry } from 'three/src/geometries/LatheGeometry';
import { Scene } from 'three/src/scenes/Scene';

const lame = () => {
    console.log('three p1', PlaneBufferGeometry);
    console.log('three p2', PlaneGeometry);
    console.log('three p3', LatheGeometry);
    console.log('three p3', Scene);
    console.log('three p3', new Scene());
};

export default lame;
