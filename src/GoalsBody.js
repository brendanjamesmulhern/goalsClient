import React, { useEffect } from 'react';
import { Button, Modal } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { getGoals, addGoal, deleteGoal, getOneGoal, updateGoal } from './service/service';

const GoalsBody = () => {
    const [error, setError] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [goals, setGoals] = React.useState(null);
    const [goal, setGoal] = React.useState(null);
    const [goalSelected, setGoalSelected] = React.useState(null);
    const [goalEdit, setGoalEdit] = React.useState(null);
    const handleOpen = (id) => {
        getOneGoal('brendanjamesmulhern2@gmail.com', id)
            .then(res => {
                setGoalSelected(res.data);
                setOpen(true);
            })
            .catch(err => {
                setError(err);
            });
    };
    const handleClose = () => setOpen(false);
    useEffect(() => {
       getTheGoals();
    }, []);
    const getTheGoals = () => {
        getGoals('brendanjamesmulhern2@gmail.com')
            .then(res => {
                console.log(res['data']);
                setGoals(res['data']);
            })
            .catch(err => {
                setError(err);
                console.log(err);
            });
    };
    const handleGoalChange = (e) => {
        setGoal(e.target.value);
    };
    const handleSubmit = () => {
        const out = {
            title: goal,
        };
        addGoal('brendanjamesmulhern2@gmail.com', out)
            .then(res => {
                setGoal(null);
                getTheGoals();
                console.log(res['data']);
            })
            .catch(err => {
                setError(err);
                console.log(err);
            }); 
    };
    const handleGoalEdit = (e) => {
        setGoalEdit(e.target.value);
    };
    const handleGoalEditSubmit = () => {
        const out = {
            title: goalEdit,
        };
        updateGoal('brendanjamesmulhern2@gmail.com', goalSelected._id, out)
            .then(res => {
                console.log(res['data']);
                getTheGoals();
                handleClose();
            })
            .catch(err => {
                setError(err);
            });
    };
    if (goals) return (
        <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div></div>
            <div>
                <h1>Goals</h1>
            </div>
            <div style={{ display: 'flex' }}>
                <input onChange={handleGoalChange} style={{ textAlign: 'center' }} type="text" placeholder="Goal" />
                <Button onClick={handleSubmit}>Add</Button>
            </div> 
            <div style={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <List>
                    <ListItem style={{ display: 'flex', flexDirection: 'column' }}>
                        { goals.map(goal => (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <div>{goal.title}</div>
                                <Button onClick={() => handleOpen(goal._id)}>Edit</Button>
                                <Modal open={open} onClose={handleClose}>
                                    { goalSelected 
                                    ? 
                                        <div style={{ backgroundColor: 'gray', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <h1>{goalSelected.title}</h1>
                                            <input placeholder="Enter new goal" onChange={handleGoalEdit} style={{ textAlign: 'center' }} />
                                            <Button style={{ color: 'white' }} onClick={handleGoalEditSubmit}>Submit</Button>
                                            <Button style={{ color: 'white' }} onClick={handleClose}>Close</Button>
                                        </div>
                                    : null }
                                </Modal>
                                <Button onClick={() => deleteGoal('brendanjamesmulhern2@gmail.com', goal._id).then(res => getTheGoals()).catch(err => console.error(err))}>Delete</Button>
                                <div>{error ? console.log(error) : null}</div>
                            </div>
                        ))}
                        <div style={{ display: 'flex' }}>
                            
                        </div>
                    </ListItem>
                </List>
            </div>
            {/* Drag Drop List */}
            <div></div>
        </div>
    )
    else return (
        <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div></div>
            <div>
                <h1>Goals</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <List>
                    <ListItem style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}>
                            <input onChange={handleGoalChange} style={{ textAlign: 'center' }} type="text" placeholder="Goal" />
                            <Button onClick={handleSubmit}>Add</Button>
                        </div> 
                        <div>Loading...</div>
                        <div style={{ display: 'flex' }}>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </div>
                    </ListItem>
                </List>
            </div>
            <div></div>
        </div>
    )
};

export default GoalsBody;