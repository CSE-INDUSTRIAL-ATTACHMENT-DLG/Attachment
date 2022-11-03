import React, { Component } from 'react';
import Incr from './Inc';

class List extends Component {
    
    render() {
        console.log(this.props.items);
        const items = this.props.items.map((item) =>
            <div>
                <Incr count={item} />
                <br />
            </div>
        )

        return (
            <div>
                {items}
            </div>
        )
    }
}

export default List;