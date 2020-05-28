(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.npmkit = factory());
}(this, (function () { 'use strict';

    function npmkit() {
        console.log('npmkit');
    }

    return npmkit;

})));
//# sourceMappingURL=index.js.map
