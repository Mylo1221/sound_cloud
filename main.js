SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
 SC.stream('/tracks/325474119,function(sound){
   $('#start').click(function(e) {
              e.preventDefault();
              sound.start();
            });
            $('#stop').click(function(e) {
                       e.preventDefault();
                       sound.stop();
             });

  });
 });
// <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325474119&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/imaginedragons" title="Imagine Dragons" target="_blank" style="color: #cccccc; text-decoration: none;">Imagine Dragons</a> · <a href="https://soundcloud.com/imaginedragons/believer-kaskade-remix" title="Believer (Kaskade Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Believer (Kaskade Remix)</a></div>
