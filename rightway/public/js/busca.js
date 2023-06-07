const searchBar = document.getElementById("search-bar");
            const suggestionList = document.getElementById("suggestions");
            
            const suggestions = [
              { text: "Cursos", link: "/curso" },
              { text: "Depoimentos", link: "/depoimentos" },
              { text: "Vestibulares", link: "/vestibulares" },
              { text: "Contato", link: "/contato" },
              { text: "Direito", link: "#direito" },
              { text: "Engenharia", link: "#engenharia" },
              { text: "Design", link: "#design" },
              { text: "Educação Fisica", link: "#educacao" },
              { text: "Pedagogia", link: "#pedagogia" },
              { text: "Ti", link: "#ti" },
              { text: "Tecnologia da Informação", link: "#ti" },
              { text: "Administração", link: "#adm" },
              { text: "Engenharia de Software", link: "#Engenharia de Software" },
              { text: "Ciências Contábeis", link: "#CienciasContabeis" },
              { text: "Enfermagem", link: "#Enfermagem" },
              { text: "Arquitetura e Urbanismo", link: "#Arquitetura e Urbanismo" },
              { text: "Engenharia de Produção", link: "#engenharia de produção" },
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