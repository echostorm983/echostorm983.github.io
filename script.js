function opengames() {
            window.open('/games', '_blank'); // Change the URL to your desired link
        }
function openchat() {
            window.open('/chat', '_blank'); // Change the URL to your desired link
        }





        const sentences = [
            "The quick brown fox jumps over the lazy dog.",
            "*Silent moment of cringe*",
            "To be or not to be.",
            "All that glitters is not gold. -Random person, 2018.",
            "It's 2025 and you don't know how to code?",
            "If there are 26 sheep and 10 goats on a ship, how old is the ship's captain?",
            "Never gonna give you up, never gonna let you down.",
            "9+10 = ?",
            "2+2=5",
            "If you drop a sponge on the floor, is the floor clean or is the sponge dirty?",
            "Sorry I got too lazy to code this message :)",
            "Dont press those buttons.",
            "I call it coding. (ryhmes with grug)",
            "https://music.youtube.com/watch?v=LQ4w9xiHkrY",
            "Fire in the hole :)",
            "Why did you go to the website?",
            "How was the fall?",
            "What sound does a wallet make?",
            "Go play neal.fun, it is a fun website.",
            "Butter Dawg, Dawg wit da butter onem."
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


