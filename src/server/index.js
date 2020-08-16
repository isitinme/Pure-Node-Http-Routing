module.exports.serverListen = function(
	port,
	callback = () => console.log('Server is listening on port', port)
) {
	this.listen(port, callback);	
}
