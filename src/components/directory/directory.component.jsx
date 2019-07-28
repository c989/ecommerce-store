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
                imageUrl: 'https://i.ibb.co/0jpHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'womans',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womans.png',
                id: 4
            },
            {
                titles: 'mens',
                imageUrl: 'https://i/ibb.co/R70vBrQ/men.png',
                id: 5
            }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem key={id} title={title} />
                    ))}


            </div>
        );
    }
}

export default Directory;