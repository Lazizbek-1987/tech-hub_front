<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 mx-12 md:mx-28 xl:mx-36 px-6 py-4 rounded-2xl bg-white">
        <div class="col-span-1">
            <img class="md:w-96 w-full" src="../assets/operator.png" alt="">
        </div>
        <div class="col-span-1 mx-auto space-y-4">
            <h1 class="text-4xl text-blue-800 font-bold">Javob beramiz!</h1>
            <p class="text-xl text-gray-500">
                <span class="text-amber-600 font-bold">Savolingiz javobsiz qolmaydi!</span> Biz bilan bog'laning va
                sizga tez orada bog'lanib, sizni qiziqtirgan har
                qanday savolingizga javob beramiz.
            </p>
            <div>
                <input
                    type="text"
                    placeholder="Ismingiz"
                    class="w-full px-6 py-3 border rounded-full outline-0 border-2 focus:border-blue-500
                           duration-700 placeholder:text-gray-400 placeholder:text-xl placeholder:font-bold"
                >
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Telefon raqamingiz"
                    class="w-full px-6 py-3 border rounded-full outline-0 border-2 focus:border-blue-500
                           duration-700 placeholder:text-gray-400 placeholder:text-xl placeholder:font-bold"
                >
            </div>
            <div class="text-end">
                <button
                    class="px-12 py-3 rounded-full text-white bg-blue-500 font-bold text-xl border-2
                     border-blue-500 hover:bg-white hover:text-blue-500 duration-500"
                >
                    Jo'natish
                </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SendQuestionsForm"
}
</script>

<style scoped>

</style>