<template lang="">
    <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" mode="sell"/>
  </v-layout>
</template>

<script>
import Stock from '../../components/Stock';
import { mapGetters } from 'vuex';

export default {
  components: { Stock },
  computed: {
    ...mapGetters({ stocks: 'stockPortfolio' }),
  },
}
</script>
<style lang="">
  
</style>