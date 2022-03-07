import React from 'react';
import useSpotify from '../hooks/useSpotify';

const Song = ({ order, track }) => {
	const spotifyApi = useSpotify();

  return (
		<div>
			<div>
				<p>{order + 1}</p>
				<img src={track.track.album.images?.[0].url} alt="img" />
			</div>
		</div>
  )
}

export default Song;