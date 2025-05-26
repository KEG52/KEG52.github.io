const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const connectSection = document.querySelector('.connect');
  const contentReveal = document.querySelector('.content--reveal');
  const closeButton = document.querySelector('.content__close');
  const menuItems = document.querySelectorAll('.menu__item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      contentReveal.classList.add('active');
      connectSection.style.display = 'none';
    });
  });

  closeButton.addEventListener('click', () => {
    contentReveal.classList.remove('active');

    // Delay showing the connect section (e.g., 800ms)
    setTimeout(() => {
      connectSection.style.display = 'flex'; // or 'block' depending on layout
    }, 500); // 800 milliseconds delay
  });
});

const menuItems = document.querySelectorAll('.menu__item');
const header = document.getElementById('header-content');
const contentContainer = document.querySelector('.content--reveal');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    header.classList.add('fade-out');
  });
});
document.querySelector('.content__close').addEventListener('click', () => {
  header.classList.remove('fade-out');
});
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.carousel__nav.prev');
  const nextBtn = document.querySelector('.carousel__nav.next');
  const track = document.querySelector('.carousel__track');

  const cardWidth = track.querySelector('.carousel__card').offsetWidth + 24; // card width + gap

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
});