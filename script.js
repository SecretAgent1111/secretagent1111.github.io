const input = document.getElementById("commandInput");
const screen = document.getElementById("screen");

function bootMessage() {
  return `
Welcome to secure-shell

Type 'help' to see available commands.
`;
}

const commands = {
  help: `
Available commands:

personal     → Personal details
certs        → Certifications (highlighted)
labs         → TryHackMe rooms & labs
experience   → Work experience
education    → Education & research
clear        → Clear the terminal
`,

  personal: `
Name      : Varun Sai Yadla
Location  : Hyderabad, Telangana, India
Focus     : Blue Team | SOC | Threat Detection
Email     : yadlavarun11@gmail.com
LinkedIn  : linkedin.com/in/varunsaiyadla
`,

  certs: `
⭐ CERTIFICATIONS ⭐

• Cyber Security 101 (SEC1)
• SOC Level 1 Certificate
• CompTIA Network+ (N10-009)
• Advanced Certification Program in Cybersecurity

🏅 TryHackMe Rank: Top 2%
`,

  labs: `
🧪 TRYHACKME ROOMS

• CupidBot
  - Exploited insecure AI prompt handling
  - Used prompt injection techniques
  - Forced AI to reveal restricted information

• SOC Level 1
  - Alert triage and incident investigation

• Network Fundamentals
• Web Fundamentals
`,

  experience: `
💼 EXPERIENCE

InfoSec4TC – Cyber Security Specialist
Cartel Software – Cyber Security Analyst
`,

  education: `
🎓 EDUCATION

MSc Applied Cyber Security
Queen’s University Belfast

B.Tech CSE (Cyber Security)
Geethanjali College of Engineering & Technology
`,

  clear: "CLEAR"
};

// Boot message on load
screen.innerHTML = "";
addOutput(bootMessage());

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    addCommand(cmd);

    if (commands[cmd]) {
      if (commands[cmd] === "CLEAR") {
        screen.innerHTML = "";
        addOutput(bootMessage());
      } else {
        addOutput(commands[cmd]);
      }
    } else {
      addOutput(`command not found: ${cmd}
Type 'help' to list available commands.`);
    }

    input.value = "";
    screen.scrollTop = screen.scrollHeight;
  }
});

function addCommand(cmd) {
  const p = document.createElement("p");
  p.innerHTML = `<span class="prompt">varun@sec-lab:~$</span> ${cmd}`;
  screen.appendChild(p);
}

function addOutput(text) {
  const pre = document.createElement("pre");
  pre.className = "output";
  pre.textContent = text;
  screen.appendChild(pre);
}
