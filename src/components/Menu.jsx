import React from 'react';

const Menu = (props) => {

    const { menu, handleRemove, handleRemoveAll, handleRandom } = props

    return (
        <ul className='menu p-0'>
            {menu
                .map((item, index) =>
                    <li key={index}>
                        <div className='checkAndTask'>
                            <span>{item}</span>
                        </div>
                        <button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash-can"></i></button>
                    </li>
                )}
            <div className='row'>
                {menu.length > 1 && <p className='col-6' ><button className='random' onClick={() => handleRandom()}><i className="fa-solid fa-circle-check"></i>Random</button></p>}
                {menu.length > 1 && <p className='col-6'><button className='deleteAll' onClick={() => handleRemoveAll()}><i className="fa-solid fa-eraser"></i>Delete all</button></p>}
            </div>
        </ul>
    );
}

export default Menu;