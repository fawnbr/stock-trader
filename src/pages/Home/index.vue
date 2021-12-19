<template >
  <div>
    <h1 class="display-3 font-weight-light mb-4">Trade and see your stocks</h1>
    <v-sheet elevation="6" class="pa-2" color="primary">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">You can save and load data.</span>
    </v-sheet>
        <v-sheet elevation="6" class="pa-2 mt-3" color="success darken-1">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">Click in 'End day' to start a new day!</span>
    </v-sheet>
    <v-divider class="my-4"/>
    <p class="display-1"><strong>Your balance: </strong>{{ funds }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['funds']),
  }
}
</script>

<style>
  
</style>