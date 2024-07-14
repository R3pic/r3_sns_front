<script setup lang="ts">
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { AuthApi } from '../api/authapi';

const userStore = useUserStore();
const router = useRouter();

const username = ref('');
const password = ref('');

const HandleLogin = async () => {
    const userdata = await AuthApi.login(username.value, password.value)
    if (userdata) {
        userStore.login(userdata);
        router.push('/home');
    }
    console.log("로그인 실패함.")
}
</script>

<template>
    <div class="login">
        <div class="login-container">
            <div class="login-form">
                <h1>Login</h1>
                <input v-model="username" type="text" placeholder="id" />
                <input v-model="password" type="password" placeholder="Password" />
                <button @click="HandleLogin">Login</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9EAD3;
}

.login-form {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
    background-color: white;
    border: 4px solid #50B498;
    border-radius: 8px;
    box-sizing: border-box;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

label {
    font-size: 1.2rem;
}

input {
    padding: 0.5rem;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
}

button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #50B498;
    color: white;
    cursor: pointer;
}
</style>