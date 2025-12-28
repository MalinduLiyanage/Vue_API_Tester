<template>
  <v-container>
    <span>Paste Open API v3.0.x JSON</span>
    <v-textarea
      v-model="jsonString"
      label="Enter JSON"
      outlined
      rows="5"
    ></v-textarea>
  </v-container>
  <v-btn @click="onJsonInput">OK</v-btn>
  <ApiEndpointObject
    v-for="(item, index) in pathItems"
    :key="index"
    :endpointObject="item"
  />

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {OpenAPIDocument} from "@/helpers/classes/dtos/openapi-version-3-0-x/root/openAPIDocument.ts";
import OpenApiUtil from "@/helpers/utils/openApiUtil.ts";
import ApiEndpointObject from "@/components/ApiEndpointObject.vue";
import {PathItem} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/pathItem.ts";

export default defineComponent({
  name: "HomeView",
  components: {ApiEndpointObject},
  data(){
    return{
      jsonObj: new OpenAPIDocument(),
      jsonString: OpenApiUtil.stringifyDocument(this.jsonObj),
      pathItems: [] as PathItem[]
    }
  },
  methods:{
    onJsonInput() {
      try {
        // Parse the JSON string from textarea
        const parsedDoc = OpenApiUtil.logInputDocument(this.jsonString);
        console.info('Parsed Document:', parsedDoc);

        // Now call orderByTags with the parsed document
        const groupedByTags = OpenApiUtil.orderByTags(parsedDoc);
        console.info('Grouped by Tags:', groupedByTags);
        this.pathItems = groupedByTags;
      } catch (e) {
        console.warn('Invalid JSON input', e);
      }
    }
  },
  mounted() {
  }
})
</script>

<style scoped>

</style>
