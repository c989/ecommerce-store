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
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
                
            },
            {
                title: 'sneakers',
                imageUrl: 'https://si.wsj.net/public/resources/images/B3-CL839_WSJSTO_16H_20181126102921.jpg',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womans',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womans.png',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: ''
            }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps}/>
                    ))}


            </div>
        );
    }
}

export default Directory;