# Modifier les textes du site

Le site a un éditeur de textes intégré : **https://<le-site>/admin**

Aucun outil à installer, rien à savoir sur le code. On ouvre l’adresse, on tape
le mot de passe, on corrige, on publie.

---

## Pour l’équipe de l’hôtel

### Y accéder

Ouvrir **/admin** (ex. `https://hotel-murmures.vercel.app/admin`). L’éditeur est
actuellement ouvert : pas de mot de passe à saisir.

> Il suffit donc de connaître l’adresse pour modifier le site. Elle n’apparaît
> ni dans Google ni dans le menu, mais ne la diffusez pas au-delà de l’équipe.
> Pour la protéger par mot de passe, voir plus bas.

### Modifier un texte

À gauche, la liste des pages. À droite, les textes de la page choisie, avec un
intitulé au-dessus de chacun (« Titre », « Paragraphe 1 », « Question »…).

- On écrit directement dans les champs.
- Un champ modifié se signale par une bordure et une pastille **modifié**.
- Le compteur en haut indique le nombre de modifications en attente.
- **Tout annuler** revient à la version en ligne.

Le travail en cours est gardé dans le navigateur : fermer l’onglet par erreur ne
le perd pas. Il n’est visible que sur le poste où il a été saisi, tant qu’il
n’est pas publié.

### Publier

Le bouton **Publier sur le site** envoie les textes. Comptez **une minute**
avant de les voir en ligne : le site se reconstruit à chaque publication.

### Ajouter ou supprimer

Certaines listes acceptent des ajouts, avec un bouton **+ Ajouter** :

| Liste | Où |
| --- | --- |
| Questions fréquentes | page Services |
| Avis clients | page L’Hôtel |
| Catégories et plats de la carte | page Le Café |
| Stations de métro | page Accès |
| Aéroports | page Accès |

Les autres listes gardent leur nombre d’éléments : les cartes de services, de
chambres et du carrousel sont adossées à des photos choisies dans le code. En
ajouter une depuis l’éditeur donnerait une carte sans image — l’éditeur le
refuse et l’explique.

### Ce que l’éditeur ne fait pas

- **Les photos.** Elles se changent dans le code.
- **Les pages légales** (mentions légales, CGU, politique de confidentialité).
- **Les adresses des pages.** Les intitulés du menu se modifient, les
  destinations non : une URL mal saisie enverrait les visiteurs sur une page
  d’erreur.

---

## Pour la personne qui administre le site

### Où vivent les textes

Tout est dans **`src/contenu/textes.json`**, importé par les composants. Publier
depuis `/admin` écrit ce fichier :

- **en local** : directement sur le disque, la page se recharge aussitôt ;
- **en ligne** : un commit sur la branche `main` de
  `Damdose/hotel-murmures`, qui déclenche le redéploiement Vercel.

Les textes restent donc versionnés dans Git : chaque publication est un commit,
et on revient en arrière comme sur n’importe quel changement de code.

### Variables d’environnement (Vercel → Settings → Environment Variables)

| Variable | Rôle |
| --- | --- |
| `GITHUB_TOKEN` | Jeton GitHub avec le droit **Contents: read & write** sur `Damdose/hotel-murmures`. Sans lui, la publication échoue et le dit. |
| `ADMIN_OUVERT` | `1` = éditeur accessible **sans mot de passe**. C’est le réglage actuel. |
| `ADMIN_PASSWORD` | Le mot de passe de `/admin`. **Il l’emporte sur `ADMIN_OUVERT`** : le poser referme la porte, sans rien avoir à retirer. |
| `ADMIN_SECRET` | Facultatif. Secret de signature des cookies : s’il est défini, changer le mot de passe ne déconnecte personne. |
| `GITHUB_REPO` | Facultatif. Autre dépôt que `Damdose/hotel-murmures`. |
| `GITHUB_BRANCH` | Facultatif. Autre branche que `main`. |

Si ni `ADMIN_OUVERT` ni `ADMIN_PASSWORD` ne sont posés, l’éditeur reste **fermé**
en ligne : une installation oubliée ne laisse pas la porte ouverte par accident.

### Refermer l’éditeur

```
vercel env add ADMIN_PASSWORD production
```

puis redéployer. `/admin` demande alors le mot de passe, et la session dure
douze heures. Rien d’autre à changer.

### Ce que coûte la porte ouverte

L’éditeur publie en committant sur le dépôt GitHub avec le jeton du serveur.
Ouvert, il donne donc à quiconque trouve l’adresse le droit de réécrire les
textes **et de déclencher un déploiement**. La page est en `noindex` et exclue
de `robots.txt` — elle reste hors des moteurs de recherche, mais une adresse ne
reste pas secrète indéfiniment.

Après ajout des variables, **redéployer** pour qu’elles soient prises en compte.

En local, aucune variable n’est nécessaire : `/admin` s’ouvre sans mot de passe
et écrit sur le disque.

### Ajouter un texte modifiable

1. Ajouter la clé dans `src/contenu/textes.json`.
2. La lire dans le composant : `contenu.<page>.<clé>`.
3. Si l’intitulé automatique n’est pas clair, ajouter une entrée dans
   `LIBELLES` ou `LIBELLES_PAR_CHEMIN` (`src/contenu/plan.ts`).

L’éditeur se met à jour tout seul : il lit le fichier et le plan, il n’y a pas
de formulaire à écrire.

### Ouvrir une liste aux ajouts

Ajouter son chemin à `LISTES_OUVERTES` dans `src/contenu/plan.ts`
(`*` remplace un indice). À ne faire que si les éléments ne dépendent pas d’une
photo ou d’une icône fixée dans le code.

### Garde-fous

`src/lib/admin/validation.ts` compare ce qui arrive à la version en ligne et
refuse : une clé ajoutée, renommée ou supprimée, une valeur qui n’est plus du
texte, une liste fermée qui change de taille, un texte de plus de 5 000
caractères. Un `textes.json` cassé ferait échouer le prochain build : c’est
précisément ce que ce filtre empêche.
