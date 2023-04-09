import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filters/filterSlice';

const Tag = ({tag:{title}}) => {
    const dispatch = useDispatch()
    const {tags} = useSelector(state => state.filter)
    const isSelected = tags.includes(title)
    const style = isSelected ?"bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    :"bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    
              
                     
    const hendleTags = () => {
        if(isSelected) {
            dispatch(tagRemoved(title))
        }else {
            dispatch(tagSelected(title))
        }
    }
    return (
        <div
        onClick={hendleTags}
        className={style}
    >
       {title}
    </div>
   
    // <div
    //     className=
    // >
    //     redux
    // </div>
    );
};

export default Tag;