// Tailwind configuration with new brand colors
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF6B5A',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#F9FAFB',
                    foreground: '#1A1A1A',
                },
                accent: {
                    DEFAULT: '#FF5A47',
                    foreground: '#1A1A1A',
                },
                muted: {
                    DEFAULT: '#f8f9fa',
                    foreground: '#6c757d',
                },
                border: '#E5E7EB',
                dark: '#000000',
                'gray-800': '#1F2937',
                'gray-600': '#4B5563',
                'gray-400': '#9CA3AF',
                'gray-200': '#E5E7EB',
                'gray-50': '#F9FAFB',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Satoshi', 'Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
        },
    },
}