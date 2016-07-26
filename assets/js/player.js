
var mediaPath = 'assets/media';

function createSongTitle(song) {
	return song.artist + ' - ' + song.album + ' - ' + song.song;
}

function createPlaylist() {
	var list = document.querySelector('#playlist ul');
	for (var i = 0; i < songs.length; i++) {
		var li = document.createElement('li')
		var titleSpan = document.createElement('span');
		var buttonSpan = document.createElement('span');
		buttonSpan.className = 'fa fa-play';
		var song = songs[i];
		titleSpan.innerHTML = (i + 1) + '. ' + createSongTitle(song)
		
		li.appendChild(titleSpan);
		li.appendChild(buttonSpan);
		
		li.setAttribute('data-index', i);
		
		list.appendChild(li)
	}
}

function loadData() {
	Ajax.request('GET', 'ajax.php', true, function(response) {
		songs = JSON.parse(response);	
		createPlaylist();
	});
}

loadData();
