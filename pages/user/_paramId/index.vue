<template>
<section id="gl-page">
  <v-container fluid class="pa-0">
    <gl-user-center-header></gl-user-center-header>
  </v-container>
</section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { GlUserCenterHeader } from '../../../components'

  export default {
    async asyncData({app, store, params}) {
      let paramId = params.paramId
      let user = await app.$axios.get(`/user/${paramId}`, {
        params: {
          page: 1,
          perpage: 10
        }
      })
      return {
        user,
        paramId
      }
    },
    data() {
      return {
        custom: null
      }
    },
    components: {
      GlUserCenterHeader
    },
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {},
    beforeMount() {
      this.custom = this.getUserInfo.paramId !== this.paramId
    },
    mounted() {
      console.log(this.user)
    }
  }
</script>

<style scoped>

</style>
