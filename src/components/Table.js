import React, { useState } from 'react'
import './Table.scss'
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus, AiFillDelete, AiOutlineLike, AiFillEdit, AiFillGithub, AiTwotoneLike } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Table = () => {
    const [inval, setInval] = useState("");
    const [saveWord, setSaveWord] = useState("");
    const Data = useSelector(state => state);
    const dispatch = useDispatch();

    const Add = () => {
        if (inval.length > 0) {
            const action = { "type": 'ADD', "payload": inval };
            dispatch(action);
            setInval("");
        } else {
            alert('You have not entered anything !')
        }
    }
    const Del = (index) => {
        const action = { "type": 'DEL', "payload": index };
        dispatch(action)
    }
    const Clearing = () => {
        const action = { "type": 'CLEAR', "payload": [] };
        dispatch(action)
    }

    const Edit = (i) => {
        const action = { "type": "EDIT", "payload": i }
        dispatch(action);
        setSaveWord(Data[i].item);
    }

    const Saving = (i) => {
        if (saveWord.length > 0) {
            const action = { "type": 'SAVE', "payload": { "index": i, "item": saveWord } }
            dispatch(action);
        } else {
            const action = { "type": 'SAVE', "payload": { "index": i, "item": Data[i].item } }
            dispatch(action);
        }
    }

    const Liking = (ind) => {
        const action = { "type": 'LIKE', "payload": ind };
        dispatch(action);
    }

    return (
        <div>
            <section id='section'>
                <div className='general'>
                    <h1 className='text-white fw-bold text-center w-100'>To Do App with Redux</h1>
                    <div className='main'>
                        <div className='d-flex mb-4'>
                            <input onInput={(v) => setInval(v.target.value)} value={inval} className='form-control' type="text" placeholder='Write...' />
                            <button onClick={() => Add()} className='btn btn-primary ms-2'><AiOutlinePlus className='fs-4' /></button>
                        </div>
                        <div>
                            <ul id='ul'>
                                {
                                    (Data.length >= 0) ? (
                                        Data.map((v, i) => {
                                            return <li key={i}>
                                                <div className={!v.edit ? "d-flex justify-content-between w-100" : 'd-none'}>
                                                    <div>
                                                        <h5><span>{i + 1})</span>{v.item}</h5>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => Liking(i)} className='btn btn-secondary me-1'>
                                                            <AiOutlineLike className={v.like ? "d-none" : "text-light fw-bold"} />
                                                            <AiTwotoneLike className={v.like ? "text-warning" : "d-none"} />
                                                        </button>
                                                        <button onClick={() => Edit(i)} className='btn btn-success me-1'><AiFillEdit /></button>
                                                        <button onClick={() => Del(i)} className='btn btn-danger'><AiFillDelete /></button>
                                                    </div>
                                                </div>
                                                <div className={v.edit ? "d-flex justify-content-between w-100" : 'd-none'}>
                                                    <input className='form-control me-2' type="text" defaultValue={v.item} onInput={(val) => setSaveWord(val.target.value)} />
                                                    <button onClick={() => Saving(i)} className='btn btn-info'>Save</button>
                                                </div>

                                            </li>
                                        })

                                    ) : (
                                        <h1>Error</h1>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="lastpart d-flex justify-content-between mt-4">
                            <h5 className='fw-bold'>All Tasks: {Data.length}</h5>
                            <button onClick={() => Clearing()} className='btn btn-danger float-end'>Clear All</button>
                        </div>
                    </div>

                    <div id='husan' className='text-center w-100 mt-5'>
                        <h2>Qodirov Husan</h2>
                        <div id='mainForA'>
                            <a href="https://t.me/KhMaverick">
                                <span><FaTelegramPlane /></span>
                            </a>
                            <a href="mailto:xusanqodir@gmail.com">
                                <span><FiMail /></span>
                            </a>
                            <a href="https://github.com/KhMaverick">
                                <span><AiFillGithub /></span>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Table