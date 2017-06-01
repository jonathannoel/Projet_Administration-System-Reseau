$TTL 604800
@	IN	SOA	wt11.ephec-ti.be.	root.wt11.ephec-ti.be. (
	20080605;
	604800;
	86400;
	2419200;
	604800);

@	IN	NS	wt11.ephec-ti.be.
@	IN	A	79.137.39.0

www	IN	CNAME	wt11.ephec-ti.be.
b2b	IN	A	79.137.39.0	
intranet	IN	A	79.137.39.0
mail	IN	A	79.137.39.9
mail	IN	MX	10	mail.wt11.ephec-ti.be. 
voip	IN	A	79.137.39.9
_voip._udp	IN	A	0	0	5060	voip
