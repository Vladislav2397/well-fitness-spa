// @ts-ignore
import { onMounted, reactive } from '@vue/composition-api'
import useResize from '@/use/resize'

export interface IDevice {
    size: {
        mobile: boolean
        mobileLate: boolean
        tablet: boolean
        tabletLate: boolean
        desktop: boolean
        desktopLate: boolean
    }
    breakpoints: {
        mobileLate: number
        tablet: number
        tabletLate: number
        desktop: number
        desktopLate: number
    }
    type: string | null
}

const deviceInitData: IDevice = {
    size: {
        mobile: false,
        mobileLate: false,
        tablet: false,
        tabletLate: false,
        desktop: false,
        desktopLate: false,
    },
    breakpoints: {
        mobileLate: 450,
        tablet: 650,
        tabletLate: 768,
        desktop: 1200,
        desktopLate: 1410,
    },
    type: null,
}

export default function useDevice(): IDevice {
    const device = reactive<IDevice>(deviceInitData)

    onMounted(() => {
        getDeviceSize()
        getDeviceType()
    })

    const getDeviceSize = () => {
        const breakpoints = device.breakpoints
        const windowWidth = window.innerWidth

        device.size.mobile = windowWidth < breakpoints.tablet

        device.size.mobileLate =
            windowWidth >= breakpoints.mobileLate &&
            windowWidth < breakpoints.tablet

        device.size.tablet =
            windowWidth >= breakpoints.tablet &&
            windowWidth < breakpoints.desktop

        device.size.tabletLate =
            windowWidth >= breakpoints.tabletLate &&
            windowWidth < breakpoints.desktop

        device.size.desktop = windowWidth >= breakpoints.desktop

        device.size.desktopLate = windowWidth >= breakpoints.desktopLate
    }

    const getDeviceType = () => {
        const deviceType = document.querySelector<HTMLMetaElement>(
            'meta[property="device"]',
        )

        if (deviceType) {
            device.type = deviceType.content
        } else {
            device.type = null
        }
    }

    useResize(getDeviceSize)

    return device
}
