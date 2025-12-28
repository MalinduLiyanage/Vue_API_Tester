<template>
  <v-container class="ma-0">
    <v-row>
      <h4>Request Body</h4>
      {{ endpointBody.requestBody }}
    </v-row>

    <v-row>
      <h4>Response</h4>
      {{ endpointBody.responses }}
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import type {Operation} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/operation.ts";

export default defineComponent({
  name: "EndpointObjectBody",
  props:{
    endpointBody: {
      type: Object as PropType<Operation>,
      required: true
    }
  },
  watch:{
    endpointBody:{
      immediate: true,
      handler(newVal){
        console.info('EndpointObjectBody - endpointBody changed:', newVal)
      }
    }
  },
})
</script>

<style scoped>

</style>
