<template>
  <v-container v-if="mode === ''" fluid class="d-flex flex-column text-center">
    <v-row>
      <v-col>
        <v-btn variant="outlined" @click="switchModes('parse')">Parse OpenAPI JSON Object</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn variant="outlined" @click="switchModes('compare')">Compare OpenAPI JSON Objects</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="mode === 'parse'">
    <v-container v-if="pathItems.length === 0" fluid>
      <span>Paste Open API v3.0.x JSON</span>
      <v-textarea
        v-model="jsonString"
        label="Enter JSON"
        outlined
        rows="5"
      ></v-textarea>
    </v-container>
    <v-btn v-if="pathItems.length === 0" @click="onJsonInput">OK</v-btn>
    <v-btn v-else @click="resetData">Reset</v-btn>
    <ApiEndpointObject
      v-for="(item, index) in pathItems"
      :key="index"
      :endpointObject="item"
    />
  </v-container>

  <v-container v-if="mode === 'compare'">
    <v-container v-if="pathItems.length === 0" fluid>
      <span>Paste Open API v3.0.x JSON - Object 01</span>
      <v-textarea
        v-model="jsonString"
        label="Enter JSON Object 01"
        outlined
        rows="5"
      ></v-textarea>
      <span>Paste Open API v3.0.x JSON - Object 02</span>
      <v-textarea
        v-model="jsonString2"
        label="Enter JSON Object 02"
        outlined
        rows="5"
      ></v-textarea>
    </v-container>
    <v-row align="center" justify="center">
      <v-col>
        <v-btn @click="onCompare">Compare</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="resetData">Reset</v-btn>
      </v-col>
    </v-row>
    <v-row>
      See console for the Results!
    </v-row>
  </v-container>

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
      jsonObj2: new OpenAPIDocument(),
      jsonString2: OpenApiUtil.stringifyDocument(this.jsonObj2),
      pathItems: [] as PathItem[],
      mode: '' as string
    }
  },
  methods:{
    onJsonInput() {
      try {
        // Parse the JSON string from textarea
        const parsedDoc = OpenApiUtil.logInputDocument(this.jsonString);
        console.info('Parsed Document:', parsedDoc);

        const groupedByTags = OpenApiUtil.orderByTags(parsedDoc);
        this.pathItems = groupedByTags;
      } catch (e) {
        console.warn('Invalid JSON input', e);
      }
    },
    onCompare() {
      try {
        const parsedDoc = OpenApiUtil.logInputDocument(this.jsonString);
        console.info('Parsed Document:', parsedDoc);

        const parsedDoc2 = OpenApiUtil.logInputDocument(this.jsonString2);
        console.info('Parsed Document 2:', parsedDoc2);

        const differences = OpenApiUtil.compareDocuments(parsedDoc, parsedDoc2);
        console.info('Differences between documents:', differences);
      } catch (e) {
        console.warn('Invalid JSON input', e);
      }
    },
    switchModes(mode: string){
      if(mode === 'parse'){
        this.mode = 'parse'
      } else if(mode === 'compare'){
        this.mode = 'compare'
      } else {
        this.mode = ''
      }
    },
    resetData(){
      this.pathItems = []
      this.jsonObj = new OpenAPIDocument()
      this.jsonObj2 = new OpenAPIDocument()
      this.jsonString = OpenApiUtil.stringifyDocument(this.jsonObj)
      this.jsonString2 = OpenApiUtil.stringifyDocument(this.jsonObj2)
      this.switchModes('')
    }
  },
  mounted() {
  }
})
</script>

<style scoped>

</style>
