import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices, deleteService } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import ServiceAdd from './ServiceAdd';

function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    dispatch(deleteService(id));
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <>
      <ServiceAdd />
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <Link to={`/services/${o.id}`}>Edit</Link>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ServiceList
