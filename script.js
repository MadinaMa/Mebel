
const next = document.querySelector("#next");

const photos = ["https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic1.jpg?v=1694897188397", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic2.jpg?v=1694897191318", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic3.JPG?v=1694897193947", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic4.jpg?v=1694897196919", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic5.jpg?v=1694897200307", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic6.jpg?v=1694897206360", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic7.JPG?v=1694901145446", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic8.jpg?v=1694901202305", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic9.jpg?v=1694901276785", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic10.jpg?v=1694901368380", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic11.jpg?v=1694901578244", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic12.jpg?v=1694901581521", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic13.jpg?v=1694901584058", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic14.jpeg?v=1694901891876", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic15.jpg?v=1694901894406", "https://cdn.glitch.global/61cfa6fe-2743-4e24-a9f5-120b83e8e02c/pic16.jpg?v=1694901897934"]

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector("#pictures").src = photos[i];
    })


gsap.from(".start", {duration: 2, delay: .8, opacity: 0, ease: "power1.in"})
gsap.from(".link", {duration: 4, delay: 1.1, opacity: 0, ease: "power1.in", stagger: 1})

 