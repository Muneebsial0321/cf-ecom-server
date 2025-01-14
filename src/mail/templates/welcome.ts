const welcome = () => {
    console.log("a user has just signedup")
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fff;
      color: #000;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .email-container {
      /* width: 100%; */
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid black;
    }
    .header, .footer {
      background-color: #000;
      color: #fff;
      padding: 20px;
      text-align: center;
      border-radius: 10px;
    }
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .emoji {
      font-size: 48px;
      padding-block: 2rem;
    }
    .footer {
      font-size: 14px;
      color: #ccc;
    }
    .footer a {
      color: #ccc;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <h1>Welcome Aboard! 🎉</h1>
    </div>

    <!-- Body Content -->
    <p>We're excited to have you with us! Thank you for joining our community. Stay tuned for some amazing updates. 🚀</p>
    <div class="emoji">
    <center>  ✨👋 </center>
    </div>

    <!-- Footer -->
    <div class="footer">
      If you have any questions, feel free to reach out to us anytime!<br>
      <a href="mailto:support@example.com">support@example.com</a>
    </div>
  </div>

</body>
</html>    
    `
}
export { welcome }