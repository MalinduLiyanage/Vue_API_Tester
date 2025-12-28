<template>
  <h2 class="ma-2 mt-5"> {{ endpointObject.tag }} </h2>
  <div
    v-for="(endpoint, index) in normalizedEndpoints"
    :key="index"
    class="border border-lg ma-2 pa-2"
  >
    <v-row justify="space-between">
      <v-col cols="1">
        <b>{{ endpoint.method }}</b>
      </v-col>

      <v-col>
        <pre>{{ endpoint.path }}</pre>
      </v-col>

      <v-col>
        <v-row align="end" justify="end">
          <v-col class="text-end">
            <v-icon
              v-if="!expanded[index]"
              @click="toggle(index)"
            >
              mdi-chevron-down
            </v-icon>

            <v-icon
              v-else
              @click="toggle(index)"
            >
              mdi-chevron-up
            </v-icon>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <EndpointObjectBody
      v-if="expanded[index]"
      :endpointBody="endpoint.body"
    />
  </div>
</template>


<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import EndpointObjectBody from "@/components/EndpointObjectBody.vue";
import type {PathItem} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/pathItem.ts";

export default defineComponent({
  name: "ApiEndpointObject",
  components: {EndpointObjectBody},
  data(){
    return{
      isExpanded: false as boolean,
      expanded: {} as Record<number, boolean>
    }
  },
  watch:{
    endpointObject: {
      immediate: true,
      handler(newVal: PathItem[]) {
        console.log('Endpoint Object changed:', newVal)
      }
    }
  },
  computed: {
    normalizedEndpoints() {
      return this.endpointObject.endpoints.map((item: PathItem) => {
        console.log("item", item)
        const path = Object.keys(item)[0]
        const methods = item[path]
        const method = Object.keys(methods)[0]

        console.log("path", path)
        console.log("methods", methods)
        console.log("method", method)


        return {
          path,
          method: method?.toUpperCase(),
          body: methods[method]
        }
      })
    }
  },
  props: {
    endpointObject: {
      type: Object as PropType<PathItem>,
      required: true,
    },
  },
  methods: {
    toggle(index: number) {
      this.expanded[index] = !this.expanded[index]
    }
  },
  mounted() {
    console.log(this.endpointObject.parameters)
  }
})
</script>

<style scoped>

</style>
