
let header = `
<nav class="nav__hero">
<div class="container nav__container">
    <div class="logo">
        <img src="img/puselapava_logo.png" alt="Logo puselapaga">
        <a href="index.html" class="link_logo">
        <h2 class="logo_name">
            puse <span class="span__color">la</span> pava
        </h2>
        </a>
    </div>
    <div class="links">
        <a href="index.html" class="link link--active">mates</a>
        <a href="modelos.html" class="link">modelos</a>
        <a href="curado.html" class="link">curado</a>
        <a href="contacto.html" class="link">contacto</a>
    </div>
</div>
</nav>
`;
document.getElementById("idheader").innerHTML=header;



let footer =
`
<div class="contact">
    <div class="item__contact">
        <a href="contacto.html#mapa" class="link">
            <i class="bx bxs-edit-location contact__icon"></i>
            <h3 class="contact__title">podés retirar por</h3>
            <h3 class="contact__title">Villa del Parque - CABA</h3>
        </a>
    </div>

    <div class="item__contact">
        <a href="https://www.instagram.com/puselapava/" target="_blank" rel="noopener noreferrer" class="link">
            <i class="bx bxl-instagram contact__icon"></i>
            <h3 class="contact__title">instagram</h3>
        </a>
    </div>

    <div class="item__contact">
        <a href="contacto.html" class="link">
            <i class='bx bx-mail-send contact__icon'></i>
            <h3 class="contact__title">contacto</h3>
        </a>
    </div>

    <div class="item__contact">
        <i class="bx bx-copyright contact__icon"></i>
        <h3 class="contact__title" title="tresPuntosG... diseño web">tresPuntosG...</h3>
        <p class="contact__title">diseño web</p>
    </div>
</div>
`;
document.getElementById("footer").innerHTML=footer;
