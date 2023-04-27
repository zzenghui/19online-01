import { createVuePlugin } from "vite-plugin-vue2";
import path from 'path'
import nobug from './noBug'
console.log(nobug);
import styleImport from 'vite-plugin-style-import'
export default {
    resolve: {
        // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            // 设置路径 这里resolve和join可自行选用
            '~': path.resolve(__dirname, './'),
            // 设置别名
            '@': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        createVuePlugin(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-ui',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `theme-chalk/${name}.css`
                    }
                }
            ]
        })
    ],
    clearScreen: true
}