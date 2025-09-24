import { getTamuData } from '../src/assets/data/data.js';
const tabelBody = document.querySelector('#tabel-tamu tbody');
const searchInput = document.querySelector('#search');
const sectionTamu = document.getElementById('section-tamu');
const sectionKirim = document.getElementById('section-kirim');
const menuTamu = document.getElementById('menu-tamu');
const menuKirim = document.getElementById('menu-kirim');
const kirimList = document.getElementById('kirim-list');
function renderTamu(list) {
  tabelBody.innerHTML = '';
  list.forEach(tamu => {
    const row = document.createElement('tr');
    if (tamu.color) row.style.backgroundColor = tamu.color;
    row.innerHTML = `
      <td>${tamu.id}</td>
      <td>${tamu.name}</td>
      <td>${tamu.status}</td>
      <td>${tamu.message}</td>
      <td>${tamu.date}</td>
      <td>${tamu.phone || ''}</td>
      <td><button onclick="alert('Link dikirim ke ${tamu.name}')">Kirim</button></td>
    `;
    tabelBody.appendChild(row);
  });
}
function setupKirimUndangan(list) {
  kirimList.innerHTML = '';
  list.forEach(tamu => {
    const div = document.createElement('div');
    const link = `${window.location.origin}/index.html?guest=${encodeURIComponent(tamu.name)}`;
    div.innerHTML = `<strong style="color:${tamu.color || '#000'}">${tamu.name}</strong> (${tamu.phone || '-'}) : <input type="text" value="${link}" readonly onclick="this.select()">`;
    kirimList.appendChild(div);
  });
}
menuTamu.addEventListener('click', e => {
  e.preventDefault();
  sectionTamu.style.display = 'block';
  sectionKirim.style.display = 'none';
  menuTamu.classList.add('active');
  menuKirim.classList.remove('active');
});
menuKirim.addEventListener('click', e => {
  e.preventDefault();
  sectionTamu.style.display = 'none';
  sectionKirim.style.display = 'block';
  menuTamu.classList.remove('active');
  menuKirim.classList.add('active');
  setupKirimUndangan(tamuList);
});
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = tamuList.filter(tamu => tamu.name.toLowerCase().includes(keyword));
  renderTamu(filtered);
});
let tamuList = [];
async function initDashboard() {
  tamuList = await getTamuData();
  renderTamu(tamuList);
}
initDashboard();
