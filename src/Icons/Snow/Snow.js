import lightSnow from './lightSnow.svg'
import snow from './snow.svg'
import heavySnow from './heavySnow.svg'
import freezingRain from '../Rain/freezingRain.svg'
//620===601
//621/622===602
//616/611/612/613/615===511


function Snow (id) {
    const iconStock = {
        600: {
            'icon': lightSnow,
            'text': 'light snow'
        },
        601: {
            'icon': snow,
            'text': 'Snow'
        },
        602: {
            'icon': heavySnow,
            'text': 'Heavy snow'
        },
        611: {
            'icon': freezingRain,
            'text': 'Sleet'
        },
        612: {
            'icon': freezingRain,
            'text': 'Light shower sleet'
        },
        613: {
            'icon': freezingRain,
            'text': 'Shower sleet'
        },
        615: {
            'icon': freezingRain,
            'text': 'Light rain and snow'
        },
        616: {
            'icon': freezingRain,
            'text': 'Rain and snow'
        },
        620: {
            'icon': snow,
            'text': 'Light shower snow'
        },
        621: {
            'icon': heavySnow,
            'text': 'Shower snow'
        },
        622: {
            'icon': heavySnow,
            'text': 'Heavy shower snow'
        },

    }
    return (iconStock[id])
}

export default Snow;