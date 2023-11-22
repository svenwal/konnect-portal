<template>
  <Content>
    <section
      class="demo-env d-flex flex-column justify-content-center align-items-center"
      data-testid="mesh"
    >
      <KCard title="Kong Mesh" body="Kong Mesh provides zero-trust end-2-end security for all internal traffic"/>

      <KTabs :tabs="tabs">
        <template v-slot:concepts>
          <p>The demo system is a multi-zone setup mixing different clouds (AWS, GCloud and Azure), as tech stacks (Kubernetes with EKS and GKE and VMs on Azure) as well as geographical regions (US, EU and APAC).</p>
          <ul>
            <li>The zone setup for EKS-EU can be found <KExternalLink href="https://github.com/Kong/se-global-hosted-demo/tree/main/mesh/eks-eu">at GitHub here</KExternalLink>.</li>
            <li>The zone setup for GKE-US can be found <KExternalLink href="https://github.com/Kong/se-global-hosted-demo/tree/main/mesh/gke-us">at GitHub here</KExternalLink>.</li>
          </ul>
        </template>
        <template v-slot:policies>
          <p>A set of standard policies os applied for routing, permissions, observability, circuit breakers etc. They are all stored and can be shown <KExternalLink href="https://github.com/Kong/se-tools/tree/main/demo-environment/7-hosted-demo/mesh-konnect">at GitHub here</KExternalLink></p>
        </template>
        <template v-slot:zones>
          <p>The idea is to span the demo across all regions, all hypervisors and all tech stacks</p>
        </template>
        <template v-slot:observability>
          <p>Observability has been enabled in the default mesh and can be accessed under the following Urls</p>
          <ul>
            <li>Monitoring using Grafana (admin/admin) at <KExternalLink href="https://grafana-mesh.service-connectivity.com/">https://grafana-mesh.service-connectivity.com/</KExternalLink></li>
            <li>Tracing using Zipkin at <KExternalLink href="https://zipkin.service-connectivity.com/">https://zipkin.service-connectivity.com/</KExternalLink></li>
            <li>Logging using ELK / Kibana: <KExternalLink href="https://kibana.service-connectivity.com/">https://kibana.service-connectivity.com/</KExternalLink></li>
          </ul>
        </template>
      </KTabs>

      <h1>Demoing using BanKonG</h1>
      <p>BanKonG has been designed as an all-in-one demo (it has parts in gateway, KIC, Developer Portal (you are looking at it right now) and the mesh)</p>
      <p>The mesh part covers the three major use cases routing, security and observability</p>
      <h2>Setup overview BanKong</h2>
      <img src="/images/BanKonGMesh.png" />
      <h2>Prerequesites / preperation</h2>
      <h3>Install / update kumactl</h3>
      <p>For the ability to apply policies (especially TrafficPermissions) you need to have the latest Kong Mesh version of <KBadge>kumactl</KBadge> installed. Don't use the Kuma version. The Kong Mesh version <KExternalLink href="https://docs.konghq.com/mesh/latest/production/install-kumactl/">can be downloaded here.</KExternalLink>.</p>
      <p>To test if you have the latest version and the one for Kong mesh try <KBadge>kumactl version</KBadge>.</p>
      <KCodeBlock
      id="code-block-default"
      code='kumactl version
Client: Kong Mesh y.y.y
Server: Kong Mesh x.x.x'
      language="bash"/>
      <h3>Konnect your kumactl to the Konnect control plane</h3>
      <p>Log into Konnect, navigate to the Mesh Manager, choose the <KBadge>Worldwide Distributed 🌏 </KBadge> control plane and at the button <KBadge>Global Control Plane Actions</KBadge> choose <KBadge>Configure kumactl</KBadge> and follow the instructions.</p>
      <img src="/images/configure_kumactl.jpg" />
      <h1>Demo guide</h1>
      <p>Find here descriptions on how to demo all core functionalities of Kong Mesh. It is based on the BanKonG demo app - but the counter demo is also available at <KExternalLink href="https://counter.service-connectivity.com/">this ingress</KExternalLink></p>

      <h2>The routing / load-balancing / fail-over use case</h2>
      <p>As shown in the overview graphic the BanKonG setup is distributed across EKS (all components) and GKE (just the transactions backend)</p>
      <p>The fronted has a built-in feature at the transactions page that the mesh distributes the load across EKS and GKE (zone aware load balancing is off on purpose to see the round-robin). Show this part and explain how multi-zone routing works (ingress, egress, ...)</p>
      <p><KExternalLink href="https://se-admin-ui.service-connectivity.com/scale_bankong">the demo system admin user interface</KExternalLink> you have the options to scale down the European backend to zero (simulate a problem) and can show that the frontend keeps working by only using the healthy endpoint at GKE.</p>
      <p>After having shown remember to scale out again.</p>
    
      <h1>Demoing using the Counter Demo App</h1>
      <p>The counter demo is available at <KExternalLink href="https://counter.service-connectivity.com/">https://counter.service-connectivity.com/</KExternalLink> and spans both EKS and GKE</p>
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

h3 {
  font-size: 1.2em;
  margin-bottom: 0.3em;
  margin-top: 0.3em;
}

</style>
