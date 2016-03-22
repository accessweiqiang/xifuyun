//系统界面初始化
$(document).ready(function(e){
	//展开折叠
	$(document).on("click","#platform-sidebar-wrap .sidebar-nav-title",function(){
		var $self = $(this);
		var $nextDom = $self.next(".sidebar-nav-list");
		$self.toggleClass("active");
		$nextDom.toggle();  
	})
})
//侧边栏折叠效果
