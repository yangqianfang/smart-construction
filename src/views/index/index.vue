<template>
    <div class="wrap">
        <div class="content">
            <div
                class="icon-box "
                v-for="(item, index) in machineData"
                :key="index"
                :style="{ top: item.top + 'px', left: item.left + 'px', 'z-index': item.zindex }"
                :class="{
                    'icon-box-01': item.type === '1',
                    'icon-box-02': item.type === '2',
                    'icon-box-03': item.type === '3'
                }"
                @mouseenter="hover(item)"
                @mouseleave="out(item)"
            >
                <div class="icon"></div>
                <div class="address-detail" :class="{ show: item.show === true }">
                    <div class="title">{{ item.name }}</div>
                    <div class="split"></div>
                    <div class="address">{{ item.address }}</div>
                </div>
            </div>

            <div
                class="icon-box alarm danger"
                v-for="(item, index) in realAlarmList"
                :key="`a_${index}`"
                :class="{
                    danger: String(item.alarmLevel) === '1',
                    warning: String(item.alarmLevel) === '0',
                    active: item.active === true
                }"
                :style="{
                    top: item.deviceY + 'px',
                    left: item.deviceX + 'px',
                    'z-index': item.zindex
                }"
                :id="item.id"
                @mouseenter="hover(item)"
                @mouseleave="out(item)"
                @click="toggleclick(item)"
            >
                <div class="icon"></div>
                <div class="c-0"></div>
                <div class="c-1"></div>
                <div class="address-detail" :class="{ show: item.show === true }">
                    <div class="title">{{ item.alarmType }}</div>
                    <div class="split"></div>
                    <div class="address">{{ item.alarmAddr }}</div>
                </div>
                <div class="warning-detail" :class="{ show: item.clickShow === true }">
                    <div class="wd-img" v-if="item.alarmURI">
                        <img :src="item.alarmURI" />
                    </div>
                    <div class="wd-text">
                        <div class="wd-text-li">{{ item.alarmTime }}</div>
                        <div class="wd-text-li">{{ item.alarmAddr }}</div>
                        <div class="wd-text-li">{{ item.alarmType }}</div>
                    </div>
                </div>
            </div>

            <!-- <div class="icon-box icon-box-02">
                <div class="icon"></div>
                <div class="address-detail">
                    <div class="title">升降机1</div>
                    <div class="split"></div>
                    <div class="address">{{ item.name }}</div>
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
            </div> -->

            <div class="sub-title">
                <div class="left"></div>
                <div class="title">智慧园区</div>
                <div class="right"></div>
            </div>
            <div class="box left">
                <div class="header-time">
                    <div class="time-box">
                        <div class="time">{{ dateData.time }}</div>
                        <div class="date">
                            <div class="data-text">{{ dateData.week }}</div>
                            <div class="data-text">{{ dateData.date }}</div>
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
                                        <img v-if="carData.imgUrl" :src="carData.imgUrl" />
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
                                        <img v-if="personData.imgUrl" :src="personData.imgUrl" />
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
                                    <div class="wb-list" ref="wrapper">
                                        <div class="wb-list-wrap">
                                            <div
                                                class="wl-item"
                                                :class="{
                                                    danger:
                                                        String(item.alarmLevel) === '1' &&
                                                        String(item.status) === '0',
                                                    warning:
                                                        String(item.alarmLevel) === '0' &&
                                                        String(item.status) === '0'
                                                }"
                                                v-for="(item, index) in alarmList"
                                                :key="index"
                                                @click="alarmClick(item)"
                                            >
                                                <div class="wt-img">
                                                    <img :src="item.alarmURI" />
                                                </div>
                                                <div class="wt-text">
                                                    <div class="wtt-01">
                                                        {{ item.alarmTime }}
                                                    </div>
                                                    <div class="wtt-01">
                                                        {{ item.alarmAddr }}
                                                    </div>
                                                    <div class="wtt-01">
                                                        {{ item.alarmType }}
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- <div class="swiper-slide">slider1</div>
                                                <div class="swiper-slide">slider2</div>
                                                <div class="swiper-slide">slider3</div> -->
                                        </div>

                                        <!-- <div class="wb-list-wrap"> -->
                                        <!-- <div
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
                                        <!-- </div> -->
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
                                    <div
                                        class="bar-box"
                                        v-if="meterData.series && meterData.series.length > 0"
                                    >
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

                                    <div
                                        class="null"
                                        v-if="meterData.series && meterData.series.length === 0"
                                    >
                                        暂无数据
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
import { mapState } from 'vuex'
import BScroll from '@better-scroll/core'
import { machineData, getDate } from '@/utils/index'
console.log(BScroll)
export default {
    components: {},
    data() {
        return {
            interval: '',
            listInterval: '',
            machineData: machineData,
            dateData: {},
            socket: '',
            alarm: {},
            scroll: '',
            tabList: [
                { id: 'all', name: '全部', checked: true },
                { id: '安全帽', name: '安全帽', checked: false },
                { id: '反光衣', name: '反光衣', checked: false },
                { id: '烟火', name: '烟火', checked: false },
                { id: '危险入侵', name: '危险入侵', checked: false }
            ],
            alarmList: [],
            realAlarmList: [],
            // 报警坐标范围
            rangeX: [450, 1400],
            rangeY: [80, 620]
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
            // alarmList: (state) => state.alarmList,
            meterData: (state) => state.meterData
        })
    },
    destroyed() {},

    async mounted() {
        // 获取日期
        this.initDate()
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
        this.getListInterval()

        this.scroll = new BScroll('.wb-list', {
            scrollX: true
        })
    },
    async created() {},
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

        // 日期数据
        initDate() {
            if (this.interval) {
                clearInterval(this.interval)
            }
            this.interval = setInterval(() => {
                this.dateData = getDate()
            }, 1000)
        },

        getListInterval() {
            this.getAlarmList({ get: 'all' })
        },

        hover(item) {
            item.zindex = 300
            item.show = true
        },

        out(item) {
            item.show = false
            item.zindex = 100
            item.clickShow = false
        },
        toggleclick(item) {
            if (item.clickShow) {
                item.zindex = 300
                item.show = true
            } else {
                item.zindex = 100
                item.show = false
            }
            item.clickShow = !item.clickShow
        },

        open: function() {
            console.log('socket连接成功')
            /* setInterval(() => {
                let data = {
                    id: 88,
                    alarmURI:
                        'https://xuzhi-1305205599.cos.ap-nanjing.myqcloud.com/alarm/20210610212252.jpg',
                    alarmAddr: '88',
                    alarmTime: '2021-06-21 10:07:05',
                    siteId: 100,
                    alarmType: '88888',
                    status: 0,
                    alarmLevel: 1,
                    deviceY: 300.0,
                    deviceX: 1200.0
                }
                this.addRealAlarm(data)
            }, 5000) */
        },

        error: function() {
            console.log('连接错误')
        },

        // 接受socket 返回数据
        getMessage: function(msg) {
            console.log('socket 返回')
            let data = JSON.parse(msg.data)
            console.log(msg.data)
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
                this.addRealAlarm(data.value)
                // this.alarm = data.value
                // 收到报警拉取新列表
                // this.getAlarmList({ get: 'all' })
            }
        },

        send: function(params) {
            this.$socket.send(params)
        },

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
        async getAlarmList(data) {
            this.alarmList = await this.$store.dispatch('index/getAlarmList', data)
            this.scroll.refresh() //如果dom结构发生改变调用该方法
            if (data.get === 'all') {
                this.getMapWarningList()
            }
        },

        // 报警列表
        getMeterData(data) {
            this.$store.dispatch('index/getMeterData', data)
        },

        getMapWarningList() {
            // 0 未处理 1 误报 2 已完成
            let newArry = []
            this.alarmList.forEach((item) => {
                // 未处理的显示到大屏 坐标再范围内
                if (
                    item.deviceX > this.rangeX[0] &&
                    item.deviceX < this.rangeX[1] &&
                    item.deviceY > this.rangeY[0] &&
                    item.deviceY < this.rangeY[1]
                ) {
                    if (item.status === 0) {
                        let newNodde = Object.assign({}, item)
                        newNodde.show = false
                        newNodde.clickShow = false
                        newNodde.zindex = 100
                        if (newNodde.alarmLevel === 0 || newNodde.alarmLevel === 1) {
                            newArry.push(item)
                        }
                    }
                } else {
                    console.log('坐标不符合规范')
                }
            })
            this.realAlarmList = newArry
        },

        // 点击报警列表
        alarmClick(node) {
            // 清除选中状态
            console.log(node)
            let activeData = this.realAlarmList.filter((item) => item.active === true)
            if (activeData.length > 0) {
                activeData[0].active = false
            }
            // 当前点击激活
            if (node.status === 0) {
                let data = this.realAlarmList.filter((item) => item.id === node.id)
                if (data.length > 0) {
                    let curData = data[0]
                    curData.active = true
                }
            }
        },

        // 收到报警后更新报警状态
        addRealAlarm(node) {
            // console.log(node)
            //大屏报警里查找
            let dapingHasList = this.realAlarmList.filter((item) => node.id === item.id)
            //列表里查找
            let listHasList = this.alarmList.filter((item) => node.id === item.id)

            // 重复的id报警，更新状态
            if (dapingHasList.length > 0) {
                // console.log('大屏重复id，更新状态')
                dapingHasList[0].status = node.status
                // console.log(dapingHasList[0])
                // 更新显示数据
                this.getMapWarningList()
            } else {
                //报警
                if (
                    node.deviceX > this.rangeX[0] &&
                    node.deviceX < this.rangeX[1] &&
                    node.deviceY > this.rangeY[0] &&
                    node.deviceY < this.rangeY[1]
                ) {
                    if (node.status === 0) {
                        // 新的报警添加到大屏报警列表
                        node.show = false
                        node.clickShow = false
                        node.zindex = 100
                        // console.log('添加到新报警大屏')
                        // 添加到到报警
                        this.realAlarmList.unshift(node)
                    }
                } else {
                    console.log('坐标不符合规范')
                }
            }

            // 列表里有，更新数据状态
            if (listHasList.length > 0) {
                console.log('列表重复id，更新状态')
                listHasList[0].status = node.status
            } else {
                // 添加到列表
                console.log('添加到新列表')
                this.alarmList.unshift(node)
                this.scroll.refresh()
            }
        },

        // 塔吊位置数据
        getMachineData() {
            this.$store.dispatch('index/getMachineData')
        },

        // 报警列表tab点击事件
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
