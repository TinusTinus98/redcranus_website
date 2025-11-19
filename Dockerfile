# Utilise l'image Nginx officielle
FROM nginx:alpine

# Supprime le contenu par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copie ton site dans le container
COPY html/ /usr/share/nginx/html/

# Expose le port 80 (Nginx)
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]
