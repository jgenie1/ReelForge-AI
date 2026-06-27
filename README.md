# 🎬 ReelForge AI — Guide de Production & Déploiement Réel

Ce document explique comment désactiver le mode simulation (Sandbox) et configurer ReelForge AI pour qu'il s'exécute en mode **réel** de production sur votre serveur Hostinger ou en local.

---

## ⚡ 1. Configuration des variables d'environnement (`.env`)

Pour activer le mode réel, ouvrez votre fichier `.env` sur votre serveur Hostinger et configurez les variables suivantes :

### A. Désactiver la simulation
```env
# Mettre à "false" pour appeler les véritables APIs IA et utiliser la base de données
USE_MOCK_AI="false"
```

### B. Clés d'API IA (Obligatoire pour le mode réel)
Renseignez vos clés API de production :
```env
# Anthropic (Génération des scripts via Claude 3 Haiku)
ANTHROPIC_API_KEY="votre_cle_anthropic_reelle"

# ElevenLabs (Synthèse de voix-off et clonage de voix)
ELEVENLABS_API_KEY="votre_cle_elevenlabs_reelle"

# Replicate (Génération des images au format vertical via SDXL)
REPLICATE_API_KEY="votre_cle_replicate_reelle"

# OpenAI (Transcription et synchronisation des sous-titres au mot près via Whisper)
OPENAI_API_KEY="votre_cle_openai_reelle"
```

### C. Stockage Cloudflare R2 (Obligatoire pour héberger les fichiers MP4 et MP3)
Configurez vos identifiants Cloudflare R2 pour stocker les rendus finaux :
```env
R2_ACCOUNT_ID="votre_account_id_cloudflare"
R2_ACCESS_KEY_ID="votre_access_key_id"
R2_SECRET_ACCESS_KEY="votre_secret_access_key"
R2_BUCKET_NAME="nom_de_votre_bucket"
R2_PUBLIC_URL="https://pub-votrebucket.r2.dev"
```

### D. Base de Données (PostgreSQL)
Renseignez l'adresse de votre base de données PostgreSQL de production hébergée sur Hostinger ou sur un cloud externe (ex: Supabase) :
```env
DATABASE_URL="postgresql://utilisateur:motdepasse@hote:5432/nom_bdd?schema=public"
```

---

## 🗄️ 2. Initialisation de la Base de Données (Prisma)

Une fois que votre `DATABASE_URL` réelle est configurée, vous devez créer les tables et schémas requis en base de données.
Depuis le terminal de votre serveur Hostinger (ou votre console locale), exécutez la commande suivante :

```bash
npx prisma db push
```

*Cette commande va synchroniser votre modèle Prisma directement avec votre base de données PostgreSQL sans créer de fichiers de migration complexes.*

---

## 🚀 3. Rendu Vidéo (Remotion)

Le serveur d'hébergement Hostinger (ou votre machine locale) doit impérativement avoir **FFmpeg** installé pour que Remotion puisse encoder et assembler la vidéo finale (`.mp4`) :

- **Sur Ubuntu / Debian** : `sudo apt-get install ffmpeg`
- **Sur Hostinger** : FFmpeg est généralement préinstallé sur les environnements Node.js, mais assurez-vous qu'il est accessible dans le PATH global.

---

## 🔧 4. Démarrage de l'Application

### Build de production Next.js
```bash
npm run build
```

### Lancement de l'application
```bash
npm run start
```
