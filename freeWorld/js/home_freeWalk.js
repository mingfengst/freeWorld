/**
 * Created by CMF on 2017/3/15.
 */
$(function () {
    $.ajax({
        url : "json/index/freeWalk.json",
        success : function (data, staus, jsxhr) {
            handleFreeWalkData(data);
        }
    })
    
    // 处理数据
    function handleFreeWalkData(result) {
        for(var i = 0; i < result.length; i++){
            // 创建存放选项卡标题 li，存放标题
            var $tags_li = $("<li>");
            // 每个标题 li 中的 a
            var $tagsLi_a = $("<a>");
            // 给 a 标签添加文本
            $tagsLi_a.text(result[i].title);
            // 将 a 标签插入标题 li 中
            $tags_li.append($tagsLi_a);
            // 将标题 li 插入 ul 中
            $(".home_freeWalk_tags").append($tags_li);

            // 创建 content 中的 ul，存放选项卡内容
            var $contentDiv_contentUlUl = $("<ul>");
            $contentDiv_contentUlUl.attr("class", "contentUl clearFix");

            // 循环填充每个 ul 中的内容
            for(var j = 0; j < result[i].data.length; j++){
                // 创建 ul 中的 li，存放选项卡中的每个模块
                var $contentUlUl_li = $("<li>");
                if(j == 0){
                    // 如果是第一个 li，则类名为 contentUlLiOne
                    $contentUlUl_li.attr("class", "contentUlLiOne");
                } /*else if(j == result[i].data.length-1){
                    // 如果是最后一个，则类名为 contentUlLiMore
                    $contentUlUl_li.attr("class", "contentUlLiMore");
                }*/ else {
                    // 其他，则类名为 contentUlLiItem
                    $contentUlUl_li.attr("class", "contentUlLiItem");
                }

                // 创建 li 中的 a
                var $li_a = $("<a>");
                // 创建 a 中的 p
                var $A_picsP = $("<p class='freeWalkPics'></p>");
                // 创建 p 中的 img
                var $picsP_lazyImg = $("<img>");
                // 给 img 添加属性
                $picsP_lazyImg.attr("class", "freeWalkLazy");
                $picsP_lazyImg.attr("src", result[i].data[j].imgUrl);
                // 将 img 插入类名为 freeWalkPics 的 p 标签中
                $A_picsP.append($picsP_lazyImg);

                // 创建 a 中的 div，并添加属性
                var $A_infosDiv = $("<div class='freeWalkInfos'></div>");
                // 创建 div 中类名为 freeWalkType 的 p，并添加属性
                var $infosDiv_typeP = $("<p class='freeWalkType'></p>");
                $infosDiv_typeP.text("机票");

                // 创建 div 中类名为 freeWalkPrice 的 p
                var $infosDiv_priceP = $("<p class='freeWalkPrice'></p>");
                var $priceP_em = $("<em></em>");
                $priceP_em.text(result[i].data[j].price);
                // $contentUlLiADivPriceP_em.after("元起");

                // 将 em 插入类名为 freeWalkPrice 的 p 标签中
                $infosDiv_priceP.append($priceP_em);

                // 将类名为 freeWalkType 和 freeWalkPrice 的 p 标签插入 div 中
                $A_infosDiv.append($infosDiv_typeP);
                $A_infosDiv.append($infosDiv_priceP);


                // 创建类名为 freeWalkTitles 的 div
                var $A_titlesDiv = $("<div class='freeWalkTitles'></div>");
                // 创建 h3 标签，并添加属性
                var $titlesDiv_titleH3 = $("<h3 class='freeWalkTitle'></h3>");
                $titlesDiv_titleH3.text(result[i].data[j].title);

                // 将 h3 插入 div.title 中
                $A_titlesDiv.append($titlesDiv_titleH3);

                if(result[i].data[j].time){
                    // 创建类名为 freeWalkTime 的 p 标签，并添加属性
                    var $titlesDiv_timeP = $("<p class='freeWalkTime'></p>");
                    $titlesDiv_timeP.text(result[i].data[j].time);
                    $A_titlesDiv.append($titlesDiv_timeP);
                }

                // 将 p.pics, div.infos, div.title 插入 a 标签中
                $li_a.append($A_picsP);
                $li_a.append($A_infosDiv);
                $li_a.append($A_titlesDiv);
                // 将 a 标签插入 li 中
                $contentUlUl_li.append($li_a);
                // 将 li 标签插入 ul 中
                $contentDiv_contentUlUl.append($contentUlUl_li);
                // 将 ul 插入 div.home_freeWalk_content 中
                $(".home_freeWalk_content").append($contentDiv_contentUlUl);
            }
        }
    }
})