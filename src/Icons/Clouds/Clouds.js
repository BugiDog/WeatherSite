import ClearSkyDay from './ClearSkyDay.svg'
import ClearSkyNight from './ClearSkyNight.svg'

import fewCloudsDay from './fewCloudsDay.svg'
import fewCloudsNight from './fewCloudsNight.svg'
import scatteredClouds from './scatteredClouds.svg'
import brokenClouds from './brokenClouds.svg'
import overcastClouds from './overcastClouds.svg'

function Clouds(id) {

    const iconStock = {
        800: {
            'icon': ClearSkyDay,
            'text': 'clear sky'
        },
        810: {
            'icon': ClearSkyNight,
            'text': 'clear sky'
        },
        801: {
            'icon': fewCloudsDay,
            'text': 'few clouds'
        },
        811: {
            'icon': fewCloudsNight,
            'text': 'few clouds'
        },
        802: {
            'icon': scatteredClouds,
            'text': 'scattered clouds'
        },
        803: {
            'icon': brokenClouds,
            'text': 'broken clouds'
        },
        804: {
            'icon': overcastClouds,
            'text': 'overcast clouds'
        }
    }
    return (iconStock[id])

}

export default Clouds;