<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { UserApi } from '../api/userapi';
import { useRoute } from 'vue-router';
import { User } from '../model/user';
import { ArticleApi } from '../api/articleapi';

import ArticleList from '../components/ArticleList.vue';
const route = useRoute();
const user = ref<User | null>(null);
const articleList = ref();

onMounted(async () => {
    const username = route.params.username as string;
    await fetchuser(username);
    console.log("현재 유저 정보", user.value);
});

const fetchuser = async (username: string) => {
  try {
    user.value = await UserApi.getUser(username);
  } catch (error) {
    user.value = null;
  }
};

const fetchArticles = async (page: number, perPage: number) => {
  if (user.value) {
    return await ArticleApi.getRecentArticlesByusername(user.value.username, page, perPage);
  }
};

watch(() => route.params.username, async (username) => {
    if (username) {
        await fetchuser(username.toString());
        articleList.value.resetArticles();
    }
});
</script>

<template>
    <div v-if="user" class="Profile">
      <div class="user-info">
        <div class="user-info__avatar">
          <img src="../assets/noneProfile.png" alt="avatar" />
        </div>
        <div class="user-nickname">{{ user.nickname }}</div>
        <div class="user-username">@{{ user?.username }}</div>
        <div class="user-introduce">{{ user?.introduce ? user?.introduce : "자기소개가 없습니다."}}</div>
      </div>

      <div class="user-articles">
        <ArticleList ref="articleList" :fetch-articles="fetchArticles"/>
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