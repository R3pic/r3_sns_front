<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ArticleApi } from '../api/articleapi';
import { Article } from '../model/article';

// Import components
import ArticleCard from '../components/ArticleCard.vue';
import InfiniteObserver from '../components/InfiniteObserver.vue';

// Variables
const articles = ref<Article[]>([]);
const isLoading = ref(false);
const isLastPage = ref<boolean>(false);
let currentPage = 1;
const perPage = 5;

const loadMoreArticles = async () => {
    try {
        isLoading.value = true;

        const RecentArticles = await ArticleApi.getRecentArticles(currentPage, perPage);
        
        if (RecentArticles.length === 0) {
            isLoading.value = false;
            isLastPage.value = true;
            return;
        }

        articles.value.push(...RecentArticles);
        currentPage++;
        isLoading.value = false;
    }
    catch (error) {
        console.error(error);
        isLoading.value = false;
        isLastPage.value = true;
    }
};
</script>

<template>
    <div class="article-container">
        <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :author="article.author"
            :id="article.id"
            :content="article.content"
            :createdAt="article.createdAt"
            :updatedAt="article.updatedAt"
        />
        <InfiniteObserver @show="loadMoreArticles" v-if="!isLastPage" />
        <FontAwesomeIcon v-if="isLoading" class="loading-icon" :icon="faSpinner" spin />
        <div v-if="isLastPage" class="no-more" >더 이상 티클이 없습니다.</div>
    </div>
</template>

<style scoped>
    .ArticleList {
        width: 100%;
    }
    
    .article-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 1rem;
        background-color: #D6EFD8;
    }

    .loading-icon {
        font-size: 2rem;
        margin: 1rem auto;
        color: #468585;
    }

    .no-more {
        font-size: 1.5rem;
        text-align: center;
        margin: 1rem auto;
    }
</style>