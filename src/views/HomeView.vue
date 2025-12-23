<template>
  <v-container>
    <v-textarea
      v-model="jsonString"
      label="Enter JSON"
      outlined
      rows="5"
    ></v-textarea>
  </v-container>
  <v-btn @click="onJsonInput">OK</v-btn>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {OpenAPIDocument} from "@/helpers/classes/dtos/openapi-version-3-0-x/root/openAPIDocument.ts";

export default defineComponent({
  name: "HomeView",
  data(){
    return{
      jsonObj: new OpenAPIDocument(),
      jsonString: JSON.stringify(this.jsonObj, null, 2),
    }
  },
  methods:{
    onJsonInput() {
      try {
        const parsed = JSON.parse(this.jsonString)
        this.jsonObj = Object.assign(new OpenAPIDocument(), parsed)
        console.info(this.jsonObj)
      } catch (e) {
        console.warn('Invalid JSON input', e)
      }
    }
  },
  mounted() {
  }
})
</script>

<style scoped>

</style>
