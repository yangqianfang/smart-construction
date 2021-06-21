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
        setPeople(state, data) {
            state.personData = data
        },
        setCar(state, data) {
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
        async getAlarmList({ commit }, data) {
            const res = await $api.post('/site/alarm/getAlarmList', data)
            // console.log(res.data.data.alarmList)
            commit('setAlarmList', res.data.data.alarmList)
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
