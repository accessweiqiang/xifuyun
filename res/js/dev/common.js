//系统界面初始化
$(document).ready(function(e) {
        //展开折叠
        $(document).on("click", "#platform-sidebar-wrap .sidebar-nav-title", function() {
            var $self = $(this);
            var $nextDom = $self.next(".sidebar-nav-list");
            $self.toggleClass("active");
            $nextDom.toggle();
        })
        $(document).on("click", "#platform-sidebar-wrap .sidebar-nav-item", function() {
            var $self = $(this);
            $("#platform-sidebar-wrap").find(".sidebar-nav-item").removeClass("active");
            $self.toggleClass("active");

        })

        //初始化日期时间控件
        $(".date-control").datepicker({
            inline: true
        });


})
    //侧边栏折叠效果
