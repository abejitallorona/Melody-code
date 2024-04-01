interface ReviewsShape {
	nameAndArtist: string;
	typeAndYear: string;
	albumPicture: string;
	userPicture: string;
	username: string;
	review: string;
	likes: number;
	comments: number;
}

export const Reviews: ReviewsShape[] = [
	{
		nameAndArtist: 'Setlle-Disclosure',
		typeAndYear: 'Album-2013',
		albumPicture: 'https://upload.wikimedia.org/wikipedia/en/7/76/Disclosure_-_Settle.png',
		userPicture: 'https://i.pinimg.com/564x/0c/dc/42/0cdc42ae52de52c6ebc16f1f23b3dabd.jpg',
		username: 'Laura Palacio',
		review:
			"Disclosure's  Settle is an electrifying masterpiece that seamlessly blends house, garage, and pop elements, creating a sonic experience that feels both nostalgic and groundbreaking. From the infectious beats of  Latch  to the soulful vocals on White Noise, each track is a journey in itself The duo's production prowess shines through, with tight rhythms, catchy hooks, and a keen sense of melody F For You and When a Fire Starts to Burn showcase their ability to craft club anthems that still resonate with depth The collaboration with talented vocalists adds another layer, elevating the album to a truly immersive experience...",
		likes: 127,
		comments: 236,
	},
];
