#=============================================================================
# Serveur web Apache -- Admin. Sys. 2017 -- NOEL, LAGACHE, DELANDER
#=============================================================================

FROM php:5.6-apache

# Driver pour la connection BD avec PDO
RUN docker-php-ext-install pdo pdo_mysql

# Copie les dossiers contenant les sites web
COPY content/ /var/www/html/

# Copie le dossier avec les configs qui gèrent les != redirections
COPY sites-available/ /etc/apache2/sites-available/


#=============================================================================
# Pour Build le Dockerfile
# docker build -t res/apache_php .
#
# Pour lancer Apache
# docker run -d -p 80:80 res/apache_php
#=============================================================================
