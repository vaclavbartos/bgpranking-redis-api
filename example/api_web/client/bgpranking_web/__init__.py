import sys
if sys.version_info[0] == 2:
    from api import *
else:
    from .api import *
