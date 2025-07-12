// Typewriter animation for header
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-text');
    
    if (!typewriterElement) {
        console.error('Typewriter element not found');
        return;
    }
    
    const phrases = [
        "Podcast Production",
        "Sales Enablement",
        "ABM Ads",
        "SEO",
        "Content Creation",
        "Personal Branding",
        "Event Marketing",
        "Social Media Strategy",
        "Video Production",
        "Brand Development"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    let typingSpeed = 100;
    const promptText = ":> ";
    
    function typeWriter() {
        if (!typewriterElement) return;
        
        const currentPhrase = phrases[phraseIndex];
        
        if (isWaiting) {
            return;
        }
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 50;
        } else {
            charIndex++;
            typingSpeed = 100;
        }
        
        typewriterElement.textContent = promptText + currentPhrase.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeWriter();
            }, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        
        if (!isWaiting) {
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Initialize with prompt text
    typewriterElement.textContent = promptText;
    
    // Start animation
    setTimeout(typeWriter, 1000);
});