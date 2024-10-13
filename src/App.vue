<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import HeaderSection from '@/views/HeaderSection.vue'
    import FooterSection from '@/views/FooterSection.vue'
</script>

<template>
    <div class="flex h-full w-full flex-col justify-between bg-body">
        <HeaderSection />

        <main
            class="mx-auto h-full w-full max-w-[1440px] flex-grow overflow-hidden">
            <RouterView />
        </main>

        <FooterSection />
    </div>
</template>
