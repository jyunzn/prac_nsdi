;(function () {
    const oAppDesign = document.querySelector('#appDesign');
    const oAppDesignAni = oAppDesign.querySelector('.ani');

    function handleAppDesignMouseMove(page, ev) {
        const {x, y} = getMouseXY(page, ev)
        handleMoveDom(oAppDesignAni, { x: x / 100, y: y / 100 })
    }

    window.oAppDesign               = oAppDesign;
    window.handleAppDesignMouseMove = handleAppDesignMouseMove;
})();