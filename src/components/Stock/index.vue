<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="darken-3 white--text" :class="{blue: sell, green: !sell}">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>
            (Price: {{ stock.price | currency  }}{{ this.mode == 'sell' ? ` | Qty: ${stock.quantity}`: '' }})
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          name="quantity"
          label="Quantity"
          type="number"
          v-model.number="quantity"
          :error="validateField(false)"
        />
        <v-btn 
          class="darken-3 white--text"
          :class="{blue: sell, green: !sell}"
          :disabled="validateField(true)"
          @click="sell ? sellStock() : buyStock()"
        >
          {{ sell ? 'Sell' : 'Buy'}}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    stock: {
      type: Object,
      required: true,
    },
    mode: {
      type: String,
      default: 'buy',
    },
  },
  data() {
    return {
      quantity: 0,
      sell: this.mode == 'sell' ? true : false,
    }
  },
  computed: {
    ...mapGetters(['funds']),
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('buyStock', order);
      this.clearQuantity();
    },
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch('sellStock', order);
      this.clearQuantity();
    },
    clearQuantity() {
      this.quantity = 0;
    },
    validateField(disabled){
      if(disabled){
        return !this.sell && this.insufficientFunds|| this.sell && this.insufficientQuantity || this.quantity <= 0 || !Number.isInteger(this.quantity);
      }
      else {
         return !this.sell && this.insufficientFunds|| this.sell && this.insufficientQuantity || this.quantity < 0 || !Number.isInteger(this.quantity);
      }
    }
  },
}

</script>

<style>
  
</style>