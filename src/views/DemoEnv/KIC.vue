<template>
  <Content>
    <section
      class="demo-env d-flex flex-column justify-content-center align-items-center"
      data-testid="kic"
    >
      <KCard title="Kong Ingress Controller" body="Combine the powerful features of the Kong Gateway with Kubernetes in a truly Kubernetes-native manner"/>

      <KTabs :tabs="tabs">
        <template v-slot:concepts>
          <p>The the demo system accelerates and simplifies showcasing Kong Ingress Controller capabilities.</p>
          <ul>
            <li>The setup for EKS-EU can be found <KExternalLink href="https://github.com/Kong/se-global-hosted-demo/tree/main/gateways/eks-eu/kic">at GitHub here</KExternalLink>.</li>
            <li>The setup for GKE-US can be found <KExternalLink href="https://github.com/Kong/se-global-hosted-demo/tree/main/gateways/gke-us/kic">at GitHub here</KExternalLink>.</li>
          </ul>
        </template>
        <template v-slot:policies>
          <p>A set of standard policies os applied for routing, permissions, observability, circuit breakers etc. They are all stored and can be shown <KExternalLink href="https://github.com/Kong/se-tools/tree/main/demo-environment/7-hosted-demo/gateway/ingress">at GitHub here</KExternalLink></p>
        </template>
      </KTabs>

      <h1>Demoing using BanKonG</h1>
      <p>BanKonG has been designed as an all-in-one demo (it has parts in gateway, KIC, Developer Portal (you are looking at it right now) and the mesh)</p>
      <br />
      <p>The KIC part, amongst other content, showcases the usage of ExternalDNS (please find more details <KExternalLink href="https://github.com/kubernetes-sigs/external-dns">here</KExternalLink>) and cert-manager (please find more details <KExternalLink href="https://cert-manager.io/">here</KExternalLink>).<br /></p>
      <br />   
      <p>On a high level, ExternalDNS allows you to control DNS records dynamically via Kubernetes resources in a DNS provider-agnostic way.  On a practical level, ExternalDNS as a part of this demo system configures Route 53 with the neccesary CNAME records for each new ingress applied.</p>
      <br />      
      <p>The cert-manager obtains certificates from a Let's Encrypt Issuer, ensures the certificates are valid and up-to-date, and attempts to renew certificates at a configured time before expiry.</p>
      <br />
      <p>This is a showcase of a unique diferentiator for Kong - a truly Kubernetes-native APIM stack with all the associated benefits.</p>
      <br />
      <h2>Conceptual overview BanKong /KIC</h2>
      <img src="/images/kic-se-hosted-demo.png" />

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

h3 {
  font-size: 1.2em;
  margin-bottom: 0.3em;
  margin-top: 0.3em;
}

</style>