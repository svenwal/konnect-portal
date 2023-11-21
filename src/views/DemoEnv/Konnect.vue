<template>
  <Content>
    <section
      class="demo-env d-flex flex-column justify-content-center align-items-center"
      data-testid="404"
    >
      <h1>Konnect</h1>

      <KTabs :tabs="tabs">
        <template v-slot:gateway>
          <p>The Konnect Gateway setup for EKS can be found <a href="https://github.com/Kong/se-global-hosted-demo/tree/main/gateways/eks-eu/gateway">at GitHub here</a>.</p>
        </template>
        <template v-slot:kic>
          <p>The Konnect KIC setup for EKS can be found <a href="https://github.com/Kong/se-global-hosted-demo/tree/main/gateways/eks-eu/kic">at GitHub here</a>.</p>
          <p>The Konnect KIC setup for GKE can be found <a href="https://github.com/Kong/se-global-hosted-demo/tree/main/gateways/gke-us/kic">at GitHub here</a>.</p>
        </template>
        <template v-slot:mesh>
          <p>Tab 3 content</p>
        </template>
        <template v-slot:devPortal>
          <p>Tab 4 content</p>
        </template>
      </KTabs>

      <h2>Demo system overview</h2>
      <img src="/images/KonnectOverview.png" />
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


    const tabs = [
      {
        hash: '#gateway',
        title: 'Gateway'
      },
      {
        hash: '#kic',
        title: 'Ingress Controller'
      },
      {
        hash: '#mesh',
        title: 'Mesh'
      },
      {
        hash: '#devPortal',
        title: 'Developer Portal'
      }
    ]

    return {
      logoSrc,
      helpText,
      tabs
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 0.3em;
  margin-top: 0.3em;
}

</style>
