import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../components/reducers/userInfo';
function AutrePage() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userInfo.data);
  const isLoading = useSelector(state => state.userInfo.loading);
  const error = useSelector(state => state.userInfo.error);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div>
      {userData && (
  <>
  {console.log(userData.body)}
    <p>Email: {userData.body.email}</p>
    <p>Prénom: {userData.body.firstName}</p>
    <p>Nom: {userData.body.lastName}</p>
  </>
)}

    </div>
  );
}

export default AutrePage;
