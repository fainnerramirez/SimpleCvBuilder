<template>
    <div class="navbar__container">
        <div class="cv__logo__app">
            <img :src="logo" alt="logo">
            <p>CVBUILDER</p>
        </div>
        <el-button type="primary" class="ml-2">
            Comenzar <el-icon class="el-icon--right">
                <ArrowRight />
            </el-icon>
        </el-button>
    </div>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo.png";
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style scoped>
.navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
}

.cv__logo__app {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.cv__logo__app > img {
    width: 30px;
    height: 30px;
}

.cv__logo__app > p {
    font-weight: bold;
}
</style>