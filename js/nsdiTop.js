(function () {
    const oNsdiTop       = document.querySelector('#nsdiTop');
    const aNsdiTopAniZ   = document.querySelectorAll('aniz');
    const aNsdiTopAniYZ  = oNsdiTop.querySelectorAll('.aniyz');
    const aNsdiTopAniZYX = oNsdiTop.querySelectorAll('.anixyz');
    oNsdiTop.addEventListener('mousemove', handleNsdiTopMouseMove.bind(this, 0))

    function handleNsdiTopMouseMove(page, ev) {
        const { x, y } = getMouseXY(page, ev)
        console.log(x, y);
        // console.log();
        // console.log(x, y);
        // console.log(x, y)
        // doms.forEach(dom => handleMoveDom(dom, { z: x / 10}));
        aNsdiTopAniZ.forEach(dom   => handleMoveDom(dom, { z: x / 10}));
        aNsdiTopAniYZ.forEach(dom  => handleMoveDom(dom, { y: y / 10, z: x / 10}));
        aNsdiTopAniZYX.forEach(dom => handleMoveDom(dom, { x: x / 6, y: y / 10, z: x / 10}))
        
    }
})()

// xy: 12 13
// xyz: 1 2 7 10
// z: 3 9 11