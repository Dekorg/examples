﻿block('b-page')(
    replace()(function () {
        return {
            block: 'page',
            mods: { theme:'islands' },
            title: this.ctx.title + ' &mdash; Виртуальная визитка',
            head: [
                { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
                { elem: 'css', url: '/Bem/desktop.bundles/default/default.css' }
            ],
            scripts: [{ elem: 'js', url: '/Bem/desktop.bundles/default/default.js' }],
            mix: [].concat({ block: 'b-page' }).concat(this.ctx.mix),
            content: this.ctx.content
        };
    })
);