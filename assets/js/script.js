const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll("#nav a");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("opened");
  menuBtn.classList.toggle("opened");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("opened");
    menuBtn.classList.remove("opened");
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [services, projects, testimonials] = await Promise.all([
      fetch("/assets/data/services.json").then((res) => res.json()),
      fetch("/assets/data/projects.json").then((res) => res.json()),
      fetch("/assets/data/testimonials.json").then((res) => res.json()),
    ]);

    serviceList("serviceContainer", services);
    portfolio("projectContainer", projects);
    testimonies("testimonials", testimonials);
  } catch (err) {
    console.error("Failed to load data:", err);
  }
});

function serviceList(id, services) {
  const container = document.getElementById(id);
  if (!container) return;

  services.forEach(({ name, details }) => {
    const article = document.createElement("article");
    article.className = "serviceCard";

    const section = document.createElement("section");
    section.className = "serviceItem";

    const h4 = document.createElement("h4");
    h4.className = "serviceName";
    h4.textContent = name;

    const p = document.createElement("p");
    p.className = "details";
    p.textContent = details;

    section.appendChild(h4);
    section.appendChild(p);
    article.appendChild(section);
    container.appendChild(article);
  });
}

function portfolio(id, projects) {
  const container = document.getElementById(id);
  if (!container) return;

  projects.forEach(({ name, details, service, img: imgSrc }) => {
    const article = document.createElement("article");
    article.className = "projectCard";

    const section = document.createElement("section");
    section.className = "projectItem";

    const h4 = document.createElement("h4");
    h4.className = "projectName";
    h4.textContent = name;

    const div = document.createElement("div");
    div.className = "imgContainer";

    const imgElem = document.createElement("img");
    imgElem.className = "projectImg";
    imgElem.setAttribute("alt", name);
    imgElem.setAttribute("src", imgSrc);

    const p = document.createElement("p");
    p.className = "projectDetails";
    p.textContent = details;

    const ps = document.createElement("p");
    ps.className = "projectService";
    ps.textContent = service;

    div.appendChild(imgElem);
    section.appendChild(div);
    section.appendChild(h4);
    section.appendChild(p);
    section.appendChild(ps);
    article.appendChild(section);
    container.appendChild(article);
  });
}

function testimonies(id, testimonials) {
  const container = document.getElementById(id);
  const placeHolder = document.createElement("h1");

  placeHolder.className = "notavailable";
  placeHolder.id = "notavailable";
  placeHolder.textContent = "Coming soon..";

  if (!container) return;

  testimonials.forEach(({ company, details, service, companyLogo: imgSrc }) => {
    const article = document.createElement("article");
    article.className = "testimonyCard";

    const section = document.createElement("section");
    section.className = "testimonyItem";

    const h4 = document.createElement("h4");
    h4.className = "testimonyName";
    h4.textContent = company;

    const p = document.createElement("p");
    p.className = "testimonyDetails";
    p.textContent = details;

    const imgElem = document.createElement("img");
    imgElem.className = "companyLogo";
    imgElem.setAttribute("alt", company);
    imgElem.setAttribute("src", imgSrc);

    const div = document.createElement("div");
    div.className = "testimonialContainer";

    const testimonial = document.createElement("div");
    testimonial.className = "testimonial";

    const span = document.createElement("span");
    span.className = "lineXo";

    const ps = document.createElement("p");
    ps.className = "testimonyService";
    ps.textContent = service;

    testimonial.appendChild(p);
    testimonial.appendChild(span);
    testimonial.appendChild(imgElem);
    div.appendChild(testimonial);
    section.appendChild(div);
    section.appendChild(h4);
    section.appendChild(ps);
    article.appendChild(section);

    if (!container) {
      container.appendChild(article);
    } else {
      container.appendChild(placeHolder);
    }
  });
}
