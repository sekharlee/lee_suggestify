# lee_suggestify
A simple extension that suggests payloads based on input

It will suggest the payloads based on the input typed in input boxes. 

  ## If user type alert in the input box, it will suggest the payloads which contains alert keyword:
![alert_screenshot](https://user-images.githubusercontent.com/51740389/213888672-9ae37f0f-849b-4fcc-852a-b3f3c3b8c3f1.png)

  ## For login sql:
  ![login_sql](https://user-images.githubusercontent.com/51740389/213888761-b99457f5-9cb8-45c0-b21e-a23bee89cece.png)
	
  ## For Template Injection:
  ![template_injection](https://user-images.githubusercontent.com/51740389/213888783-6875e486-f22e-4b88-86dd-a37faae20bb0.png)

  ## For Installation
	
	Clone the Repo git clone https://github.com/sekharlee/lee_suggestify.git
	Go to chrome://extensions/ in chrome browser, enable developer mode on the right top corner
	Select Loadunpacked and select Lee_suggestify folder
	Enable the extension from the chrome extension bar

  ## Features:
	Use only input data from the input tags
	It contains sql, login sql, SSTI, XSS, CSV injection Payloads

  ## Upcoming Features:
	Take input from textarea tag
	Show the payloads based on vulnerability name it is typed like xss, sql etc
	Upload own/latest payloads by the user.
