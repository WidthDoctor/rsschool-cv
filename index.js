const menu = document.querySelector(".menu");
const burger = document.querySelector('.burger_menu');
const HEADER = document.querySelector('header');


menu.addEventListener('click', function() {
  menuOFF();
  setTimeout(() => {
    HEADER.classList.add('little');
  }, 1000);
});


burger.addEventListener('click',function(){
  burgerOFF();
  HEADER.classList.remove('little');
})


function burgerOFF(){
  allSectionHide();
  HEADER.classList.remove('little');
  burger.classList.add('hide');
  setTimeout(() => {
    burger.classList.add('none');
  }, 500);

  menu.classList.remove('none');
  setTimeout(() => {
    menu.classList.remove('hide');
  }, 500);
}

function menuOFF() {
  menu.classList.add('hide');
  setTimeout(() => {
    menu.classList.add('none');
  }, 500);
  setTimeout(() => {
    HEADER.classList.add('little');
  }, 1000);

  burger.classList.remove('none');
  setTimeout(() => {
    burger.classList.remove('hide');
  }, 500);
}

const ABOUT = document.getElementById('about');
const skillsElement = document.getElementById('skills');
const educationElement = document.getElementById('education');
const experienceElement = document.getElementById('experience');
const codeElement = document.getElementById('code');
const languagesElement = document.getElementById('languages');

const sectionAbout = document.querySelector('.about');
const sectionSkills = document.querySelector('.skills');
const sectionEducation = document.querySelector('.education');
const sectionExperience = document.querySelector('.experience');
const sectionCode = document.querySelector('.code');
const sectionLanguages = document.querySelector('.languages');

function showSection(section) {
  section.classList.remove('none');
}

ABOUT.addEventListener('click', function() {
  showSection(sectionAbout);
});

skillsElement.addEventListener('click', function() {
  showSection(sectionSkills);
});

educationElement.addEventListener('click', function() {
  showSection(sectionEducation);
});

experienceElement.addEventListener('click', function() {
  showSection(sectionExperience);
});

codeElement.addEventListener('click', function() {
  showSection(sectionCode);
});

languagesElement.addEventListener('click', function() {
  showSection(sectionLanguages);
});

document.addEventListener('DOMContentLoaded', function() {
  const repeatCounts = {
    'Vs code': 4,
    'GIT': 3,
    'HTML': 4,
    'CSS': 4,
    'JAVA SCRIPT': 3,
    'NODE.JS':2,
    'TYPESCRIPT': 1,
    'FIGMA': 2,
    'ADOBE PHOTOSHOP': 2,
    'DEEPL':4
  };

  const hamsters = document.querySelectorAll('.hamster_wrapper');

  hamsters.forEach((hamster) => {
    const skillElement = hamster.closest('.skill');
    const elementText = skillElement.querySelector('span').textContent;

    if (repeatCounts.hasOwnProperty(elementText)) {
      const repeatCount = repeatCounts[elementText];
      const imgElement = hamster.querySelector('img');

      for (let i = 0; i < repeatCount; i++) {
        const imgClone = imgElement.cloneNode(true);
        hamster.appendChild(imgClone);
      }
    }
  });
});




function allSectionHide(){
  sectionAbout.classList.add('none');
  sectionSkills.classList.add('none');
}

const skillElements = document.querySelectorAll('.skill');


skillElements.forEach(function(skillElement) {
  skillElement.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=y2vPiGMlQl0&ab_channel=OFFICEGUY';
  });
});

