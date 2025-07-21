<template>
    <div class="container_avatar">
        <div class="group_avatars">
            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div class="content">
            <p><span class="users">1k</span> usuarios registrados</p>
        </div>
    </div>
</template>

<style scoped>
.group_avatars {
    display: flex;
    align-items: center;
    justify-content: center;
}

.group_avatars>.avatar {
    border: 2px solid white;
    margin-left: -10px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s;
}

.container_avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_avatar>.content>.users {
    font-weight: 900;
}

.container_avatar>.content {
    margin-top: 10px;
}
</style>