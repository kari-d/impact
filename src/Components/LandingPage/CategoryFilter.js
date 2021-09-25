import React from 'react';
import Button from '@material-ui/core/Button';

const filters = {Age: ['>18 years', '19 - 25 years'], Category: ['opt1', 'opt2', 'opt3']}

export default function CategoryFilter() {
    return (
        <div style={{minWidth: '250px', minHeight: '50%', padding: '10px'}}>
            {Object.entries(filters).map(filter => {
                return (
                    <React.Fragment>
                        <span style={{color: 'blue'}}>{filter[0]}</span>
                        <hr/>
                        <br/>
                        {filter[1].map(x => {
                            return (<> <input type="checkbox" id={x} value={x}/> 
                             <label for="vehicle1"> {x}</label> </>)
                        })}
                        <br/>
                        <br/>
                    </React.Fragment>
                )
            })}
            <div style={{float: 'right', margin: '5px'}}>
            <Button variant="contained" color="primary">Filter</Button>
            </div>
        </div>

    )
}