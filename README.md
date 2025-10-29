# Paynect

💳 **Paynect** is a full-stack payment management platform that allows users to make, track, and manage payments in real time. Built with **Node.js**, **Express**, **MySQL**, and a responsive frontend, it provides a simple and secure interface for individuals and small businesses.

## Features

- **Make Payments**: Enter payer name and amount; payments are securely recorded in the database.
- **Dashboard**: View total payments, total amounts, and recent transactions.
- **Transactions**: Retrieve and view all past payments.
- **Settings**: Configure basic settings (expandable for user preferences).
- **Responsive Design**: Works on desktop and mobile devices.
- **Modern UI**: Hero section, feature cards, and calls-to-action for a professional look.

## Technologies Used

- **Backend**: Node.js, Express.js, MySQL
- **Frontend**: HTML5, CSS3, JavaScript
- **Database**: MySQL
- **Other Tools**: dotenv, cors

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/ess-142/paynect.git
cd paynect

npm install

Create a .env file in the root directory:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=paynect_db
PORT=3000


PROJECT STRUCTURE:
Paynect/
│
├─ public/
│  ├─ images/
│  ├─ pages/
│  │  ├─ dashboard.html
│  │  ├─ settings.html
│  │  ├─ transactions.html
│  │  └─ payments.html
│  ├─ style.css
│  └─ index.html
│
├─ routes/
│  └─ paymentRoutes.js
├─ config/
│  └─ db.js
├─ app.js
├─ server.js
├─ .env
├─ package.json
└─ README.md

