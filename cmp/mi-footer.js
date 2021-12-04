class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
        <footer id="main-footer">
        <table>
            <tr>
                <td>
                    <p>
                        <b>Redes Sociales:</b>
                    </p>
                    <div class="rs">
                        <li>
                            <a href="https://www.facebook.com">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAgNJREFUaEPtmv1NAzEMxd+bAEaACSgTUCaAERgBJoBOQJkAmIQyATABZQJgAiOLHJzK5eOaViR3jlS1f+Qq//xsx8mFGNngyHhhwENX3BQ2hQfmgWhIi8gegBMAuxWw35NchuwMAjvY1wpAGxM/AByGoGPA5wCuKwJWUy9Izn02x4CvAFxWBjwjqXZ3DgNuu0VETOEKwru6kP4EsADw7D5aeZsxdT/0+8jj/KqAZwDmJNuQf7giqVYFsKo6JamqRscQgI9JahgnjdqBtR08SyJ1k2oH3o/1v6vOqBn4jaRuTrxDRCYAdlYmaET4oqLoovVIsllquqrxbQDM56SigW9I6galC1aVfeqT225u0cBe40Rk3Z1atcDr9vEG3E6L/94ehkLaFE4sYEWE9AuArmq89DUd7jzNt0brEc5Bybul4HqbqNzPNBHR5UqXra5RhMKbBpaAk4YFLCJ6Pv4+JmBtRR/GBKybBu2xi+6lN5bDCSepReRwbzUSwHr/pz5gnVbbbRleTl1arbVsPJXhbMth2y35Ei4jrCyH+zb6Gc62HLYcthx2HsjIIytaVrS+PWCtpbWWqdXgd17WxTQ9Jt3m1cNNh7RenZisffVQnebOh0+3dLl04bvqICJ6duV9leoR/i72cj16m7Z/RJX9hAGXrU++daZwvg/L/gdTuGx98q37Agxzr0ytglyyAAAAAElFTkSuQmCC"/>
                            </a>
                            <a href="https://www.instagram.com">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABKhJREFUaEPtWl1OFEEQru8EygnEEwgnEE4gvJgYTdBEE30STgCeQHjRF41gotEn4QSCFxBOoJxAOEGZj3STTtE93T07O7Ow28m+7Mz01Fe/X1UPZMoWpgyvzADfdIvPLDyz8A3TQGcurarzInLH6WepAz2dicix2+cUwN8O9hwtS6vqmogQ3IqI3O5CoIY9qIB9ETkEsNf2Xa0s7IBuiQitOsSitbfaAK8CrKq04g9n1SGA2nceisgqAFq/aBUDdmB/ishCYudTEaHm/a9IgMxNfBeVHOYH+wjjfLkUdA1ggrXJ6FxEtkVkt6ukklKAqhL8UxF5HbmHcb1couEiwKrKF30yGzJxrJdqtkSYknsc8F0RuWfufwOAeaVxlQL+YxLUHgAqYbClqgwdXwYpB+P4bs4AWcAR6zJWF3Ibd6UJVX0oIvdFLkroLwDfuLeqMrwYZuF6BoDWT64SwNyA9dav7KYdg/1u9nsC4IsDbWU7AEBOMBLgf4ZUzPVo3Xci8spI/wHAi4SVzwDMtQbs6CLj168TAKmylDWsc0O6Z7iYYY9iD6vqexF5aa59BPDc/6eqaq4vAvCU9Mq2jS4diZMjAFU82Slt05WUJqXQPZlpLzmzqj4Ska/moTUAnwPABBdmbNZkEpLoqgVclPoDYVijY3WzCfg2gI1gj8eu/vukdQnWuTXBhV5D5kXO3Qrwuoi8DZ4sAtwBBaXATI5ZyqiqFnCjjDkLs5DTHf0qBWyFCLXNePUxxnxgY9rfuw9gNZcYBgesqik33gDAa1eWqlrF+nt2ANDLkivyvv4sHMnqFPSECaspc7pYpLVjlJHsKdn8R5TVK2DG3oPAHGwulnJggwRF0L+NORtp7NCAbU1MunHKRyMAGsnEYIBVlZSOw4HLBSBLXRMxbRWXrK1DAraJp5qkBK5ts3xNwusnhiOazmbYBre2mT4JYpIsPHWAu3TpibTwdCUtRx7GUZbOASSH/IPFsANsJxD8u7E/DROXG9BdK+LB+XE4MCAeNgrsfJJNeUAtORm1A4bJpZZO8FTzwJHuzhiah6qOboj2kKQibA9TE5TsQC4RRv0QDxOLTDJsJFK9blPHx2sHrsPqfQBgZ79FA4CAIrYZ8VQRlsgAoHGMnHNpC7iaTLgemXEWzrZjFubRDY9Aqw6+VZVZPUx0Iw3xbNY9BrCY88cGjkwF2pjlmDY5Zcy9q9MxrUsKjKNbwYt7G8QXgL1y3JJrSbP9qqraKUZ1U58TvO11VR3LUYs9KqXFyZ6qYq0tqEx42MO0rDGyFnZubY8mi0aoXYM0pc8e4XJ+Np+bZZcCjh2IM9GwBPRqaXf8w8MBS0GLSmYRYGfl2HCd7s1ay8niWIG7xoKlLTan5iiY09EsUakBTPZE0PZTA+9p/mOW8IOyUb3alzD/cUtsP7oyD+iLFF4M2Fl5VMo4qgLs87TsSilYPlwFOKCMZE50rbA+dw2maT//9RBPGrNuHG7UCnBgbY51+AtPG8YJnAdx5AX8TKoKqBeqNWCLymVP/l11YF6gHbaSF3mhLchOLFwg6ETe0pmFJxJdRKgZ4OtiqbZyzizcVnPX5bmps/B/q3egW5zy0UAAAAAASUVORK5CYII="/>
                            </a>
                            <a href="https://www.twitter.com">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA7pJREFUaEPtWu1tFDEQnamAdABUQKgAqACogFABpAKgAkIFJBWQVACpANIBqQBSwUMvspG1u7ZnfL7b1d1aOul+2GO/efPl8aoc2NADwysr4H1nfGV4ZXjPNLCa9J4ROoKzMjwnwwCeichzETkOvyMR+SUiv0XkUlWvaucDcKSqf3PzFsEwgEci8jWALWEi8Leq+mM4Kcj4ICLXqnreDBjAz7AJNd19AHgnIh9FhGxax5mqngaQtIpX4XerqlRedhQZBkBB30SEJvJCVbuCBkCgZKVlkO0huNeqerkJYJrGmyCgK2gA9FNaT69xqqpnFFby4xrDPBAPFge1+rQUFKynD66SyrYuHc67E5H3DGoiEs2bpk3rGY0aYEysyQYO64kBnIQgZV1SmsfzcETzvlJVuuLkqAGmGT/IrKX5fGphGwDXMlj1HjeM9M1pCQDDP80kN5rYNshtUcQ1I3WNgBrD9IuXht0Z3L5YoziAP840VDvCharSTaqjBjimpaqgMIGM01zpR9G3RmsBTMUG6x6jeapqLqCqEwGU/Lh0SFoHXYK5m1HzvwKWDtjLckkJsS5mOipWRB66uzLMjbcYVT24snO7AQbAsvKctxQATO6fu5ywr5A7VTXX4bWglaYlmiPN0Cy8L66sNN6OeKU0jRrgtJY2CZxhkjkl8Ww1wEs141SvvB9n779DAmqAY8fh4QzMWbd8XMr5LsAhQvcs9K0grPOqF3434AC6VlNbD9h7HstZup15VCutKAnAEgMY7+auLowZ8AILEFc6isS5AAfQzMUsN2lKcwYzV3R2AwbA5M7+Fi8B/M8I3qNFY/a/ZKI7WLkBB3YJdk5W47mr3cmcFl0mvZB6usl3WxmmGTNFPWmxww5r2KE89hQaTXk4XcSe74ygmwJVen6XSSc5maBjH7gDcSYRrktCFx8eCgmRm+mJ0XqbwexGVbtkhCaGc9oD8N3wAmiiM5lU7TV7BHYBHN6J+NzZhYVtgaXcjQAnb7KmnrCHCRG5YDVXa6w7ZfoBJ2+yBGlurTgPxiecyccwp5zR9EmGQzBKn1hiGck6ult7deLw9NcT7w3Io4SsSQfQ1HLpbcmzV2nu/ZOnp1XTunHVh8PTJm9Hljcm7zluw9MMW8HZD1G8Qkvzq4CTYiNeC+m7m5SWBMmihV/ljD5O6QluSpYZcKboiJ8YxV41lRILED5fcpA5diXuf5vUwT2U0Qy4x+ZzyFgBz6H1Xe65MrxLbc+x18rwHFrf5Z4rw7vU9hx7HRzD/wBYYjVMqLO6UAAAAABJRU5ErkJggg=="/>
                            </a>
                        </li>
                    </div>
                </td>
                <td>
                    <div class="ub">
                        <div class="ubica">
                            <a href="https://www.google.com/maps/">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA5JJREFUaEPtmoFRFEEQRX9HoBkoESgRqBEIEQgRKBGoEQgRCBEAEagRCBEIGUgEbX3trdq6umP6z8zuXXnXVdRB1dzsvPk9Pd29GLbMbMt4sQP+3xXfKdxbYXd/CeAtAH4+j8/xY24A3AH4DuCHmfHvyWwShd2dYO8BHASkAkD4KwBnZsbfu1pXYHd/CuAjgA+dVnkK4LOZ/e40X78o7e5U8ysAQvc0wh6bGVVvti4Ku/uXjqqugjo1s5NW4ibgcGGqSnXnsHMAJy0u3gp8OSPssKHnZnZcu7vVwO7OgMJIvA5jBK8KjFXAEaCo7jrtsCaQycBxbn9NEI3VzWP03lPPcw0wA8c7dXUALiKbuhmyqcjCmIG9rpxTdm0JODIoqqvYNa+sUtYUczMuMA1VjCqnMzIVWA1UvEL4nbS5O4MR7/WsMRP7lB2sAlNd5skZk2GHSUXoOzPbyyyIY9LAcd5+Jie+NrOmZMTdmUpm3Xs/W2UpwHQbFgYZk87VsgnFeJH2JgU4u+MXZnaU2ZXSGEHltEcpwHRnXiElY2XDq6vZ3J0bx1y9ZLzq9kuD1DPsmQkBpM9TaT4lbphZSrzUIC7M3VPA2QeXYEcRu+tzd8Crdt7dmbs+SSizDpd+MLNUp0VRmF3FVwngdQQtdjuZjxdNAd66a2mTE490Pq0oTJf5VvSZfwOuzOwwOXbpMHdX2kdvzIxHrmhp4LiasoGLw9Pp3uIqxeIhHbCkxCOA1eKfdfBZcdtHA9ydfTKlpJRSWVVhVkBqL4vBjmo/WqRHscA6WK2y0u4sKxwqc+HPFNViLMH5c7vQ4nkRkCoop703s2x9/ncZksIBnE3oK/ZE/op859cAM6OhypmsSyYQviCrW6XwBqk8T196UMDd+eKa528dlk4lFxcnu/QImM2AbI+r56Y8sBFRivqrHlgNHK6tpJu9oKsTmuozPF75zK5d7crDmpsUDpV5D/I8Tx2178OVm/79oRk4oGsyMNXFuzQWugAHtPqKRAGWE4xJgtbipO6uFhcZ6HStm5msm8Kj66ontFQJrQU43LsHdHfYLtfSql1tdO9JYCcFblB6MtjJgSuguwaoZd7XPWgte0iyR9Xt6nkseM0CPEpOGMwWMzIWAwfZrmMmEm8EcECzwiL0UFbeAjjKvr1vhZ3lDC9JTtgxGbqS7Go25cbqJszm0urCphq/A55qZzdl3p3Cm6LEVOv4A/1sbEyR6CJrAAAAAElFTkSuQmCC"/>
                            </a>
                        </div>
                        <b style="margin-left: 7em;">Ubicación:</b>
                        <p class="dir">
                            Dirección: Colima 385, Roma Nte.,
                            <br> Cuauhtémoc, 06700 Ciudad de México, CDMX
                        </p>
                    </div>
                </td>
                <td>
                    <div class="contacto">
                    <nav>
                        <ul>
                            <li>Contacto</li>
                            <li>Correo electrónico: contactoaps@gmail.com</li>
                            <li>Teléfono: 5534721923</li>
                        </ul>
                    </nav>
                    </div>
                </td>
            </tr>
        </table>
        </footer>
        `;
    }
}

customElements.define("mi-footer", MiFooter);
