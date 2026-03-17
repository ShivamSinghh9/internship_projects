const blogs = {
  1: {
    title: "Future of Web Development",
    meta: "Author: John | July 2026",
    image: "https://picsum.photos/800/400?1",
    content:
      "Web development is evolving rapidly with frameworks like React and modern UI technologies.",
  },

  2: {
    title: "JavaScript Evolution",
    meta: "Author: Alex | July 2026",
    image: "https://picsum.photos/800/400?2",
    content: "JavaScript has become the backbone of modern web development.",
  },

  3: {
    title: "Responsive Design",
    meta: "Author: Sarah | July 2026",
    image: "https://picsum.photos/800/400?3",
    content:
      "Responsive design ensures websites adapt to mobile, tablet and desktop.",
  },

  4: {
    title: "UI UX Trends",
    meta: "Author: Kevin | July 2026",
    image: "https://picsum.photos/800/400?4",
    content:
      "Modern UI includes animations, minimal design and better usability.",
  },

  5: {
    title: "Frontend Career Guide",
    meta: "Author: Emma | July 2026",
    image: "https://picsum.photos/800/400?5",
    content:
      "Frontend developers create user interfaces using HTML CSS JavaScript.",
  },
};

function openBlog(e, id) {
  document.body.classList.add("page-transition");

  setTimeout(() => {
    document.getElementById("blogCards").style.display = "none";

    document.getElementById("blogDetails").style.display = "block";

    document.getElementById("title").innerText = blogs[id].title;

    document.getElementById("meta").innerText = blogs[id].meta;

    document.getElementById("image").src = blogs[id].image;

    document.getElementById("content").innerText = blogs[id].content;

    document.body.classList.remove("page-transition");
  }, 300);
}

function goBack() {
  document.getElementById("blogCards").style.display = "grid";

  document.getElementById("blogDetails").style.display = "none";
}
