<template>
  <Content>
    <section
      class="demo-env d-flex flex-column justify-content-center align-items-center"
      data-testid="404"
    >
      <h1>Demo System</h1>
      <h2>Core concepts</h2>
      <p>...</p>
      <h3>API Gateway</h3>
      <p>...</p>
      <h3>Service Mesh</h3>
      <p>...</p>
    </section>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import usePortalApi from '@/hooks/usePortalApi'
import { useI18nStore } from '@/stores'
export default defineComponent({
  name: 'DemoEnv',
  setup () {
    const { portalApiV2 } = usePortalApi()

    const logoSrc = portalApiV2.value.getApiLink('/api/v2/portal/logo')
    const helpText = useI18nStore().state.helpText.notFound

    return {
      logoSrc,
      helpText
    }
  }
})
</script>

<style lang="scss" scoped>


</style>
