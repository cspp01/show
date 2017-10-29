;( function() {
    function SearchBaidu( thi ) {
        this.warehouse = thi;
        this.text = this.warehouse.find( 'input' );
        this.submit = this.warehouse.find( 'button' );
    }
    SearchBaidu.prototype = {
        'init' : function() {
            this.fun( this );
            this.focus( this );
        },
        'fun' : function( __this ) {
            __this.submit.click( function() {
                var val = __this.text.val();
                (val != null && val != '') && ( location.href = 'https://www.baidu.com/s?wd=' + val);
                setTimeout( function() {
                    __this.text.val( '' );
                }, 90 );
            } )
        },
        'focus' : function() {
            this.text.focus( function() {
                $( this ).parent().css({
                    'box-shadow' : '0 0 7px 0 #fff'
                })
            } );
            this.text.blur( function() {
                $( this ).parent().css({
                    'box-shadow' : '0 0 2px 0 #fff'
                })
            } )
        }
    };
    $.fn.search = function() {
        var se = new SearchBaidu( $(this) );
        se.init();
    }
} )();