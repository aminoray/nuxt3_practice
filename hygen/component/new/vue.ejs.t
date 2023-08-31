---
to: <% if (category === 'page') { %>pages/<%= name %>/index.vue<% } else{ %>components/<%= category %>/<%= dir %>/<%= name %>/<%= name %>.vue<% } %>
---
<script setup lang="ts">
import'~/components/<%= category %>/<%= dir %>/<%= name %>/<%= h.changeCase.param(name) %>.scss';
</script>
<template>
  <div class="<%= h.changeCase.param(name) %>"></div>
</template>
