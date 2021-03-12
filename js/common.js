;(function () {
    function getMouseXY(page, ev) {
        return {
            x: ev.pageX,
            y: ev.pageY - window.innerHeight * page
        }
    }

    function handleMoveDom(dom, { x, y, z }) {
        const translate = [];
        x && translate.push(`translateX(${x}px)`);
        y && translate.push(`translateY(${y}px)`);
        z && translate.push(`translateZ(${z}px)`);
        dom.style.transform = translate.join(' ');
    }

    function getCurHash() {
        return window.location.hash || 'nsdiTop';
    }

    function resetClazzes(doms, clazz) {
        doms.forEach(dom => resetClazz(dom, clazz));
    }
    function resetClazz(dom, clazz) {
        dom.className = clazz
    }

    function addClazz(dom, clazz) {
        dom.classList.add(clazz);
    }

    window.getMouseXY    = getMouseXY;
    window.getCurHash    = getCurHash;
    window.handleMoveDom = handleMoveDom;
    window.resetClazz    = resetClazz;
    window.resetClazzes  = resetClazzes;
    window.addClazz      = addClazz;
})();