#!/usr/bin/python

'''apport hook for bind9

(c) 2010 Andres Rodriguez.
Author: Andres Rodriguez <andreserl@ubuntu.com>

This program is free software; you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the
Free Software Foundation; either version 2 of the License, or (at your
option) any later version.  See http://www.gnu.org/copyleft/gpl.html for
the full text of the license.
'''

from apport.hookutils import *
import re

def add_info(report, ui):
    response = ui.yesno("The contents of your /etc/bind/named.conf file "
                        "may help developers diagnose your bug more "
                        "quickly.  However, it may contain sensitive "
                        "information.  Do you want to include it in your "
                        "bug report?")

    if response == None: # user cancelled
        raise StopIteration
    elif response == True:
        attach_conffiles(report,'bind9')

    # getting syslog stuff
    report['SyslogBind9'] = recent_syslog(re.compile(r'named\['))

    # Attaching related packages info
    attach_related_packages(report, ['bind9utils', 'apparmor'])

    attach_mac_events(report, '/usr/sbin/named')
