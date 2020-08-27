import moderateRain from '../Rain/moderateRain.svg'
import heavyIntensityRain from '../Rain/heavyIntensityRain.svg'
import freezingRain from '../Rain/freezingRain.svg'


function Drizzle(id) {

    const iconStock = {
        300: {
            'icon': moderateRain,
            'text': 'light intensity drizzle'
        },
        301: {
            'icon': moderateRain,
            'text': 'drizzle'
        },
        302: {
            'icon': heavyIntensityRain,
            'text': 'heavy intensity drizzle'
        },
        310: {
            'icon': heavyIntensityRain,
            'text': 'light intensity drizzle rain'
        },
        311: {
            'icon': heavyIntensityRain,
            'text': 'drizzle rain'
        },
        312: {
            'icon': heavyIntensityRain,
            'text': 'heavy intensity drizzle rain'
        },
        313: {
            'icon': heavyIntensityRain,
            'text': 'shower rain and drizzle'
        },
        314: {
            'icon': heavyIntensityRain,
            'text': 'heavy shower rain and drizzle'
        },
        321: {
            'icon': freezingRain,
            'text': 'shower drizzle'
        },
    }
    return (iconStock[id])

}

export default Drizzle;