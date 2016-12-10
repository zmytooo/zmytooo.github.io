---
title: 关于node.js的误会【转】
date: 2016-10-25 21:22:52
tags:
---
关于单线程一个由来已久的误会

在上篇博客中提到我们使用node.js写的JavaScript代码是单线程运行的，让很多同学很疑惑，单线程怎么实现异步操作，单线程谁去响应事件。。。在html5 Web Workers中我也有提到过客户端的JavaScript也是单线程运行的，大家明显没有这么大反应，还是普遍能接受的。可单线程的客户端JavaScript也能响应DOM事件，还有大家都很熟悉的ajax操作，回调函数也是异步的，既然客户端JavaScript是单线程执行的，回调函数是谁调用的呢？答案很简单，JavaScript的宿主环境——浏览器，也就是说虽然JavaScript是单线程执行的，但浏览器是多线程的，负责调度管理JavaScript代码，让它们在恰当的时机执行。

所以我们所说的node.js单线程，是指node.js并没有给我们创建一个线程的能力，所有我们自己写的代码都是单线程执行的，在同一时间内，只能执行我们写的一句代码。但宿主环境node.js并不是单线程的，它会维护一个执行队列，循环检测，调度JavaScript线程来执行。因此单线程执行和并发操作并不冲突。

阻塞与线程什么叫阻塞（block）？
线程在执行中如果遇到I/O操作（磁盘读写、网络通信等）通常需要耗费较长的时间，这时候操作系统会剥夺线程对CPU的控制权，使其暂停，并把资源让给其它的工作线程，这种线程调度方式成为阻塞。当I/O操作完毕的时候操作系统将这个线程的阻塞状态解除，恢复其对CPU的控制权，令其继续执行，这种I/O模式就是同步I/O或成为阻塞I/O。

响应的异步I/O或非阻塞I/O则针对所有的I/O操作采取不阻塞的策略，当线程遇到I/O操作时不会以阻塞的方式等待I/O操作结束，而只是将I/O请求发送给操作系统，继续执行后续语句。当操作系统完成I/O操作时以事件的形式通知执行I/O操作的线程，线程会在特定时间处理这个事件。为了处理异步I/O必须有事件循环，不断检查有没有未处理的事件，依次予以处理。

在阻塞模式下，一个线程只能处理一个任务，要想提高吞吐量必须通过多线程。而在非阻塞模式下一个线程永远在执行计算操作，这个线程所使用的CPU核心利用率永远是100%，I/O以事件的方式通知。在阻塞模式下多线程往往能够提高系统吞吐量，因为一个线程阻塞时还有其他线程在工作，多线程何以让CPU资源不被阻塞的线程浪费。而在非阻塞模式下，线程不会被I/O阻塞，永远在利用CPU。异步I/O减少了多线程中创建线程、分配内存、列入调度、切换线程、内存换页、CPU缓存等方面的开销。

事件循环机制
上面提到了几次事件循环机制，那么这个听起来貌似很高端的东东究竟是什么呢？所谓事件循环是指node.js会把所有的异步操作使用事件机制解决，有个线程在不断地循环检测事件队列。node.js中所有的逻辑都是事件的回调函数，所以node.js始终在事件循环中，程序入口就是事件循环第一个事件的回调函数。事件的回调函数中可能会发出I/O请求或直接发射（ emit）事件，执行完毕后返回事件循环。事件循环会检查事件队列中有没有未处理的事件，直到程序结束。node.js的事件循环对开发者不可见，由libev库实现，libev不断检查是否有活动的、可供检测的事件监听器，直到检查不到时才退出事件循环，程序结束。
![Alt text](http://images.cnitblog.com/blog/349217/201312/15164932-d9522c09f6094aa2b89455889a3f0e3b.png)
### node.js是什么？和JavaScript有什么关系？

### 关于node.js究竟是什么，大家的问题在于

### node.js是不是一门语言？

### node.js是不是一个JavaScript库函数？

### node.js是不是一个JavaScript框架？

很遗憾，这三个问题的答案都是NO，看看官方对自己的描述

Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

官方很明确地说node.js是一个platform，也就是一个做xxx的平台。node.js是一个可以在服务器端运行JavaScript的平台，其实这句话华也不准确，按照《JavaScript权威指南》《JavaScript高级程序设计》等书中的定义，JavaScript是由两部分组成

core JavaScript
client JavaScript（DOM、BOM）
而只有core JavaScript可以在node.js上运行，所以node.js借用了JavaScript的语法，但并不能用来处理浏览器对象（BOM）及文档对象（DOM），所以node.js并不是设计为在服务器端运行解析html文档的（当然有module可以做此事），所以“在服务器端运行的JavaScript”在一定程度上误导了初学者。

同时node.js并不仅仅运行core JavaScript，node.js中还有文件系统、模块包、操作系统API、网络通信、二进制类型处理等core JavaScript不具备的功能。

node.js是在执行JavaScript语句吗
从字面意思上是的，因为我们在使用node.js开发的时候写的确实是JavaScript语句，而且node.js利用Google的V8 Javascript 引擎来解析JavaScript语句，但系统真正调用执行的代码是用C++写的，我们做的只是用JavaScript语句来调用这些底层API，所以不用担心其执行效率过低问题

异步I/O与事件驱动
毫不夸张的说node.js最大的特定就是采用异步I/O和事件驱动架构，对于高并发解决方案传统架构师多线程模型，为每个业务逻辑童工一个线程，通过系统线程切换来来弥补同步I/O调用的时间开销。node.js使用的是单线程模型，对所有I/O都采用异步式的请求方式，避免频繁的上下文切换，在node.js执行的时候维护着一个事件队列，程序在执行时进入事件循环等待下一个事件到来，每个异步I/O请求完成后都会被推送到事件队列中的等待执行。

对于一个简单的数据库访问操作，传统方式是这样实现的

	res = db.query('SELECT * from some_table');
	res.output();
代码执行到第一行的时候线程会阻塞，等待query返回结果，然后继续处理。由于数据库查询、磁盘读写、网络通信等原因阻塞时间会非常大（相对于CPU始终频率）。对于高并发的访问，一方面线程长期阻塞等待，另一方面为了应付新情求而不断添加新线程，会浪费大量系统资源，同时线程的增加也会也会占用大量的CPU时间来处理内存上下文切换。看看node.js怎么处理

 	db.query('SELECT * from some_table', function(res) { 
   	res.output();
	});
在代码中熟悉Javascript的同学一眼就可以看明白query的第二个参数是一个回调函数，进程执行到db.query的时候不会等待结果返回，而是直接继续执行下面的语句，直到进入事件循环。当数据库执行结果返回的时候会将事件发送到事件队列，等到线程进入事件循环后才会调用之前的回调函数。

node.js的异步机制是基于事件的，所有的I/O、网络通信、数据库查询都以非阻塞的方式执行，返回结果由事件循环来处理。node.js在同一时刻只会处理一个事件，完成后立即进入事件循环检查后面事件。这样CPU和内存在同一时间集中处理一件事，同时尽量让耗时的I/O等操作并行执行。

node.js架构
node.js用异步式I/O和事件驱动代替多线程提升性能，除了使用高效的V8作为JavaScript引擎外还使用了高效的libev和libeio库支持事件驱动和异步I/O。

![Alt text](http://images.cnitblog.com/blog/349217/201312/15160642-f5975482ad8641dab0712d26b7118401.png)

node.js作者在libeio和libev的基础上抽象出了libuv层，对于POSIX(Portable Operating System Interface 是一套操作系统API规范，遵循的有Unix、Linux、Mac OS X等)操作系统libuv通过封装libev和libio来利用epoll或kqueue。而在Windows下libuv使用了IOCP（Input/Output Completion Port,输入输出完􏰛端）机制 在不同平台下实现高性能。

了解了这个就不要再以为node.js是利用JavaScript来操作系统了

### 为什么要使用node.js

其实这个问题可以归结为node.js有什么特长，除了语法上让熟悉JavaScript的人很舒服。相对于Javascript为客户端而生，node.js为网络而生，一切都以http为主，其内建HTTP服务器支持，使用node.js可以轻易地搭建一个网站和服务器组合，而不用想使用PHP还需要额外的Apache服务器，通过特有模块或CGI调用才能将PHP脚本结果返回给用户。

node.js还可以部署到非网络应用环境下，因为其可以调用C/C++代码，充分利用现有函数库，在性能上有很大优越性。

在这些场景下使用node.js是非常合适的

### 1.web socket服务器
### 2.TCP/UDP套接字应用程序
### 3.复杂逻辑的web应用
### 4.命令行工具
### 5.客户端Javascript编译器

参考及最后
博客中基本理论知识都来源于《Node.js开发指南》，甚至很多篇幅都是直接使用原话，没有抄袭据为己有的意思，只是作者说的太明白了，希望对初入node.js的朋友有帮助，当然如果感兴趣可以直接购买原书。

希望唠唠叨叨这么多，能够对对之前博客持有疑问的博友有所帮助，最后在唠叨一句，单线程执行是指我们写的JavaScript语句在同一时刻只能执行一句，而不是node.js是单线程，其实我们的异步I/O及事件循环都是另外线程在做。

当然对于一些CPU密集的操作在node.js里面也有process.nextTick()这样的解决方案或者直接使用C++处理，研究明白了和大家分享，也有人不满意node.js的单线程写了自己的module来让node.js多线程，感兴趣的同学可以看看node-threads-a-gogo

由于刚刚接触node.js，文中谬误颇多，希望多家多多批评指教

