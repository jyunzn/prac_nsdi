;(function () {
    let lock = false;
    let curall = ['#nsdiTop', '#webDesign', '#appDesign', '#works', '#contact'];
    let t = Date.now();
    let limit_t = 1500;
    function handleWheel(ev) {
        if (lock) return ;

        // Throttle
        let cur_time = Date.now();
        if ((cur_time - t) < limit_t) return ;
        t = cur_time;

        lock = true;

        let curhash = window.location.hash || '#nsdiTop';
        let curpage = curall.findIndex(n => n === curhash); 

        let to;
        
        if (ev.wheelDelta > 0) {
            if (curpage === 0) return (lock = false);
            to = curall[curpage - 1];
        } else {
            if (curpage === curall.length - 1) return (lock = false);
            to = curall[curpage + 1];
            
        }

        let oDesignWrapper = handleDesignWrapperClazz(to.slice(1));
        $('html,body')
            .animate({scrollTop:$(to).offset().top}, 1000)
            .promise()
            .done(function(){
                window.location.hash = to;
                initNavList();
                oDesignWrapper && addClazz(oDesignWrapper, 'cur');
                lock = false;
            })
    }
    window.handleWheel = handleWheel;
})();