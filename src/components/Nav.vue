<template>
  <header
    id="site-header"
    class="flex items-center fixed w-full top-0 z-10"
  >
    <div class="w-100 container max-w-screen-2xl mx-auto flex justify-between items-center px-5 md:px-0">
      <router-link to="/">
        <img
          class="logo"
          :src="logoSrc"
          :alt="helpText.nav.logoAlt"
        >
      </router-link>
      <nav class="flex items-center links">
        <NavDropdown
          label='Demo Environment'
          :items="[
            {
              label: 'Konnect',
              routerLink: 'Konnect'
            },
            {
              label: 'Gateway',
              routerLink: 'Gateway'
            },
            {
              label: 'Ingress Controller',
              routerLink: 'KIC'
            },
            {
              label: 'Mesh',
              routerLink: 'Mesh'
            },
            {
              label: 'Developer Portal',
              routerLink: 'DevPortal'
            },
          ]"
          data-testid="demo-env-dropdown"
        />
        <router-link
          data-testid="catalog-link"
          :to="{ name: 'catalog' }"
          class="mr-2 p-2 catalog-link"
        >
          <div class="background-color-wrapper" />
          {{ helpText.nav.catalog }}
        </router-link>
        <details>
          <summary style="margin-right:1em; list-style: none;">🌐</summary>
          <ul id="languageSelector" class="list-none m-0 p-0 absolute w-14 shadow bg-white">
                    <li class="type-md block"><a href="https://en-developer.bankong.cloud/" class="color-text_colors-primary block py-3 px-4">🇬🇧</a></li>
                    <li class="type-md block"><a href="https://fr-developer.bankong.cloud/" class="color-text_colors-primary block py-3 px-4">🇫🇷</a></li>
                    <li class="type-md block"><a href="https://de-developer.bankong.cloud/" class="color-text_colors-primary block py-3 px-4">🇩🇪</a></li>
                    <li class="type-md block"><a href="https://es-developer.bankong.cloud/" class="color-text_colors-primary block py-3 px-4">🇪🇸</a></li>
                  </ul>
        </details>
        <NavDropdown
          v-if="developer && !isPublic"
          :label="developer.email"
          :items="[
            {
              label: helpText.userDropdown.myApps,
              routerLink: 'my-apps',
            }, {
              label: helpText.userDropdown.logout,
              onClick: () => logout(),
              testid: 'logout-item'
            }
          ]"
          data-testid="user-dropdown"
        />
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, storeToRefs } from 'pinia'
import { useI18nStore, useAppStore } from '@/stores'
import NavDropdown from './NavDropdown.vue'
import usePortalApi from '@/hooks/usePortalApi'

export default defineComponent({
  name: 'Nav',
  components: { NavDropdown },
  setup () {
    const appStore = useAppStore()
    const { globalLoading } = storeToRefs(appStore)
    const helpText = useI18nStore().state.helpText

    const logout = async () => {
      globalLoading.value = true

      const logoutUrl = await appStore.logout()

      window.location.href = logoutUrl
    }
    const { portalApiV2 } = usePortalApi()
    const logoSrc = portalApiV2.value.getApiLink('/api/v2/portal/logo')

    return {
      logout,
      logoSrc,
      helpText
    }
  },

  computed: {
    ...mapState(useAppStore, {
      developer: store => store.developerSession.data?.developer,
      isPublic: 'isPublic'
    })
  }

})
</script>

<style lang="scss" scoped>
.logo {
  max-height: 41px;
}

#site-header {
  height: var(--headerHeight);
  background-color: var(--section_colors-header);
  border-bottom: 1px solid var(--section_colors-stroke);

  .links a {
    color: var(--text_colors-header);
    &:hover{
      backdrop-filter: brightness(1.35);
    }
  }
}
</style>
