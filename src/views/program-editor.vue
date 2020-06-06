<template>
    <div :class="bem()">
        <Editor />
    </div>
</template>

<script lang="ts">
import { BaseComponet, Component } from '@/components/base-component';
import Editor from '@/components/editor/index.vue';

@Component({
    name: 'program-editor',
    components: {
        Editor
    }
})
export default class ProgramEditor extends BaseComponet {}
</script>

<style lang="less">
@a: program-editor;

.@{a} {
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    background-color: #F1F2F4;
}
</style>
