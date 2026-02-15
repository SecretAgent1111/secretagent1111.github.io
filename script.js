const input = document.getElementById("commandInput");
const screen = document.getElementById("screen");

function boot() {
  screen.innerHTML = "";
  print(`
secure-shell initialized

Type 'help' to see available commands.
`);
}

const commands = {
  help: `
Available commands:

personal
certs
labs
splunk
experience
education
clear
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

TryHackMe: Top 2%
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

Type 'splunk' to view detailed Splunk labs.
`,

  splunk: `
Opening Splunk Labs...

👉 https://YOUR_USERNAME.github.io/terminal-portfolio/splunk.html
`,

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

boot();

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    print(`varun@sec-lab:~$ ${cmd}`);

    if (commands[cmd]) {
      if (commands[cmd] === "CLEAR") {
        boot();
      } else {
        print(commands[cmd]);
      }
    } else {
      print(`command not found: ${cmd}
Type 'help' to list commands.`);
    }

    input.value = "";
    screen.scrollTop = screen.scrollHeight;
  }
});

function print(text) {
  const div = document.createElement("div");
  div.className = "output";
  div.textContent = text;
  screen.appendChild(div);
}
