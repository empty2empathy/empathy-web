import React, { useState, useEffect } from 'react';
import { withFirebase } from "redbricks-firebase";
import './AddArtist.scss';

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
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <tbody>
          {artists.map(({ id, name }, i) => {
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{id}</td>
                <td>{name}</td>
                <td>X</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default withFirebase(AddArtist);
