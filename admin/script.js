const API_URL = data.API_URL;

const sectionTamu = document.getElementById('section-tamu');
const sectionKirim = document.getElementById('section-kirim');
const tabelBody = document.querySelector('#tabel-tamu tbody');
const searchInput = document.getElementById('search');
const kirimList = document.getElementById('kirim-list');

const menuTamu = document.getElementById('menu-tamu');
const menuKirim = document.getElementById('menu-kirim');

menuTamu.addEventListener('click', () => {
  sectionTamu.style.display = 'block';
  sectionKirim.style.display = 'none';
  menuTamu.classList.add('active');
  menuKirim.classList.remove('active');
});

menuKirim.addEventListener('click', () => {
  sectionTamu.style.display = 'none';
  sectionKirim.style.display = 'block';
  menuKirim.classList.add('active');
  menuTamu.classList.remove('active');
  renderKirimList();
});

async function fetchTamu() {
  try {
    const res = await fetch(API_URL);
    const dataAPI = await res.json();
    return dataAPI.records || [];
  } catch (err) {
    console.error("Gagal fetch data:", err);
    return [];
  }
}

async function renderTamu(filteredList = null) {
  const tamu = filteredList || await fetchTamu();
  tabelBody.innerHTML = '';
  tamu.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.email}</td>
      <td>${item.status || '-'}</td>
      <td><button onclick="kirimUndangan('${item.email}', '${item.nama}')">Kirim</button></td>
    `;
    tabelBody.appendChild(row);
  });
}

searchInput.addEventListener('input', async () => {
  const query = searchInput.value.toLowerCase();
  const tamu = await fetchTamu();
  const filtered = tamu.filter(t => t.nama.toLowerCase().includes(query));
  renderTamu(filtered);
});

async function renderKirimList() {
  const tamu = await fetchTamu();
  kirimList.innerHTML = '';
  tamu.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <span>${item.nama} (${item.email})</span>
      <button onclick="kirimUndangan('${item.email}', '${item.nama}')">Kirim</button>
    `;
    kirimList.appendChild(div);
  });
}

function kirimUndangan(email, nama) {
  const link = `https://yeyenfauzi.github.io/invitation/?to=${encodeURIComponent(email)}`;
  navigator.clipboard.writeText(link);
  alert(`Link undangan untuk ${nama} sudah dicopy:\n${link}`);
}

renderTamu();
