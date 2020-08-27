import OtherIcon from './other.svg'

function Other(id) {

    const iconStock = {
        701: {
            'icon': OtherIcon,
            'text': 'mist'
        },
        711: {
            'icon': OtherIcon,
            'text': 'Smoke'
        },
        721: {
            'icon': OtherIcon,
            'text': 'Haze'
        },
        731: {
            'icon': OtherIcon,
            'text': 'sand/ dust whirls'
        },
        741: {
            'icon': OtherIcon,
            'text': 'fog'
        },
        751: {
            'icon': OtherIcon,
            'text': 'sand'
        },
        761: {
            'icon': OtherIcon,
            'text': 'dust'
        },
        762: {
            'icon': OtherIcon,
            'text': 'volcanic ash'
        },
        771: {
            'icon': OtherIcon,
            'text': 'squalls'
        },
        781: {
            'icon': OtherIcon,
            'text': 'tornado'
        }
    }
    return (iconStock[id])

}

export default Other;