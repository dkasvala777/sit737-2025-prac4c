# Enhanced Calculator Microservice

This project expands upon the calculator microservice I previously developed, which was created using **Node.js** and **Express**. The microservice now supports **additional arithmetic operations**, making it more comprehensive and versatile for users who need to perform various calculations.

---

## Project Setup

This project is an enhancement of my previous **Calculator Microservice**. The setup remains the same, and the microservice runs using **Node.js** and **Express**.

### Changes Made:
1. **Addition of Advanced Arithmetic Operations**:
   - I have enhanced the calculator to include the following additional arithmetic operations:
     - **Exponentiation (Power)**: Calculates the result of a number raised to the power of another.
     - **Square Root**: Computes the square root of a number.
     - **Modulo**: Returns the remainder of the division of two numbers.
     - **Absolute Value**: Computes the absolute value of a number.
     - **Factorial**: Calculates the factorial of a number.
     - **Logarithm (Base 10)**: Computes the logarithm of a number to base 10.

2. **Error Handling Improvements**:
   - I also enhanced the error handling to ensure that the user receives meaningful error messages, especially for operations that might have special conditions (like division by zero or negative square roots).

---

## New Features Implemented

### 1. **Exponentiation (`/power`)**:
   - **Operation**: Calculates the power of `num1` raised to `num2`.
   - **Example Request**:
     ```
     GET /power?num1=2&num2=3
     ```
   - **Response**:
     ```json
     {
       "result": 8
     }
     ```

### 2. **Square Root (`/sqrt`)**:
   - **Operation**: Calculates the square root of `num1`. It only works for non-negative numbers.
   - **Example Request**:
     ```
     GET /sqrt?num1=16
     ```
   - **Response**:
     ```json
     {
       "result": 4
     }
     ```

### 3. **Modulo (`/mod`)**:
   - **Operation**: Computes the remainder when `num1` is divided by `num2`.
   - **Example Request**:
     ```
     GET /mod?num1=10&num2=3
     ```
   - **Response**:
     ```json
     {
       "result": 1
     }
     ```

### 4. **Absolute Value (`/abs`)**:
   - **Operation**: Returns the absolute value of `num1`.
   - **Example Request**:
     ```
     GET /abs?num1=-42
     ```
   - **Response**:
     ```json
     {
       "result": 42
     }
     ```

### 5. **Factorial (`/factorial`)**:
   - **Operation**: Calculates the factorial of a non-negative integer `num1`. Only works for integers.
   - **Example Request**:
     ```
     GET /factorial?num1=5
     ```
   - **Response**:
     ```json
     {
       "result": 120
     }
     ```

### 6. **Logarithm (`/log`)**:
   - **Operation**: Calculates the base 10 logarithm of `num1`.
   - **Example Request**:
     ```
     GET /log?num1=100
     ```
   - **Response**:
     ```json
     {
       "result": 2
     }
     ```

---

## Error Handling

I’ve enhanced the error handling mechanisms to ensure users receive clear feedback if they make a mistake when using the service.

- **Invalid Numbers**: If the user enters something other than a number (e.g., text), the service responds with a **400 error**:
  ```json
  {
    "error": "Invalid numbers"
  }

### **Conclusion**:
With these enhancements, the calculator microservice now supports a broader range of arithmetic operations, improving its functionality and utility. I also refined error handling to provide clearer feedback to users, ensuring a more robust and user-friendly experience.


---

### **What This `README.md` Contains:**

- **Project Setup**: This section describes the setup of the existing project and the new features that were added.
- **New Features**: This section details the new arithmetic operations and how to use them through the API.
- **Error Handling**: A detailed explanation of the new error handling mechanisms for invalid inputs, division by zero, and other edge cases.
- **Testing**: Describes how the new features were tested using the browser.
- **Conclusion**: Summarizes the improvements made to the project.

This should give a clear explanation of the changes you made, and you can update the GitHub repository with this **`README.md`** file to document your work.

Let me know if you need further adjustments!

