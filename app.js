(function () {
  "use strict";

  var PROGRAM = {
    legs1: { name: "Legs 1", day: "Tuesday", ex: [
      { id: "fs", n: "Front Squat", s: 4, r: "6-8", w: 185 },
      { id: "rdbl", n: "Elevated Reverse DB Lunge", s: 3, r: "20-24", w: 50 },
      { id: "klc", n: "Kneeling Leg Curl", s: 3, r: "10-12", w: 40, lr: true, hold: true },
      { id: "habd", n: "Hip Abduction", s: 3, r: "12-15", w: 160 },
      { id: "le", n: "Leg Extension", s: 4, r: "12-15", w: 85 },
      { id: "calf1", n: "Calf Raises (heavy)", s: 4, r: "6-8", w: 220 }
    ]},
    push1: { name: "Push 1", day: "Wednesday", ex: [
      { id: "dbbp", n: "DB Bench Press", s: 4, r: "6-8", w: 85 },
      { id: "idbfly", n: "Incline DB Fly", s: 3, r: "10-15", w: 40 },
      { id: "htlcf", n: "High-to-Low Cable Fly", s: 3, r: "12-15", w: 27.5 },
      { id: "idbsp", n: "Incline DB Shoulder Press", s: 4, r: "6-10", w: 50 },
      { id: "btblr", n: "BTB Cable Side Lateral Raise", s: 3, r: "12-15", w: 17.5, lr: true },
      { id: "stpd", n: "Seated Tricep Pushdown", s: 3, r: "10-15", w: null },
      { id: "ohte", n: "Overhead Tricep Extension", s: 3, r: "10-12", w: 32.5 }
    ]},
    pull1: { name: "Pull 1", day: "Thursday", cardio: true, ex: [
      { id: "latpd", n: "Lat Pulldown (Neutral Grip)", s: 4, r: "8-12", w: 140 },
      { id: "bobbr", n: "BO BB Row SG (Smith)", s: 4, r: "6-8", w: 175 },
      { id: "isorow", n: "ISO-Lateral Row", s: 3, r: "8-12", w: 110, lr: true },
      { id: "rdcf", n: "Rear Delt Cable Fly", s: 3, r: "12-15", w: 15.5 },
      { id: "pc", n: "Preacher Curl", s: 3, r: "8-12", w: 45 },
      { id: "sachc", n: "SA Cable Hammer Curl", s: 3, r: "10-12", w: 17.5, lr: true },
      { id: "abcrunch", n: "Seated Ab Crunch", s: 3, r: "12-15", w: 205 },
      { id: "plank", n: "Plank", s: 2, r: "45-60 sec", w: null, unit: "sec" }
    ]},
    legs2: { name: "Legs 2", day: "Friday", ex: [
      { id: "rdl", n: "Romanian Deadlift", s: 4, r: "6-8", w: 205 },
      { id: "gd", n: "Glute Drive", s: 3, r: "8-12", w: 170 },
      { id: "hs", n: "Hack Squat", s: 3, r: "8-12", w: 70 },
      { id: "llc", n: "Lying Leg Curl", s: 3, r: "10-12", w: 65 },
      { id: "be45", n: "45° Back Extension", s: 3, r: "12-15", w: null },
      { id: "hadd", n: "Hip Adduction", s: 3, r: "12-15", w: 135 },
      { id: "slc", n: "Seated Leg Curl — left leg only", s: 2, r: "12-15", w: 30 },
      { id: "calf2", n: "Calf Raises (light)", s: 4, r: "12-15", w: 200 },
      { id: "declsit", n: "Weighted Decline Sit-up", s: 3, r: "12-15", w: null },
      { id: "pallof", n: "Pallof Press (each side)", s: 2, r: "12-15", w: null }
    ]},
    push2: { name: "Push 2", day: "Saturday", cardio: true, ex: [
      { id: "idbbp", n: "Incline DB Bench Press", s: 4, r: "6-8", w: 65 },
      { id: "isodp", n: "ISO-Lateral Decline Press", s: 3, r: "8-10", w: 90 },
      { id: "msp", n: "Machine Shoulder Press", s: 4, r: "8-12", w: 60 },
      { id: "mlr", n: "Machine Lateral Raise", s: 3, r: "12-15", w: 55 },
      { id: "cgbp", n: "Close-Grip Bench Press", s: 3, r: "6-10", w: 120 },
      { id: "ctp", n: "Cable Tricep Pushdown", s: 3, r: "12-15", w: 47.5 },
      { id: "hlr", n: "Hanging Knee/Leg Raise", s: 3, r: "10-15", w: null },
      { id: "woodchop", n: "Cable Woodchop (each side)", s: 2, r: "12-15", w: null }
    ]},
    pull2: { name: "Pull 2", day: "Sunday", ex: [
      { id: "isofpd", n: "ISO-Lateral Front Pulldown", s: 4, r: "8-12", w: 85 },
      { id: "tbar", n: "T-Bar Row", s: 3, r: "6-10", w: 45 },
      { id: "scr", n: "Seated Cable Row (Close Grip)", s: 3, r: "8-12", w: 145 },
      { id: "sardcf", n: "SA Rear-Delt Cable Fly", s: 3, r: "12-15", w: 17.5, lr: true },
      { id: "sbcc", n: "Straight Bar Cable Curl", s: 3, r: "8-12", w: 42.5 },
      { id: "cbdc", n: "Crossbody DB Curl", s: 3, r: "10-12", w: 17.5, lr: true, hold: true },
      { id: "bay", n: "Bayesian Curl", s: 3, r: "10-12", w: 15.5 }
    ]}
  };

  var DAYMAP = { 2: "legs1", 3: "push1", 4: "pull1", 5: "legs2", 6: "push2", 0: "pull2" };
  var ORDER = ["legs1", "push1", "pull1", "legs2", "push2", "pull2"];

  var WEIGHTS_KEY = "workout-weights";
  var SESSIONS_KEY = "workout-sessions";
  var NAMES_KEY = "workout-names";
  var MAX_SESSIONS = 200;
  var AUTOSAVE_MS = 500;

  // Hosts that inject window.storage keep it; standalone falls back to localStorage.
  var storage = window.storage || {
    get: function (k) {
      return Promise.resolve().then(function () { return { value: localStorage.getItem(k) }; });
    },
    set: function (k, v) {
      return Promise.resolve().then(function () { localStorage.setItem(k, v); });
    }
  };

  var root = document.getElementById("root");
  var weights = {};       // exerciseId -> last used weight
  var names = {};         // exerciseId -> renamed exercise, when it differs
  var sessions = [];      // saved sessions, oldest date first
  var current = null;     // active dayId
  var date = null;        // date being logged, "YYYY-MM-DD"
  var log = {};           // exerciseId -> { w, sets:[{reps,rir,rirL,rirR}] }
  var cardioDone = false;
  var notes = "";
  var calOpen = false;
  var calView = null;     // month shown in the calendar, { y, m }
  var openEx = null;      // expanded exercise id
  var toastEl = null;
  var saveTimer = null;
  var nameTimer = null;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function dateKey(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function todayKey() { return dateKey(new Date()); }
  // "YYYY-MM-DD" must parse as a local date; Date(string) would read it as UTC.
  function parseKey(k) {
    var p = k.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function prettyDate(k, withYear) {
    var opt = { weekday: "short", month: "short", day: "numeric" };
    if (withYear) opt.year = "numeric";
    return parseKey(k).toLocaleDateString(undefined, opt);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function rirVal(v) { return typeof v === "number" ? v : null; }
  function exById(id) {
    return PROGRAM[current].ex.filter(function (e) { return e.id === id; })[0];
  }
  function exName(e) { return names[e.id] || e.n; }

  function blankLog(dayId) {
    var o = {};
    PROGRAM[dayId].ex.forEach(function (e) {
      var w = weights[e.id] !== undefined ? weights[e.id] : e.w;
      var sets = [];
      for (var i = 0; i < e.s; i++) sets.push({ reps: "", rir: null, rirL: null, rirR: null });
      o[e.id] = { w: w === null ? "" : w, sets: sets };
    });
    return o;
  }

  function findSession(d, dayId) {
    return sessions.filter(function (s) { return s.date === d && s.dayId === dayId; })[0];
  }

  function loggedDates() {
    var o = {};
    sessions.forEach(function (s) { o[s.date] = true; });
    return o;
  }

  // Switch to a day, restoring anything already logged for it on the selected date.
  function loadDay(dayId) {
    current = dayId;
    log = blankLog(dayId);
    cardioDone = false;
    notes = "";
    openEx = null;

    var saved = findSession(date, dayId);
    if (!saved) return;

    PROGRAM[dayId].ex.forEach(function (e) {
      var s = saved.log && saved.log[e.id];
      if (!s) return;
      if (s.w !== undefined && s.w !== null) log[e.id].w = s.w;
      (s.sets || []).forEach(function (st, i) {
        if (i >= log[e.id].sets.length) return;
        log[e.id].sets[i] = {
          reps: st.reps === undefined || st.reps === null ? "" : String(st.reps),
          rir: rirVal(st.rir),
          rirL: rirVal(st.rirL),
          rirR: rirVal(st.rirR)
        };
      });
    });
    cardioDone = !!saved.cardio;
    notes = saved.notes || "";
  }

  // Whatever was logged on that date, else the session the weekday calls for.
  // Rest days fall back to the caller's choice.
  function dayForDate(key, fallback) {
    var saved = sessions.filter(function (s) { return s.date === key; });
    var dayId = saved.length ? saved[saved.length - 1].dayId : DAYMAP[parseKey(key).getDay()];
    return PROGRAM[dayId] ? dayId : fallback;
  }

  function selectDate(key) {
    flush();
    date = key;
    calOpen = false;
    loadDay(dayForDate(key, current));
    render();
  }

  function hasEntries() {
    if (cardioDone || notes.trim()) return true;
    return Object.keys(log).some(function (id) {
      return log[id].sets.some(function (s) {
        return s.reps !== "" || s.rir !== null || s.rirL !== null || s.rirR !== null;
      });
    });
  }

  function toast(msg, warn) {
    var el = toastEl;
    if (!el) return;
    el.textContent = msg;
    el.className = warn ? "toast warn" : "toast";
    el.style.display = "block";
    setTimeout(function () { el.style.display = "none"; }, 2600);
  }

  async function loadStored() {
    try {
      var w = await storage.get(WEIGHTS_KEY);
      if (w && w.value) weights = JSON.parse(w.value) || {};
    } catch (e) { weights = {}; }
    try {
      var s = await storage.get(SESSIONS_KEY);
      if (s && s.value) sessions = JSON.parse(s.value) || [];
    } catch (e) { sessions = []; }
    if (!Array.isArray(sessions)) sessions = [];
    try {
      var n = await storage.get(NAMES_KEY);
      if (n && n.value) names = JSON.parse(n.value) || {};
    } catch (e) { names = {}; }
  }

  function queueNames() {
    clearTimeout(nameTimer);
    nameTimer = setTimeout(saveNames, AUTOSAVE_MS);
  }

  function saveNames() {
    clearTimeout(nameTimer);
    nameTimer = null;
    try { storage.set(NAMES_KEY, JSON.stringify(names)); } catch (e) {}
  }

  async function persist(commitWeights) {
    var d = date, dayId = current;
    sessions = sessions.filter(function (s) {
      return !(s.date === d && s.dayId === dayId);
    });
    // An emptied-out session is dropped rather than stored, so the calendar
    // only marks dates that actually hold a workout.
    if (hasEntries()) {
      sessions.push({
        date: d,
        dayId: dayId,
        dayName: PROGRAM[dayId].name,
        log: JSON.parse(JSON.stringify(log)),
        cardio: cardioDone,
        notes: notes
      });
    }
    sessions.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    if (sessions.length > MAX_SESSIONS) sessions = sessions.slice(sessions.length - MAX_SESSIONS);

    var ok = true;
    if (commitWeights) {
      // persist the weights used so next session pre-fills from here
      PROGRAM[current].ex.forEach(function (e) {
        var v = log[e.id].w;
        if (v !== "" && v !== null && !isNaN(parseFloat(v))) weights[e.id] = parseFloat(v);
      });
      try {
        await storage.set(WEIGHTS_KEY, JSON.stringify(weights));
      } catch (e) { ok = false; }
    }
    try {
      await storage.set(SESSIONS_KEY, JSON.stringify(sessions));
    } catch (e) { ok = false; }
    return ok;
  }

  function queueSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      saveTimer = null;
      persist(false);
    }, AUTOSAVE_MS);
  }

  function flush() {
    if (nameTimer) saveNames();
    if (!saveTimer) return;
    clearTimeout(saveTimer);
    saveTimer = null;
    persist(false);
  }

  async function saveSession() {
    clearTimeout(saveTimer);
    saveTimer = null;
    var logged = hasEntries();
    var ok = await persist(logged);
    if (!logged) {
      toast("Nothing logged yet.", true);
      return;
    }
    toast(ok ? "Session saved." : "Couldn't save — copy your log so you don't lose it.", !ok);
  }

  function buildText() {
    var p = PROGRAM[current];
    var thisYear = date.slice(0, 4) === todayKey().slice(0, 4);
    var out = "Traditional Strength Training\n" + p.name + " — " + prettyDate(date, !thisYear) + "\n";
    out += "Rest between sets: 2 minutes, unless otherwise noted\n\n";
    p.ex.forEach(function (e) {
      var d = log[e.id];
      var lines = [];
      d.sets.forEach(function (st, i) {
        if (st.reps === "" && st.rir === null && st.rirL === null && st.rirR === null) return;
        var w = d.w === "" ? "BW" : d.w;
        var s = (i + 1) + ". " + (st.reps === "" ? "—" : st.reps) + " @ " + w;
        if (e.lr) {
          if (st.rirL !== null || st.rirR !== null) {
            s += ", RIR: L - " + (st.rirL === null ? "—" : st.rirL) + ", R - " + (st.rirR === null ? "—" : st.rirR);
          }
        } else if (st.rir !== null) {
          s += ", RIR - " + st.rir;
        }
        lines.push(s);
      });
      if (lines.length) out += exName(e) + ":\n" + lines.join("\n") + "\n\n";
    });
    if (p.cardio && cardioDone) out += "Cardio: Stairmaster, Zone 2, 20 min\n\n";
    if (notes.trim()) out += "Notes: " + notes.trim() + "\n";
    return out.trim();
  }

  function summary(e, d) {
    var filled = d.sets.filter(function (s) { return s.reps !== ""; }).length;
    return e.s + " × " + e.r + (filled ? "  ·  " + filled + "/" + e.s + " logged" : "");
  }

  function refreshHead(exEl) {
    var e = exById(exEl.dataset.ex);
    var d = log[e.id];
    var filled = d.sets.filter(function (s) { return s.reps !== ""; }).length;
    exEl.querySelector(".exnm").textContent = exName(e);
    exEl.querySelector(".exname small").textContent = summary(e, d);
    var w = exEl.querySelector(".exw");
    w.textContent = d.w === "" ? "BW" : d.w;
    w.classList.toggle("done", filled === e.s);
  }

  function rirRow(label, val, side) {
    var h = '<div class="rirwrap" data-side="' + side + '"><span class="rirlab">' + label + '</span><div class="rir">';
    for (var v = 0; v <= 5; v++) {
      h += '<button type="button" data-v="' + v + '" aria-pressed="' + (val === v) + '">' + v + '</button>';
    }
    return h + '</div></div>';
  }

  function renderCal() {
    var tk = todayKey();
    var logged = loggedDates();
    var first = new Date(calView.y, calView.m, 1);
    var days = new Date(calView.y, calView.m + 1, 0).getDate();

    var h = '<div class="cal"><div class="calhead">' +
      '<button class="calnav" type="button" data-nav="-1" aria-label="Previous month">‹</button>' +
      '<span class="calmon">' + esc(first.toLocaleDateString(undefined, { month: "long", year: "numeric" })) + '</span>' +
      '<button class="calnav" type="button" data-nav="1" aria-label="Next month">›</button></div><div class="calgrid">';

    ["S", "M", "T", "W", "T", "F", "S"].forEach(function (d) {
      h += '<span class="caldow">' + d + '</span>';
    });
    for (var i = 0; i < first.getDay(); i++) h += "<span></span>";

    for (var n = 1; n <= days; n++) {
      var key = calView.y + "-" + pad(calView.m + 1) + "-" + pad(n);
      var cls = "calday" + (key === tk ? " today" : "") + (logged[key] ? " has" : "") + (key === date ? " sel" : "");
      h += '<button type="button" class="' + cls + '" data-date="' + key + '"' +
        (key === date ? ' aria-current="date"' : '') + '>' + n + '</button>';
    }
    h += "</div>";
    if (date !== tk) h += '<button type="button" class="caltoday">Jump to today</button>';
    return h + "</div>";
  }

  function render() {
    var p = PROGRAM[current];
    var isToday = date === todayKey();
    var html = '<div class="top"><div class="datebar"><h1>' + esc(p.name) + '</h1>' +
      '<button class="datepick' + (isToday ? "" : " off") + '" type="button" id="datepick" aria-expanded="' + calOpen + '">' +
      esc(prettyDate(date)) + '<span class="cchev"></span></button></div>';
    if (calOpen) html += renderCal();
    html += '<div class="days">';
    ORDER.forEach(function (k) {
      html += '<button class="day" data-day="' + k + '" aria-pressed="' + (k === current) + '">' + esc(PROGRAM[k].name) + '</button>';
    });
    html += '</div></div><div class="list">';

    p.ex.forEach(function (e) {
      var d = log[e.id];
      var filled = d.sets.filter(function (s) { return s.reps !== ""; }).length;
      var open = e.id === openEx;
      html += '<div class="ex' + (open ? " open" : "") + '" data-ex="' + e.id + '">';
      html += '<button class="exhead" type="button" aria-expanded="' + open + '"><span class="exname">' +
        '<span class="exnm">' + esc(exName(e)) + '</span>' +
        (e.hold ? ' <span class="hold">· hold load</span>' : '') +
        '<small>' + esc(summary(e, d)) + '</small></span>' +
        '<span class="exw' + (filled === e.s ? ' done' : '') + '">' + esc(d.w === "" ? "BW" : d.w) + '</span><span class="chev"></span></button>';
      html += '<div class="body"><div class="wrow"><label for="n-' + e.id + '">Name</label>' +
        '<input type="text" id="n-' + e.id + '" class="exn" value="' + esc(names[e.id] || "") +
        '" placeholder="' + esc(e.n) + '" aria-label="Rename ' + esc(e.n) + '"></div>';
      html += '<div class="wrow"><label for="w-' + e.id + '">Weight</label>' +
        '<input type="number" inputmode="decimal" step="0.5" id="w-' + e.id + '" class="wt" value="' + esc(d.w) + '" placeholder="BW"></div>';
      d.sets.forEach(function (st, i) {
        html += '<div class="set" data-set="' + i + '"><div class="setline"><span class="setno">' + (i + 1) + '</span>' +
          '<input type="number" inputmode="numeric" class="reps" value="' + esc(st.reps) + '" placeholder="reps">' +
          '<span class="unit">' + (e.unit === "sec" ? "sec" : "reps") + '</span></div>';
        if (e.lr) {
          html += rirRow("L", st.rirL, "L") + rirRow("R", st.rirR, "R");
        } else {
          html += rirRow("RIR", st.rir, "");
        }
        html += '</div>';
      });
      html += '</div></div>';
    });
    html += '</div>';

    if (p.cardio) {
      html += '<label class="cardio"><input type="checkbox" id="cardio"' + (cardioDone ? " checked" : "") +
        '><span>Stairmaster, Zone 2, 20 min<small>After lifting. Conversational pace, ~110–125 bpm.</small></span></label>';
    }

    html += '<div class="notes"><label for="notes">Notes — sleep, energy, anything off</label><textarea id="notes" placeholder="Optional">' + esc(notes) + '</textarea></div>';

    html += '<div class="toast" style="display:none"></div>';
    html += '<div class="actions"><button class="btn" id="copy" type="button">Copy log</button><button class="btn primary" id="save" type="button">Save session</button></div>';
    html += '<div class="out" id="out" style="display:none"><textarea readonly></textarea></div>';

    root.innerHTML = html;
    toastEl = root.querySelector(".toast");

    var days = root.querySelector(".days");
    var active = days.querySelector('[aria-pressed="true"]');
    if (active) days.scrollLeft = active.offsetLeft - (days.clientWidth - active.offsetWidth) / 2;

    wire();
  }

  function wire() {
    root.querySelector("#datepick").addEventListener("click", function () {
      calOpen = !calOpen;
      if (calOpen) {
        var d = parseKey(date);
        calView = { y: d.getFullYear(), m: d.getMonth() };
      }
      render();
    });

    root.querySelectorAll(".calnav").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = new Date(calView.y, calView.m + +b.dataset.nav, 1);
        calView = { y: d.getFullYear(), m: d.getMonth() };
        render();
      });
    });

    root.querySelectorAll(".calday").forEach(function (b) {
      b.addEventListener("click", function () { selectDate(b.dataset.date); });
    });

    var jump = root.querySelector(".caltoday");
    if (jump) jump.addEventListener("click", function () { selectDate(todayKey()); });

    root.querySelectorAll(".day").forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.day === current) return;
        flush();
        loadDay(b.dataset.day);
        render();
      });
    });

    root.querySelectorAll(".exhead").forEach(function (b) {
      b.addEventListener("click", function () {
        var ex = b.closest(".ex");
        var wasOpen = ex.classList.contains("open");
        root.querySelectorAll(".ex.open").forEach(function (o) {
          o.classList.remove("open");
          o.querySelector(".exhead").setAttribute("aria-expanded", "false");
        });
        openEx = null;
        if (!wasOpen) {
          ex.classList.add("open");
          b.setAttribute("aria-expanded", "true");
          openEx = ex.dataset.ex;
        }
      });
    });

    // A rename sticks across sessions, like a weight does. Clearing the field
    // drops the override and the program's own name comes back.
    root.querySelectorAll(".exn").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        var id = ex.dataset.ex;
        var v = inp.value.trim();
        if (v && v !== exById(id).n) names[id] = v;
        else delete names[id];
        refreshHead(ex);
        queueNames();
      });
    });

    root.querySelectorAll(".wt").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        log[ex.dataset.ex].w = inp.value;
        refreshHead(ex);
        queueSave();
      });
    });

    root.querySelectorAll(".reps").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        var i = +inp.closest(".set").dataset.set;
        log[ex.dataset.ex].sets[i].reps = inp.value;
        refreshHead(ex);
        queueSave();
      });
    });

    root.querySelectorAll(".rir button").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.closest(".ex").dataset.ex;
        var i = +b.closest(".set").dataset.set;
        var side = b.closest(".rirwrap").dataset.side;
        var v = +b.dataset.v;
        var key = side === "L" ? "rirL" : side === "R" ? "rirR" : "rir";
        var st = log[id].sets[i];
        st[key] = st[key] === v ? null : v;
        b.closest(".rir").querySelectorAll("button").forEach(function (o) {
          o.setAttribute("aria-pressed", String(+o.dataset.v === st[key]));
        });
        queueSave();
      });
    });

    var c = root.querySelector("#cardio");
    if (c) c.addEventListener("change", function () { cardioDone = c.checked; queueSave(); });

    var n = root.querySelector("#notes");
    if (n) n.addEventListener("input", function () { notes = n.value; queueSave(); });

    root.querySelector("#save").addEventListener("click", saveSession);

    root.querySelector("#copy").addEventListener("click", function () {
      var txt = buildText();
      var out = root.querySelector("#out");
      out.style.display = "block";
      out.querySelector("textarea").value = txt;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () {
          toast("Copied. Paste it into chat.");
        }).catch(function () {
          toast("Select the text below and copy.", true);
        });
      } else {
        toast("Select the text below and copy.", true);
      }
    });
  }

  window.addEventListener("pagehide", flush);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") flush();
  });

  (async function init() {
    await loadStored();
    date = todayKey();
    loadDay(dayForDate(date, "legs1"));
    render();
  })();
})();
