#=============================================================================
# Serveur web Apache -- Admin. Sys. 2017 -- NOEL, LAGACHE, DELANDER
#=============================================================================

FROM php:5.6-apache

# Driver pour la connection BD avec PDO
RUN docker-php-ext-install pdo pdo_mysql

# Copie les dossiers contenant les sites web
COPY content/ /var/www/

# Copie le dossier avec les configs qui gèrent les != redirections
COPY sites-available/ /etc/apache2/sites-available/

# Identifie que le site existe dans le serveur web
RUN a2ensite www.wt11.ephec-ti.be
RUN a2ensite b2b.wt11.ephec-ti.be
RUN a2ensite intranet.wt11.ephec-ti.be


# Lancer la duplication du site
RUN ln -s /etc/apache/sites-available/www.wt11.ephec-ti.be /etc/apache2/sites-enabled/www.wt11.ephec-ti.be
RUN ln -s /etc/apache/sites-available/b2b.wt11.ephec-ti.be /etc/apache2/sites-enabled/b2b.wt11.ephec-ti.be
RUN ln -s /etc/apache/sites-available/intranet.wt11.ephec-ti.be /etc/apache2/sites-enabled/intranet.wt11.ephec-ti.be

#=============================================================================
# Pour Build le Dockerfile
# docker build -t res/apache_php .
#
# Pour lancer Apache
# docker run -d -p 80:80 res/apache_php
#=============================================================================
