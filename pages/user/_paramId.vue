<template>
<div>asdasd + {{custom}}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData({app, store, params}) {
    return {
      paramId: params.paramId
    }
  },
  data() {
    return {
      custom: null
    }
  },
  computed: {
    ...mapGetters(['getUserInfo'])
  },
  methods: {},
  beforeMount() {
    this.custom = this.getUserInfo.paramId !== this.paramId
  }
}
</script>

<style scoped>

</style>
