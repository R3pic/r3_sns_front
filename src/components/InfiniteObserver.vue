<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue';
const emits = defineEmits(['show', 'hide']);
const observerElement = ref<Element | null>(null);
const observer = ref<IntersectionObserver | null>(null);

const createObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            emits('show');
            console.log('show');
        } else {
            emits('hide');
            console.log('hide');
        }
    });
    observer.observe(observerElement.value as Element);
    return observer;
};

onMounted(() => {
    observer.value = createObserver();
});

onBeforeUnmount(() => {
    observer.value?.disconnect();
});
</script>

<template>
  <div class="infinite-observer" ref="observerElement"></div>
</template>