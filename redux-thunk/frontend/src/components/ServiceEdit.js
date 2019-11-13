import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, editService, getService } from '../actions/actionCreators';
import { Link, Redirect } from 'react-router-dom';

function ServiceEdit({match}) {
  const { item, loading, error, redirect } = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(getService(id))
  }, [dispatch])  

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(editService());
  }

  return (
    <form onSubmit={handleSubmit}>

      {redirect && <Redirect to='/services' />}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong try again</p>}

      <input name='name' onChange={handleChange} value={item.name} /> <br />
      <input name='price' onChange={handleChange} value={item.price} /> <br />
      <input name='content' onChange={handleChange} value={item.content} /> <br />

      <Link to='/services'>Отменить</Link>
      <button type='submit' disabled={loading}>Сохранить</button>
    </form>
  );
}

export default ServiceEdit;
