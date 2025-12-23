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
import OpenApiUtil from "@/helpers/utils/openApiUtil.ts";

export default defineComponent({
  name: "HomeView",
  data(){
    return{
      jsonObj: new OpenAPIDocument(),
      jsonString: OpenApiUtil.stringifyDocument(this.jsonObj),
    }
  },
  methods:{
    onJsonInput() {
      try {
        console.info(OpenApiUtil.logInputDocument(this.jsonString))
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
