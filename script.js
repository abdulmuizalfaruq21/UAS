
let participants = JSON.parse(localStorage.getItem('coffeeStoryParticipants')) || [];

const quotaEl = document.getElementById('quota');
const form = document.getElementById('registerForm');
const message = document.getElementById('message');

function updateQuota() {
  const remaining = 50 - participants.length;
  quotaEl.textContent = remaining;
}

updateQuota();

const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
  document.getElementById('philosophy').scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (participants.length >= 50) {
    message.textContent = 'Kuota sudah penuh.';
    return;
  }

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const category = document.getElementById('category').value;
  const reason = document.getElementById('reason').value.trim();

  if (!name || !email || !phone || !category || !reason) {
    message.textContent = 'Harap isi semua data.';
    return;
  }

  participants.push({ name, email, phone, category, reason });

  // Save to local storage (tersimpan di laptop/browser kamu)
  localStorage.setItem('coffeeStoryParticipants', JSON.stringify(participants));

  message.textContent = 'Pendaftaran berhasil!';
  form.reset();
  updateQuota();
});
