const themeDir = __dirname + '/../../';
module.exports = {
    purge: {
        mode: 'all',
        content: [
            `${themeDir}layouts/**/*.html`,
            'layouts/**/*.html',
            'contents/**/*.html',
        ],
    },
    theme: {
        // colors: {
        //     green: {
        //         default: 'rgb(0,54,44)',
        //         dark: 'rgb(0,105,86)'
        //     }
        //}
    },
    variants: {},
    plugins: []
}