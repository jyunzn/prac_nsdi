;(function () {
    const oWebDesign = document.querySelector('#webDesign');
    const oWebDesignAni = oWebDesign.querySelector('.ani');
    
    
    function handleWebDesignMouseMove(page, ev) {
        const {x, y} = getMouseXY(page, ev)
        handleMoveDom(oWebDesignAni, { x: x / 100, y: y / 100 })
    }

    window.oWebDesign               = oWebDesign;
    window.handleWebDesignMouseMove = handleWebDesignMouseMove;
})();