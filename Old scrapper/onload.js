/*! InstantDataScraperNext - 2023-10-26 */

function e(e) {
  return Math.max.apply(
    null,
    Object.keys(e).map(function (t) {
      return e[t];
    })
  );
}
function t(e, t) {
  return (
    (t || ".") +
    e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&").trim()
  );
}
function o(e) {
  return (e.attr("class") || "")
    .trim()
    .split(/\s+/)
    .filter(function (e) {
      return e.length > 0;
    });
}
function n(e, buttonName) {
  var t = $(e).children(),
    n = {},
    r = {};
  t.each(function () {
    if (
      !["script", "img", "meta", "style"].includes(
        this.nodeName.toLowerCase()
      ) &&
      $(this).text().trim().length
    ) {
      var e = o($(this)).sort(),
        t = e.join(" ");
      t in r || (r[t] = 0),
        r[t]++,
        e.forEach(function (e) {
          e in n || (n[e] = 0), n[e]++;
        });
    }
  });
  // # This code iterates over each element in the variable 't'.
  // # It checks if the current element's nodeName (HTML tag name) is not one of the following: 'script', 'img', 'meta', 'style'.
  // # It also checks if the text content of the current element is not empty after trimming any leading or trailing whitespace.
  // # If both conditions are met, it proceeds with the following steps:
  //   - It calls the function 'o' with the current element as an argument and assigns the result to the variable 'e'.
  //   - It sorts the elements in 'e' in ascending order.
  //   - It joins the sorted elements in 'e' into a single string separated by a space and assigns it to the variable 't'.
  //   - It checks if the string 't' is not already a key in the dictionary 'r'.
  //     - If it is not, it adds 't' as a key to 'r' with a value of 0.
  //   - It increments the value of the key 't' in the dictionary 'r' by 1.
  //   - It iterates over each element in 'e'.
  //     - It checks if the current element is not already a key in the dictionary 'n'.
  //       - If it is not, it adds the current element as a key to 'n' with a value of 0.
  //     - It increments the value of the key 'e' in the dictionary 'n' by 1.
  var l = Object.keys(r).filter(function (e) {
    return r[e] >= t.length / 2 - 2;
  });
  // This code creates a variable 'l' and assigns it the result of filtering the keys of the object 'r'.
  // The filtering is done using a callback function that takes each key 'e' as an argument.
  // Inside the callback function, it checks if the value associated with the key 'e' in the object 'r' is greater than or equal to half the length of the array 't' minus 2.
  // If the condition is true, the key 'e' is included in the filtered result.
  l.length ||
    (l = Object.keys(n).filter(function (e) {
      return n[e] >= t.length / 2 - 2;
    }));
  var s = $(e).width() * $(e).height();
  if (
    (s > 5e4 && t.length > 10 && console.log("chooseRows", s, t.length, l, e),
    !l.length || (1 === l.length && "" === l[0]))
  )
    return {
      children: t.filter(function () {
        return this.nodeName
          ? !["script", "img", "meta", "style"].includes(
              this.nodeName.toLowerCase()
            ) && !!$(this).text().trim().length
          : (console.log("???", this), !1);
      }),
      goodClasses: [],
    };
  l.length ||
    (l = Object.keys(n).filter(function (e) {
      return n[e] >= t.length / 2 - 2;
    }));

  // # This code checks if the length of the array 'l' is 0 (falsey).
  // # If it is, it assigns the result of filtering the keys of the object 'n' to 'l'.
  // # The filtering is done using a callback function that takes each key 'e' as an argument.
  // # Inside the callback function, it checks if the value associated with the key 'e' in the object 'n' is greater than or equal to half the length of the array 't' minus 2.

  // var s = $(e).width() * $(e).height();
  // if (
  //     (s > 5e4 && t.length > 10 && console.log("chooseRows", s, t.length, l, e),
  //     !l.length || (1 === l.length && "" === l[0]))
  // )

  // # This code calculates the product of the width and height of the element 'e' using jQuery.
  // # It then checks if the calculated value 's' is greater than 50000 and the length of the array 't' is greater than 10.
  // # If both conditions are true, it logs the values of 's', 't', 'l', and 'e' to the console.
  // # It then checks if the length of the array 'l' is 0 or if it has a length of 1 and the first element is an empty string.
  // # If either condition is true, it returns an object with two properties:
  //     - 'children': It filters the array 't' using a callback function that checks if the current element has a nodeName (HTML tag name) that is not one of the following: 'script', 'img', 'meta', 'style', and if the text content of the current element is not empty after trimming any leading or trailing whitespace.
  //     - 'goodClasses': An empty array.
  return {
    children: t.filter(function () {
      var e = !1,
        t = $(this);
      return (
        l.forEach(function (o) {
          e |= (function (e, t) {
            for (var o = t.split(" "), n = 0; n < o.length; n++)
              if (!e.hasClass(o[n])) return !1;
            return !0;
          })(t, o);
        }),
        e
      );
    }),
    goodClasses: l,
  };
  // # This code returns an object with two properties: 'children' and 'goodClasses'.
  // # The 'children' property is assigned the result of filtering the array 't' using a callback function.
  // # Inside the callback function, it iterates over each element in 'l' and performs the following steps:
  // #   - It initializes a variable 'e' to false.
  // #   - It assigns the current element to the variable 't' using jQuery.
  // #   - It iterates over each element in 'l' and performs the following steps:
  // #     - It calls a function that takes two arguments: 'e' and 't'.
  // #     - Inside the function, it splits the string 't' by space and assigns the result to the variable 'o'.
  // #     - It initializes a variable 'n' to 0.
  // #     - It iterates over each element in 'o' and performs the following steps:
  // #       - It checks if the current element is not a class of the element 'e'.
  // #         - If it is not, it returns false.
  // #     - It returns true.
  // #     - It assigns the result of the function to the variable 'e' using the bitwise OR assignment operator (|=).
  // #   - It returns the value of 'e'.
  // # The 'goodClasses' property is assigned the value of 'l'.
}
var r = [],
  l = 0,
  s = 5;
function a(e) {
  console.log("findTables, robots: ", e);
  e && e.length;
  var t = $("body").width() * $("body").height();
  $("body *").each(function () {
    if (
      ((area = this.offsetWidth * this.offsetHeight),
      !(isNaN(area) || area < 0.02 * t))
    ) {
      var e = n(this),
        o = e.children,
        l = o.length;
      if (!(isNaN(l) || l < 3)) {
        var s = area * l * l;
        r.push({
          table: this,
          goodClasses: e.goodClasses,
          area: area,
          children: o,
          text: o.text(),
          score: s,
          selector: w(this),
          type: "selector",
        });
      }
    }
  }),
    (r = r.sort((e, t) => t.score - e.score).slice(0, s)),
    console.log("findTables:", r);
}
function i() {
  var e = (l + r.length - 1) % r.length;
  $(r[e].table).removeClass("tablescraper-selected-table"),
    $(r[e].children).removeClass("tablescraper-selected-row"),
    $(r[l].table).addClass("tablescraper-selected-table"),
    $(r[l].children).addClass("tablescraper-selected-row");
}
function c() {
  $("*").removeClass("tablescraper-selected-table"),
    $("*").removeClass("tablescraper-selected-row");
}
function u(e) {
  return e.clone().children().remove().end().text();
}
var h,
  d,
  g = new Set();
function f(e) {
  var t = sha256.create();
  return t.update(e), t.hex();
}
function m(e) {
  if (null === localStorage.getItem("visited")) return !1;
  {
    const t = f(e),
      o = JSON.parse(localStorage.getItem("visited"));
    return o[o.length - 1] === t || o[o.length - 2] === t;
  }
}
function v(e) {
  null === localStorage.getItem("visited") &&
    localStorage.setItem("visited", JSON.stringify([]));
  const t = JSON.parse(localStorage.getItem("visited"));
  t.push(f(e)), localStorage.setItem("visited", JSON.stringify(t));
}
function b(e) {
  for (; e.length; ) {
    if ($(e).length) return $(e);
    e = e.split(">").slice(1).join(">");
  }
  return null;
}
async function p(e, selector, buttonName) {
  if (selector) {
    var s = b(selector);
    if ((console.log("getTableData:", selector, s), !s))
      return (
        e({ error: "Table not found" }), void console.log("Table not found")
      );
    r.length || (r = [{}]);
    var a = n(s, buttonName),
      c = a.children;
    return (
      console.log("Got children"),
      m(c.text())
        ? (e({
            error:
              "Table not changed. If the last page was not reached, try to increase crawl delay.",
            errorId: "finished",
          }),
          void console.log("Table not changed"))
        : ((r[l].table = s),
          (r[l].children = c),
          (r[l].goodClasses = a.goodClasses),
          (r[l].text = c.text()),
          v(c.text()),
          i(),
          void p(e))
    );
  }
  var h = [];
  r[l].children.each(function () {
    var e = {},
      t = [];
    function n(o, n, r) {
      if (o) {
        var l = n + (r ? " " + r : ""),
          s = l,
          a = 0;
        t.forEach((e) => {
          e == n && a++;
        }),
          a > 1 && (s = l + " " + a),
          (e[s] = o);
      }
    }
    !(function e(r, l, s) {
      if (s.nodeName) {
        var a =
          l +
          "/" +
          s.nodeName.toLowerCase() +
          o(r)
            .map((e) => "." + e)
            .join("");
        t.push(a),
          n(u(r).trim(), a),
          n(r.prop("href"), a, "href"),
          n(r.prop("src"), a, "src"),
          r.children().each(function () {
            e($(this), a, this);
          });
      } else console.log("what???", s);
    })($(this), "", this),
      Object.keys(e).length && h.push(e);
  }),
    console.log("Collected table data:", h),
    e({
      data: h,
      tableId: l,
      tableSelector: r[l].selector,
      goodClasses: r[l].goodClasses,
    });
}
function w(e) {
  return (
    $(e).trigger("mouseleave"),
    $(e).trigger("blur"),
    $(e)
      .parents()
      .addBack()
      .not("html")
      .not("body")
      .map(function () {
        var e = this.tagName.toLowerCase();
        return (
          "string" == typeof this.id && this.id.trim() && !this.id.match(/\d+/g)
            ? (e += t(this.id, "#"))
            : "string" == typeof this.className &&
              this.className.trim() &&
              (e += t(this.className).replace(/\s+/g, ".")),
          e
        );
      })
      .get()
      .join(">")
  );
}
function x(e) {
  window.focus(),
    (d = function (e) {
      $(this).is($(e.target)) &&
        ($("*").removeClass("tablescraper-hover"),
        $(w(this)).last().addClass("tablescraper-hover"));
    });
  (h = function (t) {
    return (
      t.preventDefault(),
      (function (t) {
        $("*").off("click", h).off("mouseenter", d),
          $(".tablescraper-hover").removeClass("tablescraper-hover"),
          $(".tablescraper-next-button").removeClass(
            "tablescraper-next-button"
          );
        var o = w(t.target);
        $(t.target).addClass("tablescraper-next-button"),
          console.log("Next button selector:", o),
          e({ selector: o });
      })(t),
      !1
    );
  }),
    $("*").click(h).on("mouseenter", d);
}
var y = !1;
function C(e) {
  var t = document.createEvent("MouseEvents");
  t.initMouseEvent(
    "mousedown",
    !0,
    !0,
    window,
    1,
    e.x,
    e.y,
    e.x,
    e.y,
    !1,
    !1,
    !1,
    !1,
    0,
    null
  );
  var o = document.createEvent("MouseEvents");
  o.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    e.x,
    e.y,
    e.x,
    e.y,
    !1,
    !1,
    !1,
    !1,
    0,
    null
  );
  var n = document.createEvent("MouseEvents");
  n.initMouseEvent(
    "mouseup",
    !0,
    !0,
    window,
    1,
    e.x,
    e.y,
    e.x,
    e.y,
    !1,
    !1,
    !1,
    !1,
    0,
    null
  ),
    e.dispatchEvent(t),
    e.dispatchEvent(o),
    e.dispatchEvent(n);
}
function N(e, t) {
  console.log("Scrolling down"),
    $("html, body").animate({ scrollTop: $(document).height() }, 1e3),
    setTimeout(() => {
      const o = $(document).height();
      return t(
        e === o
          ? {
              error: "Finished crawling. Download CSV or Excel file",
              errorId: "finished",
            }
          : {}
      );
    }, 1e3);
}
function S() {
  return new Promise(function (e, t) {
    console.log("Scrolling down"),
      $("html, body").animate({ scrollTop: $(document).height() }, 5e3),
      setTimeout(() => {
        e();
      }, 5e3);
  });
}
function E(e) {
  return new Promise(function (t, o) {
    var n = $(e.rows),
      s = 0,
      a = 50;
    n.length * a > 3e3 && (a = 3e3 / n.length),
      a < 10 && (a = 10),
      console.log("Lazy scrolling", n.length, a);
    var c = setInterval(function () {
      var o = $(e.rows);
      if (
        (o.length > n.length &&
          r[l].robot.next_page &&
          ((n = o).addClass("tablescraper-selected-row"), i()),
        s >= n.length || s * a > 1e4)
      )
        return clearInterval(c), console.log("Lazy scrolling done"), void t();
      n[s].scrollIntoView(!1), s++;
    }, a);
  });
}
function T(e, t, o) {
  var n = (function (e) {
    for (; e.length; ) {
      if ($(e).length) return $(e);
      e = e.split(">").slice(1).join(">");
    }
    return null;
  })(e);
  return n
    ? (n.last().addClass("tablescraper-next-button"),
      o
        ? t({})
        : ($("*").off("click", h).off("mouseenter", d),
          void setTimeout(function () {
            console.log("clickNext:", n.last()[0]), t({}), C(n.last()[0]);
          }, 100)))
    : t(
        o
          ? { error: "Next button not found", errorId: "error" }
          : {
              error:
                "No more next buttons: Finished crawling. Download CSV or Excel file",
              errorId: "finished",
            }
      );
}
function I(e) {
  let t = document.documentElement.innerHTML;
  e({
    html: (t = t.replace(
      /<\/?(!--)?(html|body|StartFragment|EndFragment)-*>/g,
      ""
    )),
  });
}
function j(e, t, o) {
  let n = (t = t.replace(".tablescraper-selected-row", "").split(" "))[0]
    .split("/")
    .filter((e) => e)
    .slice(1)
    .map((e) =>
      e
        .split(".")
        .map((e) => $.escapeSelector(e))
        .join(".")
    );
  for (var r = 0; r < n.length; r++) {
    let t = e + " " + n.slice(0, r + 1).join(">"),
      o = t + ':not([class]:not([class=""]))';
    n[r].includes(".") ||
      selectors_equivalent(t, o) ||
      (n[r] = n[r] + ':not([class]:not([class=""]))');
  }
  n = n.join(">");
  let l = "";
  isNaN(t[t.length - 1])
    ? n.length > 0 && (l = ":eq(0)")
    : (l = `:eq(${+t[t.length - 1] - 1})`);
  var s = { selector: (n += l) };
  console.log("Sending response: ", s), o({ selector: n });
}

async function click(e, buttonName) {
  console.log("e: ", e);
  console.log("called");
  var t = $(e).children(),
    n = {},
    r = {};
  console.log("t: ", t);
  t.each(function () {
    console.log("buttonName: ", buttonName);
    if (buttonName) {
      for (var i = 0; i < this.children.length; i++) {
        buttonElem = this.children[i].querySelector("button");
        console.log("buttonElem: ", buttonElem);
        console.log(
          "buttonElem.textContent.toLowerCase().includes(buttonName.toLowerCase()): ",
          buttonElem.textContent
            .toLowerCase()
            .includes(buttonName.toLowerCase())
        );
        if (
          buttonElem.textContent
            .toLowerCase()
            .includes(buttonName.toLowerCase())
        ) {
          console.log("True.............................................");
          buttonElem.click();
        }
      }
      const event = new KeyboardEvent("keydown", {
        key: "Escape",
        keyCode: 27,
        which: 27,
      });

      document.dispatchEvent(event);
    }
  });
}

async function clickFirst(e, buttonName) {
  console.log("e: ", e);
  console.log("message send");
  var t = $(e).children(),
    n = {},
    r = {};
  console.log("t: ", t);
  t.each(function () {
    console.log("this: ", this);
    for (var i = 0; i < this.children.length; i++) {
      console.log(
        "this.children[i].nodeName: ",
        this.children[i].nodeName.toLowerCase() in ["table", "tr", "tbody"]
      );
      if (
        ["table", "tr", "tbody"].includes(
          this.children[i].nodeName.toLowerCase()
        )
      ) {
        buttonElem = this.children[i].querySelector("button");
        console.log("buttonElem: ", buttonElem);
        // console.log("True.............................................");
        if (buttonElem) {
          buttonElem.click();
        }
      }
    }
    // const event = new KeyboardEvent("keydown", {
    //   key: "Escape",
    //   keyCode: 27,
    //   which: 27,
    // });

    // document.dispatchEvent(event);
  });
}

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
chrome.runtime.onMessage.addListener(function (e, t, o) {
  return (
    console.log("Got request", e),
    "nextTable" == e.action || "findTables" == e.action
      ? ("findTables" == e.action
          ? ((r = []), a(e.robots))
          : (r.filter((e) => !e.robot).length || a(),
            (currentIndex = (currentIndex + 1) % r.length)),
        i(),
        localStorage.removeItem("visited"),
        o({
          tableId: l,
          tableSelector: r[l].selector,
          robot: r[l].robot,
          href: window.location.href,
          hostname: window.location.hostname,
        }),
        !0)
      : "clicking" == e.action
      ? (console.log("Clicking request"), click(e.selector, e.buttonName), !0)
      : "clickingFirst" == e.action
      ? (console.log("Clicking request"),
        clickFirst(e.selector, e.buttonName),
        !0)
      : "getTableData" == e.action
      ? (console.log("GetTableData request"),
        p(o, e.selector, e.buttonName),
        !0)
      : "getNextButton" == e.action
      ? (x(o), !0)
      : "clickNext" == e.action
      ? (T(e.selector, o), !0)
      : "scrollDown" === e.action
      ? (c(), N(0, o), !0)
      : "markNextButton" == e.action
      ? (T(e.selector, o, !0), !0)
      : void o({})
  );
});
