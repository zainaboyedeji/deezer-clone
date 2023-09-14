import client from "./api";

const baseUrl = "http://localhost:8000";

export async function getArtistById(id) {
  const response = await client.get(`${baseUrl}/artist/${id}`);
  const data = await response.data;
  return data;
}

export async function getArtist(search) {
  let artists = [];
  const music = await client.get(`${baseUrl}/search?q=artist:"${search}"`);
  for (const item of music.data.data) {
    const existingArtist = artists.find(
      (artist) => artist.id == item.artist.id
    );
    if (item.artist.name.toLowerCase().includes(search.toLowerCase()) && !existingArtist) {
      artists.push(item.artist);
    }
  }
  artists = await Promise.all(
    artists.map((artist) => getArtistById(artist.id))
  );
  return artists;
}

export async function getAlbumById(id) {
  const response = await client.get(`${baseUrl}/album/${id}`);
  const data = await response.data;
  return data;
}

export async function getTopTrack(id) {
  const response = await client.get(`${baseUrl}/artist/${id}/top?limit=5`);
  let data = await response.data.data;
  data = await Promise.all(
    data.map(async(track) => {
      track.album = await getAlbumById(track.album.id); 
      return track
    })
  );
  return data;
}
