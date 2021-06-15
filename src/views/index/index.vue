<template>
    <div class="wrap">
        <h1>index</h1>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { debounce, deepClone } from '@/utils'

export default {
    components: {},
    data() {
        return {}
    },
    computed: {
        // ...mapState('index', {
        //     // selectData: (state) => state.selectData
        // }),
        // ...mapState('user', {
        //     userData: (state) => state.userData,
        //     location: (state) => state.location,
        //     selectData: (state) => state.selectData
        // })
    },
    destroyed() {},

    mounted() {
        // this.initData()
    },
    async created() {
        //this.queryList()
    },
    methods: {
        async initData() {},
        getList() {
            // this.$store.dispatch('index/getStoreList', subData)
        }
    }
}
</script>

<style lang="less" scoped></style>
