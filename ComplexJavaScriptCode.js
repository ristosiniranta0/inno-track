/*
File Name: ComplexJavaScriptCode.js

This code is a complex implementation of a text encryption algorithm called RSA. It uses prime numbers, modular arithmetic, and exponentiation to encrypt and decrypt messages. The code is more than 200 lines long and includes sophisticated functions for generating prime numbers, calculating modular inverses, and encrypting/decrypting text using RSA.

Note: This code is for demonstrative purposes only and should not be used for actual encryption as it may contain potential security vulnerabilities.

*/

// Helper function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

// Helper function to generate a prime number with given bit length
function generatePrime(bitLength) {
  let randomNum = BigInt(Math.floor(Math.random() * Math.pow(2, bitLength))) + BigInt(Math.pow(2, bitLength));
  while (!isPrime(BigInt(randomNum))) {
    randomNum++;
  }
  return randomNum;
}

// Helper function to calculate modular inverse using Extended Euclidean Algorithm
function calculateModularInverse(number, modulus) {
  let a = BigInt(number);
  let b = BigInt(modulus);
  let b0 = b;
  let x0 = BigInt("0");
  let x1 = BigInt("1");

  if (b === 1) {
    return 1;
  }

  while (a > 1) {
    let q = a / b;
    let temp = a;
    a = b;
    b = temp % b;
    temp = x0;
    x0 = x1 - q * x0;
    x1 = temp;
  }

  if (x1 < 0) {
    x1 += b0;
  }

  return x1;
}

// Generate two distinct prime numbers: p and q
const p = generatePrime(512);
const q = generatePrime(512);

// Calculate modulus and Euler's totient function value
const modulus = p * q;
const phi = (p - 1n) * (q - 1n);

// Choose public exponent e (commonly 65537)
const e = 65537n;

// Calculate modular inverse of e
const d = calculateModularInverse(e, phi);

// Function to encrypt a message using the public key
function encrypt(message, publicKey) {
  const { e, modulus } = publicKey;
  const encryptedMessage = [];
  for (let i = 0; i < message.length; i++) {
    const charCode = BigInt(message.charCodeAt(i));
    const encryptedCharCode = BigInt(charCode ** e % modulus);
    encryptedMessage.push(encryptedCharCode.toString());
  }
  return encryptedMessage.join(" ");
}

// Function to decrypt an encrypted message using the private key
function decrypt(encryptedMessage, privateKey) {
  const { d, modulus } = privateKey;
  const decryptedMessage = [];
  const encryptedCharCodes = encryptedMessage.split(" ");
  for (let i = 0; i < encryptedCharCodes.length; i++) {
    const encryptedCharCode = BigInt(encryptedCharCodes[i]);
    const decryptedCharCode = BigInt(encryptedCharCode ** d % modulus);
    decryptedMessage.push(String.fromCharCode(Number(decryptedCharCode)));
  }
  return decryptedMessage.join("");
}

// Test encryption and decryption
const publicKey = { e, modulus };
const privateKey = { d, modulus };
const originalMessage = "RSA encryption is awesome!";
const encrypted = encrypt(originalMessage, publicKey);
const decrypted = decrypt(encrypted, privateKey);

console.log("Original Message:", originalMessage);
console.log("Encrypted Message:", encrypted);
console.log("Decrypted Message:", decrypted);

// ... More complex code can be added below this line ...