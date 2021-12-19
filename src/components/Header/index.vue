<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="/stocks">Stocks</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">End day</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Load & Save</v-btn>
        <v-list>
          <v-list-tile @click="loadData">      
            <v-list-tile-title>Load data</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="saveData">
            <v-list-tile-title>Save data</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase gray--text text--darken-2">Balance: {{ funds | currency }}</span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['funds']),
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData']),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put('data.json', { funds , stockPortfolio, stocks });
    },
  }
}
</script>

<style>
  
</style>