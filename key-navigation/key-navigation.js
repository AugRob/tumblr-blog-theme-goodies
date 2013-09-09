$(document).ready(function () {
    window.postNumber = 0;
    var onPost = false;
    var postArray = $(".post").toArray();
    var postMargin = -8;
    var postDelay = 100;
    $(document).on('keydown', function (e) {
        window.keyCode = e.which;
        if (postNumber < postArray.length, postNumber >= 0) {
            //Press 'J'
            if (e.which == 74) {
                if (postNumber < postArray.length - 1) {
                    if (onPost == true && 
                       $(window).scrollTop() + $(window).height() != $(document).height())
                       //$(document).height() - $(".post").eq(postNumber + 1).position().top >= $(window).height()) {
                        {   
                        postNumber = postNumber + 1;
                        $("html").animate({scrollTop: $(".post").eq(postNumber).position().top + postMargin}, postDelay);
                    } else {
                        while ($(".post").eq(postNumber).position().top < $(window).scrollTop()) {
                            postNumber++;
                        }
                        $("html").animate({scrollTop: $(".post").eq(postNumber).position().top + postMargin}, postDelay);
                        onPost = true;
                    }
                }
            }
            //Press 'K'
            else if (e.which == 75) {
                if (postNumber != 0) {
                    postNumber = postNumber - 1;
                    $("html").animate({scrollTop: $(".post").eq(postNumber).position().top + postMargin}, postDelay);
                    onPost = true;
                }
            }
            if (postNumber < 0) {
                postNumber = 0;
            }
            if (postNumber >= postArray.length) {
                postNumber = (postArray.length - 1);
            }

        }
        $(".counter").text(postNumber + " " + onPost);
    });
    //Reset
    /*$(window).on('scroll', function () {
if (postNumber > 0) {
if ($(window).scrollTop($(".post").eq(postNumber).position().top) != $(window).scrollTop()) {
onPost = false;
postNumber = 0;
}
}
});*/
});
