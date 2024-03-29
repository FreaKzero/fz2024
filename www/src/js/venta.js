import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

(function() {
    NET({
        el: "#wat",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7accfe,
        backgroundColor: 0x010f18
    })
})()

