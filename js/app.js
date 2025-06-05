/* ------  typing animation  ------ */
var typed = new Typed('.typing', {
    strings: ["", 'Web Designer', 'UI/UX Designer', 'Full-Stack Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ------  Aside  ------ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}
const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
}
// Calculate age based on birth date
document.addEventListener('DOMContentLoaded', function () {
    const birthYear = 2002;
    const today = new Date();
    let age = today.getFullYear() - birthYear;
    // Adjust if birthday hasn't occurred yet this year
    const birthMonth = 2; // March (0-based index)
    const birthDay = 24;
    if (
        today.getMonth() < birthMonth ||
        (today.getMonth() === birthMonth && today.getDate() < birthDay)
    ) {
        age--;
    }
    document.getElementById('age').textContent = age;
});