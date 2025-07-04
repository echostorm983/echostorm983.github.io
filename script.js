function opengames() {
            window.open('/games', '_blank'); // Change the URL to your desired link
        }
function openchat() {
            window.open('/chat', '_blank'); // Change the URL to your desired link
        }





        const sentences = [
            "The quick brown fox jumps over the lazy dog.",
            "*silent moment of cringe*",
            "To be or not to be.",
            "All that glitters is not gold. -Random person, 2018.",
            "It's 2025 and you don't know how to code?",
            "If there are 26 sheep and 10 goats on a ship, how old is the ship's captain?",
            "Never gonna give you up, never gonna let you down."
        ];

        // Function to get a random sentence
        function getRandomSentence() {
            const randomIndex = Math.floor(Math.random() * sentences.length);
            return sentences[randomIndex];
        }

        // Function to display the random sentence
        function displayRandomSentence() {
            document.getElementById("randomSentence").innerText = getRandomSentence();
        }

        // Call the function when the page loads
        window.onload = displayRandomSentence;


