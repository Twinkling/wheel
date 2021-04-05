<template>
  <section :class="bem()">
    <div :class="bem('sidebar')">sidebar</div>
    <router-view :class="bem('content')"/>
  </section>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less">
@b: app;

.@{b} {
  display: flex;
  min-height: 100vh;

  &__sidebar {
    width: 200px;
  }
}
</style>
