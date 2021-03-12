;(function () {
    const oMenuWrap = document.querySelector('.menu-wrap');
    const oDroplet  = oMenuWrap.querySelector('.ext-droplet');
    
    
    function handleMouseMove(ev) {
        const x = ev.clientX - (window.innerWidth - oMenuWrap.clientWidth) - (oDroplet.clientWidth / 2);
        const y = ev.clientY - (oDroplet.clientHeight / 2)
        oDroplet.style.transform = `translate(${x}px, ${y}px)`;
    }

    window.oMenuWrap       = oMenuWrap;
    window.handleMouseMove = handleMouseMove;
})();