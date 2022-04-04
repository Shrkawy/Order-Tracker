import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner, faPause, faCheck} from "@fortawesome/free-solid-svg-icons";

const BlurbList = props => {

    return (
        props.list.map((blurb, index) => {
            return (
                <div key={index} className='step d-flex'>
                    <div style={{
                        width: '30px',
                        zIndex: '+5',
                        background: (index === props.list.length - 1) ? '#ffffff' : ''
                    }}>
                        {blurb.IsComplete ? (
                                <div className='circle circle-filled'>
                                    <div className='icon'>
                                        <FontAwesomeIcon style={{width: '12px'}} icon={faCheck}/>
                                    </div>
                                </div>
                            ) :
                            (blurb.IsCurrent) ? (
                                <div className='circle'>
                                    <div className='icon'>
                                        <FontAwesomeIcon style={{width: '13px', color: '#136EF6'}} icon={faSpinner} spin/>
                                    </div>
                                </div>
                            ) : blurb.isSuspended ? (
                                <div className='circle circle-red'>
                                    <div className='icon'>
                                        <FontAwesomeIcon style={{width: '10px'}} icon={faPause}/>
                                    </div>
                                </div>
                            ): (
                                <div className='circle'/>
                            )}
                    </div>
                    <div className='step-text'>
                        <h4 className='m-0'>{blurb.Name}</h4>
                        {blurb.description ? <p className='mt-1'>{blurb.description}</p> : null}
                    </div>
                </div>
            );
        })
    )
}

export default BlurbList;