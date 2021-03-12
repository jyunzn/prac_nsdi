;(function () {
    
    oMenuWrap.addEventListener('mousemove', handleMouseMove);
    aNavLists.forEach(dom => dom.addEventListener('click', handleListClick));
    
    


    function init() {
        const doc_cw = document.documentElement.clientWidth;
        if (doc_cw >= 992) {
            window.onwheel = handleWheel;
        } else {
            window.onwheel = null;
        }

        if (doc_cw >= 1200) { 
            aWorks.forEach(dom => dom.onmouseover = handleWorksMouseIn);
            aWorks.forEach(dom => dom.onmouseout  = handleWorksMouseOut);
            oWebDesign.onmousemove = handleWebDesignMouseMove.bind(this, 1);
            oAppDesign.onmousemove = handleAppDesignMouseMove.bind(this, 2);
        } else {
            aWorks.forEach(dom => dom.onmouseover = null);
            aWorks.forEach(dom => dom.onmouseout  = null);
            oWebDesign.onmousemove = null;
            oAppDesign.onmousemove = null;
        }
    }

    window.addEventListener('resize', init);
    init();
    
})();