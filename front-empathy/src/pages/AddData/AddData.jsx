import React, { useState } from 'react';
import './AddData.scss';
import { withFirebase } from "redbricks-firebase";

const AddData = ({ firebase }) => {
    // artist state
    const [artistDocId, setArtistDocId] = useState('');
    const [artistBio, setArtistBio] = useState('');
    const [artistImg, setArtistImg] = useState('');
    const [artistInstaId, setArtistInstaId] = useState('');
    const [artistName, setArtistName] = useState('');
    const [artistProgramType, setArtistProgramType] = useState('');

    // location statek
    const [locationDocId, setLocationDocId] = useState('');
    const [locationDescription, setLocationDescription] = useState('');
    const [locationImg, setLocationImg] = useState('');
    const [locationInstaId, setLocationInstaId] = useState('');
    const [locationMapLink, setLocationMapLink] = useState('');
    const [locationName, setLocationName] = useState('');
    const [locationProgramType, setLocationProgramType] = useState('');

    const handleArtistSubmit = (event) => {
        firebase.setArtist({
            artistDocId,
            artistBio,
            artistImg,
            artistInstaId,
            artistName,
            artistProgramType: artistProgramType.split(',')
        });
        event.preventDefault();
    };

    const handleLocationSubmit = (event) => {
        firebase.setLocation({
            locationDocId,
            locationDescription,
            locationImg,
            locationInstaId,
            locationMapLink,
            locationName,
            locationProgramType: locationProgramType.split(',')
        }).then(isSuccess => {
            if (isSuccess) {
                setLocationDocId('');
                setLocationDescription('');
                setLocationImg('');
                setLocationInstaId('');
                setLocationMapLink('');
                setLocationName('');
                setLocationProgramType('');
            }
        });
        event.preventDefault();
    };

    return (
        <div className='AddData'>
            <form onSubmit={handleArtistSubmit}>
                <h1>Artist</h1>
                <label>
                    <h3>artist Doc Id</h3>
                    <p>고유한 아티스트의 id이여야 한다.(ex. abel_ko)</p>
                    <textarea value={artistDocId} onChange={e => setArtistDocId(e.target.value)}/>
                </label>
                <label>
                    <h3>artist Bio</h3>
                    <textarea value={artistBio} onChange={e => setArtistBio(e.target.value)}/>
                </label>
                <label>
                    <h3>img</h3>
                    <input value={artistImg} onChange={e => setArtistImg(e.target.value)}/>
                </label>
                <label>
                    <h3>instaId</h3>
                    <input value={artistInstaId} onChange={e => setArtistInstaId(e.target.value)}/>
                </label>
                <label>
                    <h3>name</h3>
                    <input value={artistName} onChange={e => setArtistName(e.target.value)}/>
                </label>
                <label>
                    <h3>programType</h3>
                    <input value={artistProgramType} onChange={e => setArtistProgramType(e.target.value)}/>
                </label>
                <button>submit</button>
            </form>

            <form onSubmit={handleLocationSubmit}>
                <h1>Location</h1>
                <label>
                    <h3>location Doc Id</h3>
                    <p>고유한 장소의 id이여야 한다.(ex. club_ff)</p>
                    <textarea value={locationDocId} onChange={e => setLocationDocId(e.target.value)}/>
                </label>
                <label>
                    <h3>description</h3>
                    <textarea value={locationDescription} onChange={e => setLocationDescription(e.target.value)}/>
                </label>
                <label>
                    <h3>img</h3>
                    <input value={locationImg} onChange={e => setLocationImg(e.target.value)}/>
                </label>
                <label>
                    <h3>instaId</h3>
                    <input value={locationInstaId} onChange={e => setLocationInstaId(e.target.value)}/>
                </label>
                <label>
                    <h3>mapLink</h3>
                    <input value={locationMapLink} onChange={e => setLocationMapLink(e.target.value)}/>
                </label>
                <label>
                    <h3>name</h3>
                    <input value={locationName} onChange={e => setLocationName(e.target.value)}/>
                </label>
                <label>
                    <h3>programType</h3>
                    <input value={locationProgramType} onChange={e => setLocationProgramType(e.target.value)}/>
                </label>
                <button>submit</button>
            </form>

            <h1>Event</h1>
        </div>
    );
};

export default withFirebase(AddData);
