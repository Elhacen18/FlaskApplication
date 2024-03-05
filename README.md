# Flask and React.js Application

This project demonstrates how to build a full-stack web application that upload csv file using Flask as the backend framework and React.js as the frontend library.

## Prerequisites

Before running this application, make sure you have the following installed:

- Python 3.x
- Node.js
- npm (Node Package Manager)

## Backend Setup (Flask)
Assuming you are using Window OS.
1. Navigate to the `BackEnd` directory using Command Prompt

    
    cd BackEnd
    
    Create your python virtual enviroment in within BackEnd directory using the following command 
    ```
    python -m venv nameofyourvenv
    ```
        # Activate the virtual environment

    ```
    nameofyourvenv\Scripts\activate 
    ```
if you clone this repo, run these command 
    ```
    python -m venv nameofyourvenv 
    ````
    # Activate the virtual environment

    ```
    nameofyourvenv\Scripts\activate  
    ```
    # Install dependencies from requirements.txt
    ```
    pip install -r requirements.txt  
    ```
2. Install Flask and required dependencies:

    ```
    pip install flask
    ```

3. Run the Flask server:

    ```
    flask --app server run  
    ```

   The Flask server will start running at `http://localhost:5000`.

## Frontend Setup (React.js)

1. Navigate to the `FrontEnd\client` directory:

    ```
    cd FrontEnd
    cd client
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Run the React development server:

    ```
    npm start
    ```

   The React development server will start running at `http://localhost:3000`.

## Running the Application

Once both the backend (Flask) and frontend (React.js) servers are running, you can access the application by visiting `http://localhost:3000` in your web browser.

## Folder Structure

- `backend/`: Contains Flask backend code.
- `frontend/client`: Contains React.js frontend code.
When you visit `http://localhost:3000`and upload csv file and click submit, you will notice the name of the file you uploaded is stored in the directory 
BackEnd\FileLoaded. If you uploade the same file, it would overide the name in the FileLoaded

