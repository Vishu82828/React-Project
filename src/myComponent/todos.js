import React from 'react';
import Todo from './todo';
import PropTypes from 'prop-types';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todo-List</h3>
      {/* {props.todo.map((item, index) => (
        <Todo key={index} todo={item} />
      ))} */}
      {props.todo.map((value)=>{
        return  <Todo todo={value} key={value.sn} onDelete={props.onDelete} />
      })}
    </div>
  );
}

Todos.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object)
};
