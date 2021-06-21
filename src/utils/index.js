/* 
    by yangqianfang 
    18710023352 
    2021-06-16
*/
import * as dayjs from 'dayjs'

// 塔吊摄像头数据
export const machineData = [
    // { left: '830', top: '705', name: '相机163', address: '门口', type: '1', show: true },
    { left: '930', top: '420', name: '相机162', address: '5号楼右侧走廊', type: '1', show: false },
    { left: '1140', top: '540', name: '相机164', address: '5号楼水池', type: '1', show: false },
    {
        left: '1180',
        top: '240',
        name: '相机166',
        address: '7号楼8号楼中间走廊',
        type: '1',
        show: false
    },
    { left: '1430', top: '240', name: '相机165', address: '9号楼左侧', type: '1', show: false },
    { left: '930', top: '360', name: '相机167', address: '5号楼右侧', type: '1', show: false },
    { left: '860', top: '590', name: '塔吊机', address: '1234号楼', type: '2', show: false },
    { left: '1160', top: '320', name: '塔吊机', address: '567号楼', type: '2', show: false },
    { left: '1380', top: '210', name: '塔吊机', address: '89号楼', type: '2', show: false },
    { left: '980', top: '430', name: '升降机', address: '5号楼', type: '3', show: false },
    { left: '1200', top: '170', name: '升降机', address: '8号楼', type: '3', show: false }
]

export function getItembyDate(list, date) {
    return list.filter((item) => date == item.meterDatetime)
}

// 取最大值
export function getMaxVal(array) {
    return Math.max.apply(
        Math,
        array.map(function(o) {
            return o.meterData // 需要比较的值
        })
    )
}

// 格式化数据水电柱状图
export function formatMeterData(data) {
    // meterType1 水 2电
    let elec = data.elec
    let water = data.water

    let elecMax = (elec.length > 0 && getMaxVal(elec)) || 0
    let waterMax = (water.length > 0 && getMaxVal(water)) || 0
    // X轴最大值  x1.2 比例更好看不撑满
    let max = Math.max(elecMax, waterMax) * 1.2
    let avge = parseInt(max / 3) || 0
    // x 轴数据
    let xAxis = [max, avge * 2, avge, 0, avge, avge * 2, max]

    elec.forEach((item) => {
        item.meterType = '2'
        item.elecData = item.meterData
    })
    water.forEach((item) => {
        item.meterType = '1'
        item.waterData = item.meterData
    })
    let allData = elec.concat(water)
    let newData = []
    if (allData.length > 0) {
        allData.sort(function(a, b) {
            return b.meterDatetime < a.meterDatetime ? -1 : 1
        })

        for (let i = 0; i < allData.length; i++) {
            let item = allData[i]
            item.max = max
            item.miniDate = item.meterDatetime.substring(5, 10).replace('-', '/')
            let node = getItembyDate(newData, item.meterDatetime)
            if (node.length > 0) {
                let nodeItem = node[0]
                if (nodeItem.meterType === '1') {
                    nodeItem.elecData = item.elecData
                }
                if (nodeItem.meterType === '2') {
                    nodeItem.waterData = item.waterData
                }
            } else {
                newData.push(item)
            }
        }
    }
    return {
        xAxis,
        series: newData
    }
}

// 日期数据
export function getDate() {
    let wk = ['日', '一', '二', '三', '四', '五', '六']
    return {
        date: dayjs().format('YYYY年MM月DD日'),
        time: dayjs().format('HH:mm:ss'),
        week: `星期${wk[dayjs().day()]}`
    }
}
