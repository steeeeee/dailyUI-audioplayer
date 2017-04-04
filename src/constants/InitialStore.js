export const INITIAL_STORE =
{
    albums: {
        byId: {
            album_01: {
                title: 'Outrun',
                artist: 'Kavinsky',
                tracks: ['track_01', 'track_02', 'track_03']
            }
        },
        allIDs: ['album_01'],
        selected: '',
    },
    tracks: {
        byId: {
            track_01: {
                id: 'track_01', 
                name: 'Prelude',
                number: '1',
                length: '1:54'
            },
            track_02: {
                id: 'track_02',
                name: 'Blizzard',
                number: '2',
                length: '3:27'
            },
            track_03: {
                id: 'track_03',
                name: 'ProtoVision',
                number: '3',
                length: '3:26'
            }
        },
        allIDs: ['track_01','track_02','track_03'],
        favs: ['track_02'],
        bookmarked: [],
        selected: '',
        secondsPlayed: '0',
    }
}