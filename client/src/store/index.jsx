import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '../../public/threejs.png',
    fullDecal: '../../public/threejs.png'
});

export default state