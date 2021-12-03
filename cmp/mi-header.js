class MiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
        <header id="main-header">
        
        <a id="logo-header" href="index.html">
            <span class="site-name">
                <img src="/img/logo.jpeg" alt="">
            </span>
        </a>
        <a id="titulo-header" href="index.html">
            <h1 style=>Ayuda a pasitos</h1>
        </a>
        </header>

        `;
    }
}

customElements.define("mi-header", MiHeader);