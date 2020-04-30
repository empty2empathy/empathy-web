import React, { useState, useEffect } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddArtistModal from 'pages/AddData/_components/AddArtistModal/AddArtistModal'
import './AddArtist.scss';
import DataList from "../_components/DataList/DataList";

const AddArtist = ({ firebase }) => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const artists = await firebase.loadArtists();
      setArtists(artists);
      setIsLoading(false);
    };
    fetchData();
  }, [firebase]);

  return (
    <>
      <div>
        <AddArtistModal/>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {artists.map(({ id, name }, i) =>
            <DataList id={id} name={name} i={i}/>
          )}
        </>
      )}
    </>
  );
};

export default withFirebase(AddArtist);
