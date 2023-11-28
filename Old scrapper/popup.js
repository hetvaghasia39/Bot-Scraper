/*! InstantDataScraperNext - 2023-10-26 */

function e(e, t, o, n, r, a, i) {
  var s = {},
    c = null,
    l = !1,
    d = !1,
    u = {
      urls: ["<all_urls>"],
      tabId: o,
      types: [
        "main_frame",
        "sub_frame",
        "stylesheet",
        "script",
        "font",
        "object",
        "xmlhttprequest",
        "other",
      ],
    };
  function f() {
    !l &&
      d &&
      (
        i ||
        function (e) {
          e(!0);
        }
      )(function (e) {
        if (!e) return h();
        l ||
          ((l = !0),
          chrome.webRequest.onBeforeRequest.removeListener(g),
          chrome.webRequest.onCompleted.removeListener(p),
          chrome.webRequest.onErrorOccurred.removeListener(p),
          t());
      });
  }
  function g(e) {
    (s[e.requestId] = 1), (c = new Date());
  }
  function p(e) {
    c && (delete s[e.requestId], Object.keys(s).length || h());
  }
  function h() {
    setTimeout(function () {
      new Date() - c < r || Object.keys(s).length || f();
    }, r);
  }
  chrome.webRequest.onBeforeRequest.addListener(g, u),
    chrome.webRequest.onCompleted.addListener(p, u),
    chrome.webRequest.onErrorOccurred.addListener(p, u),
    (
      e ||
      function (e) {
        e();
      }
    )(function () {
      setTimeout(f, n),
        setTimeout(function () {
          (d = !0), h();
        }, a);
    });
}
function t(e, t) {
  return (
    t && (e += 1462), (Date.parse(e) - new Date(Date.UTC(1899, 11, 30))) / 864e5
  );
}
function o(e, o) {
  for (
    var n = {}, r = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } }, a = 0;
    a != e.length;
    ++a
  )
    for (var i = 0; i != e[a].length; ++i) {
      r.s.r > a && (r.s.r = a),
        r.s.c > i && (r.s.c = i),
        r.e.r < a && (r.e.r = a),
        r.e.c < i && (r.e.c = i);
      var s = { v: e[a][i] };
      if (null !== s.v) {
        var c = XLSX.utils.encode_cell({ c: i, r: a });
        "number" == typeof s.v
          ? (s.t = "n")
          : "boolean" == typeof s.v
          ? (s.t = "b")
          : s.v instanceof Date
          ? ((s.t = "n"), (s.z = XLSX.SSF._table[14]), (s.v = t(s.v)))
          : (s.t = "s"),
          (n[c] = s);
      }
    }
  return r.s.c < 1e7 && (n["!ref"] = XLSX.utils.encode_range(r)), n;
}
function n(e, t) {
  e.data.unshift(e.fields);
  var n = new (function e() {
      if (!(this instanceof e)) return new e();
      (this.SheetNames = []), (this.Sheets = {});
    })(),
    r = o(e.data);
  return (
    n.SheetNames.push(t), (n.Sheets[t] = r), XLSX.write(n, { type: "binary" })
  );
}
function r(e) {
  try {
    e();
  } catch (e) {
    console.log("Error: ", e);
  }
}
import a from "./js/google-analytics.js";
window.addEventListener("load", () => {
  r(() => a.firePageViewEvent(document.title, document.location.href));
});
var i = { id: parseInt(f("tabid")), url: f("url") },
  s = {},
  c = 1e3;
console.log("currentTab.url: ", i.url);
var l = null;
async function d() {
  console.log("CurrentTab: ", i),
    null !== i.url.toLowerCase().match(/\/\/[a-z]+\.linkedin\.com/)
      ? ($("#waitHeader").hide(),
        g(
          "We're unable to collect data from LinkedIn. Sorry for the inconvenience.  If you have further questons please contact us at info@webrobots.io",
          "noResponseErr",
          !1,
          !0
        ))
      : (I(),
        setTimeout(function () {
          console.log("no response"), $("#waitHeader").is(":visible") && y(!0);
        }, 5e4),
        $(window).resize(function () {
          v();
        }),
        R());
}
function u(e, t) {
  return (t || ".") + e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&");
}
function f(e) {
  for (
    var t = window.location.search.substring(1).split("&"), o = 0;
    o < t.length;
    o++
  ) {
    var n = t[o].split("=");
    if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1]);
  }
  console.log("Query variable %s not found", e);
}
function g(e, t, o, n) {
  //Error generator
  if ("" === e) return $("#" + t).hide();
  $("#" + t)
    .show()
    .text(e),
    o && L(e),
    n && a.fireEvent("Error", { url: s.startingUrl || i.url, msg: e });
}
function p(e) {
  var t = e.length,
    o = { "": 1 / 0 },
    n = {},
    r = {},
    a = {},
    i = {};
  function c(e) {
    return e in o ? o[e] : ((o[e] = $(u(e)).length), o[e]);
  }
  e.forEach(function (e) {
    for (var t in e) t in n || (n[t] = 0), n[t]++;
  }),
    Object.keys(n)
      .map(function (e) {
        return [n[e], e];
      })
      .forEach(function ([o, n]) {
        var s = "",
          l = 1 / 0;
        n.split(" ")[0]
          .split("/")
          .slice(1)
          .reverse()
          .forEach(function (e) {
            e.split(".")
              .slice(1)
              .forEach(function (e) {
                l < 2 * t || c(e) >= l || ((s = e), (l = c(e)));
              });
          });
        var d = n.split(" ")[1],
          u = 0,
          f = e.map(function (e) {
            return n in e;
          });
        d && isNaN(d) && (s += " " + d),
          s in r
            ? (r[s].forEach(function (e, t) {
                if (!u) {
                  var o = !0;
                  e.forEach(function (e, t) {
                    o &= !(f[t] && e);
                  }),
                    o && (u = t + 1);
                }
              }),
              u
                ? (r[s][u - 1] = r[s][u - 1].map(function (e, t) {
                    return f[t] || e;
                  }))
                : (r[s].push(f), (u = r[s].length)),
              u > 1 && (s += " " + u))
            : (r[s] = [f]),
          s in a || (a[s] = []),
          a[s].push(n),
          s in i || (i[s] = 0),
          (i[s] += o);
      });
  var l = {},
    d = 0,
    f = 0,
    g = 0;
  (r = Object.keys(a).filter(function (o) {
    var n = {},
      r = [];
    return (
      !(o in s.config.deletedFields) &&
      (e.map(function (e) {
        for (var t, i = 0; i < a[o].length; i++)
          a[o][i] in e && ((t = e[a[o][i]]) in n || (n[t] = 0), n[t]++);
        r.push(t);
      }),
      Object.keys(n).length && n[Object.keys(n)[0]] == t
        ? (f++, !1)
        : (r = JSON.stringify(r)) in l
        ? (d++, !1)
        : ((l[r] = 1), !(i[o] < 0.2 * t) || (g++, !1)))
    );
  })),
    console.log("Names: ", r),
    console.log("Name paths: ", a),
    console.log("Same columns: " + d),
    console.log("Columns with same rows: " + f),
    console.log("Columns with few rows: " + g),
    console.log("Generated column names:", r);
  var p = {
    fields: r,
    data: e.map(function (e) {
      return r.map(function (t) {
        for (var o = 0; o < a[t].length; o++)
          if (a[t][o] in e) return e[a[t][o]];
        return "";
      });
    }),
  };
  return console.log("Generated csv:", p), (s.names = r), (s.namePaths = a), p;
}
function h(e) {
  return e.map(function (e) {
    return e in s.config.headers ? s.config.headers[e] : e;
  });
}
function w(e) {
  var t = p(e);
  return (t.fields = h(t.fields)), t;
}
function m(e) {
  for (
    var t = new ArrayBuffer(e.length), o = new Uint8Array(t), n = 0;
    n != e.length;
    ++n
  )
    o[n] = 255 & e.charCodeAt(n);
  return t;
}
function b() {
  a.fireEvent("Download", {
    hostName: s.hostName,
    startingUrl: s.startingUrl,
    dataLength: s.data.length,
  }),
    (() => {
      let e = (e) => {
          let t = {};
          for (let o = 0; o < 4; o++)
            void 0 !== e[o]
              ? (t[`selector${o}`] = e[o])
              : (t[`selector${o}`] = "");
          return t;
        },
        t = Object.keys(s.config.headers).length;
      t &&
        U(!0).then((o) => {
          let [n, r] = o;
          const i = (e) => r.find((t) => t.field_id === e);
          let c = {
            tableId: s.tableId,
            hostName: s.hostName,
            startingUrl: s.startingUrl,
          };
          if (t)
            for (name in s.config.headers) {
              let t = i(s.config.headers[name])
                  .selector.split(",")
                  .map((e) => e.slice(-100)),
                o = Object.assign(e(t), c, {
                  originalName: name,
                  newName: s.config.headers[name],
                });
              a.fireEvent("RenameColumn", o);
            }
        });
    })();
}
function v() {
  console.log("Showing preview");
  var e = p(s.data);
  (e.data = e.data.slice(0, c)), (s.previewLength = e.data.length);
  var t = $(".wtHolder").scrollTop(),
    o = $(".wtHolder").scrollLeft(),
    n = !1;
  $("#hot").empty();
  new Handsontable($("#hot").get(0), {
    data: e.data,
    colHeaders: h(e.fields),
    wordWrap: !1,
    manualColumnResize: !0,
    width: $(window).width() - 20,
    height: $(window).height() - $("#hot").get(0).getBoundingClientRect().y,
    afterRender: function () {
      n ||
        ((n = !0), $(".wtHolder").scrollTop(t), $(".wtHolder").scrollLeft(o));
    },
    modifyColWidth: function (e, t) {
      if (e > 300) return 300;
    },
    afterGetColHeader: function (t, o) {
      if (-1 != t) {
        $(o).children().length > 1
          ? $(".hot-header", o).remove()
          : $(o).click(function () {
              console.log("a");
              var e = this;
              console.log($(".header-input", this)),
                setTimeout(function () {
                  $(".header-input", e).trigger("focus");
                }, 20);
            });
        var n = $("<div>", { class: "hot-header" }),
          r = $("<div>", { class: "header-input", contenteditable: "true" });
        s.config.headers[e.fields[t]]
          ? r.text(s.config.headers[e.fields[t]])
          : r.text(o.firstChild.textContent),
          $(o).append(n),
          n.append(r),
          n.append(
            $("<span>", {
              class: "glyphicon glyphicon-remove remove-column",
              style: "padding-top: 2.5px",
            }).click(function () {
              (s.config.deletedFields[e.fields[t]] = !0),
                S(),
                $("#resetColumns").show(),
                v();
            })
          ),
          r.get(0).addEventListener("input", function (o) {
            (s.config.headers[e.fields[t]] = r.text()), S();
          }),
          (o.firstChild.style.display = "none");
      }
    },
    beforeOnCellMouseDown: function (e, t, o) {
      t.row < 0 && e.stopImmediatePropagation();
    },
  });
}
function S() {
  localStorage.setItem(s.configName, JSON.stringify(s.config));
}
function y(e) {
  $("#waitHeader").hide(),
    g(
      "Instant Data doesn't support data extraction from this site yet. Our administrators are notified and will try to add support in the future. Thanks for trying us out!",
      "noResponseErr",
      !1,
      !0
    );
}
function k() {
  return localStorage.getItem("nextSelector:" + s.hostName);
}
function x(e, t) {
  if (!e)
    return (
      console.log("afterSelectTable no response"),
      i.reloaded
        ? y()
        : ((i.reloaded = !0),
          chrome.tabs.reload(i.id, {}, function () {
            chrome.tabs.onUpdated.addListener(function e(t, o) {
              "complete" === o.status &&
                t === i.id &&
                (chrome.tabs.onUpdated.removeListener(e), R());
            });
          }))
    );
  (s.tableId = e.tableId),
    (s.scraping = !1),
    (s.failedToProcess = !1),
    (s.processingError = null),
    (s.tableSelector = e.tableSelector),
    (s.startingUrl = e.href),
    (s.hostName = e.hostname),
    (s.previewLength = 0),
    (s.configName = e.hostname + "-config"),
    (s.config = JSON.parse(localStorage.getItem(s.configName)) || {
      headers: {},
      deletedFields: {},
      crawlDelay: 1e3,
      maxWait: 2e4,
    }),
    a.fireEvent(t ? "OpenPopup" : "AnotherTable", {
      hostName: s.hostName,
      startingUrl: s.startingUrl,
    }),
    Object.keys(s.config.deletedFields).length && $("#resetColumns").show();
  var o = N(i.url);
  $("#wrongTable").show(),
    s.config.infinateScrollChecked && $("#infinateScroll").click(),
    chrome.tabs.sendMessage(i.id, { action: "getTableData" }, function (e) {
      console.log("getTableData response: ", e),
        e && e.error
          ? g("Something went wrong!", "noResponseErr", !0)
          : e.tableId == s.tableId &&
            (e.failedToProcess
              ? (g(
                  "Failed to process rows on server. Showing raw data instead.",
                  "error",
                  !1
                ),
                (s.failedToProcess = !0),
                (s.processingError = e.processingError))
              : ($("#error").hide(), (s.failedToProcess = !1)),
            s.pages ||
              ($("#nextButton").show(),
              (s.nextSelector = k()),
              console.log("Next selector for " + s.hostName, s.nextSelector),
              s.nextSelector &&
                chrome.tabs.sendMessage(
                  i.id,
                  { action: "markNextButton", selector: s.nextSelector },
                  function (e) {
                    e.error || $("#startScraping").show();
                  }
                )),
            $("#wait").hide(),
            $("#content").show(),
            g(
              'Download data or locate "Next" to crawl multiple pages',
              "instructions"
            ),
            (s.data = e.data),
            (s.pages = 1),
            (s.lastRows = e.data.length),
            (s.tableSelector = e.tableSelector),
            (s.goodClasses = e.goodClasses),
            (s.workingTime = 0),
            q(),
            $(".download-button").show(),
            v(),
            $("#csv")
              .off("click")
              .click(function () {
                console.log("Downloading CSV..."), r(b), P({ download: !0 });
                let e = w(s.data);
                e.data.forEach((t, o) => {
                  t.forEach((t, n) => {
                    Array.isArray(t) &&
                      (e.data[o][n] = Papa.unparse([t], {
                        quotes: !0,
                        escapeChar: '"',
                      }));
                  });
                }),
                  saveAs(
                    new Blob(
                      [Papa.unparse(e, { quotes: !0, escapeChar: '"' })],
                      { type: "application/octet-stream" }
                    ),
                    o + ".csv"
                  );
              }),
            $("#xlsx")
              .off("click")
              .click(function () {
                console.log("Downloading XLS..."),
                  r(b),
                  P({ download: !0 }),
                  saveAs(
                    new Blob([m(n(w(s.data), i.url.substring(0, 100)))], {
                      type: "application/octet-stream",
                    }),
                    o + ".xlsx"
                  );
              }),
            $("#copy")
              .off("click")
              .click(function () {
                console.log("Copying tsv data to clipboard"),
                  r(b),
                  P({ download: !0 }),
                  E(Papa.unparse(w(s.data), { delimiter: "\t" }));
              }));
    });
}
function N(e) {
  var t = new URL(e).hostname.split(".");
  return t[0].indexOf("www") > -1 ? t[1] : t[0];
}
function E(e) {
  var t = function (t) {
    t.preventDefault(),
      t.clipboardData
        ? t.clipboardData.setData("text/plain", e)
        : window.clipboardData && window.clipboardData.setData("Text", e);
  };
  window.addEventListener("copy", t),
    document.execCommand("copy"),
    window.removeEventListener("copy", t);
}
function R() {
  chrome.tabs.sendMessage(
    i.id,
    { action: "findTables", robots: l },
    function (e) {
      x(e, !0);
    }
  );
}
function infiniteScrollFunc() {
  return $("#infinateScroll").is(":checked");
}
function D(e) {
  s.data = s.data.concat(e);
  var t = new Set();
  s.data.forEach((e) => t.add(JSON.stringify(e))),
    (s.data = Array.from(t, (e) => JSON.parse(e)));
}
function startScraping() {
  (s.gettingNext = !1),
    (s.scraping = !0),
    console.log("Starting scraping..."),
    $("#startScraping").hide(),
    $("#stopScraping").show(),
    //Error generator
    g("", "error"),
    g('Please wait for more pages or press "Stop crawling".', "instructions"),
    infiniteScrollFunc() && $("#infinateScrollElement").hide();
  var t = new Date();
  !(function o() {
    const scrollDownFilter = function (callback) {
      console.log("Executing scroll down filter");
      chrome.tabs.sendMessage(
        i.id,
        { action: "scrollDown" },
        function (response) {
          if (response && response.error) {
            g("", "instructions");
            g(response.error, response.errorId || "error", true);
          }
          $("#wrongTable").hide();
          callback();
        }
      );
    };
    var clickNext = function (callback) {
      console.log("Clicking next..."),
        chrome.tabs.sendMessage(
          i.id,
          { action: "clickNext", selector: s.nextSelector },
          function (response) {
            if (response && response.error)
              return (
                console.log("Clicked next:", response),
                g("", "instructions"),
                g(response.error, response.errorId, !0)
              );
            $("#wrongTable").hide(), callback();
          }
        );
    };
    infiniteScrollFunc() && (clickNext = scrollDownFilter),
      e(
        clickNext,
        function () {
          chrome.tabs.sendMessage(
            i.id,
            {
              action: "getTableData",
              selector: s.tableSelector,
              buttonName: $("#searchText").val(),
            },
            function (e) {
              if ((console.log("getTableData request 2", e), e)) {
                if (e.error)
                  return (
                    g("", "instructions"), g(e.error, e.errorId || "error", !0)
                  );
                e.failedToProcess
                  ? (g(
                      "Failed to process rows. Showing raw data instead.",
                      "error",
                      !1
                    ),
                    (s.failedToProcess = !0),
                    (s.processingError = e.processingError))
                  : ($("#error").hide(), (s.failedToProcess = !1)),
                  (s.lastRows = e.data.length),
                  s.pages++,
                  (s.workingTime += new Date() - t),
                  (t = new Date()),
                  D(e.data),
                  q(),
                  s.previewLength < c
                    ? v()
                    : g("Preview limited to 1000 rows.", "previewLimit"),
                  s.scraping && o();
              }
            }
            // # This is a callback function that is passed as an argument to the `chrome.tabs.sendMessage` method.
            // # It receives a response object `e` as a parameter.
            // # It first logs the message "getTableData request 2" and the value of `e`.
            // # It then checks if `e` is truthy (not null, undefined, or false).
            // # If `e` has an `error` property, it displays an empty message and the error message using the `g` function.
            // # If `e` has a `failedToProcess` property, it displays a message indicating that rows failed to process and sets the `failedToProcess` property of `s` to true.
            // # It also sets the `processingError` property of `s` to the value of `e.processingError`.
            // # If none of the above conditions are met, it hides the `error` element and sets the `failedToProcess` property of `s` to false.
            // # It then sets the `lastRows` property of `s` to the length of `e.data`.
            // # It increments the `pages` property of `s`.
            // # It calculates the time taken for the current iteration and adds it to the `workingTime` property of `s`.
            // # It updates the value of `t` to the current date and time.
            // # It calls the `D` function with `e.data` as an argument to append the data to `s.data`.
            // # It calls the `q` function to update the statistics displayed on the page.
            // # If the `previewLength` property of `s` is less than `c`, it calls the `v` function to display the preview.
            // # Otherwise, it displays a message indicating that the preview is limited to 1000 rows.
            // # Finally, if `s.scraping` is true, it calls the `o` function recursively to continue
          );
        },
        i.id,
        s.config.maxWait,
        100,
        s.config.crawlDelay,
        function (e) {
          chrome.tabs.sendMessage(i.id, {}, function (t) {
            e(void 0 !== t);
          });
        }
      );
  })();
}
function I() {
  $("#stopScraping").click(L),
    $("#crawlDelay").bind(
      "propertychange change click keyup input paste",
      function () {
        var e = $(this).val();
        if (isNaN(e) || e < 0 || parseInt(1e3 * e) >= s.config.maxWait)
          return g("Bad min waiting value", "inputError");
        g("", "inputError"), (s.config.crawlDelay = parseInt(1e3 * e)), S();
      }
    ),
    $("#maxWait").bind(
      "propertychange change click keyup input paste",
      function () {
        var e = $(this).val();
        if (isNaN(e) || parseInt(1e3 * e) <= s.config.crawlDelay)
          return g("Bad max waiting value", "inputError");
        g("", "inputError"), (s.config.maxWait = parseInt(1e3 * e)), S();
      }
    ),
    $("#resetColumns").click(function () {
      (s.config.deletedFields = {}), S(), $("#resetColumns").hide(), v();
    }),
    $("#infinateScroll").click(function (e) {
      $(this).is(":checked")
        ? ((s.config.infinateScrollChecked = !0),
          $("#nextButton").hide(),
          $("#startScraping").show())
        : ((s.config.infinateScrollChecked = !1),
          $("#nextButton").show(),
          $("#startScraping").hide()),
        S();
    });
}
function L(e = null) {
  (s.scraping = !1),
    console.log("Scraping stopped."),
    $("#startScraping").show(),
    $("#stopScraping").hide(),
    g(
      "Crawling stopped. Please download data or continue crawling.",
      "instructions"
    );
}
function O() {
  $("#pleaseRate").show(),
    $("#rateLater")
      .show()
      .click(function () {
        P({ rate: "later" }),
          $("#pleaseRate").hide(),
          r(() => a.fireEvent("Click", { button: "Rate later" }));
      }),
    $("#rate")
      .show()
      .click(function () {
        P({ rate: "now" }),
          $("#pleaseRate").hide(),
          r(() => a.fireEvent("Click", { button: "Rate now" })),
          chrome.tabs.create({
            url: "https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah/reviews",
          });
      });
}
function P(e) {
  var t = JSON.parse(localStorage.getItem("stats")) || {
    pages: 0,
    rows: 0,
    downloads: 0,
    tabs: 0,
    lastRateRequest: null,
    lastDownloads: 0,
    lastRows: 0,
    rated: !1,
  };
  e.download
    ? t.downloads++
    : e.rate
    ? ("later" == e.rate &&
        ((t.lastRateRequest = new Date().getTime()),
        (t.lastDownloads = t.downloads),
        (t.lastRows = t.rows)),
      "now" == e.rate && (t.rated = !0))
    : (1 == s.pages && t.tabs++, t.pages++, (t.rows += s.lastRows)),
    !t.rated &&
      new Date().getTime() - t.lastRateRequest > 52704e5 &&
      t.downloads - t.lastDownloads > 9 &&
      t.rows - t.lastRows > 999 &&
      O(),
    localStorage.setItem("stats", JSON.stringify(t));
}
function q() {
  $("#stats")
    .empty()
    .append($("<div>", { text: "Pages scraped: " + s.pages }))
    .append($("<div>", { text: "Rows collected: " + s.data.length }))
    .append($("<div>", { text: "Rows from last page: " + s.lastRows }))
    .append(
      $("<div>", {
        text: "Working time: " + parseInt(s.workingTime / 1e3) + "s",
      })
    ),
    r(() =>
      a.fireEvent("GotRows", {
        hostName: s.hostName,
        startingUrl: s.startingUrl,
        lastRows: s.lastRows,
      })
    ),
    P({});
}
async function U(e = !1) {
  var t = s.tableSelector.replace(".tablescraper-selected-table", ""),
    o = [];
  s.goodClasses
    .map((e) =>
      e
        .split(" ")
        .map((e) => "." + e)
        .join("")
    )
    .forEach((e) => {
      (e = e.replace(/.tablescraper-selected-row/g, "")).length &&
        o.push(t + " " + e + ":not(:empty)");
    }),
    o.length || o.push(t + " > *:not(:empty)");
  var n = o.join(","),
    r = [];
  let a = s.names;
  for (var i of (e && (a = a.concat(Object.keys(s.config.deletedFields))), a)) {
    var c = s.namePaths[i];
    let e = { target: "text" };
    (e.field_id = i),
      (e.param = ""),
      s.config.headers[i] && (e.field_id = s.config.headers[i]);
    let t = [];
    for (var l of c) {
      let o = "";
      try {
        console.log("Picking selector..."), (o = await j(n, l));
      } catch (e) {
        console.log(e);
      }
      console.log("Selector picked: ", o),
        t.push(o),
        (l = l.split(" ")).filter((e) => "href" == e).length &&
          ((e.target = "prop"), (e.param = "href")),
        l.filter((e) => "src" == e).length &&
          ((e.target = "prop"), (e.param = "src"));
    }
    (e.selector = t.join(",")), r.push(e);
  }
  return [n, r];
}
function j(e, t) {
  return new Promise((o, n) => {
    chrome.tabs.sendMessage(
      i.id,
      { action: "chooseSelector", rowSelector: e, path: t },
      function (e) {
        e ? o(e.selector) : n(new Error("Could not choose selector!"));
      }
    );
  });
}

function clickFunc() {
  (s.gettingNext = !1),
    (s.scraping = !0),
    console.log("Starting clicking..."),
    $("#startClicking").hide(),
    $("#stopClicking").show(),
    //Error generator
    g("", "error"),
    g('Please wait for more pages or press "Stop clicking".', "instructions"),
    infiniteScrollFunc() && $("#infinateScrollElement").hide();

  var t = new Date();
  !(function o() {
    chrome.tabs.sendMessage(
      i.id,
      {
        action: "clicking",
        selector: s.tableSelector,
        buttonName: $("#searchText").val(),
      },
      function (e) {
        if ((console.log("clicking request 2", e), e)) {
          if (e.error)
          return g("", "instructions"), g(e.error, e.errorId || "error", !0);
        e.failedToProcess
        ? (g(
          "Failed to process rows. Showing raw data instead.",
                "error",
                !1
                ),
                (s.failedToProcess = !0),
                (s.processingError = e.processingError))
                : ($("#error").hide(), (s.failedToProcess = !1)),
                (s.lastRows = e.data.length),
                s.pages++,
                (s.workingTime += new Date() - t),
                (t = new Date()),
                D(e.data),
                q(),
                s.previewLength < c
                ? v()
                : g("Preview limited to 1000 rows.", "previewLimit"),
                s.scraping && o();
        }
      }
      );
      i.id,
        s.config.maxWait,
        100,
        s.config.crawlDelay,
        function (e) {
          chrome.tabs.sendMessage(i.id, {}, function (t) {
            e(void 0 !== t);
          });
        };
      // console.log("Clicking next..."),
      //   chrome.tabs.sendMessage(
        //     i.id,
        //     { action: "clickNext", selector: s.nextSelector },
        //     function (t) {
          //       if (t && t.error)
          //         return (
            //           console.log("Clicked next:", t),
            //           g("", "instructions"),
            //           g(t.error, t.errorId, !0)
            //         );
    //       $("#wrongTable").hide(), e();
    //     }
    //   );
  })();
  $("#startClicking").show(),
  $("#stopClicking").hide();
}

function stopClicking(e = null) {
  (s.scraping = !1),
    console.log("Clicking stopped."),
    $("#startClicking").show(),
    $("#stopClicking").hide(),
    g(
      "Clicking stopped. Please start scrapping or continue clicking.",
      "instructions"
    );
}

function clickFirstFunc() {
  console.log("clicked");
  chrome.tabs.sendMessage(
    i.id,
    {
      action: "clickingFirst",
      selector: s.tableSelector,
      buttonName: $("#searchText").val(),
    },
    function (e) {
      if ((console.log("clicking request 2", e), e)) {
        if (e.error)
          return g("", "instructions"), g(e.error, e.errorId || "error", !0);
        e.failedToProcess
          ? (g(
              "Failed to process rows. Showing raw data instead.",
              "error",
              !1
            ),
            (s.failedToProcess = !0),
            (s.processingError = e.processingError))
          : ($("#error").hide(), (s.failedToProcess = !1)),
          (s.lastRows = e.data.length),
          s.pages++,
          (s.workingTime += new Date() - t),
          (t = new Date()),
          D(e.data),
          q(),
          s.previewLength < c
            ? v()
            : g("Preview limited to 1000 rows.", "previewLimit"),
          s.scraping && o();
      }
    }
  );
}

d(),
  $("#wrongTable").click(function () {
    $("#hot").empty(),
      chrome.tabs.sendMessage(i.id, { action: "nextTable" }, x);
  }),
  $("#nextButton").click(function () {
    g('Mark "Next" button or link', "instructions"),
      (s.gettingNext = !0),
      (function e() {
        chrome.tabs.sendMessage(
          i.id,
          { action: "getNextButton" },
          function (t) {
            s.scraping ||
              (s.gettingNext && e(),
              t.selector &&
                ($("#startScraping").show(),
                g(
                  '"Next" button located. Press "Start crawling" to get more pages or mark another button/link if marked incorrectly.',
                  "instructions"
                ),
                (s.nextSelector = t.selector),
                localStorage.setItem("nextSelector:" + s.hostName, t.selector),
                console.log(t)));
          }
        );
      })();
  }),
  $("#startScraping").click(startScraping);
$("#startClicking").click(clickFunc);
$("#stopClicking").click(stopClicking);
// $("#startFirstClicking").click(clickFirstFunc);
