// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5271ff',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#f8f9fa',
                    foreground: '#6c757d',
                },
                muted: {
                    DEFAULT: '#f1f3f4',
                    foreground: '#6c757d',
                },
                border: '#e9ecef',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
        },
    },
}