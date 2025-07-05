// Tailwind configuration with new brand colors
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#B8A2FF',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#FAF9F6',
                    foreground: '#1A1A1A',
                },
                accent: {
                    DEFAULT: '#EAEEAA',
                    foreground: '#1A1A1A',
                },
                muted: {
                    DEFAULT: '#f8f9fa',
                    foreground: '#6c757d',
                },
                border: '#e9ecef',
                dark: '#1A1A1A',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Satoshi', 'Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
        },
    },
}