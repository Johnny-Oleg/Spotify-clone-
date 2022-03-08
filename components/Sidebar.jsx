import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
	HomeIcon,
	SearchIcon,
	LibraryIcon,
	PlusCircleIcon,
	RssIcon
} from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';
import { BsSpotify } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import useSpotify from '../hooks/useSpotify';
import { playlistIdState } from '../atoms/playlistAtom';

const Sidebar = () => {
	const { data: session, status } = useSession();
	const [playlists, setPlaylists] = useState([]);
	const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
	const spotifyApi = useSpotify();

	useEffect(() => {
		if (spotifyApi.getAccessToken()) {
			spotifyApi.getUserPlaylists().then(data => {
				setPlaylists(data.body.items)
			})
		}
	}, [session, spotifyApi])

	console.log(session, playlistId);

  return (
		<div 
			className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36"
		>
			<div className="space-y-4">
				<button className="flex items-center space-x-2 text-white text-2xl">
					<BsSpotify className="h-10 w-10" />
					<h3>Spotify</h3>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<HomeIcon className="h-5 w-5" />
					<p>Home</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<SearchIcon className="h-5 w-5" />
					<p>Search</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<LibraryIcon className="h-5 w-5" />
					<p>Your Library</p>
				</button>
				<hr className="border-t-[0.1px] border-gray-900" />			
				<button className="flex items-center space-x-2 hover:text-white">
					<PlusCircleIcon className="h-5 w-5" />
					<p>Create Playlist</p>
				</button>
				<button className="flex items-center text-blue-500 space-x-2 hover:text-white">
					<HeartIcon className="h-5 w-5" />
					<p>Liked Songs</p>
				</button>
				<button className="flex items-center text-green-500 space-x-2 hover:text-white">
					<RssIcon className="h-5 w-5" />
					<p>Your Episodes</p>
				</button>
				<hr className="border-t-[0.1px] border-gray-900" />
				{playlists.map(playlist => (
					<p 
						className="cursor-pointer hover:text-white"
						onClick={() => setPlaylistId(playlist.id)}
						key={playlist.id}
					>
						{playlist.name}
					</p>
				))}
			</div>
		</div>
  )
}

export default Sidebar;