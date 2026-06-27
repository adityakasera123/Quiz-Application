/* ==========================================================================
   QuizMaster Pro Application Logic
   ========================================================================== */

// ── Accent theme list (separate from base light/dark toggle) ──
const ACCENT_THEMES = ['default', 'cyberpunk', 'emerald', 'sunset'];
let currentAccentTheme = 'default'; // tracks which accent is active
let currentBaseTheme   = 'dark';   // tracks light vs dark base

// ==================== 1. QUESTIONS DATABASE (54 QUESTIONS) ====================
const QUESTIONS = [
  // --- EASY QUESTIONS (18) ---
  {
    id: 1,
    difficulty: "easy",
    category: "JavaScript",
    question: "Which keyword is used to declare a block-scoped variable in modern JavaScript?",
    options: ["var", "let", "const", "Both let and const"],
    answer: 3
  },
  {
    id: 2,
    difficulty: "easy",
    category: "HTML/CSS",
    question: "What does the CSS 'box-sizing: border-box' property do?",
    options: [
      "Includes padding and borders in the element's total width and height",
      "Removes the borders from the HTML layout box model",
      "Forces elements to have fixed borders on all viewports",
      "Restricts padding to inside borders only"
    ],
    answer: 0
  },
  {
    id: 3,
    difficulty: "easy",
    category: "Java",
    question: "Which of the following is NOT a primitive data type in Java?",
    options: ["int", "double", "String", "boolean"],
    answer: 2
  },
  {
    id: 4,
    difficulty: "easy",
    category: "C++",
    question: "Which operator is used to access members of a class through a pointer in C++?",
    options: [".", "->", "*", "&"],
    answer: 1
  },
  {
    id: 5,
    difficulty: "easy",
    category: "DSA",
    question: "What is the Time Complexity of accessing an element in an Array by its index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 0
  },
  {
    id: 6,
    difficulty: "easy",
    category: "Fundamentals",
    question: "What is the primary function of the CPU cache memory?",
    options: [
      "To store backup recovery data files permanently",
      "To hold instructions currently waiting in network card queues",
      "To provide high-speed, temporary storage for frequently used instructions",
      "To control graphic rendering pipelines"
    ],
    answer: 2
  },
  {
    id: 7,
    difficulty: "easy",
    category: "Reasoning",
    question: "Complete the sequence: 2, 6, 12, 20, 30, ...?",
    options: ["38", "40", "42", "44"],
    answer: 2
  },
  {
    id: 8,
    difficulty: "easy",
    category: "JavaScript",
    question: "What is the output of `console.log(typeof null)` in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'string'"],
    answer: 2
  },
  {
    id: 9,
    difficulty: "easy",
    category: "HTML/CSS",
    question: "Which HTML5 element is used to represent an independent, self-contained piece of content?",
    options: ["<section>", "<div>", "<article>", "<aside>"],
    answer: 2
  },
  {
    id: 10,
    difficulty: "easy",
    category: "Java",
    question: "What is the default value of an uninitialized instance variable of type reference in Java?",
    options: ["0", "false", "null", "undefined"],
    answer: 2
  },
  {
    id: 11,
    difficulty: "easy",
    category: "C++",
    question: "How do you start a single-line comment in C++?",
    options: ["# comment", "/* comment", "// comment", "-- comment"],
    answer: 2
  },
  {
    id: 12,
    difficulty: "easy",
    category: "DSA",
    question: "Which data structure operates on a Last-In, First-Out (LIFO) access principle?",
    options: ["Queue", "Stack", "Binary Tree", "Linked List"],
    answer: 1
  },
  {
    id: 13,
    difficulty: "easy",
    category: "Fundamentals",
    question: "What is the base of the Hexadecimal numbering system?",
    options: ["2", "8", "10", "16"],
    answer: 3
  },
  {
    id: 14,
    difficulty: "easy",
    category: "Reasoning",
    question: "If a laptop is coded as 'MBOUPQ', what is the code for 'BOOK'?",
    options: ["CPPL", "ANND", "CNNL", "DOPM"],
    answer: 0
  },
  {
    id: 15,
    difficulty: "easy",
    category: "JavaScript",
    question: "Which array method adds one or more elements to the end of an array and returns the new length?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: 1
  },
  {
    id: 16,
    difficulty: "easy",
    category: "HTML/CSS",
    question: "Which CSS property controls the layout alignment of items along a Flexbox's cross axis?",
    options: ["justify-content", "align-items", "flex-wrap", "align-content"],
    answer: 1
  },
  {
    id: 17,
    difficulty: "easy",
    category: "Java",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "inherits", "extends", "super"],
    answer: 2
  },
  {
    id: 18,
    difficulty: "easy",
    category: "C++",
    question: "Which header file is required to use input and output streams in C++?",
    options: ["#include <stdio.h>", "#include <conio.h>", "#include <iostream>", "#include <stdlib.h>"],
    answer: 2
  },

  // --- MEDIUM QUESTIONS (18) ---
  {
    id: 19,
    difficulty: "medium",
    category: "JavaScript",
    question: "What is the correct output of the following JavaScript code?",
    code: `const arr = [1, 2, 3];\nconst res = arr.map(x => x * 2).filter(x => x > 4);\nconsole.log(res);`,
    options: ["[2, 4, 6]", "[6]", "[4, 6]", "[2, 4]"],
    answer: 1
  },
  {
    id: 20,
    difficulty: "medium",
    category: "HTML/CSS",
    question: "How do you target elements with a specific data-attribute named 'data-status' set to 'active' in CSS?",
    options: [
      "[data-status='active']",
      ".data-status-active",
      "#data-status[active]",
      "div:has-attribute(data-status='active')"
    ],
    answer: 0
  },
  {
    id: 21,
    difficulty: "medium",
    category: "Java",
    question: "What is the purpose of the 'garbage collector' in the Java Runtime Environment?",
    options: [
      "To prevent application threads from hanging",
      "To reclaim unused heap memory by deleting dereferenced objects",
      "To monitor CPU thread states and schedule tasks",
      "To optimize database connections dynamically"
    ],
    answer: 1
  },
  {
    id: 22,
    difficulty: "medium",
    category: "C++",
    question: "What happens when an object is passed 'by value' to a function in C++?",
    options: [
      "A copy of the object is created using its copy constructor",
      "A pointer to the original object is passed instead",
      "The original object is directly mutated during function execution",
      "The memory addresses are swapped automatically"
    ],
    answer: 0
  },
  {
    id: 23,
    difficulty: "medium",
    category: "DSA",
    question: "Which sorting algorithm has a guaranteed worst-case time complexity of O(n log n)?",
    options: ["Quick Sort", "Bubble Sort", "Merge Sort", "Insertion Sort"],
    answer: 2
  },
  {
    id: 24,
    difficulty: "medium",
    category: "Fundamentals",
    question: "What is the main difference between TCP and UDP protocols?",
    options: [
      "TCP is connectionless and fast, UDP is connection-oriented and reliable",
      "TCP provides reliable, ordered data delivery; UDP is connectionless and faster but lacks delivery guarantees",
      "TCP is only used for local networks, UDP is used exclusively on global web backbones",
      "TCP uses 32-bit addresses, UDP uses 128-bit addresses"
    ],
    answer: 1
  },
  {
    id: 25,
    difficulty: "medium",
    category: "Reasoning",
    question: "Find the odd one out from the following list:",
    options: ["Algorithm", "Compiler", "Assembler", "Interpreter"],
    answer: 0
  },
  {
    id: 26,
    difficulty: "medium",
    category: "JavaScript",
    question: "Which statement about JavaScript closures is true?",
    options: [
      "Closures do not have access to outer function variables once it returns",
      "A closure allows an inner function to access the scope of its outer function even after that outer function has executed",
      "Closures require the use of global state variables to persist references",
      "Closures are strictly used to execute asynchronous timer scripts"
    ],
    answer: 1
  },
  {
    id: 27,
    difficulty: "medium",
    category: "HTML/CSS",
    question: "What is the CSS specificity hierarchy rank (highest weight to lowest weight)?",
    options: [
      "Inline styles > ID selectors > Class selectors > Element selectors",
      "ID selectors > Inline styles > Class selectors > Element selectors",
      "Inline styles > Class selectors > ID selectors > Element selectors",
      "Element selectors > Class selectors > ID selectors > Inline styles"
    ],
    answer: 0
  },
  {
    id: 28,
    difficulty: "medium",
    category: "Java",
    question: "What is the main difference between a Class and an Interface in Java?",
    options: [
      "Classes can support multiple inheritance, whereas Interfaces cannot",
      "Classes cannot contain methods with bodies, while Interfaces can",
      "Classes can declare instance fields and maintain state; Interfaces can only declare final static variables",
      "There is no difference; they are syntactic aliases"
    ],
    answer: 2
  },
  {
    id: 29,
    difficulty: "medium",
    category: "C++",
    question: "What is a 'virtual function' in C++?",
    options: [
      "A function that exists in a template library but has no definition",
      "A function in a base class that can be overridden in a derived class, resolved dynamically at runtime",
      "A function executing in a background virtual machine sandbox",
      "A function that cannot return values"
    ],
    answer: 1
  },
  {
    id: 30,
    difficulty: "medium",
    category: "DSA",
    question: "In a binary search tree, what traversal method visits nodes in ascending order?",
    options: ["Pre-order traversal", "Post-order traversal", "In-order traversal", "Level-order traversal"],
    answer: 2
  },
  {
    id: 31,
    difficulty: "medium",
    category: "Fundamentals",
    question: "What represents a standard MAC address structure?",
    options: [
      "32-bit binary structure",
      "48-bit hexadecimal physical address",
      "128-bit IPv6 equivalent layout",
      "64-bit dotted-decimal string"
    ],
    answer: 1
  },
  {
    id: 32,
    difficulty: "medium",
    category: "Reasoning",
    question: "If A is taller than B, B is taller than C, and D is shorter than C, who is the tallest?",
    options: ["A", "B", "C", "D"],
    answer: 0
  },
  {
    id: 33,
    difficulty: "medium",
    category: "JavaScript",
    question: "What does the `bind()` method do in JavaScript?",
    options: [
      "Executes a function immediately with a specific scope context",
      "Binds variables directly to the global window state",
      "Creates a new function that, when called, has its `this` keyword set to the provided value",
      "Encrypts callback scripts for transmission"
    ],
    answer: 2
  },
  {
    id: 34,
    difficulty: "medium",
    category: "HTML/CSS",
    question: "What is the effect of using 'position: sticky' in CSS?",
    options: [
      "Forces the element to attach to the view coordinate origin immediately",
      "Removes the element from layout flow and layers it above content",
      "Treats the element as relative until it crosses a specified viewport threshold, then locks it as fixed",
      "Creates an elastic layout container that moves on scrolls"
    ],
    answer: 2
  },
  {
    id: 35,
    difficulty: "medium",
    category: "Java",
    question: "What occurs if you try to catch a subclass exception AFTER catching its parent superclass exception?",
    options: [
      "The code runs fine, handling both exceptions gracefully",
      "The program generates a compile-time error because the subclass catch block is unreachable",
      "The runtime bypasses the parent catch exception",
      "A virtual machine memory crash occurs immediately"
    ],
    answer: 1
  },
  {
    id: 36,
    difficulty: "medium",
    category: "C++",
    question: "Which of the following describes 'smart pointers' in modern C++ (C++11 and later)?",
    options: [
      "Pointers that adapt their data types at runtime",
      "Pointers that automatically manage memory deallocation through reference tracking",
      "Pointers that execute on GPU registers",
      "Standard aliases to regular raw pointers"
    ],
    answer: 1
  },

  // --- HARD QUESTIONS (18) ---
  {
    id: 37,
    difficulty: "hard",
    category: "JavaScript",
    question: "What is the correct output of this JavaScript code statement?",
    code: `const promise = new Promise((resolve) => {\n  console.log(1);\n  resolve(2);\n});\npromise.then(val => console.log(val));\nconsole.log(3);`,
    options: ["1, 2, 3", "3, 1, 2", "1, 3, 2", "2, 1, 3"],
    answer: 2
  },
  {
    id: 38,
    difficulty: "hard",
    category: "HTML/CSS",
    question: "Which CSS feature enables styling parent containers based on the presence of specific child elements?",
    options: [
      "The `:has()` functional pseudo-class",
      "The `:parent` selector query",
      "The `:is-child()` pseudo-selector",
      "Container query definitions using `@container`"
    ],
    answer: 0
  },
  {
    id: 39,
    difficulty: "hard",
    category: "Java",
    question: "What is the difference between 'synchronized block' and 'synchronized method' in Java multithreading?",
    options: [
      "Method synchronization locks the entire object; blocks lock code fragments on a custom monitor object",
      "Method synchronization runs faster because it bypasses JVM locks",
      "synchronized block locks the class loader; method locks active execution threads",
      "There is no difference; they compile to identical bytecode"
    ],
    answer: 0
  },
  {
    id: 40,
    difficulty: "hard",
    category: "C++",
    question: "What is a 'vtable' (virtual method table) in C++?",
    options: [
      "A hash map holding templates for class definitions",
      "A lookup table of function pointers created by the compiler to resolve dynamic dispatch of virtual functions",
      "A static database holding constructor functions",
      "An arrays collection representing virtual classes in memory"
    ],
    answer: 1
  },
  {
    id: 41,
    difficulty: "hard",
    category: "DSA",
    question: "In a Red-Black Tree, which property ensures that the tree remains balanced during insertions?",
    options: [
      "The root node is always black, and children of red nodes must be black",
      "Every simple path from a node to descendant leaves contains the same number of black nodes",
      "No leaf nodes are colored red",
      "Both A and B"
    ],
    answer: 3
  },
  {
    id: 42,
    difficulty: "hard",
    category: "Fundamentals",
    question: "How does 'pipeline stalling' (hazard resolution) affect instruction execution in processor pipelines?",
    options: [
      "It speeds up execution by skipping complex mathematical operations",
      "It delays subsequent instructions to resolve data, structural, or control dependencies",
      "It resets the program counter register and reboots the cache memory",
      "It routes instructions to peripheral devices instead of cores"
    ],
    answer: 1
  },
  {
    id: 43,
    difficulty: "hard",
    category: "Reasoning",
    question: "In a family, there are six members A, B, C, D, E, and F. A is the father of D. F is the mother of C. B is the sister of C. E is the brother of D. F is married to A. How is D related to F?",
    options: ["Son", "Daughter", "Son or Daughter", "Brother-in-law"],
    answer: 2
  },
  {
    id: 44,
    difficulty: "hard",
    category: "JavaScript",
    question: "What is the difference between weak references (`WeakMap` or `WeakSet`) and standard references in JavaScript?",
    options: [
      "Weak maps do not permit objects as keys",
      "Weak maps hold weak references to their keys, allowing them to be garbage collected if there are no other references",
      "Weak maps execute queries asynchronously",
      "Weak maps automatically compress stored objects"
    ],
    answer: 1
  },
  {
    id: 45,
    difficulty: "hard",
    category: "HTML/CSS",
    question: "How do you declare a Container Query in CSS to evaluate styling based on parent container width?",
    options: [
      "Declare `container-type: inline-size` on the parent, and query it using `@container (min-width: 400px)`",
      "Target using `div:container(min-width: 400px)` inline",
      "Apply `@media container (min-width: 400px)`",
      "Use `@supports (container-width > 400px)`"
    ],
    answer: 0
  },
  {
    id: 46,
    difficulty: "hard",
    category: "Java",
    question: "What is the difference between a volatile variable and a standard variable in Java memory models?",
    options: [
      "Volatile variables are locked from modifications by other threads",
      "Volatile variables are read and written directly to main memory, bypassing CPU caches to ensure value visibility",
      "Volatile variables are only allowed inside synchronized static classes",
      "Volatile variables are automatically garbage collected immediately after use"
    ],
    answer: 1
  },
  {
    id: 47,
    difficulty: "hard",
    category: "C++",
    question: "What is 'Template Metaprogramming' in C++?",
    options: [
      "Generating string variables inside classes dynamically",
      "A technique where templates are instantiated by the compiler to generate code at compile-time",
      "Injecting library templates directly into heap memory",
      "Running code on an isolated virtual machine processor"
    ],
    answer: 1
  },
  {
    id: 48,
    difficulty: "hard",
    category: "DSA",
    question: "Which hash collision resolution method chains items in a linked list at the hashed index?",
    options: ["Open addressing", "Linear probing", "Separate chaining", "Double hashing"],
    answer: 2
  },
  {
    id: 49,
    difficulty: "hard",
    category: "Fundamentals",
    question: "What happens during a context switch in a multitasking Operating System?",
    options: [
      "The system boots into safe recovery mode",
      "The CPU saves the state of the active process and loads the saved state of another process to resume execution",
      "The network card swaps MAC addresses dynamically",
      "The cache is wiped and variables are reassigned static slots"
    ],
    answer: 1
  },
  {
    id: 50,
    difficulty: "hard",
    category: "Reasoning",
    question: "A clocks' hands coincide every 64 minutes. How much does the clock gain or lose in a day?",
    options: ["Loses 32 8/11 minutes", "Gains 32 8/11 minutes", "Loses 10 minutes", "Gains 10 minutes"],
    answer: 1
  },
  {
    id: 51,
    difficulty: "hard",
    category: "JavaScript",
    question: "What is the outcome of attempting to iterate over a standard JavaScript Object with `for...of`?",
    options: [
      "It logs all keys of the object sequentially",
      "It throws a TypeError: object is not iterable",
      "It returns an array containing values",
      "It runs normally but yields undefined values"
    ],
    answer: 1
  },
  {
    id: 52,
    difficulty: "hard",
    category: "HTML/CSS",
    question: "What is CSS 'contain-intrinsic-size' property used for?",
    options: [
      "It defines default rendering size for elements using 'content-visibility: auto' to avoid layout shift",
      "It forces responsive canvas assets to preserve their original aspect ratio",
      "It overrides borders and paddings to lock elements under absolute limits",
      "It calculates layout sizes based on surrounding child dimensions"
    ],
    answer: 0
  },
  {
    id: 53,
    difficulty: "hard",
    category: "Java",
    question: "What is the role of 'PhantomReference' in Java reference types?",
    options: [
      "To recover memory before garbage collection starts",
      "To schedule post-mortem cleanup actions after an object has been garbage collected",
      "To prevent objects from ever being garbage collected",
      "To clone final objects dynamically"
    ],
    answer: 1
  },
  {
    id: 54,
    difficulty: "hard",
    category: "DSA",
    question: "Which tree layout maintains that the height of left and right subtrees of any node differs by at most 1?",
    options: ["Binary Tree", "AVL Tree", "B+ Tree", "Trie"],
    answer: 1
  }
];

// ==================== 2. CENTRALIZED STATE MANAGEMENT ====================
const state = {
  currentScreen: "auth", // auth | landing | setup | quiz | results | review
  user: null, // Logged in user profile object, or null (Guest)
  currentQuestionIndex: 0,
  score: 0,
  answered: false,
  selectedAnswer: null,
  timer: 15,
  difficulty: "medium", // easy | medium | hard
  questionCount: 10,
  startTime: null,
  totalTimeTaken: 0,
  userAnswers: [], // Array of { questionId, selectedIndex, isCorrect, timeTaken }
  mute: false,
  quizQuestions: [], // Selected subset of questions for active run
  
  // Pro Settings (Unlocked for Logged In users)
  proModeActive: false,
  customTimeLimit: 15,
  selectedCategories: ["JavaScript", "HTML/CSS", "Java", "C++", "DSA", "Fundamentals", "Reasoning"],
  suddenDeath: false
};

// Timer reference ID
let timerInterval = null;

// ==================== 3. AUDIO SYNTHESIZER (WEB AUDIO API) ====================
const AudioSynth = (() => {
  let audioCtx = null;

  function initCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume context if suspended (browser security)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (state.mute) return;
    try {
      initCtx();
      const now = audioCtx.currentTime;

      if (type === "correct") {
        // High pleasant double-beep chime
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880.00, now + 0.1); // A5

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "wrong") {
        // Low warning warning buzz
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.25);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "complete") {
        // Harmonic major-chord arpeggio fanfare
        const chord = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        chord.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.06, now + idx * 0.08 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.65);

          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.7);
        });
      }
    } catch (e) {
      console.warn("Audio Context not supported or allowed yet.", e);
    }
  }

  return { playSound, initCtx };
})();

// ==================== 4. LOCALSTORAGE DATA HANDLERS ====================
const StorageManager = (() => {
  // Pre-seed accounts list with demo account (admin/admin)
  function initUsersDatabase() {
    let users = JSON.parse(localStorage.getItem("quizmaster-users")) || [];
    const adminExists = users.some(u => u.email === "admin" || u.username === "admin");
    if (!adminExists) {
      users.push({
        username: "admin",
        email: "admin",
        password: "admin", // Plaintext for mock demo convenience
        level: 1,
        xp: 0,
        unlockedThemes: ["default"]
      });
      localStorage.setItem("quizmaster-users", JSON.stringify(users));
    }
  }

  function getUser(loginId, password) {
    const users = JSON.parse(localStorage.getItem("quizmaster-users")) || [];
    return users.find(u => (u.email === loginId || u.username === loginId) && u.password === password);
  }

  function createUser(username, email, password) {
    const users = JSON.parse(localStorage.getItem("quizmaster-users")) || [];
    if (users.some(u => u.username === username || u.email === email)) {
      return { success: false, msg: "Username or email already exists." };
    }
    const newUser = {
      username,
      email,
      password,
      level: 1,
      xp: 0,
      unlockedThemes: ["default"]
    };
    users.push(newUser);
    localStorage.setItem("quizmaster-users", JSON.stringify(users));
    return { success: true, user: newUser };
  }

  function updateUserProfile(username, updates) {
    const users = JSON.parse(localStorage.getItem("quizmaster-users")) || [];
    const idx = users.findIndex(u => u.username === username);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...updates };
      localStorage.setItem("quizmaster-users", JSON.stringify(users));
    }
  }

  // Save specific attempt analytics
  function logAttempt(username, attemptData) {
    const key = `quizmaster-history-${username || 'guest'}`;
    const history = JSON.parse(localStorage.getItem(key)) || [];
    history.unshift({
      date: new Date().toISOString(),
      ...attemptData
    });
    localStorage.setItem(key, JSON.stringify(history.slice(0, 15))); // Keep last 15
  }

  function getHistory(username) {
    const key = `quizmaster-history-${username || 'guest'}`;
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  function clearHistory(username) {
    const key = `quizmaster-history-${username || 'guest'}`;
    localStorage.removeItem(key);
  }

  return { initUsersDatabase, getUser, createUser, updateUserProfile, logAttempt, getHistory, clearHistory };
})();

// Initialize users database on startup
StorageManager.initUsersDatabase();

// ==================== 5. UI SCREEN TRANSITIONS & GSAP CONTROLLER ====================
const ViewController = (() => {
  const screens = {
    auth: document.getElementById("screen-auth"),
    landing: document.getElementById("screen-landing"),
    setup: document.getElementById("screen-setup"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results"),
    review: document.getElementById("screen-review")
  };

  function showScreen(screenName) {
    // Stop any timer on screen change
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    state.currentScreen = screenName;
    
    // Hide all screens, display active
    Object.keys(screens).forEach(key => {
      const el = screens[key];
      if (key === screenName) {
        el.style.display = "flex";
        el.classList.add("active");
        
        // Trigger entrance animations using GSAP
        gsap.killTweensOf(el);
        gsap.fromTo(el, 
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", clearProps: "transform" }
        );
      } else {
        el.style.display = "none";
        el.classList.remove("active");
      }
    });

    // Handle screen-specific renders
    if (screenName === "landing") {
      renderLanding();
    } else if (screenName === "setup") {
      renderSetup();
    } else if (screenName === "quiz") {
      startQuizSession();
    } else if (screenName === "results") {
      renderResults();
    } else if (screenName === "review") {
      renderReview();
    }

    // Update header controls based on auth state
    const statsBtn = document.getElementById('btn-stats');
    const profileCont = document.getElementById('profile-container');
    if (screenName === 'auth') {
      statsBtn.classList.add('hidden');
      profileCont.classList.add('hidden');
    } else if (state.user) {
      statsBtn.classList.remove('hidden');
      profileCont.classList.remove('hidden');
      document.getElementById('user-display-name').textContent = state.user.username;
      document.getElementById('avatar-letter').textContent = state.user.username.charAt(0).toUpperCase();
    } else {
      statsBtn.classList.add('hidden');
      profileCont.classList.remove('hidden');
      document.getElementById('user-display-name').textContent = 'Guest';
      document.getElementById('avatar-letter').textContent = 'G';
    }
  }

  // Float background blobs dynamically
  function initAmbientAnimations() {
    gsap.to(".blob-1", {
      x: "15vw",
      y: "10vh",
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(".blob-2", {
      x: "-15vw",
      y: "-10vh",
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(".blob-3", {
      x: "-10vw",
      y: "12vh",
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  return { showScreen, initAmbientAnimations };
})();

// ==================== 6. RENDERING FUNCTIONS ====================

// --- RENDER LANDING PAGE ---
function renderLanding() {
  const landingStats = document.getElementById("landing-stats");
  const btnDashboard = document.getElementById("btn-dashboard-trigger");
  
  if (state.user) {
    landingStats.classList.remove("hidden");
    btnDashboard.classList.remove("hidden");
    
    // Greeting modifications
    document.getElementById("landing-tagline").textContent = `Pro Profile Unlocked: Level ${state.user.level}`;
    
    // Lifetime computations for summary UI
    const history = StorageManager.getHistory(state.user.username);
    if (history.length > 0) {
      const high = Math.max(...history.map(h => h.accuracy));
      const last = history[0].badge;
      
      document.getElementById("stat-rank").textContent = last;
      document.getElementById("stat-high").textContent = `${high}%`;
    } else {
      document.getElementById("stat-rank").textContent = "Unranked";
      document.getElementById("stat-high").textContent = "-";
    }
    document.getElementById("stat-xp-lvl").textContent = `LVL ${state.user.level}`;
  } else {
    landingStats.classList.add("hidden");
    btnDashboard.classList.add("hidden");
    document.getElementById("landing-tagline").textContent = "SaaS Quality Coding Challenges";
  }

  // Profile Header update
  updateProfileHeader();
}

// --- UPDATE PROFILE NAVBAR WIDGET ---
function updateProfileHeader() {
  const trigger = document.getElementById("profile-trigger");
  const dropdown = document.getElementById("profile-dropdown");
  
  if (state.user) {
    document.getElementById("user-display-name").textContent = state.user.username;
    document.getElementById("avatar-letter").textContent = state.user.username.charAt(0).toUpperCase();
    document.getElementById("user-display-email").textContent = state.user.email;
    
    // Level progress calculations
    const lvl = state.user.level;
    const xp = state.user.xp;
    const xpNext = lvl * 150; // XP threshold increments by level
    const xpPrev = (lvl - 1) * 150;
    const percent = Math.min(100, Math.max(0, ((xp) / xpNext) * 100));

    document.getElementById("user-lvl").textContent = lvl;
    document.getElementById("user-xp").textContent = xp;
    document.getElementById("user-xp-next").textContent = xpNext;
    document.getElementById("user-xp-bar").style.width = `${percent}%`;
    
    // Theme unlock status tag
    document.getElementById("theme-unlock-tag").textContent = `Level ${lvl}`;
    if (lvl > 1) {
      document.getElementById("theme-unlock-tag").classList.add("text-success");
      document.getElementById("theme-unlock-tag").textContent = "Themes Unlocked";
    } else {
      document.getElementById("theme-unlock-tag").classList.remove("text-success");
    }
  } else {
    document.getElementById("user-display-name").textContent = "Guest Mode";
    document.getElementById("avatar-letter").textContent = "G";
    document.getElementById("user-display-email").textContent = "guest@quizmaster.pro";
  }
}

// --- RENDER CONFIGURATION SETUP ---
function renderSetup() {
  const overlay = document.getElementById("sandbox-lock-overlay");
  const proCard = document.getElementById("pro-sandbox-card");
  
  if (state.user) {
    // Unlocked
    overlay.classList.add("hidden");
    proCard.classList.remove("disabled-visual");
    state.proModeActive = true;
  } else {
    // Locked
    overlay.classList.remove("hidden");
    proCard.classList.add("disabled-visual");
    state.proModeActive = false;
  }
  
  updateProfileHeader();
}

// --- START QUIZ PREPARATIONS ---
function startQuizSession() {
  // 1. Gather configured settings
  let count = parseInt(document.querySelector('input[name="questionCount"]:checked').value);
  let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  
  state.questionCount = count;
  state.difficulty = difficulty;
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.userAnswers = [];
  state.startTime = Date.now();

  // 2. Question Pool Selection
  let pool = QUESTIONS.filter(q => q.difficulty === difficulty);
  
  // Apply category limits if Pro Customizer is unlocked
  if (state.user && state.proModeActive) {
    const selectedCats = Array.from(document.querySelectorAll('input[name="categories"]:checked')).map(c => c.value);
    
    // Fallback if no category selected
    if (selectedCats.length > 0) {
      pool = pool.filter(q => {
        // Map nested categories or match string
        if (q.category === "HTML/CSS") return selectedCats.includes("HTML/CSS");
        if (q.category === "Logical Reasoning" || q.category === "Reasoning") return selectedCats.includes("Reasoning");
        if (q.category === "Fundamentals" || q.category === "Computer Fundamentals") return selectedCats.includes("Fundamentals");
        return selectedCats.includes(q.category);
      });
    }

      // Apply custom timer values
    state.customTimeLimit = parseInt(document.getElementById("custom-time-limit").value);
    state.suddenDeath = document.getElementById("sudden-death-toggle").checked;
  } else {
    // Default config values
    state.customTimeLimit = 15;
    state.suddenDeath = false;
  }

  // Fallback if search parameters yield empty result set
  if (pool.length === 0) {
    pool = QUESTIONS.filter(q => q.difficulty === difficulty);
  }

  // Shuffle pool using Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Trim to count limit
  state.quizQuestions = shuffled.slice(0, count);
  state.questionCount = state.quizQuestions.length; // Ensure matches actual size

  // Setup sidebar elements
  const sdIndicator = document.getElementById("sudden-death-indicator");
  if (state.suddenDeath) {
    sdIndicator.classList.remove("hidden");
  } else {
    sdIndicator.classList.add("hidden");
  }

  document.getElementById("live-points").textContent = "000";

  // 3. Render Question 1
  loadQuestionCard();
}

// --- RENDER ACTIVE QUESTION CARD ---
function loadQuestionCard() {
  const currentIdx = state.currentQuestionIndex;
  const q = state.quizQuestions[currentIdx];
  
  state.answered = false;
  state.selectedAnswer = null;
  state.timer = state.customTimeLimit;

  // Header Details
  document.getElementById("q-current").textContent = currentIdx + 1;
  document.getElementById("q-total").textContent = state.questionCount;
  document.getElementById("q-category").textContent = q.category;
  document.getElementById("q-difficulty").textContent = q.difficulty.toUpperCase();

  // Question Prompt
  document.getElementById("q-text").textContent = q.question;

  // Code Snippet container
  const codeBox = document.getElementById("q-code-container");
  const codeNode = document.getElementById("q-code");
  if (q.code) {
    codeNode.textContent = q.code;
    codeBox.classList.remove("hidden");
  } else {
    codeBox.classList.add("hidden");
  }

  // Populate Options cards
  const optionsGrid = document.getElementById("options-grid");
  optionsGrid.innerHTML = "";
  
  q.options.forEach((opt, idx) => {
    const optLetter = String.fromCharCode(65 + idx); // A, B, C, D
    const card = document.createElement("div");
    card.className = "option-card";
    card.dataset.idx = idx;
    card.innerHTML = `
      <span class="option-letter">${optLetter}</span>
      <span class="option-text">${opt}</span>
      <span class="feedback-icon-placeholder"></span>
    `;
    
    // Option Click event attachment
    card.addEventListener("click", () => handleOptionSelected(idx, card));
    optionsGrid.appendChild(card);
  });

  // Stagger Option Cards in with GSAP
  gsap.fromTo(".option-card", 
    { opacity: 0, x: -15 },
    { opacity: 1, x: 0, duration: 0.35, stagger: 0.08, ease: "power2.out" }
  );

  // Global viewport bar progress update
  const totalBarPercent = ((currentIdx) / state.questionCount) * 100;
  document.getElementById("quiz-progress-bar").style.width = `${totalBarPercent}%`;

  // Start Timer logic
  startQuestionTimer();
}

// --- TIMER MECHANICAL LOOP ---
function startQuestionTimer() {
  if (timerInterval) clearInterval(timerInterval);

  const duration = state.customTimeLimit;
  const progressCircle = document.getElementById("timer-progress-circle");
  const counterText = document.getElementById("timer-counter");
  const maxDashOffset = 314.16; // 2 * PI * R (R=50)

  // Reset SVG styles
  progressCircle.style.strokeDashoffset = "0";
  progressCircle.classList.remove("warning");
  counterText.textContent = state.timer;

  timerInterval = setInterval(() => {
    state.timer--;
    
    if (state.timer >= 0) {
      counterText.textContent = state.timer;
      
      // Compute dial circle dashoffset
      const percentLeft = state.timer / duration;
      const offsetVal = maxDashOffset * (1 - percentLeft);
      progressCircle.style.strokeDashoffset = offsetVal;

      if (state.timer <= 3) {
        progressCircle.classList.add("warning");
      }
    } else {
      // Timeout auto-submit
      clearInterval(timerInterval);
      handleQuestionTimeout();
    }
  }, 1000);
}

// --- OPTION SUBMISSION HANDLER ---
function handleOptionSelected(selectedIndex, selectedCard) {
  if (state.answered) return;
  
  state.answered = true;
  state.selectedAnswer = selectedIndex;
  clearInterval(timerInterval);

  const q = state.quizQuestions[state.currentQuestionIndex];
  const isCorrect = (selectedIndex === q.answer);
  const cards = document.querySelectorAll(".option-card");

  // Track attempt metrics
  const questionTimeTaken = state.customTimeLimit - state.timer;
  state.userAnswers.push({
    questionId: q.id,
    questionText: q.question,
    selectedIndex,
    correctIndex: q.answer,
    isCorrect,
    timeTaken: questionTimeTaken
  });

  // Style cards accordingly
  cards.forEach((card, idx) => {
    card.classList.add("disabled");
    
    if (idx === q.answer) {
      card.classList.add("correct");
      card.querySelector(".feedback-icon-placeholder").innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-success">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    }
    
    if (idx === selectedIndex && !isCorrect) {
      card.classList.add("wrong");
      card.querySelector(".feedback-icon-placeholder").innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-danger">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    }
  });

  if (isCorrect) {
    state.score++;
    AudioSynth.playSound("correct");
    
    // Add point XP counter animation
    const livePoints = document.getElementById('live-points');
    const oldVal = parseInt(livePoints.textContent) || 0;
    const multiplier = q.difficulty === 'easy' ? 10 : q.difficulty === 'medium' ? 20 : 30;
    const newVal = oldVal + multiplier;
    const counter = { val: oldVal };

    gsap.to(counter, {
      val: newVal,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        livePoints.textContent = String(Math.round(counter.val)).padStart(3, '0');
      }
    });
  } else {
    AudioSynth.playSound("wrong");

    // Sudden death evaluation
    if (state.suddenDeath) {
      setTimeout(() => {
        completeQuizSession();
      }, 1200);
      return;
    }
  }

  // Advance to next after short delay
  setTimeout(() => {
    advanceQuiz();
  }, 1600);
}

// --- QUESTION TIMEOUT FORCED TRANSITION ---
function handleQuestionTimeout() {
  state.answered = true;
  state.selectedAnswer = null;

  const q = state.quizQuestions[state.currentQuestionIndex];
  const cards = document.querySelectorAll(".option-card");

  state.userAnswers.push({
    questionId: q.id,
    questionText: q.question,
    selectedIndex: null,
    correctIndex: q.answer,
    isCorrect: false,
    timeTaken: state.customTimeLimit
  });

  cards.forEach((card, idx) => {
    card.classList.add("disabled");
    if (idx === q.answer) {
      card.classList.add("correct");
      card.querySelector(".feedback-icon-placeholder").innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-success">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    }
  });

  AudioSynth.playSound("wrong");

  // Sudden Death timeout check
  if (state.suddenDeath) {
    setTimeout(() => {
      completeQuizSession();
    }, 1200);
    return;
  }

  setTimeout(() => {
    advanceQuiz();
  }, 1600);
}

// --- STEP QUESTION POOL ---
function advanceQuiz() {
  state.currentQuestionIndex++;
  
  if (state.currentQuestionIndex < state.questionCount) {
    loadQuestionCard();
  } else {
    completeQuizSession();
  }
}

// --- END OF GAME AGGREGATIONS ---
function completeQuizSession() {
  state.totalTimeTaken = Math.round((Date.now() - state.startTime) / 1000);
  AudioSynth.playSound("complete");
  
  // Global progress bar complete fill
  document.getElementById("quiz-progress-bar").style.width = "100%";

  // Trigger high scores confetti celebration for decent accuracy
  const acc = Math.round((state.score / state.questionCount) * 100);
  if (acc >= 70) {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#8A2387', '#E94057', '#F27121']
      });
    } catch(e) {}
  }

  // Profile XP calculations and logging (Registered users only)
  let xpEarned = 0;
  if (state.user) {
    // XP math: Easy=10xp, Medium=20xp, Hard=30xp per correct answer
    // Add accuracy scale bonuses
    const difficultyMultiplier = state.difficulty === "easy" ? 10 : state.difficulty === "medium" ? 20 : 30;
    xpEarned = state.score * difficultyMultiplier;
    
    if (acc === 100) xpEarned += 50; // Perfect score bonus
    
    // Save to user object
    let newXp = state.user.xp + xpEarned;
    let currentLvl = state.user.level;
    let nextLvlThreshold = currentLvl * 150;
    let leveledUp = false;

    while (newXp >= nextLvlThreshold) {
      newXp -= nextLvlThreshold;
      currentLvl++;
      nextLvlThreshold = currentLvl * 150;
      leveledUp = true;
    }

    const updatedUser = {
      ...state.user,
      xp: newXp,
      level: currentLvl
    };

    // Save to storage
    StorageManager.updateUserProfile(state.user.username, updatedUser);
    state.user = updatedUser;

    // Show level up alert
    const lvlNotification = document.getElementById("level-up-notification");
    if (leveledUp) {
      lvlNotification.classList.remove("hidden");
    } else {
      lvlNotification.classList.add("hidden");
    }
  }

  // Compute Badge ranks
  const badgeObj = getPerformanceBadge(acc);

  // Sync to history database
  const logData = {
    difficulty: state.difficulty,
    questionCount: state.questionCount,
    score: state.score,
    accuracy: acc,
    timeTaken: state.totalTimeTaken,
    badge: badgeObj.name,
    xpGained: xpEarned
  };
  
  StorageManager.logAttempt(state.user ? state.user.username : null, logData);

  // Go to results Screen
  ViewController.showScreen("results");
}

// --- BADGE CLASSIFIER UTILS ---
function getPerformanceBadge(percentage) {
  if (percentage >= 95) {
    return {
      name: "Grand Master",
      desc: "Acing the challenge with supreme, near-perfect precision.",
      color: "gold",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" class="animate-float"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline><circle cx="12" cy="8" r="3" fill="gold"></circle></svg>`
    };
  } else if (percentage >= 85) {
    return {
      name: "Expert",
      desc: "Demonstrated advanced execution, solving tough challenges.",
      color: "#c0c0c0",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#e6e6e6" stroke-width="2" class="animate-float"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
    };
  } else if (percentage >= 70) {
    return {
      name: "Skilled",
      desc: "Good grasp of topics, showing solid code understanding.",
      color: "#cd7f32",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#CD7F32" stroke-width="2" class="animate-float"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    };
  } else if (percentage >= 50) {
    return {
      name: "Learner",
      desc: "Building foundations. Keeps training to master options.",
      color: "#4e9af1",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#4e9af1" stroke-width="2" class="animate-float"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
    };
  } else {
    return {
      name: "Beginner",
      desc: "Starting coding journey. Try again to level up skills.",
      color: "#94a3b8",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" class="animate-float"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
    };
  }
}

// --- RENDER RESULTS SUMMARY DASHBOARD ---
function renderResults() {
  const acc = Math.round((state.score / state.questionCount) * 100);

  // Animate Gauge Accuracy Ring
  const ring = document.getElementById('result-accuracy-ring');
  const maxDashOffset = 389.5; // 2 * PI * R (R=62)
  const offset = maxDashOffset * (1 - acc / 100);

  // Animate accuracy text counter with proper onUpdate
  const accCounter = { val: 0 };
  const accText = document.getElementById('result-accuracy-text');
  accText.textContent = '0%';
  gsap.to(accCounter, {
    val: acc,
    duration: 1.2,
    ease: 'power2.out',
    onUpdate: () => {
      accText.textContent = Math.round(accCounter.val) + '%';
    }
  });

  gsap.to(ring, {
    strokeDashoffset: offset,
    duration: 1.2,
    ease: 'power2.out'
  });

  // Secondary metrics
  document.getElementById("res-score").textContent = `${state.score}/${state.questionCount}`;
  document.getElementById("res-correct").textContent = state.score;
  document.getElementById("res-wrong").textContent = state.questionCount - state.score;
  document.getElementById("res-time").textContent = `${state.totalTimeTaken}s`;

  // XP updates (visual counter with proper onUpdate)
  const xpEarned = state.user
    ? state.score * (state.difficulty === 'easy' ? 10 : state.difficulty === 'medium' ? 20 : 30) + (acc === 100 ? 50 : 0)
    : 0;
  const xpEl = document.getElementById('result-xp-earned');
  if (xpEarned > 0) {
    const xpCount = { val: 0 };
    xpEl.textContent = '+0 XP';
    gsap.to(xpCount, {
      val: xpEarned,
      duration: 1,
      ease: 'power2.out',
      onUpdate: () => {
        xpEl.textContent = '+' + Math.round(xpCount.val) + ' XP';
      }
    });
  } else {
    xpEl.textContent = 'Guest — Log in to earn XP';
  }

  // Display badges
  const badge = getPerformanceBadge(acc);
  document.getElementById("result-badge-name").textContent = badge.name;
  document.getElementById("result-badge-desc").textContent = badge.desc;
  document.getElementById("result-badge-icon").innerHTML = badge.svg;

  // Stagger result layouts with GSAP
  gsap.fromTo(".metric-card",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: "back.out(1.5)" }
  );

  updateProfileHeader();
}

// --- RENDER ANSWERS REVIEW ACCORDION ---
function renderReview() {
  const container = document.getElementById("review-list");
  container.innerHTML = "";

  state.userAnswers.forEach((ans, idx) => {
    const q = QUESTIONS.find(elem => elem.id === ans.questionId);
    if (!q) return;

    const item = document.createElement("div");
    item.className = "review-item";

    const userValText = ans.selectedIndex !== null ? q.options[ans.selectedIndex] : "Timeout (Unanswered)";
    const correctValText = q.options[ans.correctIndex];
    const statusClass = ans.isCorrect ? "correct" : ans.selectedIndex === null ? "unanswered" : "wrong";
    const statusLabel = ans.isCorrect ? "Correct" : ans.selectedIndex === null ? "Timed Out" : "Incorrect";

    item.innerHTML = `
      <div class="review-item-header">
        <span class="review-q-title">Q${idx + 1}: ${q.question}</span>
        <span class="review-badge-status ${statusClass}">${statusLabel}</span>
      </div>
      <div class="review-item-body">
        <p class="font-semibold mb-2">Question Details:</p>
        <p class="desc-tag mb-4">${q.question}</p>
        
        <div class="review-answers-compare">
          <div class="ans-pane pane-user ${statusClass}">
            <span>Your Answer</span>
            <p>${userValText}</p>
          </div>
          <div class="ans-pane pane-correct">
            <span>Correct Answer</span>
            <p>${correctValText}</p>
          </div>
        </div>
      </div>
    `;

    // Accordion Toggle click
    item.querySelector(".review-item-header").addEventListener("click", () => {
      item.classList.toggle("expanded");
    });

    container.appendChild(item);
  });
}

// --- RENDER ANALYTICS HISTORIES ---
function renderAnalytics() {
  const username = state.user ? state.user.username : "guest";
  const history = StorageManager.getHistory(username);
  
  // Aggregate stats values
  const count = history.length;
  document.getElementById("stat-attempts").textContent = count;
  
  if (count > 0) {
    const accs = history.map(h => h.accuracy);
    const max = Math.max(...accs);
    const avg = Math.round(accs.reduce((a, b) => a + b, 0) / count);
    
    // Last run formatting
    const lastRunDate = new Date(history[0].date);
    const dateFormatted = lastRunDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

    document.getElementById("stat-max-score").textContent = `${max}%`;
    document.getElementById("stat-avg-score").textContent = `${avg}%`;
    document.getElementById("stat-last-time").textContent = dateFormatted;
  } else {
    document.getElementById("stat-max-score").textContent = "0%";
    document.getElementById("stat-avg-score").textContent = "0%";
    document.getElementById("stat-last-time").textContent = "-";
  }

  // Populate attempt records lists
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";

  if (count > 0) {
    history.forEach(item => {
      const d = new Date(item.date);
      const timeStr = d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const row = document.createElement("div");
      row.className = "history-item";
      row.innerHTML = `
        <div class="history-info">
          <span class="h-diff">${item.difficulty} (${item.questionCount}Q)</span>
          <span class="h-date">${timeStr}</span>
        </div>
        <span class="h-score font-semibold ${item.accuracy >= 70 ? 'text-success' : 'text-danger'}">${item.accuracy}% (${item.badge})</span>
      `;
      historyContainer.appendChild(row);
    });
  } else {
    historyContainer.innerHTML = `
      <div class="history-empty text-center py-6">
        <p class="desc-tag">No attempt data logged yet. Complete a quiz to see results.</p>
      </div>
    `;
  }
}

// ==================== 7. THEME & SOUND CONFIGURATION SYSTEMS ====================

// --- INIT THEME PERSISTENCE STATE ---
function initThemeState() {
  const saved = localStorage.getItem('quizmaster-theme') || 'dark';
  const savedAccent = localStorage.getItem('quizmaster-accent') || 'default';

  currentBaseTheme   = saved;
  currentAccentTheme = savedAccent;

  // Apply base theme
  document.documentElement.setAttribute('data-theme', currentBaseTheme);

  // Apply accent on top (if not default, layer it via a second attribute)
  if (currentAccentTheme !== 'default' && currentBaseTheme !== 'light') {
    document.documentElement.setAttribute('data-theme', currentAccentTheme);
  }

  updateThemeIcons();
}

function updateThemeIcons() {
  const btn = document.getElementById('btn-theme');
  const sunIcon  = btn.querySelector('.icon-sun');
  const moonIcon = btn.querySelector('.icon-moon');
  if (currentBaseTheme === 'light') {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

// --- TOGGLE BASE LIGHT / DARK (preserves accent) ---
function toggleTheme() {
  currentBaseTheme = currentBaseTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('quizmaster-theme', currentBaseTheme);

  if (currentBaseTheme === 'light') {
    // Light mode always overrides accents for readability
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    // Restore the saved accent theme on dark base
    const theme = (currentAccentTheme && currentAccentTheme !== 'default')
      ? currentAccentTheme : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }

  updateThemeIcons();
}

// --- PREMIUM UNLOCKED THEMES CONFIG ---
function applyCustomThemePreset(themeVal) {
  if (!state.user) return;
  const level = state.user.level;

  // Level gates for paid themes
  if (themeVal === 'cyberpunk' && level < 2) { alert('Reach Level 2 to unlock Cyberpunk Gold!'); return; }
  if (themeVal === 'emerald'   && level < 3) { alert('Reach Level 3 to unlock Emerald Forest!'); return; }
  if (themeVal === 'sunset'    && level < 4) { alert('Reach Level 4 to unlock Rose Sunset!');   return; }

  currentAccentTheme = themeVal;
  localStorage.setItem('quizmaster-accent', themeVal);

  // Only apply accent if on dark base
  if (currentBaseTheme !== 'light') {
    const applyVal = (themeVal === 'default') ? 'dark' : themeVal;
    document.documentElement.setAttribute('data-theme', applyVal);
  }

  // Highlight active card
  document.querySelectorAll('.theme-select-card').forEach(card => {
    card.classList.toggle('active', card.dataset.theme === themeVal);
  });
}

function updateThemeSelectCards() {
  const level = state.user ? state.user.level : 1;
  
  const cyberpunk = document.getElementById("theme-card-cyberpunk");
  const emerald = document.getElementById("theme-card-emerald");
  const sunset = document.getElementById("theme-card-sunset");

  // Unlocking card statuses visually
  if (level >= 2) {
    cyberpunk.classList.remove("locked");
    cyberpunk.querySelector(".theme-status").innerHTML = `<span class="text-success">Available</span>`;
  } else {
    cyberpunk.classList.add("locked");
    cyberpunk.querySelector(".theme-status").innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> LVL 2 Unlocks`;
  }

  if (level >= 3) {
    emerald.classList.remove("locked");
    emerald.querySelector(".theme-status").innerHTML = `<span class="text-success">Available</span>`;
  } else {
    emerald.classList.add("locked");
    emerald.querySelector(".theme-status").innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> LVL 3 Unlocks`;
  }

  if (level >= 4) {
    sunset.classList.remove("locked");
    sunset.querySelector(".theme-status").innerHTML = `<span class="text-success">Available</span>`;
  } else {
    sunset.classList.add("locked");
    sunset.querySelector(".theme-status").innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> LVL 4 Unlocks`;
  }
}

// --- SOUND MUTE TOGGLE ---
function toggleMute() {
  state.mute = !state.mute;
  
  const btn = document.getElementById("btn-sound");
  const soundIcon = btn.querySelector(".icon-unmuted");
  const muteIcon = btn.querySelector(".icon-muted");

  if (state.mute) {
    soundIcon.classList.add("hidden");
    muteIcon.classList.remove("hidden");
    btn.classList.add("active");
  } else {
    soundIcon.classList.remove("hidden");
    muteIcon.classList.add("hidden");
    btn.classList.remove("active");
  // Quick test play synthesized sounds to verify
    AudioSynth.playSound("correct");
  }
}

// ==================== 8. MODAL HANDLERS ====================
const ModalController = (() => {
  const statsModal = document.getElementById("modal-stats-view");
  const themesModal = document.getElementById("modal-themes-view");

  function openStats() {
    renderAnalytics();
    statsModal.classList.remove("hidden");
    
    // GSAP Modal Zoom entrance
    gsap.fromTo(statsModal.querySelector(".modal-card"),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.5)" }
    );
  }

  function closeStats() {
    gsap.to(statsModal.querySelector(".modal-card"), {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => statsModal.classList.add("hidden")
    });
  }

  function openThemes() {
    if (!state.user) return;
    updateThemeSelectCards();
    themesModal.classList.remove("hidden");
    
    // GSAP Modal Zoom entrance
    gsap.fromTo(themesModal.querySelector(".modal-card"),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.5)" }
    );
  }

  function closeThemes() {
    gsap.to(themesModal.querySelector(".modal-card"), {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => themesModal.classList.add("hidden")
    });
  }

  return { openStats, closeStats, openThemes, closeThemes };
})();

// ==================== 9. EVENT LISTENERS ATTACHMENTS ====================
document.addEventListener("DOMContentLoaded", () => {
  
  // Ambient spinning
  ViewController.initAmbientAnimations();
  // Set sun/moon based on cached values
  initThemeState();

  // 1. AUTH SCREEN TRIGGERS
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const formLogin = document.getElementById("form-login");
  const formSignup = document.getElementById("form-signup");
  const btnGuest = document.getElementById("btn-guest");

  tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    formLogin.classList.remove("hidden");
    formSignup.classList.add("hidden");
  });

  tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    formSignup.classList.remove("hidden");
    formLogin.classList.add("hidden");
  });

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginId = document.getElementById("login-email").value.trim();
    const pass = document.getElementById("login-password").value;
    
    const userMatched = StorageManager.getUser(loginId, pass);
    if (userMatched) {
      state.user = userMatched;
      ViewController.showScreen("landing");
      AudioSynth.playSound("correct");
    } else {
      alert("Invalid mock credentials. Hint: use admin / admin for demo review.");
      AudioSynth.playSound("wrong");
    }
  });

  formSignup.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const pass = document.getElementById("signup-password").value;

    const res = StorageManager.createUser(name, email, pass);
    if (res.success) {
      state.user = res.user;
      ViewController.showScreen("landing");
      AudioSynth.playSound("correct");
    } else {
      alert(res.msg);
      AudioSynth.playSound("wrong");
    }
  });

  btnGuest.addEventListener("click", () => {
    state.user = null; // Guest mode
    ViewController.showScreen("landing");
  });

  // 2. LANDING SCREEN TRIGGERS
  document.getElementById("btn-start-landing").addEventListener("click", () => {
    ViewController.showScreen("setup");
  });

  document.getElementById("btn-dashboard-trigger").addEventListener("click", () => {
    ModalController.openStats();
  });

  // 3. SETUP SCREEN TRIGGERS
  document.getElementById("btn-setup-back").addEventListener("click", () => {
    ViewController.showScreen("landing");
  });

  document.getElementById("btn-sandbox-auth-redirect").addEventListener("click", () => {
    ViewController.showScreen("auth");
  });

  document.getElementById("btn-launch-quiz").addEventListener("click", () => {
    ViewController.showScreen("quiz");
  });

  // Pro Sandbox Duration Slider input event
  const timeSlider = document.getElementById("custom-time-limit");
  const timeSliderLabel = document.getElementById("time-limit-val");
  timeSlider.addEventListener("input", (e) => {
    timeSliderLabel.textContent = `${e.target.value}s`;
  });

  // 4. RESULTS DASHBOARD TRIGGERS
  document.getElementById("btn-retry").addEventListener("click", () => {
    ViewController.showScreen("quiz");
  });

  document.getElementById("btn-review").addEventListener("click", () => {
    ViewController.showScreen("review");
  });

  document.getElementById("btn-results-home").addEventListener("click", () => {
    ViewController.showScreen("landing");
  });

  // 5. REVIEW SCREEN TRIGGERS
  document.getElementById("btn-review-back").addEventListener("click", () => {
    ViewController.showScreen("results");
  });

  // 6. GLOBAL HEADER CONTROLS TRIGGERS
  document.getElementById("btn-sound").addEventListener("click", toggleMute);
  document.getElementById("btn-theme").addEventListener("click", toggleTheme);
  document.getElementById("btn-stats").addEventListener("click", () => {
    ModalController.openStats();
  });

  // Profile Dropdown display toggle
  const profileTrigger = document.getElementById("profile-trigger");
  const profileDropdown = document.getElementById("profile-dropdown");
  profileTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = profileTrigger.getAttribute("aria-expanded") === "true";
    profileTrigger.setAttribute("aria-expanded", !isExpanded);
    profileDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!profileDropdown.classList.contains("hidden") && !profileDropdown.contains(e.target) && e.target !== profileTrigger) {
      profileDropdown.classList.add("hidden");
      profileTrigger.setAttribute("aria-expanded", "false");
    }
  });
  // Profile actions menu triggers
  document.getElementById("btn-dropdown-stats").addEventListener("click", () => {
    profileDropdown.classList.add("hidden");
    ModalController.openStats();
  });

  document.getElementById("btn-dropdown-themes").addEventListener("click", () => {
    profileDropdown.classList.add("hidden");
    ModalController.openThemes();
  });

  document.getElementById("btn-logout").addEventListener("click", () => {
    state.user = null;
    profileDropdown.classList.add("hidden");
    ViewController.showScreen("auth");
  });

  // 7. MODALS TRIGGERS
  // Stats Modal close
  document.getElementById("btn-close-stats").addEventListener("click", ModalController.closeStats);
  document.getElementById("btn-close-stats-footer").addEventListener("click", ModalController.closeStats);
  document.getElementById("modal-stats-overlay").addEventListener("click", ModalController.closeStats);

  // Themes Modal close
  document.getElementById("btn-close-themes").addEventListener("click", ModalController.closeThemes);
  document.getElementById("btn-close-themes-footer").addEventListener("click", ModalController.closeThemes);
  document.getElementById("modal-themes-overlay").addEventListener("click", ModalController.closeThemes);

  // Theme card selectors
  const themeCards = document.querySelectorAll(".theme-select-card");
  themeCards.forEach(card => {
    card.addEventListener("click", () => {
      const themeVal = card.dataset.theme;
      if (card.classList.contains("locked")) {
        alert("This theme preset is currently locked. Gain XP and level up your profile to unlock it!");
      } else {
        applyCustomThemePreset(themeVal);
      }
    });
  });
  