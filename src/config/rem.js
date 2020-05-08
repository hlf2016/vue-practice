(function () {
    function resize() {
        // 设计稿100px相当于 1rem ，750px --> 7.5rem --> 各种屏幕的100%的宽度
        var baseFontSize = 100;
        // 设计稿宽度
        var designWidth = 750;
        // 实际屏幕宽度 如 1000px
        var width = window.innerWidth;
        // 求出当前屏幕宽度下，1rem 等于 多少 px
        var currentFontSize = (width / designWidth) * baseFontSize;
        // 修改当前整个 HTML 页面的 font-size 属性值设置为当前 1rem 应该的值
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    }

    // 当切换页面大小是，更改页面比例
    window.onresize = function () {
        resize()
    };

    // 当页面渲染完毕时 切换页面比例
    document.addEventListener('DOMContentLoaded', resize())
}())