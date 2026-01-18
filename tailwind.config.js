/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#050505', // Deepest Black
                charcoal: '#1a1a1a', // Off-Black
                primary: '#8B5E3C', // Semi-Dark Brown / Bronze
                secondary: '#A0522D', // Sienna/Copper
                glass: 'rgba(139, 94, 60, 0.05)', // Warm Tinted Glass
                'glass-heavy': 'rgba(139, 94, 60, 0.1)',
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
                mono: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
