<template>
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <header class="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">


                <!-- nav - start -->
                <nav class="hidden lg:flex gap-12">
                    <a class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><router-link to="/home" class="nav-link">Editor</router-link></a>
                    <a class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><router-link to="/pages" class="nav-link">Pages</router-link></a>
                    <a class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><router-link to="/products" class="nav-link">Products</router-link></a>
                    <a class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><router-link to="/user" class="nav-link">Пользователь</router-link></a>

                </nav>
                <!-- nav - end -->

            </header>


        <router-view></router-view>
    </div>
    </div>
</template>

<script>
export default {
name: "App"
}
</script>

