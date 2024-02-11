import React, { useState, useEffect, useRef } from 'react';
import './edit.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../components/reducers/userInfo';
import { putUserdata } from '../reducers/putUserinfo';

const Edit = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newUserName, setNewUserName] = useState('');

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userInfo.data);
    const isLoading = useSelector(state => state.userInfo.loading);
    const error = useSelector(state => state.userInfo.error);

    const editFormRef = useRef(null);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

 

const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        await dispatch(putUserdata({ userName: newUserName }));
        dispatch(fetchUserData());
        toggleFormVisibility();
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil utilisateur :', error);
    }
};



    const handleCancel = () => {
        toggleFormVisibility(); 
    };

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    return (
        <div className="header">
            <h1>Welcome back<br />{userData.body.userName + ' ' + userData.body.lastName}</h1>
            {isFormVisible ? (
                <form ref={editFormRef} onSubmit={handleFormSubmit} className="edit-form">
                    <input
                        type="text"
                        placeholder="Enter your new username"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                    />
                    <button className="edit-button" type="submit">Save</button>
                    <button className="edit-button" type="button" onClick={handleCancel}>Cancel</button> 
                </form>
            ) : (
                <button className="edit-button" onClick={toggleFormVisibility}>
                    Edit Name
                </button>
            )}
        </div>
    );
}

export default Edit;
