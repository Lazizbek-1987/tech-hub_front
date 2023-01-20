<template>
    <div class="bg-white px-6 py-4 shadow-md shadow-blue-100 w-full fixed top-0">
        <div class="flex space-x-0 md:space-x-6 items-center justify-between">
            <div class="font-bold text-4xl cursor-pointer hover:scale-95 duration-500">
                <span class="text-amber-500">Tech</span>
                <span class="text-amber-600">Hub</span>
            </div>
            <span
                @click="menuOpen"
                class="absolute block md:hidden w-6 h-6 items-center cursor-pointer right-6 top-5"
            >
            <XMarkIcon v-if="open"/>
            <Bars3Icon v-else/>
        </span>

            <ul class="py-8 md:py-0 space-y-8 md:space-y-0 md:space-y-0 md:space-x-8 md:px-0 px-3 pb-10 pl-7 md:pl-0 md:pb-0 md:flex
            md:items-center md:static absolute bg-gray-500 md:bg-white md:w-auto w-full top-14 duration-700 ease-in"
                :class="[open ? 'left-0' : 'left-[-100%]']">
                <li class="flex space-x-3 md:space-x-1 items-center">
                    <span><HomeIcon class="w-8 h-8 md:w-6 md:h-6 text-amber-400 md:text-blue-500"/></span>
                    <span
                        class="text-white md:text-gray-700 hover:cursor-pointer text-xl md:text-lg hover:text-blue-500 duration-500"
                    >Homepage
                    </span>
                </li>
                <li class="flex space-x-3 md:space-x-1 items-center">
                    <span><UsersIcon class="w-8 h-8 md:w-6 md:h-6 text-amber-400 md:text-blue-500"/></span>
                    <span
                        class="text-white md:text-gray-700 hover:cursor-pointer text-xl md:text-lg hover:text-blue-500 duration-500"
                    >Connections
                    </span>
                </li>
                <li class="flex space-x-3 md:space-x-1 items-center">
                    <span><ChatBubbleLeftEllipsisIcon
                        class="w-8 h-8 md:w-6 md:h-6 text-amber-400 md:text-blue-500"/></span>
                    <span
                        class="text-white md:text-gray-700 hover:cursor-pointer text-xl md:text-lg hover:text-blue-500 duration-500"
                    >Messages
                    </span>
                </li>
                <li class="flex space-x-3 md:space-x-1 items-center">
                    <span><BellAlertIcon class="w-8 h-8 md:w-6 md:h-6 text-amber-400 md:text-blue-500"/></span>
                    <span
                        class="text-white md:text-gray-700 hover:cursor-pointer text-xl md:text-lg hover:text-blue-500 duration-500"
                    >Notifications
                    </span>
                </li>
            </ul>
            <div class="relative items-center hidden lg:block">
                <MagnifyingGlassIcon class="w-7 h-7 pt-2 pl-2 absolute"/>
                <input
                    type="text"
                    placeholder="Search"
                    class="w-72 pl-8 py-1 border rounded-full outline-0 border-2 focus:border-blue-500
                           duration-700 placeholder:text-gray-500"
                >
            </div>
        </div>
    </div>
</template>

<script>
import {
    Bars3Icon,
    BellAlertIcon,
    ChatBubbleLeftEllipsisIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    UsersIcon,
    XMarkIcon
} from '@heroicons/vue/24/outline'

export default {
    name: "TheNavbar",
    components: {
        HomeIcon,
        UsersIcon,
        ChatBubbleLeftEllipsisIcon,
        BellAlertIcon,
        MagnifyingGlassIcon,
        XMarkIcon,
        Bars3Icon
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        menuOpen() {
            this.open = !this.open
        }
    }
}
</script>

<style scoped>

</style>