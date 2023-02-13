# Project

[![Build Status](https://drone.fasst.tech/api/badges/fasst/com_tailwind-oav/status.svg)](https://drone.fasst.tech/fasst/com_tailwind-oav)

## configuration du service
| var                                  | défaut | description                                                                                     |
| ------------------------------------ | ------ | ----------------------------------------------------------------------------------------------- |
| API_KEYS                             | n/a    | localhost:9000 com_tailwind ce4e26b2-7ffc-11eb-9439-0242ac130002                                 |
| ENV                                  | DEV    | permet de définir dans quel environnement le service est lancé : `PRODUCTION`, `RECETTE`, `DEV` |
| JWT_SECRET                           | n/a    | secret JWT                                                                                      |
| ADMIN_PASSWORD                       | admin  | mot de passe du compte admin                                                                    |
| MONGO_DB_URL                         | n/a    | base mongoDB                                                                                    |
| NODE_ENV                             | n/a    |                                                                                                 |
| PORT                                 | n/a    | port du service                                                                                 |
| ROOT_DIR                             | n/a    | root directory du service                                                                       |
| SESSION_SECRET                       | n/a    | clef secrete de session                                                                         |
| SERVICE_URL                          | n/a    | url publique du service                                                                         |
| USER_SESSION_DURATION                | 10     | durée max d'une session utilisateur (exprimé en heures)                                         |
| USER_SESSION_AUTOMATIC_SIGN_OUT_HOUR | 3      | heure à laquelle la déconnexion automatique doit s'appliquer (ex 1, 2, 3, 17, 18)               |

## Démarrage : 

Copier le fichier `.env.dist` dans un fichier `.env`.

Modifier le fichier `.env` pour assigner la variable `ROOT_DIR` à votre chemin de projet.

Installer le projet : `yarn install`

Démarrer le serveur : `yarn server:dev`

Dans un second terminal, démarrer le front : `yarn front:dev`

## Connexion :

Url d'accès : [http://localhost:9000](http://localhost:9000)
Identifiant : `admin`
Mot de passe : `admin`

## Tools
### Schema GraphQL

La récupération du schema auprès su serveur se fait via l'outil https://graphql-inspector.com/ qu'il faut installer en global.

### CLI


