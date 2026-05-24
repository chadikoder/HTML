const DAYS = [
  {id:"day-1",code:"J1",title:"Jour 1 - Structure & balises de base",sub:"Doctype, head, body, balises, attributs",
    why:"Toute page web commence ici. Sans squelette correct, le reste casse.",
    tags:["structure","doctype","head","body","attributs"],
    sections:[
      {h:"Le squelette HTML5",
        blocks:[
          {p:"Une page HTML commence toujours par <code>&lt;!DOCTYPE html&gt;</code>. C'est la declaration qui dit au navigateur d'utiliser le mode standards HTML5."},
          {code:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Ma page</title>\n</head>\n<body>\n  <h1>Bonjour</h1>\n</body>\n</html>"},
          {note:"<code>lang=\"fr\"</code> aide les lecteurs d'ecran et le SEO. <code>charset=\"UTF-8\"</code> evite les caracteres bizarres."},
          {warn:"Sans <code>viewport</code>, le mobile zoome par defaut. C'est l'erreur n1 des debutants."}
        ]
      },
      {h:"Balises ouvrantes / fermantes / auto-fermantes",
        blocks:[
          {p:"La plupart des balises viennent par paires : <code>&lt;tag&gt;contenu&lt;/tag&gt;</code>. Quelques unes sont <strong>auto-fermantes</strong> : <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;meta&gt;</code>."},
          {code:"<!-- Avec contenu -->\n<p>Un paragraphe.</p>\n<a href=\"page.html\">Un lien</a>\n\n<!-- Auto-fermantes -->\n<br>\n<hr>\n<img src=\"chat.jpg\" alt=\"chat\">\n<input type=\"text\" name=\"nom\">"}
        ]
      },
      {h:"Attributs",
        blocks:[
          {p:"Les attributs configurent la balise : <code>id</code>, <code>class</code>, <code>href</code>, <code>src</code>, <code>alt</code>, <code>title</code>, <code>style</code>..."},
          {code:"<a href=\"https://w3schools.com\" target=\"_blank\" rel=\"noopener\" title=\"Visiter W3Schools\">\n  W3Schools\n</a>\n\n<img src=\"logo.svg\" alt=\"Logo\" width=\"120\" height=\"40\">\n\n<div id=\"main\" class=\"container hero\" data-role=\"banner\">...</div>"},
          {tip:"<code>id</code> = unique par page. <code>class</code> = peut etre partagee. Les attributs <code>data-*</code> sont libres pour stocker tes propres metadonnees."}
        ]
      },
      {h:"Commentaires",
        blocks:[
          {code:"<!-- Ceci est un commentaire HTML -->\n<!-- Peut faire\n     plusieurs lignes -->"},
          {warn:"Les commentaires HTML sont VISIBLES dans le code source du navigateur. Jamais y mettre de secret."}
        ]
      }
    ],
    quiz:[
      {q:"Quel doctype pour HTML5 ?",opts:["<code>&lt;!DOCTYPE html5&gt;</code>","<code>&lt;!DOCTYPE html&gt;</code>","<code>&lt;!DOCTYPE HTML PUBLIC ...&gt;</code>","<code>&lt;html5&gt;</code>"],correct:"b",
        expl:"HTML5 a simplifie : juste <code>&lt;!DOCTYPE html&gt;</code>, insensible a la casse."},
      {q:"Combien de <code>&lt;h1&gt;</code> par page ?",opts:["1","2","Autant que tu veux","0"],correct:"a",
        expl:"Un seul h1 par page : c'est le titre principal."},
      {q:"Quelle balise est auto-fermante ?",opts:["<code>&lt;div&gt;</code>","<code>&lt;p&gt;</code>","<code>&lt;img&gt;</code>","<code>&lt;a&gt;</code>"],correct:"c",
        expl:"<code>&lt;img&gt;</code> n'a pas de balise fermante (pas de contenu interne)."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Hello world",desc:"Cree une page HTML5 minimale qui affiche 'Bonjour HTML' dans un h1.",
        sol:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Hello</title>\n</head>\n<body>\n  <h1>Bonjour HTML</h1>\n</body>\n</html>"},
      {num:2,diff:"easy",title:"3 paragraphes",desc:"Ajoute 3 paragraphes sous le titre.",
        sol:"<h1>Mon site</h1>\n<p>Premier paragraphe.</p>\n<p>Deuxieme paragraphe.</p>\n<p>Troisieme paragraphe.</p>"},
      {num:3,diff:"easy",title:"Hierarchie",desc:"Page avec h1, h2, h3 logiquement imbriques.",
        sol:"<h1>Recettes</h1>\n<h2>Desserts</h2>\n<h3>Tiramisu</h3>\n<p>...</p>\n<h3>Mousse au chocolat</h3>\n<p>...</p>"},
      {num:4,diff:"easy",title:"Saut de ligne",desc:"Affiche 2 lignes avec un <code>&lt;br&gt;</code> entre.",
        sol:"<p>Ligne 1<br>Ligne 2</p>"},
      {num:5,diff:"medium",title:"Page complete",desc:"Page HTML5 valide avec lang fr, charset UTF-8, viewport, title 'Mon site', et un h1.",
        sol:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Mon site</title>\n</head>\n<body>\n  <h1>Bienvenue</h1>\n</body>\n</html>"},
      {num:6,diff:"medium",title:"Attribut id et class",desc:"Une div avec id='hero' et classes 'box' et 'rouge'.",
        sol:"<div id=\"hero\" class=\"box rouge\">Contenu</div>"},
      {num:7,diff:"medium",title:"Data attribute",desc:"Un bouton avec data-id='42' et data-role='delete'.",
        sol:"<button data-id=\"42\" data-role=\"delete\">Supprimer</button>"},
      {num:8,diff:"hard",title:"Commentaire conditionnel",desc:"Cache un paragraphe dans un commentaire HTML.",
        sol:"<!-- <p>Ce texte n'apparait pas a l'ecran</p> -->"}
    ]
  },

  {id:"day-2",code:"J2",title:"Jour 2 - Texte, liens, listes",sub:"Formatage semantique, ancres, ul/ol/dl",
    why:"Le texte est 80% du contenu web. Savoir le structurer fait toute la difference.",
    tags:["text","links","lists","anchors"],
    sections:[
      {h:"Formatage du texte",
        blocks:[
          {p:"HTML distingue le visuel (<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>) du semantique (<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>). Prefere TOUJOURS le semantique : meme rendu visuel mais sens supplementaire."},
          {code:"<p><strong>Important</strong> : ce texte est crucial.</p>\n<p>Le mot <em>peut-etre</em> a un sens nuance ici.</p>\n<p><mark>Surligne</mark> ce qui compte.</p>\n<p>Code inline : <code>const x = 1;</code></p>\n<p>Citation : <q>Etre ou ne pas etre</q></p>\n<p>Exposant : H<sup>2</sup>O n'est pas <del>H2O</del>.</p>"}
        ]
      },
      {h:"Les liens",
        blocks:[
          {code:"<!-- Lien externe -->\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Site externe</a>\n\n<!-- Lien interne -->\n<a href=\"/contact.html\">Contact</a>\n\n<!-- Ancre vers une section dans la page -->\n<a href=\"#section-3\">Aller a la section 3</a>\n...\n<h2 id=\"section-3\">Section 3</h2>\n\n<!-- Lien mailto / tel -->\n<a href=\"mailto:hello@example.com\">Ecris-nous</a>\n<a href=\"tel:+33123456789\">Appelle</a>"},
          {warn:"Toujours <code>rel=\"noopener noreferrer\"</code> avec <code>target=\"_blank\"</code>. Sinon faille de securite (tabnabbing)."}
        ]
      },
      {h:"Listes",
        blocks:[
          {code:"<!-- Liste non ordonnee -->\n<ul>\n  <li>Pomme</li>\n  <li>Banane</li>\n  <li>Kiwi</li>\n</ul>\n\n<!-- Liste ordonnee -->\n<ol>\n  <li>Mettre l'eau a chauffer</li>\n  <li>Verser le cafe</li>\n  <li>Sucrer</li>\n</ol>\n\n<!-- Liste imbriquee -->\n<ul>\n  <li>Fruits\n    <ul>\n      <li>Pomme</li>\n      <li>Banane</li>\n    </ul>\n  </li>\n  <li>Legumes</li>\n</ul>\n\n<!-- Liste de definitions -->\n<dl>\n  <dt>HTML</dt>\n  <dd>Langage de structure web</dd>\n  <dt>CSS</dt>\n  <dd>Langage de style</dd>\n</dl>"}
        ]
      }
    ],
    quiz:[
      {q:"Pour de l'emphase semantique :",opts:["<code>&lt;i&gt;</code>","<code>&lt;em&gt;</code>","<code>&lt;italic&gt;</code>","<code>&lt;span&gt;</code>"],correct:"b",
        expl:"<code>&lt;em&gt;</code> = emphase semantique."},
      {q:"<code>target=\"_blank\"</code> doit toujours etre accompagne de :",
        opts:["<code>rel=\"new\"</code>","<code>rel=\"noopener\"</code>","<code>onclick</code>","Rien"],correct:"b",
        expl:"<code>noopener</code> empeche la page cible d'acceder a window.opener (faille tabnabbing)."},
      {q:"Liste numerotee : quelle balise ?",opts:["<code>&lt;ul&gt;</code>","<code>&lt;ol&gt;</code>","<code>&lt;dl&gt;</code>","<code>&lt;list&gt;</code>"],correct:"b",
        expl:"<code>&lt;ol&gt;</code> = Ordered List."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Liste de courses",desc:"Liste non ordonnee de 5 articles.",
        sol:"<ul>\n  <li>Pain</li>\n  <li>Lait</li>\n  <li>Oeufs</li>\n  <li>Beurre</li>\n  <li>Sucre</li>\n</ul>"},
      {num:2,diff:"easy",title:"Recette numerotee",desc:"Liste ordonnee de 4 etapes pour faire du the.",
        sol:"<ol>\n  <li>Faire bouillir l'eau</li>\n  <li>Mettre le sachet dans la tasse</li>\n  <li>Verser l'eau</li>\n  <li>Attendre 3 minutes</li>\n</ol>"},
      {num:3,diff:"medium",title:"Lien externe securise",desc:"Lien vers w3schools.com, ouverture nouvel onglet, securise.",
        sol:"<a href=\"https://www.w3schools.com\" target=\"_blank\" rel=\"noopener noreferrer\">W3Schools</a>"},
      {num:4,diff:"medium",title:"Ancre interne",desc:"Lien 'Aller au contact' qui saute vers <h2 id='contact'> plus bas.",
        sol:"<a href=\"#contact\">Aller au contact</a>\n...\n<h2 id=\"contact\">Contact</h2>"},
      {num:5,diff:"medium",title:"Liste imbriquee",desc:"Categorie 'Fruits' avec 3 sous-items.",
        sol:"<ul>\n  <li>Fruits\n    <ul>\n      <li>Pomme</li>\n      <li>Banane</li>\n      <li>Kiwi</li>\n    </ul>\n  </li>\n</ul>"},
      {num:6,diff:"medium",title:"Definitions",desc:"Definir HTML, CSS et JS avec dl/dt/dd.",
        sol:"<dl>\n  <dt>HTML</dt><dd>Structure</dd>\n  <dt>CSS</dt><dd>Style</dd>\n  <dt>JS</dt><dd>Comportement</dd>\n</dl>"},
      {num:7,diff:"hard",title:"Lien telephone + email",desc:"Deux liens : un mailto et un tel.",
        sol:"<a href=\"mailto:hello@site.fr\">Email</a>\n<a href=\"tel:+33612345678\">Appeler</a>"}
    ]
  },

  {id:"day-3",code:"J3",title:"Jour 3 - Images, video, audio",sub:"img, srcset, picture, video, audio",
    why:"Images mal optimisees = sites lents. Maitrise srcset et alt.",
    tags:["images","video","audio","media","responsive"],
    sections:[
      {h:"L'image",
        blocks:[
          {code:"<!-- Image simple -->\n<img src=\"photo.jpg\" alt=\"Description\" width=\"600\" height=\"400\">\n\n<!-- Image responsive : srcset + sizes -->\n<img\n  src=\"photo-800.jpg\"\n  srcset=\"photo-400.jpg 400w,\n          photo-800.jpg 800w,\n          photo-1600.jpg 1600w\"\n  sizes=\"(max-width: 600px) 400px, 800px\"\n  alt=\"Coucher de soleil\">"},
          {tip:"Toujours mettre <code>width</code> + <code>height</code> : evite le saut de mise en page (Cumulative Layout Shift) quand l'image charge."},
          {warn:"<code>alt</code> est OBLIGATOIRE. <code>alt=\"\"</code> est OK pour une image purement decorative. Jamais omis."}
        ]
      },
      {h:"&lt;picture&gt; : art direction",
        blocks:[
          {p:"Permet de servir une IMAGE DIFFERENTE (pas juste resolution differente) selon la taille d'ecran ou le format supporte."},
          {code:"<picture>\n  <!-- Mobile : photo verticale -->\n  <source media=\"(max-width: 600px)\" srcset=\"photo-mobile.jpg\">\n  <!-- WebP si supporte -->\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <!-- Fallback -->\n  <img src=\"photo.jpg\" alt=\"...\">\n</picture>"}
        ]
      },
      {h:"Video et audio",
        blocks:[
          {code:"<video controls width=\"640\" poster=\"preview.jpg\">\n  <source src=\"film.webm\" type=\"video/webm\">\n  <source src=\"film.mp4\" type=\"video/mp4\">\n  Ton navigateur ne supporte pas la video.\n</video>\n\n<audio controls>\n  <source src=\"musique.ogg\" type=\"audio/ogg\">\n  <source src=\"musique.mp3\" type=\"audio/mpeg\">\n</audio>"},
          {tip:"Toujours plusieurs <code>&lt;source&gt;</code> : WebM/OGG (libre) + MP4/MP3 (universel)."}
        ]
      }
    ],
    quiz:[
      {q:"L'attribut <code>alt</code> sert a :",opts:["Le style","L'accessibilite et le SEO","Renommer le fichier","Cacher l'image"],correct:"b",
        expl:"<code>alt</code> decrit l'image pour les lecteurs d'ecran et apparait si l'image ne charge pas."},
      {q:"Pour des resolutions differentes selon ecran :",
        opts:["<code>srcset</code>","<code>multi-src</code>","<code>media</code>","<code>resize</code>"],correct:"a",
        expl:"<code>srcset</code> liste plusieurs sources, le navigateur choisit la meilleure."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Image avec alt",desc:"Image 'chat.jpg', alt descriptif, 300px de large.",
        sol:"<img src=\"chat.jpg\" alt=\"Un chat noir sur un canape\" width=\"300\" height=\"200\">"},
      {num:2,diff:"easy",title:"Video MP4",desc:"Video locale avec controles, fallback texte.",
        sol:"<video controls width=\"640\">\n  <source src=\"film.mp4\" type=\"video/mp4\">\n  Pas de support video.\n</video>"},
      {num:3,diff:"medium",title:"Srcset 3 tailles",desc:"Image responsive avec 3 tailles (400, 800, 1600).",
        sol:"<img src=\"photo-800.jpg\"\n  srcset=\"photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w\"\n  sizes=\"(max-width: 600px) 400px, 800px\"\n  alt=\"Photo\">"},
      {num:4,diff:"medium",title:"Picture WebP",desc:"WebP si supporte, sinon JPG.",
        sol:"<picture>\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"Photo\">\n</picture>"},
      {num:5,diff:"hard",title:"Audio 2 formats",desc:"Audio OGG + MP3 avec controles.",
        sol:"<audio controls>\n  <source src=\"track.ogg\" type=\"audio/ogg\">\n  <source src=\"track.mp3\" type=\"audio/mpeg\">\n</audio>"}
    ]
  },

  {id:"day-4",code:"J4",title:"Jour 4 - Tableaux & blocs",sub:"table, thead, tbody, div, span",
    why:"Tableaux pour les donnees tabulaires. Jamais pour la mise en page.",
    tags:["table","div","span","block","inline"],
    sections:[
      {h:"Tableaux",
        blocks:[
          {code:"<table>\n  <caption>Notes du trimestre</caption>\n  <thead>\n    <tr>\n      <th>Eleve</th>\n      <th>Math</th>\n      <th>FR</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>15</td>\n      <td>17</td>\n    </tr>\n    <tr>\n      <td>Bob</td>\n      <td>12</td>\n      <td>14</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>Moyenne</td>\n      <td>13.5</td>\n      <td>15.5</td>\n    </tr>\n  </tfoot>\n</table>"},
          {tip:"<code>&lt;th&gt;</code> = en-tete (gras + centre par defaut). <code>&lt;td&gt;</code> = cellule donnee. <code>scope=\"col\"</code> / <code>\"row\"</code> aide les lecteurs d'ecran."},
          {bad:"Ne JAMAIS utiliser <code>&lt;table&gt;</code> pour la mise en page. C'est ce qu'on faisait dans les annees 2000 et c'etait une catastrophe."}
        ]
      },
      {h:"colspan, rowspan",
        blocks:[
          {code:"<tr>\n  <th colspan=\"2\">Sciences</th>\n  <th>Langues</th>\n</tr>\n<tr>\n  <td>Math</td>\n  <td>Physique</td>\n  <td rowspan=\"2\">FR</td>\n</tr>"}
        ]
      },
      {h:"div vs span",
        blocks:[
          {table:[
            ["Balise","Type","Usage"],
            ["<code>&lt;div&gt;</code>","Block","Regrouper une SECTION"],
            ["<code>&lt;span&gt;</code>","Inline","Cibler un MORCEAU dans du texte"]
          ]},
          {code:"<div class=\"alerte\">\n  <p>Attention : <span class=\"rouge\">erreur critique</span> detectee.</p>\n</div>"}
        ]
      }
    ],
    quiz:[
      {q:"Pour fusionner 2 colonnes :",opts:["<code>merge=\"2\"</code>","<code>colspan=\"2\"</code>","<code>span-cols=\"2\"</code>","<code>cols=\"2\"</code>"],correct:"b",
        expl:"<code>colspan=\"N\"</code> sur un <code>td</code> ou <code>th</code>."},
      {q:"<code>&lt;span&gt;</code> est :",opts:["Block","Inline","Flex","Grid"],correct:"b",
        expl:"<code>span</code> est inline, prend juste la place de son contenu."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Tableau 2x2",desc:"Tableau simple avec 2 colonnes, 2 lignes (Nom, Age).",
        sol:"<table>\n  <tr><th>Nom</th><th>Age</th></tr>\n  <tr><td>Alice</td><td>28</td></tr>\n  <tr><td>Bob</td><td>34</td></tr>\n</table>"},
      {num:2,diff:"medium",title:"Tableau structure",desc:"Tableau avec thead, tbody, caption.",
        sol:"<table>\n  <caption>Resultats</caption>\n  <thead>\n    <tr><th>Equipe</th><th>Score</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>A</td><td>3</td></tr>\n    <tr><td>B</td><td>1</td></tr>\n  </tbody>\n</table>"},
      {num:3,diff:"medium",title:"Colspan",desc:"En-tete 'Sciences' qui couvre 2 colonnes (Math + Physique).",
        sol:"<tr>\n  <th colspan=\"2\">Sciences</th>\n</tr>\n<tr>\n  <th>Math</th>\n  <th>Physique</th>\n</tr>"},
      {num:4,diff:"hard",title:"Tableau accessible",desc:"Tableau de prix produit/quantite/total avec scope sur les TH.",
        sol:"<table>\n  <thead>\n    <tr>\n      <th scope=\"col\">Produit</th>\n      <th scope=\"col\">Quantite</th>\n      <th scope=\"col\">Total</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Pomme</th>\n      <td>3</td>\n      <td>1.50</td>\n    </tr>\n  </tbody>\n</table>"}
    ]
  },

  {id:"day-5",code:"J5",title:"Jour 5 - Formulaires",sub:"form, input, label, textarea, select, validation",
    why:"Le pont entre utilisateur et serveur. Mal fait = bug + faille securite.",
    tags:["forms","input","validation","accessibility"],
    sections:[
      {h:"Formulaire minimal",
        blocks:[
          {code:"<form action=\"/contact\" method=\"POST\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n\n  <label for=\"msg\">Message</label>\n  <textarea id=\"msg\" name=\"message\" rows=\"5\" required></textarea>\n\n  <button type=\"submit\">Envoyer</button>\n</form>"},
          {tip:"Chaque <code>input</code> doit avoir un <code>label</code> avec <code>for=\"id\"</code>. C'est l'accessibilite niveau 1 (et le confort UX : cliquer le label active le champ)."}
        ]
      },
      {h:"Types d'input",
        blocks:[
          {table:[
            ["type","Usage"],
            ["<code>text</code>","Texte libre"],
            ["<code>email</code>","Valide format @"],
            ["<code>password</code>","Masque les caracteres"],
            ["<code>number</code>","Numerique avec min/max/step"],
            ["<code>tel</code>","Telephone (clavier mobile adapte)"],
            ["<code>url</code>","Valide format http(s)://"],
            ["<code>date</code> / <code>time</code>","Picker natif"],
            ["<code>checkbox</code>","Choix multiple"],
            ["<code>radio</code>","Choix unique (meme name)"],
            ["<code>file</code>","Upload"],
            ["<code>hidden</code>","Invisible mais envoye"],
            ["<code>color</code>","Picker de couleur"],
            ["<code>range</code>","Slider"]
          ]}
        ]
      },
      {h:"Validation native HTML5",
        blocks:[
          {code:"<input type=\"email\" required>\n<input type=\"text\" required minlength=\"3\" maxlength=\"50\">\n<input type=\"number\" min=\"0\" max=\"100\" step=\"5\">\n<input type=\"text\" pattern=\"[A-Za-z]{2,}\" title=\"Lettres uniquement, min 2\">\n<input type=\"url\" required>"},
          {tip:"<code>pattern</code> accepte une regex. <code>title</code> = message d'aide affiche au survol et a l'erreur."}
        ]
      },
      {h:"Select et textarea",
        blocks:[
          {code:"<label for=\"pays\">Pays</label>\n<select id=\"pays\" name=\"pays\" required>\n  <option value=\"\">-- Choisir --</option>\n  <option value=\"fr\">France</option>\n  <option value=\"be\">Belgique</option>\n  <option value=\"ch\" selected>Suisse</option>\n</select>\n\n<textarea name=\"bio\" rows=\"4\" cols=\"40\" placeholder=\"Parle-nous de toi\"></textarea>"}
        ]
      }
    ],
    quiz:[
      {q:"Pour que cliquer le label active le champ :",opts:["<code>label[for]=input[id]</code>","<code>label[name]=input[name]</code>","Aucun lien possible","Mettre l'input dans le label"],correct:"a",
        expl:"<code>for</code> doit matcher <code>id</code>. Alternative : envelopper l'input dans le label."},
      {q:"Quel type d'input rend l'email obligatoire et valide le format ?",
        opts:["<code>type=\"email\" required</code>","<code>type=\"text\" pattern=\"email\"</code>","<code>type=\"required\"</code>","<code>type=\"validate\"</code>"],correct:"a",
        expl:"<code>type=\"email\"</code> valide le format, <code>required</code> rend obligatoire."},
      {q:"Boutons radio mutuellement exclusifs : ils doivent partager le meme :",
        opts:["<code>id</code>","<code>name</code>","<code>class</code>","<code>value</code>"],correct:"b",
        expl:"Meme <code>name</code> = groupe radio."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Formulaire de contact",desc:"Nom + email + message + bouton envoyer.",
        sol:"<form action=\"/contact\" method=\"POST\">\n  <label for=\"nom\">Nom</label>\n  <input type=\"text\" id=\"nom\" name=\"nom\" required>\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n  <label for=\"msg\">Message</label>\n  <textarea id=\"msg\" name=\"message\" required></textarea>\n  <button type=\"submit\">Envoyer</button>\n</form>"},
      {num:2,diff:"easy",title:"Mot de passe",desc:"Champ password obligatoire, min 8 caracteres.",
        sol:"<input type=\"password\" name=\"pass\" minlength=\"8\" required>"},
      {num:3,diff:"medium",title:"Select pays",desc:"Select avec 3 pays, France selectionne par defaut.",
        sol:"<select name=\"pays\">\n  <option value=\"fr\" selected>France</option>\n  <option value=\"be\">Belgique</option>\n  <option value=\"ch\">Suisse</option>\n</select>"},
      {num:4,diff:"medium",title:"Radio sexe",desc:"3 boutons radio (homme/femme/autre) qui partagent le meme groupe.",
        sol:"<label><input type=\"radio\" name=\"sexe\" value=\"h\"> Homme</label>\n<label><input type=\"radio\" name=\"sexe\" value=\"f\"> Femme</label>\n<label><input type=\"radio\" name=\"sexe\" value=\"x\"> Autre</label>"},
      {num:5,diff:"medium",title:"Pattern code postal",desc:"Code postal francais (5 chiffres).",
        sol:"<input type=\"text\" name=\"cp\" pattern=\"[0-9]{5}\" title=\"5 chiffres\" required>"},
      {num:6,diff:"hard",title:"Upload limite",desc:"Upload qui n'accepte que les images JPG/PNG, max 1 fichier.",
        sol:"<input type=\"file\" name=\"photo\" accept=\"image/jpeg, image/png\" required>"},
      {num:7,diff:"hard",title:"Formulaire structure",desc:"Formulaire complet avec fieldset/legend pour grouper les champs.",
        sol:"<form>\n  <fieldset>\n    <legend>Identite</legend>\n    <label for=\"n\">Nom</label>\n    <input type=\"text\" id=\"n\" name=\"nom\" required>\n  </fieldset>\n  <fieldset>\n    <legend>Contact</legend>\n    <label for=\"e\">Email</label>\n    <input type=\"email\" id=\"e\" name=\"email\" required>\n  </fieldset>\n  <button type=\"submit\">OK</button>\n</form>"}
    ]
  },

  {id:"day-6",code:"J6",title:"Jour 6 - Semantique HTML5 & SEO",sub:"header, nav, main, article, section, aside, footer",
    why:"Pour Google et les lecteurs d'ecran. Meilleur SEO + meilleure accessibilite gratuitement.",
    tags:["semantic","SEO","structure","accessibility"],
    sections:[
      {h:"Les balises semantiques",
        blocks:[
          {p:"Au lieu de <code>&lt;div class=\"header\"&gt;</code>, utilise <code>&lt;header&gt;</code>. Meme rendu, mais Google et les lecteurs d'ecran comprennent."},
          {code:"<body>\n  <header>\n    <h1>Mon Blog</h1>\n    <nav>\n      <a href=\"/\">Accueil</a>\n      <a href=\"/articles\">Articles</a>\n      <a href=\"/contact\">Contact</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <h2>Titre de l'article</h2>\n      <p>Contenu...</p>\n      <section>\n        <h3>Sous-section</h3>\n      </section>\n    </article>\n\n    <aside>\n      <h3>A lire aussi</h3>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026</p>\n  </footer>\n</body>"}
        ]
      },
      {h:"Meta tags pour le SEO",
        blocks:[
          {code:"<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <title>Titre de la page - 60 caracteres max</title>\n  <meta name=\"description\" content=\"Resume 150-160 caracteres affiche dans Google.\">\n\n  <!-- Open Graph (Facebook, LinkedIn) -->\n  <meta property=\"og:title\" content=\"Titre social\">\n  <meta property=\"og:description\" content=\"Description sociale\">\n  <meta property=\"og:image\" content=\"https://site.fr/preview.jpg\">\n  <meta property=\"og:url\" content=\"https://site.fr/page\">\n\n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n\n  <link rel=\"canonical\" href=\"https://site.fr/page\">\n</head>"},
          {tip:"<code>title</code> et <code>meta description</code> sont AFFICHES dans les resultats Google. Soigne-les."}
        ]
      }
    ],
    quiz:[
      {q:"<code>&lt;main&gt;</code> peut apparaitre combien de fois ?",opts:["1","2","Autant que possible","Aucune limite"],correct:"a",
        expl:"Un seul <code>main</code> par page : c'est le contenu principal et unique."},
      {q:"Pour les liens de navigation principaux :",opts:["<code>&lt;div class=\"menu\"&gt;</code>","<code>&lt;ul class=\"nav\"&gt;</code>","<code>&lt;nav&gt;</code>","<code>&lt;menu&gt;</code>"],correct:"c",
        expl:"<code>&lt;nav&gt;</code> est la balise semantique pour la navigation."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Squelette semantique",desc:"Page avec header, main, footer.",
        sol:"<body>\n  <header><h1>Mon site</h1></header>\n  <main>\n    <p>Contenu</p>\n  </main>\n  <footer>&copy; 2026</footer>\n</body>"},
      {num:2,diff:"medium",title:"Nav avec 4 liens",desc:"Barre de navigation semantique.",
        sol:"<nav>\n  <ul>\n    <li><a href=\"/\">Accueil</a></li>\n    <li><a href=\"/blog\">Blog</a></li>\n    <li><a href=\"/about\">A propos</a></li>\n    <li><a href=\"/contact\">Contact</a></li>\n  </ul>\n</nav>"},
      {num:3,diff:"medium",title:"Article de blog",desc:"Article avec header (titre + date), contenu, footer (auteur).",
        sol:"<article>\n  <header>\n    <h2>Titre de l'article</h2>\n    <time datetime=\"2026-05-24\">24 mai 2026</time>\n  </header>\n  <p>Contenu de l'article...</p>\n  <footer>Par <strong>Chadi</strong></footer>\n</article>"},
      {num:4,diff:"hard",title:"Meta SEO complete",desc:"Head complet : title, description, viewport, og:title, og:description, og:image.",
        sol:"<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Mon Blog - articles tech</title>\n  <meta name=\"description\" content=\"Blog sur le dev web avec tutos HTML, CSS, JS.\">\n  <meta property=\"og:title\" content=\"Mon Blog\">\n  <meta property=\"og:description\" content=\"Tutos dev web\">\n  <meta property=\"og:image\" content=\"https://blog.fr/preview.jpg\">\n</head>"}
    ]
  },

  {id:"day-7",code:"J7",title:"Jour 7 - Accessibilite & projet final",sub:"ARIA, focus, alt, contrast, mock exam",
    why:"15% des utilisateurs ont un handicap. Site accessible = + d'utilisateurs + bon karma + SEO.",
    tags:["accessibility","ARIA","WCAG","project"],
    sections:[
      {h:"Les bases ARIA",
        blocks:[
          {p:"ARIA = Accessible Rich Internet Applications. Attributs qui INFORMENT les lecteurs d'ecran quand le HTML pur ne suffit pas."},
          {code:"<!-- Role explicite -->\n<div role=\"button\" tabindex=\"0\" onclick=\"...\">Pseudo-bouton</div>\n\n<!-- Label invisible -->\n<button aria-label=\"Fermer la fenetre\">×</button>\n\n<!-- Description -->\n<input aria-describedby=\"hint-1\">\n<span id=\"hint-1\">Minimum 8 caracteres</span>\n\n<!-- Etat -->\n<button aria-pressed=\"true\">Gras</button>\n<div aria-expanded=\"false\">...</div>\n<input aria-invalid=\"true\">\n<div aria-hidden=\"true\">Decoratif</div>"},
          {tip:"REGLE D'OR : utilise du HTML semantique avant d'ajouter de l'ARIA. <code>&lt;button&gt;</code> est mieux que <code>&lt;div role=\"button\"&gt;</code>."}
        ]
      },
      {h:"Focus et navigation clavier",
        blocks:[
          {code:"<!-- Ordre de tabulation -->\n<input tabindex=\"1\">\n<input tabindex=\"0\">  <!-- normal (defaut) -->\n<input tabindex=\"-1\"> <!-- skippe par tab mais focusable par JS -->\n\n<!-- Skip link (lien d'evitement) -->\n<a href=\"#main\" class=\"skip-link\">Aller au contenu</a>"},
          {bad:"Ne JAMAIS faire <code>outline: none</code> en CSS sans alternative visible. Tu casses la navigation au clavier."}
        ]
      },
      {h:"Projet final : page de portfolio",
        blocks:[
          {list:[
            "<strong>Header</strong> : nom + nav (Accueil, Projets, Contact)",
            "<strong>Main</strong> :",
            "&nbsp;&nbsp;&nbsp;- <strong>Hero</strong> : h1 + photo + texte d'intro",
            "&nbsp;&nbsp;&nbsp;- <strong>Projets</strong> : 3 articles avec titre, image, description, lien",
            "&nbsp;&nbsp;&nbsp;- <strong>Contact</strong> : formulaire (nom, email, message)",
            "<strong>Footer</strong> : copyright + reseaux sociaux",
            "Toutes les images ont un <code>alt</code> descriptif",
            "Validation HTML5 (W3C Validator) sans erreur",
            "Lighthouse accessibility score >= 95"
          ]}
        ]
      }
    ],
    quiz:[
      {q:"Pour un bouton avec juste une icone (pas de texte visible) :",
        opts:["<code>title=\"Fermer\"</code>","<code>aria-label=\"Fermer\"</code>","<code>alt=\"Fermer\"</code>","<code>name=\"Fermer\"</code>"],correct:"b",
        expl:"<code>aria-label</code> donne un nom accessible aux lecteurs d'ecran."},
      {q:"<code>tabindex=\"-1\"</code> signifie :",opts:["Inaccessible","Skippe par Tab mais focusable par JS","Avant tous les autres","Apres tous les autres"],correct:"b",
        expl:"Permet de focusser via .focus() mais retire de l'ordre de tabulation naturel."},
      {q:"Pour cacher un element visuellement MAIS le garder accessible :",
        opts:["<code>display:none</code>","<code>visibility:hidden</code>","Classe .sr-only","<code>aria-hidden=\"true\"</code>"],correct:"c",
        expl:"<code>display:none</code> et <code>visibility:hidden</code> cachent aussi pour les lecteurs d'ecran. La technique <code>.sr-only</code> (position absolute, 1px etc.) garde l'element lisible."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Bouton accessible",desc:"Bouton icone X qui a aria-label='Fermer'.",
        sol:"<button aria-label=\"Fermer\">×</button>"},
      {num:2,diff:"easy",title:"Skip link",desc:"Lien d'evitement vers #main.",
        sol:"<a href=\"#main\" class=\"skip-link\">Aller au contenu</a>\n...\n<main id=\"main\">...</main>"},
      {num:3,diff:"medium",title:"Image decorative",desc:"Image purement decorative (un point rouge).",
        sol:"<img src=\"dot.png\" alt=\"\" aria-hidden=\"true\">"},
      {num:4,diff:"medium",title:"Input avec aide",desc:"Champ password avec hint visible et lie via aria-describedby.",
        sol:"<label for=\"pwd\">Mot de passe</label>\n<input type=\"password\" id=\"pwd\" aria-describedby=\"pwd-hint\">\n<small id=\"pwd-hint\">8 caracteres minimum</small>"},
      {num:5,diff:"hard",title:"Page portfolio (squelette)",desc:"Page complete : header/nav, main avec hero+projects+contact, footer.",
        sol:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Portfolio</title>\n</head>\n<body>\n  <a href=\"#main\" class=\"skip-link\">Aller au contenu</a>\n  <header>\n    <h1>Mon Portfolio</h1>\n    <nav>\n      <a href=\"#hero\">Accueil</a>\n      <a href=\"#projects\">Projets</a>\n      <a href=\"#contact\">Contact</a>\n    </nav>\n  </header>\n  <main id=\"main\">\n    <section id=\"hero\">\n      <h2>Bonjour, je suis dev</h2>\n      <img src=\"moi.jpg\" alt=\"Photo de moi\">\n    </section>\n    <section id=\"projects\">\n      <h2>Projets</h2>\n      <article><h3>Projet 1</h3></article>\n    </section>\n    <section id=\"contact\">\n      <h2>Contact</h2>\n      <form>\n        <label for=\"e\">Email</label>\n        <input type=\"email\" id=\"e\" name=\"email\" required>\n        <button type=\"submit\">Envoyer</button>\n      </form>\n    </section>\n  </main>\n  <footer>&copy; 2026</footer>\n</body>\n</html>"}
    ]
  }
];

const GIO = [
  {id:"w3-intro",code:"B1",level:"basic",title:"HTML Intro",sub:"Qu'est-ce que HTML",tags:["intro","basics"],
    sections:[{h:"HTML c'est quoi ?",blocks:[
      {p:"HTML (HyperText Markup Language) est le langage qui structure le contenu d'une page web. Ce n'est PAS un langage de programmation : c'est un langage de balisage."},
      {p:"Les balises decrivent ce qu'est chaque element : un titre, un paragraphe, un lien, une image. Le navigateur lit ces balises et affiche le rendu."},
      {note:"HTML repond a <strong>QUOI</strong>. CSS repond a <strong>COMMENT</strong>. JS repond a <strong>QUAND</strong>."}
    ]}],
    quiz:[{q:"HTML est :",opts:["Un langage de programmation","Un langage de balisage","Une base de donnees","Un style"],correct:"b",
      expl:"HTML = HyperText Markup Language. Balisage, pas programmation."}]
  },
  {id:"w3-elements",code:"B2",level:"basic",title:"HTML Elements",sub:"Anatomie d'un element HTML",tags:["elements","basics"],
    sections:[{h:"Anatomie",blocks:[
      {code:"<p class=\"intro\">Bonjour</p>\n^   ^               ^   ^\n|   |               |   +-- balise fermante\n|   |               +-- contenu\n|   +-- attribut\n+-- balise ouvrante"},
      {tip:"Element = balise ouvrante + contenu + balise fermante. Les attributs vont dans la balise OUVRANTE."}
    ]}],
    quiz:[{q:"Les attributs sont dans :",opts:["La balise ouvrante","La balise fermante","Le contenu","Le head"],correct:"a",
      expl:"<code>&lt;p class=\"x\"&gt;...&lt;/p&gt;</code>. Attributs dans l'ouvrante."}]
  },
  {id:"w3-attributes",code:"B3",level:"basic",title:"HTML Attributes",sub:"id, class, style, title, lang",tags:["attributes","basics"],
    sections:[{h:"Attributs globaux",blocks:[
      {code:"<div id=\"main\" class=\"box big\" lang=\"fr\" title=\"Bulle d'aide\" style=\"color:red\">\n  Contenu\n</div>"},
      {note:"<code>id</code> doit etre UNIQUE par page. <code>class</code> peut etre reutilisee."}
    ]}],
    quiz:[{q:"Quel attribut doit etre unique ?",opts:["<code>class</code>","<code>id</code>","<code>name</code>","<code>style</code>"],correct:"b",
      expl:"<code>id</code> = identifiant unique. <code>class</code> peut etre repetee."}]
  },
  {id:"w3-headings",code:"B4",level:"basic",title:"HTML Headings",sub:"h1, h2, h3, h4, h5, h6",tags:["headings","basics"],
    sections:[{h:"Hierarchie",blocks:[
      {code:"<h1>Titre principal (un seul par page)</h1>\n<h2>Section</h2>\n<h3>Sous-section</h3>\n<h4>Sous-sous</h4>"},
      {bad:"Ne saute pas de niveau (h1 puis h3 directement). Casse le SEO et l'accessibilite."}
    ]}],
    quiz:[{q:"Combien de niveaux h existent ?",opts:["3","4","6","Illimite"],correct:"c",
      expl:"De h1 a h6, exactement 6 niveaux."}]
  },
  {id:"w3-paragraphs",code:"B5",level:"basic",title:"HTML Paragraphs",sub:"p, br, hr, pre",tags:["text","basics"],
    sections:[{h:"Texte de base",blocks:[
      {code:"<p>Un paragraphe.</p>\n<p>Un autre, avec un<br>saut de ligne.</p>\n<hr>\n<pre>\n  Texte preformate\n  avec espaces preserves\n</pre>"}
    ]}],
    quiz:[{q:"<code>&lt;br&gt;</code> fait :",opts:["Une nouvelle section","Un saut de ligne","Une ligne horizontale","Une bordure"],correct:"b",
      expl:"<code>br</code> = BReak = saut de ligne. <code>hr</code> = Horizontal Rule = trait horizontal."}]
  },
  {id:"w3-styles",code:"B6",level:"basic",title:"HTML Inline Styles",sub:"L'attribut style (avec moderation)",tags:["style","basics"],
    sections:[{h:"Style inline",blocks:[
      {code:"<p style=\"color: red; font-size: 18px;\">Texte rouge</p>"},
      {bad:"Inline style = a EVITER en production. Tout dans le CSS externe ou interne. Inline = pas reutilisable, pas maintenable."}
    ]}],
    quiz:[{q:"Inline style est :",opts:["Recommande","A eviter en general","Plus rapide","Obligatoire"],correct:"b",
      expl:"Toujours preferer CSS externe pour la maintenabilite."}]
  },
  {id:"w3-links",code:"I1",level:"intermediate",title:"HTML Links",sub:"a, target, rel, mailto, tel",tags:["links","intermediate"],
    sections:[{h:"Liens en profondeur",blocks:[
      {code:"<!-- target -->\n<a href=\"...\" target=\"_blank\">Nouvel onglet</a>\n<a href=\"...\" target=\"_self\">Meme onglet (defaut)</a>\n\n<!-- rel -->\n<a rel=\"noopener noreferrer nofollow\">Securise + pas de SEO juice</a>\n\n<!-- Telechargement -->\n<a href=\"doc.pdf\" download>Telecharger</a>\n<a href=\"doc.pdf\" download=\"facture-2026.pdf\">Renommer en telechargement</a>"}
    ]}],
    quiz:[{q:"<code>download</code> force :",opts:["L'ouverture dans le navigateur","Le telechargement","Le partage","Rien"],correct:"b",
      expl:"<code>download</code> indique au navigateur de telecharger plutot que d'afficher."}]
  },
  {id:"w3-forms",code:"I2",level:"intermediate",title:"HTML Forms",sub:"form, input, label, validation",tags:["forms","intermediate"],
    sections:[{h:"Validation native",blocks:[
      {code:"<form>\n  <input type=\"email\" required>\n  <input type=\"text\" minlength=\"3\" maxlength=\"20\">\n  <input type=\"number\" min=\"0\" max=\"100\">\n  <input type=\"text\" pattern=\"[A-Z]{3}\" title=\"3 majuscules\">\n</form>"}
    ]}],
    quiz:[{q:"<code>pattern</code> attend :",opts:["Du JS","Une regex","Du CSS","Une fonction"],correct:"b",
      expl:"<code>pattern</code> = regex de validation cote client."}]
  },
  {id:"w3-input-types",code:"I3",level:"intermediate",title:"HTML Input Types",sub:"Les 22+ types d'input",tags:["input","forms","intermediate"],
    sections:[{h:"Types principaux",blocks:[
      {table:[
        ["type","Specificite"],
        ["<code>text</code>","Defaut"],
        ["<code>email</code>","Valide @"],
        ["<code>password</code>","Masque"],
        ["<code>number</code>","Numerique"],
        ["<code>date</code>","Picker date"],
        ["<code>time</code>","Picker heure"],
        ["<code>tel</code>","Clavier mobile numerique"],
        ["<code>url</code>","Valide URL"],
        ["<code>search</code>","Avec clear button"],
        ["<code>color</code>","Picker couleur"],
        ["<code>range</code>","Slider"],
        ["<code>file</code>","Upload"]
      ]}
    ]}],
    quiz:[{q:"Pour un picker de date natif :",opts:["<code>type=\"date\"</code>","<code>type=\"calendar\"</code>","<code>type=\"datetime\"</code>","<code>type=\"day\"</code>"],correct:"a",
      expl:"<code>type=\"date\"</code> ouvre un picker natif sur tous les navigateurs modernes."}]
  },
  {id:"w3-tables",code:"I4",level:"intermediate",title:"HTML Tables",sub:"table, thead, tbody, tfoot, scope",tags:["tables","intermediate"],
    sections:[{h:"Tableau accessible",blocks:[
      {code:"<table>\n  <caption>Titre du tableau</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Produit</th>\n      <th scope=\"col\">Prix</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Pomme</th>\n      <td>1.50</td>\n    </tr>\n  </tbody>\n</table>"}
    ]}],
    quiz:[{q:"<code>&lt;caption&gt;</code> va :",opts:["Apres <code>&lt;tbody&gt;</code>","En tout debut de <code>&lt;table&gt;</code>","Dans <code>&lt;thead&gt;</code>","N'importe ou"],correct:"b",
      expl:"<code>&lt;caption&gt;</code> doit etre le PREMIER enfant de <code>&lt;table&gt;</code>."}]
  },
  {id:"w3-iframes",code:"I5",level:"intermediate",title:"HTML Iframes",sub:"Embed une autre page",tags:["iframe","intermediate"],
    sections:[{h:"Embed",blocks:[
      {code:"<iframe\n  src=\"https://www.youtube.com/embed/abc\"\n  width=\"560\"\n  height=\"315\"\n  title=\"YouTube video\"\n  frameborder=\"0\"\n  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n  allowfullscreen></iframe>"},
      {warn:"Ne fais JAMAIS d'iframe vers un site que tu ne controles pas pour de la securite. Risque de clickjacking. Met <code>sandbox=\"\"</code> pour bloquer JS."}
    ]}],
    quiz:[{q:"Pour bloquer le JS dans une iframe :",opts:["<code>nojs</code>","<code>sandbox=\"\"</code>","<code>secure=\"true\"</code>","Impossible"],correct:"b",
      expl:"<code>sandbox=\"\"</code> bloque tout. <code>sandbox=\"allow-scripts\"</code> autorise selectivement."}]
  },
  {id:"w3-semantic",code:"A1",level:"advanced",title:"HTML Semantic",sub:"header, nav, main, article, section, aside, footer",tags:["semantic","ARIA","advanced"],
    sections:[{h:"Pourquoi le semantique",blocks:[
      {p:"Au lieu de <code>&lt;div class=\"header\"&gt;</code>, utilise <code>&lt;header&gt;</code>. Le SEO et les lecteurs d'ecran comprennent immediatement."},
      {code:"<body>\n  <header>...</header>\n  <nav>...</nav>\n  <main>\n    <article>\n      <h1>Titre</h1>\n      <section>...</section>\n    </article>\n    <aside>...</aside>\n  </main>\n  <footer>...</footer>\n</body>"}
    ]}],
    quiz:[{q:"<code>&lt;main&gt;</code> peut apparaitre combien de fois ?",opts:["1","2","Autant que possible","Aucune limite"],correct:"a",
      expl:"Un seul <code>&lt;main&gt;</code> par page."}]
  },
  {id:"w3-aria",code:"A2",level:"advanced",title:"HTML Accessibility / ARIA",sub:"aria-label, role, tabindex",tags:["ARIA","a11y","advanced"],
    sections:[{h:"ARIA en pratique",blocks:[
      {code:"<button aria-label=\"Fermer\">×</button>\n<div role=\"alert\">Message d'erreur</div>\n<button aria-pressed=\"true\">Gras</button>\n<input aria-invalid=\"true\" aria-describedby=\"err-1\">\n<span id=\"err-1\">Email invalide</span>"},
      {tip:"Premiere regle d'ARIA : ne pas utiliser ARIA. Prefere le HTML semantique natif quand il existe."}
    ]}],
    quiz:[{q:"Pour annoncer une erreur immediatement :",opts:["<code>role=\"alert\"</code>","<code>aria-live=\"polite\"</code>","<code>aria-status=\"error\"</code>","<code>aria-error=\"true\"</code>"],correct:"a",
      expl:"<code>role=\"alert\"</code> equivaut a <code>aria-live=\"assertive\"</code>, interrompt le lecteur d'ecran."}]
  },
  {id:"w3-meta-seo",code:"A3",level:"advanced",title:"HTML Meta & SEO",sub:"title, meta description, og, canonical",tags:["SEO","meta","advanced"],
    sections:[{h:"Le minimum SEO",blocks:[
      {code:"<title>Page Title - Brand (60 char max)</title>\n<meta name=\"description\" content=\"Resume 150-160 char qui apparait dans Google.\">\n<meta name=\"robots\" content=\"index, follow\">\n<link rel=\"canonical\" href=\"https://site.fr/page\">\n\n<!-- Open Graph -->\n<meta property=\"og:title\" content=\"Titre social\">\n<meta property=\"og:description\" content=\"Description sociale\">\n<meta property=\"og:image\" content=\"https://site.fr/preview.jpg\">\n<meta property=\"og:type\" content=\"article\">"}
    ]}],
    quiz:[{q:"<code>rel=\"canonical\"</code> sert a :",opts:["Lien preferre du site","Eviter les doublons SEO","Bloquer Google","Rediriger"],correct:"b",
      expl:"Indique l'URL CANONIQUE quand plusieurs URLs servent le meme contenu (paginations, parametres tracking)."}]
  }
];

const ALL_LESSONS = [...DAYS, ...GIO];
const TOTAL = ALL_LESSONS.length;
const TOTAL_EXERCISES = DAYS.reduce((sum, d) => sum + (d.exercises ? d.exercises.length : 0), 0);
