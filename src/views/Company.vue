<template>
    <Content>
        <div class="dev-portal-products page" style="width: 100%;">
            <div class="products-top-section flex flex-col items-center justify-center py-16 bg-section_colors-hero"
                style="background-position: top; height:300px ;background-image:
                url(https://www.six-group.com/dam/images/sites/future-of-finance/20200921_SIX-FutureIsNow_MG_1617_web-16-9-5.six-image.wide.1920.jpg">
                <h1 class="products-title mb-5 font-normal color-text_colors-hero text-4xl"
                    style="text-shadow: 1px 1px 2px black;">Über uns</h1>
                <p class="products-title mb-5 font-normal color-text_colors-hero text-2xl text-center text-bold"
                    style="color:white; text-shadow: 1px 1px 2px black; width: 70%;">
                    We are operating the infrastructure for the European centers, catering to a broad,
                    international client base. We provide services relating to securities transactions, the provision of
                    financial information and banking services
                </p>
            </div>
        </div>
        <section class=" d-flex flex-column justify-content-center align-items-center" data-testid="guide">


            <div class="message text-left">
                <h2 class="mb-1 type-xxl" style="padding-bottom: 0.5em;padding-top:2em">Connecting Market Participants
                    Around the World
                </h2>
                <p>WE operate the infrastructure for the financial centers in EUROPE, thus ensuring the
                    flow of information and money between financial market players. WE offer exchange services,
                    financial
                    information and banking services with the aim of increasing efficiency, quality and innovative
                    capacity
                    along the entire value chain. We are also building a digital infrastructure for the new millennium.
                </p>

                <p style="padding-top:0.6em">We connect financial market participants in Europe and throughout
                    the world. The
                    company is
                    owned by around 120 national and international financial institutions. They are the main users of
                    our
                    services and our most important customers. Our close relationship with them guarantees stability of
                    the
                    financial infrastructure and processes, proximity to clients’ evolving business needs and
                    competitive
                    prices.</p>
            </div>

        </section>
    </Content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import usePortalApi from '@/hooks/usePortalApi'
import { useI18nStore } from '@/stores'

export default defineComponent({
    name: 'Company',
    setup() {
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
.not-found {
    --timingFunction: cubic-bezier(.785, .135, .15, .86);
    height: calc(100vh - var(--headerHeight));

    h1,
    .circle {
        opacity: 0;
        animation: .75s var(--timingFunction) forwards fadeIn;
    }

    h1 {
        animation-delay: 1.25s;
    }

    .circle {
        animation-delay: 1s;
    }

    .circle {
        padding: 3rem;
        margin: 4rem 0;
        font-size: 2.5rem;
        border-radius: 50%;
        border: 1px solid var(--section_colors-stroke);
    }

    .logo {
        max-height: 41px;
    }
}
</style>
