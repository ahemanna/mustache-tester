(function (window, undefined) {

  var validateInput = function () {
    var jsonStr = document.getElementById("jsonObj").value;
    var templateStr = document.getElementById("templateStr").value;
    var jsonObj;
    var isJsonStrValid, isTemplateStrValid;

    if (jsonStr == "" || jsonStr == null || jsonStr == undefined || !isJson(jsonStr)) {
      isJsonStrValid = false;
      $("#jsonObj").addClass("error");
    } else {
      isJsonStrValid = true;
      $("#jsonObj").removeClass("error");
    }

    if (templateStr == "" || templateStr == null || templateStr == undefined) {
      isTemplateStrValid = false;
      $("#templateStr").addClass("error");
    } else {
      isTemplateStrValid = true;
      $("#templateStr").removeClass("error");
    }

    if (isJsonStrValid && isTemplateStrValid) {
      jsonObj = JSON.parse(jsonStr);
      transform({ jsonObj, templateStr });
    }
  }

  var transform = function (obj) {
    var hbObj = Handlebars.compile(obj.templateStr);
    var compiledStr = hbObj(obj.jsonObj);

    document.getElementById("compiledStr").value = compiledStr;
  }

  var isJson = function (str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  $("#previewBtn").click(validateInput);

})(window);
