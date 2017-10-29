;$( function() {
    var cus = {
        'navigation' : {
            '前端' : [ '#771ca9', {
                '1' : [ 'github', 'https://github.com/' ],
                '2' : [ 'bootstrap', 'http://www.bootcss.com/' ],
                '3' : [ 'segmentfault', 'https://segmentfault.com/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ '百度翻译', 'http://fanyi.baidu.com/' ]
            }, 'cc-yuan-cc' ],
            'javascript库文档' : [ '#5ea940', {
                '1' : [ 'JQuery文档', 'http://jquery.cuishifeng.cn/' ],
                '2' : [ 'Angular文档', 'http://www.runoob.com/angularjs/angularjs-reference.html' ],
                '3' : [ 'vue文档', 'https://vuefe.cn/v2/guide/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ '百度翻译', 'http://fanyi.baidu.com/' ]
            }, 'cc-yuan-cc' ],
            '字体图标' : [ '#be361e', {
                '1' : [ 'github', 'https://github.com/' ],
                '2' : [ 'icomoon(字体图标制作)', 'https://icomoon.io/' ],
                '3' : [ 'segmentfault', 'https://segmentfault.com/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ 'Font Awesome', 'http://fontawesome.dashgame.com/' ]
            }, 'cc-yuan-pcsP' ],
            '文档' : [ '#33a135', {
                '1' : [ 'w3cSchool', 'http://www.w3school.com.cn/' ],
                '2' : [ '菜鸟教程', 'http://www.runoob.com/' ],
                '3' : [ 'JQuery', 'http://jquery.cuishifeng.cn/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ '123', 'http://www.iconfont.cn' ]
            }, 'cc-yuan-holdall' ],
            '后台' : [ '#3fa89c', {
                '1' : [ 'github', 'https://github.com/' ],
                '2' : [ 'bootstrap', 'http://www.bootcss.com/' ],
                '3' : [ 'segmentfault', 'https://segmentfault.com/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ '123', 'http://www.iconfont.cn' ]
            }, 'cc-yuan-handprint' ],
            '国外优秀网站' : [ '#2b2faa', {
                '1' : [ 'jupiter5', 'http://demos.artbees.net/jupiter5/templates/' ],
                '2' : [ 'bootstrap', 'http://www.bootcss.com/' ],
                '3' : [ 'segmentfault', 'https://segmentfault.com/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ '123', 'http://www.iconfont.cn' ]
            }, 'cc-yuan-seting1' ],
            '社交' : [ '#b18520', {
                '1' : [ 'github', 'https://github.com/' ],
                '2' : [ '知乎', 'https://www.zhihu.com/' ],
                '3' : [ 'segmentfault', 'https://segmentfault.com/' ],
                '4' : [ '微博', 'https://designmodo.com/' ],
                '5' : [ '掘金', 'https://juejin.im/' ],
                '6' : [ '可以提高start', 'https://news.ycombinator.com/submitted?id=seganw' ]
            }, 'cc-yuan-information1' ],
            '视频' : [ '#a6230d', {
                '1' : [ 'url中文转编码', 'http://tool.oschina.net/encode?type=4' ],
                '2' : [ '淘宝npm镜像', 'https://npm.taobao.org/' ],
                '3' : [ 'segmentfault', 'https://segmentfault.com/' ],
                '4' : [ 'designmodo(一个国外网站，网站样式挺喜欢)', 'https://designmodo.com/' ],
                '5' : [ 'iconfont', 'http://www.iconfont.cn/' ],
                '6' : [ '123', 'http://www.iconfont.cn' ]
            }, 'cc-yuan-vide' ],
        },
        'object' : {
            '项目' : [ '#771ca9', {
                '1' : [ '镖局', 'http://chenshuai110.oschina.io/biaoju/html/Login/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/bb.jpg', '响应式' ],
                '2' : [ 'concise博客主题', 'http://www.ccblog.win/', 'http://oyl9mz9e0.bkt.clouddn.com/%E6%8D%95%E8%8E%B7.jpg', '响应式' ],
                '3' : [ '卖座网', 'http://chenshuai110.oschina.io/mzw/#/', 'http://oyl9mz9e0.bkt.clouddn.com/mzw.jpg', '移动端' ],
                '4' : [ '风云系统', 'http://chenshuai110.oschina.io/fyxt/html/main.html', 'http://oyl9mz9e0.bkt.clouddn.com/bbb.jpg', '响应式' ],
                '5' : [ '寄递物流管理系统', 'http://chenshuai110.gitee.io/jd-master/dist/html/main.html', 'http://oyl9mz9e0.bkt.clouddn.com/360%E6%88%AA%E5%9B%BE20171030001018362.jpg', 'pc端' ],
            }, 'cc-yuan-cc' ],
            '插件' : [ '#5ea940', {
                '1' : [ '图片弹出框', 'http://chenshuai110.gitee.io/pi/img/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/lo.PNG', 'JQuery' ],
                '2' : [ '文章标题遍历', 'http://chenshuai110.gitee.io/pi/article_title_list/article-title-list.html', 'http://oyl9mz9e0.bkt.clouddn.com/lp.PNG', '原生js' ],
                '3' : [ '时间轴', 'http://chenshuai110.gitee.io/pi/time_axis/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/sjz.PNG', '原生js' ],
                '4' : [ '模拟侧边栏', 'http://chenshuai110.gitee.io/pi/%E6%A8%A1%E6%8B%9F%E4%BE%A7%E8%BE%B9%E6%A0%8F/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/lll.PNG', '原生js' ],
                '5' : [ '选项卡', 'http://chenshuai110.gitee.io/pi/tab/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/1.PNG', 'JQuery' ],
                '6' : [ '轮播图', 'http://chenshuai110.gitee.io/pi/%E8%BD%AE%E6%92%AD%E5%9B%BE/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/lb.PNG', 'JQuery' ],
                '7' : [ '评分', 'http://chenshuai110.gitee.io/pi/%E8%AF%84%E5%88%86/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/pf.PNG', '原生js' ],
                '8' : [ '手风琴效果', 'http://chenshuai110.gitee.io/pi/%E6%89%8B%E9%A3%8E%E7%90%B4%E6%95%88%E6%9E%9C/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/sfq.PNG', 'JQuery' ],
                '9' : [ '菜单', 'http://chenshuai110.gitee.io/pi/%E8%8F%9C%E5%8D%95/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/m.PNG', 'JQuery' ],
                '10' : [ '拖拽', 'http://chenshuai110.gitee.io/pi/%E6%8B%96%E6%8B%BD/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/t.PNG', '原生js' ],
                '11' : [ '打赏', 'http://chenshuai110.gitee.io/pi/reward/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/ds.PNG', '纯css' ],
                '12' : [ '侧边栏', 'http://chenshuai110.gitee.io/pi/%E4%BE%A7%E8%BE%B9%E6%A0%8F/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/cbl.PNG', '原生js' ],
                '13' : [ '城市三级联动', 'http://chenshuai110.gitee.io/pi/%E5%9F%8E%E5%B8%82%E4%B8%89%E7%BA%A7%E8%81%94%E5%8A%A8/le.html', 'http://oyl9mz9e0.bkt.clouddn.com/sj.PNG', 'JQuery' ],
                '14' : [ '时间', 'http://chenshuai110.gitee.io/pi/time/index.html', 'http://oyl9mz9e0.bkt.clouddn.com/shj.PNG', '原生js' ],
            }, 'cc-yuan-cc' ],
            'UI' : [ '#be361e', {
                '1' : [ '锁美', 'http://oyl9mz9e0.bkt.clouddn.com/%E9%94%81%E7%BE%8E.jpg', 'http://oyl9mz9e0.bkt.clouddn.com/360%E6%88%AA%E5%9B%BE20171030002444257.jpg', 'app' ],
                '2' : [ '月亮女孩', 'http://oyl9mz9e0.bkt.clouddn.com/1.jpg', 'http://oyl9mz9e0.bkt.clouddn.com/360%E6%88%AA%E5%9B%BE20171030003236768.jpg', '主题图标' ]
            }, 'cc-yuan-pcsP' ]
        },
        'retu' : {
            'ccblog' : [ 'https://github.com/', 'cc-yuan-blog', 'my blog'],
            'github' : [ 'https://github.com/', 'cc-yuan-github', 'my github'],
            'returntop' : [ 'javascript:void(0);', 'cc-yuan-backtop-line1', 'back top']
        }
    };
    $( '.warehouse' ).navigation( cus, $( '.typename' ), $( '.return' ) );

    $( '.search' ).search();
} );
;( function(){
    function Navigation( warehouse, typen, retu, cus ) {
        this.headerouterheight = $('header.top').outerHeight();
        this.def = {
            'navigation' : {},
            'retu' : {
                'github' : [ 'https://github.com/', ''],
                'ccblog' : [ 'https://github.com/', ''],
                'returntop' : [ 'javascript:void(0);', '']
            },
            'sp' : this.headerouterheight
        };
        this.merge = $.extend( {}, this.def, cus );
        this.warehouse = warehouse; // 内容仓库
        this.types = null; // 存储type
        this.typeScrollTop = []; // 存储type距离顶端的距离
        this.typenameWh = typen; // 存储名字的导航栏仓库
        this.typenames = null; // 存储所有导航栏的名字的a标签
        this.returnWh = retu; // 存储返回导航栏仓库
        this.backTop = null; // back top
    }
    Navigation.prototype = {
        'init' : function() {
            this.domInit();
            this.fun( this );
            this.scroll( this );
            this.retuMiddle( this );
            this.resize( this );
            this.backTopClick( this );
        },
        'domInit' : function() {
            var str = '', //内容节点字符串,
                _IMG = false,
                navigations = this.merge.navigation,
                navStr = '<ul>', //导航节点字符串
                retus = this.merge.retu,
                retuStr = '<ul>';
            //判断是不是object.html页面
            if( location.href.indexOf( 'object' ) > 0 ) {
                navigations = this.merge.object;
                _IMG = true;
            }

            for( var typename in navigations ) {
                str += '<section class="type"><header style=border-left-color:' + navigations[ typename ][ 0 ] + ';>'+typename+'</header><ul class="clearfix">';
                for (var name in navigations[ typename ][ 1 ]) {
                    str += '<li><a data-label="' + navigations[ typename ][ 1 ][ name ][ 3 ] + '" title="" href="' + navigations[ typename ][ 1 ][ name ][ 1 ];
                    _IMG ? str += '" style=""><span class="label" style="border-color:' + navigations[ typename ][ 0 ] + ' transparent;"></span><img style="" src="' + navigations[ typename ][ 1 ][ name ][ 2 ] + '"/><p style="">' + navigations[ typename ][ 1 ][ name ][ 0 ] + '</p></a></li>'
                         : str += '" style=background:' + navigations[ typename ][ 0 ] + ';>' + navigations[ typename ][ 1 ][ name ][ 0 ] + '</a></li>';
                }
                str += '</ul></section>';
                navStr += '<li><a href="javascript:void(0);"><i class="' + navigations[ typename ][ 2 ] + ' navigations-f"></i>' + typename + '</a></li>';
            }
            // 给内容仓库添加节点
            this.warehouse.html( str );

            // 给导航区添加节点
            navStr += '</ul>';
            this.typenameWh.html(navStr);
            this.typenames = this.typenameWh.find('li a');

            // 给返回仓库添加节点
            for( var retuname in retus ) {
                retuStr += '<li><a href="' + retus[ retuname ][ 0 ] + '" data-content="' + retus[ retuname ][ 2 ] + '"><i class="' + retus[ retuname ][ 1 ] + ' retu-f"></i></a></li>';
            }
            retuStr += '</ul>';
            this.returnWh.html(retuStr);

            // 存储scrollTop距离
            this.types = this.warehouse.find('.type');
            for( var i = 0; i < this.types.length; i ++ ) {
                // 计算高度时如果需要计算图片的高度，需要设置图片高度
                this.typeScrollTop.push( this.types.eq(i).offset().top );
            }

            this.backTop = this.returnWh.find( 'li:last-child a' );
        },
        'styleInit' : function() {

        },
        'fun' : function(__this) {
            __this.typenames.each( function( i ) {
                __this.typenames.eq(i).click(function(){
                    $('html,body').animate({
                        'scrollTop':__this.typeScrollTop[ i ]
                    });
                });
            } )
        },
        'scroll' : function(__this) {
            $(window).scroll(function() {
                if( $(this).scrollTop() > __this.merge.sp ) {
                    __this.typenameWh.css( 'position', 'fixed' );
                    __this.warehouse.css( 'margin-left', '200px' );
                    __this.returnWh.css( 'opacity', '1' );
                } else {
                    __this.typenameWh.css( 'position', 'static' );
                    __this.warehouse.css( 'margin-left', '0' );
                    __this.returnWh.css( 'opacity', '0' );
                }
                for( var i = 0; i < __this.typeScrollTop.length; i++) {
                    if( ( $(this).scrollTop() + 5 ) >= __this.typeScrollTop[ i ] ) {
                        __this.typenames.eq( i ).parent().parent().children().removeClass('active');
                        __this.typenames.eq( i ).parent().addClass( 'active' );
                    }
                }
            })
        },
        // 返回顶部
        'backTopClick' : function( __this ) {
            __this.backTop.click( function() {
                $( 'body, html' ).animate( {
                    'scrollTop' : 0
                } );
            } )
        },
        'retuMiddle' : function() {
            var clientheight = $(window).innerHeight();
            var clientwidth = $(window).innerWidth();
            var retuouterheight = this.returnWh.outerHeight();
            var mainouterwidth = this.returnWh.parent().outerWidth();
            this.returnWh.css({
                'top' : ( clientheight - retuouterheight ) / 2 + 'px',
                'right' : ( clientwidth - mainouterwidth ) / 2 + 'px'
            })
        },
        'resize' : function( __this ) {
            $(window).resize(function() {
                __this.retuMiddle();
            })
        }
    };
    $.fn.navigation = function( cus, typen, retu ) {
        var nav = new Navigation( $(this), typen, retu, cus );
        nav.init();
    }
} )();