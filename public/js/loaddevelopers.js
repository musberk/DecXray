const developers=[];

developers.push(new Developers("Mustafa Berk Keleş","Jr.MachineLearingEng at Enuygun.com","https://www.linkedin.com/in/mustafa-berk-kele%C5%9F-a8782019a/","./img/developers/mustafaberk.jpg"));
developers.push(new Developers("Aytürk Keleş","Prof.Dr at IbrahimCecen Uni.","https://www.researchgate.net/profile/Ayturk_Keles2","./img/developers/ayturk_keles.jpg"))
developers.push(new Developers("Ali Keleş","Prof.Dr at IbrahimCecen Uni.","https://www.researchgate.net/profile/Ali_Keles3","./img/developers/ali_keles.jpg"))

document.addEventListener("DOMContentLoaded", ()=>{
    UIdevloper.addDeveloper(developers);
});
