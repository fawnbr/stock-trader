<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(Price: {{ stock.price }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          name="quantity"
          label="Quantity"
          type="number"
          v-model.number="quantity"
        />
        <v-btn 
          class="green darken-3 white--text"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          @click="buyStock"
        >
          Buy
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      // eslint-disable-next-line
      console.log(order);
      this.clearQuantity();
    },
    sellStock() {

    },
    clearQuantity() {
      this.quantity = 0;
    }
  },
}
</script>
<style lang="">
  
</style>