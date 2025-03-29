const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;

// Settting up the logger with Winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Middleware to the all log every incoming request
app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.originalUrl}`, {
        ip: req.ip,
        headers: req.headers,
    });
    next();
});

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition operation: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    logger.info(`Subtraction operation: ${num1} - ${num2} = ${result}`);
    res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    logger.info(`Multiplication operation: ${num1} * ${num2} = ${result}`);
    res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    if (parseFloat(num2) === 0) {
        logger.error('Division by zero attempt');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    logger.info(`Division operation: ${num1} / ${num2} = ${result}`);
    res.json({ result });
});

// New Operation: Exponentiation (Power)
app.get('/power', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    const result = Math.pow(parseFloat(num1), parseFloat(num2));
    logger.info(`Exponentiation operation: ${num1} ^ ${num2} = ${result}`);
    res.json({ result });
});

// Square Root
app.get('/sqrt', (req, res) => {
    const { num1 } = req.query;
    if (isNaN(num1)) {
        logger.error(`Invalid input: ${num1}`);
        return res.status(400).json({ error: 'Invalid number' });
    }
    if (parseFloat(num1) < 0) {
        logger.error('Square root of a negative number');
        return res.status(400).json({ error: 'Cannot calculate square root of a negative number' });
    }
    const result = Math.sqrt(parseFloat(num1));
    logger.info(`Square root operation: √${num1} = ${result}`);
    res.json({ result });
});

// Modulo
app.get('/mod', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    if (parseFloat(num2) === 0) {
        logger.error('Modulo by zero attempt');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(num1) % parseFloat(num2);
    logger.info(`Modulo operation: ${num1} % ${num2} = ${result}`);
    res.json({ result });
});

// Absolute Value
app.get('/abs', (req, res) => {
    const { num1 } = req.query;
    if (isNaN(num1)) {
        logger.error(`Invalid input: ${num1}`);
        return res.status(400).json({ error: 'Invalid number' });
    }
    const result = Math.abs(parseFloat(num1));
    logger.info(`Absolute value operation: |${num1}| = ${result}`);
    res.json({ result });
});

// Factorial
app.get('/factorial', (req, res) => {
    const { num1 } = req.query;
    if (isNaN(num1) || parseFloat(num1) < 0 || !Number.isInteger(parseFloat(num1))) {
        logger.error(`Invalid input: ${num1}`);
        return res.status(400).json({ error: 'Please provide a non-negative integer' });
    }
    let result = 1;
    for (let i = 1; i <= parseInt(num1); i++) {
        result *= i;
    }
    logger.info(`Factorial operation: ${num1}! = ${result}`);
    res.json({ result });
});

// Logarithm (Base 10)
app.get('/log', (req, res) => {
    const { num1 } = req.query;
    if (isNaN(num1) || parseFloat(num1) <= 0) {
        logger.error(`Invalid input: ${num1}`);
        return res.status(400).json({ error: 'Please provide a number greater than zero' });
    }
    const result = Math.log10(parseFloat(num1));
    logger.info(`Logarithm (base 10) operation: log(${num1}) = ${result}`);
    res.json({ result });
});

app.listen(port, () => {
    logger.info(`Calculator microservice listening at http://localhost:${port}`);
});
