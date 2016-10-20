module.exports = {
    baseDir: 'Bem',
    baseUrl: 'dev',
    bundles: 'test.bundles',
    levels: ['desktop.blocks'],
    defaultTarget: '?.sandbox.html',
    targets: {
        '?.min.js': ['js', 'bemhtml.js'],
        '?.sandbox.js': ['sandbox.js'],
        '?.min.css': ['css']
    }
};
