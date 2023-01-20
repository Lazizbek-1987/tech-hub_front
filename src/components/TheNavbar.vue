<template>
    <div class="bg-white px-6 py-4 shadow-md shadow-blue-100 w-full fixed top-0">
        <div class="flex space-x-6 items-center justify-between">
            <div class="font-bold text-4xl cursor-pointer hover:scale-95 duration-500">
                <span class="text-amber-500">Tech</span>
                <span class="text-amber-600">Hub</span>
            </div>
            <div>
                <ul class="flex space-x-6 text-lg items-center">
                    <li class="flex space-x-1 items-center">
                        <span><HomeIcon class="w-6 h-6 text-blue-500"/></span>
                        <span class="hover:cursor-pointer hover:text-blue-500 duration-500">Homepage</span>
                    </li>
                    <li class="flex space-x-1 items-center">
                        <span><UsersIcon class="w-6 h-6 text-blue-500"/></span>
                        <span class="hover:cursor-pointer hover:text-blue-500 duration-500">Connections</span>
                    </li>
                    <li class="flex space-x-1 items-center">
                        <span><ChatBubbleLeftEllipsisIcon class="w-6 h-6 text-blue-500"/></span>
                        <span class="hover:cursor-pointer hover:text-blue-500 duration-500">Messages</span>
                    </li>
                    <li class="flex space-x-1 items-center">
                        <span><BellAlertIcon class="w-6 h-6 text-blue-500"/></span>
                        <span class="hover:cursor-pointer hover:text-blue-500 duration-500">Notifications</span>
                    </li>
                    <li class="flex space-x-1 items-center">
                        <span><Cog8ToothIcon class="w-6 h-6 text-blue-500"/></span>
                        <span class="hover:cursor-pointer hover:text-blue-500 duration-500">Tools</span>
                    </li>
                </ul>
            </div>
            <div class="relative items-center">
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
    BellAlertIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog8ToothIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    UsersIcon
} from '@heroicons/vue/24/outline'

export default {
    name: "TheNavbar",
    components: {
        HomeIcon,
        UsersIcon,
        ChatBubbleLeftEllipsisIcon,
        BellAlertIcon,
        Cog8ToothIcon,
        MagnifyingGlassIcon
    }
}
</script>

<style scoped>

</style>