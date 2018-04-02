<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <div class="columns">
          <div class="column is-two-thirds">
            <p>
              © Lucia's Cipher: The place where <span class="robots">robots</span>, <span class="foxes">foxes</span> and <span class="tomatoes">tomatoes</span> are worshiped.
            </p>
          </div>
          <div class="column">
            <span v-for="link in links" v-if="link.icon != undefined">
              <a class="icon" :href=link.href><icon :name=link.icon></icon> {{ link.text }}</a><span class="separator">|</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from '@/components/common/Icon'
export default {
  name: 'Footer',
  data () {
    return {
      links: this.$root.navigation.right
    }
  },
  components: { Icon }
}
</script>

<style scoped>
footer {
  padding: 3rem 1.5rem;
}
p, a,span { color: white; }
.columns { align-items: center; }
/*.container { padding: 1.5rem; }*/
/* Space paragraphs in the footer */
div.content > p:not(:last-child) { padding: 1rem; }

.robots { color: #8fa9bc; }
.foxes { color: #aa6532; }
.tomatoes { color: #b03232; }

.container .column .icon { margin: 0 1rem; }
.container .column span:last-child .separator { display: none; }
</style>
