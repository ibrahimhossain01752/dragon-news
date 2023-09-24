import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div>
            <div className="bg-light my-5 pt-1 ">
                <h4>QZone</h4>
                <div className="text-center my-5 mb-4 py-2">
                    <img src={qzone1} alt=""/>
                    <img src={qzone2} alt=""/>
                    <img src={qzone3} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default QZone;