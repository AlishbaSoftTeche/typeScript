function make_album(artist,titlt,tracks){
let album = {
    artist:artist,
    titlt:titlt
};

if(tracks) {
    album.tracks = tracks;
}
return album;

}

let album1 = make_album("Taylor Swft" ,"Farless")
let album2 = make_album("BTS" ,"Butter")
let album3 = make_album("Black Pink" ,"Money")

console.log(album1);
console.log(album2);
console.log(album3);