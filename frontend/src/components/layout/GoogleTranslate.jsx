import { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        // Prevent duplicate script injection
        if (document.getElementById("google-translate-script")) return;

        // Define init function on window
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "hi,bn,or,ta,te,kn,ml,gu,pa,mr,as,sa",
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            }
        };

        // Create script
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup
        // return () => {
        //     const script = document.getElementById("google-translate-script");
        //     if (script) script.remove();
        //     if (window.googleTranslateElementInit) delete window.googleTranslateElementInit;
        // };
    }, []);

    return (
        <div
            id="google_translate_element"
            style={{
                position: "fixed", // optional: change to "relative" if you want normal flow
                top: 12,
                right: 24,
                zIndex: 2000,
                background: "transparent",
            }}
        />
    );
};

export default GoogleTranslate;
