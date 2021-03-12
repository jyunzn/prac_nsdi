;(function () {
    const aNavLists = document.querySelectorAll('.nav-lists .list');
    const oHeader   = document.querySelector('.layout header');

    function handleListClick(ev) {
        ev.preventDefault();
        let to = ev.target.dataset.to || this.dataset.to;
        move(to, handleDesignWrapperClazz(to));
        handleNavListClazzByHash(this, to);
        handleHeaderHidden(to);
    }

    function handleDesignWrapperClazz(to) {
        window.oWebDesign.classList.remove('cur');
        window.oAppDesign.classList.remove('cur');

        if (to === 'webDesign') return window.oWebDesign;
        if (to === 'appDesign') return window.oAppDesign;
        return null;
    }

    function handleNavListClazzByHash(dom, hash) {
        resetClazzes(aNavLists, 'list');
        if (!dom) return ;
        addClazz(dom, 'cur');
        if (hash === 'webDesign') {
            addClazz(dom, 'cur-web');
        }
        if (hash === 'appDesign') {
            addClazz(dom, 'cur-app');
        }
    }

    function handleHeaderHidden(to) {
        if ((to === 'works' || to === 'contact') && document.documentElement.clientWidth < 1200) {
            // addClazz(oHeader, 'hidden')
            oHeader.style.opacity = 0;
            oHeader.style.pointerEvents = 'none';
            return;
        }

        // resetClazz(oHeader, '')
        oHeader.style.opacity = 1;
        oHeader.style.pointerEvents = '';
    }

    function move(to, dom = null) {
        $('html,body')
            .animate({scrollTop:$(`#${to}`).offset().top},1000)
            .promise()
            .done(function(){
                window.location.hash = to;
                dom && dom.classList.add('cur');
            })
    }

    function getListDomByHash(aNavLists, hash) {
        if (hash === 'appDesign') {
            hash = 'webDesign';
        }
        return Array.from(aNavLists).find(dom => dom.dataset.to === hash);
    }

    function initNavList() {
        const hash = getCurHash().slice(1); // #xxx
        let dom = getListDomByHash(aNavLists, hash);
        handleNavListClazzByHash(dom, hash);
        handleHeaderHidden(hash);
    }
    initNavList();

    window.initNavList     = initNavList;
    window.aNavLists       = aNavLists;
    window.handleListClick = handleListClick;
    window.handleDesignWrapperClazz = handleDesignWrapperClazz;
})();