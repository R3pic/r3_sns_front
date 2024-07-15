<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const emit = defineEmits(['close']);

const postContent = ref('');

const adjustTextareaHeight = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const post = () => {
  console.log(`게시글 내용: ${postContent.value}`);
};
</script>

<template>
  <div class="modal-wrapper" @click="emit('close')">
    <div class="modal-window" @click.stop>
      <div class="modal-header">
        <button class="close-button" @click="emit('close')">
          <FontAwesomeIcon :icon="faTimes" />
        </button>
      </div>
      <div class="modal-content">
        <img class="user-thumbnail" src="../assets/noneProfile.png" alt="Profile Picture" />
        <textarea 
          class="post-textarea" 
          placeholder="오늘은 어떤 일이 있었나요?" 
          rows="1" 
          v-model="postContent"
          @input="adjustTextareaHeight"
        ></textarea>
      </div>
      <div class="modal-footer">
        <button class="post-button">게시하기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
  }

  .modal-window {
    width: 30vw;
    min-width: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 90%;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    .modal-window {
      width: 90vw;
    }
    
  }

  .modal-header {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #DEF9C4;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    padding: 20px;
  }

  .user-thumbnail {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 10px;
  }

  .post-textarea {
    flex: 1;
    border: none;
    resize: none;
    font-size: 19px;
    outline: none;
    overflow: hidden;
  }

  .post-textarea::placeholder {
    color: #888;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    border-top: 1px solid #ccc;
    background-color: #f5f5f5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .post-button {
    background-color: #DEF9C4;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    font-size: 15px;
    color: #333;
  }

  .post-button:hover {
    background-color: #cbe9a0;
  }
</style>