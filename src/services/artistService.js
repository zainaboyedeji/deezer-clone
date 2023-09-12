import client from './api';

const baseUrl = 'http://localhost:8000'

export async function getArtist (search) {
    let artists = [];
    const music = await client.get(`${baseUrl}/search?q=${search}`) ;
    for(const item of music.data.data){
      artists.push(item.artist)
    }
    return artists; 
}

