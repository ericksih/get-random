import React, { useState, useEffect } from 'react';
import ListRandom from './ListRandom';
import M from 'materialize-css/dist/js/materialize.min.js';

const Random = () => {
  const [input, setValue] = useState('');
  const [arrValue, setArrValue] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const tampungValue = (e) => {
    e.preventDefault();

    localStorage.setItem('value', JSON.stringify([...arrValue, input]));

    setArrValue([...arrValue, input]);
    setValue('');
  };

  const deleteValue = (index) => {
    const newArr = [...arrValue];
    newArr.splice(index, 1);
    setArrValue(newArr);

    localStorage.setItem('value', JSON.stringify(newArr));

    M.toast({
      html: `Deleted ${arrValue[index]}, Success`,
      classes: '#b71c1c red darken-4',
    });
  };

  useEffect(() => {
    const value = localStorage.getItem('value');

    if (value) {
      setArrValue(JSON.parse(value));
    }
  }, []);

  return (
    <div>
      <form onSubmit={tampungValue} className='row container center'>
        <div
          className='input-field'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '10px',
            width: '100%',
          }}
        >
          <input
            id='text'
            type='text'
            className='validate'
            onChange={handleChange}
            value={input}
          />
          <input
            type='submit'
            value='Add'
            className='btn btn-small darken-4'
            disabled={input === '' || arrValue.includes(input) || input === ' '}
          />
          <label htmlFor='text'>Input Value</label>
        </div>
      </form>

      <ListRandom arrValue={arrValue} deleteValue={deleteValue} />
    </div>
  );
};

export default Random;
