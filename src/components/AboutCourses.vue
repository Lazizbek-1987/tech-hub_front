<template>
    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
            v-for="(course, index) in courses"
            :key="index"
            class="col-span-1 overflow-hidden"
        >
            <div class="px-3 py-2 bg-white rounded-2xl">
                <div class="py-4 space-y-4 w-full">
                    <h1 class="text-3xl text-gray-700 font-bold">{{ course.name }}</h1>
                    <img
                        class="w-full object-cover rounded-2xl w-full h-auto bg-primary-back p-6"
                        src="../assets/front-end.png"
                        alt=""
                    >
                    <p class="text-xl text-gray-500">
                        {{ course.aboutCourse.slice(0, 75) + '...' }}
                    </p>
                    <button class="px-12 py-1 border-2 border-blue-500 bg-blue-600 text-white rounded-xl
                                       hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500 duration-500">
                        Batafsil
                    </button>
                    <div class="flex justify-between">
                        <div class="flex space-x-3 text-gray-500 text-sm items-center font-medium">
                            <div class="flex space-x-1">
                                <img class="w-6 h-6 cursor-pointer" src="../components/icons/heart.png" alt="">
                                <span>45</span>
                            </div>
                            <div class="flex space-x-1">
                            <span>
                                <ChatBubbleLeftEllipsisIcon class="w-6 h-6 cursor-pointer hover:text-blue-500"/>
                            </span>
                                <span>16</span>
                            </div>
                            <div>
                                <ArrowUturnLeftIcon class="w-6 h-6 cursor-pointer hover:text-blue-500"/>
                            </div>
                        </div>
                        <div><img class="w-6 h-6 cursor-pointer" src="../components/icons/telegram.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ArrowUturnLeftIcon, ChatBubbleLeftEllipsisIcon,} from "@heroicons/vue/24/outline";
export default {
    name: "AboutCourses",
    components: {
        ArrowUturnLeftIcon,
        ChatBubbleLeftEllipsisIcon,
    },
    data() {
        return {
            courses: [
                {
                    name: "Front-end",
                    aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Dolor illum minima necessitatibus"
                },
                {
                    name: "Back-end",
                    aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Dolor illum minima necessitatibus"
                },
                {
                    name: "Andriod",
                    aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Dolor illum minima necessitatibus"
                },
                {
                    name: "IOS",
                    aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Dolor illum minima necessitatibus"
                },
                {
                    name: "Java",
                    aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Dolor illum minima necessitatibus"
                },
                {
                    name: "Design",
                    aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Dolor illum minima necessitatibus"
                },

            ]
        }
    }
}
</script>

<style scoped>

</style>