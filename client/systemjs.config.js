// Need to map globals for SystemJS to see
// Also note that we are using SystemJS.import in code to avoid Webpack from treating System.import as build time split points


SystemJS.config({
    map: {
        'React': '../node_modules/react/dist/react-with-addons.min.js',
        'ReactDOM': '../node_modules/react-dom/dist/react-dom.min.js',
        'component3-package1': '/static/component3-package1/component3-package1.js',
        'component3-package2': '/static/component3-package2/component3-package2.js'
    }
});