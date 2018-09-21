<template>
<section id="gl-page">
  <v-container fluid class="pa-0">
    <gl-user-center-header></gl-user-center-header>

    <div class="gl-user-center-content">
      <v-container fluid class="px-0 pt-5">
        <v-layout row wrap class="px-0">
          <v-flex xs12 md3 class="custom-flex">
            <v-card>
              asdd
            </v-card>
          </v-flex>
          <v-flex xs12 md9>
            <v-card>
              asdd
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
.custom-flex{
  padding-right: 12px;
  box-sizing: border-box;
}
</style>
