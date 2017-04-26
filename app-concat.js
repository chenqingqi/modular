/**
 * 声明应用程序
 */
window.app = {};


/**
 * 页面加载完成
 */
window.onload = function()
{
	console.log(app.menu.width)
}


/**
 * 定义菜单模块
 */
app.menu = {
	
	init:function()
	{
		console.log(this.name)
	},
	
	name:'menu',
	
	width:'100px'
}

app.menu.init();


/**
 * 定义幻灯模块
 */
app.slider = {
	
	init:function()
	{
		console.log(this.name)
	},
	
	name:'slider'
}

app.slider.init()








