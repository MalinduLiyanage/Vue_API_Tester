<template>
  <v-container class="ma-0">
    <v-row>
      <h4>Request Body</h4>
      <table v-if="endpointBody.requestBody" border="1" cellpadding="5" cellspacing="0">
        <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="endpointBody.requestBody.description">
          <td><strong>Description</strong></td>
          <td>{{ endpointBody.requestBody.description }}</td>
        </tr>
        <tr v-if="endpointBody.requestBody.required !== undefined">
          <td><strong>Required</strong></td>
          <td>{{ endpointBody.requestBody.required ? 'Yes' : 'No' }}</td>
        </tr>
        <tr v-if="endpointBody.requestBody.content">
          <td colspan="2">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <strong>Content Types:</strong>
              <select v-model="selectedMediaType">
                <option v-for="contentType in Object.keys(endpointBody.requestBody.content)"
                        :key="contentType"
                        :value="contentType">
                  {{ contentType }}
                </option>
              </select>
            </div>

            <table border="1" cellpadding="5" cellspacing="0" style="width: 100%;" v-if="selectedMediaType && endpointBody.requestBody.content[selectedMediaType]">
              <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><strong>Media Type</strong></td>
                <td>{{ selectedMediaType }}</td>
              </tr>
              <tr v-if="endpointBody.requestBody.content[selectedMediaType].schema">
                <td><strong>Schema</strong></td>
                <td>
                  <pre>{{ JSON.stringify(endpointBody.requestBody.content[selectedMediaType].schema, null, 2) }}</pre>
                </td>
              </tr>
              <tr v-if="endpointBody.requestBody.content[selectedMediaType].example">
                <td><strong>Example</strong></td>
                <td>
                  <pre>{{ JSON.stringify(endpointBody.requestBody.content[selectedMediaType].example, null, 2) }}</pre>
                </td>
              </tr>
              <tr v-if="endpointBody.requestBody.content[selectedMediaType].examples">
                <td><strong>Examples</strong></td>
                <td>
                  <pre>{{ JSON.stringify(endpointBody.requestBody.content[selectedMediaType].examples, null, 2) }}</pre>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
      <p v-else>No request body defined</p>
    </v-row>

    <v-row>
      <h4>Response</h4>
      <table v-if="endpointBody.responses" border="1" cellpadding="5" cellspacing="0">
        <thead>
        <tr>
          <th>Status Code</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(response, statusCode) in endpointBody.responses" :key="statusCode">
          <td>{{ statusCode }}</td>
          <td>{{ response.description || '-' }}</td>
        </tr>
        </tbody>
      </table>
      <p v-else>No responses defined</p>
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
  data() {
    return {
      selectedMediaType: '' as string
    };
  },
  watch:{
    endpointBody: {
      immediate: true,
      handler(newVal) {
        console.info('EndpointObjectBody - endpointBody changed:', newVal);
        // Initialize with first media type when endpointBody changes
        if (newVal.requestBody?.content) {
          const contentTypes = Object.keys(newVal.requestBody.content);
          if (contentTypes.length > 0) {
            this.selectedMediaType = contentTypes[0];
          }
        }
      }
    }
  }
})
</script>

<style scoped>
table {
  width: 100%;
}
pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
