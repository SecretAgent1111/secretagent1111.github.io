const input = document.getElementById("commandInput");
const screen = document.getElementById("screen");

/* ================= BOOT ================= */

function boot() {
  screen.innerHTML = "";
  print(`
secure-shell initialized

Type 'help' to see available commands.
`);
}

/* ================= COMMANDS ================= */

const commands = {
  help: `
Available commands:

personal     → Personal details
certs        → Certifications
labs         → TryHackMe & SOC labs
splunk       → Open Splunk SOC labs
experience   → Work experience
education    → Education
clear        → Clear terminal
`,

  personal: `
Name     : Varun Sai Yadla
Location : Hyderabad, India
Focus    : Blue Team | SOC | Threat Detection
Email    : yadlavarun11@gmail.com
LinkedIn : linkedin.com/in/varunsaiyadla
`,

  certs: `
CERTIFICATIONS

• Cyber Security 101 (SEC1)
• SOC Level 1 Certificate
• CompTIA Network+ (N10-009)
• Advanced Certification Program in Cybersecurity

TryHackMe Rank: Top 2%
`,

  labs: `
TRYHACKME / SOC LABS

• CupidBot
  - AI prompt injection
  - LLM misuse exploitation

• Splunk SOC Labs
  - SIEM alert analysis
  - Log investigation
  - Detection engineering

Type 'splunk' to open detailed Splunk labs.
`,

  splunk: () => {
    print("Opening Splunk Labs in new tab...");
    window.open(
      "https://secretagent1111.github.io/splunk.html",
      "_blank"
    );
  },

  experience: `
EXPERIENCE

InfoSec4TC – Cyber Security Specialist
Cartel Software – Cyber Security Analyst
`,

  education: `
EDUCATION

MSc Applied Cyber Security
Queen’s University Belfast

B.Tech CSE (Cyber Security)
Geethanjali College of Engineering & Technology
`,

  clear: "CLEAR"
};

/* ================= INIT ================= */

boot();

/* ================= INPUT HANDLER ================= */

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    print(`varun@sec-lab:~$ ${cmd}`);

    if (commands[cmd]) {
      if (commands[cmd] === "CLEAR") {
        boot();
      } else if (typeof commands[cmd] === "function") {
        commands[cmd]();
      } else {
        print(commands[cmd]);
      }
    } else {
      print(`command not found: ${cmd}
Type 'help' to list available commands.`);
    }

    input.value = "";
    screen.scrollTop = screen.scrollHeight;
  }
});

/* ================= PRINT ================= */

function print(text) {
  const div = document.createElement("div");
  div.className = "output";
  div.textContent = text;
  screen.appendChild(div);
}
