<template>
    <div class="w-72 space-y-6 h-min hidden lg:block">
        <div class="px-6 py-4 bg-white rounded-lg space-y-6">
            <h1 class="font-medium font-extrabold text-xl">O'quvchilar fikrlari</h1>
            <div v-for="foo in 10" class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                    <img class="w-full h-auto object-cover" src="../assets/avatar.jpg" alt="">
                </div>
                <div>
                    <h1 class="text-lg font-medium">Angelina Jolie</h1>
                    <h1 class="text-xs text-gray-500">Front-end developer</h1>
                </div>
                <div class="mt-auto">
                    <EllipsisHorizontalIcon  class="w-7 h-7 text-gray-500 cursor-pointer hover:text-blue-500 "/>
                </div>
            </div>
            <div class="flex justify-center">
                <button class="text-lg text-blue-600 font-bold cursor-pointer hover:text-blue-500">Show more</button>
            </div>
        </div>
    </div>
</template>

<script>
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";
export default {
    name: "RightBar",
    components: { EllipsisHorizontalIcon }
}
</script>

<style scoped>

</style>