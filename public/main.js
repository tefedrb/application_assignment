const myHeader = new Headers();
myHeader.append('Content-Type', 'application/json');
fetch('http://localhost:3000/quote', {
  method: 'get',
  headers: myHeader
})
  .then(res => {
    document.getElementById('quote').innerText = res.quote;
  });