<template>
<section id="gl-page">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex row wrap xs12 md8>
        <gl-items-with-dialog></gl-items-with-dialog>
      </v-flex>
      <v-flex xs12 md4></v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlItemsWithDialog
} from '../../components'

export default {
  data() {
    return {}
  },
  components: {
    GlItemsWithDialog
  }
}
</script>

<style scoped>

</style>
