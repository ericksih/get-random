import React, { useState } from 'react';

const ListRandom = ({ arrValue, deleteValue }) => {
  const [random, setRandom] = useState([]);
  const [loading, setLoading] = useState(false);

  const resultRandom = () => {
    setLoading(true);
    setTimeout(() => {
      setRandom(arrValue[Math.floor(Math.random() * arrValue.length)]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='row container center'>
      <div className='col s12'>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <span className='secondary-content '>{arrValue.length} values</span>
            <h4>List Random</h4>
          </li>
          {arrValue.map((value, index) => (
            <li className='collection-item' key={index}>
              <span className='secondary-content'>
                <a
                  href='#!'
                  className='red-text text-darken-4'
                  onClick={() => deleteValue(index)}
                >
                  <i className='material-icons'>delete</i>
                </a>
              </span>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className='col s12'>
        {arrValue.length < 2 ? (
          <div className='center'>
            <h5>Please add more than 2 values</h5>
          </div>
        ) : (
          <div className='center'>
            <button
              className='btn waves-effect waves-light'
              onClick={resultRandom}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Random'}
            </button>

            {loading ? (
              <h3>
                <div className='preloader-wrapper small active'>
                  <div className='spinner-layer spinner-blue-only'>
                    <div className='circle-clipper left'>
                      <div className='circle'></div>
                    </div>
                    <div className='gap-patch'>
                      <div className='circle'></div>
                    </div>
                    <div className='circle-clipper right'>
                      <div className='circle'></div>
                    </div>
                  </div>
                </div>
              </h3>
            ) : (
              <h3>{random}</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListRandom;
