import React from 'react';
import './AddData.scss';

const AddData = () => {
    return (
        <div className='AddData'>
            <form>
                <h1>Artist</h1>
                <label>
                    <h3>artist Bio</h3>
                    <textarea/>
                </label>
                <label>
                    <h3>img</h3>
                    <input/>
                </label>
                <label>
                    <h3>instaId</h3>
                    <input/>
                </label>
                <label>
                    <h3>name</h3>
                    <input/>
                </label>
                <label>
                    <h3>programType</h3>
                    <input/>
                </label>
                <button>submit</button>
            </form>

            <form>
                <h1>Location</h1>
                <label>
                    <h3>description</h3>
                    <textarea/>
                </label>
                <label>
                    <h3>img</h3>
                    <input/>
                </label>
                <label>
                    <h3>instaId</h3>
                    <input/>
                </label>
                <label>
                    <h3>mapLink</h3>
                    <input/>
                </label>
                <label>
                    <h3>name</h3>
                    <input/>
                </label>
                <label>
                    <h3>programType</h3>
                    <input/>
                </label>
                <button>submit</button>
            </form>

            <h1>Event</h1>
        </div>
    );
};

export default AddData;
