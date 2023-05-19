const searchBar = document.getElementById("search-bar");
            const suggestionList = document.getElementById("suggestions");
            
            const suggestions = [
              { text: "Courses", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html" },
              { text: "Depositions", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/depoimentos-en.html" },
              { text: "Entrance Exams", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/vestibulares-en.html" },
              { text: "Contact", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/contato-en.html" },
              { text: "Law", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #law" },
              { text: "Engineering", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #engi" },
              { text: "Physical Education", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #physical" },
              { text: "Graphic Design", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #graphic" },
              { text: "Pedagogy", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #pedagogy" },
              { text: "it", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #it" },
              { text: "Information Technology", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #it" },
              { text: "Administration", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #adm" },
              { text: "Visual Arts", link: "file:///C:/Users/cc123/OneDrive/%C3%81rea%20de%20Trabalho/SiteRightWay/SiteRightWay/cursos-en.html #arts" },
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