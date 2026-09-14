(function () {
  "use strict";

  var PROGRAM = {
    legs1: { name: "Legs 1", day: "Tuesday", ex: [
      { id: "fs", n: "Front Squat", s: 4, r: "6-8", w: 185 },
      { id: "rdbl", n: "Elevated Reverse DB Lunge", s: 3, r: "20-24", w: 50 },
      { id: "klc", n: "Kneeling Leg Curl", s: 3, r: "10-12", w: 40, lr: true },
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
      { id: "cbdc", n: "Crossbody DB Curl", s: 3, r: "10-12", w: 17.5, lr: true },
      { id: "bay", n: "Bayesian Curl", s: 3, r: "10-12", w: 15.5 }
    ]}
  };

  var DAYMAP = { 2: "legs1", 3: "push1", 4: "pull1", 5: "legs2", 6: "push2", 0: "pull2" };
  var ORDER = ["legs1", "push1", "pull1", "legs2", "push2", "pull2"];

  var WEIGHTS_KEY = "workout-weights";
  var SESSIONS_KEY = "workout-sessions";
  var NAMES_KEY = "workout-names";   // pre-plan renames; read once to migrate
  var PLAN_KEY = "workout-plan";
  var PICKS_KEY = "workout-picks";
  var MAX_SESSIONS = 200;
  var MAX_SETS = 20;
  var AUTOSAVE_MS = 500;
  var REST_OPTIONS = [
    { s: 120, label: "2:00" },
    { s: 90, label: "1:30" },
    { s: 60, label: "1:00" },
    { s: 30, label: ":30" }
  ];
  var DEFAULT_REST = 120;
  // shown at the foot of the app so it's obvious whether an update landed;
  // bump alongside CACHE in sw.js
  var VERSION = "v11";

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
  var plan = null;        // PROGRAM materialized and editable, same shape
  var weights = {};       // exerciseId -> last used weight
  var picks = {};         // date -> the day deliberately chosen for it
  var sessions = [];      // saved sessions, oldest date first
  var current = null;     // active dayId
  var date = null;        // date being logged, "YYYY-MM-DD"
  var log = {};           // exerciseId -> { w, sets:[{reps,rir,rirL,rirR}] }
  var cardioDone = false;
  var notes = "";
  var calOpen = false;
  var calView = null;     // month shown in the calendar, { y, m }
  var openEx = null;      // expanded exercise id
  var editMode = false;   // list is in reorder/remove mode
  var prevOpen = false;   // the previous session panel is expanded
  var focusName = null;   // exercise id whose name field should take focus
  var uid = 0;            // counter behind generated exercise ids
  var toastEl = null;
  var saveTimer = null;
  var planTimer = null;

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
  function blankSet(w) {
    return { w: w === undefined || w === null ? "" : w, reps: "", rir: null, rirL: null, rirR: null };
  }

  // The weight every set shares, or null when they differ.
  function uniformWeight(d) {
    if (!d.sets.length) return d.w;
    var first = d.sets[0].w;
    for (var i = 1; i < d.sets.length; i++) if (d.sets[i].w !== first) return null;
    return first;
  }

  // One value when every set shares a weight, a range when they differ.
  function weightLabel(d) {
    var vals = d.sets.map(function (s) { return s.w; })
      .filter(function (v) { return v !== "" && v !== null && !isNaN(parseFloat(v)); })
      .map(parseFloat);
    if (!vals.length) return "BW";
    var lo = Math.min.apply(null, vals);
    var hi = Math.max.apply(null, vals);
    return lo === hi ? String(lo) : lo + "–" + hi;
  }
  function exById(id) {
    return plan[current].ex.filter(function (e) { return e.id === id; })[0];
  }
  function exIndex(id) {
    var arr = plan[current].ex;
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return i;
    return -1;
  }
  function restLabel(secs) {
    var hit = REST_OPTIONS.filter(function (o) { return o.s === secs; })[0];
    return hit ? hit.label : REST_OPTIONS[0].label;
  }
  function validRest(v, fallback) {
    return REST_OPTIONS.some(function (o) { return o.s === +v; }) ? +v : fallback;
  }
  // The name an exercise reverts to when its Name field is emptied.
  function defaultName(id) {
    for (var k in PROGRAM) {
      var f = PROGRAM[k].ex.filter(function (e) { return e.id === id; })[0];
      if (f) return f.n;
    }
    return "New exercise";
  }

  // PROGRAM is only the starting point; once materialized the plan is what the
  // app reads, so exercises can be added, removed and reordered.
  function seedPlan(names) {
    var p = JSON.parse(JSON.stringify(PROGRAM));
    ORDER.forEach(function (k) {
      p[k].ex.forEach(function (e) { if (names[e.id]) e.n = names[e.id]; });
    });
    return p;
  }

  // Both a stored plan and a freshly seeded one come through here, so a field
  // added later gets its default either way.
  function normalizePlan(p, names) {
    var usable = p && typeof p === "object" && ORDER.every(function (k) {
      return p[k] && Array.isArray(p[k].ex);
    });
    if (!usable) p = seedPlan(names);
    var out = {};
    ORDER.forEach(function (k) {
      // rest used to live on the day; exercises without their own inherit it
      var dayRest = validRest(p[k].rest, DEFAULT_REST);
      out[k] = {
        name: PROGRAM[k].name,
        day: PROGRAM[k].day,
        cardio: PROGRAM[k].cardio,
        ex: p[k].ex.filter(function (e) { return e && e.id; }).map(function (e) {
          var w = e.w;
          return {
            id: String(e.id),
            n: String(e.n || defaultName(String(e.id))),
            s: Math.max(1, Math.min(MAX_SETS, parseInt(e.s, 10) || 1)),
            r: String(e.r === undefined || e.r === null ? "" : e.r),
            w: w === "" || w === undefined ? null : w,
            lr: !!e.lr,
            unit: e.unit === "sec" ? "sec" : "reps",
            rest: validRest(e.rest, dayRest)
          };
        })
      };
    });
    return out;
  }

  // Generated ids must not collide with ones already in the plan.
  function seedUid() {
    ORDER.forEach(function (k) {
      plan[k].ex.forEach(function (e) {
        var m = /^ux(\d+)$/.exec(e.id);
        if (m) uid = Math.max(uid, +m[1]);
      });
    });
  }

  function blankLog(dayId) {
    var o = {};
    plan[dayId].ex.forEach(function (e) {
      var w = weights[e.id] !== undefined ? weights[e.id] : e.w;
      if (w === null || w === undefined) w = "";
      var sets = [];
      for (var i = 0; i < e.s; i++) sets.push(blankSet(w));
      o[e.id] = { w: w, sets: sets };
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

    plan[dayId].ex.forEach(function (e) {
      var s = saved.log && saved.log[e.id];
      if (!s) return;
      if (s.w !== undefined && s.w !== null) log[e.id].w = s.w;
      var base = log[e.id].w;
      (s.sets || []).forEach(function (st, i) {
        // a session logged before the plan shrank keeps every set it recorded
        while (log[e.id].sets.length <= i) log[e.id].sets.push(blankSet(base));
        log[e.id].sets[i] = {
          // sessions logged before per-set weights inherit the exercise's
          w: st.w === undefined || st.w === null ? base : st.w,
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
    var dayId = picks[key];
    if (!plan[dayId]) {
      var saved = sessions.filter(function (s) { return s.date === key; });
      dayId = saved.length ? saved[saved.length - 1].dayId : DAYMAP[parseKey(key).getDay()];
    }
    return plan[dayId] ? dayId : fallback;
  }

  // Choosing a day is remembered for that date whether or not anything gets
  // logged, so the weekday's default never overrides a deliberate choice.
  function setPick(dayId) {
    picks[date] = dayId;
    var keys = Object.keys(picks);
    if (keys.length > MAX_SESSIONS) {
      keys.sort().slice(0, keys.length - MAX_SESSIONS).forEach(function (k) { delete picks[k]; });
    }
    try { storage.set(PICKS_KEY, JSON.stringify(picks)); } catch (e) {}
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
      var pk = await storage.get(PICKS_KEY);
      if (pk && pk.value) picks = JSON.parse(pk.value) || {};
    } catch (e) { picks = {}; }

    var names = {};
    try {
      var n = await storage.get(NAMES_KEY);
      if (n && n.value) names = JSON.parse(n.value) || {};
    } catch (e) { names = {}; }

    var stored = null;
    try {
      var pl = await storage.get(PLAN_KEY);
      if (pl && pl.value) stored = JSON.parse(pl.value);
    } catch (e) { stored = null; }
    plan = normalizePlan(stored, names);
    seedUid();
  }

  function queuePlan() {
    clearTimeout(planTimer);
    planTimer = setTimeout(savePlan, AUTOSAVE_MS);
  }

  function savePlan() {
    clearTimeout(planTimer);
    planTimer = null;
    try { storage.set(PLAN_KEY, JSON.stringify(plan)); } catch (e) {}
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
        dayName: plan[dayId].name,
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
      plan[current].ex.forEach(function (e) {
        // the working weight is where the exercise started, so sets that ramp
        // or drop off don't become next session's pre-fill
        var first = log[e.id].sets.map(function (s) { return s.w; })
          .filter(function (v) { return v !== "" && v !== null && !isNaN(parseFloat(v)); })[0];
        var v = first === undefined ? log[e.id].w : first;
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
    if (planTimer) savePlan();
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

  // The weight a stored set was logged at. Sessions from before per-set
  // weights only carry one for the whole exercise.
  function setWeight(st, base) {
    var w = st.w === undefined || st.w === null ? base : st.w;
    return w === "" || w === null || w === undefined ? "BW" : w;
  }

  // Renders any session, live or stored, so the previous one reads exactly
  // like the copy log does.
  function sessionText(dayId, dkey, data, cardio, notesText) {
    var p = plan[dayId];
    var thisYear = dkey.slice(0, 4) === todayKey().slice(0, 4);
    var out = "Traditional Strength Training\n" + p.name + " — " + prettyDate(dkey, !thisYear) + "\n";
    var blocks = [];
    p.ex.forEach(function (e) {
      var d = data[e.id];
      if (!d) return;
      var lines = [];
      (d.sets || []).forEach(function (st, i) {
        var rir = rirVal(st.rir), rirL = rirVal(st.rirL), rirR = rirVal(st.rirR);
        var reps = st.reps === undefined || st.reps === null ? "" : String(st.reps);
        if (reps === "" && rir === null && rirL === null && rirR === null) return;
        var w = setWeight(st, d.w);
        var amount = reps === "" ? "—" : reps + (e.unit === "sec" ? " sec" : "");
        var s = (i + 1) + ". " + amount + " @ " + w;
        if (e.lr) {
          if (rirL !== null || rirR !== null) {
            s += ", RIR: L - " + (rirL === null ? "—" : rirL) + ", R - " + (rirR === null ? "—" : rirR);
          }
        } else if (rir !== null) {
          s += ", RIR - " + rir;
        }
        lines.push(s);
      });
      if (lines.length) blocks.push({ n: e.n, rest: e.rest, lines: lines });
    });

    // One rest for everything reads as a single line up top, the way it always
    // has; only once exercises differ is it worth repeating per exercise.
    var uniform = blocks.length > 0 && blocks.every(function (b) { return b.rest === blocks[0].rest; });
    if (uniform) out += "Rest between sets: " + restLabel(blocks[0].rest) + "\n";
    out += "\n";
    blocks.forEach(function (b) {
      out += b.n + (uniform ? "" : " — rest " + restLabel(b.rest)) + ":\n" + b.lines.join("\n") + "\n\n";
    });

    if (p.cardio && cardio) out += "Cardio: Stairmaster, Zone 2, 20 min\n\n";
    if (notesText && notesText.trim()) out += "Notes: " + notesText.trim() + "\n";
    return out.trim();
  }

  function buildText() {
    return sessionText(current, date, log, cardioDone, notes);
  }

  // The most recent save of this same workout before the date on screen.
  // sessions is kept sorted by date, so the last match is the nearest one.
  function prevSession(dayId, before) {
    var hits = sessions.filter(function (s) { return s.dayId === dayId && s.date < before; });
    return hits.length ? hits[hits.length - 1] : null;
  }

  // A one-line recap of what this exercise did last time, compact enough to
  // sit above today's inputs.
  function lastTimeLine(prev, e) {
    var d = prev && prev.log && prev.log[e.id];
    if (!d) return "";
    return (d.sets || []).map(function (st) {
      var reps = st.reps === undefined || st.reps === null ? "" : String(st.reps);
      if (reps === "") return null;
      var out = reps + (e.unit === "sec" ? "s" : "") + " @ " + setWeight(st, d.w);
      var rir = rirVal(st.rir), rirL = rirVal(st.rirL), rirR = rirVal(st.rirR);
      if (rirL !== null || rirR !== null) {
        out += " (L" + (rirL === null ? "–" : rirL) + "/R" + (rirR === null ? "–" : rirR) + ")";
      } else if (rir !== null) {
        out += " (" + rir + ")";
      }
      return out;
    }).filter(Boolean).join("   ·   ");
  }

  function summary(e, d) {
    var total = d.sets.length;
    var filled = d.sets.filter(function (s) { return s.reps !== ""; }).length;
    return total + " × " + e.r + (filled ? "  ·  " + filled + "/" + total + " logged" : "");
  }

  function refreshHead(exEl) {
    var e = exById(exEl.dataset.ex);
    var d = log[e.id];
    var filled = d.sets.filter(function (s) { return s.reps !== ""; }).length;
    exEl.querySelector(".exnm").textContent = e.n;
    exEl.querySelector(".exname small").textContent = summary(e, d);
    var w = exEl.querySelector(".exw");
    w.textContent = weightLabel(d);
    w.classList.toggle("done", filled === d.sets.length);

    // keep the fill field truthful about whether the sets still agree,
    // but never rewrite it under the cursor
    var wt = exEl.querySelector(".wt");
    if (wt && wt !== document.activeElement) {
      var uw = uniformWeight(d);
      wt.value = uw === null ? "" : uw;
      wt.placeholder = uw === null ? "Mixed" : "BW";
    }
  }

  // --- plan edits -----------------------------------------------------------

  function moveEx(id, delta) {
    var arr = plan[current].ex;
    var i = exIndex(id);
    var j = i + delta;
    if (i < 0 || j < 0 || j >= arr.length) return;
    var moved = arr[i];
    arr[i] = arr[j];
    arr[j] = moved;
    queuePlan();
    render();
  }

  function addEx() {
    var id = "ux" + (++uid);
    var prev = plan[current].ex[plan[current].ex.length - 1];
    plan[current].ex.push({
      id: id, n: "New exercise", s: 3, r: "8-12", w: null, unit: "reps", lr: false,
      rest: prev ? prev.rest : DEFAULT_REST
    });
    log[id] = { w: "", sets: [blankSet(), blankSet(), blankSet()] };
    editMode = false;
    openEx = id;
    focusName = id;
    queuePlan();
    render();
  }

  function removeEx(id) {
    plan[current].ex = plan[current].ex.filter(function (e) { return e.id !== id; });
    delete log[id];
    if (openEx === id) openEx = null;
    queuePlan();
    queueSave();
    render();
  }

  // Set count lives on the plan, so an added set is there next session too.
  function addSet(id) {
    var d = log[id];
    if (d.sets.length >= MAX_SETS) return;
    var lastW = d.sets.length ? d.sets[d.sets.length - 1].w : d.w;
    d.sets.push(blankSet(lastW));
    exById(id).s = d.sets.length;
    queuePlan();
    queueSave();
    render();
  }

  function removeSet(id) {
    var d = log[id];
    if (d.sets.length <= 1) return;
    d.sets.pop();
    exById(id).s = d.sets.length;
    queuePlan();
    queueSave();
    render();
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
    var p = plan[current];
    var isToday = date === todayKey();
    var last = p.ex.length - 1;
    var html = '<div class="top"><div class="datebar"><h1>' + esc(p.name) + '</h1>' +
      '<button class="datepick' + (isToday ? "" : " off") + '" type="button" id="datepick" aria-expanded="' + calOpen + '">' +
      esc(prettyDate(date)) + '<span class="cchev"></span></button></div>';
    if (calOpen) html += renderCal();
    html += '<div class="days">';
    ORDER.forEach(function (k) {
      html += '<button class="day" data-day="' + k + '" aria-pressed="' + (k === current) + '">' + esc(plan[k].name) + '</button>';
    });
    html += '</div></div>';

    var prev = prevSession(current, date);
    if (prev) {
      var pYear = prev.date.slice(0, 4) !== todayKey().slice(0, 4);
      html += '<button class="prevbar" type="button" id="prevbar" aria-expanded="' + prevOpen + '">' +
        '<span>Last ' + esc(p.name) + ' · ' + esc(prettyDate(prev.date, pYear)) + '</span>' +
        '<span class="cchev"></span></button>';
      if (prevOpen) {
        html += '<div class="prevtext"><pre>' +
          esc(sessionText(prev.dayId, prev.date, prev.log || {}, prev.cardio, prev.notes)) +
          '</pre></div>';
      }
    }

    html += '<div class="list' + (editMode ? " editing" : "") + '">';

    p.ex.forEach(function (e, idx) {
      var d = log[e.id];
      var filled = d.sets.filter(function (s) { return s.reps !== ""; }).length;
      var open = e.id === openEx && !editMode;
      html += '<div class="ex' + (open ? " open" : "") + '" data-ex="' + e.id + '">';
      html += '<div class="exhead">' +
        '<button class="extoggle" type="button" aria-expanded="' + open + '"><span class="exname">' +
        '<span class="exnm">' + esc(e.n) + '</span>' +
        '<small>' + esc(summary(e, d)) + '</small></span>' +
        '<span class="exw' + (filled === d.sets.length ? ' done' : '') + '">' + esc(weightLabel(d)) + '</span><span class="chev"></span></button>';
      if (editMode) {
        html += '<div class="exctl">' +
          '<button class="mv" type="button" data-dir="-1"' + (idx === 0 ? " disabled" : "") +
          ' aria-label="Move ' + esc(e.n) + ' up">↑</button>' +
          '<button class="mv" type="button" data-dir="1"' + (idx === last ? " disabled" : "") +
          ' aria-label="Move ' + esc(e.n) + ' down">↓</button>' +
          '<button class="rm" type="button" aria-label="Remove ' + esc(e.n) + '">×</button></div>';
      }
      html += '</div>';
      html += '<div class="body"><div class="wrow"><label for="n-' + e.id + '">Name</label>' +
        '<input type="text" id="n-' + e.id + '" class="exn" value="' + esc(e.n) +
        '" placeholder="' + esc(defaultName(e.id)) + '"></div>';
      html += '<div class="wrow"><label for="r-' + e.id + '">Target</label>' +
        '<input type="text" id="r-' + e.id + '" class="exr" value="' + esc(e.r) + '" placeholder="8-12"></div>';
      html += '<div class="wrow"><label>Measure</label><div class="seg">' +
        '<button class="unitbtn" type="button" data-u="reps" aria-pressed="' + (e.unit !== "sec") + '">Reps</button>' +
        '<button class="unitbtn" type="button" data-u="sec" aria-pressed="' + (e.unit === "sec") + '">Time</button>' +
        '</div></div>';
      html += '<div class="wrow"><label>RIR</label><div class="seg">' +
        '<button class="lrbtn" type="button" data-lr="0" aria-pressed="' + !e.lr + '">Single</button>' +
        '<button class="lrbtn" type="button" data-lr="1" aria-pressed="' + !!e.lr + '">Per side</button>' +
        '</div></div>';
      html += '<div class="wrow"><label for="rest-' + e.id + '">Rest</label>' +
        '<select class="exrest" id="rest-' + e.id + '">';
      REST_OPTIONS.forEach(function (o) {
        html += '<option value="' + o.s + '"' + (o.s === e.rest ? " selected" : "") + '>' + esc(o.label) + '</option>';
      });
      html += '</select></div>';
      var uw = uniformWeight(d);
      html += '<div class="wrow"><label for="w-' + e.id + '">All sets</label>' +
        '<input type="number" inputmode="decimal" step="0.5" id="w-' + e.id + '" class="wt" value="' +
        esc(uw === null ? "" : uw) + '" placeholder="' + (uw === null ? "Mixed" : "BW") + '">' +
        '<span class="hint">fills every set below</span></div>';
      var lt = lastTimeLine(prev, e);
      if (lt) html += '<div class="last"><span class="lastlab">Last time</span>' + esc(lt) + '</div>';
      d.sets.forEach(function (st, i) {
        html += '<div class="set" data-set="' + i + '"><div class="setline"><span class="setno">' + (i + 1) + '</span>' +
          '<input type="number" inputmode="decimal" step="0.5" class="setw" value="' + esc(st.w) + '" placeholder="BW"' +
          ' aria-label="Set ' + (i + 1) + ' weight">' +
          '<span class="unit">×</span>' +
          '<input type="number" inputmode="numeric" class="reps" value="' + esc(st.reps) +
          '" placeholder="' + (e.unit === "sec" ? "sec" : "reps") + '"' +
          ' aria-label="Set ' + (i + 1) + (e.unit === "sec" ? " seconds" : " reps") + '">' +
          '<span class="unit">' + (e.unit === "sec" ? "sec" : "reps") + '</span></div>';
        if (e.lr) {
          html += rirRow("L", st.rirL, "L") + rirRow("R", st.rirR, "R");
        } else {
          html += rirRow("RIR", st.rir, "");
        }
        html += '</div>';
      });
      html += '<div class="setctl">' +
        '<button class="addset" type="button">+ Set</button>' +
        '<button class="rmset" type="button"' + (d.sets.length <= 1 ? " disabled" : "") + '>− Set</button></div>';
      html += '</div></div>';
    });
    html += '</div>';

    html += '<div class="listctl">';
    if (editMode) {
      html += '<button class="btn" id="addex" type="button">+ Add exercise</button>' +
        '<button class="btn primary" id="editdone" type="button">Done</button>';
    } else {
      html += '<button class="btn" id="edit" type="button">Edit exercises</button>';
    }
    html += '</div>';

    if (p.cardio) {
      html += '<label class="cardio"><input type="checkbox" id="cardio"' + (cardioDone ? " checked" : "") +
        '><span>Stairmaster, Zone 2, 20 min<small>After lifting. Conversational pace, ~110–125 bpm.</small></span></label>';
    }

    html += '<div class="notes"><label for="notes">Notes — sleep, energy, anything off</label><textarea id="notes" placeholder="Optional">' + esc(notes) + '</textarea></div>';

    html += '<div class="toast" style="display:none"></div>';
    html += '<div class="actions"><button class="btn" id="copy" type="button">Copy log</button><button class="btn primary" id="save" type="button">Save session</button></div>';
    html += '<div class="out" id="out" style="display:none"><textarea readonly></textarea></div>';
    html += '<div class="ver">' + esc(VERSION) + '</div>';

    root.innerHTML = html;
    toastEl = root.querySelector(".toast");

    var days = root.querySelector(".days");
    var active = days.querySelector('[aria-pressed="true"]');
    if (active) days.scrollLeft = active.offsetLeft - (days.clientWidth - active.offsetWidth) / 2;

    wire();

    if (focusName) {
      var f = root.querySelector("#n-" + focusName);
      if (f) { f.focus(); f.select(); }
      focusName = null;
    }
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
        setPick(b.dataset.day);
        loadDay(b.dataset.day);
        render();
      });
    });

    root.querySelectorAll(".extoggle").forEach(function (b) {
      b.addEventListener("click", function () {
        var ex = b.closest(".ex");
        var wasOpen = ex.classList.contains("open");
        root.querySelectorAll(".ex.open").forEach(function (o) {
          o.classList.remove("open");
          o.querySelector(".extoggle").setAttribute("aria-expanded", "false");
        });
        openEx = null;
        if (!wasOpen) {
          ex.classList.add("open");
          b.setAttribute("aria-expanded", "true");
          openEx = ex.dataset.ex;
        }
      });
    });

    root.querySelectorAll(".mv").forEach(function (b) {
      b.addEventListener("click", function () {
        moveEx(b.closest(".ex").dataset.ex, +b.dataset.dir);
      });
    });

    root.querySelectorAll(".rm").forEach(function (b) {
      b.addEventListener("click", function () {
        removeEx(b.closest(".ex").dataset.ex);
      });
    });

    root.querySelectorAll(".addset").forEach(function (b) {
      b.addEventListener("click", function () { addSet(b.closest(".ex").dataset.ex); });
    });

    root.querySelectorAll(".rmset").forEach(function (b) {
      b.addEventListener("click", function () { removeSet(b.closest(".ex").dataset.ex); });
    });

    var prevBtn = root.querySelector("#prevbar");
    if (prevBtn) prevBtn.addEventListener("click", function () { prevOpen = !prevOpen; render(); });

    var editBtn = root.querySelector("#edit");
    if (editBtn) editBtn.addEventListener("click", function () { editMode = true; render(); });

    var doneBtn = root.querySelector("#editdone");
    if (doneBtn) doneBtn.addEventListener("click", function () { editMode = false; render(); });

    var addBtn = root.querySelector("#addex");
    if (addBtn) addBtn.addEventListener("click", addEx);

    // Emptying the field puts the program's own name back.
    root.querySelectorAll(".exn").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        var v = inp.value.trim();
        exById(ex.dataset.ex).n = v || defaultName(ex.dataset.ex);
        refreshHead(ex);
        queuePlan();
      });
    });

    // Switching sides carries an obvious rating across rather than asking for
    // it again, but never overwrites one already there — so toggling back and
    // forth cannot lose a rating.
    root.querySelectorAll(".lrbtn").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.closest(".ex").dataset.ex;
        var lr = b.dataset.lr === "1";
        var e = exById(id);
        if (e.lr === lr) return;
        e.lr = lr;
        log[id].sets.forEach(function (st) {
          if (lr) {
            if (st.rir !== null && st.rirL === null && st.rirR === null) {
              st.rirL = st.rir;
              st.rirR = st.rir;
            }
          } else if (st.rir === null && st.rirL !== null && st.rirL === st.rirR) {
            st.rir = st.rirL;
          }
        });
        queuePlan();
        queueSave();
        render();
      });
    });

    root.querySelectorAll(".unitbtn").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.closest(".ex").dataset.ex;
        if (exById(id).unit === b.dataset.u) return;
        exById(id).unit = b.dataset.u;
        queuePlan();
        render();   // the set rows relabel with it
      });
    });

    root.querySelectorAll(".exrest").forEach(function (sel) {
      sel.addEventListener("change", function () {
        exById(sel.closest(".ex").dataset.ex).rest = +sel.value;
        queuePlan();
      });
    });

    root.querySelectorAll(".exr").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        exById(ex.dataset.ex).r = inp.value.trim();
        refreshHead(ex);
        queuePlan();
      });
    });

    // The exercise weight is a fill: it writes through to every set, which is
    // what straight sets want. Per-set boxes below then override individually.
    root.querySelectorAll(".wt").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        var d = log[ex.dataset.ex];
        d.w = inp.value;
        d.sets.forEach(function (s) { s.w = inp.value; });
        ex.querySelectorAll(".setw").forEach(function (o) { o.value = inp.value; });
        refreshHead(ex);
        queueSave();
      });
    });

    root.querySelectorAll(".setw").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var ex = inp.closest(".ex");
        var i = +inp.closest(".set").dataset.set;
        log[ex.dataset.ex].sets[i].w = inp.value;
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
