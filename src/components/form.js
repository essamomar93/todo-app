
import React from 'react';
import { useContext } from 'react';
import {
    Card,
    FormGroup,
    InputGroup,
    Button,
    Elevation,
    Switch,
} from '@blueprintjs/core';
import { SettingsContext } from '../context/context'
import Auth from './auth';


function Form(props) {
    const settings = useContext(SettingsContext)

    return (
        <Auth capability="create">
        <Card className="cardForm" interactive elevation={Elevation.FOUR}>
            <form onSubmit={props.handleSubmit}>
                <FormGroup>
                    <h2>Add To Do Item</h2>

                    <label>
                        <span>To Do Item</span>
                        <InputGroup onChange={props.handleChange} intent={'primary'} name="text" type="text" placeholder="Item Details" />
                    </label>
                    <br />
                    <label>
                        <span>Assigned To</span>
                        <InputGroup onChange={props.handleChange} intent={'primary'} name="assignee" type="text" placeholder="Assignee Name" />
                    </label>

                    <label>
                        <br />
                        <span>Difficulty</span>
                        <br />
                        <input onChange={props.handleChange} intent={'primary'} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
                    </label>
                    <br /> <br />
                    <label>
                        <Button className="bp3-button bp3-icon-add" intent={'primary'} type="submit">Add Item</Button>
                    </label>
                    <br /> <br />
                    <label>
                        <span>Show Completed</span>
                        <Switch checked={settings.state.showComplete} onChange={settings.state.handleShow} />
                    </label>
                    <label>
                        <span>Items per page</span>
                        <input type="number" min="1" max="10" value={settings.state.displayPerScreen} onChange={settings.state.handleDisplayPerScreen} />
                    </label>
                </FormGroup>
            </form>
        </Card>
        </Auth>

    )
}

export default Form;