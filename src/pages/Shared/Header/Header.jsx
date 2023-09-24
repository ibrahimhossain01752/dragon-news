import React from 'react';
import logo from '../../../../src/assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
           <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary">Journalism Without Fear or Favour </p>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;