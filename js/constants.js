const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  ["what is your name", "your name", "may i know your name", "what do you call yourself"],
  ["what is your education", "where did you study", "what is your degree"],
  ["what are your skills", "what are your technical skills", "what languages do you know", "what frameworks do you use"],
  ["what is your experience", "where have you worked", "what was your role at EISystems Pvt. Ltd"],
  ["tell me about your projects", "what projects have you worked on", "what is your Image Caption Generator project", "what is CodeSync"],
  ["what are your achievements", "what awards have you won", "tell me about your Intel OneApi Hackathon experience"],
  ["tell me about your positions of responsibility", "what roles have you held", "what positions have you been a part of"],
  ["what are your hobbies", "what do you like to do", "what are your interests"]
];

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "I'm doing great, thanks for asking! How about you?",
    "I'm doing well, and you?",
    "I'm fine, how are you?"
  ],
  ["I am a bot, here to talk about my resume and related details."],
  ["I was created by developers at OpenAI."],
  ["My name is Rahul Kumar."],
  ["I completed my B.Tech in Computer Science from NIT Patna."],
  [
    "I have experience with C, C++, HTML, JavaScript, and Python.",
    "I am familiar with frameworks like ReactJS and Bootstrap.",
    "I am skilled in using developer tools like Git and GitHub.",
    "I have worked with databases like MySQL and MongoDB."
  ],
  [
    "I worked as a Frontend Web Developer at EISystems Pvt. Ltd.",
    "I developed a sleek, Netflix-inspired UI and worked with technologies like HTML, CSS, JavaScript, ReactJs, and Tailwind."
  ],
  [
    "One of my projects is an Image Caption Generator using CNN for image processing and LSTM for generating captions.",
    "I also worked on CodeSync, a real-time code editor for practicing coding with friends, built with technologies like ReactJs and NodeJs."
  ],
  [
    "I was a finalist in the Intel OneApi Hackathon for a project based on supervised machine learning in October 2021."
  ],
  [
    "I was a volunteer at NSS Patna and a Technical Team Member at the Robotics Club, NIT Patna."
  ],
  [
    "I enjoy playing Table Tennis, Cricket, and reading research papers."
  ]
];

// Random response for any other user input

const alternative = [
  "I can only talk about my resume. Feel free to ask about it!",
  "Ask me something about my education, experience, or projects!",
  "I'm happy to share details about my resume!",
  "Please ask me more about my skills or experiences."
];
