import $api from '@/plugins/api'
const module = {
    namespaced: true,
    state: {
        selectData: '',
        storeData: []
    },
    mutations: {
        setSelect(state, data) {
            state.selectData = data
        },
        setStoreList(state, data) {
            state.storeData = data
        }
    },
    getters: {},
    actions: {
        async getSelectData({ commit }, data) {
            const res = await $api.post('/api/store/select-list', data)
            let formatData = res.data.data
            commit('setSelect', formatData)
        },
        // eslint-disable-next-line no-unused-vars
        async getStoreList({ commit }, data) {
            const res = await $api.post('/api/store/store-list', data)
            return res
        },
        // eslint-disable-next-line no-unused-vars
        async storeEnable({ commit }, data) {
            const res = await $api.post('/api/store/store-enable', data)
            // commit('setStoreList', res.data)
            return res
        }
    }
}

export default module
