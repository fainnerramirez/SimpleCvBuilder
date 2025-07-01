<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SplitterComponent",
    data() {
        return {
            contentPanelOne: '<p>Contenido del panel 1</p>',
            contentPanelTwo: '<p>Contenido del panel 2</p>'
        }
    },
});
</script>
<template>
    <div style="height: 250px; box-shadow: #eeeeee 0px 0px 10px">
        <el-splitter>
            <el-splitter-panel size="50%" :min="320">
                <div class="demo-panel" v-html="contentPanelOne"></div>
            </el-splitter-panel>
            <el-splitter-panel :min="320">
                <div class="demo-panel" v-html="contentPanelTwo"></div>
            </el-splitter-panel>
        </el-splitter>
    </div>
</template>

<style scoped>
.demo-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
