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

    // location state
    const [locationDocId, setLocationDocId] = useState('');
    const [locationDescription, setLocationDescription] = useState('');
    const [locationImg, setLocationImg] = useState('');
    const [locationInstaId, setLocationInstaId] = useState('');
    const [locationMapLink, setLocationMapLink] = useState('');
    const [locationName, setLocationName] = useState('');
    const [locationProgramType, setLocationProgramType] = useState('');

    // event state
    const [eventArtists, setEventArtists] = useState('');
    const [eventTime, setEventTime] = useState({ start: '', end: '' });
    const [eventDescription, setEventDescription] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventProgramType, setEventProgramType] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [eventYoutubeVideoId, setEventYoutubeVideoId] = useState('');

    const handleArtistSubmit = (event) => {
        firebase.setArtist({
            artistDocId,
            artistBio,
            artistImg,
            artistInstaId,
            artistName,
            artistProgramType: artistProgramType.split(',')
        }).then(isSuccess => {
            if (isSuccess) {
                setArtistDocId('');
                setArtistBio('');
                setArtistImg('');
                setArtistInstaId('');
                setArtistName('');
                setArtistProgramType('');
            }
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

    const handleEventSubmit = ev => {
        firebase.setEvent({
            eventArtists: eventArtists.split(','),
            eventTime,
            eventDescription,
            eventLocation,
            eventProgramType: eventProgramType.split(','),
            eventTitle,
            eventYoutubeVideoId,
        }).then(isSuccess => {
            if (isSuccess) {
                setEventArtists('');
                setEventTime({ start: '', end: '' });
                setEventDescription('');
                setEventLocation('');
                setEventProgramType('');
                setEventTitle('');
                setEventYoutubeVideoId('');
            }
        });
        ev.preventDefault();
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

            <form onSubmit={handleEventSubmit}>
                <p>이벤트 doc id는 자동생성된다.</p>
                <label>
                    <h3>artists (path를 ','으로 나누어서 넣어야 한다. ex. /artist/dawn_studio)</h3>
                    <input value={eventArtists} onChange={e => setEventArtists(e.target.value)}/>
                </label>
                <label>
                    <h3>date</h3>
                    <div>
                        <span>start</span>
                        <input type='date' value={eventTime.start}
                               onChange={e => setEventTime({
                                   ...eventTime, start: e.target.value
                               })}/>
                    </div>
                    <div>
                        <span>end</span>
                        <input type='date' value={eventTime.end}
                               onChange={e => setEventTime({
                                   ...eventTime, end: e.target.value
                               })}/>
                    </div>
                </label>
                <label>
                    <h3>description</h3>
                    <textarea value={eventDescription} onChange={e => setEventDescription(e.target.value)}/>
                </label>
                <label>
                    <h3>location (path를 넣어야 한다. ex. /location/evanslounge)</h3>
                    <input value={eventLocation} onChange={e => setEventLocation(e.target.value)}/>
                </label>
                <label>
                    <h3>programType (','로 나누어 여러개의 programType을 넣을 수 있다.)</h3>
                    <input value={eventProgramType} onChange={e => setEventProgramType(e.target.value)}/>
                </label>
                <label>
                    <h3>title</h3>
                    <input value={eventTitle} onChange={e => setEventTitle(e.target.value)}/>
                </label>
                <label>
                    <h3>youtubeVideoId</h3>
                    <input value={eventYoutubeVideoId} onChange={e => setEventYoutubeVideoId(e.target.value)}/>
                </label>
                <button>submit</button>
            </form>
        </div>
    );
};

export default withFirebase(AddData);
