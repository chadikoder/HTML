const DAYS = [
  {id:"day-1",code:"J1",title:"Jour 1 - Structure & balises de base",sub:"Doctype, head, body, balises, attributs, commentaires",
    why:"Toute page web commence ici. Sans squelette correct, le reste casse.",
    tags:["structure","doctype","head","body","attributs"],
    sections:[
      {h:"Le squelette HTML5",
        blocks:[
          {p:"Une page HTML commence toujours par <code>&lt;!DOCTYPE html&gt;</code>. C'est la declaration qui dit au navigateur d'utiliser le mode standards HTML5 (avant on avait des doctypes a rallonge XHTML, c'est fini)."},
          {code:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Ma page</title>\n</head>\n<body>\n  <h1>Bonjour</h1>\n</body>\n</html>"},
          {note:"<code>lang=\"fr\"</code> aide les lecteurs d'ecran (prononciation correcte) et le SEO (Google sait dans quelle langue indexer)."},
          {warn:"Sans <code>&lt;meta viewport&gt;</code>, le mobile zoome par defaut et le site est inutilisable au tactile. C'est l'erreur n1 des debutants."},
          {tip:"<code>charset=\"UTF-8\"</code> doit etre dans les 1024 premiers octets. Mets-la toujours juste apres <code>&lt;head&gt;</code>."}
        ]
      },
      {h:"Le contenu du <head>",
        blocks:[
          {p:"Le <code>&lt;head&gt;</code> contient les metadonnees (invisible pour l'utilisateur mais lu par le navigateur, Google, les reseaux sociaux)."},
          {code:"<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Titre dans l'onglet</title>\n  <meta name=\"description\" content=\"Resume 150 caracteres visible dans Google.\">\n  <meta name=\"author\" content=\"Chadi Khoder\">\n  <link rel=\"icon\" href=\"/favicon.svg\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <script defer src=\"app.js\"></script>\n</head>"}
        ]
      },
      {h:"Balises ouvrantes / fermantes / auto-fermantes",
        blocks:[
          {p:"La plupart des balises viennent par paires. Quelques unes sont <strong>auto-fermantes</strong> (void elements) : <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;source&gt;</code>."},
          {code:"<!-- Avec contenu -->\n<p>Un paragraphe.</p>\n<a href=\"page.html\">Un lien</a>\n\n<!-- Auto-fermantes (pas de </br>, juste <br>) -->\n<br>\n<hr>\n<img src=\"chat.jpg\" alt=\"chat\">\n<input type=\"text\" name=\"nom\">"},
          {note:"En XHTML on ecrivait <code>&lt;br /&gt;</code>. En HTML5 c'est facultatif. Les deux passent, mais <code>&lt;br&gt;</code> est plus court."}
        ]
      },
      {h:"Attributs",
        blocks:[
          {p:"Les attributs configurent la balise. Ils vont dans la balise OUVRANTE seulement."},
          {code:"<a href=\"https://w3schools.com\" target=\"_blank\" rel=\"noopener\" title=\"Visiter W3Schools\">\n  W3Schools\n</a>\n\n<img src=\"logo.svg\" alt=\"Logo\" width=\"120\" height=\"40\" loading=\"lazy\">\n\n<div id=\"main\" class=\"container hero\" data-role=\"banner\">...</div>"},
          {tip:"<code>id</code> = unique par page. <code>class</code> = peut etre partagee. Les <code>data-*</code> sont libres : tu mets ce que tu veux, JS peut les lire via <code>el.dataset.xxx</code>."},
          {warn:"<code>id</code> ne doit jamais commencer par un chiffre. <code>id=\"1main\"</code> = invalide. <code>id=\"main-1\"</code> = OK."}
        ]
      },
      {h:"Commentaires",
        blocks:[
          {code:"<!-- Ceci est un commentaire HTML -->\n<!-- Peut faire\n     plusieurs lignes -->\n\n<!-- TODO: remplacer par le vrai contenu -->"},
          {warn:"Les commentaires HTML sont VISIBLES dans le code source (clic droit > Voir source). Jamais y mettre de mot de passe, de token API, de URL secrete."}
        ]
      },
      {h:"Caracteres speciaux (entites HTML)",
        blocks:[
          {p:"Certains caracteres ont un sens special en HTML. Pour les afficher litteralement, on utilise des entites."},
          {table:[
            ["Caractere","Entite","Usage"],
            ["<code>&lt;</code>","<code>&amp;lt;</code>","Inferieur"],
            ["<code>&gt;</code>","<code>&amp;gt;</code>","Superieur"],
            ["<code>&amp;</code>","<code>&amp;amp;</code>","Esperluette"],
            ["<code>\"</code>","<code>&amp;quot;</code>","Guillemet double"],
            ["<code>&nbsp;</code>","<code>&amp;nbsp;</code>","Espace insecable"],
            ["<code>©</code>","<code>&amp;copy;</code>","Copyright"]
          ]}
        ]
      }
    ],
    quiz:[
      {q:"Quel doctype pour HTML5 ?",opts:["<code>&lt;!DOCTYPE html5&gt;</code>","<code>&lt;!DOCTYPE html&gt;</code>","<code>&lt;!DOCTYPE HTML PUBLIC ...&gt;</code>","<code>&lt;html5&gt;</code>"],correct:"b",
        expl:"HTML5 a simplifie : juste <code>&lt;!DOCTYPE html&gt;</code>."},
      {q:"Combien de <code>&lt;h1&gt;</code> par page ?",opts:["1","2","Autant que tu veux","0"],correct:"a",
        expl:"Un seul h1 par page : c'est le titre principal."},
      {q:"Quelle balise est auto-fermante ?",opts:["<code>&lt;div&gt;</code>","<code>&lt;p&gt;</code>","<code>&lt;img&gt;</code>","<code>&lt;a&gt;</code>"],correct:"c",
        expl:"<code>&lt;img&gt;</code> n'a pas de balise fermante (pas de contenu interne)."},
      {q:"Pour afficher litteralement &lt; en HTML :",opts:["<code>\\&lt;</code>","<code>&amp;lt;</code>","<code>%lt%</code>","<code>&lt;/&lt;&gt;</code>"],correct:"b",
        expl:"L'entite <code>&amp;lt;</code> rend le caractere <code>&lt;</code>."},
      {q:"<code>data-role=\"banner\"</code> sert a :",opts:["Styler","Stocker une info custom","Faire du SEO","Rien"],correct:"b",
        expl:"Attributs <code>data-*</code> = stockage libre lisible en JS via <code>el.dataset.role</code>."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Hello world",desc:"Cree une page HTML5 minimale qui affiche 'Bonjour HTML' dans un h1.",
        sol:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Hello</title>\n</head>\n<body>\n  <h1>Bonjour HTML</h1>\n</body>\n</html>"},
      {num:2,diff:"easy",title:"3 paragraphes",desc:"Sous le titre, 3 paragraphes.",
        sol:"<h1>Mon site</h1>\n<p>Premier.</p>\n<p>Deuxieme.</p>\n<p>Troisieme.</p>"},
      {num:3,diff:"easy",title:"Hierarchie titres",desc:"Page avec h1, h2, h3 imbriques logiquement.",
        sol:"<h1>Recettes</h1>\n<h2>Desserts</h2>\n<h3>Tiramisu</h3>\n<p>...</p>\n<h3>Mousse</h3>\n<p>...</p>"},
      {num:4,diff:"easy",title:"Saut de ligne",desc:"2 lignes dans un meme <p> separees par <br>.",
        sol:"<p>Ligne 1<br>Ligne 2</p>"},
      {num:5,diff:"easy",title:"Trait horizontal",desc:"Separe 2 sections par un trait <hr>.",
        sol:"<h2>Section 1</h2>\n<p>...</p>\n<hr>\n<h2>Section 2</h2>"},
      {num:6,diff:"medium",title:"Head complet",desc:"Head avec charset, viewport, title, description et favicon.",
        sol:"<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Mon site</title>\n  <meta name=\"description\" content=\"Site personnel de Chadi\">\n  <link rel=\"icon\" href=\"/favicon.svg\">\n</head>"},
      {num:7,diff:"medium",title:"Attribut id et class",desc:"Une div avec id 'hero' et 2 classes 'box' et 'rouge'.",
        sol:"<div id=\"hero\" class=\"box rouge\">Contenu</div>"},
      {num:8,diff:"medium",title:"Data attribute",desc:"Bouton 'Supprimer' avec data-id='42' et data-role='delete'.",
        sol:"<button data-id=\"42\" data-role=\"delete\">Supprimer</button>"},
      {num:9,diff:"medium",title:"Entites HTML",desc:"Affiche litteralement le code <code>&lt;div&gt;</code> dans une page.",
        sol:"<p>Voici un tag : &lt;div&gt;</p>"},
      {num:10,diff:"medium",title:"Caractere copyright",desc:"Affiche &copy; 2026 Chadi Khoder dans un footer.",
        sol:"<footer>&copy; 2026 Chadi Khoder</footer>"},
      {num:11,diff:"hard",title:"Page valide W3C",desc:"Page complete avec head valide + body simple. Doit passer le W3C Validator.",
        sol:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Page valide</title>\n  <meta name=\"description\" content=\"Test W3C\">\n</head>\n<body>\n  <header>\n    <h1>Mon titre</h1>\n  </header>\n  <main>\n    <p>Contenu.</p>\n  </main>\n  <footer>\n    <p>&copy; 2026</p>\n  </footer>\n</body>\n</html>"},
      {num:12,diff:"hard",title:"Defer script",desc:"Charge app.js avec defer, charge style.css, et favicon svg.",
        sol:"<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\">\n<link rel=\"stylesheet\" href=\"style.css\">\n<script defer src=\"app.js\"></script>"}
    ]
  },

  {id:"day-2",code:"J2",title:"Jour 2 - Texte, liens, listes",sub:"Formatage semantique, ancres, ul/ol/dl",
    why:"Le texte est 80% du contenu web. Savoir le structurer fait toute la difference.",
    tags:["text","links","lists","anchors"],
    sections:[
      {h:"Formatage du texte (visuel vs semantique)",
        blocks:[
          {p:"HTML distingue le visuel (<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>) du semantique (<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>). Prefere TOUJOURS le semantique : meme rendu visuel mais sens supplementaire pour les lecteurs d'ecran et le SEO."},
          {code:"<p><strong>Important</strong> : ce texte est crucial.</p>\n<p>Le mot <em>peut-etre</em> a un sens nuance.</p>\n<p><mark>Surligne</mark> ce qui compte.</p>\n<p>Code inline : <code>const x = 1;</code></p>\n<p>Citation : <q>Etre ou ne pas etre</q></p>\n<p>Exposant : H<sup>2</sup>O. Indice : x<sub>1</sub></p>\n<p><del>Ancien prix : 50€</del> <ins>Nouveau : 30€</ins></p>\n<p>Raccourci : <kbd>Ctrl</kbd>+<kbd>S</kbd></p>\n<p>Variable : <var>x</var> = 5</p>"},
          {table:[
            ["Tag","Sens","Rendu defaut"],
            ["<code>&lt;strong&gt;</code>","Important","gras"],
            ["<code>&lt;em&gt;</code>","Emphase","italique"],
            ["<code>&lt;b&gt;</code>","Stylistique","gras"],
            ["<code>&lt;i&gt;</code>","Stylistique","italique"],
            ["<code>&lt;mark&gt;</code>","Surligne","fond jaune"],
            ["<code>&lt;code&gt;</code>","Code","monospace"],
            ["<code>&lt;del&gt;</code>","Supprime","barre"],
            ["<code>&lt;ins&gt;</code>","Ajoute","souligne"]
          ]}
        ]
      },
      {h:"Les liens",
        blocks:[
          {code:"<!-- Lien externe -->\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Site externe\n</a>\n\n<!-- Lien interne -->\n<a href=\"/contact.html\">Contact</a>\n<a href=\"contact.html\">Contact (relatif)</a>\n\n<!-- Ancre vers une section dans la page -->\n<a href=\"#section-3\">Aller a la section 3</a>\n...\n<h2 id=\"section-3\">Section 3</h2>\n\n<!-- Lien mailto / tel / sms -->\n<a href=\"mailto:hello@example.com?subject=Bonjour\">Ecris-nous</a>\n<a href=\"tel:+33123456789\">Appelle</a>\n<a href=\"sms:+33612345678\">SMS</a>\n\n<!-- Telechargement -->\n<a href=\"facture.pdf\" download>Telecharger</a>\n<a href=\"facture.pdf\" download=\"facture-2026.pdf\">Renommer au DL</a>"},
          {warn:"Toujours <code>rel=\"noopener noreferrer\"</code> avec <code>target=\"_blank\"</code>. Sinon faille de securite (tabnabbing : la page cible peut acceder a <code>window.opener</code>)."}
        ]
      },
      {h:"Listes : ul, ol, dl",
        blocks:[
          {code:"<!-- Liste non ordonnee -->\n<ul>\n  <li>Pomme</li>\n  <li>Banane</li>\n  <li>Kiwi</li>\n</ul>\n\n<!-- Liste ordonnee -->\n<ol>\n  <li>Etape 1</li>\n  <li>Etape 2</li>\n  <li>Etape 3</li>\n</ol>\n\n<!-- Liste ordonnee qui commence a 5 -->\n<ol start=\"5\">\n  <li>Item 5</li>\n  <li>Item 6</li>\n</ol>\n\n<!-- Liste avec type alphabetique -->\n<ol type=\"A\">  <!-- A, B, C... -->\n<ol type=\"a\">  <!-- a, b, c... -->\n<ol type=\"I\">  <!-- I, II, III... -->\n<ol type=\"i\">  <!-- i, ii, iii... -->\n\n<!-- Liste imbriquee -->\n<ul>\n  <li>Fruits\n    <ul>\n      <li>Pomme</li>\n      <li>Banane</li>\n    </ul>\n  </li>\n  <li>Legumes</li>\n</ul>\n\n<!-- Liste de definitions -->\n<dl>\n  <dt>HTML</dt>\n  <dd>Langage de structure web</dd>\n  <dt>CSS</dt>\n  <dd>Langage de style</dd>\n</dl>"}
        ]
      },
      {h:"Citations",
        blocks:[
          {code:"<!-- Citation inline (entoure de guillemets) -->\n<p>Comme disait Einstein : <q>Tout est relatif</q></p>\n\n<!-- Citation longue (en bloc) -->\n<blockquote cite=\"https://source.com\">\n  <p>Le seul homme qui ne se trompe jamais est celui qui ne fait rien.</p>\n  <footer>— Theodore Roosevelt</footer>\n</blockquote>\n\n<!-- Reference a une oeuvre -->\n<p>J'ai lu <cite>1984</cite> de George Orwell.</p>"}
        ]
      }
    ],
    quiz:[
      {q:"Pour de l'emphase semantique :",opts:["<code>&lt;i&gt;</code>","<code>&lt;em&gt;</code>","<code>&lt;italic&gt;</code>","<code>&lt;span&gt;</code>"],correct:"b",
        expl:"<code>&lt;em&gt;</code> = emphase semantique. <code>&lt;i&gt;</code> = stylistique."},
      {q:"<code>target=\"_blank\"</code> doit etre accompagne de :",opts:["<code>rel=\"new\"</code>","<code>rel=\"noopener\"</code>","<code>onclick</code>","Rien"],correct:"b",
        expl:"<code>noopener</code> empeche la faille tabnabbing."},
      {q:"Liste numerotee : quelle balise ?",opts:["<code>&lt;ul&gt;</code>","<code>&lt;ol&gt;</code>","<code>&lt;dl&gt;</code>","<code>&lt;list&gt;</code>"],correct:"b",
        expl:"<code>&lt;ol&gt;</code> = Ordered List."},
      {q:"Pour commencer une <code>&lt;ol&gt;</code> a 10 :",opts:["<code>begin=\"10\"</code>","<code>start=\"10\"</code>","<code>from=\"10\"</code>","<code>index=\"10\"</code>"],correct:"b",
        expl:"<code>&lt;ol start=\"10\"&gt;</code>"},
      {q:"Pour citer une oeuvre (titre de film, livre) :",opts:["<code>&lt;quote&gt;</code>","<code>&lt;cite&gt;</code>","<code>&lt;q&gt;</code>","<code>&lt;ref&gt;</code>"],correct:"b",
        expl:"<code>&lt;cite&gt;</code> pour titres d'oeuvres. <code>&lt;q&gt;</code> pour citation inline. <code>&lt;blockquote&gt;</code> pour citation longue."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Liste de courses",desc:"Liste non ordonnee de 5 articles.",
        sol:"<ul>\n  <li>Pain</li>\n  <li>Lait</li>\n  <li>Oeufs</li>\n  <li>Beurre</li>\n  <li>Sucre</li>\n</ul>"},
      {num:2,diff:"easy",title:"Recette numerotee",desc:"Liste ordonnee de 4 etapes pour faire du the.",
        sol:"<ol>\n  <li>Faire bouillir l'eau</li>\n  <li>Mettre le sachet</li>\n  <li>Verser l'eau</li>\n  <li>Attendre 3 minutes</li>\n</ol>"},
      {num:3,diff:"easy",title:"Mot important",desc:"Phrase avec un mot en gras semantique.",
        sol:"<p>Cette etape est <strong>essentielle</strong>.</p>"},
      {num:4,diff:"easy",title:"Lien externe securise",desc:"Lien vers w3schools.com, nouvel onglet, securise.",
        sol:"<a href=\"https://www.w3schools.com\" target=\"_blank\" rel=\"noopener noreferrer\">W3Schools</a>"},
      {num:5,diff:"medium",title:"Ancre interne",desc:"Lien 'Aller au contact' qui saute vers <h2 id='contact'> plus bas.",
        sol:"<a href=\"#contact\">Aller au contact</a>\n...\n<h2 id=\"contact\">Contact</h2>"},
      {num:6,diff:"medium",title:"Liste imbriquee",desc:"Categorie 'Fruits' avec 3 sous-items.",
        sol:"<ul>\n  <li>Fruits\n    <ul>\n      <li>Pomme</li>\n      <li>Banane</li>\n      <li>Kiwi</li>\n    </ul>\n  </li>\n</ul>"},
      {num:7,diff:"medium",title:"Liste alphabetique",desc:"Liste numerotee qui utilise A, B, C.",
        sol:"<ol type=\"A\">\n  <li>Premier</li>\n  <li>Deuxieme</li>\n  <li>Troisieme</li>\n</ol>"},
      {num:8,diff:"medium",title:"Definitions",desc:"Definir HTML, CSS et JS avec dl/dt/dd.",
        sol:"<dl>\n  <dt>HTML</dt><dd>Structure</dd>\n  <dt>CSS</dt><dd>Style</dd>\n  <dt>JS</dt><dd>Comportement</dd>\n</dl>"},
      {num:9,diff:"medium",title:"Citation longue",desc:"Blockquote avec citation + auteur en footer.",
        sol:"<blockquote>\n  <p>Le code se lit beaucoup plus qu'il ne s'ecrit.</p>\n  <footer>— Robert C. Martin</footer>\n</blockquote>"},
      {num:10,diff:"hard",title:"Lien telephone + email + sms",desc:"3 liens : mailto, tel, sms.",
        sol:"<a href=\"mailto:hello@site.fr\">Email</a>\n<a href=\"tel:+33612345678\">Appeler</a>\n<a href=\"sms:+33612345678\">SMS</a>"},
      {num:11,diff:"hard",title:"Telechargement renomme",desc:"Lien telechargement de invoice.pdf, renomme en facture-2026.pdf.",
        sol:"<a href=\"invoice.pdf\" download=\"facture-2026.pdf\">Telecharger la facture</a>"},
      {num:12,diff:"hard",title:"Liste de courses categorisee",desc:"Liste imbriquee avec 'Fruits' (3 items) et 'Legumes' (3 items), chaque sous-liste numerotee.",
        sol:"<ul>\n  <li>Fruits\n    <ol>\n      <li>Pomme</li>\n      <li>Banane</li>\n      <li>Kiwi</li>\n    </ol>\n  </li>\n  <li>Legumes\n    <ol>\n      <li>Carotte</li>\n      <li>Tomate</li>\n      <li>Salade</li>\n    </ol>\n  </li>\n</ul>"}
    ]
  },

  {id:"day-3",code:"J3",title:"Jour 3 - Images, video, audio",sub:"img, srcset, picture, video, audio, figure",
    why:"Images mal optimisees = sites lents. Maitrise srcset et alt.",
    tags:["images","video","audio","media","responsive"],
    sections:[
      {h:"L'image",
        blocks:[
          {code:"<!-- Image simple -->\n<img src=\"photo.jpg\" alt=\"Description\" width=\"600\" height=\"400\">\n\n<!-- Lazy loading (chargement differe) -->\n<img src=\"photo.jpg\" alt=\"...\" loading=\"lazy\" width=\"600\" height=\"400\">\n\n<!-- Image responsive : srcset + sizes -->\n<img\n  src=\"photo-800.jpg\"\n  srcset=\"photo-400.jpg 400w,\n          photo-800.jpg 800w,\n          photo-1600.jpg 1600w\"\n  sizes=\"(max-width: 600px) 400px, 800px\"\n  alt=\"Coucher de soleil\"\n  loading=\"lazy\">"},
          {tip:"Toujours mettre <code>width</code> + <code>height</code> : evite le saut de mise en page (Cumulative Layout Shift) quand l'image charge."},
          {warn:"<code>alt</code> est OBLIGATOIRE. <code>alt=\"\"</code> est OK pour une image purement decorative. Jamais OMETTRE l'attribut."},
          {note:"<code>loading=\"lazy\"</code> = le navigateur ne charge l'image que quand elle approche du viewport. Gros gain de perf sur les pages longues."}
        ]
      },
      {h:"&lt;picture&gt; : art direction & formats modernes",
        blocks:[
          {p:"Permet de servir une IMAGE DIFFERENTE (pas juste resolution differente) selon la taille d'ecran ou le format supporte."},
          {code:"<picture>\n  <!-- WebP en priorite (plus leger) -->\n  <source srcset=\"photo.avif\" type=\"image/avif\">\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <!-- Sur mobile : photo verticale differente -->\n  <source media=\"(max-width: 600px)\" srcset=\"photo-mobile.jpg\">\n  <!-- Fallback universel -->\n  <img src=\"photo.jpg\" alt=\"...\" loading=\"lazy\">\n</picture>"},
          {tip:"AVIF > WebP > JPG en termes de poids. AVIF peut faire -50% vs JPG pour meme qualite."}
        ]
      },
      {h:"Video",
        blocks:[
          {code:"<video controls width=\"640\" poster=\"preview.jpg\" preload=\"metadata\">\n  <source src=\"film.webm\" type=\"video/webm\">\n  <source src=\"film.mp4\" type=\"video/mp4\">\n  <track kind=\"subtitles\" src=\"fr.vtt\" srclang=\"fr\" label=\"Francais\" default>\n  <track kind=\"subtitles\" src=\"en.vtt\" srclang=\"en\" label=\"English\">\n  Ton navigateur ne supporte pas la video.\n</video>"},
          {table:[
            ["Attribut","Effet"],
            ["<code>controls</code>","Affiche les controles natifs"],
            ["<code>autoplay</code>","Demarre automatique (necessite <code>muted</code>)"],
            ["<code>loop</code>","Boucle"],
            ["<code>muted</code>","Sans son"],
            ["<code>poster</code>","Image affichee avant lecture"],
            ["<code>preload</code>","none | metadata | auto"],
            ["<code>playsinline</code>","Pas de plein ecran auto sur iOS"]
          ]},
          {tip:"Pour autoplay : <code>autoplay muted playsinline</code> ensemble. Sans <code>muted</code>, les navigateurs bloquent."}
        ]
      },
      {h:"Audio",
        blocks:[
          {code:"<audio controls preload=\"metadata\">\n  <source src=\"musique.ogg\" type=\"audio/ogg\">\n  <source src=\"musique.mp3\" type=\"audio/mpeg\">\n  Ton navigateur ne supporte pas l'audio.\n</audio>"}
        ]
      },
      {h:"&lt;figure&gt; et &lt;figcaption&gt;",
        blocks:[
          {p:"Pour grouper une image (ou code, video, etc.) avec sa LEGENDE."},
          {code:"<figure>\n  <img src=\"graph.png\" alt=\"Graphique evolution\">\n  <figcaption>Fig. 1 — Evolution du CA en 2026.</figcaption>\n</figure>\n\n<figure>\n  <pre><code>const x = 42;</code></pre>\n  <figcaption>Listing 1 — Declaration de variable.</figcaption>\n</figure>"}
        ]
      }
    ],
    quiz:[
      {q:"L'attribut <code>alt</code> sert a :",opts:["Le style","L'accessibilite et le SEO","Renommer le fichier","Cacher l'image"],correct:"b",
        expl:"<code>alt</code> decrit l'image pour les lecteurs d'ecran et apparait si l'image ne charge pas."},
      {q:"Pour des resolutions differentes selon ecran :",opts:["<code>srcset</code>","<code>multi-src</code>","<code>media</code>","<code>resize</code>"],correct:"a",
        expl:"<code>srcset</code> liste plusieurs sources, le navigateur choisit la meilleure."},
      {q:"<code>loading=\"lazy\"</code> :",opts:["Cache l'image","Charge l'image seulement quand visible","Compresse","Convertit en webp"],correct:"b",
        expl:"Lazy loading = le navigateur attend que l'image approche du viewport pour la telecharger."},
      {q:"Pour qu'une video autoplay sans son sur mobile :",opts:["<code>autoplay</code>","<code>autoplay muted</code>","<code>play</code>","<code>autoplay sound=\"off\"</code>"],correct:"b",
        expl:"Sans <code>muted</code>, les navigateurs bloquent l'autoplay (anti-spam audio)."},
      {q:"Pour grouper une image avec une legende :",opts:["<code>&lt;caption&gt;</code>","<code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code>","<code>&lt;img caption=\"\"&gt;</code>","<code>&lt;label&gt;</code>"],correct:"b",
        expl:"<code>&lt;figure&gt;</code> = element + <code>&lt;figcaption&gt;</code> = legende."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Image basique",desc:"Image chat.jpg avec dimensions et alt.",
        sol:"<img src=\"chat.jpg\" alt=\"Un chat noir\" width=\"300\" height=\"200\">"},
      {num:2,diff:"easy",title:"Image lazy",desc:"Meme image avec lazy loading.",
        sol:"<img src=\"chat.jpg\" alt=\"Un chat noir\" width=\"300\" height=\"200\" loading=\"lazy\">"},
      {num:3,diff:"easy",title:"Image decorative",desc:"Image decorative (separateur) avec alt vide.",
        sol:"<img src=\"separator.svg\" alt=\"\" aria-hidden=\"true\">"},
      {num:4,diff:"easy",title:"Video MP4",desc:"Video locale avec controles, fallback texte.",
        sol:"<video controls width=\"640\">\n  <source src=\"film.mp4\" type=\"video/mp4\">\n  Pas de support video.\n</video>"},
      {num:5,diff:"medium",title:"Srcset 3 tailles",desc:"Image responsive avec 3 tailles (400, 800, 1600).",
        sol:"<img src=\"photo-800.jpg\"\n  srcset=\"photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w\"\n  sizes=\"(max-width: 600px) 400px, 800px\"\n  alt=\"Photo\">"},
      {num:6,diff:"medium",title:"Picture WebP",desc:"WebP si supporte, sinon JPG.",
        sol:"<picture>\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"Photo\" loading=\"lazy\">\n</picture>"},
      {num:7,diff:"medium",title:"Figure avec legende",desc:"Image graph.png dans une figure avec legende 'Fig. 1 — CA 2026'.",
        sol:"<figure>\n  <img src=\"graph.png\" alt=\"Graphique CA\">\n  <figcaption>Fig. 1 — CA 2026.</figcaption>\n</figure>"},
      {num:8,diff:"medium",title:"Audio 2 formats",desc:"Audio OGG + MP3 avec controles.",
        sol:"<audio controls>\n  <source src=\"track.ogg\" type=\"audio/ogg\">\n  <source src=\"track.mp3\" type=\"audio/mpeg\">\n</audio>"},
      {num:9,diff:"hard",title:"Video avec sous-titres",desc:"Video MP4 avec sous-titres FR par defaut + EN.",
        sol:"<video controls width=\"640\" poster=\"preview.jpg\">\n  <source src=\"film.mp4\" type=\"video/mp4\">\n  <track kind=\"subtitles\" src=\"fr.vtt\" srclang=\"fr\" label=\"Francais\" default>\n  <track kind=\"subtitles\" src=\"en.vtt\" srclang=\"en\" label=\"English\">\n</video>"},
      {num:10,diff:"hard",title:"Picture art direction",desc:"Picture qui sert image carree sur mobile, panorama sur desktop.",
        sol:"<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"carre.jpg\">\n  <source media=\"(min-width: 601px)\" srcset=\"panorama.jpg\">\n  <img src=\"panorama.jpg\" alt=\"Paysage\">\n</picture>"},
      {num:11,diff:"hard",title:"Video bg muet auto",desc:"Video en arriere-plan : autoplay, muet, en boucle, sans controles.",
        sol:"<video autoplay muted loop playsinline width=\"100%\">\n  <source src=\"bg.mp4\" type=\"video/mp4\">\n</video>"}
    ]
  },

  {id:"day-4",code:"J4",title:"Jour 4 - Tableaux & blocs",sub:"table, thead, tbody, scope, div, span",
    why:"Tableaux pour les donnees tabulaires. Jamais pour la mise en page.",
    tags:["table","div","span","block","inline"],
    sections:[
      {h:"Tableaux : structure complete",
        blocks:[
          {code:"<table>\n  <caption>Notes du trimestre</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Eleve</th>\n      <th scope=\"col\">Math</th>\n      <th scope=\"col\">FR</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Alice</th>\n      <td>15</td>\n      <td>17</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Bob</th>\n      <td>12</td>\n      <td>14</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\">Moyenne</th>\n      <td>13.5</td>\n      <td>15.5</td>\n    </tr>\n  </tfoot>\n</table>"},
          {tip:"<code>scope=\"col\"</code> sur en-tetes de colonne, <code>scope=\"row\"</code> sur en-tetes de ligne. Crucial pour l'accessibilite."},
          {bad:"Ne JAMAIS utiliser <code>&lt;table&gt;</code> pour la mise en page. On faisait ca dans les annees 2000, c'etait une catastrophe (responsive impossible, lecteur d'ecran perdu)."}
        ]
      },
      {h:"colspan, rowspan",
        blocks:[
          {code:"<table>\n  <tr>\n    <th colspan=\"2\">Sciences</th>\n    <th>Langues</th>\n  </tr>\n  <tr>\n    <td>Math</td>\n    <td>Physique</td>\n    <td rowspan=\"2\">FR</td>\n  </tr>\n  <tr>\n    <td>Chimie</td>\n    <td>Bio</td>\n  </tr>\n</table>"},
          {note:"<code>colspan</code> = fusion HORIZONTALE. <code>rowspan</code> = fusion VERTICALE."}
        ]
      },
      {h:"div vs span",
        blocks:[
          {table:[
            ["Balise","Type","Usage"],
            ["<code>&lt;div&gt;</code>","Block","Regrouper une SECTION (prend toute la largeur)"],
            ["<code>&lt;span&gt;</code>","Inline","Cibler un MORCEAU dans du texte (juste sa largeur)"]
          ]},
          {code:"<!-- block : prend toute la ligne -->\n<div class=\"alerte\">\n  <p>Attention : erreur critique detectee.</p>\n</div>\n\n<!-- inline : juste la place du contenu -->\n<p>Texte normal avec un <span class=\"rouge\">mot rouge</span> au milieu.</p>"},
          {tip:"Utilise <code>&lt;div&gt;</code> seulement quand AUCUNE autre balise semantique ne convient (section, article, header, etc.)."}
        ]
      },
      {h:"Block vs inline",
        blocks:[
          {table:[
            ["Block","Inline"],
            ["div, p, h1-h6","span, a, strong, em"],
            ["ul, ol, li","img, code, kbd"],
            ["header, footer","label, input"],
            ["section, article","mark, sub, sup"],
            ["table, form","time, abbr"]
          ]},
          {note:"<code>display: inline-block</code> en CSS combine les 2 : sur la meme ligne mais accepte width/height."}
        ]
      }
    ],
    quiz:[
      {q:"Pour fusionner 2 colonnes :",opts:["<code>merge=\"2\"</code>","<code>colspan=\"2\"</code>","<code>span-cols=\"2\"</code>","<code>cols=\"2\"</code>"],correct:"b",
        expl:"<code>colspan=\"N\"</code> sur un <code>td</code> ou <code>th</code>."},
      {q:"<code>&lt;span&gt;</code> est :",opts:["Block","Inline","Flex","Grid"],correct:"b",
        expl:"<code>span</code> est inline."},
      {q:"<code>&lt;caption&gt;</code> doit etre :",opts:["Apres tbody","Premier enfant de table","Dans thead","N'importe ou"],correct:"b",
        expl:"<code>&lt;caption&gt;</code> doit etre le PREMIER enfant de <code>&lt;table&gt;</code>."},
      {q:"<code>scope=\"row\"</code> sur un th signifie :",opts:["En-tete de colonne","En-tete de ligne","Cellule normale","Footer"],correct:"b",
        expl:"<code>scope=\"row\"</code> = ce th est l'en-tete de toute la ligne."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Tableau 2x2",desc:"Tableau Nom/Age avec 2 lignes.",
        sol:"<table>\n  <tr><th>Nom</th><th>Age</th></tr>\n  <tr><td>Alice</td><td>28</td></tr>\n  <tr><td>Bob</td><td>34</td></tr>\n</table>"},
      {num:2,diff:"easy",title:"Span dans p",desc:"Phrase avec un mot en rouge via span.",
        sol:"<p>Le mot <span class=\"rouge\">important</span> est en rouge.</p>"},
      {num:3,diff:"easy",title:"Div container",desc:"Div container avec 2 paragraphes a l'interieur.",
        sol:"<div class=\"container\">\n  <p>Premier paragraphe.</p>\n  <p>Deuxieme paragraphe.</p>\n</div>"},
      {num:4,diff:"medium",title:"Tableau structure",desc:"Tableau de resultats avec thead, tbody, caption.",
        sol:"<table>\n  <caption>Resultats</caption>\n  <thead>\n    <tr><th>Equipe</th><th>Score</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>A</td><td>3</td></tr>\n    <tr><td>B</td><td>1</td></tr>\n  </tbody>\n</table>"},
      {num:5,diff:"medium",title:"Colspan",desc:"Header 'Sciences' qui couvre 2 colonnes (Math + Physique).",
        sol:"<table>\n  <tr>\n    <th colspan=\"2\">Sciences</th>\n  </tr>\n  <tr>\n    <th>Math</th>\n    <th>Physique</th>\n  </tr>\n</table>"},
      {num:6,diff:"medium",title:"Tableau accessible",desc:"Tableau produit/quantite/total avec scope sur les TH.",
        sol:"<table>\n  <thead>\n    <tr>\n      <th scope=\"col\">Produit</th>\n      <th scope=\"col\">Quantite</th>\n      <th scope=\"col\">Total</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Pomme</th>\n      <td>3</td>\n      <td>1.50</td>\n    </tr>\n  </tbody>\n</table>"},
      {num:7,diff:"hard",title:"Rowspan vertical",desc:"Tableau ou 'FR' couvre 2 lignes en rowspan.",
        sol:"<table>\n  <tr><th>Matiere</th><th>Note S1</th><th>Note S2</th></tr>\n  <tr><td rowspan=\"2\">FR</td><td>15</td><td>17</td></tr>\n  <tr><td>14</td><td>16</td></tr>\n</table>"},
      {num:8,diff:"hard",title:"Tableau complet tfoot",desc:"Tableau avec thead, tbody, tfoot pour la moyenne en bas.",
        sol:"<table>\n  <caption>Notes</caption>\n  <thead>\n    <tr><th>Eleve</th><th>Note</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>15</td></tr>\n    <tr><td>Bob</td><td>12</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th>Moyenne</th><td>13.5</td></tr>\n  </tfoot>\n</table>"}
    ]
  },

  {id:"day-5",code:"J5",title:"Jour 5 - Formulaires & validation",sub:"form, input, label, select, validation native",
    why:"Le pont entre utilisateur et serveur. Mal fait = bug + faille securite.",
    tags:["forms","input","validation","accessibility"],
    sections:[
      {h:"Formulaire minimal",
        blocks:[
          {code:"<form action=\"/contact\" method=\"POST\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n\n  <label for=\"msg\">Message</label>\n  <textarea id=\"msg\" name=\"message\" rows=\"5\" required></textarea>\n\n  <button type=\"submit\">Envoyer</button>\n</form>"},
          {tip:"Chaque <code>input</code> doit avoir un <code>label</code> avec <code>for=\"id\"</code>. Accessibilite niveau 1, et cliquer le label active le champ."},
          {warn:"<code>name=\"...\"</code> est ce que le serveur recoit. Sans <code>name</code>, le champ N'EST PAS envoye."}
        ]
      },
      {h:"Tous les types d'input",
        blocks:[
          {table:[
            ["type","Usage"],
            ["<code>text</code>","Texte libre (defaut)"],
            ["<code>email</code>","Valide format @"],
            ["<code>password</code>","Masque les caracteres"],
            ["<code>number</code>","Numerique avec min/max/step"],
            ["<code>tel</code>","Telephone (clavier mobile adapte)"],
            ["<code>url</code>","Valide format http(s)://"],
            ["<code>search</code>","Avec bouton clear"],
            ["<code>date</code>","Picker date natif"],
            ["<code>time</code>","Picker heure"],
            ["<code>datetime-local</code>","Date + heure"],
            ["<code>month</code>","Mois/annee"],
            ["<code>week</code>","Numero de semaine"],
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
          {code:"<input type=\"email\" required>\n<input type=\"text\" required minlength=\"3\" maxlength=\"50\">\n<input type=\"number\" min=\"0\" max=\"100\" step=\"5\">\n<input type=\"text\" pattern=\"[A-Za-z]{2,}\" title=\"Lettres uniquement, min 2\">\n<input type=\"url\" required>\n<input type=\"date\" min=\"2026-01-01\" max=\"2026-12-31\">"},
          {tip:"<code>pattern</code> accepte une regex. <code>title</code> = message affiche au survol et en cas d'erreur."},
          {note:"Pour styler les erreurs : <code>:invalid</code>, <code>:valid</code>, <code>:required</code>, <code>:user-invalid</code> (n'agit qu'apres interaction)."}
        ]
      },
      {h:"Select et textarea",
        blocks:[
          {code:"<label for=\"pays\">Pays</label>\n<select id=\"pays\" name=\"pays\" required>\n  <option value=\"\">-- Choisir --</option>\n  <optgroup label=\"Europe\">\n    <option value=\"fr\">France</option>\n    <option value=\"be\">Belgique</option>\n    <option value=\"ch\" selected>Suisse</option>\n  </optgroup>\n  <optgroup label=\"Amerique\">\n    <option value=\"ca\">Canada</option>\n    <option value=\"us\">USA</option>\n  </optgroup>\n</select>\n\n<!-- Multi-select -->\n<select name=\"hobbies\" multiple>\n  <option>Sport</option>\n  <option>Musique</option>\n</select>\n\n<textarea name=\"bio\" rows=\"4\" cols=\"40\" placeholder=\"Parle-nous\" maxlength=\"500\"></textarea>"}
        ]
      },
      {h:"Datalist (autocomplete)",
        blocks:[
          {code:"<label for=\"navigateur\">Navigateur favori</label>\n<input list=\"browsers\" id=\"navigateur\" name=\"navigateur\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n  <option value=\"Edge\">\n</datalist>"},
          {tip:"<code>&lt;datalist&gt;</code> = autocomplete propose mais user peut taper autre chose. Contrairement a <code>&lt;select&gt;</code> qui force un choix."}
        ]
      },
      {h:"Fieldset / Legend / Accessibility",
        blocks:[
          {code:"<form>\n  <fieldset>\n    <legend>Identite</legend>\n    <label for=\"n\">Nom</label>\n    <input type=\"text\" id=\"n\" name=\"nom\" required>\n    <label for=\"p\">Prenom</label>\n    <input type=\"text\" id=\"p\" name=\"prenom\" required>\n  </fieldset>\n\n  <fieldset>\n    <legend>Contact</legend>\n    <label for=\"e\">Email</label>\n    <input type=\"email\" id=\"e\" name=\"email\" required\n           aria-describedby=\"email-help\">\n    <small id=\"email-help\">On ne partagera pas ton email.</small>\n  </fieldset>\n\n  <button type=\"submit\">Valider</button>\n</form>"}
        ]
      }
    ],
    quiz:[
      {q:"Pour cliquer le label = activer le champ :",opts:["<code>label[for]=input[id]</code>","<code>label[name]=input[name]</code>","Aucun lien possible","Mettre l'input dans le label"],correct:"a",
        expl:"<code>for</code> doit matcher <code>id</code>."},
      {q:"Quel type rend l'email obligatoire et valide ?",opts:["<code>type=\"email\" required</code>","<code>type=\"text\" pattern=\"email\"</code>","<code>type=\"required\"</code>","<code>type=\"validate\"</code>"],correct:"a",
        expl:"<code>type=\"email\"</code> valide le format, <code>required</code> rend obligatoire."},
      {q:"Boutons radio exclusifs partagent :",opts:["<code>id</code>","<code>name</code>","<code>class</code>","<code>value</code>"],correct:"b",
        expl:"Meme <code>name</code> = groupe radio."},
      {q:"Sans attribut <code>name</code> :",opts:["L'input plante","L'input n'est pas envoye au serveur","JS ne peut pas le lire","Erreur HTML"],correct:"b",
        expl:"Sans name, le serveur n'a aucune cle pour ce champ."},
      {q:"Pour proposer une liste mais permettre du texte libre :",opts:["<code>&lt;select&gt;</code>","<code>&lt;datalist&gt;</code>","<code>&lt;options&gt;</code>","<code>&lt;combobox&gt;</code>"],correct:"b",
        expl:"<code>&lt;datalist&gt;</code> = autocomplete non force."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Form contact basique",desc:"Nom + email + message + bouton envoyer.",
        sol:"<form action=\"/contact\" method=\"POST\">\n  <label for=\"nom\">Nom</label>\n  <input type=\"text\" id=\"nom\" name=\"nom\" required>\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n  <label for=\"msg\">Message</label>\n  <textarea id=\"msg\" name=\"message\" required></textarea>\n  <button type=\"submit\">Envoyer</button>\n</form>"},
      {num:2,diff:"easy",title:"Mot de passe",desc:"Champ password obligatoire, min 8 caracteres.",
        sol:"<input type=\"password\" name=\"pass\" minlength=\"8\" required>"},
      {num:3,diff:"easy",title:"Nombre 1-100",desc:"Champ numerique entre 1 et 100, pas de 5.",
        sol:"<input type=\"number\" name=\"score\" min=\"1\" max=\"100\" step=\"5\">"},
      {num:4,diff:"easy",title:"Date de naissance",desc:"Date picker pour date de naissance.",
        sol:"<label for=\"dob\">Date de naissance</label>\n<input type=\"date\" id=\"dob\" name=\"dob\" required>"},
      {num:5,diff:"medium",title:"Select pays",desc:"Select avec 3 pays, France selectionne par defaut.",
        sol:"<select name=\"pays\">\n  <option value=\"fr\" selected>France</option>\n  <option value=\"be\">Belgique</option>\n  <option value=\"ch\">Suisse</option>\n</select>"},
      {num:6,diff:"medium",title:"Optgroup",desc:"Select avec 2 groupes (Europe / Amerique).",
        sol:"<select name=\"pays\">\n  <optgroup label=\"Europe\">\n    <option>France</option>\n    <option>Belgique</option>\n  </optgroup>\n  <optgroup label=\"Amerique\">\n    <option>Canada</option>\n    <option>USA</option>\n  </optgroup>\n</select>"},
      {num:7,diff:"medium",title:"Radio sexe",desc:"3 boutons radio (homme/femme/autre) avec meme name.",
        sol:"<label><input type=\"radio\" name=\"sexe\" value=\"h\"> Homme</label>\n<label><input type=\"radio\" name=\"sexe\" value=\"f\"> Femme</label>\n<label><input type=\"radio\" name=\"sexe\" value=\"x\"> Autre</label>"},
      {num:8,diff:"medium",title:"Checkbox conditions",desc:"Checkbox 'J'accepte les conditions', obligatoire.",
        sol:"<label>\n  <input type=\"checkbox\" name=\"cgu\" required> J'accepte les conditions\n</label>"},
      {num:9,diff:"medium",title:"Pattern code postal",desc:"Code postal francais (5 chiffres).",
        sol:"<input type=\"text\" name=\"cp\" pattern=\"[0-9]{5}\" title=\"5 chiffres\" required>"},
      {num:10,diff:"hard",title:"Upload restreint",desc:"Upload image JPG/PNG, 1 fichier max.",
        sol:"<input type=\"file\" name=\"photo\" accept=\"image/jpeg, image/png\" required>"},
      {num:11,diff:"hard",title:"Upload multiple",desc:"Upload multi-fichiers (que des images).",
        sol:"<input type=\"file\" name=\"photos[]\" accept=\"image/*\" multiple>"},
      {num:12,diff:"hard",title:"Form structure",desc:"Form avec fieldset/legend pour Identite et Contact.",
        sol:"<form>\n  <fieldset>\n    <legend>Identite</legend>\n    <label for=\"n\">Nom</label>\n    <input type=\"text\" id=\"n\" name=\"nom\" required>\n  </fieldset>\n  <fieldset>\n    <legend>Contact</legend>\n    <label for=\"e\">Email</label>\n    <input type=\"email\" id=\"e\" name=\"email\" required>\n  </fieldset>\n  <button type=\"submit\">OK</button>\n</form>"},
      {num:13,diff:"hard",title:"Datalist autocomplete",desc:"Input avec datalist proposant 4 navigateurs.",
        sol:"<input list=\"navigateurs\" name=\"nav\">\n<datalist id=\"navigateurs\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n  <option value=\"Edge\">\n</datalist>"}
    ]
  },

  {id:"day-6",code:"J6",title:"Jour 6 - Semantique HTML5 & SEO",sub:"header, nav, main, article, section, aside, footer, meta",
    why:"Pour Google et les lecteurs d'ecran. Meilleur SEO + accessibilite gratuitement.",
    tags:["semantic","SEO","structure","accessibility"],
    sections:[
      {h:"Les balises semantiques",
        blocks:[
          {p:"Au lieu de <code>&lt;div class=\"header\"&gt;</code>, utilise <code>&lt;header&gt;</code>. Meme rendu, mais Google et les lecteurs d'ecran comprennent."},
          {code:"<body>\n  <header>\n    <h1>Mon Blog</h1>\n    <nav>\n      <ul>\n        <li><a href=\"/\">Accueil</a></li>\n        <li><a href=\"/articles\">Articles</a></li>\n        <li><a href=\"/contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h2>Titre de l'article</h2>\n        <time datetime=\"2026-05-25\">25 mai 2026</time>\n      </header>\n      <p>Contenu...</p>\n      <section>\n        <h3>Sous-section</h3>\n      </section>\n      <footer>Par <strong>Chadi</strong></footer>\n    </article>\n\n    <aside>\n      <h3>A lire aussi</h3>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Chadi Khoder</p>\n  </footer>\n</body>"}
        ]
      },
      {h:"Quand utiliser chaque balise",
        blocks:[
          {table:[
            ["Balise","Usage"],
            ["<code>&lt;header&gt;</code>","En-tete (peut etre dans body OU dans article)"],
            ["<code>&lt;nav&gt;</code>","Liens de navigation PRINCIPAUX"],
            ["<code>&lt;main&gt;</code>","Contenu UNIQUE de la page (1 par page)"],
            ["<code>&lt;article&gt;</code>","Contenu autonome (post de blog, produit)"],
            ["<code>&lt;section&gt;</code>","Section thematique (avec titre)"],
            ["<code>&lt;aside&gt;</code>","Contenu lateral (sidebar, pub, suggestions)"],
            ["<code>&lt;footer&gt;</code>","Pied de page (peut etre dans body OU article)"],
            ["<code>&lt;figure&gt;</code>","Image + legende"],
            ["<code>&lt;time&gt;</code>","Date/heure machine-readable"],
            ["<code>&lt;address&gt;</code>","Contact"]
          ]},
          {warn:"<code>&lt;section&gt;</code> sans titre = utilise <code>&lt;div&gt;</code> a la place."}
        ]
      },
      {h:"Meta tags pour le SEO",
        blocks:[
          {code:"<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <title>Titre de la page - 60 caracteres max</title>\n  <meta name=\"description\" content=\"Resume 150-160 caracteres affiche dans Google.\">\n  <meta name=\"author\" content=\"Chadi Khoder\">\n  <meta name=\"robots\" content=\"index, follow\">\n  <link rel=\"canonical\" href=\"https://site.fr/page\">\n\n  <!-- Open Graph (Facebook, LinkedIn) -->\n  <meta property=\"og:type\" content=\"article\">\n  <meta property=\"og:title\" content=\"Titre social\">\n  <meta property=\"og:description\" content=\"Description sociale\">\n  <meta property=\"og:image\" content=\"https://site.fr/preview.jpg\">\n  <meta property=\"og:url\" content=\"https://site.fr/page\">\n\n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"Titre Twitter\">\n  <meta name=\"twitter:image\" content=\"https://site.fr/preview.jpg\">\n</head>"},
          {tip:"<code>title</code> et <code>meta description</code> apparaissent DIRECTEMENT dans les resultats Google. C'est ce que le user lit avant de cliquer."}
        ]
      },
      {h:"<code>&lt;time&gt;</code> et formats",
        blocks:[
          {code:"<time datetime=\"2026-05-25\">25 mai 2026</time>\n<time datetime=\"2026-05-25T14:30\">25 mai a 14h30</time>\n<time datetime=\"PT2H30M\">2h30</time>  <!-- duree -->\n<time datetime=\"2026-W21\">Semaine 21</time>"},
          {note:"L'attribut <code>datetime</code> est lu par les moteurs et l'agenda. Le contenu visible peut etre formate humain."}
        ]
      }
    ],
    quiz:[
      {q:"<code>&lt;main&gt;</code> peut apparaitre :",opts:["1 fois","2 fois","Autant que possible","Aucune limite"],correct:"a",
        expl:"Un seul <code>main</code> par page."},
      {q:"Pour la navigation principale :",opts:["<code>&lt;div class=\"menu\"&gt;</code>","<code>&lt;ul class=\"nav\"&gt;</code>","<code>&lt;nav&gt;</code>","<code>&lt;menu&gt;</code>"],correct:"c",
        expl:"<code>&lt;nav&gt;</code> est la balise semantique."},
      {q:"Article vs section :",opts:["Identique","Article = autonome, Section = thematique","Article = inline","Section = obsolete"],correct:"b",
        expl:"<code>&lt;article&gt;</code> = contenu independant (post). <code>&lt;section&gt;</code> = section thematique."},
      {q:"<code>rel=\"canonical\"</code> sert a :",opts:["Lien favori","Eviter les doublons SEO","Bloquer Google","Forcer le https"],correct:"b",
        expl:"Indique l'URL canonique quand plusieurs URLs servent le meme contenu."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Squelette semantique",desc:"Page avec header, main, footer.",
        sol:"<body>\n  <header><h1>Mon site</h1></header>\n  <main>\n    <p>Contenu</p>\n  </main>\n  <footer>&copy; 2026</footer>\n</body>"},
      {num:2,diff:"easy",title:"Time machine readable",desc:"Date '25 mai 2026' avec attribut datetime.",
        sol:"<time datetime=\"2026-05-25\">25 mai 2026</time>"},
      {num:3,diff:"medium",title:"Nav 4 liens",desc:"Barre de navigation semantique.",
        sol:"<nav>\n  <ul>\n    <li><a href=\"/\">Accueil</a></li>\n    <li><a href=\"/blog\">Blog</a></li>\n    <li><a href=\"/about\">A propos</a></li>\n    <li><a href=\"/contact\">Contact</a></li>\n  </ul>\n</nav>"},
      {num:4,diff:"medium",title:"Article de blog",desc:"Article avec header (titre + date), contenu, footer (auteur).",
        sol:"<article>\n  <header>\n    <h2>Mon titre</h2>\n    <time datetime=\"2026-05-25\">25 mai 2026</time>\n  </header>\n  <p>Contenu...</p>\n  <footer>Par <strong>Chadi</strong></footer>\n</article>"},
      {num:5,diff:"medium",title:"Address contact",desc:"Bloc address avec email et tel.",
        sol:"<address>\n  Contact : <a href=\"mailto:hello@chadi.fr\">hello@chadi.fr</a><br>\n  Tel : <a href=\"tel:+33612345678\">06 12 34 56 78</a>\n</address>"},
      {num:6,diff:"hard",title:"Layout complet",desc:"Layout : header avec nav, main avec 2 articles + aside, footer.",
        sol:"<body>\n  <header>\n    <h1>Blog</h1>\n    <nav>\n      <a href=\"/\">Accueil</a>\n      <a href=\"/posts\">Posts</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>Article 1</h2>\n      <p>...</p>\n    </article>\n    <article>\n      <h2>Article 2</h2>\n      <p>...</p>\n    </article>\n    <aside>\n      <h3>A lire aussi</h3>\n    </aside>\n  </main>\n  <footer>&copy; 2026</footer>\n</body>"},
      {num:7,diff:"hard",title:"Meta SEO complete",desc:"Head avec title, description, viewport, og:title, og:description, og:image.",
        sol:"<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Mon Blog - articles tech</title>\n  <meta name=\"description\" content=\"Blog sur le dev web avec tutos HTML, CSS, JS.\">\n  <meta name=\"author\" content=\"Chadi Khoder\">\n  <meta property=\"og:title\" content=\"Mon Blog\">\n  <meta property=\"og:description\" content=\"Tutos dev web\">\n  <meta property=\"og:image\" content=\"https://blog.fr/preview.jpg\">\n  <link rel=\"canonical\" href=\"https://blog.fr\">\n</head>"}
    ]
  },

  {id:"day-7",code:"J7",title:"Jour 7 - Accessibilite & projet final",sub:"ARIA, focus, alt, skip links, contrast, projet portfolio",
    why:"15% des utilisateurs ont un handicap. Site accessible = + d'utilisateurs + bon karma + bon SEO.",
    tags:["accessibility","ARIA","WCAG","project"],
    sections:[
      {h:"Les bases ARIA",
        blocks:[
          {p:"ARIA = Accessible Rich Internet Applications. Attributs qui INFORMENT les lecteurs d'ecran quand le HTML pur ne suffit pas."},
          {code:"<!-- Role explicite (utiliser si pas de balise semantique) -->\n<div role=\"button\" tabindex=\"0\" onclick=\"...\">Pseudo-bouton</div>\n\n<!-- Label invisible pour l'utilisateur mais lu par les screen readers -->\n<button aria-label=\"Fermer la fenetre\">×</button>\n\n<!-- Description supplementaire -->\n<input aria-describedby=\"hint-1\">\n<span id=\"hint-1\">Minimum 8 caracteres</span>\n\n<!-- Etats dynamiques -->\n<button aria-pressed=\"true\">Gras</button>\n<div aria-expanded=\"false\" id=\"menu\">...</div>\n<input aria-invalid=\"true\">\n<div aria-hidden=\"true\">Decoratif</div>\n\n<!-- Live regions (annonces dynamiques) -->\n<div aria-live=\"polite\">Statut sauvegarde</div>\n<div role=\"alert\">Erreur critique</div>"},
          {tip:"REGLE D'OR : utilise du HTML semantique avant d'ajouter de l'ARIA. <code>&lt;button&gt;</code> est mieux que <code>&lt;div role=\"button\"&gt;</code>."}
        ]
      },
      {h:"Focus et navigation clavier",
        blocks:[
          {code:"<!-- Ordre de tabulation -->\n<input tabindex=\"1\">    <!-- focus en 1er (ANTI-PATTERN) -->\n<input tabindex=\"0\">    <!-- ordre normal du DOM -->\n<input tabindex=\"-1\">   <!-- skippe par Tab mais focusable par .focus() -->\n\n<!-- Skip link (lien d'evitement) -->\n<a href=\"#main\" class=\"skip-link\">Aller au contenu</a>\n...\n<main id=\"main\" tabindex=\"-1\">...</main>"},
          {bad:"Ne JAMAIS faire <code>outline: none</code> en CSS sans alternative visible (<code>:focus-visible</code> avec box-shadow par ex.). Tu casses la navigation au clavier."}
        ]
      },
      {h:"Cacher visuellement mais garder accessible",
        blocks:[
          {code:"/* La technique sr-only (screen reader only) */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}"},
          {code:"<!-- Bouton burger avec label invisible mais accessible -->\n<button>\n  <svg>...</svg>\n  <span class=\"sr-only\">Ouvrir le menu</span>\n</button>"}
        ]
      },
      {h:"WCAG quick wins",
        blocks:[
          {list:[
            "Contraste texte/fond &ge; 4.5:1 (test sur webaim.org/resources/contrastchecker)",
            "Taille texte minimum 16px (et zoom 200% sans casser)",
            "Tous les <code>&lt;img&gt;</code> ont un <code>alt</code>",
            "Tous les <code>&lt;input&gt;</code> ont un <code>&lt;label&gt;</code>",
            "Navigation possible AU CLAVIER (Tab, Enter, Esc)",
            "Focus toujours visible",
            "Skip link en haut de page",
            "Une seule <code>&lt;h1&gt;</code> par page, hierarchie h1 → h2 → h3 sans saut",
            "<code>lang=\"fr\"</code> sur <code>&lt;html&gt;</code>",
            "Pas d'auto-play audio/video avec son"
          ]}
        ]
      },
      {h:"Projet final : page de portfolio",
        blocks:[
          {p:"Construis une page portfolio respectant TOUT ce qu'on a vu cette semaine :"},
          {list:[
            "<strong>Header</strong> : nom + nav (Accueil, Projets, Contact) + skip link",
            "<strong>Hero</strong> : h1 + photo (alt descriptif) + texte intro",
            "<strong>Projets</strong> : 3 articles avec titre, image, description, lien",
            "<strong>Contact</strong> : formulaire (nom, email, message) avec validation",
            "<strong>Footer</strong> : copyright + reseaux sociaux + address",
            "Meta SEO complets (title, description, og:, canonical)",
            "Validation HTML5 (W3C Validator) sans erreur",
            "Lighthouse accessibility score &ge; 95"
          ]}
        ]
      }
    ],
    quiz:[
      {q:"Pour un bouton icone sans texte visible :",opts:["<code>title=\"Fermer\"</code>","<code>aria-label=\"Fermer\"</code>","<code>alt=\"Fermer\"</code>","<code>name=\"Fermer\"</code>"],correct:"b",
        expl:"<code>aria-label</code> = nom accessible aux lecteurs d'ecran."},
      {q:"<code>tabindex=\"-1\"</code> :",opts:["Inaccessible","Skippe par Tab mais focusable par JS","Avant tous","Apres tous"],correct:"b",
        expl:"Focusable via .focus() mais retire de l'ordre Tab naturel."},
      {q:"Pour cacher visuellement MAIS garder accessible :",opts:["<code>display:none</code>","<code>visibility:hidden</code>","Classe <code>.sr-only</code>","<code>aria-hidden=\"true\"</code>"],correct:"c",
        expl:"<code>display:none</code> et <code>visibility:hidden</code> cachent aussi pour les lecteurs d'ecran. La technique <code>.sr-only</code> (position absolute, 1px etc.) garde l'element lisible."},
      {q:"Contraste minimum WCAG AA :",opts:["2:1","3:1","4.5:1","7:1"],correct:"c",
        expl:"WCAG AA = 4.5:1 pour texte courant, 3:1 pour gros texte. AAA = 7:1."},
      {q:"<code>role=\"alert\"</code> equivaut a :",opts:["<code>aria-live=\"polite\"</code>","<code>aria-live=\"assertive\"</code>","<code>aria-status</code>","<code>aria-error</code>"],correct:"b",
        expl:"Interrompt immediatement le lecteur d'ecran."}
    ],
    exercises:[
      {num:1,diff:"easy",title:"Bouton accessible",desc:"Bouton icone X avec aria-label='Fermer'.",
        sol:"<button aria-label=\"Fermer\">×</button>"},
      {num:2,diff:"easy",title:"Skip link",desc:"Lien d'evitement vers #main.",
        sol:"<a href=\"#main\" class=\"skip-link\">Aller au contenu</a>\n...\n<main id=\"main\">...</main>"},
      {num:3,diff:"easy",title:"Image decorative",desc:"Image purement decorative (un point rouge).",
        sol:"<img src=\"dot.png\" alt=\"\" aria-hidden=\"true\">"},
      {num:4,diff:"easy",title:"Lang attribute",desc:"Document en francais.",
        sol:"<html lang=\"fr\">"},
      {num:5,diff:"medium",title:"Input avec aide",desc:"Champ password avec hint visible lie via aria-describedby.",
        sol:"<label for=\"pwd\">Mot de passe</label>\n<input type=\"password\" id=\"pwd\" aria-describedby=\"pwd-hint\">\n<small id=\"pwd-hint\">8 caracteres minimum</small>"},
      {num:6,diff:"medium",title:"Burger avec sr-only",desc:"Bouton burger avec icone SVG + label invisible.",
        sol:"<button>\n  <svg aria-hidden=\"true\">...</svg>\n  <span class=\"sr-only\">Ouvrir le menu</span>\n</button>"},
      {num:7,diff:"medium",title:"Live region",desc:"Zone qui annonce 'Sauvegarde reussie' aux lecteurs d'ecran.",
        sol:"<div role=\"status\" aria-live=\"polite\">\n  Sauvegarde reussie\n</div>"},
      {num:8,diff:"hard",title:"Accordion accessible",desc:"Bouton qui ouvre/ferme une section avec aria-expanded.",
        sol:"<button aria-expanded=\"false\" aria-controls=\"section1\">\n  Voir plus\n</button>\n<div id=\"section1\" hidden>\n  Contenu cache\n</div>"},
      {num:9,diff:"hard",title:"Page portfolio (squelette)",desc:"Page complete portfolio : skip-link, header+nav, main avec hero+projects+contact, footer.",
        sol:"<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Chadi - Portfolio</title>\n  <meta name=\"description\" content=\"Portfolio de Chadi Khoder, developpeur web.\">\n</head>\n<body>\n  <a href=\"#main\" class=\"skip-link\">Aller au contenu</a>\n  <header>\n    <h1>Chadi Khoder</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#hero\">Accueil</a></li>\n        <li><a href=\"#projects\">Projets</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main id=\"main\">\n    <section id=\"hero\">\n      <h2>Developpeur web</h2>\n      <img src=\"moi.jpg\" alt=\"Photo de Chadi\">\n    </section>\n    <section id=\"projects\">\n      <h2>Projets</h2>\n      <article>\n        <h3>Projet 1</h3>\n        <p>Description...</p>\n      </article>\n    </section>\n    <section id=\"contact\">\n      <h2>Contact</h2>\n      <form>\n        <label for=\"e\">Email</label>\n        <input type=\"email\" id=\"e\" name=\"email\" required>\n        <button type=\"submit\">Envoyer</button>\n      </form>\n    </section>\n  </main>\n  <footer>&copy; 2026 Chadi Khoder</footer>\n</body>\n</html>"}
    ]
  }
];

const GIO = [
  {id:"w3-intro",code:"B1",level:"basic",title:"HTML Intro",sub:"Qu'est-ce que HTML",tags:["intro","basics"],
    sections:[{h:"HTML c'est quoi ?",blocks:[
      {p:"HTML (HyperText Markup Language) structure le contenu d'une page web. Ce n'est PAS un langage de programmation : c'est un langage de balisage."},
      {p:"Les balises decrivent ce qu'est chaque element. Le navigateur lit ces balises et affiche le rendu."},
      {note:"HTML repond a <strong>QUOI</strong>. CSS repond a <strong>COMMENT</strong>. JS repond a <strong>QUAND</strong>."}
    ]}],
    quiz:[{q:"HTML est :",opts:["Langage de programmation","Langage de balisage","Base de donnees","Style"],correct:"b",
      expl:"HyperText Markup Language. Balisage."}]
  },
  {id:"w3-elements",code:"B2",level:"basic",title:"HTML Elements",sub:"Anatomie d'un element",tags:["elements","basics"],
    sections:[{h:"Anatomie",blocks:[
      {code:"<p class=\"intro\">Bonjour</p>\n^   ^              ^   ^\n|   |              |   +-- balise fermante\n|   |              +-- contenu\n|   +-- attribut\n+-- balise ouvrante"},
      {tip:"Element = balise ouvrante + contenu + balise fermante. Les attributs vont dans la balise OUVRANTE."}
    ]}],
    quiz:[{q:"Les attributs sont dans :",opts:["Balise ouvrante","Balise fermante","Contenu","Head"],correct:"a",
      expl:"<code>&lt;p class=\"x\"&gt;...&lt;/p&gt;</code>."}]
  },
  {id:"w3-attributes",code:"B3",level:"basic",title:"HTML Attributes",sub:"id, class, style, title, lang",tags:["attributes","basics"],
    sections:[{h:"Attributs globaux",blocks:[
      {code:"<div id=\"main\" class=\"box big\" lang=\"fr\" title=\"Bulle d'aide\" data-role=\"banner\">\n  Contenu\n</div>"},
      {note:"<code>id</code> = unique. <code>class</code> = repetable. <code>data-*</code> = libre."}
    ]}],
    quiz:[{q:"Quel attribut doit etre unique ?",opts:["<code>class</code>","<code>id</code>","<code>name</code>","<code>style</code>"],correct:"b",
      expl:"<code>id</code> doit etre unique sur la page."}]
  },
  {id:"w3-headings",code:"B4",level:"basic",title:"HTML Headings",sub:"h1 a h6",tags:["headings","basics"],
    sections:[{h:"Hierarchie",blocks:[
      {code:"<h1>Titre principal (un seul par page)</h1>\n<h2>Section</h2>\n<h3>Sous-section</h3>\n<h4>Sous-sous</h4>"},
      {bad:"Ne saute pas de niveau (h1 puis h3). Casse SEO et accessibilite."}
    ]}],
    quiz:[{q:"Combien de niveaux h ?",opts:["3","4","6","Illimite"],correct:"c",
      expl:"De h1 a h6."}]
  },
  {id:"w3-paragraphs",code:"B5",level:"basic",title:"HTML Paragraphs",sub:"p, br, hr, pre",tags:["text","basics"],
    sections:[{h:"Texte de base",blocks:[
      {code:"<p>Paragraphe.</p>\n<p>Avec un<br>saut.</p>\n<hr>\n<pre>\n  Texte preformate\n  avec espaces preserves\n</pre>"}
    ]}],
    quiz:[{q:"<code>&lt;br&gt;</code> fait :",opts:["Nouvelle section","Saut de ligne","Ligne horizontale","Bordure"],correct:"b",
      expl:"<code>br</code> = BReak."}]
  },
  {id:"w3-styles",code:"B6",level:"basic",title:"HTML Inline Styles",sub:"style attribut",tags:["style","basics"],
    sections:[{h:"Inline (a eviter)",blocks:[
      {code:"<p style=\"color: red; font-size: 18px;\">Rouge</p>"},
      {bad:"A eviter en production. Tout dans le CSS externe."}
    ]}],
    quiz:[{q:"Inline style :",opts:["Recommande","A eviter","Plus rapide","Obligatoire"],correct:"b",
      expl:"CSS externe pour la maintenabilite."}]
  },
  {id:"w3-formatting",code:"B7",level:"basic",title:"HTML Formatting",sub:"strong, em, mark, del, ins",tags:["formatting","basics"],
    sections:[{h:"Tags semantiques",blocks:[
      {code:"<strong>Important</strong>\n<em>Emphase</em>\n<mark>Surligne</mark>\n<del>Supprime</del>\n<ins>Ajoute</ins>\n<sub>indice</sub>\n<sup>exposant</sup>\n<kbd>Ctrl</kbd>"}
    ]}],
    quiz:[{q:"Pour important :",opts:["<code>&lt;b&gt;</code>","<code>&lt;strong&gt;</code>","<code>&lt;imp&gt;</code>","<code>&lt;bold&gt;</code>"],correct:"b",
      expl:"<code>strong</code> = important (semantique)."}]
  },
  {id:"w3-links",code:"I1",level:"intermediate",title:"HTML Links",sub:"a, target, rel, download",tags:["links","intermediate"],
    sections:[{h:"Liens en profondeur",blocks:[
      {code:"<a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\">Nouvel onglet securise</a>\n<a href=\"doc.pdf\" download>Telecharger</a>\n<a href=\"doc.pdf\" download=\"facture.pdf\">DL renomme</a>\n<a href=\"mailto:hi@x.fr?subject=Bonjour\">Email</a>\n<a href=\"tel:+33612345678\">Appel</a>\n<a href=\"#section\">Ancre interne</a>"}
    ]}],
    quiz:[{q:"<code>download</code> force :",opts:["Ouverture navigateur","Telechargement","Partage","Rien"],correct:"b",
      expl:"Telechargement au lieu d'affichage."}]
  },
  {id:"w3-images",code:"I2",level:"intermediate",title:"HTML Images",sub:"srcset, picture, lazy",tags:["images","intermediate"],
    sections:[{h:"Image moderne",blocks:[
      {code:"<img src=\"800.jpg\"\n  srcset=\"400.jpg 400w, 800.jpg 800w, 1600.jpg 1600w\"\n  sizes=\"(max-width: 600px) 400px, 800px\"\n  alt=\"...\"\n  loading=\"lazy\"\n  width=\"800\" height=\"450\">"}
    ]}],
    quiz:[{q:"<code>loading=\"lazy\"</code> :",opts:["Cache","Charge differe quand visible","Compresse","Convertit"],correct:"b",
      expl:"Lazy loading natif."}]
  },
  {id:"w3-forms",code:"I3",level:"intermediate",title:"HTML Forms",sub:"form, input, label, validation",tags:["forms","intermediate"],
    sections:[{h:"Validation native",blocks:[
      {code:"<form>\n  <input type=\"email\" required>\n  <input type=\"text\" minlength=\"3\" maxlength=\"20\">\n  <input type=\"number\" min=\"0\" max=\"100\">\n  <input type=\"text\" pattern=\"[A-Z]{3}\" title=\"3 majuscules\">\n</form>"}
    ]}],
    quiz:[{q:"<code>pattern</code> attend :",opts:["JS","Regex","CSS","Fonction"],correct:"b",
      expl:"Regex de validation."}]
  },
  {id:"w3-input-types",code:"I4",level:"intermediate",title:"HTML Input Types",sub:"22+ types",tags:["input","forms","intermediate"],
    sections:[{h:"Types principaux",blocks:[
      {table:[
        ["type","Specificite"],
        ["text","Defaut"],
        ["email","Valide @"],
        ["password","Masque"],
        ["number","Numerique"],
        ["date","Picker date"],
        ["tel","Clavier numerique mobile"],
        ["url","Valide URL"],
        ["color","Picker couleur"],
        ["range","Slider"],
        ["file","Upload"]
      ]}
    ]}],
    quiz:[{q:"Picker date natif :",opts:["<code>type=\"date\"</code>","<code>type=\"calendar\"</code>","<code>type=\"datetime\"</code>","<code>type=\"day\"</code>"],correct:"a",
      expl:"<code>type=\"date\"</code>."}]
  },
  {id:"w3-tables",code:"I5",level:"intermediate",title:"HTML Tables",sub:"table, thead, scope",tags:["tables","intermediate"],
    sections:[{h:"Tableau accessible",blocks:[
      {code:"<table>\n  <caption>Titre</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Produit</th>\n      <th scope=\"col\">Prix</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Pomme</th>\n      <td>1.50</td>\n    </tr>\n  </tbody>\n</table>"}
    ]}],
    quiz:[{q:"<code>&lt;caption&gt;</code> va :",opts:["Apres tbody","Premier enfant","Dans thead","N'importe ou"],correct:"b",
      expl:"Premier enfant de table."}]
  },
  {id:"w3-iframes",code:"I6",level:"intermediate",title:"HTML Iframes",sub:"Embed une autre page",tags:["iframe","intermediate"],
    sections:[{h:"Embed securise",blocks:[
      {code:"<iframe\n  src=\"https://youtube.com/embed/abc\"\n  width=\"560\" height=\"315\"\n  title=\"Video\"\n  loading=\"lazy\"\n  sandbox=\"allow-scripts allow-same-origin\"\n  allowfullscreen></iframe>"},
      {warn:"<code>sandbox=\"\"</code> bloque tout. Ouvre selectivement."}
    ]}],
    quiz:[{q:"Pour bloquer JS dans iframe :",opts:["<code>nojs</code>","<code>sandbox=\"\"</code>","<code>secure</code>","Impossible"],correct:"b",
      expl:"Sandbox vide = tout bloque."}]
  },
  {id:"w3-iframes-2",code:"I7",level:"intermediate",title:"HTML Embed (audio/video)",sub:"audio, video, source",tags:["media","intermediate"],
    sections:[{h:"Multimedia",blocks:[
      {code:"<video controls poster=\"thumb.jpg\" preload=\"metadata\">\n  <source src=\"v.webm\" type=\"video/webm\">\n  <source src=\"v.mp4\" type=\"video/mp4\">\n  <track kind=\"subtitles\" src=\"fr.vtt\" srclang=\"fr\" default>\n</video>"}
    ]}],
    quiz:[{q:"Pour les sous-titres video :",opts:["<code>&lt;subtitle&gt;</code>","<code>&lt;track&gt;</code>","<code>&lt;caption&gt;</code>","<code>&lt;text&gt;</code>"],correct:"b",
      expl:"<code>&lt;track kind=\"subtitles\"&gt;</code>."}]
  },
  {id:"w3-semantic",code:"A1",level:"advanced",title:"HTML Semantic",sub:"header, nav, main, article, section",tags:["semantic","ARIA","advanced"],
    sections:[{h:"Layout semantique",blocks:[
      {code:"<body>\n  <header>...</header>\n  <nav>...</nav>\n  <main>\n    <article>\n      <h1>Titre</h1>\n      <section>...</section>\n    </article>\n    <aside>...</aside>\n  </main>\n  <footer>...</footer>\n</body>"}
    ]}],
    quiz:[{q:"<code>&lt;main&gt;</code> peut apparaitre :",opts:["1","2","Autant","Illimite"],correct:"a",
      expl:"Un seul main par page."}]
  },
  {id:"w3-aria",code:"A2",level:"advanced",title:"HTML ARIA",sub:"aria-label, role, tabindex",tags:["ARIA","a11y","advanced"],
    sections:[{h:"ARIA en pratique",blocks:[
      {code:"<button aria-label=\"Fermer\">×</button>\n<div role=\"alert\">Erreur</div>\n<button aria-pressed=\"true\">Gras</button>\n<input aria-invalid=\"true\" aria-describedby=\"err-1\">\n<span id=\"err-1\">Email invalide</span>"},
      {tip:"Premiere regle : ne pas utiliser ARIA. Prefere le HTML semantique natif."}
    ]}],
    quiz:[{q:"Pour annoncer erreur immediate :",opts:["<code>role=\"alert\"</code>","<code>aria-live=\"polite\"</code>","<code>aria-error</code>","<code>aria-status</code>"],correct:"a",
      expl:"<code>role=\"alert\"</code> interrompt."}]
  },
  {id:"w3-meta-seo",code:"A3",level:"advanced",title:"HTML Meta & SEO",sub:"title, description, og, canonical",tags:["SEO","meta","advanced"],
    sections:[{h:"Le minimum SEO",blocks:[
      {code:"<title>Page Title - Brand (60 char max)</title>\n<meta name=\"description\" content=\"150-160 char visible Google.\">\n<meta name=\"robots\" content=\"index, follow\">\n<link rel=\"canonical\" href=\"https://site.fr/page\">\n\n<meta property=\"og:title\" content=\"...\">\n<meta property=\"og:description\" content=\"...\">\n<meta property=\"og:image\" content=\"...\">\n<meta property=\"og:type\" content=\"article\">"}
    ]}],
    quiz:[{q:"<code>rel=\"canonical\"</code> :",opts:["Lien preferre","Eviter doublons SEO","Bloquer Google","Rediriger"],correct:"b",
      expl:"Indique l'URL canonique."}]
  },
  {id:"w3-svg",code:"A4",level:"advanced",title:"HTML SVG",sub:"Inline SVG, viewBox",tags:["SVG","advanced"],
    sections:[{h:"SVG inline",blocks:[
      {code:"<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n  <path d=\"M9 12l2 2 4-4\"/>\n</svg>"},
      {tip:"<code>stroke=\"currentColor\"</code> = utilise la couleur du parent. Permet de styler le SVG via CSS."}
    ]}],
    quiz:[{q:"Pour que SVG suive la couleur CSS :",opts:["<code>auto</code>","<code>inherit</code>","<code>currentColor</code>","<code>parent</code>"],correct:"c",
      expl:"<code>currentColor</code> = couleur du parent."}]
  },
  {id:"w3-classes",code:"B8",level:"basic",title:"HTML Classes",sub:"L'attribut class et le CSS",tags:["class","basics"],
    sections:[{h:"Class : grouper des elements",blocks:[
      {p:"<code>class</code> applique une etiquette qu'on peut ensuite cibler en CSS et JS. Plusieurs classes separees par des espaces."},
      {code:"<div class=\"card big rouge\">Un</div>\n<div class=\"card big\">Deux</div>\n<div class=\"card\">Trois</div>\n\n<!-- En CSS -->\n<style>\n.card { padding: 16px; border: 1px solid #ccc; }\n.big { font-size: 20px; }\n.rouge { color: red; }\n</style>"},
      {tip:"Pas d'espace dans le NOM d'une classe. <code>class=\"card big\"</code> = 2 classes. <code>class=\"card-big\"</code> = 1 classe."}
    ]}],
    quiz:[{q:"<code>class=\"card big\"</code> :",opts:["1 classe","2 classes","Erreur","Class avec espace"],correct:"b",
      expl:"L'espace separe les classes."}]
  },
  {id:"w3-id",code:"B9",level:"basic",title:"HTML id",sub:"Identifiant unique",tags:["id","basics"],
    sections:[{h:"id : unique par page",blocks:[
      {p:"<code>id</code> identifie UN element unique. Sert d'ancre URL (#id), de cible pour <code>label[for]</code>, et de selecteur CSS/JS."},
      {code:"<h2 id=\"section-contact\">Contact</h2>\n\n<a href=\"#section-contact\">Aller au contact</a>\n\n<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">\n\n<script>\nconst el = document.getElementById('section-contact');\n</script>"},
      {warn:"id doit etre UNIQUE par page. Sinon comportement imprevisible. Pour partager : utilise <code>class</code>."}
    ]}],
    quiz:[{q:"Combien d'<code>id=\"x\"</code> par page ?",opts:["1","Plusieurs","Illimite","Au moins 2"],correct:"a",
      expl:"Un id doit etre unique."}]
  },
  {id:"w3-block-inline",code:"B10",level:"basic",title:"HTML Block vs Inline",sub:"Comprendre le flux",tags:["block","inline","basics"],
    sections:[{h:"Difference",blocks:[
      {table:[
        ["Block","Inline"],
        ["div, p, h1-h6","span, a, strong"],
        ["section, article","img, code, kbd"],
        ["form, ul, ol, li","label, input, time"],
        ["Prend toute la largeur","Juste la place du contenu"],
        ["Va a la ligne","Reste sur la meme ligne"],
        ["width/height OK","width/height ignores (sauf img)"]
      ]},
      {code:"<!-- Block : chacun sur sa ligne -->\n<p>Un</p>\n<p>Deux</p>\n\n<!-- Inline : sur la meme ligne -->\n<span>Mot</span><span>colle</span><span>!</span>"}
    ]}],
    quiz:[{q:"<code>&lt;p&gt;</code> est :",opts:["Block","Inline","Flex","Aucun"],correct:"a",
      expl:"p est block par defaut."}]
  },
  {id:"w3-file-paths",code:"B11",level:"basic",title:"HTML File Paths",sub:"Chemins relatifs vs absolus",tags:["paths","basics"],
    sections:[{h:"Types de chemins",blocks:[
      {table:[
        ["Chemin","Sens"],
        ["<code>img.jpg</code>","Meme dossier"],
        ["<code>/img/logo.jpg</code>","Racine du site"],
        ["<code>../img.jpg</code>","Dossier parent"],
        ["<code>./img.jpg</code>","Dossier courant (explicite)"],
        ["<code>https://site.fr/img.jpg</code>","Absolu / externe"]
      ]},
      {tip:"Toujours preferer les chemins absolus (commencent par <code>/</code>) pour les ressources principales : evite les bugs quand tu reorganises les dossiers."}
    ]}],
    quiz:[{q:"<code>../</code> signifie :",opts:["Racine","Meme dossier","Dossier parent","Externe"],correct:"c",
      expl:"<code>..</code> = remonter d'un niveau."}]
  },
  {id:"w3-computer-code",code:"B12",level:"basic",title:"HTML Computer Code",sub:"code, kbd, samp, var, pre",tags:["code","basics"],
    sections:[{h:"Tags pour code",blocks:[
      {code:"<code>const x = 42;</code>          <!-- code inline -->\n<kbd>Ctrl</kbd>+<kbd>C</kbd>            <!-- touche clavier -->\n<samp>Hello World</samp>                <!-- sortie programme -->\n<var>x</var> = 5                        <!-- variable math -->\n\n<pre>\n  Texte preformate :\n  espaces  preserves\n     indentation aussi\n</pre>\n\n<pre><code>\nfunction hello() {\n  console.log('hi');\n}\n</code></pre>"}
    ]}],
    quiz:[{q:"Pour afficher une touche clavier :",opts:["<code>&lt;key&gt;</code>","<code>&lt;kbd&gt;</code>","<code>&lt;code&gt;</code>","<code>&lt;samp&gt;</code>"],correct:"b",
      expl:"<code>kbd</code> = keyboard input."}]
  },
  {id:"w3-symbols",code:"B13",level:"basic",title:"HTML Symbols & Emojis",sub:"&copy;, &nbsp;, emojis",tags:["entities","symbols","basics"],
    sections:[{h:"Entites communes",blocks:[
      {table:[
        ["Affiche","Entite","Nom"],
        ["<code>&lt;</code>","<code>&amp;lt;</code>","Less than"],
        ["<code>&gt;</code>","<code>&amp;gt;</code>","Greater than"],
        ["<code>&amp;</code>","<code>&amp;amp;</code>","Ampersand"],
        ["<code>&nbsp;</code>","<code>&amp;nbsp;</code>","Non-breaking space"],
        ["<code>©</code>","<code>&amp;copy;</code>","Copyright"],
        ["<code>®</code>","<code>&amp;reg;</code>","Registered"],
        ["<code>™</code>","<code>&amp;trade;</code>","Trademark"],
        ["<code>€</code>","<code>&amp;euro;</code>","Euro"],
        ["<code>—</code>","<code>&amp;mdash;</code>","Em dash"]
      ]},
      {code:"<!-- Emojis : directement dans le HTML (UTF-8) -->\n<p>Hello 👋 World 🌍 !</p>\n\n<!-- Ou via code Unicode -->\n<p>&#128075; &#127757;</p>"},
      {tip:"Avec charset UTF-8 (recommande), tu peux ecrire les emojis directement. Plus lisible."}
    ]}],
    quiz:[{q:"Espace insecable :",opts:["<code>&amp;sp;</code>","<code>&amp;nbsp;</code>","<code>&amp;space;</code>","<code>&amp;nbs;</code>"],correct:"b",
      expl:"<code>&amp;nbsp;</code> = non-breaking space."}]
  },
  {id:"w3-layout",code:"I8",level:"intermediate",title:"HTML Layout",sub:"Structurer une page",tags:["layout","intermediate"],
    sections:[{h:"Layout moderne",blocks:[
      {p:"L'epoque des <code>&lt;table&gt;</code> pour la mise en page est revolue. En 2026 : CSS Flexbox/Grid sur du HTML semantique."},
      {code:"<body>\n  <header>...</header>\n  <nav>...</nav>\n  <main>\n    <article>...</article>\n    <aside>...</aside>\n  </main>\n  <footer>...</footer>\n</body>\n\n<style>\nbody {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"nav nav\"\n    \"main aside\"\n    \"footer footer\";\n  grid-template-columns: 3fr 1fr;\n}\nheader { grid-area: header; }\nnav { grid-area: nav; }\nmain { grid-area: main; }\naside { grid-area: aside; }\nfooter { grid-area: footer; }\n</style>"}
    ]}],
    quiz:[{q:"Pour le layout en 2026 :",opts:["<code>&lt;table&gt;</code>","CSS Grid/Flexbox","frames","XHTML"],correct:"b",
      expl:"HTML semantique + CSS Grid/Flexbox."}]
  },
  {id:"w3-responsive",code:"I9",level:"intermediate",title:"HTML Responsive",sub:"Viewport, picture, srcset",tags:["responsive","intermediate"],
    sections:[{h:"Bases responsive HTML",blocks:[
      {code:"<!-- 1. Viewport meta (OBLIGATOIRE) -->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n<!-- 2. Images responsive -->\n<img\n  src=\"800.jpg\"\n  srcset=\"400.jpg 400w, 800.jpg 800w, 1600.jpg 1600w\"\n  sizes=\"(max-width: 600px) 400px, 800px\"\n  alt=\"...\">\n\n<!-- 3. Picture avec art direction -->\n<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"mobile.jpg\">\n  <source media=\"(min-width: 601px)\" srcset=\"desktop.jpg\">\n  <img src=\"fallback.jpg\" alt=\"...\">\n</picture>"},
      {tip:"Le CSS fait 90% du responsive (media queries). Mais HTML aide pour les images et la touch zone."}
    ]}],
    quiz:[{q:"Sans viewport meta :",opts:["Mobile zoomera","Plus rapide","Pas de difference","Erreur"],correct:"a",
      expl:"Par defaut, mobile rend a 980px et zoome out."}]
  },
  {id:"w3-plugins",code:"I10",level:"intermediate",title:"HTML Plug-ins (embed, object)",sub:"Embed Flash-like content",tags:["embed","intermediate"],
    sections:[{h:"embed et object",blocks:[
      {code:"<!-- embed : contenu externe simple -->\n<embed src=\"file.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n\n<!-- object : avec fallback -->\n<object data=\"file.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n  <p>Ton navigateur ne supporte pas les PDFs.\n     <a href=\"file.pdf\">Telecharger</a></p>\n</object>"},
      {note:"En 2026, on prefere des libs JS dediees (PDF.js etc.) plutot que les plug-ins natifs."}
    ]}],
    quiz:[{q:"Diff entre embed et object :",opts:["Aucune","object permet fallback","embed est moderne","object obsolete"],correct:"b",
      expl:"<code>object</code> peut avoir du contenu de fallback."}]
  },
  {id:"w3-form-attrs",code:"I11",level:"intermediate",title:"HTML Form Attributes",sub:"autocomplete, novalidate, target",tags:["forms","attributes","intermediate"],
    sections:[{h:"Attributs avances",blocks:[
      {code:"<form\n  action=\"/submit\"\n  method=\"POST\"\n  autocomplete=\"on\"\n  novalidate\n  target=\"_blank\"\n  enctype=\"multipart/form-data\">\n  ...\n</form>\n\n<!-- Par input -->\n<input type=\"text\" autocomplete=\"name\">\n<input type=\"email\" autocomplete=\"email\">\n<input type=\"password\" autocomplete=\"new-password\">\n<input type=\"tel\" autocomplete=\"tel\">"},
      {table:[
        ["Attribut","Sens"],
        ["<code>action</code>","URL de destination"],
        ["<code>method</code>","GET ou POST"],
        ["<code>enctype</code>","multipart/form-data pour fichiers"],
        ["<code>novalidate</code>","Desactive validation HTML5"],
        ["<code>autocomplete</code>","on / off / nom precis"],
        ["<code>target</code>","_blank pour nouvel onglet"]
      ]}
    ]}],
    quiz:[{q:"Pour uploader des fichiers :",opts:["method=\"upload\"","enctype=\"multipart/form-data\"","accept=\"file\"","type=\"upload\""],correct:"b",
      expl:"Sans <code>enctype=\"multipart/form-data\"</code>, l'upload echoue."}]
  },
  {id:"w3-canvas",code:"A5",level:"advanced",title:"HTML Canvas",sub:"Dessin programmatique",tags:["canvas","graphics","advanced"],
    sections:[{h:"Canvas 2D",blocks:[
      {code:"<canvas id=\"c\" width=\"400\" height=\"300\"></canvas>\n\n<script>\nconst ctx = document.getElementById('c').getContext('2d');\nctx.fillStyle = '#6366f1';\nctx.fillRect(10, 10, 100, 100);\n\nctx.strokeStyle = 'red';\nctx.beginPath();\nctx.arc(200, 100, 40, 0, Math.PI * 2);\nctx.stroke();\n\nctx.font = '20px Inter';\nctx.fillText('Hello', 50, 200);\n</script>"},
      {tip:"Canvas = pixels (raster). SVG = vecteur. Canvas pour les jeux/animations, SVG pour les icones/diagrammes."}
    ]}],
    quiz:[{q:"Canvas vs SVG :",opts:["Identique","Canvas raster, SVG vecteur","Inverse","SVG plus rapide"],correct:"b",
      expl:"Canvas dessine des pixels. SVG decrit des formes vectorielles."}]
  },
  {id:"w3-storage",code:"A6",level:"advanced",title:"HTML Web Storage",sub:"localStorage, sessionStorage",tags:["storage","advanced"],
    sections:[{h:"Stockage cote client",blocks:[
      {code:"// Persistant (jusqu'a effacement manuel)\nlocalStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\nlocalStorage.removeItem('theme');\nlocalStorage.clear();\n\n// Que pour la session (ferme onglet = vide)\nsessionStorage.setItem('search', 'php');\n\n// Stocker un objet (toujours en JSON)\nlocalStorage.setItem('user', JSON.stringify(user));\nconst user = JSON.parse(localStorage.getItem('user') || '{}');"},
      {warn:"localStorage = ~5MB max. Pas de chiffrement. Jamais y mettre de mot de passe / token JWT sensible."}
    ]}],
    quiz:[{q:"localStorage survit :",opts:["A la session","Au reload mais pas a la fermeture","Tant qu'on ne clear pas","Une heure"],correct:"c",
      expl:"localStorage persiste jusqu'a effacement explicite."}]
  },
  {id:"w3-drag",code:"A7",level:"advanced",title:"HTML Drag & Drop",sub:"draggable, dragstart, drop",tags:["drag","interaction","advanced"],
    sections:[{h:"Drag & drop natif",blocks:[
      {code:"<div draggable=\"true\" id=\"item\">Glisse-moi</div>\n<div id=\"zone\">Depose ici</div>\n\n<script>\nconst item = document.getElementById('item');\nconst zone = document.getElementById('zone');\n\nitem.addEventListener('dragstart', (e) => {\n  e.dataTransfer.setData('text/plain', 'item');\n});\n\nzone.addEventListener('dragover', (e) => {\n  e.preventDefault();  // OBLIGATOIRE pour autoriser drop\n});\n\nzone.addEventListener('drop', (e) => {\n  e.preventDefault();\n  const data = e.dataTransfer.getData('text/plain');\n  zone.textContent = 'Recu : ' + data;\n});\n</script>"}
    ]}],
    quiz:[{q:"Pour autoriser le drop :",opts:["allowdrop=\"true\"","dragover + preventDefault","drop-zone","Rien"],correct:"b",
      expl:"<code>dragover</code> doit appeler <code>e.preventDefault()</code>."}]
  }
];

const ALL_LESSONS = [...DAYS, ...GIO];
const TOTAL = ALL_LESSONS.length;
const TOTAL_EXERCISES = DAYS.reduce((sum, d) => sum + (d.exercises ? d.exercises.length : 0), 0);
