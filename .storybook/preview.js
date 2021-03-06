import '../src/assets/scss/critical.scss'
import '../src/assets/scss/main.scss'

import Vue from 'vue'

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

import RouterLink from './RouterLink.vue'

// import Divider from '../src/components/ui/Divider.vue'
import Button from '../src/components/ui/Button/Button.vue'
import { Link } from '../src/shared/ui/Link'
import Avatar from '../src/components/ui/Avatar.vue'
// import Title from '../src/components/ui/Title.vue'
// import ImageCircle from '../src/components/blanks/ImageCircle.vue'
// import Input from '../src/components/ui/Input.vue'
// import Toggle from '../src/components/ui/Toggle.vue'

Vue.component('router-link', RouterLink)

Vue.component('button-component', Button)
Vue.component('link-component', Link)
Vue.component('avatar-component', Avatar)
// Vue.component('divider-component', Divider)
// Vue.component('title-component', Title)
// Vue.component('image-circle-component', ImageCircle)
// Vue.component('input-component', Input)
// Vue.component('toggle-component', Toggle)

export const decorators = [
    (story) => ({
        components: { story },
        template: `
            <div style="display: flex;justify-content: space-between;align-items: stretch;">
                <div class="theme-light" style="width: 50%;padding: 25px;"><story /></div>
                <div class="theme-dark" style="background-color: #1a1a25;width: 50%;padding: 25px;"><story /></div>
            </div>
        `,
    }),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
    },
    viewport: {
        viewports: {
            mobile: {
                name: 'Mobile 320px',
                type: 'mobile',
                styles: {
                    width: '320px',
                    height: '600px',
                },
            },
            tablet: {
                name: 'Tablet 650px',
                type: 'tablet',
                styles: {
                    width: '650px',
                    height: '600px',
                },
            },
            tabletLate: {
                name: 'Tablet Late 768px',
                type: 'tablet',
                styles: {
                    width: '768px',
                    height: '600px',
                },
            },
            desktop: {
                name: 'Desktop 1200px',
                type: 'desktop',
                styles: {
                    width: '1200px',
                    height: '600px',
                },
            },
            desktopLate: {
                name: 'Desktop 1410px',
                type: 'desktop',
                styles: {
                    width: '1410px',
                    height: '600px',
                },
            },
        },
    },
}
