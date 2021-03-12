;(function () {
    const aWorks = document.querySelectorAll('#works .works-wrapper a');

    function handleWorksMouseIn(ev) {
        const direct = getDirect(this.getBoundingClientRect(), ev.clientX, ev.clientY);
        const p = this.parentElement
        
        p.className = '';
        p.classList.add(direct);
        requestAnimationFrame(next.bind(p));
    }
    function next(...args) {
        this.classList.add('ani');
        this.classList.add('enter_to');
    }
    function handleWorksMouseOut(ev) {
        const direct = getDirect(this.getBoundingClientRect(), ev.clientX, ev.clientY);
        const p = this.parentElement
        p.className = 'ani enter_to';
        p.classList.add(direct);
        p.classList.remove('enter_to');
    }

    /**
     * @param {React}  元素的 Rect 數據
     * @param {Number} 滑鼠的 x
     * @param {Number} 滑鼠的 y
     * @return {Enum} t: top, b: bottom, l: left, r: right
     */
    function getDirect({
        top,
        bottom,
        left,
        right
    }, mx, my) {
        const t = Math.abs(my - top);
        const b = Math.abs(my - bottom);
        const l = Math.abs(mx - left);
        const r = Math.abs(mx - right);
        const dirv = Math.min(t, b, l, r);
        return dirv == t ? 't' :
               dirv == b ? 'b' :
               dirv == l ? 'l' : 'r';
    }

    window.aWorks = aWorks;
    window.handleWorksMouseIn = handleWorksMouseIn;
    window.handleWorksMouseOut = handleWorksMouseOut;

})();