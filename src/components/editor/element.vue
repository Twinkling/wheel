<template>
    <div :class="bem()"/>
</template>

<script lang="ts">
import { BaseComponet, Component } from '@/components/base-component';

@Component({
    name: 'element'
})
export default class Element extends BaseComponet {}
</script>

<style lang="less">
@a: element;

.@{a} {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
