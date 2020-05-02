<template>
    <div id="app">
        <NavigationBar/>
        <router-view/>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
export default {
    components: {
        NavigationBar
    }
}
</script>

<style lang="scss">
body {
    background-color: #2C2F33 !important;
}
</style>
