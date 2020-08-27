import thunderstormWithLightRain from './thunderstormWithLightRain.svg'
import thunderstormWithHeavyRain from './thunderstormWithHeavyRain.svg'
import lightThunderstorm from './lightThunderstorm.svg'
import heavyThunderstorm from './heavyThunderstorm.svg'
//201/230/231===200
//232===202
//211===210
//213===212


function Thunderstorm(id) {
    const iconStock = {
        200: {
            'icon': thunderstormWithLightRain,
            'text': 'thunderstorm with light rain'
        },
        201: {
            'icon': thunderstormWithLightRain,
            'text': 'thunderstorm with rain'
        }, 
        202: {
            'icon': thunderstormWithHeavyRain,
            'text': 'thunderstorm with heavy rain'
        },
        210: {
            'icon': lightThunderstorm,
            'text': 'light thunderstorm'
        },
        211: {
            'icon': lightThunderstorm,
            'text': 'thunderstorm'
        },
        212: {
            'icon': heavyThunderstorm,
            'text': 'heavy thunderstorm'
        },
        221: {
            'icon': heavyThunderstorm,
            'text': 'ragged thunderstorm'
        },
        230: {
            'icon': thunderstormWithLightRain,
            'text': 'thunderstorm with light drizzle'
        },
        231: {
            'icon': thunderstormWithLightRain,
            'text': 'thunderstorm with drizzle'
        },
        231: {
            'icon': thunderstormWithHeavyRain,
            'text': 'thunderstorm with heavy drizzle'
        },
    }

    return (iconStock[id]);
}

export default Thunderstorm;