import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/searchmovieSlice';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [closeDrop, setCloseDrop] = useState(false);

    const handleSearchInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchText(inputValue);
        dispatch(setSearch(inputValue));
    };

    const handleEpisodeClick = () =>{
        dispatch(setSearch("episode"))
        closeDrop ? setCloseDrop(false) : setCloseDrop(true)
    }

    const handleYearClick = () =>{
        dispatch(setSearch("year"))
        closeDrop ? setCloseDrop(false) : setCloseDrop(true)
    }

    return (
        <div className='flex m-3 gap-3'>
            <div className='relative'>
                <button className='border px-5 py-4' onClick={() => { closeDrop ? setCloseDrop(false) : setCloseDrop(true) }}>Sort By...</button>
                {
                    closeDrop && <div className='mt-1 absolute flex flex-col justify-start bg-white border w-[250px] h-[250px]'>
                        <div className='flex justify-between items-center border-b p-2'>
                            <h6>Sort By</h6>
                            <button onClick={() => { closeDrop ? setCloseDrop(false) : setCloseDrop(true) }}><RxCross1 /></button>
                        </div>
                        <div className='flex flex-col justify-start items-start p-2 px-5 gap-2'>
                            <button onClick={handleEpisodeClick}>Episode</button>
                            <button onClick={handleYearClick}>Year</button>
                        </div>
                    </div>
                }
            </div>
            <div className='border flex p-2 justify-center items-center flex-1 gap-4'>
                <div><IoSearchSharp className='text-2xl text-gray-500' /></div>
                <input
                    type="text"
                    className='w-[100%] outline-none'
                    placeholder='Type to search'
                    value={searchText}
                    onChange={handleSearchInputChange}
                />
            </div>
        </div>
    )
}

export default Navbar;
