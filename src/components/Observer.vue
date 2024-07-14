<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const observerElement = ref(null);
const observer = ref<IntersectionObserver | null>(null);
const observerOptions = {
  rootMargin: '0px',
  threshold: 1.0
};

const createObserver = () => {
  observer.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observerElement.value?.dispatchEvent(new CustomEvent('show'));
    } else {
      observerElement.value?.dispatchEvent(new CustomEvent('hidden'));
    }
  }, observerOptions);

  if (observerElement.value) {
    observer.value.observe(observerElement.value);
  }
};

onMounted(() => {
  createObserver();
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<template>
  <div ref="observerElement"></div>
</template>
