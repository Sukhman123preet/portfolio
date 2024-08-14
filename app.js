let sec = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
let logos= document.querySelectorAll(".platforms img")
var info = document.querySelectorAll('form[name="myForm"] input');
let proj=document.querySelectorAll(".list_of_p div");

const projectUrls={
    curr:'https://sukhman123preet.github.io/curr',
   clone:'https://sukhman123preet.github.io/UI_clone_netflix',
    game:'https://sukhman123preet.github.io/tik_tac_toe'
};
const profileUrls = {
    leetcode: 'https://leetcode.com/u/sukhmanpreetsingh/',
    gfgLogo: 'https://www.geeksforgeeks.org/user/sukhmanpr29r3/',
    github: 'https://github.com/Sukhman123preet'
};
sec.forEach((section, index) => {
    section.addEventListener("mouseover", () => {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    });
});
logos.forEach((logo) => {
    logo.addEventListener("click", () => {
        if (logo.id === 'leetcode') {
            window.open(profileUrls.leetcode, '_blank'); 
        } else if (logo.id=='gfgLogo') {
            window.open(profileUrls.gfgLogo, '_blank');
        } else if (logo.id === 'GitHub') {
            window.open(profileUrls.github, '_blank');
        }
    });
});


proj.forEach((p) => {
    p.addEventListener("click", () => {
        if (p.id === 'curr') {
            window.open(projectUrls.curr, '_blank'); 
        } else if (p.id=='clone') {
            window.open(projectUrls.clone, '_blank');
        } else if (p.id === 'game') {
            window.open(projectUrls.game, '_blank');
        }
    });
});
