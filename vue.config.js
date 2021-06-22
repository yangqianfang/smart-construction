const path = require('path')

module.exports = {
    devServer: {
        host: '0.0.0.0',
        open: true,
        proxy: {
            '^/': {
                changeOrigin: true,
                target: 'https://xuzhiai.cn'
                // pathRewrite: { '/': '' }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    blue: '#FF5200',
                    red: '#FFB700'
                }
            }
        },
        extract: false
    },
    pwa: {
        iconPaths: {
            favicon32: './favicon.ico',
            favicon16: './favicon.ico',
            appleTouchIcon: './favicon.ico',
            maskIcon: './favicon.ico',
            msTileImage: './favicon.ico'
        }
    },
    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)))
    }
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/styles/mixin.less')]
        })
}
