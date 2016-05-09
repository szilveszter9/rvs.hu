'use strict';

export function get (url, cb) {
  let req = new XMLHttpRequest();
  req.onload = () =>
    req.status === 404 ?
      cb(new Error('not found')) :
      cb(null, req.response);
  req.open('GET', url);
  req.send();
}

export function getJSON (url, cb) {
  get(url, (err, response) => {
    cb(err, JSON.parse(response))
  });
}
