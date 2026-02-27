// Simulated AI Personalization Engine

const headline = document.getElementById("dynamicHeadline");
const subtext = document.getElementById("dynamicSubtext");
const cta = document.getElementById("dynamicCTA");

// Detect traffic source (simulated via URL parameter)
const params = new URLSearchParams(window.location.search);
const source = params.get("source");

// Detect time of day
const hour = new Date().getHours();

function personalize() {

    // Email Campaign Visitors
    if (source === "email") {
        headline.textContent = "Welcome Back! Ready to Increase Conversions?";
        subtext.textContent = "Your exclusive AI growth strategy is waiting.";
        cta.textContent = "Unlock My Offer";
    }

    // Ad Campaign Visitors
    else if (source === "ad") {
        headline.textContent = "Turn Ad Clicks Into Paying Customers";
        subtext.textContent = "AI-personalized landing pages built for high ROI.";
        cta.textContent = "Start My Free Trial";
    }

    // Morning Visitors
    else if (hour < 12) {
        headline.textContent = "Start Your Day With Smarter Conversions";
        subtext.textContent = "AI-driven personalization working 24/7 for you.";
        cta.textContent = "Boost My Sales Today";
    }

    // Default
    else {
        headline.textContent = "Landing Pages That Think For You";
        subtext.textContent = "AI that personalizes headlines, images, and CTAs in real-time.";
        cta.textContent = "Get Started";
    }
}

personalize();
