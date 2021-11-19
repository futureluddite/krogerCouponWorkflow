
 javascript:(function(){
  function replaceCommonStrings(category) {
    var replaceList = [
      ["Simple Truth Organic","STO"],
      ["Simple Truth","ST"],
      ["Private Selection","PS"],
      ["™",""],
      ["®",""],
      ["&amp;","&"]
    ];
    var map;
    for (map of replaceList){
      category = category.replace(map[0],map[1]);
    };
    return category;
  }

  function sortFunction(a, b) {
    return (a[1] < b[1]) ? -1 : 1;
  }

  function main() {
    /*Delete Coupons that have been removed*/
    var removeNotices = document.getElementsByClassName("CannotRemoveCouponNew");
    for (var i = removeNotices.length-1; i >= 0; i--) {
      removeNotices[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }

    /*Original code*/
    var couponContainers = document.getElementsByClassName("CouponCardNew");
    var cc, category, savings, description;
    var list = [];
    for (cc of couponContainers){
      if (cc !== undefined) {
        description = replaceCommonStrings(cc.getElementsByClassName("CouponCard-Description")[0].innerHTML.replace(/.*(on|off)[ 0-9]+/g,""));
        savings     = cc.getElementsByClassName("CouponCard-Infos")[0].getElementsByTagName("h2")[0].getAttribute("aria-label").replace("Save ","");
        category    = cc.getAttribute("data-category").slice(0, -1);
        list.push([description + " (" + savings + ")\n",category]);
      }
    }
    list = list.sort(sortFunction);
    var row;
    var ret = "";
    for (row of list){
      ret = ret + row[0];
    }
    alert(ret)
  }

  main();
})();
