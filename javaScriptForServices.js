const images = document.querySelectorAll('.Mining_Services');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

images.forEach((image) => {
  observer.observe(image);
});

//4homePage
const backDrop = document.querySelectorAll('.backDrop');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

backDrop.forEach((image) => {
  observer2.observe(image);
});


const contact = document.querySelectorAll('#contact');

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

contact.forEach((image) => {
  observer3.observe(image);
});


const services = document.querySelectorAll('#services');

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

services.forEach((image) => {
  observer4.observe(image);
});

const aboutUs = document.querySelectorAll('#aboutUs');

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

aboutUs.forEach((image) => {
  observer5.observe(image);
});

const jesu = document.querySelectorAll('#jesu');

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

jesu.forEach((image) => {
  observer6.observe(image);
});

const BotMen = document.querySelectorAll('.bottomMenu');

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

BotMen.forEach((image) => {
  observer7.observe(image);
});

const containerB = document.querySelectorAll('#containerB');

const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

containerB.forEach((image) => {
  observer8.observe(image);
});

const containerC = document.querySelectorAll('#containerC');

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

containerC.forEach((image) => {
  observer9.observe(image);
});

const containerD = document.querySelectorAll('#containerD');

const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

containerD.forEach((image) => {
  observer10.observe(image);
});

const containerE = document.querySelectorAll('#containerE');

const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

containerE.forEach((image) => {
  observer11.observe(image);
});