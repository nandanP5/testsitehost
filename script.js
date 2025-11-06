const $ = (s) => document.querySelector(s);

// counter
let count = 0;
const $count = $('#count');
$('#btn').addEventListener('click', () => {
  count++;
  $count.textContent = count;
  $('#msg').textContent = 'JS is wired up.';
});
$('#reset').addEventListener('click', () => {
  count = 0;
  $count.textContent = count;
});

// footer year
$('#year').textContent = new Date().getFullYear();

// environment info
const $env = $('#env');
['userAgent', 'language', 'platform'].forEach(k => {
  const li = document.createElement('li');
  li.textContent = `${k}: ${navigator[k]}`;
  $env.appendChild(li);
});
