<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import Stock from '../../components/Stock';
import { mapGetters } from 'vuex';
export default {
  components: { Stock },
  computed: {
    ...mapGetters(['stocks']),
  }
}
</script>

<style>
  
</style>