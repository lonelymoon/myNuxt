<template>
<div class="gl-simple-list-wrapper">
  <v-card>
    <v-list class="py-0" three-line>
      <template v-for="index in 5">
        <v-divider v-if="index != 0"></v-divider>

        <v-list-tile avatar @click="">
          <v-list-tile-avatar>
            <img src="/bg.jpg"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              按时打撒巨大四大皆空asdasdasdasd
            </v-list-tile-title>
            <v-list-tile-sub-title class="pr-2">
              asdasdasdasdasssssssssssssss
              asdasdsadasdasdasdasd
            </v-list-tile-sub-title>
          </v-list-tile-content>

        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'simple-list'
}
</script>

<style scoped>
.gl-simple-list-wrapper{
  position: relative;
  height: auto;
}
</style>
