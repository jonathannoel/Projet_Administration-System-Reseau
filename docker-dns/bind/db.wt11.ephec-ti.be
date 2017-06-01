$TTL 604800
@	IN	SOA	wt11.ephec-ti.be.	root.wt11.ephec-ti.be. (
	; Ces lignes sont de simples lignes de configuration. 
	; Vous pouvez trouver une signification pour chacun à cette adresse :
	; http://www.altospam.com/actualite/2011/09/plage-de-verification-d%E2%80%99un-domaine/ 
		    
	20080605	; Serial
	604800		; Refresh après X heures
	86400		; Retry après X heures
	2419200		; Expire après X heures
	604800)		; Minimum TTL en X jours.

; Resource Record pour le Name Server
@	IN	NS	wt11.ephec-ti.be.
@	IN	A	79.137.39.0

; Resource Record pour le Web
www	IN	A	79.137.39.0

; Resource Record pour le sous domaine b2b
b2b	IN	A	79.137.39.0	

; Resource Record pour le sous domaine intranet
intranet	IN	A	79.137.39.0

; Resource Record pour le mail
mail	IN	A	79.137.39.9
mail	IN	MX	10	mail.wt11.ephec-ti.be. 

; Resource Record pour la voix sur IP
voip	IN	A	79.137.39.9
_voip._udp	IN	A	0	0	5060	voip
