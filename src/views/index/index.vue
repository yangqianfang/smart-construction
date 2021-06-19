<template>
    <div class="wrap">
        <div class="content">
            <div class="icon-box icon-box-01">
                <div class="icon"></div>
                <div class="address-detail show">
                    <div class="title">升降机1</div>
                    <div class="split"></div>
                    <div class="address">第二楼位置1</div>
                </div>
            </div>
            <div class="icon-box icon-box-02">
                <div class="icon"></div>
                <div class="address-detail">
                    <div class="title">升降机1</div>
                    <div class="split"></div>
                    <div class="address">第二楼位置1</div>
                </div>
            </div>
            <div class="icon-box icon-box-03">
                <div class="icon"></div>
                <div class="address-detail">
                    <div class="title">升降机1</div>
                    <div class="split"></div>
                    <div class="address">第二楼位置1</div>
                </div>
            </div>
            <div class="icon-box alarm danger">
                <div class="icon"></div>
                <div class="c-0"></div>
                <div class="c-1"></div>
                <div class="address-detail">
                    <div class="title">升降机1</div>
                    <div class="split"></div>
                    <div class="address">第二楼位置1</div>
                </div>
                <div class="warning-detail">
                    <div class="wd-img">
                        <img
                            src="https://img1.baidu.com/it/u=3894451097,1082981511&fm=26&fmt=auto&gp=0.jpg"
                        />
                    </div>
                    <div class="wd-text">
                        <div class="wd-text-li">2021/05/01 15:30:00</div>
                        <div class="wd-text-li">工友休息室前空地</div>
                        <div class="wd-text-li">工地明火</div>
                    </div>
                </div>
            </div>
            <div class="icon-box alarm warning">
                <div class="icon"></div>
                <div class="c-0"></div>
                <div class="c-1"></div>
                <div class="address-detail">
                    <div class="title">升降机1</div>
                    <div class="split"></div>
                    <div class="address">第二楼位置1</div>
                </div>
            </div>

            <div class="sub-title">
                <div class="left"></div>
                <div class="title">智慧园区</div>
                <div class="right"></div>
            </div>
            <div class="box left">
                <div class="header-time">
                    <div class="time-box">
                        <div class="time">12:05:12</div>
                        <div class="date">
                            <div class="data-text">星期一</div>
                            <div class="data-text">2021年5月10日</div>
                        </div>
                    </div>
                    <div class="line-box">
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="panel-box">
                    <div class="panel">
                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">项目概况</div>
                                    <div class="en">PROJECT OVERVIEW</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="info">
                                    <div class="li">
                                        <div class="lable">负责人：</div>
                                        <div class="cont">{{ projectInfo.chargePerson }}</div>
                                    </div>
                                    <div class="li">
                                        <div class="lable">项目名称：</div>
                                        <div class="cont">{{ projectInfo.name }}</div>
                                    </div>
                                    <div class="li">
                                        <div class="lable">施工单位：</div>
                                        <div class="cont">{{ projectInfo.constructionUnit }}</div>
                                    </div>
                                    <div class="li">
                                        <div class="lable">设计单位：</div>
                                        <div class="cont">{{ projectInfo.designUnit }}</div>
                                    </div>

                                    <div class="li">
                                        <div class="lable">监理单位：</div>
                                        <div class="cont">{{ projectInfo.supervisionUnit }}</div>
                                    </div>
                                    <div class="li">
                                        <div class="lable">建筑面积：</div>
                                        <div class="cont">
                                            {{ projectInfo.constructionArea }}平方米
                                        </div>
                                    </div>
                                    <div class="li">
                                        <div class="lable">总工期：</div>
                                        <div class="cont">{{ projectInfo.totalDuration }}天</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">智慧车行</div>
                                    <div class="en">WISDOM AILSE</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="car-info">
                                    <div class="img">
                                        <!-- <img :src="carData.imgUrl" /> -->
                                    </div>
                                    <div class="detail">
                                        <div class="li">{{ carData.recoTime }}</div>
                                        <div class="li">{{ carData.carNo }}</div>
                                        <div class="li">{{ carData.deviceAddr }}</div>
                                        <div class="li">{{ carData.carDesc }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">智慧人行</div>
                                    <div class="en">WISDOM WALK</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="car-info">
                                    <div class="img">
                                        <img :src="personData.imgUrl" />
                                    </div>
                                    <div class="detail">
                                        <div class="li">{{ personData.recoTime }}</div>
                                        <div class="li">{{ personData.userName }}</div>
                                        <div class="li">{{ personData.deviceAddr }}</div>
                                        <div class="li">{{ personData.userGroup }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top">
                        <div class="top-left"></div>
                        <div class="top-center"></div>
                        <div class="top-right"></div>
                    </div>
                    <div class="center">
                        <div class="center-left"></div>
                        <div class="center-center"></div>
                        <div class="center-right"></div>
                    </div>
                    <div class="bottom">
                        <div class="bottom-left"></div>
                        <div class="bottom-center"></div>
                        <div class="bottom-right"></div>
                    </div>
                </div>
            </div>
            <div class="box box-center">
                <div class="panel-box">
                    <div class="panel">
                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">实时报警</div>
                                    <div class="en">REAL-TIME-MONITORING</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="warning-box">
                                    <div class="wb-tab">
                                        <div
                                            class="wt-item"
                                            :class="{ active: item.checked }"
                                            v-for="(item, index) in tabList"
                                            :key="index"
                                            @click="toggleTab(item)"
                                        >
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <div class="wb-list">
                                        <div class="wb-list-wrap">
                                            <div
                                                class="wl-item danger"
                                                v-for="(item, index) in alarmList"
                                                :key="index"
                                            >
                                                <div class="wt-img">
                                                    <img :src="item.alarmURI" />
                                                </div>
                                                <div class="wt-text">
                                                    <div class="wtt-01">{{ item.alarmTime }}</div>
                                                    <div class="wtt-01">{{ item.alarmAddr }}</div>
                                                    <div class="wtt-01">{{ item.alarmType }}</div>
                                                </div>
                                            </div>
                                            <!-- <div class="swiper-container">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">slider1</div>
                                                    <div class="swiper-slide">slider2</div>
                                                    <div class="swiper-slide">slider3</div>
                                                </div>
                                            </div> -->
                                            <!-- <div class="wl-item warning">
                                                <div class="wt-img">
                                                    <img
                                                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.chinatruck.org%2Fuploadfile%2F2019%2F0702%2F20190702031909797.jpg&refer=http%3A%2F%2Fwww.chinatruck.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626404889&t=8c9c004e87c71193ca1d47a753b8c6d8"
                                                    />
                                                </div>
                                                <div class="wt-text">
                                                    <div class="wtt-01">2021/02/05 15:02:00</div>
                                                    <div class="wtt-01">一号楼人行道</div>
                                                    <div class="wtt-01">未戴安全帽</div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top">
                        <div class="top-left"></div>
                        <div class="top-center"></div>
                        <div class="top-right"></div>
                    </div>
                    <div class="center">
                        <div class="center-left"></div>
                        <div class="center-center"></div>
                        <div class="center-right"></div>
                    </div>
                    <div class="bottom">
                        <div class="bottom-left"></div>
                        <div class="bottom-center"></div>
                        <div class="bottom-right"></div>
                    </div>
                </div>
            </div>
            <div class="box right">
                <div class="header-time header-weather">
                    <div class="weather-box">
                        <div :class="`weather-pic weather-${weatherData.status}`"></div>
                        <div class="weather-text">{{ weatherData.weather }}</div>
                        <div class="weather-text">{{ weatherData.low }}℃</div>
                        <div class="weather-text">{{ weatherData.cityName }}</div>
                    </div>
                    <div class="line-box">
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="panel-box">
                    <div class="panel">
                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">新闻公示</div>
                                    <div class="en">NEW OF THE PUBLIC</div>
                                </div>
                                <div class="more">更多》</div>
                            </div>
                            <div class="item-content">
                                <div class="news-list">
                                    <div class="li" v-for="(item, index) in newList" :key="index">
                                        <span class="dot"></span
                                        ><a :href="item.url" target="_blank">{{ item.title }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">绿色工地</div>
                                    <div class="en">GREEN SITE</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="weather-info-box">
                                    <div class="weather-info">
                                        <div class="w-item item-01">
                                            <div class="img">
                                                <div class="icon"></div>
                                            </div>
                                            <div class="text">
                                                <div class="w-t1">湿度</div>
                                                <div class="w-t2">
                                                    {{ Math.floor(envData.hum) || 0
                                                    }}<span class="percent">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-item item-02">
                                            <div class="img">
                                                <div class="icon"></div>
                                            </div>
                                            <div class="text">
                                                <div class="w-t1">温度</div>
                                                <div class="w-t2">
                                                    {{ Math.floor(envData.tem) || 0 }}
                                                    <span class="percent">℃</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-item item-02">
                                            <div class="img">
                                                <div class="icon"></div>
                                            </div>
                                            <div class="text">
                                                <div class="w-t1">风向</div>
                                                <div
                                                    class="w-t2"
                                                    :class="{
                                                        two: envData.wd && envData.wd.length > 2
                                                    }"
                                                >
                                                    {{ envData.wd || 0 }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-item item-02">
                                            <div class="img">
                                                <div class="icon"></div>
                                            </div>
                                            <div class="text">
                                                <div class="w-t1">风速</div>
                                                <div class="w-t2">
                                                    {{ Math.floor(envData.ws) || 0
                                                    }}<span class="percent">M/S</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pm-box">
                                        <div class="pm-item">
                                            <div class="pm-t1">
                                                {{ Math.floor(envData.pm25) || 0 }}ug/m³
                                            </div>
                                            <div class="pm-t2">pm2.5</div>
                                        </div>
                                        <div class="pm-item">
                                            <div class="pm-t1">
                                                {{ Math.floor(envData.pm10) || 0 }}ug/m³
                                            </div>
                                            <div class="pm-t2">pm10</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-title">
                                <div class="text">
                                    <div class="title">节能减排</div>
                                    <div class="en">ENERGY SAVING</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="chart-box">
                                    <div class="bar-box">
                                        <div class="line"></div>
                                        <div
                                            class="bb-li"
                                            v-for="(item, index) in meterData.series"
                                            :key="index"
                                        >
                                            <div class="date">{{ item.miniDate }}</div>
                                            <div class="bar-left">
                                                <div
                                                    v-if="item.elecData"
                                                    class="bar"
                                                    :title="item.elecData + '吨'"
                                                    :style="{
                                                        width:
                                                            (item.elecData / item.max) * 100 + '%'
                                                    }"
                                                ></div>
                                            </div>
                                            <div class="bar-right">
                                                <div
                                                    v-if="item.waterData"
                                                    class="bar"
                                                    :title="item.waterData + '吨'"
                                                    :style="{
                                                        width:
                                                            (item.waterData / item.max) * 100 + '%'
                                                    }"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="axis-box">
                                        <div class="axis-wrap">
                                            <div
                                                class="axis-item"
                                                v-for="(item, index) in meterData.xAxis"
                                                :key="index"
                                            >
                                                {{ item }}
                                            </div>

                                            <div class="left-tag">(度)</div>
                                            <div class="right-tag">(吨)</div>
                                        </div>
                                    </div>
                                    <div class="legend-box">
                                        <div class="lb-item">
                                            <div class="icon"></div>
                                            <div class="text">电表</div>
                                        </div>
                                        <div class="lb-item lb-item2">
                                            <div class="icon"></div>
                                            <div class="text">电表</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top">
                        <div class="top-left"></div>
                        <div class="top-center"></div>
                        <div class="top-right"></div>
                    </div>
                    <div class="center">
                        <div class="center-left"></div>
                        <div class="center-center"></div>
                        <div class="center-right"></div>
                    </div>
                    <div class="bottom">
                        <div class="bottom-left"></div>
                        <div class="bottom-center"></div>
                        <div class="bottom-right"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue'
import { mapState } from 'vuex'
// import VueWebsocket from 'vue-websocket'
// Vue.use(VueWebsocket, 'ws://xuzhiai.cn/ws/server')
// import { debounce, deepClone } from '@/utils'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
    components: {},
    data() {
        return {
            socket: '',
            alarm: {},
            tabList: [
                { id: 'all', name: '全部', checked: true },
                { id: '安全帽', name: '安全帽', checked: false },
                { id: '反光衣', name: '反光衣', checked: false },
                { id: '烟火', name: '烟火', checked: false },
                { id: '危险入侵', name: '危险入侵', checked: false }
            ]
        }
    },
    computed: {
        ...mapState('index', {
            projectInfo: (state) => state.projectInfo,
            envData: (state) => state.envData,
            newList: (state) => state.newList,
            weatherData: (state) => state.weatherData,
            personData: (state) => state.personData,
            carData: (state) => state.carData,
            alarmList: (state) => state.alarmList,
            meterData: (state) => state.meterData
        })
    },
    destroyed() {},

    async mounted() {
        // 项目信息
        this.getProjectInfo()
        // 环境信息
        this.getEnvData()
        // 新闻信息
        this.getNewsList()
        // 天气信息
        this.getWeatherData()
        // socket初始化
        this.initData()
        // 水电信息
        this.getMeterData()
        // 报警列表
        this.getAlarmList({ get: 'all' })

        new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
            autoplay: 2000,
            paginationClickable: true
        })
    },
    async created() {
        //this.queryList()
    },
    methods: {
        async initData() {
            // 实例化socket
            // this.socket = new WebSocket('wss://xuzhiai.cn/ws/server')
            // 监听socket连接
            this.$socket.onopen = this.open
            // 监听socket错误信息
            this.$socket.onerror = this.error
            this.$socket.onclose = function(res) {
                console.info('连接关闭', res)
            }
            // 监听socket消息
            this.$socket.onmessage = this.getMessage
        },

        open: function() {
            console.log('socket连接成功')
            // this.send('setCarReco')
        },

        error: function() {
            console.log('连接错误')
        },

        getMessage: function(msg) {
            console.log('socket 返回')
            console.log(msg.data)
            let data = msg.data
            // 人行
            if (data.cmd === 'setPersonReco') {
                this.$store.dispatch('index/setPeople', data.value)
            }
            // 车行
            if (data.cmd === 'setCarReco') {
                this.$store.dispatch('index/setCar', data.value)
            }
            // 报警
            if (data.cmd === 'alarm') {
                this.alarm = data.value
            }
        },

        send: function(params) {
            console.log('send')
            this.$socket.send(params)
        },

        // getUID
        /*   async getUID() {
            await this.$store.dispatch('index/getUID')
        }, */

        // 项目概况
        getProjectInfo() {
            this.$store.dispatch('index/getProjectInfo')
        },

        // 环境信息
        getEnvData() {
            this.$store.dispatch('index/getEnvData')
        },

        // 环境信息
        getNewsList() {
            this.$store.dispatch('index/getNewsList')
        },

        // 天气信息
        getWeatherData() {
            this.$store.dispatch('index/getWeatherData')
        },

        // 报警列表
        getAlarmList(data) {
            this.$store.dispatch('index/getAlarmList', data)
        },

        // 报警列表
        getMeterData(data) {
            this.$store.dispatch('index/getMeterData', data)
        },

        toggleTab(item) {
            this.tabList.forEach((itme) => {
                itme.checked = false
            })
            item.checked = true
            let subData = { alarmType: item.id }
            if (item.id === 'all') {
                subData = { get: item.id }
            }

            this.getAlarmList(subData)
        }
    }
}
</script>

<style lang="less" scoped></style>
