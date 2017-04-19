#=============================================================================
# Serveur DNS -- Admin. Sys. 2017 -- NOEL, LAGACHE, DELANDER
#=============================================================================

# Vas chercher la dernière image disponible
FROM sameersbn/bind:latest


COPY bind/ /etc/bind/

#=============================================================================
# Builder l'image
# docker build -t sameersbn/bind .
# 
# Lancer l'image avec les ports 53tcp et udp en correspondance.
# docker run -d -p "53:53/tcp" -p "53:53/udp" --name bind sameersbn/bind
#=============================================================================

