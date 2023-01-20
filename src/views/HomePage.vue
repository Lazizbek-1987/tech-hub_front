<template>
    <div class="flex justify-between px-6 py-4 pt-12 space-x-3 mt-16">
        <RightBar/>
        <AboutCourses/>
    </div>
    <SendQuestionsForm/>
</template>

<script>
import RightBar from "../components/RightBar.vue";

import AboutCourses from "../components/AboutCourses.vue";
import SendQuestionsForm from "../components/SendQuestionsForm.vue";

export default {
    name: "HomePage",
    components: {
        SendQuestionsForm,
        AboutCourses,
        RightBar,
    },
}
</script>

<style scoped>

</style>