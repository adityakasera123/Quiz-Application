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