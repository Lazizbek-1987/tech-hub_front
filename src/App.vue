<template>
    <div class="w-full min-h-screen overflow-hidden bg-primary-back font-primary">
        <TheNavbar/>
            <RouterView/>

        <TheFooter/>
    </div>
</template>

<script>

import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
    components: {TheFooter, TheNavbar}
}
</script>

<style scoped>
</style>
