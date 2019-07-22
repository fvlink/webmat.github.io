/* $('#diplayer')[0].dataset.* // data user
$('.current-song')[0].dataset.marquee = 'dda'; // title
$('.current-song-logo')[0].style = "background-image: url('');"; // logo artist
$('#diplayer')[0].dataset.autostart
RH14290
http://s0.radioheart.ru:8000/json.xsl?mount=/RH14290
*/

var domain = "http://s0.radioheart.ru:8000",mountpoint = "/"+$('#diplayer')[0].dataset.stream, mountpoint2 = "/"+$('#diplayer')[0].dataset.stream, nac = true, counter=0, url = domain+"/json_new.xsl?", slider = $('#player-volume');
url+= "mount=" + mountpoint + "&callback=", volume = $('.volume');
var domain2 = "http://myradio24.com/users/",mountpoint21 = $('#diplayer')[0].dataset.streamalt, mountpoint22 = $('#diplayer')[0].dataset.streamalt, nac2 = true, counter2=0, url2 = "/status.json";
url2+= domain2+mountpoint21.replace('_live');
var trackist = ['ZXbIFIorShBq','CreJ', 'nWYFScby', 'i', 'xUye', 'Fr', 'cHjkcc', 'qC', 'D'],
	trackisting = ['1ee9901', 'd8ec',  'f5', 'b2b91', '3554', '2b', '9', '7bd5675'];

function STATS (results)
{
    for  (var n in results){
        var nm = results[n];
        if(nm["song"] && nac2){
            nac2 = false;
            /* $('#stream_song').text('Сейчас в эфире: '+nm["title"]);
            $('#stream_listenters').text('Слушателей: '+nm["listeners"]);*/
            $('.current-song')[0].dataset.marquee = nm["song"];
            $('title')[0].text = nm["song"] + " [Music & Tastes]";
            if (nm["url"].length != 0 || $('#player-st')[0].href.length != 0)
              $('#player-st')[0].href = nm["url"]; else $('#player-st')[0].href = $('#diplayer')[0].dataset.linkstation;
            if (nm["song"] !== ''){
                $('#player-stat')[0].innerHTML = nm["djname"];
                  $.getJSON('https://api.discogs.com/database/search?q='+encodeURIComponent(nm["song"])+'&token='+trackist[1]+trackist[5]+trackist[0]+trackist[2]+trackist[8]+trackist[4]+trackist[6]+trackist[7]+trackist[3], function(data2) {
                  if (data2.results.length !== 0){
                              if (data2.results[0].thumb!==-1){
                              $('.current-song-logo')[0].style = "background-image: url('"+data2.results[0].thumb+"');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('"+data2.results[0].cover_image+"'); background-size: cover;";
                              if (data2.results[0].uri.length !== 0){
                              $('#current-song-st')[0].href = "https://www.discogs.com"+data2.results[0].uri;
                              $('#current-song-st')[0].target = "_blank";
                              }
                              else
                              $('#current-song-st')[0].href = "";
                              }
                              else
                              {
                              $('.current-song-logo')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg'); background-size: cover;";
                              $('#current-song-st')[0].href = "";
                              }
                      } else {
                      //var tmpstr = nm["song"];
                      //tmpstr = tmpstr.split(' - ');
                      $.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+encodeURIComponent(nm["artist"])+'&api_key='+trackisting[5]+trackisting[4]+trackisting[7]+trackisting[1]+trackisting[3]+trackisting[0]+trackisting[2]+trackisting[6]+'&format=json', function(data2) {
                      if (data2.artist!==''){
                          if (data2.artist.image[3]['#text']==''){
                              $('.current-song-logo')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg'); background-size: cover;";
                          } else {
                              $('.current-song-logo')[0].style = "background-image: url('"+data2.artist.image[3]['#text']+"');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('"+data2.artist.image[3]['#text'].replace('/34s/','300x300')+"'); background-size: cover;";
                              if (data2.url.length !== 0){
                              $('#current-song-st')[0].href = data2.url;
                              $('#current-song-st')[0].target = "_blank";
                              }
                              else
                              $('#current-song-st')[0].href = "";
                          }
                      }
                      });
                  }
                  $('#current-song-st')[0].title = nm["song"];
              });
            }
        }
    }
}

function parseMusic(results)
{
    for  (var n in results){
        var nm = results[n];
        if(nm["title"] && nac){
            nac = false;
            /* $('#stream_song').text('Сейчас в эфире: '+nm["title"]);
            $('#stream_listenters').text('Слушателей: '+nm["listeners"]);*/
            $('.current-song')[0].dataset.marquee = nm["title"];
            if (nm["url"].length != 0 || $('#player-st')[0].href.length != 0)
              $('#player-st')[0].href = nm["url"]; else $('#player-st')[0].href = $('#diplayer')[0].dataset.linkstation;
            if (nm["title"] !== ''){
                $('#player-stat')[0].innerHTML = nm["name"];
                $('title')[0].text = nm["title"] + " [Music & Tastes]";
                  $.getJSON('https://api.discogs.com/database/search?q='+encodeURIComponent(nm["title"])+'&token='+trackist[1]+trackist[5]+trackist[0]+trackist[2]+trackist[8]+trackist[4]+trackist[6]+trackist[7]+trackist[3], function(data2) {
                  if (data2.results.length !== 0){
                              if (data2.results[0].thumb!==-1){
                              $('.current-song-logo')[0].style = "background-image: url('"+data2.results[0].thumb+"');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('"+data2.results[0].cover_image+"'); background-size: cover;";
                              if (data2.results[0].uri.length !== 0){
                              $('#current-song-st')[0].href = "https://www.discogs.com"+data2.results[0].uri;
                              $('#current-song-st')[0].target = "_blank";
                              }
                              else
                              $('#current-song-st')[0].href = "";
                              }
                              else
                              {
                              $('.current-song-logo')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg'); background-size: cover;";
                              $('#current-song-st')[0].href = "";
                              }
                      } else {
                      var tmpstr = nm["title"];
                      tmpstr = tmpstr.split(' - ');
                      $.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+encodeURIComponent(tmpstr[0])+'&api_key='+trackisting[5]+trackisting[4]+trackisting[7]+trackisting[1]+trackisting[3]+trackisting[0]+trackisting[2]+trackisting[6]+'&format=json', function(data2) {
                      if (data2.artist!==''){
                          if (data2.artist.image[3]['#text']==''){
                              $('.current-song-logo')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg'); background-size: cover;";
                              $('#current-song-st')[0].href = "";
                          } else {
                              $('.current-song-logo')[0].style = "background-image: url('"+data2.artist.image[3]['#text']+"');";
                              if ($('#diplayer')[0].dataset.background != 'false')
                              $('body')[0].style = "background-image: url('"+data2.artist.image[3]['#text'].replace('/34s/','300x300')+"'); background-size: cover;";
                              if (data2.url.length !== 0){
                              $('#current-song-st')[0].href = data2.url;
                              $('#current-song-st')[0].target = "_blank";
                              }
                              else
                              $('#current-song-st')[0].href = "";

                          }
                      }
                      });
                  }
                  $('#current-song-st')[0].title = nm["title"];
              });
            }
        }
    }
}

var span;
var script;
var script2;
$.ajaxSetup({ scriptCharset: "utf-8" , contentType: "application/json; charset=utf-8"});



function check_audio() {
 var elem = document.createElement('audio'), bool = false;
 try {
 if ( bool = !!elem.canPlayType ) {
 bool = new Boolean(bool);
 bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
 bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/,'');
 bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
 bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/,'');
 }
 }
 catch(e) {
 }
 return bool;
}

function init(){
  span = document.createElement("span");
    span.id="getscript";
    document.body.appendChild(span);
    script  = document.createElement("script");
    script.type="text/javascript";
    script.charset="UTF-8";
    script2  = document.createElement("script");
  if ($('#diplayer')[0].dataset.station.length != 0){
    $('.logo')[0].style = "background-image: url('"+$('#diplayer')[0].dataset.station+"');";
  }
  if ($('#diplayer')[0].dataset.stream.length != 0){
    $('.current-song')[0].dataset.marquee = $('#diplayer')[0].dataset.playtext;
    if ($('#diplayer')[0].dataset.linkstation.length != 0){
    $('#player-st')[0].href = $('#diplayer')[0].dataset.linkstation;
    $('#player-st')[0].target = "_blank";
    } else {
    $('#player-st')[0].href = '#';
    $('#player-st')[0].target = "";
    }
    $('#diplayer').append("<audio id=\"actobers\" preload=\"auto\" autobuffer display:none;><source src=\"http://live.myradio24.com:9000/"+mountpoint21+"\" type=\"audio/mp3\"><source src=\""+domain+mountpoint+"\" type=\"audio/mp3\">Ваш браузер не поддерживает технологию HTML5 Media Element!</audio>");
    //console.log(check_audio());
    $('#actobers')[0].volume = $( "#slider" ).slider('value')/100;
    $("#player-play").click(function(){
      playble();
    });
    $(".mutecontrol").click(function(){
      if ($('#actobers')[0].muted === false){
        $('#actobers')[0].muted = true;
        $(this).removeClass("active");
      } else {
        $('#actobers')[0].muted = false;
        $(this).addClass("active");
      }
    });
    if ($('#diplayer')[0].dataset.autostart === "true")
      playble(); else $('#actobers')[0].pause();
  }
}

function checkstream(url){
  var wdata = new XMLHttpRequest();
  wdata.open('HEAD', url, true);
  wdata.send();
  wdata.onreadystatechange = function() {
    return wdata.status;
    }
    return wdata.status;
}

function playble(){
  if ($('#actobers')[0].paused === true){
    /*var wdata = new XMLHttpRequest();
    wdata.open('HEAD', domain2+mountpoint21, true);
    wdata.send();
    wdata.onreadystatechange = function() {
      if (wdata.status === 200){$('#actobers')[0].src = domain2+mountpoint21;}
      else {$('#actobers')[0].src = domain+mountpoint;}
    }*/
    musicData();
    $('#actobers')[0].play();
    $('#player-play')[0].innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    $('#actobers')[0].pause();
    $('#player-play')[0].innerHTML = '<i class="fa fa-play"></i>';
  }
}

function musicData()
{
  $('#getscript').empty();
    nac = true;
    script.src = url + counter;
    $('#getscript').append(script);
    
  counter = counter+1;
    var wdata = new XMLHttpRequest();
    wdata.open('GET', 'http://myradio24.com/users/22109/status.json', true);
    wdata.send();
    wdata.onreadystatechange = function() {
    nac2 = true;
    script2.text = 'STATS ({"/'+mountpoint21+'":'+ wdata.responseText +'});';
    $('#getscript').append(script2);
    counter2 = counter2+1;
    }
}

function update(){
  if ($('#actobers')[0].paused != true){
    musicData();
    $('#player-play')[0].innerHTML = '<i class="fa fa-pause"></i>';
  }
}

function updateelem(){
  if ($('#actobers')[0].paused != true){
    $('#player-play')[0].innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    $('#player-play')[0].innerHTML = '<i class="fa fa-play"></i>';
  }
  if ($('#actobers')[0].muted === false){
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
}

$(function() {
  var slider = $( "#slider" );
  slider.slider({
    range: "min",
    min: 2,
    value: 50,
    slide: function(event, ui) {
      var value = slider.slider('value');
      $('#actobers')[0].volume = value/100;
    },
  });
});

$(document).ready(
    function () {
  init();
  musicData();
  setInterval('update()', 15000 );
  setInterval('updateelem()', 1000 );
});