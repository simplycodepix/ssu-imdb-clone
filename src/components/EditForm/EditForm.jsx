import React, { useEffect, useState } from 'react';
import { RATINGS } from '../../store/types';
import { getSingle } from '../../api';
import { useHistory } from 'react-router-dom';

export const EditFormInput = ({ name, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name}>{name}</label>
        <input id={name} type="text" onChange={onChange} name={name} value={value} className="form-control" />
    </div>
);

export const EditFormSelect = ({ onChange, name, value, options }) => (
    <div className="form-group">
        <label htmlFor={name}>Your Gender</label>
        <select value={value} onChange={onChange} name={name} id={name}>
            {options.map(one => <option key={one} value={one.toLowerCase()}>{one}</option>)}
        </select>
    </div>
);

export const EditForm = ({ match }) => {
    const [formData, setFormData] = useState({});
    const [table, setTable] = useState(null);
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let response;
        const table = match.params.table;
        setTable(table);

        if (table === RATINGS) {
            let [movie_id, user_id] = match.params.id.split('-');
            response = await getSingle({ table, payload: { movie_id, user_id } });
        } else {
            let itemId = match.params.id;
            response = await getSingle({ table, payload: { id: itemId } });
        }
        setFormData(response);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value })
    }

    const getForm = () => {
        let inputs = [];
        for (let [key, value] of Object.entries(formData)) {
            if (key.indexOf('id') !== -1) continue;
            if (formData['id'] === 1 && key === 'role') continue;

            if (key === 'sex') {
                inputs.push(<EditFormSelect options={['Male', 'Female', 'Other']} onChange={handleChange} key={key} name={key} value={value} />)
            } else {
                inputs.push(<EditFormInput onChange={handleChange} key={key} name={key} value={value} />)
            }
        }

        return inputs;
    };

    const onCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <div className="edit-page">
            <div className="container">
                {table && <h2 className="edit-page-title">Edit {table}</h2>}
                <form className="edit-form" onSubmit={handleSubmit}>
                    {formData && getForm()}

                    <div className="form-group center-text">
                        <button onClick={onCancel} className="btn btn-cancel">cancel</button>
                        <button className="btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EditForm;