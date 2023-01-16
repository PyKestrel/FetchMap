# FetchMap
Port Scanner/Sniffer in Client-Side Javascript. Yes its not really practical but who doesn't love testing the limits of things?


Gist:

By Interpreting the results of the fetch request we can make a determination of the status of a port. 
Scans of a port that produces an error such as EPROTO and ECONNREFUSED can be interpreted as having an open port, these errors would only be received if the connection to the port was reset and thus communicating.

Determining if a port is closed or filtered is simple as the connection would simply time out, currently set to 5 seconds just liek teh BEEF inmplementation, of which I took inspiration from.
