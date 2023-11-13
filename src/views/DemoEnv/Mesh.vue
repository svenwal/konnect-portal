<template>
  <Content>
    <section
      class="demo-env d-flex flex-column justify-content-center align-items-center"
      data-testid="mesh"
    >
      <KCard title="Kong Mesh" body="Kong Mesh provides zero-trust end-2-end security for all internal traffic"/>

      <KTabs :tabs="tabs">
        <template v-slot:concepts>
          <p>Tab 1 content</p>
        </template>
        <template v-slot:policies>
          <p>Tab 2 content</p>
        </template>
        <template v-slot:zones>
          <p>Tab 3 content</p>
        </template>
        <template v-slot:observability>
          <p>Tab 4 content</p>
        </template>
      </KTabs>



      <hr style="margin: 2em;" />
      <h1>Demo guide</h1>
      <p>Find here descriptions on how to demo all core functionalities of Kong Mesh. It is based on the BanKonG demo app - but the counter demo is also available at <KExternalLink href="https://counter.service-connectivity.com/">this ingress</KExternalLink></p>
      <h2>The BanKonG demo setup</h2>
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
        hash: '#concepts',
        title: 'Concepts'
      },
      {
        hash: '#policies',
        title: 'Policies'
      },
      {
        hash: '#zones',
        title: 'Multi-Zone'
      },
      {
        hash: '#observability',
        title: 'Observability'
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
