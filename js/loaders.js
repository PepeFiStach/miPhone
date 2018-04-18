export function loadTracks(name) {
	return fetch(`/tracks/${name}.json`)
    .then(response => response.json());
}