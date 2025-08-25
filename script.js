document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeBtn");

  if (menuBtn && sidebar && closeBtn) {
    menuBtn.addEventListener("click", () => { sidebar.style.width = "250px"; });
    closeBtn.addEventListener("click", () => { sidebar.style.width = "0"; });
    document.querySelectorAll(".sidebar a").forEach(link => {
      link.addEventListener("click", () => { sidebar.style.width = "0"; });
    });
  }

  const translations = {
    ar: {
      index: {
        title: "أهلاً بكم في موقعي",
        subtitle: "مصمم ومحرر صور محترف",
        skill1: ["تعديل الصور", "إضفاء لمسة احترافية على الصور"],
        skill2: ["مونتاج", "تحرير ومونتاج فيديو"],
        skill3: ["تصميم إبداعي", "أفكار وتصاميم مميزة"],
      },
      about: {
        title: "عنّي",
        desc: "اسمي أنس، مصمم ومحرر صور. لدي شغف كبير في تحويل الأفكار إلى واقع رقمي مبدع، وأسعى دائماً لتطوير مهاراتي ومشاركة أعمالي مع العالم."
      },
      follow: "تابعني على:"
    },
    en: {
      index: {
        title: "Welcome to my website",
        subtitle: "Professional Photo Editor & Designer",
        skill1: ["Retouching", "Professional photo editing"],
        skill2: ["Editing", "Video editing and montage"],
        skill3: ["Creative Design", "Unique and creative ideas"],
      },
      about: {
        title: "About Me",
        desc: "My name is Anas, a photo editor and designer. I have a strong passion for turning ideas into creative digital reality, and I’m always working to improve my skills and share my work with the world."
      },
      follow: "Follow me on:"
    },
    fr: {
      index: {
        title: "Bienvenue sur mon site",
        subtitle: "Éditeur de photos et designer professionnel",
        skill1: ["Retouche", "Édition de photos professionnelle"],
        skill2: ["Montage", "Montage et édition vidéo"],
        skill3: ["Design Créatif", "Idées et conceptions uniques"],
      },
      about: {
        title: "À propos de moi",
        desc: "Je m'appelle Anas, éditeur de photos et designer. J’ai une grande passion pour transformer les idées en réalité numérique créative, et je travaille toujours à améliorer mes compétences et partager mes créations avec le monde."
      },
      follow: "Suivez-moi sur :"
    }
  };

  const langBtn = document.getElementById("langBtn");
  const order = ["ar", "en", "fr"];
  let current = 0;

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      current = (current + 1) % order.length;
      const lang = order[current];
      langBtn.textContent = lang === "ar" ? "عربي" : lang === "en" ? "English" : "Français";

      const page = document.body.contains(document.getElementById("skills")) ? "index" : "about";

      if (page === "index") {
        document.getElementById("title").textContent = translations[lang].index.title;
        document.getElementById("subtitle").textContent = translations[lang].index.subtitle;
        document.getElementById("skill1-title").textContent = translations[lang].index.skill1[0];
        document.getElementById("skill1-desc").textContent = translations[lang].index.skill1[1];
        document.getElementById("skill2-title").textContent = translations[lang].index.skill2[0];
        document.getElementById("skill2-desc").textContent = translations[lang].index.skill2[1];
        document.getElementById("skill3-title").textContent = translations[lang].index.skill3[0];
        document.getElementById("skill3-desc").textContent = translations[lang].index.skill3[1];
      } else {
        document.getElementById("about-title").textContent = translations[lang].about.title;
        document.getElementById("about-desc").textContent = translations[lang].about.desc;
      }

      document.getElementById("follow-text").textContent = translations[lang].follow;

      if (lang === "ar") {
        document.body.style.fontFamily = "'Cairo', sans-serif";
      } else if (lang === "en") {
        document.body.style.fontFamily = "'Montserrat', sans-serif";
      } else {
        document.body.style.fontFamily = "'Playfair Display', serif";
      }
    });
  }
});
