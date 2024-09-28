<script setup>
// 雖然現在沒有額外的邏輯，但保留這個標籤以便將來擴展
</script>

<template>
    <nav class="bg-white shadow-md">
        <div class="mx-12">
            <div class="flex justify-between h-16 ">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <img class=" w-auto cursor-pointer"
                             src="../assets/images/logo.png"
                             alt="Logo" />
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#"
                           class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            附近站牌
                        </a>
                        <a href="#"
                           class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            路線規劃
                        </a>
                        <a href="#"
                           class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            站點查詢
                        </a>
                        <a href="#"
                           class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            我的收藏
                        </a>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                        中文
                    </button>
                    <span class="text-gray-300">
                        |
                    </span>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                        英文
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* 如果需要，可以在這裡添加額外的樣式 */
</style>
