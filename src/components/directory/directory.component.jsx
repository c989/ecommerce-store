import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
                
            },
            {
                title: 'sneakers',
                imageUrl: 'https://si.wsj.net/public/resources/images/B3-CL839_WSJSTO_16H_20181126102921.jpg',
                id: 3
            },
            {
                title: 'womans',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womans.png',
                size: 'large',
                id: 4
            },
            {
                titles: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
            }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))}


            </div>
        );
    }
}

export default Directory;