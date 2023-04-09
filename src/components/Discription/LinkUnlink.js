import React from 'react';
import LinkImage from '../../assets/like.svg';
import UnlinkImage from '../../assets/unlike.svg';

const LinkUnlink = ({link , unlink}) => {
    return (
        <div className="flex gap-10 w-48">
        <div className="flex gap-1">
            <div className="shrink-0">
                <img
                    className="w-5 block"
                    src={LinkImage}
                    alt="Like"
                />
            </div>
            <div
                className="text-sm leading-[1.7142857] text-slate-600"
            >
                {link}
            </div>
        </div>
        <div className="flex gap-1">
            <div className="shrink-0">
                <img
                    className="w-5 block"
                    src={UnlinkImage}
                    alt="Unlike"
                />
            </div>
            <div
                className="text-sm leading-[1.7142857] text-slate-600"
            >
              {unlink}
            </div>
        </div>
    </div>
    );
};

export default LinkUnlink;;