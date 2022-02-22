//Handle session saving/requesting
const BE_API_URL = 'localhost:4000';
if(localStorage.length > 0) {
  //Session ID saved proceed with login
  (async () => {
    await fetch(`${BE_API_URL}/${localStorage.getItem('user_id')}`);
  })();
} else {
  (async () => {
    await fetch(`${BE_API_URL}/`, {
      method: 'POST'
    });
  })();
}