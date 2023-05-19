const searchBar = document.getElementById("search-bar");
            const suggestionList = document.getElementById("suggestions");
            
            const suggestions = [
              { text: "Cursos", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-ptbr.html" },
              { text: "Depoimentos", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/depoimentos-ptbr.html" },
              { text: "Vestibulares", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/vestibulares-ptbr.html" },
              { text: "Contato", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/contato-ptbr.html" },
              { text: "Direito", link: "#direito" },
              { text: "Engenharia", link: "#engenharia" },
              { text: "Design", link: "#design" },
              { text: "Educação Fisica", link: "#educacao" },
              { text: "Pedagogia", link: "#pedagogia" },
              { text: "Ti", link: "#ti" },
              { text: "Tecnologia da Informação", link: "#ti" },
              { text: "Administração", link: "#adm" },
              { text: "Artes Visuais", link: "#artes" },
            ];
            
            searchBar.addEventListener("input", function() {
              const input = searchBar.value;
              suggestionList.innerHTML = "";
              if (input.length > 0) {
                suggestions.forEach(suggestion => {
                  if (suggestion.text.toLowerCase().startsWith(input.toLowerCase())) {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = suggestion.link;
                    a.textContent = suggestion.text;
                    li.appendChild(a);
                    suggestionList.appendChild(li);
                  }
                });
              }
            });