import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
                    ...fontFamily.sans
                ],
  			poppins: [
  				'var(--font-poppins)',
                    ...fontFamily.sans
                ],
  			lexend: [
  				'var(--font-lexend)',
                    ...fontFamily.sans
                ],
  			spaceGrotesk: [
  				'var(--font-spaceGrotesk)',
                    ...fontFamily.sans
                ],
  			manrope: [
  				'var(--font-manrope)',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			primary: 'var(--color-primary)',
  			dark: 'var(--color-dark)',
  			secondary: 'var(--color-secondary)',
  			main: 'var(--color-main)',
  			accentGreen: 'var(--color-accent-green)',
  			accentOrange: 'var(--color-accent-orange)',
  			accentRed: 'var(--color-accent-red)',
  			textPrimary: 'var(--color-text-primary)',
  			textSecondary: 'var(--color-text-secondary)',
  			textInverse: 'var(--color-text-inverse)',
  			bgLight: 'var(--color-bg-light)',
  			bgDark: 'var(--color-bg-dark)',
  			bgHover: 'var(--color-bg-hover)',
  			border: 'var(--color-border)',
  			borderDark: 'var(--color-border-dark)',
  			shadowLight: 'var(--color-shadow-light)',
  			shadowDark: 'var(--color-shadow-dark)',
  			highlight: 'var(--color-highlight)',
  			muted: 'var(--color-muted)',
  			info: 'var(--color-info)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			mutedUI: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
