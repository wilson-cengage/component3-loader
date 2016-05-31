// Need to map globals for SystemJS to see
// Also note that we are using SystemJS.import in code to avoid Webpack from treating System.import as build time split points


SystemJS.config({
    map: {
        'component2a': '/components/component2a/component2a.js',
        'component3-package1': '/components/component3-package1/component3-package1.js',
        'component3-package2': '/components/component3-package2/component3-package2.js'
    }
});