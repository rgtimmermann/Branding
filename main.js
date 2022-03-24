'use strict';

let cc = document.getElementById("SoMe");
let soMeImgs = [
    "IMG/influencerSoMe.png",
    "IMG/grafiskDesign.png",
    "IMG/websiteProgrammering.png",
    "IMG/kampagneSkydning.png",
    "IMG/seo.png"
]

let soMeh2 = document.getElementById("soMeh2");
let soMeh2s = [
    "INFLUENCERS <br> & SOCIALE MEDIER",
    "GRAFISK DESIGN",
    "WEBSITE PROGRAMMERING",
    "KAMPAGNE <br> SKYDNINGER",
    "SEO <br> OPTIMERING"
]
let soMeText = document.getElementById("soMeText");
let soMeTexts = [
    "Mangler du hjælp eler vejledning til de sociale medier eller står du og mangler den rigtige influencer til, at brande din virksomhed?",
    "Hvordan er du Unik? Har dit brand det rigtige Logo? Er din webshop visuelt sammenhængende. Vi kan hjælpe dig med, at få dit brand til at skille sig ud fra mængden!",
    "Mangler du et website eller en webshop, eller skal du have opdateret din nuværende? Så lad os hjælpe dig, vi er eksperter i brugeroplevelser og brugervenlighed.",
    "Vi står klar til at skyde dine næste billeder eller til at producere din virksomheds næste branding video.",
    "Ved hjælp af SEO optimering, vil din hjemmeside nemmere blive opdaget i forbindelse med google søgninger."
]

let i = 0;

const carousel = () => {
    if (i == soMeImgs.length-1) {
        i = 0;
    } else {
        i += 1;
    }
    cc.style.backgroundImage = `url(${soMeImgs[i]})`;
    soMeh2.innerHTML = soMeh2s[i];
    soMeText.innerHTML = soMeTexts[i];
}
setInterval(carousel, 6000);