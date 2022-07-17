$(".number .number_controls > div").on("click",(function(){var s=$(this).closest(".number").find("input"),n=parseInt(s.val())||0;$(this).hasClass("nc-minus")&&(n=n-1||n>=0),$(this).hasClass("nc-plus")&&(n+=1),s.val(n).change()}));
//# sourceMappingURL=index.ab8e1fd4.js.map
