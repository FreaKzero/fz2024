import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

document.addEventListener('DOMContentLoaded', function (event) {

    
    NET({
        el: "#vanta",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundAlpha: 0,
        color: 0x6597ff,
        showDots: true
      })
  })
