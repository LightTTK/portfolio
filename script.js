// Script.js acts as the main data source
// ProjectInfo stores data (Titles, descriptions, links) for each item.
const projectInfo = {
    "unity-wrapper": {
        1: { 
            title: "Code: Error", 
            description: "First 3D game that was made. \n \n A First-Person shooter game that has one Roguelite element with 4 Levels including the tutorial level.", 
            itchLink: "https://tklight.itch.io/code-error",
            githubLink: "https://github.com/LightTTK/CodeError",
            // Gallery just calls where the images are 
            gallery: [
                "Images/Released/Previews/1_screenshot1.png",
                "Images/Released/Previews/1_screenshot2.png",
                "Images/Released/Previews/1_screenshot3.png",
                "Images/Released/Previews/1_screenshot4.png"
            ]
        },
        2: { 
            title: "Re: World", 
            description: "A platformer with deadly traps , The audio is bad because it's the first ever game I made, It's a extremely short game.", 
            itchLink: "https://tklight.itch.io/re-world",
            gallery: [
                "Images/Released/Previews/2_screenshot1.png",
                "Images/Released/Previews/2_screenshot2.png",
                "Images/Released/Previews/2_screenshot3.png",
                "Images/Released/Previews/2_screenshot4.png"
            ]
        },
        
    },
    "unreleased-wrapper": {
        1: { 
            title: "Idle Game", 
            description: "A asset flip project from Code: Error but as a idle game",
            gallery: [
                "Images/Unreleased/Previews/1_screenshot1.png",
                "Images/Unreleased/Previews/1_screenshot2.png",
            ]
        },
        2: { 
            title: "What a Day!", 
            description: "This game was for the SA game jam",
            gallery: [
                "Images/Unreleased/Previews/2_screenshot1.png",
            ]
        },
    },
    "upcoming-wrapper": {
        1: { 
            title: "Project CodeX", 
            description: "A first-person shooter that has Roguelikes \n (A reimagined of Code: Error)",
            gallery: [
                "Images/Upcoming/Previews/1_screenshot1.png",
                "Images/Upcoming/Previews/1_screenshot2.png",
                "Images/Upcoming/Previews/1_screenshot3.png"
            ]
         },
        2: { 
            title: "Liminal Space", 
            description: "A fast-paced auto-runner about surviving in the backrooms" }
    },
    "artwork-wrapper": {
        1: { title: "Mask", 
            description: "Inspired by Demon Slayer \n \n Made in 2020",
             gallery: [
                "Images/Artwork/Previews/1_bg.png",         
                "Images/Artwork/Previews/1_screenshot1.png"
            ]
           },
        2: { title: "Phone", 
            description: "Inspired by a Iphone \n \n Made in 2020",
             gallery: [
                "Images/Artwork/Previews/2_bg.png",         
                "Images/Artwork/Previews/2_screenshot1.png",
                "Images/Artwork/Previews/2_screenshot2.png"
            ]
           },
        3: { title: "Donut", 
            description: "From the Donut video blenderGuru \n \n Made in January 2021",
             gallery: [       
                "Images/Artwork/Previews/3_screenshot1.png",
                "Images/Artwork/Previews/3_screenshot2.png",
                "Images/Artwork/Previews/3_screenshot3.png",
                "Images/Artwork/Previews/3_screenshot4.png",
                "Images/Artwork/Previews/3_screenshot5.png",
                "Images/Artwork/Previews/3_bg.png", 
            ]
           },
        4: { title: "1980s Glock", 
            description: "Cel-shaded Glock inspired from Noir color palette \n \n Made in February 2021",
             gallery: [       
                "Images/Artwork/Previews/4_bg.png", 
            ]
           },
        5: { title: "Apple", 
            description: "Figuring out Color Theory \n \n Made in March 2021",
             gallery: [       
                "Images/Artwork/Previews/5_bg.png", 
                "Images/Artwork/Previews/5_screenshot1.png", 
            ]
           },
        6: { title: "Blocks", 
            description: "Experimenting with blocks and lighting \n \n Made in March 2021",
             gallery: [       
                "Images/Artwork/Previews/6_bg.png", 
            ]
           },
        7: { title: "Low Poly Hero", 
            description: "Experimenting with blocks and lighting \n \n Made in March 2021",
             gallery: [       
                "Images/Artwork/Previews/7_bg.png", 
                "Images/Artwork/Previews/7_screenshot1.png", 
            ]
           },
        8: { title: "Genshin Dull Sword", 
            description: "Recreating the iconic Dull Sword from Genshin Impact \n \n Made in April 2021",
             gallery: [       
                "Images/Artwork/Previews/8_bg.png", 
                "Images/Artwork/Previews/8_screenshot1.png", 
            ]
           },
        9: { title: "Genshin Dull Sword Version 02", 
            description: "A reimagined of the iconic Dull sword from Genshin Impact \n \n Made in April 2021",
             gallery: [       
                "Images/Artwork/Previews/9_bg.png", 
            ]
           },
        10: { title: "Hand Holding Sword", 
            description: "Combining My imaginations with Genshin Dull Sword  \n \n Made in April 2021",
             gallery: [       
                "Images/Artwork/Previews/10_bg.png", 
                "Images/Artwork/Previews/10_screenshot1.png", 
                "Images/Artwork/Previews/10_screenshot2.png", 
            ]
           },
        11: { title: "Hand With Arm", 
            description: "Trying different Artstyles  \n \n Made in April 2021",
             gallery: [       
                "Images/Artwork/Previews/11_bg.png", 
            ]
           },
        12: { title: "Phone", 
            description: "Made a orginal phone for a Youtuber  \n \n Made in April 2021",
             gallery: [       
                "Images/Artwork/Previews/12_bg.png", 
                "Images/Artwork/Previews/12_screenshot1.png", 
            ]
           },
        13: { title: "lightbulb couple", 
            description: "A Lightbulb couple  \n \n Made in July 2021",
             gallery: [       
                "Images/Artwork/Previews/13_bg.png", 
                "Images/Artwork/Previews/13_screenshot1.png", 
            ]
           },
        14: { title: "Element (Water)", 
            description: "One of the Unique four Elements (First Element) \n \n Made in December 2021",
             gallery: [       
                "Images/Artwork/Previews/14_bg.png", 
                "Images/Artwork/Previews/14_screenshot1.png", 
            ]
           },
        15: { title: "Glasses", 
            description: "Anime-styled glasses \n \n Made in December 2021",
             gallery: [       
                "Images/Artwork/Previews/15_bg.png", 
            ]
           },
        16: { title: "Miyuna Character", 
            description: "One of the Unique Character I created with the assist of Vroid Studio \n \n Made in December 2021",
             gallery: [       
                "Images/Artwork/Previews/16_bg.png", 
            ]
           },
        17: { title: "Sasuke Sword", 
            description: "Inspired by Fortnite Sasuke \n \n Made on 02 April 2022",
             gallery: [       
                "Images/Artwork/Previews/17_bg.png", 
            ]
           },
        18: { title: "Element (Electro)", 
            description: "One of the Unique four Elements (Second Element) \n \n Made on 19 April 2022",
             gallery: [       
                "Images/Artwork/Previews/18_bg.png", 
            ]
           },
        19: { title: "Dango", 
            description: "Inspired by one of the Character in Genshin Impact (Chongyun) \n \n Made on 29 April 2022",
             gallery: [       
                "Images/Artwork/Previews/19_bg.png", 
            ]
           },
        20: { title: "T'is shall be known from one soul", 
            description: "Unique Character with the Genshin Dull Sword \n \n Made on 15 July 2022",
            gallery: [       
                "Images/Artwork/Previews/20_bg.png", 
            ]
           },
        21: { title: "Iterations of Genshin Dull Sword", 
            description: "Different Unique Versions of Genshin Dull Sword \n \n Made on 18 July 2022",
             gallery: [       
                "Images/Artwork/Previews/21_bg.png", 
            ]
           },
        22: { title: "Genshin Dull Sword Version 03", 
            description: "A smooth version of Genshin Dull Sword \n \n Made on 24 July 2022",
             gallery: [       
                "Images/Artwork/Previews/22_bg.png", 
            ]
           },
        23: { title: "PP-19 Bizon", 
            description: "One of my favorite Guns that I created \n \n Made on 24 July 2022",
             gallery: [       
                "Images/Artwork/Previews/23_bg.png", 
                "Images/Artwork/Previews/23_screenshot1.png", 
                "Images/Artwork/Previews/23_screenshot2.png", 
            ]
           },
        24: { title: "Golden Desert Eagle", 
            description: "One of my favorite Guns that I created \n \n Made on 24 July 2022",
             gallery: [       
                "Images/Artwork/Previews/24_bg.png"
            ]
           },
        25: { title: "Glasses (Cleaned)", 
            description: "Cleaning up the Glasses i made in December 2021 \n \n Made on 22 September 2023",
             gallery: [       
                "Images/Artwork/Previews/24_bg.png"
            ]
           },
        26: { title: "Anime Face", 
            description: "Experimenting with fake Lighting \n \n Made on 22 January 2024",
            video: "Images/Artwork/Previews/26_video1.mp4"
           },
        27: { title: "Eyes", 
            description: "Experimenting with making anime-styles better \n \n Made in July 2024",
             gallery: [       
                "Images/Artwork/Previews/27_bg.png"
            ]
           },
        28: { title: "Chair", 
            description: "A Low poly Chair \n \n Made in August 2024",
            gallery: [       
                "Images/Artwork/Previews/28_bg.png"
            ]
           },
        29: { title: "Finish Line", 
            description: "A Cel-Shaded Version of a Finish Line \n \n Made in August 2024",
            gallery: [       
                "Images/Artwork/Previews/29_bg.png"
            ]
           },
        30: { title: "999", 
            description: "Created this from a Juice Wrld Season In Fortnite at the time \n \n Made in November 2024",
            gallery: [       
                "Images/Artwork/Previews/30_bg.png",
                "Images/Artwork/Previews/30_screenshot1.png",
                "Images/Artwork/Previews/30_screenshot2.png",
                "Images/Artwork/Previews/30_screenshot3.png",
                "Images/Artwork/Previews/30_screenshot4.png",
                "Images/Artwork/Previews/30_screenshot5.png"
            ],
            video: "Images/Artwork/Previews/30_video1.mp4",
            video2: "Images/Artwork/Previews/30_video2.mp4"
           },
         31: { title: "1980s Glock (Updated)", 
            description: "A reimagined of the 1980s Glock that i made in February 2021 \n \n Made in Novemeber 2024",
            gallery: [       
                "Images/Artwork/Previews/31_bg.png"
            ]
           },
        32: { title: "Desk", 
            description: "A Desk Designed i made for a friend with the correct measurments 2021 \n \n Made in January 2025",
            gallery: [       
                "Images/Artwork/Previews/32_bg.jpg",
                "Images/Artwork/Previews/32_screenshot1.jpg"
            ]
           },
        33: { title: "Jericho 941", 
            description: "Anime-style of Jericho 941 \n \n Made in February 2025",
            gallery: [       
                "Images/Artwork/Previews/33_bg.png",
                "Images/Artwork/Previews/33_screenshot1.png"
            ]
           },
        34: { title: "Punching bag", 
            description: "A punching bag designed for CodeX in the early stages \n \n Made in March 2025",
            gallery: [       
                "Images/Artwork/Previews/34_bg.png"
            ]
           },
        35: { title: "Average guy", 
            description: "Designed to represent the creator but fell short. \n \n Made in May 2025",
            gallery: [       
                "Images/Artwork/Previews/35_bg.jpg",
                "Images/Artwork/Previews/35_screenshot1.jpg",
                "Images/Artwork/Previews/35_screenshot2.jpg",
                "Images/Artwork/Previews/35_screenshot3.jpg",
                "Images/Artwork/Previews/35_screenshot4.jpg",
                "Images/Artwork/Previews/35_screenshot5.jpg",
                "Images/Artwork/Previews/35_screenshot6.jpg",
                "Images/Artwork/Previews/35_screenshot7.jpg",
                "Images/Artwork/Previews/35_screenshot8.jpg",
            ]
           },
        36: { title: "Eyes", 
            description: "Just a recolor of a eye (Made for Youtube Channel) \n \n Made in July 2025",
            youtubelink: "https://www.youtube.com/@LightTK", 
            gallery: [       
                "Images/Artwork/Previews/36_bg.png"
            ]
           },
        37: { title: "Calender", 
            description: "Made this for a video \n \n Made in Aug 2025",
            youtubelink: "https://www.youtube.com/watch?v=4e-S3P61TwM", 
            gallery: [       
                "Images/Artwork/Previews/37_bg.png",
                "Images/Artwork/Previews/37_screenshot1.png",
                "Images/Artwork/Previews/37_screenshot2.png",
                "Images/Artwork/Previews/37_screenshot3.png",
                "Images/Artwork/Previews/37_screenshot4.png",
                "Images/Artwork/Previews/37_screenshot5.png",
                "Images/Artwork/Previews/37_screenshot6.png",
            ],
            video: "Images/Artwork/Previews/37_video1.mp4"
           },
        38: { title: "Fireworks", 
            description: "Experimenting on how to make fireworks \n \n Made in August 2025",
            gallery: [       
                "Images/Artwork/Previews/38_bg.png"
                ],
            video: "Images/Artwork/Previews/38_video1.mp4",
           },
        39: { title: "Closed Slippers", 
            description: "Made this for a Unique Character \n \n Made in September 2025",
            gallery: [       
                "Images/Artwork/Previews/39_bg.png",
            ],
           },
        40: { title: "Wawa", 
            description: "Unique Character \n \n Made in October 2025",
            // Gallery can get this messy which makes it's fragile both the image name and calling it here has to be precise
            gallery: [       
                "Images/Artwork/Previews/40_bg.png", 
                "Images/Artwork/Previews/40_screenshot1.png", 
                "Images/Artwork/Previews/40_screenshot2.png",
                "Images/Artwork/Previews/40_screenshot3.png",
                "Images/Artwork/Previews/40_screenshot4.png",
                "Images/Artwork/Previews/40_screenshot5.png",
                "Images/Artwork/Previews/40_screenshot6.png",
                "Images/Artwork/Previews/40_screenshot7.png",
                "Images/Artwork/Previews/40_screenshot8.png",
                "Images/Artwork/Previews/40_screenshot9.png",
                "Images/Artwork/Previews/40_screenshot10.png",
                "Images/Artwork/Previews/40_screenshot11.png",
                "Images/Artwork/Previews/40_screenshot12.png",
                "Images/Artwork/Previews/40_screenshot13.png",
                "Images/Artwork/Previews/40_screenshot14.png",
                "Images/Artwork/Previews/40_screenshot15.png",
                "Images/Artwork/Previews/40_screenshot16.png",
                "Images/Artwork/Previews/40_screenshot17.png",
                "Images/Artwork/Previews/40_screenshot18.png",
            ],
           },
        41: { title: "Bench", 
            description: "Unique Character \n \n Made in October 2025",
            gallery: [       
                "Images/Artwork/Previews/41_bg.png", 
                "Images/Artwork/Previews/41_screenshot1.png", 
                "Images/Artwork/Previews/41_screenshot2.png", 
                "Images/Artwork/Previews/41_screenshot3.png", 
                "Images/Artwork/Previews/41_screenshot4.png", 
            ],
           },
        42: { title: "Soldier 6", 
            description: "A unique Character that was made for CodeX \n \n Made in October 2025",
            gallery: [       
                "Images/Artwork/Previews/42_bg.png", 
                "Images/Artwork/Previews/42_screenshot1.png", 
                "Images/Artwork/Previews/42_screenshot2.png", 
                "Images/Artwork/Previews/42_screenshot3.png", 
                "Images/Artwork/Previews/42_screenshot4.png", 
                "Images/Artwork/Previews/42_screenshot5.png"
            ],
           },
 
    },
    "music-wrapper": {
        1: { 
            title: "I have No clue", 
            description: "Similar to Silent Voice but I don't know, made it because I love the sound of it. I feel like it has no flow but I have no clue.", 
            youtube: "https://www.youtube.com/embed/eEnplPa2-W0?si=aahh6g2DhvQi1Yz"
        },
        // I had more music but it's all mp3, so leaving this here will help me continue 
        // if i make videos of those mp4.
        //2: { 
        //    title: "Cyberpunk Synthwave", 
        //    description: "A fast-paced synthwave track for a racing prototype.", 
        //    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
        //}
    }
};

// Triggers when a project thumbnail is clicked and fetches data from the projectInfo object
window.openInfoModal = function(category, itemNumber, imagePath) {
    let title = "Item " + itemNumber;
    let description = "More information coming soon!";
    let itchLink = "";
    let githubLink = "";
    let youtubeBtnLink = "";
    let video = "";
    let video2 = "";
    let youtube = "";
    let gallery = []; 

    if (projectInfo[category] && projectInfo[category][itemNumber]) {
        title = projectInfo[category][itemNumber].title || title;
        description = projectInfo[category][itemNumber].description || description;
        itchLink = projectInfo[category][itemNumber].itchLink || itchLink;
        githubLink = projectInfo[category][itemNumber].githubLink || githubLink;
        youtubeBtnLink = projectInfo[category][itemNumber].youtubelink || youtubeBtnLink;
        video = projectInfo[category][itemNumber].video || video;
        video2 = projectInfo[category][itemNumber].video2 || video2;
        youtube = projectInfo[category][itemNumber].youtube || youtube;
        gallery = projectInfo[category][itemNumber].gallery || []; 
    }

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    const modalImage = document.getElementById("modalImage");
    const modalCarousel = document.getElementById("modalCarousel");
    const carouselInner = document.getElementById("carouselInner");
    const carouselPrevBtn = document.getElementById("carouselPrevBtn");
    const carouselNextBtn = document.getElementById("carouselNextBtn");

    // Aggregates media types into a single array to inject into the carousel in order
    let mediaItems = [];
    gallery.forEach(img => mediaItems.push({ type: 'image', src: img }));
    if (video !== "") mediaItems.push({ type: 'video', src: video });
    if (video2 !== "") mediaItems.push({ type: 'video', src: video2 });
    if (youtube !== "") mediaItems.push({ type: 'youtube', src: youtube });

    modalImage.style.display = "none";
    modalCarousel.style.display = "none";
    
    // Carousel builder: generates new slides based on media types or falls back to standard thumbnail
    if (mediaItems.length > 0) {
        carouselInner.innerHTML = "";
        mediaItems.forEach((media, index) => {
            let activeClass = index === 0 ? "active" : "";
            let content = "";
            
            if (media.type === 'image') {
                content = `<img src="${media.src}" class="d-block w-100 rounded" alt="Slide ${index + 1}">`;
            } else if (media.type === 'video') {
                content = `<video class="d-block w-100 rounded modal-video-player" controls><source src="${media.src}" type="video/mp4"></video>`;
            } else if (media.type === 'youtube') {
                content = `<iframe class="d-block w-100 rounded modal-youtube-player" style="aspect-ratio: 16/9;" src="${media.src}" frameborder="0" allowfullscreen></iframe>`;
            }

            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    ${content}
                </div>
            `;
        });
        
        if (mediaItems.length > 1) {
            carouselPrevBtn.style.display = "block";
            carouselNextBtn.style.display = "block";
        } else {
            carouselPrevBtn.style.display = "none";
            carouselNextBtn.style.display = "none";
        }
        modalCarousel.style.display = "block";
    } else {
        modalImage.src = imagePath;
        modalImage.style.display = "block";
    }
    
    // Shows or hides link buttons based on available projectInfo data
    const btnItch = document.getElementById("modalItchLink");
    if (itchLink !== "") { btnItch.href = itchLink; btnItch.style.display = "inline-block"; } 
    else { btnItch.style.display = "none"; }

    const btnGithub = document.getElementById("modalGithubLink");
    if (githubLink !== "") { btnGithub.href = githubLink; btnGithub.style.display = "inline-block"; } 
    else { btnGithub.style.display = "none"; }
    
    const btnYoutube = document.getElementById("modalYoutubeBtn");
    if (youtubeBtnLink !== "") { btnYoutube.href = youtubeBtnLink; btnYoutube.style.display = "inline-block"; } 
    else { btnYoutube.style.display = "none"; }

    // Ensures Bootstrap doesn't create multiple invisible modal instances
    var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('infoModal'));
    myModal.show();
};

// Runs after the HTML loads (Page Initialization)
document.addEventListener("DOMContentLoaded", function() {
    
    // Helper function to auto-generate html for swiper slides
    function generateSlides(wrapperId, folderPath, itemCount) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;
        
        for (let i = 1; i <= itemCount; i++) {
            const slide = `
                <div class="swiper-slide">
                    <div class="project-card-interactive" onclick="openInfoModal('${wrapperId}', ${i}, '${folderPath}/${i}_bg.png')">
                        
                        <!-- Smart Background/Title: Tries PNG first, then JPG, then hides -->
                        <img src="${folderPath}/${i}_bg.png" class="thumbnail-bg has-blur" alt="Item ${i} Background" 
                             onerror="if(this.src.endsWith('.png')){this.src='${folderPath}/${i}_bg.jpg';}else{this.style.display='none';}">
                        
                        <img src="${folderPath}/${i}.png" class="thumbnail-title" alt="Item ${i} Title" 
                             onerror="if(this.src.endsWith('.png')){this.src='${folderPath}/${i}.jpg';}else{this.style.display='none'; this.previousElementSibling.classList.remove('has-blur');}">
                    
                    </div>
                </div>
            `;
            wrapper.innerHTML += slide;
        }
    }
    
    // Links to projectInfo to generate slides
    generateSlides("unity-wrapper", "Images/Released/Previews", 2);
    generateSlides("unreleased-wrapper", "Images/Unreleased/Previews", 2);
    generateSlides("upcoming-wrapper", "Images/Upcoming/Previews", 2);
    generateSlides("artwork-wrapper", "Images/Artwork/Previews", 42);
    generateSlides("music-wrapper", "Images/Music/Previews", 1);

    const navName = document.getElementById("navName");
    const navLinks = document.getElementById("navLinks");
    const heroName = document.getElementById("heroName");
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    // Calculates scroll positions to fade out hero text and reveal Navbar title / "Back to top" button
    window.addEventListener("scroll", function() {
        let currentOpacity = 1;
        if (window.scrollY > 220) {
            let fadeAmount = (window.scrollY - 220) / 200; 
            currentOpacity = 1 - fadeAmount;
        }
        
        if (currentOpacity < 0) currentOpacity = 0;
        if (heroName) heroName.style.opacity = currentOpacity;

        if (heroName && navName) {
            const heroNamePosition = heroName.getBoundingClientRect();
            if (heroNamePosition.bottom < 60) {
                navName.style.opacity = "1"; 
                if (navLinks) navLinks.style.opacity = "1";
            } else {
                navName.style.opacity = "0"; 
                if (navLinks) navLinks.style.opacity = "0";
            }
        }

        if (window.scrollY > 300) {
            if (backToTopBtn) backToTopBtn.classList.add("visible"); 
        } else {
            if (backToTopBtn) backToTopBtn.classList.remove("visible"); 
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const infoModalElement = document.getElementById('infoModal');
    const modalCarousel = document.getElementById('modalCarousel');
    
    // Prevents audio/video from playing in the background when the user closes the modal
    if (infoModalElement) {
        infoModalElement.addEventListener('hidden.bs.modal', function () {
            const videos = infoModalElement.querySelectorAll('video');
            videos.forEach(vid => vid.pause());
            
            const youtubes = infoModalElement.querySelectorAll('iframe');
            youtubes.forEach(yt => yt.src = ""); 
        });
    }

    if (modalCarousel) {
        modalCarousel.addEventListener('slide.bs.carousel', function () {
            const videos = modalCarousel.querySelectorAll('video');
            videos.forEach(vid => vid.pause());
        });
    }
    
    // Controls how many slides the carousel moves when you press the arrows
    var swipers = document.querySelectorAll(".mySwiper");
    swipers.forEach(function(swiperElement) {
        new Swiper(swiperElement, {
            slidesPerView: 2, 
            slidesPerGroup: 2,
            spaceBetween: 10,
            preventClicks: false,             // Forces Swiper to allow clicks
            preventClicksPropagation: false,  // Lets clicks pass through to the modal
            navigation: {
                nextEl: swiperElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                768: { 
                    slidesPerView: 4, 
                    slidesPerGroup: 4,
                    spaceBetween: 15 
                }, 
                1024: { 
                    slidesPerView: 6, 
                    slidesPerGroup: 6,
                    spaceBetween: 20 
                } 
            }
        });
    });
});