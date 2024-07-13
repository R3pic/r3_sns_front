<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
    label: string;
    route: string;
}

const props = defineProps<Props>();
const router = useRouter();

const navigate = () => {
    router.push(props.route);
};
</script>

<template>
  <div @click="navigate" class="nav-item">
    <span>{{ props.label }}</span>
  </div>
</template>

<style scoped>
.nav-item {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  transition: background-color 300ms ease;
}

.nav-item:hover {
  background-color: #DEF9C4;
}

.nav-item span {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1rem;
}
</style>