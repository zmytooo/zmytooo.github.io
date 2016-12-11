---
title: javascript闭包问题【转】
date: 2016-07-11 14:43:56
tags: [js]
---
### JavaScript闭包
闭包是指有权访问另一个函数作用域中的变量的函数。如下例：

	function createComparisonFunction(propertyName){
        return function(object1,object2){
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];
            if(value1<value2){
                return -1;
            }else if(value1>value1){
                return 1;
            }else{
                return 0;
            }
        }
	}
	
上面var value1 = object1[propertypeName],var value2 = propertyName,两行代码访问了外部函数中的变量propertyName。即使这个内部函数被返回了，而且是在其他地方被调用了 ，但他仍然可以访问变量propertyName。之所以还能访问这个变量，是因为内部函数的作用域链中包含createComparisonFunction（）的作用域。搞清其中细节，必须从理解函数第一次被调用的时候会发生什么入手。

当函数第一次被调用时，会创建一个执行环境及相应的作用域链,并且把作用域链赋值给一个特殊的内部属性（即scope）。然后，使用this，arguments和其他命名参数的值来初始化函数的活动对象。但在作用域链中，外部函数的活动对象始终处于第二位，而外部函数的外部函数处于第三位，……直至作为作用域链终点的群居执行环境。

	function compare(value1,value2){
        if(value1<value2){
            return -1;
        }else if(value1<value2){
            return 1; 
        }else{
            return 0;
        }
	}
	var result = compare(5,10);
	
上面代码，先定义了compare()函数，然后又在全局变量中调用了它。当它第一次调用compare()时，先会创建this，arguments,value1,value2的活动对象。全局执行环境的变量对象（包含this，result和compare）在compare()执行环境的作用域中处于第二位。下图展示了上午关系的compare()函数执行时的作用域链。