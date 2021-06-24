import $api from '@/plugins/api'

import { formatMeterData, machineData } from '@/utils/index'
const module = {
    namespaced: true,
    state: {
        projectInfo: {},
        envData: {},
        newList: [],
        weatherData: {},
        alarmList: [],
        personData: {
            deviceAddr: '',
            imgUrl: '',
            recoTime: '',
            userName: '',
            userGroup: ''
        },
        carData: {
            deviceAddr: '',
            imgUrl: '',
            recoTime: '',
            carDesc: '',
            carNo: ''
        },
        meterData: [],
        machineData: {}
    },
    mutations: {
        setProjectInfo(state, data) {
            state.projectInfo = data
        },
        setEnvData(state, data) {
            state.envData = data
        },
        setNewsList(state, data) {
            state.newList = data
        },
        setWeather(state, data) {
            state.weatherData = data
        },
        setAlarmList(state, data) {
            state.alarmList = data
        },
        setPeopleData(state, data) {
            state.personData = data
        },
        setCarData(state, data) {
            state.carData = data
        },
        setMeterData(state, data) {
            state.meterData = data
        },
        setMachineData(state, data) {
            state.machineData = data
        }
    },
    getters: {},
    actions: {
        // 获取项目概况
        async getProjectInfo({ commit }, data) {
            const res = await $api.get('/site/getProjectBrief', data)
            commit('setProjectInfo', res.data.data)
        },

        // 环境数据
        async getEnvData({ commit }, data) {
            const res = await $api.get('/environment/findEnvironment', data)
            commit('setEnvData', res.data.data)
        },

        // 新闻数据
        async getNewsList({ commit }, data) {
            const res = await $api.get('/PartyNews/FindPartyNews', data)
            let fiveList = res.data.items.slice(0, 5)
            commit('setNewsList', fiveList)
        },

        // 天气数据
        async getWeatherData({ commit }, data) {
            const res = await $api.get('/site/weather/getWeatherInfo', data)
            commit('setWeather', res.data.data)
        },
        // 塔吊视频位置信息
        // eslint-disable-next-line no-unused-vars
        async getMachineData({ commit }, data) {
            commit('setMachineData', machineData)
        },

        // 报警列表
        // eslint-disable-next-line no-unused-vars
        async getAlarmList({ commit }, data) {
            // const res = await $api.post('/site/alarm/getAlarmList', data)
            // console.log(res.data.data.alarmList)
            let res = {
                errno: 0,
                data: {
                    alarmList: [
                        {
                            id: 36,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190450.jpg',
                            alarmAddr: 'demo 5号楼水池相机164',
                            alarmTime: '2021-06-22 15:47:05',
                            siteId: 100,
                            alarmType: '危险入侵',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.1446668287727716,
                            deviceX: 0.15495992224992927
                        },
                        {
                            id: 37,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190559.jpg',
                            alarmAddr: 'demo5号楼右侧走廊相机162',
                            alarmTime: '2021-06-22 15:47:05',
                            siteId: 100,
                            alarmType: '危险入侵',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.30155671666608685,
                            deviceX: 0.5062706791219822
                        },
                        {
                            id: 46,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191356.jpg',
                            alarmAddr: 'demo5号楼右侧走廊相机162',
                            alarmTime: '2021-06-22 14:49:05',
                            siteId: 100,
                            alarmType: '未戴安全帽',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.7588882288103922,
                            deviceX: 0.23754467501045062
                        },
                        {
                            id: 47,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191435.jpg',
                            alarmAddr: 'demo门口相机163',
                            alarmTime: '2021-06-22 14:49:05',
                            siteId: 100,
                            alarmType: '未戴安全帽',
                            status: 1,
                            alarmLevel: 0,
                            deviceY: 0.46297658642971906,
                            deviceX: 0.5126386368062051
                        },
                        {
                            id: 41,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191020.jpg',
                            alarmAddr: 'demo 9号楼左侧165',
                            alarmTime: '2021-06-22 14:47:05',
                            siteId: 100,
                            alarmType: '未穿反光衣',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.796593362704302,
                            deviceX: 0.24176058231031383
                        },
                        {
                            id: 35,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190316.jpg',
                            alarmAddr: 'demo 9号楼左侧165',
                            alarmTime: '2021-06-22 14:37:05',
                            siteId: 100,
                            alarmType: '危险入侵',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.45832084969969833,
                            deviceX: 0.876003264230962
                        },
                        {
                            id: 45,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191304.jpg',
                            alarmAddr: 'demo 7号楼8号楼中间走廊166',
                            alarmTime: '2021-06-22 13:49:05',
                            siteId: 100,
                            alarmType: '未戴安全帽',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.2880356654892049,
                            deviceX: 0.9249994941810585
                        },
                        {
                            id: 34,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190227.jpg',
                            alarmAddr: 'demo 9号楼左侧167',
                            alarmTime: '2021-06-22 12:37:05',
                            siteId: 100,
                            alarmType: '危险入侵',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.23759876487110165,
                            deviceX: 0.2612834878007714
                        },
                        {
                            id: 40,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190945.jpg',
                            alarmAddr: 'demo 5号楼水池相机164',
                            alarmTime: '2021-06-22 11:47:05',
                            siteId: 100,
                            alarmType: '未穿反光衣',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.5906023173411452,
                            deviceX: 0.8663696760805554
                        },
                        {
                            id: 44,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191227.jpg',
                            alarmAddr: 'demo 9号楼左侧165',
                            alarmTime: '2021-06-22 10:49:05',
                            siteId: 100,
                            alarmType: '未戴安全帽',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.9838306890610037,
                            deviceX: 0.6387523620281983
                        },
                        {
                            id: 39,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190907.jpg',
                            alarmAddr: 'demo5号楼右侧走廊相机162',
                            alarmTime: '2021-06-22 10:47:05',
                            siteId: 100,
                            alarmType: '未穿反光衣',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.24525259156005275,
                            deviceX: 0.20257464394897495
                        },
                        {
                            id: 43,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191144.jpg',
                            alarmAddr: 'demo 9号楼左侧167',
                            alarmTime: '2021-06-22 10:47:05',
                            siteId: 100,
                            alarmType: '未戴安全帽',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.5897753988538703,
                            deviceX: 0.9362750741980981
                        },
                        {
                            id: 38,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190810.jpg',
                            alarmAddr: 'demo门口相机163',
                            alarmTime: '2021-06-21 15:47:05',
                            siteId: 100,
                            alarmType: '未穿反光衣',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.6550760893107808,
                            deviceX: 0.7163728607116387
                        },
                        {
                            id: 42,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622191107.jpg',
                            alarmAddr: 'demo 9号楼左侧167',
                            alarmTime: '2021-06-21 14:47:05',
                            siteId: 100,
                            alarmType: '未戴安全帽',
                            status: 0,
                            alarmLevel: 0,
                            deviceY: 0.030604100435339454,
                            deviceX: 0.5313103095376789
                        },
                        {
                            id: 33,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622190021.jpg',
                            alarmAddr: 'demo 9号楼左侧167',
                            alarmTime: '2021-06-21 12:37:05',
                            siteId: 100,
                            alarmType: '烟火',
                            status: 1,
                            alarmLevel: 1,
                            deviceY: 0.029212833604268296,
                            deviceX: 0.8978817850849565
                        },
                        {
                            id: 31,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622185829.jpg',
                            alarmAddr: 'demo 9号楼左侧165',
                            alarmTime: '2021-06-21 09:37:05',
                            siteId: 100,
                            alarmType: '烟火',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.5154646951931265,
                            deviceX: 0.46912912460136147
                        },
                        {
                            id: 30,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622185751.jpg',
                            alarmAddr: 'demo 7号楼8号楼中间走廊166',
                            alarmTime: '2021-06-21 09:07:05',
                            siteId: 100,
                            alarmType: '烟火',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.8453857200703386,
                            deviceX: 0.2527752416791065
                        },
                        {
                            id: 27,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622185444.jpg',
                            alarmAddr: 'demo 9号楼左侧165',
                            alarmTime: '2021-06-21 08:07:05',
                            siteId: 100,
                            alarmType: '烟火',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.7037992529764046,
                            deviceX: 0.865712413528343
                        },
                        {
                            id: 29,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622185705.jpg',
                            alarmAddr: 'demo 5号楼水池相机164',
                            alarmTime: '2021-06-21 08:07:05',
                            siteId: 100,
                            alarmType: '烟火',
                            status: 1,
                            alarmLevel: 1,
                            deviceY: 0.8093451107645235,
                            deviceX: 0.0678221967207242
                        },
                        {
                            id: 28,
                            alarmURI:
                                'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210622185627.jpg',
                            alarmAddr: 'demo5号楼右侧走廊相机162',
                            alarmTime: '2021-06-20 08:07:05',
                            siteId: 100,
                            alarmType: '烟火',
                            status: 0,
                            alarmLevel: 1,
                            deviceY: 0.5115391933516913,
                            deviceX: 0.23262975903779004
                        }
                    ]
                },
                errmsg: '成功'
            }
            // return res.data.data.alarmList
            return res.data.alarmList

            // commit('setAlarmList', res.data.data.alarmList)
        },
        //水电数据
        async getMeterData({ commit }, data) {
            const res = await $api.get('/site/meter/list', data)
            let formatData = formatMeterData(res.data.data)
            commit('setMeterData', formatData)
        },
        // 人行
        async setPeople({ commit }, data) {
            commit('setPeopleData', data)
        },
        // 人行
        async setCar({ commit }, data) {
            commit('setCarData', data)
        },

        // 测试用户session id
        // eslint-disable-next-line no-unused-vars
        async getUID({ commit }, data) {
            await $api.get('/websocket/wsUserId?wsUserId=daping_002', data)
        }
    }
}

export default module
