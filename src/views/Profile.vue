<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UserApi } from '../api/userapi';
import { useRoute } from 'vue-router';
import { User } from '../model/user';
import { ArticleApi } from '../api/articleapi';

import ArticleList from '../components/ArticleList.vue';

const user = ref<User | null>(null);
onMounted(async () => {
    const route = useRoute();
    const username = route.params.username as string;
    user.value = await UserApi.getUser(username);
    console.log(user.value);
});

const fetchArticles = async (page: number, perPage: number) => {
    if (user.value) {
      return await ArticleApi.getRecentArticlesByusername(user.value.username, page, perPage);
    }
};
</script>

<template>
    <div v-if="user" class="Profile">
      <div class="user-info">
        <div class="user-info__avatar">
          <img src="../assets/noneProfile.png" alt="avatar" />
        </div>
        <div class="user-info__name">{{ user?.nickname }}</div>
        <div class="user-info__email">{{ user?.username }}</div>
        <div class="user-info__introduction">{{ user?.email === undefined ? "자기소개가 없습니다" : user.email }}</div>
      </div>

      <div class="user-articles">
        <ArticleList :fetch-articles="fetchArticles"/>
      </div>
    </div>

    <div v-else-if="user === null">
      <p>User not found</p>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
</template>

<style scoped>
</style>