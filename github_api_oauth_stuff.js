prepTopologyInput2: async function(src, pick, org) { // stupid name, change later
  // a - get value from env variable to make gh call
  // a0 - check if repo is public or private
  let privateRepo = false;

  let start = src.split('/');
  start = start.slice(3,5).join('/');
  start = `https://api.github.com/repos/${start}`;

  axios.get(start).then(res => {
    res.data.private === false ? privateRepo = false : privateRepo = true
  }).then(console.log(privateRepo));

  // b - make GET to https://github.com/login/oauth/authorize?scopes:repo
  // c - this should return a token
  // d - this then is part of the call you make in the GET to the original src parameter link
  let secret = this.key_secret, id = this.key_id
},
