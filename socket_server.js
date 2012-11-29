var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket) {

	socket.emit('news', { msg: '연결되었습니다!' });

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});

	socket.on('my other event', function (data) {
        console.log(data);
    });

	socket.on('join room', function(room) {
		socket.join(room);
	});

	socket.on('leave room', function(room) {
		socket.leave(room);
	});

	socket.on('new article', function (data) {
		socket.broadcast.to('editor group').send(data.msg);
	});
});