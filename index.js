var fishdoc = require('fishdoc');

fishdoc
({
    path: 'docs',
    output: 'build',
    name: 'Libnoctis',
    link: 'https://github.com/libnoctis/',
    // logo: 'logo.png', // Optional, to replace the logo in the navbar
    clean: true, // Optional, to clean the output directory (by default, set to false),
    // template: 'assets/template.html', // Optional, to replace the template (discouraged)
    colors: // Optional, to change the template colors
    {
        nav: '#660066',
        navText: 'white',
        navHover: 'rgba(0, 0, 0, 0.15)',
        tree: '#151515',
        treeText: 'white',
        treeHover: 'rgba(195, 0, 90, 0.30)'
    }
});
