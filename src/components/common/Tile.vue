<template> 
  <div class="tile" :class="id"> 
    <a :href=target> 
      <p class="title" style="color: inherit;">{{ title }}</p> 
      <p class="subtitle" style="color: inherit;">{{ description }}</p> 
    </a> 
  </div> 
</template> 
 
<script>
export default {
  name: 'tile',
  props: ['id', 'title', 'description', 'target']
}
</script> 
 
<style scoped> 
a { 
  display: block; 
  color: inherit; 
  padding: 1.25rem 2.5rem 1.25rem 1.5rem; 
  width: 100%; } 
</style> 
