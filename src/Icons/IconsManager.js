import Clouds from './Clouds/Clouds'
import Rain from './Rain/Rain'
import Snow from './Snow/Snow'
import Thunderstorm from './Thunderstorm/Thunderstorm'
import Other from './Other/Other'
import Drizzle from './Drizzle/Drizzle'

function IconsMeneger(iconsArr) {
    console.log('IconsMeneger' + iconsArr);
    //let icons = []
    let icons = new Map()

    iconsArr.map((item) => {

        if (item >= 200 && item < 300) {
            icons.push(Thunderstorm(item))
        }
        if (item >= 300 && item < 400) {
            icons.push(Drizzle(item))
        }
        if (item >= 500 && item < 600) {
            //icons.push(Rain(item))
            //console.log(Clouds(item));
            icons.set(item,Rain(item))
        }
        if (item >= 600 && item < 700) {
            icons.push(Snow(item))
        }
        if (item >= 700 && item < 800) {
            icons.push(Other(item))
        }
        if (item >= 800 && item < 900) {
            //icons.push(Clouds(item))
            //console.log(Clouds(item));
            icons.set(item,Clouds(item))
            
        }

    })
    
    console.log('icons',icons);
    return (icons)

}

export default IconsMeneger;