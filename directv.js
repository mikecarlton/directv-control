/*
  Copyright (c) 2017 Mike Carlton
  Released under terms of the MIT license:
    http://www.opensource.org/licenses/mit-license
*/

function get(path, message) {
  var uri = 'http://' +  $('#ip').val() + ':' + $('#port').val() + path

  var xhr = new XMLHttpRequest()
  xhr.open('GET', uri)
  xhr.onload = function(evt) {
    if (xhr.status != 200) {
      $.growl.error({ 'message': 'Something went wrong, got back status ' + xhr.status,
                      location: 'br', duration: 10000 })
    }
  }
  xhr.send()
  $.growl({ title: message, message: '', location: 'br', duration: 1000 });
}

function tochannel(channel) {
  get('/tv/tune?major=' + channel, "Change to channel " + channel)
}

function dotv(self) {
  get('/remote/processKey?key=' + self.id, self.textContent)
}

function enterchannel(self) {
  tochannel($('#channel').val())
}

function gotochannel(self) {
  tochannel(self.id)
}

