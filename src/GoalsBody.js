import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { getGoals  } from './service/service';

const GoalsBody = () => {
    const [goals, setGoals] = React.useState(null);
    useEffect(() => {
       getGoals('bmulhern2@comcast.net')
        .then(res => {
            console.log(res['data']);
            setGoals(res['data']);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div></div>
            <div>
                <h1>Goals</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
               
            </div>
            <div>
                <List>
                    <ListItem style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}>
                            <input style={{ textAlign: 'center' }} type="text" placeholder="Goal" />
                            <Button>Add</Button>
                        </div> 
                        { goals ? goals.map(goal => (
                            <div>
                                <div>{goal.title}</div>
                            </div>
                        )) : null }
                        <div style={{ display: 'flex' }}>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </div>
                    </ListItem>
                </List>
            </div>
            {/* Drag Drop List */}
            <div></div>
        </div>
    )
};

export default GoalsBody;