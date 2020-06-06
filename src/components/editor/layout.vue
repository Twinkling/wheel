<template>
    <div :class="bem()"/>
</template>

<script lang="ts">
import { BaseComponet, Component } from '@/components/base-component';

@Component({
    name: 'layout'
})
export default class Layout extends BaseComponet {}
</script>

<style lang="less">
@a: layout;

.@{a} {
    position: relative;
    width: 960px;
    height: 540px;
    background: #2254f4;
}
</style>
