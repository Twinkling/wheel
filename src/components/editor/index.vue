<template>
    <div :class="bem()">
        <div ref="container" :class="bem('container')">
            <div :class="bem('shell-wrap')">
                <div :class="bem('shell')">
                    <Layout v-for="layout in layouts" :key="layout.$id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { merge } from 'lodash';
import { BaseComponet, Component } from '@/components/base-component';
import Layout from './layout.vue';
import editorDefault from './base/editor-defaults';
import { data } from '@/data/editor';

@Component({
  name: 'editor',
  components: {
    Layout
  }
})
export default class Editor extends BaseComponet {
    private global = merge({}, editorDefault.global, data.global);
    // private layouts = data.layouts.map(())
    private mounted() {
      console.log(data);
    }
}
</script>

<style lang="less">
@a: editor;

.@{a} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    &__container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        outline: none;
        overflow: auto;
    }
    &__shell {
        width: 960px;
        height: 540px;
        padding: 8px;
        box-shadow:0px 2px 8px 0px rgba(0, 0, 0, 0.12);
        background-color: #fff;
        box-sizing: content-box;
    }
    &__shell-wrap {
        margin: 0 auto;
        width: 960px + 16px;
        height: 540px + 16px;
        padding: 30px;
        box-sizing: content-box;
    }
}
</style>
